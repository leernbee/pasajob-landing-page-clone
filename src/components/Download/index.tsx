import React from 'react';

const index = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #FCB075, #ED5E64)',
      }}
      className="px-4 pt-16 mx-auto sm:px-6 lg:pt-0 "
    >
      <div className="items-center mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <h2>
            <span className="block mt-1 text-3xl font-medium tracking-tight text-center lg:text-4xl lg:text-left ">
              <span className="block text-white">
                Start applying or{' '}
                <span className="block">referring today.</span>
              </span>
            </span>
          </h2>

          <div className="flex justify-center mt-12 lg:justify-start">
            <img
              className="mr-4 max-h-[40px]"
              src="/assets/images/download-from-app-store.svg"
              alt=""
            />
            <img
              className="max-h-[40px]"
              src="/assets/images/download-from-google-play.svg"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto mt-12 sm:max-w-lg lg:flex lg:col-span-6 lg:items-center lg:mx-0 lg:mt-0 lg:max-w-none">
          <div className="relative pt-16 w-full text-center rounded-lg lg:max-w-md">
            <img
              className="mx-auto w-auto max-h-96"
              src="/assets/images/app-job-seekers.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
