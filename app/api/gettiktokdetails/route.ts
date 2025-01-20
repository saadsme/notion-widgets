
import { NextResponse } from "next/server";

export async function GET() {
  // cookies().delete("access_token");
  //call tiktok and save the respone is appropriate format
  return NextResponse.json({
    // message: "Logged out successfully",
  });
}
