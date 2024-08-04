// data/reviewData.ts

export type Review = {
    id: number;
    name: string;
    date: string;
    rating: number;
    text: string;
    likes: number;
    dislikes: number;
  };
  
  export const reviewsData: Review[] = [
    {
      id: 1,
      name: 'مانیا رحیمی',
      date: 'دیروز',
      rating: 5,
      text: 'کیفیت خوبی داره,قابل قبوله',
      likes: 3,
      dislikes: 0,
    },
    {
      id: 2,
      name: 'مریم اکبری',
      date: 'دیروز',
      rating: 4,
      text: 'در کل خوبه ولی اگه یکم بیشتر هزینه کنید جنس بهتری گیرتون میاد.',
      likes: 3,
      dislikes: 0,
    },
    {
      id: 3,
      name: 'سارا بهرامی',
      date: 'دیروز',
      rating: 3,
      text: 'برای کوه های بلند و مسافت های طولانی مناسبه؟',
      likes: 0,
      dislikes: 0,
    },
  ];
  
  // Additional data for overall ratings summary
  export const averageRating = 4.2;
  export const ratingsCount = [7, 3, 2, 0, 0]; // Number of 5, 4, 3, 2, 1-star ratings
  