import express from 'express';
const userRouter = express.Router();

userRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.post((req, res) => {
  res.end('This POST method is for registering');
});

userRouter.route('/:userId')
.all((req, res, next) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
next();
})
.post((req, res) => {
res.end('This POST is used for logging in');
})
.put((req, res) => {
res.statusCode = 200;
res.end('This PUT method is used for logging out')})
.put((req, res) => {
res.end("This PUT method is used for editing the user's profile");
})
.delete((req, res) => {
res.end('This DELETE method is used for deleting the user account');
});

export default userRouter;