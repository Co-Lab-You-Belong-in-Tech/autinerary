-- DropForeignKey
ALTER TABLE "channels" DROP CONSTRAINT "channels_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_authorId_fkey";

-- AddForeignKey
ALTER TABLE "channels" ADD CONSTRAINT "channels_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
