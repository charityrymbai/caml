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

export default dataRouter;