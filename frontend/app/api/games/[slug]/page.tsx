import { getGame } from "@/libs/apis";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
  try {
    const game = await getGame(params.slug);
    return NextResponse.json(game, { status: 200 });
  } catch (error) {}
}
