import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function DELETE(request: Request, { params }: { params: { commentId: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.from("community_comments").delete().eq("id", params.commentId);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "delete community comment error" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { commentId: string } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase
      .from("community_comments")
      .update(data)
      .eq("id", params.commentId);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "patch community comment error" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
