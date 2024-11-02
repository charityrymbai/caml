/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "branch" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "college" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "major" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "Uploads" (
    "upload_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Uploads_pkey" PRIMARY KEY ("upload_id")
);

-- CreateTable
CREATE TABLE "HashTags" (
    "hash_tag_id" SERIAL NOT NULL,
    "hash_tag" TEXT NOT NULL,
    "upload_id" INTEGER NOT NULL,

    CONSTRAINT "HashTags_pkey" PRIMARY KEY ("hash_tag_id")
);

-- CreateTable
CREATE TABLE "HashTagsOnUploads" (
    "upload_id" INTEGER NOT NULL,
    "hash_tag_id" INTEGER NOT NULL,

    CONSTRAINT "HashTagsOnUploads_pkey" PRIMARY KEY ("hash_tag_id","upload_id")
);

-- AddForeignKey
ALTER TABLE "Uploads" ADD CONSTRAINT "Uploads_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTags" ADD CONSTRAINT "HashTags_upload_id_fkey" FOREIGN KEY ("upload_id") REFERENCES "Uploads"("upload_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTagsOnUploads" ADD CONSTRAINT "HashTagsOnUploads_upload_id_fkey" FOREIGN KEY ("upload_id") REFERENCES "Uploads"("upload_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTagsOnUploads" ADD CONSTRAINT "HashTagsOnUploads_hash_tag_id_fkey" FOREIGN KEY ("hash_tag_id") REFERENCES "HashTags"("hash_tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
