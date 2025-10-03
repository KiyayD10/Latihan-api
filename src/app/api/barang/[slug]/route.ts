
import { NextRequest, NextResponse } from "next/server";

// buat variabel prisma


// buat service DELETE untuk hapus data
export const DELETE = async (request: NextRequest, 
    { params }: { params: { slug: string } }) => {
    const id = params.slug

    return NextResponse.json({id})
}