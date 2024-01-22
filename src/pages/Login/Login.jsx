import { useContext } from "react";
import Lottie from "react-lottie";
import { Form, Link } from "react-router-dom";
import animationData from "../../assets/lottie/login.json";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {


    const {signIn} = useContext(AuthContext);
    const hangleEmailLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <h1 className="text-5xl font-bold text-teal-500 text-center mt-10">
                Login now!
            </h1>
            <div className="hero mt-14 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center ">
                    <div className="text-center lg:text-left w-full">
                        <div className="md:h-[400px]">

                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                    <Form
                        onSubmit={hangleEmailLogin}
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 "
                    >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>

                            {/* <div className="text-center">
                                {status ? (
                                    <p className="text-teal-600">{status}</p>
                                ) : (
                                    <></>
                                )}
                                {error ? (
                                    <p className="text-red-500">{error}</p>
                                ) : (
                                    <></>
                                )}
                            </div> */}
                            <div className="form-control mt-2">
                                <button
                                    className="btn bg-teal-600 rounded-full text-white hover:bg-teal-700"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <button
                                    className="btn  bg-sky-600 rounded-full mt-4 hover:bg-sky-700 border-none text-white"

                                >
                                    Login with Google
                                </button>
                            </div>
                            <p className="text-md text-center">

                                New here? Please{" "}
                                <Link
                                    to={"/register"}
                                    className="text-teal-600 font-semibold"
                                >
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Login;