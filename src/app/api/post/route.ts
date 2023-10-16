import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { options } from "../auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const session = await getServerSession(options);
  if (!session) redirect('/login')
  try {
    const body = await request.json()
    if ( !body.authorId || !body.title || !body.content || !body.channelId ) return new Response(JSON.stringify({ message: 'Fill in the fields' }), { status: 400 })
    
    const tags = body.categories

    await prisma.post.create({
      data: { ...body, categories: {
        connect: tags.map((tagId: string) => ({ id: tagId}))
       }}
    })
    
    return new Response(JSON.stringify({ message: 'User Successfully created' }), { status: 201 })
  } catch(error) {
    console.log(error)
    return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 400 })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = Number(searchParams.get('page'))
  const tag = searchParams.get('tag')
  const channel = searchParams.get('channel')
  const search = searchParams.get('search')

  const limit = 15
  const skip = (page - 1) * limit

  try {
    let query: any = {
      skip: skip,
      take: limit,
      include: {
        _count: {
          select: { comments: true}
        },
      },
    };

    if (tag) {
      query = {
        ...query,
        where: {
          categories: {
            some: {
              name: tag
            }
          }
        }
      }
    }

    if (channel) {
      query = {
        ...query,
        where: {
          channelId: channel
        }
      }
    }

    if (search) {
      query = {
        ...query,
        where: {
          OR: [
            {title: {contains: search, mode: 'insensitive'}},
            {content: {contains: search, mode: 'insensitive'}},
            {comments: {some: {content: {contains: search, mode: 'insensitive'}}}}
          ]
        }
      }
    }
    
    const result = await prisma.post.findMany(query);
    const postCount = await prisma.post.count({ where: query.where })

    return new Response(JSON.stringify({ count: postCount, result }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong '}), { status: 400 })
  }
}