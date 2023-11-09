import axios from "axios";
import { useEffect, useState } from "react";


const useCategoryBooks = () => {
    const [categoryBooks, setCategoryBooks] = useState([])

    useEffect( () => {
        axios.get('https://e-readers-server.vercel.app/api/v1/category-books')
        .then(res => {
            setCategoryBooks(res.data)
        })
        .catch(err => {
            console.log(err);
        })

        // fetch('https://e-readers-server.vercel.app/api/v1/all-books')
        // .then(res => res.json())
        // .then(data=> {
        //     setAllBooks(data);
        // })
    }, [])

    return [categoryBooks, setCategoryBooks];
};

export default useCategoryBooks;