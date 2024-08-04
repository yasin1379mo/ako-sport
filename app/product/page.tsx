'use client'

import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import Header from '../components/Header';
import Footer from '../components/Footer';
import RatingReview from '../components/RatingReview';
import ProductDetailsTable from '../components/Detail';
import ProductExplanation from '../components/Eexplanation';

import { averageRating, ratingsCount, reviewsData } from '../data/reviewData';
import { productDetails } from '../data/detail';
import { productExplanation } from '../data/explanation';

export default function Product() {
  // List of color options and sizes
  const colorOptions = ['آبی', 'قرمز', 'زرد'];
  const sizeOptions = [39, 40, 41, 42];
  const similarProducts = [
    { id: 1, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 2, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 3, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 4, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 5, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 6, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 7, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
    { id: 8, title: 'کفش کوهنوردی مردانه', price: '۳,۹۸۰,۰۰۰ تومان' },
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState('توضیحات');

  // Handle tab click
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-28 font-vazir">
        {/* Product Image and Details Section */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <Image
              src="/shoe.png"
              className="artboard-demo"
              alt="Product Image"
              width={699}
              height={582}
            />
            {/* Color Options */}
            <div className="flex md:w-1/5 mt-4">
              {[...Array(4)].map((_, index) => (
                <Image
                  key={index}
                  src="/shoe.png"
                  alt="Color Option"
                  className="artboard-demo m-2"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl text-black font-bold">
              کفش کوهنوردی زنانه کینگتکس مدل DENA
            </h1>

            {/* Product Rating */}
            <div className="rating my-5">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={index === 1}
                />
              ))}
              <p className="text-gray-600">از 12 نظر</p>
            </div>

            {/* Product Price */}
            <p className="text-4xl text-black my-5 font-bold">۲,۳۵۰,۰۰۰ تومان</p>

            {/* Color Buttons */}
            <div className="flex items-center">
  {colorOptions.map((color, index) => {
    const bgColorClass =
      color === 'آبی'
        ? 'bg-blue-600'
        : color === 'قرمز'
        ? 'bg-red-600'
        : 'bg-yellow-400';

    return (
      <button
        key={index}
        className={`btn btn-active text-black text-base w-12 mx-2 my-5 rounded-full ${bgColorClass}`}
      >
        {color}
      </button>
    );
  })}
</div>

            {/* Size Selection */}
            <div className="join my-5">
              {sizeOptions.map((size, index) => (
                <button key={index} className={`join-item btn ${size === 40 ? 'btn-active' : ''}`}>
                  {size}
                </button>
              ))}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mt-4">
              <button className="border border-gray-300 w-10 h-10 rounded-md">-</button>
              <input
                type="number"
                value="1"
                className="border border-gray-300 w-10 h-10 rounded-md text-center"
                readOnly
              />
              <button className="border border-gray-300 w-10 h-10 rounded-md">+</button>
              <button className="bg-yellow-400 text-white w-64 h-10 p-2 m-7 flex rounded-md">
                <ShoppingCartIcon className="w-7 mx-5" />
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div role="tablist" className="tabs tabs-lifted">
          <a
            role="tab"
            onClick={() => handleTabClick('توضیحات')}
            className={`text-xl tab ${activeTab === 'توضیحات' ? 'tab-active text-black [--tab-bg:gold] [--tab-border-color:gold]' : 'text-gray-600'}`}
          >
            توضیحات
          </a>
          <a
            role="tab"
            onClick={() => handleTabClick('مشخصات')}
            className={`text-xl tab ${activeTab === 'مشخصات' ? 'tab-active text-black [--tab-bg:gold] [--tab-border-color:gold]' : 'text-gray-600'}`}
          >
            مشخصات
          </a>
          <a
            role="tab"
            onClick={() => handleTabClick('نظرات')}
            className={`text-xl tab ${activeTab === 'نظرات' ? 'tab-active text-black [--tab-bg:gold] [--tab-border-color:gold]' : 'text-gray-600'}`}
          >
            نظرات
          </a>
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        <div className="container mx-auto px-4 py-8">
          {activeTab === 'توضیحات' && <ProductExplanation explanation={productExplanation} />}
          {activeTab === 'مشخصات' && <ProductDetailsTable details={productDetails} />}
          {activeTab === 'نظرات' && (
            <RatingReview
              averageRating={averageRating}
              ratingsCount={ratingsCount}
              reviews={reviewsData}
            />
          )}
        </div>

        {/* Divider */}
        <div className="divider"> AKO Sport</div>

        {/* Similar Products Section */}
        <div>
          <h2 className="text-xl font-bold">محصولات مشابه</h2>
          <div className="flex overflow-auto">
            {similarProducts.map((product) => (
              <Link key={product.id} href="#">
                <div className="card glass my-5 mx-1 bg-yellow-400">
                  <figure>
                    <img src="/shoe.png" alt={product.title} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.title}</h2>
                    <div className="card-actions">
                      <p>{product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
