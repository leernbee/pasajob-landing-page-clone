import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute top-1/2 -right-8 -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute top-1/2 -left-8 -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const index = () => {
  return (
    <section className="py-16  bg-gray-50 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl ">
        <div className="relative">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-700 lg:text-4xl lg:text-left">
            Recent job posts
          </h2>
          <div className="relative px-4">
            {' '}
            <Slider {...settings}>
              <div className="relative">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14 "
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col p-8  mx-2 bg-white rounded-lg">
                  <p className="font-semibold text-gray-800">
                    Customer Service Associate
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full border border-gray-400 lg:w-14 lg:h-14"
                      src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                      alt=""
                    />
                    <div className="ml-4 font-light text-gray-600 text-md">
                      <h3>UpSkill MNL Inc.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
