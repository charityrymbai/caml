/*
  Warnings:

  - You are about to drop the `HashTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HashTagsOnProjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HashTagsOnUploads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HashTagsOnProjects" DROP CONSTRAINT "HashTagsOnProjects_hash_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "HashTagsOnProjects" DROP CONSTRAINT "HashTagsOnProjects_project_id_fkey";

-- DropForeignKey
ALTER TABLE "HashTagsOnUploads" DROP CONSTRAINT "HashTagsOnUploads_hash_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "HashTagsOnUploads" DROP CONSTRAINT "HashTagsOnUploads_upload_id_fkey";

-- DropTable
DROP TABLE "HashTags";

-- DropTable
DROP TABLE "HashTagsOnProjects";

-- DropTable
DROP TABLE "HashTagsOnUploads";

-- CreateTable
CREATE TABLE "HashTags_uploads" (
    "hash_tag_id" SERIAL NOT NULL,
    "hash_tag" TEXT NOT NULL,
    "upload_id" INTEGER NOT NULL,

    CONSTRAINT "HashTags_uploads_pkey" PRIMARY KEY ("hash_tag_id")
);

-- CreateTable
CREATE TABLE "HashTags_projects" (
    "hash_tag_id" SERIAL NOT NULL,
    "hash_tag" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "HashTags_projects_pkey" PRIMARY KEY ("hash_tag_id")
);

-- AddForeignKey
ALTER TABLE "HashTags_uploads" ADD CONSTRAINT "HashTags_uploads_upload_id_fkey" FOREIGN KEY ("upload_id") REFERENCES "Uploads"("upload_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTags_projects" ADD CONSTRAINT "HashTags_projects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;
