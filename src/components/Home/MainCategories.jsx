import { Link } from "react-router-dom";
import "./MainCategory.css"
import Title from "../Title";
// import useNewArr from "../../hooks/useNewArr";


const MainCategories = ({categoryInfo}) => {
    console.log(categoryInfo);


    // console.log(newArr);


    return (
        <div>
            <div><Title>BOOK CATEGORIES...</Title></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9"  data-aos="fade-up">
            {
                categoryInfo && categoryInfo.map(book => <div className="p-2 border border-rose-500 rounded-sm" key={book._id} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                    <div className="card rounded-sm h-96">
                        <figure><img src={book?.category_img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center pb-3">{book?.category_name}</h2>
                            <div className="justify-stretch">
                                <Link to={`/categories/${book?.category_name}`}><button className="btn btn-block border-none bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 text-white hover:text-gray-300">See Books</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default MainCategories;