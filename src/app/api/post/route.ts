import { prisma } from '../../../lib/prisma';
import { getSession } from 'next-auth/react';


// POST /api/post: Create a new post
export async function POST(request: any & { body?: any; }) {
    try {
        const session = await getSession({ req: request })

        if (!session) return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 })

        const body = await request.json()
        const { title, content, channelId, topicId, tags } = body

        // Check if title and content are not empty
        if (!title || !content) return new Response(JSON.stringify({ message: 'Title and content are required' }), { status: 400 })

        // Get the user from the session
        const userEmail = session.user?.email as string

        // Check if the user exists
        const user = await prisma.user.findUnique({ where: { email: userEmail } })

        // Create a new post with authorId coming from the session
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: user?.id as string,
                channelId: channelId ? channelId : undefined,
                topicId: topicId ? topicId : undefined,
                tags: tags ? { connect: tags.map((tag: any) => ({ id: tag.id })) } : undefined
            }
        })

        return new Response(JSON.stringify(post), { status: 200 })

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
    }
}



// GET /api/post: Get all posts
export async function GET() {
    try {
        const posts = await prisma.post.findMany()

        return new Response(JSON.stringify(posts), { status: 200 })

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
    }
}

// GET /api/post/:id: Get a post by id
export async function GET_ID(request: Request) {
    try {
        const postId = request.url.split('/').pop()

        if (!postId) return new Response(JSON.stringify({ message: 'Post id is required' }), { status: 400 })

        const post = await prisma.post.findUnique({ where: { id: postId } })

        return new Response(JSON.stringify(post), { status: 200 })

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
    }
}

