import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { Form, Link } from "react-router-dom";
import animationData from "../../assets/lottie/login.json";

const Register = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <h1 className="text-5xl font-bold text-teal-500">
                Register now!
            </h1>
            <div className="hero mt-14 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center ">{/* gap-0 md:gap-16 */}
                    <div className="text-center lg:text-left">
                        <div className="md:h-[400px]">
                            <Lottie
                                options={defaultOptions} height={600} width={600}

                            />
                        </div>
                    </div>
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                    >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    className="input input-bordered"
                                    {...register("name", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your email"
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Your Photo URL"
                                    className="input input-bordered"
                                    {...register("photoURL", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <p className="text-sm">
                                Already have an account? Please{" "}
                                <Link
                                    to={"/login"}
                                    className="text-teal-600 font-bold"
                                >
                                    Login here
                                </Link>
                            </p>
                            {/* <div className="text-center">
                                    {isLoading ? ( // Display loading text when isLoading is true
                                        <p className="text-teal-600">
                                            Loading...
                                        </p>
                                    ) : null}
                                    {status ? (
                                        <p className="text-teal-600">
                                            {status}
                                        </p>
                                    ) : null}
                                    {error ? (
                                        <p className="text-red-500 ">{error}</p>
                                    ) : null}
                                </div> */}
                            <div className="form-control mt-2">
                                <input
                                    className="btn bg-teal-600 text-white hover:bg-teal-700"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;