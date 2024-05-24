import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();
  const [fetchError, setFetchError] = useState(null);

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: '' });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: '' });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError({ ...error, email: 'Email is required in the format of name@gmail.com' });
      setFormSubmitted(true);
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError({ ...error, password: 'Password must be at least 8 characters long' });
      setFormSubmitted(true);
      return;
    }

    try {
      const response = await axios.post(
        'https://umwarimu-loan-hub-api.onrender.com/api/teacher/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } ,  withCredentials: true,}
      );

      if (response.data) {
        // Save token to localStorage
        console.log(response.data.token);
        let token = response.data.token;
        const expires = new Date();
        expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day
        document.cookie = `jwt=${token};expires=${expires.toUTCString()};path=/`;
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user.role));
        console.log('Logged in successfully');

        // Show toast message
        toast.success('Logged in successfully! Redirecting...');

        // Redirect based on user role after a delay to allow toast to be seen
        setTimeout(() => {
          if (response.data.user && response.data.user.role) {
            const userRole = response.data.user.role;
            if (userRole === 'teacher') {
              navigate('/layout/teacherloans');
            } else if (userRole === 'manager') {
              navigate('/barnav/managerdash');
            } else if (userRole === 'admin') {
              navigate('/admin/maindash');
            }
          }
        }, 2000); // 2 seconds delay for toast
      } else {
        console.error('Token not found in response:', response.data);
        setFetchError('Token not found in response');
      }
    } catch (error) {
      console.error('Login failed', error);
      setFetchError(error.response?.data?.message || 'An error occurred');
      if (error.code === 'ERR_NETWORK') {
        toast.error('Try again');
      }
    }
  };

  return (
    <div className="mx-auto items-center justify-center flex flex-row bg-gray-100 h-[110vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="">
          <div className="relative flex flex-col items-center h-[80vh] border-2 p-12 mt-24 bg-white">
            <div>
              <h1 className="p-10 text-2xl text-black font-bold">LOG IN HERE</h1>
            </div>
            <div>
              <form>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm text-black">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    onChange={handleEmail}
                    className="mt-1 w-full rounded-lg bg-white text-sm text-black p-2 border-x-2 border-y-2 border-b-2 border-gray-300"
                  />
                  {formSubmitted && error.email && (
                    <p className="text-red-500 italic text-xs">{error.email}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="block text-sm text-black">
                    Enter Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    className="mt-1 w-full rounded-lg bg-white flex-start text-sm text-black shadow-sm p-2 border-x-2 border-y-2 border-gray-300"
                  />
                  {formSubmitted && error.password && (
                    <p className="text-red-500 italic text-xs">{error.password}</p>
                  )}
                </div>
                <Link to="/auth/forgotps" className="text-red-700">
                  Forgot Password?
                </Link>
                <button
                  type="submit"
                  className="bg-red-500 text-white w-full border-2 rounded-md px-[100px] p-1 mx-auto mt-5"
                  onClick={handleLogin}
                >
                  Log in
                </button>
                <div className="flex gap-2 mt-5 mb-5 text-black">
                  <p>Don’t have an account? </p>
                  <Link to="/auth/signup" className="text-red-700">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}

export default Login;
