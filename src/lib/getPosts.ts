import { prisma } from './prisma';

export async function getPosts({ page = 1 }) {
  const limit = 10
  const skip = (page - 1) * limit
  try {
    const result = await prisma.post.findMany({
      skip: skip,
      take: limit,
      include: {
        _count: {
          select: { comments: true}
        },
      },
    });

    return result
    
  } catch (error) {
    console.log(error)
  }
}