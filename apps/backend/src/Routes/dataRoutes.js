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

dataRouter.get("/addlink", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

   const body = await c.req.json();

    try {
        const projectDetails = await prisma.project.create({
            data: {
                user_id: c.user.user_id,
                name: body.projectName,
                url: body.githubLink,
                description: body.description,
            }
        });

        console.log(projectDetails);

        const keywords = body.keywords.split(",");  

        const hashtags = await prisma.hashTags.createMany({
            data: keywords.map((keyword) => ({
                hash_tag: keyword.trim(),
                project_id: projectDetails.project_id,
                upload_id: 0, 
            })),
            skipDuplicates: true,
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

        // const hashtags = await prisma.hashTags.createMany({
        //     data: keywords.map((keyword) => ({
        //         hash_tag: keyword.trim(),
        //         project_id: 0,
        //         upload_id: pdfDetails.upload_id, 
        //     })),
        //     skipDuplicates: true,
        // });

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



export default dataRouter;