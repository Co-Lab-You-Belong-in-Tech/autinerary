import { prisma } from "@/lib/prisma"
import { PageProps } from "@/lib/props"
import { getServerSession } from "next-auth"
import { options } from "../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (!body.authorId || !body.title || !body.content ) return new Response(JSON.stringify({ message: 'FIll in the fields' }), { status: 400 })
    
    await prisma.post.create({
      data: body
    })
    return new Response(JSON.stringify({ message: 'User Successfully created' }), { status: 201 })
  } catch(error) {
    console.log(error)
    return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
  }
}