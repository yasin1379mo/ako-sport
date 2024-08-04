'use client';
import Link from 'next/link';
// pages/register.tsx

import React, { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  privacyAccepted: boolean;
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    privacyAccepted: false,
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
          <h2 className="text-start border-r-4 border-r-yellow-400 rounded-sm px-3 text-3xl font-bold mb-6 text-gray-800">
            ایجاد حساب کاربری
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="w-1/2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="نام"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block h-14 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="w-1/2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="نام خانوادگی"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block h-14 w-full mx-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

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
                className="mt-1 block h-14 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="تایید رمزعبور"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block h-14 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center">
              <input
                id="privacyAccepted"
                name="privacyAccepted"
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="privacyAccepted"
                className="mr-2 block text-sm text-indigo-600"
              >
                پذیرش حریم خصوصی
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                ثبت نام
              </button>
            </div>

            <div className="text-center text-sm text-gray-600 mt-4">
              <Link
                href="/login"
                className="font-medium text-yellow-00 hover:text-yellow-500"
              >
                من قبلا ثبت نام کرده ام؟ صفحه ورود
              </Link>
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
