import Image from "next/image";

import Button from "@/components/common/Button/Button";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { COMPLETE_DATA } from "@/constants/onBoarding";

export default function OnBoardingCompletePage() {
  return (
    <main className="flex flex-col h-screen">
      <article className="flex flex-col items-center w-full h-full px-5">
        <OnBoardingTitle textData={COMPLETE_DATA} index={0} subTextColor="text-gray-200" />

        <div className="relative w-[150px] mt-[77px]">
          <Image
            src="/svg/ic-onboarding-complete-back.svg"
            width={146}
            height={204}
            alt="back"
            className="absolute top-0"
          />

          <div className="relative flex justify-center w-full transform animate-tilt">
            <div className="w-[146px] h-[204px] rounded-lg bg-blue-200" />
            <div className="absolute top-0 flex flex-col items-center justify-center pt-6 whitespace-nowrap">
              <div className="relative w-[80px] h-[80px] flex justify-center bg-blue-200">
                <div className="absolute w-[80px] h-[80px] bg-blue-400 mix-blend-hue z-10" />
                <Image
                  src="/svg/ic-badge-nanum-master.svg"
                  width={76}
                  height={75}
                  alt="meetie master"
                />
                <Image
                  src="/img/img-user-profile.png"
                  width={48}
                  height={48}
                  alt="profile"
                  priority
                  className="absolute top-[25px] z-20"
                />
              </div>
              <p className="text-semibold-14 mt-[6.5px]">김서희님</p>
              <p className="text-semibold-12">디자이너</p>
              <p className="text-regular-12 mt-[19px]">뉴비, 열정적인, 손이 빠른</p>
            </div>
          </div>
          <Image
            src="/svg/ic-onboarding-profile-shadow.svg"
            width={162}
            height={15}
            alt="profile shadow"
            className="mt-[47px]"
          />
        </div>

        <Button size="xl" className="mb-[42px] mt-auto">
          <span className="text-white text-semibold-16">확인하러 가기</span>
        </Button>
      </article>
    </main>
  );
}
