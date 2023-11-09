
import { useLoaderData, useParams } from "react-router-dom";


const ReadBook = () => {
    const objId = useParams();
    const id = objId.id;
    console.log(id);

    const allBook = useLoaderData();
    // console.log(allBook);

    const singleBook = allBook.find(book => book._id === id)
    console.log(singleBook);

    return (
        <div className="px-20">
            <div className="hero min-h-[70vh]">
                <div className="hero-content">
                    <div>
                        <h1 className="text-5xl font-bold text-rose-600">{singleBook?.name}</h1>
                        <p className="py-6 text-black">{singleBook?.long_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;