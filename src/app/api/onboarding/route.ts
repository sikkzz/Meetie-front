import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { OnboardingFormType } from "@/types/onboarding";

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const postData: OnboardingFormType = await request.json();

    // TODO: 이미 저장된 정보 있는 지 확인
    const { error } = await supabase.from("onboarding").insert(postData);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (err) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from("onboarding").select("position, styles").single();

    if (error) {
      return NextResponse.json({ message: "error", status: 400 });
    }

    // 온보딩을 건너뛰었거나 온보딩을 했는 지의 여부 확인
    if (!data) {
      return NextResponse.json({ message: "ok", status: 204, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
