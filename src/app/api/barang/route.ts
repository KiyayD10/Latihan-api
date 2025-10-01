
import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server"

// Buat variable prisma (PrismaClient)
const prisma = new PrismaClient();

// Buat service GET
export const GET = async () => {
    // return new NextResponse(JSON.stringify(
    //     {
    //         message: "Test",
    //         success: true
    //     }
    // ));

    // buat variabel menampilkan data barang
    const barang = await prisma.tb_barang.findMany({
        orderBy: {
            kode: "asc"
        },
        where: {
            kode: "KY12"
        }
    });

    // tampilkan hasil data barang
    return NextResponse.json(barang);

}