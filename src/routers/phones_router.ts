import { get_phones } from "../controllers/phones_controller";
import { Router } from "express";

const phones_router = Router();

phones_router.get("/phone", get_phones)

export default phones_router