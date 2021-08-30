import express from 'express'
import { saveMessage } from '../controllers/messageController.js';

const Router = express.Router()

// api/msg/
Router.route('/')
      .post(saveMessage)
export default Router;