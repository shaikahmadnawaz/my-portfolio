import { Router } from "express";
import { acceptContact } from "../controllers/contact.controllers.js";

const router = Router();

router.post("/", acceptContact);

export default router;
