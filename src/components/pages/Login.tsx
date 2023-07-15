/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, userLogin } from "../../redux/features/users/usersSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export default function Login() {
  const dispatch = useAppDispatch();
  const handleLogin = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(userLogin({ email, password }));
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email));
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10  bg-gray-800">
      <div className="flex flex-col content-center max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold uppercase">Login</h1>
          <p className="text-sm text-gray-400">Login to access your account</p>
        </div>
        <form
          onSubmit={handleLogin}
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
            <button className="w-full px-8 py-3 mt-6 font-semibold rounded-md bg-sky-400 text-gray-900 ">
              Login
            </button>

            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?{" "}
              <Link to="/register" className="hover:underline text-sky-400">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
