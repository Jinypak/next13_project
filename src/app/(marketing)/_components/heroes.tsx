import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex  flex-col items-center justify-center max-w-5xl">
      <div className="flex items-cetner">
        <div className="relative w-[650px] h-[300px] sm:w-[700px] sm:h-[350px] md:h-[400px] md:w-[800px]">
          <Image
            src="/document.png"
            className="dark:hidden object-contain"
            fill
            alt="document_image"
          />
          <Image
            src="/document-dark.png"
            className="hidden dark:block object-contain"
            fill
            alt="document_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
