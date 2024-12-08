import React from 'react';
import Image from 'next/image';

const SecondSection = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-2 lg:py-[40px] bg-[#FAFAFA] p-4">
        {/* First Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/images/Group 9.png"
            alt="Group 9"
            width={380}
            height={300}
            className="w-[90%] sm:w-auto h-auto"
          />
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/images/Group 8.png"
            alt="Group 8"
            width={380}
            height={300}
            className="w-[90%] sm:w-auto h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default SecondSection;


