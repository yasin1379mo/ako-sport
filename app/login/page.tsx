'use client';
import Link from 'next/link';
// pages/register.tsx

import React, { useState } from 'react';

type FormData = {
  mobile: string;
  password: string;
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    mobile: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center rtl font-yekan"> {/* Apply font-yekan class */}
      <div className="flex items-center bg-white p-10 rounded-lg max-w-6xl w-full">
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-start border-r-4 border-r-yellow-400 mb-16 rounded-sm px-3 text-3xl font-bold text-gray-800">
            ورود حساب کاربری
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <input
                id="mobile"
                name="mobile"
                type="text"
                placeholder="شماره موبایل"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block h-14 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="رمز عبور"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 mb-5 block h-14 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <Link href='/login' className='text-yellow-400 '> فراموشی رمز عبور</Link>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 mt-7 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >ورود
              </button>
            </div>

            <div className="text-center text-sm text-gray-600 mt-4">
              <Link href="/register" className="font-medium text-yellow-00 hover:text-yellow-500"
              >من هنوز ثبت نام نکرده ام؟ صفحه ثبت نام</Link>
            </div>
          </form>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img src="/loginImg.jpg" alt="Sport" className="max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Register;
