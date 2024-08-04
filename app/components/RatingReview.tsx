// components/RatingReview.tsx
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';
import React from 'react';


type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  likes: number;
  dislikes: number;
};

type Props = {
  averageRating: number;
  ratingsCount: number[];
  reviews: Review[];
};

const RatingReview: React.FC<Props> = ({ averageRating, ratingsCount, reviews }) => {
  return (
    <div className="p-4 flex mx-auto ">
              {/* User Reviews */}
      <div className="divide-y divide-gray-300">
        {reviews.map((review) => (
          <div key={review.id} className="py-4">
            <div className="flex items-center mb-2">
              <span className="font-bold">{review.name}</span>
              <span className="text-gray-500 text-sm ml-2">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < review.rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.004 3.09a1 1 0 00.95.69h3.246c.969 0 1.371 1.24.588 1.81l-2.624 1.906a1 1 0 00-.364 1.118l1.004 3.09c.3.921-.755 1.688-1.54 1.118l-2.624-1.906a1 1 0 00-1.176 0l-2.624 1.906c-.784.57-1.838-.197-1.54-1.118l1.004-3.09a1 1 0 00-.364-1.118L2.957 8.517c-.783-.57-.38-1.81.588-1.81h3.246a1 1 0 00.95-.69l1.004-3.09z" />
                </svg>
              ))}
            </div>
            <p className="mb-2">{review.text}</p>
            <div className="flex items-center text-sm text-gray-500">
              <button className="flex items-center mr-4">
                <HandThumbUpIcon className='w-5'/>
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center">
                <HandThumbDownIcon className='w-5'/>
                <span>{review.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

        <div className='w-1/2 max-w-lg mr-20 '>
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold mr-2">{averageRating.toFixed(1)}</span>

        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-6 h-6 ${
                index < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.004 3.09a1 1 0 00.95.69h3.246c.969 0 1.371 1.24.588 1.81l-2.624 1.906a1 1 0 00-.364 1.118l1.004 3.09c.3.921-.755 1.688-1.54 1.118l-2.624-1.906a1 1 0 00-1.176 0l-2.624 1.906c-.784.57-1.838-.197-1.54-1.118l1.004-3.09a1 1 0 00-.364-1.118L2.957 8.517c-.783-.57-.38-1.81.588-1.81h3.246a1 1 0 00.95-.69l1.004-3.09z" />
            </svg>
          ))}
        </div>
      </div>
      {/* Average Rating */}

      {/* Rating Distribution */}
      <div className="mb-4">
        {ratingsCount.map((count, index) => (
          <div key={index} className="flex items-center mb-1">
            <span className="w-4">{5 - index}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${(count / Math.max(...ratingsCount)) * 100}%` }}
              />
            </div>
            <span>{count}</span>
          </div>
        ))}
      </div>
        </div>


    </div>
  );
};

export default RatingReview;
