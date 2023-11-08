import { Link, useParams } from "react-router-dom";
import useBookInfo from "../../hooks/useBookInfo";


const SingleCategoryBooks = () => {
    
    const [allBooks] = useBookInfo();
    // console.log(allBooks);

    const getCatName = useParams();
    const catName = getCatName.cat_name
    console.log(catName);
    // console.log(books);

    const categoryBooks = allBooks && allBooks.filter(books => books.category_name === catName )
    console.log(categoryBooks);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-24 mx-20">
            {
                categoryBooks && categoryBooks.map(book => <div key={book.name}>
                    <div className="card bg-rose-100 shadow-xl">
                        <figure><img src={book?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{book?.name}</h2>
                            <div className="card-actions justify-center">
                                {/* <button>Details<SingleCategoryBooks boodId={book?.id}></SingleCategoryBooks></button> */}
                                <Link to={`/book-details/${book?._id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SingleCategoryBooks;