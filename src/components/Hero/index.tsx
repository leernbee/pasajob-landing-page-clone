import React from 'react';

const index = () => {
  return (
    <main>
      <div className="pt-28 pb-20 lg:overflow-hidden lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className=" px-4 sm:px-6 md:order-2 lg:px-0">
              <img
                className="w-full lg:h-[620px]"
                src="/assets/images/hero-panel-job-seekers.svg"
                alt=""
              />
            </div>
            <div className="px-4 max-w-md sm:px-6 sm:max-w-2xl md:order-1 md:items-center lg:flex lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 mb-6 text-3xl font-bold tracking-tight text-center text-gray-700 sm:mt-5 md:text-left lg:mt-6">
                  <span className="block">
                    Pass a job. <span className="block">Help a friend.</span>{' '}
                    <span className="block">Get a reward.</span>
                  </span>
                </h1>
                <p className="mt-3 max-w-sm text-base text-center text-gray-600 sm:mt-5 md:text-left lg:text-md">
                  PasaJob is the first long-chain referral-based job matching
                  platform in the Philippines that rewards you for connecting
                  businesses to the right candidates.
                </p>
                <div className="flex justify-center mt-8 md:justify-start">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
