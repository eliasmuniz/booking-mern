import express from 'express';
import authRouter from './auth.router.js';
import hotelsRouter from './hotels.router.js';
import roomsRouter from './rooms.router.js';
import usersRouter from './users.router.js';

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/hotels', hotelsRouter);
  router.use('/rooms', roomsRouter);
  router.use('/users', usersRouter);
}

export default routerApi;
