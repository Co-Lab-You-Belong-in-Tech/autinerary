import { prisma } from "@/lib/prisma";
import { PageProps } from "@/lib/props";
import { options } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function GET(request: Request, { params: { id } }: PageProps) {
  const session = await getServerSession(options);
  console.log(session)
  try {
    const post = await prisma.post.findUnique({
      where: { id: id },
      include: {
        author: {
          select: {
            firstName: true
          }
        }
      }
    })
    console.log(post) 
    return new Response(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching post' }), { status: 500 })
  }
}