import { useParams } from "react-router-dom";
import useAllBooks from "./useAllBooks";
import { useEffect, useState } from "react";
import axios from "axios";

const useHandelQuantity = () => {

    // go to db these information
    // recent date, borrowed date, 
    // single book
    // user email, name
    // quantity update


    const currentTime = new Date()
    const [allBooksInfo, setAllBooksInfo] = useState([])
    // console.log(allBooksInfo);
    const [borrowedBook, setBorrowedBook] = useState({})
    // console.log(borrowedBook);

    const [newBorrowedBook, setNewBorrowedBook] = useState(borrowedBook)
    // console.log(newBorrowedBook);

    const { id } = useParams();
    const singleId = parseInt(id)
    // console.log(singleId);
    // const [allBooksInfo] = useAllBooks();
    // console.log(allBooksInfo);
    const year = currentTime.getFullYear().toString();
    const month = currentTime.getMonth().toString();
    const date = currentTime.getDate().toString();
    // console.log(year, month, date);
    let recentDateString = []

    // console.log(recentDate);
    if (recentDateString !== '') {
        recentDateString.push(year, month, date)
        recentDateString.join('-')
    }
    // console.log(recentDate);
    const recentDate = recentDateString.toString()
    const recentArrDate = [recentDate.split(',').join('-')].toString();
    // console.log(recentArrDate);

    // get all books from /api/v1/borrow-books
    useEffect(() => {
        fetch('http://localhost:5008/api/v1/borrow-books')
            .then(res => res.json())
            .then(data => {
                setAllBooksInfo(data)
                // console.log(data)
            })
    }, [])
    // console.log(allBooksInfo.books);


    useEffect(() => {
        if (JSON.stringify(allBooksInfo) !== '[]') {
            const some = allBooksInfo && allBooksInfo.map(book => book.books.find(aBook => aBook.id === singleId))
            // console.log(some);

            // const newBook = some.find(aBook => ;)

            const all = some && some.find(aBook => {
                if (JSON.stringify(aBook) !== 'undefined') {
                    return aBook;
                }
            })
            // console.log(all);
            setBorrowedBook(all)
            // if (typeof singleBook !== 'undefined') {
            //     setBorrowedBook(singleBook)
            // }
        }


    }, [allBooksInfo, singleId])
    // console.log(borrowedBook);
    // destructuring
    const { image, name, author_name } = borrowedBook;
    // console.log(image, name, author_name);
    const quantityOfBook = borrowedBook && borrowedBook?.quantity;
    // console.log(quantityOfBook);



    // console.log(borrowedBook);



    // borrow handeler
    const borrowHandeler = e => {
        e.preventDefault();
        const returnDate = e.target.returnDate.value;

        // console.log(singleId, 'recent Date:', recentArrDate, 'return date:', returnDate);
        const decreaseBook = quantityOfBook - 1;

        // console.log(quantity);
        const newObj = { id: id, image: image, name: name, author_name: author_name, quantity: decreaseBook }
        // console.log(newObj);
        // newBorrowedBook.push(newObj)
        setNewBorrowedBook(newObj)

        // patch
        if (!newObj) {
            fetch('http://localhost:5008/api/v1/borrow-books', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newObj)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        else {
            console.log('data already exist')
        }


        // axios.patch('http://localhost:5008/api/v1/borrow-books', newBorrowedBook)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err => console.log(err))

    }





    // console.log(newBorrowedBook);


    return { borrowedBook, newBorrowedBook, borrowHandeler }
};

export default useHandelQuantity;