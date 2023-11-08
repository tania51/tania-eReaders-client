import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import MainCategories from "../components/Home/MainCategories";
import AboutUs from "../components/Home/AboutUs";
import ContactUs from "../components/Home/ContactUs";


const Home = () => {

    const categoryInfo = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="mx-28 my-20">
                <MainCategories categoryInfo={categoryInfo}></MainCategories>
            </div>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;