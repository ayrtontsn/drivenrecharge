import { get_summary } from "../controllers/summary_controller";
import { Router } from "express";

const summary_router = Router();

summary_router.get("/summary/:document", get_summary)

export default summary_router