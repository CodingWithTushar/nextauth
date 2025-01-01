import { NextResponse } from "next/server";

export function GET () {
    return NextResponse.json({
        message: "This Can Be Any Thing"
    })
}