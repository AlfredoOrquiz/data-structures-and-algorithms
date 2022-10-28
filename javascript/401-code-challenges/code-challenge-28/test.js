const Movies = require("./movies.js");
const { inGenre, sortTitle, sortYear, removeArticles } = require("./sort.js");
const yearSort = require("./yearSort");


describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Untouchables",
    ]);
  });

  it("can use bubbleSort", () => {
    const movies = yearSort(Movies);
    console.log(movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Untouchables",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "The Untouchables",
      "Valkyrie",
    ]);
  });

  it("can sort movies by title", () => {
    const word = "the cat";
    let newWord=removeArticles(word);
    console.log(newWord);

  });

  it("can find movies by genre", () => {
    const movies = sortYear(inGenre(Movies, "Adventure"));
    expect(movies.map((m) => m.title)).toEqual([
      "Crocodile Dundee",
      "Stardust",
    ]);
  });
});
