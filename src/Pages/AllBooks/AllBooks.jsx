
import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const AllBooks = () => {

    const bookLoader = useLoaderData()
    const [allBooks, setAllBooks] = useState(bookLoader)
    const { user } = useAuth();


    // if(books) {
    //     setAllBooks(books)
    // }
    // console.log(allBooks);
    const searchHandeler = async () => {
        const books =  axios.get(`https://e-readers-server.vercel.app/api/v1/borrow-books/?email=${user?.email}`, { withCredentials: true })
            .then(res =>setAllBooks(res.data))
    //     console.log('search clicked');
    //     console.log(books);
    }
    // console.log(books);


    return (
        <div className="my-20 mx-10">
            <div className="form-control flex">
                <div onClick={searchHandeler} className="w-40 mx-auto justify-center">
                    <Button>Search..</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-10">
                {
                    allBooks && allBooks.map(aBook => <SingleBook key={aBook.id} aBook={aBook}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;