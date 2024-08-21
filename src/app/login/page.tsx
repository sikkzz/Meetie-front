"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Button from "@/components/common/Button/Button";
import LoginBottom from "@/components/Login/LoginBottom/LoginBottom";

import { PATH } from "@/constants/path";

import { createClient } from "@/utils/supabase/client";

type SocialProviderType = "google" | "kakao";

export default function LoginPage() {
  const supabase = createClient();

  const [isCheckedSave, setIsCheckedSave] = useState(false);

  const handleSignInWithOAuth = async (provider: SocialProviderType) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  const handleClickSave = () => {
    setIsCheckedSave((prev) => !prev);
  };

  const inputClassName =
    "py-[14px] px-[16px] text-regular-16 placeholder:text-gray-200 border border-gray-100 rounded-lg w-full outline-none";

  return (
    <main className="flex flex-col h-full">
      <article className="flex flex-col items-center h-full p-4">
        <div className="w-full mb-[22px]">
          <div className="relative w-[100px] h-[100px] bg-white -rotate-3 p-0.5">
            <div className="absolute w-[85px] h-[85px] bg-blue-400 mix-blend-hue z-10" />
            <Image
              src="/svg/ic-login-hand.svg"
              width={85}
              height={85}
              alt="hand"
              className="absolute"
            />
          </div>
          <h1 className="text-semibold-24">반가워요!</h1>
          <h1 className="text-semibold-24">밋티에 오신 것을 환영해요</h1>
        </div>

        <form className="w-full [&>*]:mb-3 mb-[33px]">
          <input type="text" placeholder="hellomeetie@gmail.com" className={inputClassName} />
          <div className="relative">
            <input type="password" placeholder="************" className={inputClassName} />
            <Image
              src="/svg/ic-login-close-eye.svg"
              width={24}
              height={24}
              alt="close eye"
              className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
            />
          </div>

          <button
            onClick={handleClickSave}
            type="button"
            className="flex items-center text-gray-200 text-medium-14 gap-[6px]"
          >
            {isCheckedSave ? (
              <Image src="/svg/ic-login-check.svg" width={18} height={18} alt="check" />
            ) : (
              <Image src="/svg/ic-login-check-disabled.svg" width={18} height={18} alt="check" />
            )}
            아이디 저장
          </button>
          <Link href={PATH.WALKTHROUGH}>
            <Button size="xl" className="text-white">
              로그인
            </Button>
          </Link>
        </form>

        <p className="text-gray-200 mb-6 text-medium-12 before:w-[153px] before:bg-gray-200 before:h-[1px] before:inline-block before:mb-[3px] before:mr-[10px] after:ml-[10px] after:w-[153px] after:bg-gray-200 after:h-[1px] after:inline-block after:mb-[3px]">
          OR
        </p>

        <div className="flex justify-center items-center gap-[23px]">
          <Image src="/svg/ic-login-naver.svg" width={46} height={46} alt="naver" />
          <Image
            src="/svg/ic-login-kakao.svg"
            width={46}
            height={46}
            alt="kakao_login"
            onClick={() => handleSignInWithOAuth("kakao")}
          />
          <Image
            src="/svg/ic-login-google.svg"
            width={46}
            height={46}
            alt="google_login"
            onClick={() => handleSignInWithOAuth("google")}
          />
        </div>
      </article>

      <LoginBottom />
    </main>
  );
}
