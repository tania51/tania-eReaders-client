import axios from "axios";
import { useEffect, useState } from "react";


const useMainBorrow = () => {

    const [categoryBorrowBooks, setCategoryBorrowBooks] = useState([])

    useEffect( () => {
        axios.get('http://localhost:5008/api/v1/category-books')
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