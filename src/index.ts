import express, { Request, Response, Router } from "express";
import cors from "cors";

import dotenv from "dotenv"
import phones_router from "./routers/phones_router";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.use(phones_router)


const porta = process.env.PORT || 5000
app.listen(porta,()=>{console.log(`Servidor rodando na porta: ${porta}`)})
