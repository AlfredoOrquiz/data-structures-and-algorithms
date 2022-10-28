'use strict';
const yearSort = require("./yearSort");

function sortYear(movies) {
  let moviesCopy = movies;
  moviesCopy = yearSort(moviesCopy);
  console.log(moviesCopy);
  return moviesCopy;
}

function sortTitle(movies) {
  console.log(movies);
  return movies.sort(compareByTitle);

}

function compareByTitle(a, b) {
  const cloneA = Object.assign({}, a);
  const cloneB = Object.assign({}, b);
  let titleA = cloneA.title.toLowerCase();
  titleA= removeArticles(titleA);
  let titleB = cloneB.title.toLowerCase();
  titleB=removeArticles(titleB);
  if (titleA < titleB) {
    return -1;
  }

  if (titleA > titleB) {
    return 1;
  }

  return 0;

}

function removeArticles(str) {
  if (str.startsWith("the")){
    return str.slice(4);
  }
  return str;
}
module.exports = {
  sortYear,
  sortTitle,
  removeArticles,
};
