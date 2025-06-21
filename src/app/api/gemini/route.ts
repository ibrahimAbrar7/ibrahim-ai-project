// app/api/generate/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    if (!input) {
      return NextResponse.json({ error: "No input provided" }, { status: 400 });
    }

    // Mock AI suggestion (replace with real logic if needed)
    const suggestion = `Based on your input "${input}", you could explore careers in software engineering, data science, or AI research.`;

    return NextResponse.json({ suggestion });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
