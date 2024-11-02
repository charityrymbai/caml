import { verify } from 'hono/jwt';

const authMiddleware = async (c, next) => {
     try {
          const authorization = await c.req.header('Authorization');
          const token = authorization.split(' ')[1];

          const secret = c.env.JWT_SECRET;
          const verifiedToken = await verify(token, secret);
          c.user = verifiedToken;
          console.log(verifiedToken);
          await next();
     } catch {
          return c.json({
               message: 'not authorised',
          });
     }
};

export default authMiddleware;
