
import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";
import Button from "../../components/Button";
import { useState } from "react";


const AllBooks = () => {

    const bookLoader = useLoaderData()
    const [allBooks, setAllBooks] = useState(bookLoader)

    return (
        <div className="my-20 mx-10">
            <div className="form-control flex">
                <div className="w-40 mx-auto justify-center">
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