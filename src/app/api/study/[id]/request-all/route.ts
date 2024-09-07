import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { requestMemberList, recruitMemberCount, joinMemberList } = (
      await supabase.from("study").select().eq("id", params.id).single()
    ).data;

    if (recruitMemberCount < requestMemberList.length + joinMemberList.length) {
      return new Response(JSON.stringify({ error: "모집 인원보다 많습니다" }), {
        status: 400,
      });
    }

    const { error: patchError } = await supabase
      .from("study")
      .update({ requestMemberList: [] })
      .eq("id", params.id);

    const { error: postError } = await supabase
      .from("study")
      .update({ joinMemberList: [...joinMemberList, ...requestMemberList] })
      .eq("id", params.id);

    if (!patchError && !postError) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", stuats: 500, data: error });
  }
}
