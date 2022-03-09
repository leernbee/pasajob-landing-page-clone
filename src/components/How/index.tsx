import React from 'react';

const index = () => {
  return (
    <div className="py-16 px-4 lg:py-20">
      <div className="lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-700 lg:text-4xl lg:text-left">
            Here&apos;s how it works
          </h2>
          <div className="items-center lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="mt-12 lg:relative lg:m-0">
              <div className="px-4 mx-auto mb-12 max-w-md sm:px-6 sm:max-w-2xl lg:px-0 lg:max-w-none">
                <img
                  className="mx-auto w-full max-w-[420px] lg:max-w-none lg:min-h-[420px]"
                  src="/assets/images/for-job-seekers.png"
                  alt=""
                />
              </div>
              <div className="px-4 sm:px-8">
                <h1 className="text-2xl font-medium tracking-tight text-center text-gray-900  lg:text-3xl">
                  <span className="block xl:inline">
                    For Job Seekers and Referrers
                  </span>{' '}
                </h1>
                <p className="mx-auto mt-3 max-w-md text-lg text-center text-gray-700 md:mt-5 md:max-w-3xl">
                  Find ways to earn, whether you’re looking for new employment
                  opportunities or simply an alternative source of income. Apply
                  to jobs, or refer qualified contacts and earn if they get
                  hired.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <a
                      href="#"
                      className="flex gap-12 justify-center items-center py-3 px-8 w-full font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full border border-transparent md:py-3 md:px-6 md:text-lg text-md"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:relative lg:m-0">
              <div className="px-4 mx-auto mb-12 max-w-md sm:px-6 sm:max-w-2xl lg:px-0 lg:max-w-none">
                <img
                  className="mx-auto w-full max-w-[420px] lg:max-w-none lg:min-h-[420px]"
                  src="/assets/images/for-employers.png"
                  alt=""
                />
              </div>
              <div className="px-4 sm:px-8">
                <h1 className="text-2xl font-medium tracking-tight text-center text-gray-900  lg:text-3xl">
                  <span className="block xl:inline">For Employers</span>{' '}
                </h1>

                <p className="mx-auto mt-3 max-w-md text-lg text-center text-gray-700 md:mt-5 md:max-w-3xl">
                  Challenge your current recruitment process by allowing
                  professionals, both within and outside your company, to refer
                  to your open roles. Hire faster and more effectively with us.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <a
                      href="#"
                      className="flex gap-12 justify-center items-center py-3 px-8 w-full font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full border border-transparent md:py-3 md:px-6 md:text-lg  text-md"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
