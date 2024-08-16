import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigater = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="m-2">
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
            <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 dark:bg-gray-50">
              <span className="text-2xl font-bold">User</span>
              {/* <p className="text-5xl font-bold text-center">39€</p> */}
              <p className="font-semibold text-center m-3">
                If your are a User Click here to Sign Up
              </p>
              <button
                className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:text-blue-400"
                onClick={() => navigater("/user/signup")}
              >
                Sign up
              </button>
              {/* <button
                className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:text-blue-400"
                onClick={() => navigater("/user/signup")}
              >
                Sign up
              </button> */}
            </div>
            <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 dark:bg-blue-400 dark:text-gray-50">
              <span className="text-2xl font-bold">Employee</span>
              {/* <p className="text-5xl font-bold">89€</p> */}
              <p className="font-semibold m-3">
                If your are a Employee Click here to Sign Up
              </p>
              <button
                className="px-8 py-3 mt-4 text-lg font-semibold rounded sm:mt-12 dark:bg-gray-100 dark:text-gray-900"
                onClick={() => navigater("/admin/signup")}
              >
                Sign up
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
