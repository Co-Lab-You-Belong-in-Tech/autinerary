import { prisma } from "@/lib/prisma"
import { options } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function POST(request: Request){
  const session = await getServerSession(options);
  if (!session) redirect('/login')

  const body = await request.json()
  try {
    await prisma.channel.create({
      data: body
    })
    return new Response('Tag Created', { status: 201 })
  } catch (error) {
    return new Response('An Error Ocurred', { status: 500 })
  }
}


export async function GET() {
  const session = await getServerSession(options);
  if (!session) redirect('/login')
  
  try {
    const channel = await prisma.channel.findMany();
    return new Response(JSON.stringify(channel), { status: 200})
  } catch(error) {
    return new Response('An Error Ocurred', { status: 500 })
  }
}