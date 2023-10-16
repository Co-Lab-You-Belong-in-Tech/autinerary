-- CreateIndex
CREATE INDEX "posts_title_content_channelId_idx" ON "posts"("title", "content", "channelId");
