/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../redux/features/users/usersSlice";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(createUser({ email, password }));
    toast.success("User register successfully");
    form.reset();
    navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10  bg-gray-800">
      <Helmet>
        <title>Best Readers - Register</title>
      </Helmet>
      <div className="flex flex-col content-center max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold uppercase">Register</h1>
          <p className="text-sm text-gray-400">
            Don't have an account? Register to create one!
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          className="p-2 w-full border-b-2 border-black"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 mt-6 font-semibold rounded-md bg-sky-400 text-gray-900 ">
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="hover:underline text-sky-400">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
