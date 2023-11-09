

const SingleBook = ({ aBook }) => {
    const {id,image} = aBook;
    return (
        <div className="p-2 border border-rose-500 rounded-sm" key={id}>
            <div className="card rounded-sm h-96">
                <figure><img className="h-52 object-cover" src={image} alt="Shoes" /></figure>
                {/* <div className="card-body">
                    <h2 className="card-title justify-center pb-3">{aBook?.category_name}</h2>
                    <div className="justify-stretch">
                        
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default SingleBook;