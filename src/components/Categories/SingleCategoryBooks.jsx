import { Link, useParams } from "react-router-dom";
import useBookInfo from "../../hooks/useBookInfo";
import Button from "../Button";


const SingleCategoryBooks = () => {

    const [allBooks] = useBookInfo();
    // console.log(allBooks);

    const getCatName = useParams();
    const catName = getCatName.cat_name
    console.log(catName);
    // console.log(books);

    const categoryBooks = allBooks && allBooks.filter(books => books.category_name === catName)
    console.log(categoryBooks);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-24 mx-20">
            {
                categoryBooks && categoryBooks.map(book => <div key={book.name}>
                    <div className="card h-[90vh] bg-red-100 shadow-xl" data-aos="fade-up" data-aos-duration="3000">
                        <figure><img className="object-fill h-56 w-full" src={book?.image} alt="Shoes" /></figure>
                        <div className="card-body text-black font-semibold text-lg">
                        <h2 className="card-title">{book?.name}</h2>
                        <p>Author Name: <span className="text-rose-600">{book?.category_name}</span></p>
                        <p>Category Name: <span className="text-rose-600">{book?.category_name}</span></p>
                        <p>Rating: <span className="text-rose-600">{book?.category_name}</span></p>
                        <div className="pt-3">
                            {/* <button>Details<SingleCategoryBooks boodId={book?.id}></SingleCategoryBooks></button> */}
                            <Link to={`/book-details/${book?._id}`}>
                                <Button>Details</Button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div >
    );
};

export default SingleCategoryBooks;



