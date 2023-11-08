import Title from "../Title";
import './Banner.css'


const AboutUs = () => {
    return (
        <div>
            <div className="px-28">
                <Title>About Book..</Title>
            </div>
            <div className="flex items-center pl-10 bg-rose-600">
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-2xl uppercase pb-4">Importance of Books <br /> in Our Life</h3>
                    <div className="text-white text-lg about-content">
                        <ul>
                            <li>Books build confidence.</li>
                            <li>Books are our best friends.</li>
                            <li>Books help you learn new languages.</li>
                            <li>Reading books improve your communication skills.</li>
                        </ul>

                    </div>

                </div>
                <div className="flex-1">
                    <img src="https://i.ibb.co/pRB7tRS/23aebcc30ce72a57278086c1a901ec0d6c1d0919.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;