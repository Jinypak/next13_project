"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 dark:text-white">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        내 위키, 문서, 프로젝트
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        <span className="underline">Notion</span>은 더 빠르고 효율적인 작업을
        위한 커넥티드 워크스페이스입니다. 이제 AI 기능도 함께 이용하세요.
      </h3>
      <Button>
        노션 이용하기
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
