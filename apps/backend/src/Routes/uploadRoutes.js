import { Hono } from 'hono';
import { encodeBase64 } from 'hono/utils/encode';
import fetch from 'node-fetch';

const uploadRouter = new Hono();

uploadRouter.post("/file", async (c) => {
    const body = await c.req.parseBody();
    const base64 = body['file']; 

    const encodedApiKey = encodeBase64(c.env.IMAGEKIT_API_KEY);
    console.log(encodedApiKey)

    if (!base64) {
        return c.text('No file provided', 400);
    }

    const formData = new FormData();
    formData.append('file', base64); 
    formData.append('fileName', 'charity'); 
    formData.append('folder', 'uploads');

    const url = 'https://upload.imagekit.io/api/v1/files/upload';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Basic cHJpdmF0ZV81TmkzRHdPM2NKUkZoUnFUV2ZOS0JvMmsrMk09Og==`
        },
        body: formData,
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to upload PDF');
        }

        return c.json({ url: result.url }); 
    } catch (error) {
        console.error(error);
        return c.text('Error uploading file: ' + error.message, 500);
    }
});

export default uploadRouter;
