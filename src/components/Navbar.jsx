import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import "../components/Home/Banner.css"
import { MdNightlight } from 'react-icons/md';
import { ImSun } from 'react-icons/im';



const Navbar = ({ children }) => {
    const { user, logOut } = useAuth();
    const [mood, setMood] = useState(true);
    const userName = user?.displayName;
    const profileImage = user?.photoURL;

    const signOutHandeler = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err.message);
            })
    }
    const night = document.getElementById('root').classList.add('night');

    const navLinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addBook">Add Book</NavLink>
        <NavLink to="/allBooks">All Books</NavLink>
        <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
        <NavLink className="inline" onClick={() => setMood(!mood)}>
            {
                mood ? <MdNightlight className="inline-block text-blue-950 text-2xl"><script>{
                    document.getElementById('root').classList.remove('night')
                }</script></MdNightlight>

                    :
                    <ImSun className="inline-block text-2xl">
                        <script>{night}</script>
                    </ImSun>
            }
        </NavLink>
        {
            user?.email ? <>
                <div className="lg:flex gap-5 justify-center items-center left:0 lg:right-14 lg:absolute">
                    <div className="chat chat-start mt-3 lg:mt-0">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={profileImage} />
                            </div>
                        </div>
                        <div className="chat-bubble max-w-full text-base bg-white text-rose-600">{userName}</div>
                    </div>
                    <button className="btn text-rose-600" onClick={signOutHandeler}>Log Out</button>
                </div>
            </>
                :
                <NavLink className="left:0 lg:right-14 lg:absolute" to="/login"><button className="btn text-rose-600">Login</button></NavLink>
        }

    </>



    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-rose-500 text-white py-5">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="px-2 mx-2 md:mr-16"><img className="w-20" src="https://i.ibb.co/8Y77rQQ/library-logo-design-precious-astonishing-13-removebg-preview.png" alt="" /></div>
                    <div className="hidden lg:block flex-grow">
                        <ul className="menu menu-horizontal text-xl font-semibold space-x-7 md:flex md:items-center">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;