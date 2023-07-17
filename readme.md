1. Implement search features based on author, title, genre, publication Year.

//# Bonus: Wishlist, Current reading, Mark as finished features have to add.

    //@ Search filters code :

    // const handleSearchFilterChange = (
    //   event: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //   dispatch(setSearchFilter(event.target.value));
    // };
    // // Apply the search filter
    // if (searchFilter) {
    //   booksData = booksData.filter((book: any) =>
    //     book.title.toLowerCase().includes(searchFilter.toLowerCase())
    //   );
    // }

    // // Apply the genre filter if enabled
    // if (isFilteringGenre) {
    //   booksData = booksData.filter((item: any) => {
    //     if (genre && item.genre !== genre) {
    //       return false;
    //     }
    //     return true;
    //   });
    //   // Sorting logic...
    // }

    // Apply the publication year filter if enabled

//@ Filter for book genre:
if (isFilteringGenre) {
booksData = booksData
.filter((item: any) => {
if (genre && item.genre !== genre) {
return false;
}
return true;
})
.sort((a: any, b: any) => {
if (a.title < b.title) {
return -1;
}
if (a.title > b.title) {
return 1;
}
return 0;
});
}

const handleChangeGenre = (genre: string) => {
setGenre(genre);
};

const uniqueGenres =
data && Array.from(new Set(data.map((item: any) => item.genre))).sort();

//@ FIlter for publicationYear:
if (isFilteringYear) {
booksData = booksData
.filter((item: any) => {
if (publicationYear && item.publicationYear !== publicationYear) {
return false;
}
return true;
})
.sort((a: any, b: any) => {
if (a.title < b.title) {
return -1;
}
if (a.title > b.title) {
return 1;
}
return 0;
});
}

const handleChangePublicationYear = (year: string) => {
setPublicationYear(year);
};

const uniqueYear =
data &&
Array.from(new Set(data.map((item: any) => item.publicationYear))).sort(
(a, b) => b - a
);

if (isFilteringYear) {
booksData = booksData.filter((item: any) => {
if (publicationYear && item.publicationYear !== publicationYear) {
return false;
}
return true;
});
}
