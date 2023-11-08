import { useState } from "react";
import useBookInfo from "./useBookInfo";


const useNewArr = () => {
    const [allBooks] = useBookInfo();
    // const [newArr, setNewArr] = useState([])
    // console.log(allBooks);
    const newArr = []
    const catArr = allBooks && allBooks.map(books => {
        if(books?.category_name) {
            newArr.push(books.category_name)
        }
    })
    // console.log(newArr);

    return newArr;
};

export default useNewArr;