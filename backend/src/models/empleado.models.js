import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

codigo:{
    type: Number,
    required :true
},

nombre:{
    type:String,
    required :true
},

primerApellido:{
    type:String,
    required:true
},

segundoApellido:{
    type:String,
    required:true
},

departamento:{
    type : String,
    enum :["Workforce","Training","Customer Experience","Operations","HR","Finances"]
}

});

export const employeeModel = mongoose.model("empleados",employeeSchema)