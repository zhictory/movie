const movieObj = document.querySelector("#j_movie");
const movieListObj = document.querySelector("#j_movie-list");
const canvas = document.querySelector(".pieces-canvas");
let movieWon = {},
  movies = [],
  tid = null;

const fetchMovieList = () => {
  fetch("http://localhost:9999/api/movie/list")
    .then(res => res.json())
    .then(data => {
      movies = data;
      movieListObj.innerHTML = "";
      for (const key in movies) {
        !movies[key].watched
          ? $(movieListObj).append(
              $(
                `<li class="movie-item">《${
                  movies[key].title
                }》<span class="iconfont icon-check-circle"></span><span class="iconfont icon-close-circle"></span></li>`
              )
            )
          : $(movieListObj).append(
              $(
                `<li class="movie-item is-watched">《${
                  movies[key].title
                }》<span class="iconfont icon-check-circle"></span><span class="iconfont icon-close-circle"></span></li>`
              )
            );
      }
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      clearInterval(tid);
      tid = null;
      tid = lottery();
    });
};
fetchMovieList();
document.querySelector("#j_movie-list").addEventListener("click", e => {
  if (!e.target.classList.contains("movie-item")) {
    return false;
  }
  e.target.classList.toggle("is-watched");
  const index = Array.from(document.querySelectorAll(".movie-item")).indexOf(
    e.target
  );
  fetch("http://localhost:9999/api/movie/watched", {
    body: JSON.stringify({
      title: movies[index].title,
      watched: !movies[index].watched
    }),
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    fetchMovieList();
    // e.target.classList.contains("is-watched");
  });
  if (filterMovie().length && !tid) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    tid = lottery();
  }
});
document.querySelector("#j_movie-list").addEventListener("click", e => {
  if (!e.target.classList.contains("icon-close-circle")) {
    return false;
  }
  const index = Array.from(document.querySelectorAll(".movie-item")).indexOf(
    e.target.parentNode
  );
  fetch("http://localhost:9999/api/movie/delete", {
    body: JSON.stringify({
      title: movies[index].title
    }),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    fetchMovieList();
  });
});
function getRandom(lowerValue, upperValue) {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
let filterMovie = () => {
  return movies.filter(movie => {
    return !movie.watched;
  });
};
let lottery = () =>
  setInterval(() => {
    const filter = filterMovie();
    if (filter.length) {
      movieWon = filter[getRandom(0, filter.length - 1)];
    } else {
      movieWon = {
        title: "电影都看完了，要不要做点别的事",
        watched: false,
        image:
          "http://wx4.sinaimg.cn/large/ceeb653ely1fo0fg51fwmj20b40b4mzu.jpg"
      };
      clearInterval(tid);
      tid = null;
      piecesLottery(movieWon);
    }
    movieObj.innerHTML = movieWon.title;
  }, 10);
let piecesLottery = movie => {
  // Options for customization, see full list below
  const image = new Image();
  image.src = movie.image;
  image.onload = () => {
    canvas.setAttribute("width", image.width);
    canvas.setAttribute("height", image.height);
    var options = {
      canvas: ".pieces-canvas",
      image: image,
      animation: {
        duration: 800,
        delay: 0,
        easing: "easeInOutBack"
      },
      piecesWidth: 30,
      piecesSpacing: 0
    };

    // Initialize a new instance, by default the pieces will be 'hidden'
    var piece = new Pieces(options);

    // Show pieces using default options. See the full list of available operations below.
    piece.showPieces();
  };
};
document.querySelector("#j_stop").addEventListener("click", () => {
  piecesLottery(movieWon);
  clearInterval(tid);
  tid = null;
});
document.querySelector("#j_start").addEventListener("click", () => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  !tid && (tid = lottery());
});
const inputTitle = document.querySelector("#j_movie-title");
const inputImage = document.querySelector("#j_movie-image");
document.querySelector("#j_movie-add").addEventListener("click", () => {
  const title = inputTitle.value;
  const image = inputImage.value;
  title &&
    image &&
    fetch("http://localhost:9999/api/movie/add", {
      body: JSON.stringify({
        title: title,
        watched: false,
        image: image
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      fetchMovieList();
    });
});
