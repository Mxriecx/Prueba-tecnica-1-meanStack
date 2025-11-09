import express from "express";
import { crearEmpleado, mostrarEmpleado,actualizarEmpleadoPorId, borrarEmpleadoPorId } from "../controllers/empleado.controller.js";

export const employeeRouter = express.Router();

employeeRouter.post("/crear",crearEmpleado);

employeeRouter.get("/mostrar",mostrarEmpleado);

employeeRouter.put("/:_id",actualizarEmpleadoPorId);

employeeRouter.delete("/:_id",borrarEmpleadoPorId)