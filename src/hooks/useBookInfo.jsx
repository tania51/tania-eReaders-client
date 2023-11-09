import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useBookInfo = () => {
    const [allBooks, setAllBooks] = useState([])

    useEffect( () => {
        axios.get('http://localhost:5008/api/v1/category-books/category_name')
        .then(res => {
            setAllBooks(res.data)
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

    return [allBooks, setAllBooks];
};

export default useBookInfo;