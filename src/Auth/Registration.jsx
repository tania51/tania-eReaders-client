import { Link, useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.jpg"
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import Swal from "sweetalert2";

const Registration = () => {
    const { createUser, googleSignIn } = useAuth();
    const navigate = useNavigate();

    // register using google
    const googleSignInHandeler = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
            navigate('/')
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const formHandeler = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, photo, email, pass);

        if (! /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{6,}$/.test(pass)) {
            Swal.fire({
                icon: 'error',
                title: 'Password Should be atleast 6 charecters, one capital letter and one special charecter',
                color: 'red',
                fontSize: '14px',
                padding: '4px'
            })
        }
        else {
            createUser(email, pass)
                .then(res => {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo
                    })
                        .then(() => {
                            console.log('profile updated successfully');
                        })
                        .catch(err => {
                            console.log(err.message);
                        })
                    console.log(res.user)
                    navigate('/')
                })
                .catch(err => {
                    console.log(err.message)
                })
        }



    }

    

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${loginBg}")` }}>
            <div className="hero-overlay bg-sky-200 bg-opacity-50"></div>
            <div className="hero-content w-1/2 mx-auto text-center text-neutral-content pb-10 pt-5">
                <div className="w-full bg-gradient-to-b from-purple-300 to-rose-400">
                    <form className="card-body" onSubmit={formHandeler}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg  font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-rose-500 hover:bg-rose-500 hover:text-gray-200 border-none text-white tracking-widest">Register</button>
                        </div>

                        <label className="text-white text-lg">
                            <span>Already have an account? Please <Link to="/login" className="text-lg ml-2 text-purple-800 hover:underline font-semibold hover:text-purple-800">Login</Link></span>
                        </label>
                    </form>

                    <div className="form-control pb-8 px-8">
                        <button onClick={googleSignInHandeler} className="btn bg-rose-500 hover:bg-rose-500 hover:text-gray-200 border-none text-white tracking-widest">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;