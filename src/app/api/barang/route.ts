
import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server"

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
            id: "asc"
        },
        // where: {
        //     kode: "KY12"
        // }
    });

    // tampilkan hasil data barang
    return NextResponse.json({
        barang: barang
    });

}

// buat service POST (simpan data)
export const POST = async (request: NextRequest) => {
    // simpan data
    const data = await request.json();
    await prisma.tb_barang.create({
        data: {
            kode: data.kode,
            nama: data.nama,
            harga: data.harga,
            satuan: data.satuan
        }       
    })

    return NextResponse.json({
        message: "Data barang berhasil disimpan",
        success: true
    })
}