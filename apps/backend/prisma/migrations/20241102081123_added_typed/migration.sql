-- AlterTable
ALTER TABLE "Uploads" ADD COLUMN     "description" TEXT DEFAULT '',
ADD COLUMN     "keywords" TEXT DEFAULT '',
ADD COLUMN     "subject" TEXT DEFAULT '',
ADD COLUMN     "type" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "name" SET DEFAULT '';
