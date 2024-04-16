import React from 'react';
import { Tilt } from 'react-tilt'; // Import Tilt directly from react-tilt
import Accordion from './Accordion ';
import rajan1 from '../../../../public/Images/rajan1.jpg'
import rajan2 from '../../../../public/Images/rajan-2.jpg'

function Team() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team
            </h2>
            <Accordion/>
            <div className="relative">
                <button className="cursor-pointer py-3 px-5 w-30 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 absolute left-7">
                    Join our team
                </button>
            </div>

          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-3 md:grid-cols-3 min-[450px] gap-5">
              {/* Wrap all images with Tilt component for tilt effect */}
              <Tilt>
                <img
                  src= {rajan1}
                  alt="rajan"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 mt-12 mb-6"
                />
              </Tilt>
              <Tilt>
                <img
                  src= {rajan2}
                  alt="rajan"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto mt-6 mb-3"
                />
              </Tilt>
              <Tilt>
                <img
                  src="https://pagedone.io/asset/uploads/1696238684.png"
                  alt=""
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0 mt-2 mb-0"
                />
              </Tilt>
              <Tilt>
                <img
                  src="https://pagedone.io/asset/uploads/1696238702.png"
                  alt=""
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto mt-1 mb-10"
                />
              </Tilt>
              <Tilt>
                <img
                  src="https://pagedone.io/asset/uploads/1696238720.png"
                  alt=""
                  className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto mt-10 mb-10"
                />
              </Tilt>
              <Tilt>
                <img
                  src="https://pagedone.io/asset/uploads/1696238737.png"
                  alt=""
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 mt-0 mb-15"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
