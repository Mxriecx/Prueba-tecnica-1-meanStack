import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/config/database.js";
import {employeeRouter} from "./src/routes/empleado.routes.js"
import cors from "cors"

const app =express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
dbConnect();

app.get("/",(req,res)=>
res.send("Server is Working!")
);

app.use(cors());
app.use("/empleados",employeeRouter)
app.listen(port,()=>{
    console.log(`Server is being executed on http://localhost:${port}`)
});
