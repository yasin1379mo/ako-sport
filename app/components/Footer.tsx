import React from 'react';
import {
  PhoneIcon,
  ClockIcon,
  TruckIcon,
  ShieldCheckIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-text py-10 direction-rtl font-vazir">
      <div className="container mx-auto px-6">
        {/* Top Section with Icons */}
        <div className="flex flex-wrap justify-around text-center mb-10">
          <div className="flex flex-col items-center mb-4">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/FCC419/trust--v1.png" alt="trust--v1"/>
            <span className="mt-2">ارائه بهترین خدمات</span>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img width="50" height="50" src="https://img.icons8.com/fluency-systems-regular/50/FCC419/delivery.png" alt="delivery"/>
            <span className="mt-2">ارسال سریع به سراسر کشور</span>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/FCC419/hotline.png" alt="hotline"/>
            <span className="mt-2">پشتیبانی 24 ساعته</span>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img width="50" height="50" src="https://img.icons8.com/external-victoruler-outline-victoruler/64/FCC419/external-return-box-logistics-victoruler-outline-victoruler.png" alt="external-return-box-logistics-victoruler-outline-victoruler"/>
            <span className="mt-2">7 روز ضمانت بازگشت</span>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img width="50" height="50" src="https://img.icons8.com/wired/50/FCC419/guarantee--v1.png" alt="guarantee--v1"/>
            <span className="mt-2">ضمانت اصالت کالا</span>
          </div>
        </div>

        {/* Links and Contact Information */}
    <div className="bg-secondary text-center md:text-right py-4 px-6 border-t border-gray-700 font-vazir">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
 {/* Contact Information */}
 <div className="flex flex-col items-center md:items-start text-grayText font-vazir" >
            <div className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 text-primary ml-2" />
              <span>09125854944</span>
            </div>
            <div className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 text-primary ml-2" />
              <span>021-3266641</span>
            </div>
            <div className="flex items-center mb-2">
              <TruckIcon className="h-5 w-5 text-primary ml-2" />
              <span>همدان-خیابان جمهوری،پاساژ سجادیه پلاک 290</span>
            </div>
            <div className="flex items-center mb-2">
              <ClockIcon className="h-5 w-5 text-primary ml-2" />
              <span>از شنبه تا پنجشنبه از ساعت 10:00 تا 21:00</span>
            </div>
          </div>          {/* Customer Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">خدمات مشتریان</h3>
            <ul className="space-y-2 text-grayText">
              <li className="hover:text-primary transition-colors cursor-pointer">درباره ما</li>
              <li className="hover:text-primary transition-colors cursor-pointer">قوانین</li>
              <li className="hover:text-primary transition-colors cursor-pointer">سوالات متداول</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">لینک های مفید</h3>
            <ul className="space-y-2 text-grayText">
              <li className="hover:text-primary transition-colors cursor-pointer">درباره ما</li>
              <li className="hover:text-primary transition-colors cursor-pointer">قوانین</li>
              <li className="hover:text-primary transition-colors cursor-pointer">سوالات متداول</li>
            </ul>
          </div>

         
        </div>
    </div>

        {/* About Section */}
        <div>
          <h3 className=" divider divider-start text-lg font-semibold text-primary">درباره آکو اسپورت</h3>
            <div className='flex'>
                
          <p className="text-sm w-3/4 mt-2 text-grayText">
            فروشگاه آکو اسپرت افتخار عرضه حضوری و مجازی محصولات متنوع کوهنوردی طبیعت گردی و لوازم آفرد با قیمت
            بسیار مناسب کیفیت مطلوب و فراهم سازی بستری مطمین جهت خرید آسان و رضایت و اطمینان خاطر کامل مشتریان
            عزیز این مجموعه را در کارنامه خود دارد.
          </p>
          <div className="flex items-center ">
            <img src="/zigil.png" alt="zigil" className="rounded-md w-20 h-20 m-2" />
            <img src="/samandehi.png" alt="samandehi" className="rounded-md w-20 h-20 m-2" />
            <img src="/e-namad.png" alt="e-namad" className="rounded-md w-20 h-20 m-2" />
          </div>
            </div>
        </div>

        {/* Certifications and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          {/* Certification Icons */}

        </div>
          {/* Copyright */}
          <div className="text-xs text-gray-400 mt-4 md:mt-0 bg-secondary text-center py-4 px-6 border-t border-gray-700 font-vazir">
            تمامی حقوق محفوظ برای Ako Sport است.
          </div>
      </div>
    </footer>
  );
};

export default Footer;
