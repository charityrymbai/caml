import { Hono } from "hono";
import { cors } from "hono/cors";

import authRouter from "./Routes/authRoutes";
import uploadRouter from "./Routes/uploadRoutes";
import aiRouter from "./Routes/aiRoutes";
import dataRouter from "./Routes/dataRoutes";

const app = new Hono();

app.use("*", cors());

app.get("/health", (c) => {
    return c.json({ status: "ok" });
});

app.route("/api/v1/auth/", authRouter);
app.route("/api/v1/upload/", uploadRouter);
app.route("/api/v1/ai/", aiRouter);
app.route("/api/v1/data/",dataRouter);

export default app;


