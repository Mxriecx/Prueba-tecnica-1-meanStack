import { employeeModel } from "../models/empleado.models.js";


export const crearEmpleado = async (req, res) => {
  try {
    const { codigo, nombre, primerApellido, segundoApellido, departamento } = req.body;

    const nuevoEmpleado = new employeeModel({
      codigo,
      nombre,
      primerApellido,
      segundoApellido,
      departamento,
    });

    await nuevoEmpleado.save();

    res.status(201).json({
      mensaje: "Empleado creado exitosamente",
      empleado: nuevoEmpleado,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Error al crear empleado",
      error: error.message,
    });
  }
};


export const mostrarEmpleado = async (req, res) => {
  try {
    const allEmployees = await employeeModel.find();
    return res.status(200).json({
      mensaje: "Se encontraron todos los empleados",
      data: allEmployees,
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error al mostrar los empleados",
      error: error.message || error,
    });
  }
};

export const actualizarEmpleadoPorId = async (req, res) => {
  try {
    const idForEmployeeUpdate = req.params._id;

    await employeeModel.findByIdAndUpdate(idForEmployeeUpdate, req.body);

    return res.status(200).json({
      mensaje: "Empleado actualizado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error al actualizar el empleado",
      error: error.message || error,
    });
  }
};


export const borrarEmpleadoPorId = async (req, res) => {
  try {
    const idForDelete = req.params._id;

    await employeeModel.findByIdAndDelete(idForDelete);

    return res.status(200).json({
      mensaje: "Empleado eliminado correctamente",
    });

  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error al eliminar el empleado",
      error: error.message || error,
    });
  }
};
