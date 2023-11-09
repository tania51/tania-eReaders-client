import axios from "axios";
import { useEffect, useState } from "react";


const useMainBorrow = () => {

    const [categoryBorrowBooks, setCategoryBorrowBooks] = useState([])

    useEffect( () => {
        axios.get('https://e-readers-server.vercel.app/api/v1/category-books')
        .then(res => {
            setCategoryBorrowBooks(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    console.log(categoryBorrowBooks);

    return [categoryBorrowBooks, setCategoryBorrowBooks];

};

export default useMainBorrow;