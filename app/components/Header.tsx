// components/Header.tsx
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-28 p-4 bg-white shadow-md">
      <div className="flex items-center font-vazir">
        <Link href='/'>
        <img src="/logo.png" className="h-24 mr-2"/>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-500 text-xl m-3">
            صفحه اصلی
          </Link>
          <Link href="/product" className="text-gray-500 text-xl m-3">
            محصولات
          </Link>
          <Link href="#" className="text-gray-500 text-xl m-3">
            فروش ویژه
          </Link>
          <Link href="#" className="text-gray-500 text-xl m-3">
            درباره ما
          </Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4 ml-16 font-vazir">
        <Link href='/login' className="flex text-xl items-center px-4 py-2 text-black bg-white rounded-lg border-2 border-yellow-400 hover:bg-yellow-600">
        <ArrowLeftEndOnRectangleIcon className='w-9 '/> ورود / ثبت نام
        </Link>
        <div className="indicator">
          <span className="indicator-item indicator-center badge badge-secondary"></span>
          <span className="mr-2"><ShoppingCartIcon className="w-10 h-10 mr-2 text-black" /></span> 
</div>
      </div>
    </header>
  );
};

export default Header;
