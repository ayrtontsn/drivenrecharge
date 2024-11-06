import { schemaValidate } from "../middlewares/schema_middleware";
import { post_phones } from "../controllers/phones_controller";
import { Router } from "express";
import { phone_schema } from "../schemas/phones_schema";

const phones_router = Router();

phones_router.post("/phone", schemaValidate(phone_schema),post_phones)

export default phones_router