import { schemaValidate } from "../middlewares/schema_middleware";
import { get_recharges, post_recharges } from "../controllers/recharges_controller";
import { Router } from "express";
import { recharge_schema } from "../schemas/recharges_schema";



const recharges_router = Router();

recharges_router.post("/recharges",schemaValidate(recharge_schema),post_recharges)
recharges_router.get("/recharges/:phone",get_recharges)
export default recharges_router