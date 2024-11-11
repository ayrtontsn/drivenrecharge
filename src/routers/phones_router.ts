import { schemaValidate } from "../middlewares/schema_middleware";
import { get_phones, post_phones } from "../controllers/phones_controller";
import { Router } from "express";
import { phone_schema } from "../schemas/phones_schema";

const phones_router = Router();

phones_router.post("/phone", schemaValidate(phone_schema),post_phones)
phones_router.get("/phone/:document", get_phones)

export default phones_router