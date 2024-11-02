/*
  Warnings:

  - You are about to drop the column `upload_id` on the `HashTags` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "HashTags" DROP CONSTRAINT "HashTags_upload_id_fkey";

-- AlterTable
ALTER TABLE "HashTags" DROP COLUMN "upload_id";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "semester" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "HashTagsOnProjects" (
    "project_id" INTEGER NOT NULL,
    "hash_tag_id" INTEGER NOT NULL,

    CONSTRAINT "HashTagsOnProjects_pkey" PRIMARY KEY ("hash_tag_id","project_id")
);

-- AddForeignKey
ALTER TABLE "HashTagsOnProjects" ADD CONSTRAINT "HashTagsOnProjects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTagsOnProjects" ADD CONSTRAINT "HashTagsOnProjects_hash_tag_id_fkey" FOREIGN KEY ("hash_tag_id") REFERENCES "HashTags"("hash_tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
