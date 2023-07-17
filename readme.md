//# Bonus: Wishlist, Current reading, Mark as finished features have to add.

//@ Load data from local storage on component mount
// useEffect(() => {
// const storedData = localStorage.getItem(`book_${_id}`);
// if (storedData) {
// const { wishlist, currentReading, complete } = JSON.parse(storedData);
// setWishlist(wishlist);
// setCurrentReading(currentReading);
// setComplete(complete);
// }
// }, []);

//@ Save data to local storage whenever it changes
// useEffect(() => {
// localStorage.setItem(
// `book_${_id}`,
// JSON.stringify({ wishlist, currentReading, complete })
// );
// }, [wishlist, currentReading, complete]);
