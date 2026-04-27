import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.ANTHROPIC_API_KEY!,
                "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
                ...body,
                model: "claude-sonnet-4-6",
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error("Anthropic API error:", JSON.stringify(data));
        }

        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        console.error("Route error:", err);
        return NextResponse.json(
            { error: "Failed to reach Anthropic API" },
            { status: 500 }
        );
    }
}