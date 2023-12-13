import axios from "axios";
import { useEffect, useState } from "react";


const useCategoryBooks = () => {
    const [categoryBooks, setCategoryBooks] = useState([])

    useEffect( () => {
        axios.get('http://localhost:5008/api/v1/category-books')
        .then(res => {
            setCategoryBooks(res.data)
        })
        .catch(err => {
            console.log(err);
        })

        // fetch('http://localhost:5008/api/v1/all-books')
        // .then(res => res.json())
        // .then(data=> {
        //     setAllBooks(data);
        // })
    }, [])

    return [categoryBooks, setCategoryBooks];
};

export default useCategoryBooks;