import { Hono } from 'hono';

import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

import authMiddleware  from "../Middlewares/authMiddleware";

const dataRouter = new Hono();

dataRouter.get("/health", (c) => {
    return c.json({ status: "ok" });
});

dataRouter.get("/getDashboardDetails", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

    try {
        const userDetails = await prisma.user.findUnique({
            where: {
                user_id: c.user.user_id,
            }
        });

        return c.json({
            details: {
                name: userDetails.name,
                college: userDetails.college,
                branch: userDetails.branch,
                major: userDetails.major,
            }
        });
    } catch (error) {
            console.error(error);
            return c.json(
                {
                    message: 'Error getting details',
                },
                500
        );
    } finally {
        await prisma.$disconnect();
    }
});

dataRouter.post("/addlink", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

   const body = await c.req.json();
   console.log(body);

    try {
        const projectDetails = await prisma.project.create({
            data: {
                user_id: c.user.user_id,
                name: body.projectName,
                url: body.githubLink,
                description: body.description,
            }
        });

        const keywords = body.keywords.split(",");  

        const hashtags = await prisma.hashTags_projects.createMany({
            data: keywords.map((keyword) => ({
                hash_tag: keyword.trim(),
                project_id: projectDetails.project_id,
            })),
            skipDuplicates: true,
        });
        


        return c.json({
            message: "Project Details Added",
        });
    } catch (error) {
            console.error(error);
            return c.json(
                {
                    message: `${error}`,
                },
                500
        );
    } finally {
        await prisma.$disconnect();
    }
});

dataRouter.post("/addProfile", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

   const body = await c.req.json();

    try {
        const userDetails = await prisma.user.update({
            where: {
                user_id: c.user.user_id,
            },
            data: {
                name: body.name,
                college: body.college,
                branch: body.branch,
                major: body.major,
            }
        });

        return c.json({
            message: "Profile Updated",
            details: {
                name: userDetails.name,
                college: userDetails.college,
                branch: userDetails.branch,
                major: userDetails.major,
            }
        });
    } catch (error) {
            console.error(error);
            return c.json(
                {
                    message: `${error}`,
                },
                500
        );
    } finally {
        await prisma.$disconnect();
    }
});

dataRouter.post("/addpdf", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

   const body = await c.req.json();

    try {
        const pdfDetails = await prisma.uploads.create({
            data: {
                user_id: c.user.user_id,
                name: body.name,
                type: body.type,
                subject: body.subject,
                description: body.description,
                url: body.url,
            }
        });

        const keywords = body.keywords.split(",");  

        const hashtags = await prisma.hashTags_uploads.createMany({
            data: keywords.map((keyword) => ({
                hash_tag: keyword.trim(),
                upload_id: pdfDetails.upload_id,
            })),
            skipDuplicates: true,
        });

        return c.json({
            message: "PDF Details Added",
        });
    } catch (error) {
            console.error(error);
            return c.json(
                {
                    message: `${error}`,
                },
                500
        );
    } finally {
        await prisma.$disconnect();
    }
});

dataRouter.post("/search", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

   

    try {
        const { instituteName, course, semester, keywords } = await c.req.json();

        const users = await prisma.user.findMany({
            where: {
                AND: [
                    { college: { contains: instituteName, mode: "insensitive" } },
                    { major: { contains: course, mode: "insensitive" } },
                    { semester: { contains: semester, mode: "insensitive" } },
                    {
                        Uploads: {
                            some: {
                                OR: keywords
                                    ? keywords.split(",").map(keyword => ({
                                        keywords: { contains: keyword.trim(), mode: "insensitive" }
                                    }))
                                    : undefined
                            }
                        }
                    }
                ]
            },
            include: {
                Uploads: {
                    include: {
                        HashTags_upload: true
                    }
                }
            }
        });

        return c.json(users);

    } catch (error) {
            console.error(error);
            return c.json(
                {
                    message: `${error}`,
                },
                500
        );
    } finally {
        await prisma.$disconnect();
    }
}
);


dataRouter.get("/getAllUrls", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

    try {
        const res = await prisma.uploads.findMany();

        return c.json(res);
    } catch (error) {
            console.error(error);
            return c.json(
                {
                    message: `${error}`,
                },
                500
        );
    } finally {
        await prisma.$disconnect();
    }
}
);


export default dataRouter;