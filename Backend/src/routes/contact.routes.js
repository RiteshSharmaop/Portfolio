import { Router } from 'express';
import { contact } from '../controllers/contact.controller.js';

const router = Router();
console.log("Router");

router.route("/contact").post(contact)


export default router