import errorPage from "../assets/error-page.jpg"

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${errorPage}")` }}>
        </div>
    );
};

export default ErrorPage;