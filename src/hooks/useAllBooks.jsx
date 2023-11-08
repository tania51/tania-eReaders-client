
import useBookInfo from './useBookInfo';

const useAllBooks = () => {

    const allBooksInfo = [];
    // console.log(singleId);

    const [allBooks] = useBookInfo()
    // console.log(allBooks);
    const allIds = allBooks.map(book => {
        const bookArr = book?.books;

        const ids = bookArr.map(singleBook => {
            const book = singleBook;
            allBooksInfo.push(book)
        })
    })

    return [allBooksInfo];
};

export default useAllBooks;