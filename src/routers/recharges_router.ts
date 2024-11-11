import { schemaValidate } from "../middlewares/schema_middleware";
import { get_recharges, post_recharges } from "../controllers/recharges_controller";
import { Router } from "express";
import { recharge_schema } from "../schemas/recharges_schema";



const recharges_router = Router();

recharges_router.post("/recharge",schemaValidate(recharge_schema),post_recharges)
recharges_router.get("/recharge/:phone",schemaValidate(recharge_schema),get_recharges)
export default recharges_router