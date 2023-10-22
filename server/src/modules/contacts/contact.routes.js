import { Router } from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
} from './contact.controller.js';

const contactRouter = Router();

contactRouter.get('/contacts', getAllContacts);
contactRouter.get('/contacts/:id', getContactById);
contactRouter.post('/contacts', createContact);

export default contactRouter;
