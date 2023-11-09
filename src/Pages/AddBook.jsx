

const AddBook = () => {
    const addBookHandeler = e => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        // const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);

        

    }

    return (
        <div>
            <div className="w-full">
                    <form onSubmit={addBookHandeler} className="card-body w-2/3 mx-auto"> 
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Image</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Quantity of Book</span>
                            </label>
                            <input type="text" placeholder="Quantity of Book" className="input input-bordered" name="quantity" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" className="input input-bordered" name="short-des" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered" name="rating" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Category</span>
                            </label>
                            <input type="text" placeholder="Category" className="input input-bordered" name="category" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-rose-500 hover:bg-rose-500 hover:text-gray-200 border-none text-white tracking-widest">Login</button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default AddBook;