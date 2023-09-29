import { prisma } from "@/lib/prisma"
import { hash } from 'bcrypt';

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    const existingUser = await prisma.user.findUnique({
      where: { email: email}
    })
    if (existingUser) return new Response(JSON.stringify({ user: null, message: 'User with this email already exists'}), { status: 409})
    if (!password) return new Response(JSON.stringify({ user: null, message: 'No password input'}), { status: 400})
    
    const hashedPassword = await hash(password, 10)
    await prisma.user.create({
      data: { ...body, password: hashedPassword }
    })
    return new Response(JSON.stringify({ message: 'User Successfully created' }), { status: 201 })
  } catch(error) {
    return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
  }
}