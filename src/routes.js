// const { Router } = require('express')
import { Router } from 'express'
import ProductController from './app/controllers/ProductController'
import SessionController from './app/controllers/SessionController'
import CategoryController from './app/controllers/CategoryController'
import UserController from './app/controllers/UserController'
import authMiddlewares from './app/middlewares/auth'

import multer from 'multer'
import multerConfig from './config/multer'
import OrderController from './app/controllers/OrderController'

const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', OrderController.update)

// module.exports = routes

export default routes
