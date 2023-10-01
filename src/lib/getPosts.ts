import { prisma } from './prisma';

export async function getPosts({ page = 1 }) {
  const limit = 10
  const skip = (page - 1) * limit
  try {
    const results = await prisma.post.findMany({
      skip: skip,
      take: limit
    })
    return results
  } catch (error) {
    console.log(error)
  }
}