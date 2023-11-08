
import useCategoryBooks from "../../hooks/useCategoryBooks";


const AllBooks = () => {

    const [categoryBooks] = useCategoryBooks();

    return (
        <div className="my-20 mx-10">
            <div className="form-control flex">
                <div className="input-group justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-10">
                {
                    categoryBooks && categoryBooks.map(aBook => {
                        return <div key={aBook.id}>
                            <div className="card bg-rose-100 shadow-xl">
                                <figure><img src={aBook?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{aBook?.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;