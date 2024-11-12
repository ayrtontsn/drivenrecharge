import { schemaValidate } from "../middlewares/schema_middleware";
import { get_phones, post_phones } from "../controllers/phones_controller";
import { Router } from "express";
import { phone_schema } from "../schemas/phones_schema";

const phones_router = Router();

phones_router.post("/phones", schemaValidate(phone_schema),post_phones)
phones_router.get("/phones/:document", get_phones)

export default phones_router