import { prisma } from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// POST /api/comment: Create a new comment
export async function POST(request: any & { body?: any; }) {
    try {
        const session = await getSession({ req: request })

        if (!session) return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 })

        const body = await request.json()
        const { content, postId } = body

        // Check if content is not empty
        if (!content) return new Response(JSON.stringify({ message: 'Content is required' }), { status: 400 })

        // Get the user from the session
        const userEmail = session.user?.email as string

        // Check if the user exists
        const user = await prisma.user.findUnique({ where: { email: userEmail } })

        // Create a new comment with authorId coming from the session
        const comment = await prisma.comment.create({
            data: {
                content,
                authorId: user?.id as string,
                postId
            }
        })

        return new Response(JSON.stringify(comment), { status: 200 })

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
    }
}

// GET /api/comment: Get all comments for a post
export async function GET(request: any & { body?: any; }) {
    try {
        const { postId } = request.query

        const comments = await prisma.comment.findMany({
            where: {
                postId
            }
        })

        return new Response(JSON.stringify(comments), { status: 200 })

    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
    }
}