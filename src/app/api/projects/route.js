import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://api.vitelinfratech.com/api/projects", {
      cache: "no-store"
    });

    const data = await response.json();

    return NextResponse.json(
      { success: true, data: data.data || [] },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
