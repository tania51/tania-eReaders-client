
// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Swal from "sweetalert2";
import Title from "../components/Title";
import Button from "../components/Button";


const BorrowedBooks = () => {
    const singleBook = useLoaderData();
    // console.log(singleBook);
    const [allBook, setAllBook] = useState()
    const [emptyPage, setEmptyPage] = useState('')
    // console.log(allBook);

    const { user } = useAuth();
    const currentUserEmail = user?.email;
    console.log(currentUserEmail);

    

    

    const { _id, id, author_name, category_name, image, long_description, name, rating, short_description, quantity, return_data, userEmail } = singleBook;
    // console.log(singleBook);
    const borrowedBooks = singleBook.filter(book => book?.userEmail === currentUserEmail)
    // console.log(allBook);

    
    // console.log(_id, id);


    const userName = user?.displayName;
    const user2Email = user?.email;
    // const {displayName, email} = user;
    // console.log(userName, userEmail);



    // update info
    const currentTime = new Date()
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



    const returnHandeler = _id => {
        // console.log(_id);
        // e.preventDefault();

        const decreaseBook = (quantity > 0) && quantity + 1;
        // console.log(decreaseBook);
        // console.log(quantity);
        const newObj = { id, author_name, category_name, image, long_description, name, rating, short_description, decreaseBook, recentArrDate, return_data, userName, userEmail }

        // put
        fetch(`https://e-readers-server.vercel.app/api/v1/category-books/category_name/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
            .then(res => res.json())
            .then(data => console.log('updated borrowed book successfully', data))

        


        // delete
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://e-readers-server.vercel.app/api/v1/borrow-books/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainigBook = allBook.filter(book => book._id !== _id)
                setAllBook(remainigBook)
            })
              Swal.fire({
                title: "Deleted!",
                text: "Your book has been returned.",
                icon: "success"
              });
            }
          });
        
    }
    // console.log(newBook);
    console.log(allBook);


    return (
        <div className="px-10 py-20">
            <div className="pb-3">
            <Title>Borrowed Books are here..</Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                typeof borrowedBooks !== 'undefined' ? borrowedBooks.map((book) => {
                    return <div key={book?._id}>
                        <div className="card bg-red-100 shadow-xl">
                            <figure><img className="object-fill h-56 w-full" src={book?.image} alt="Shoes" /></figure>
                            <div className="card-body text-black font-semibold text-lg">
                                <h2 className="card-title">{book?.name}</h2>
                                <p>Category Name: <span className="text-rose-600">{book?.category_name}</span></p>
                                <p>{book?.recentArrDate}</p>
                                <p>{book?.returnDate}</p>
                                <div className="pt-3">
                                    <div onClick={() => returnHandeler(book?._id)}>
                                        <Button>Return</Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                })
                :
                <p>No book borrowed. Please add some book first..</p>
            }
        </div>
        </div>
    );
};

export default BorrowedBooks;