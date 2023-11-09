

import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";
import Swal from "sweetalert2";



const BookDetails = () => {
    
    const singleBook = useLoaderData();
    
    const { _id, id, author_name, category_name, image, long_description, name, rating, short_description, quantity } = singleBook;

    // loggedIn user info
    const {user} = useAuth();
    const userName = user?.displayName;
    const userEmail = user?.email;
    // const {displayName, email} = user;
    console.log(userName, userEmail);



    // update info
    const currentTime = new Date()
    const year = currentTime.getFullYear().toString();
    const month = currentTime.getMonth().toString();
    const date = currentTime.getDate().toString();
    // console.log(year, month, date);
    let recentDateString = []

    // console.log(recentDate);
    if (recentDateString !== '') {
        recentDateString.push(year, month, date)
        recentDateString.join('-')
    }
    // console.log(recentDate);
    const recentDate = recentDateString.toString()
    const recentArrDate = [recentDate.split(',').join('-')].toString();



    const borrowHandeler = e => {
        e.preventDefault();
        const returnDate = e.target.returnDate.value;

        console.log( 'recent Date:', recentArrDate, 'return date:', returnDate);
        
        const decreaseBook = (quantity > 0) && quantity - 1;
        console.log(decreaseBook);
        // console.log(quantity);
        const newObj = { id, author_name, category_name, image, long_description, name, rating, short_description, decreaseBook, recentArrDate, returnDate, userName, userEmail }
        

        // put
        if(userEmail !== singleBook.user_email) {
            fetch(`https://e-readers-server.vercel.app/api/v1/category-books/category_name/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
            .then(res => res.json())
            .then(data => console.log('updated borrowed book successfully', data))
        }
        else {
            console.log('err, already updated');
        }


        // post
        if(!newObj) {
            fetch(`https://e-readers-server.vercel.app/api/v1/borrow-books`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: "success",
                    text: "Borrow this book successfully"
                  });
                
            })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Book already borrowed"
              });
        }
        

    }

    console.log(singleBook);

    return (
        <div className="m-20">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row bg-rose-100 p-0">
                    <img src={singleBook?.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="px-10">
                        <h1 className="text-5xl font-bold">{singleBook?.name}</h1>
                        <p className="py-6">{singleBook?.short_description}</p>
                        {/* <button className="btn btn-primary">Borrow</button> */}


                        {/* borrow btn */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <div className="mb-4" onClick={() => document.getElementById('my_modal_5').showModal()}>
                            <Button>Borrow</Button>
                        </div>
                        <Link to={`/read/${singleBook?._id}`}><Button>Read</Button></Link>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                {/* return date */}
                                <form onSubmit={borrowHandeler}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg font-bold">Return Date</span>
                                        </label>
                                        <input className="input input-bordered" type="date" name="returnDate" />
                                        {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                                    </div>
                                    <div className="pt-5 flex justify-center">
                                        <Button>Submit</Button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;