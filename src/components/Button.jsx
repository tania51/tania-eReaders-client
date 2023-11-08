

const Button = ({children}) => {
    return (
        <button className="btn btn-block bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 text-white hover:text-gray-300">{children}</button>
    );
};

export default Button;