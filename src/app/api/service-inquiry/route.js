import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "operational",
    service: "Team Most Wanted API",
    message: "Ready to process two-wheeler service requests",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      success: true,
      message: "Service inquiry received successfully at Team Most Wanted backend.",
      receivedData: data,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request payload" },
      { status: 400 }
    );
  }
}
