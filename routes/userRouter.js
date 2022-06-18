import express from 'express';
const userRouter = express.Router();

userRouter.get('/users', (req, res) => {
  es.send('Hello');
});

export default userRouter;