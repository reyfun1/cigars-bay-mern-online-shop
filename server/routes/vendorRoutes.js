import express from 'express'

import { getVendorById, getVendors } from '../controllers/vendorController.js';

const Router = express.Router()

// api/vendors/
Router.route('/')
      .get(getVendors)
// api/vendors/:id
Router.route('/:id')
      .get(getVendorById)


export default Router;