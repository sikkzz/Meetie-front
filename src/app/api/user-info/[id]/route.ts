import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function PATCH(request: Request, { params }: { params: { id: number } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase
      .from("userinfo")
      .update({
        name: data.name,
        introduce: data.introduce,
        profile_image: data.profileImage,
        main_badge: data.badge,
        study_tags: data.tagList,
      })
      .eq("id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
