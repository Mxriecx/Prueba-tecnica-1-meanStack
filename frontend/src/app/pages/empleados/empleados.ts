import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados';


@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent {

  private empleadoService = inject(EmpleadosService);

  empleados: any[] = [];   // lista
  modoEditar: boolean = false;
  idEditando: string | null = null;

  // Formulario
  registerForm = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    primerApellido: new FormControl('', [Validators.required]),
    segundoApellido: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.empleadoService.mostrarEmpleados().subscribe(res => {
      this.empleados = res.data;
    });
  }

  enviarEmpleado() {
    if (this.registerForm.invalid) return;

    this.empleadoService.crearEmpleado(this.registerForm.value).subscribe(() => {
      alert("Empleado creado ✅");
      this.registerForm.reset();
      this.cargarEmpleados();
    });
  }

  editar(empleado: any) {
    this.modoEditar = true;
    this.idEditando = empleado._id;

    this.registerForm.setValue({
      codigo: empleado.codigo,
      nombre: empleado.nombre,
      primerApellido: empleado.primerApellido,
      segundoApellido: empleado.segundoApellido,
      departamento: empleado.departamento
    });
  }

  actualizarEmpleado() {
    if (!this.idEditando) return;

    this.empleadoService.actualizarEmpleado(this.idEditando, this.registerForm.value).subscribe(() => {
      alert("Empleado actualizado ✅");
      this.modoEditar = false;
      this.idEditando = null;
      this.registerForm.reset();
      this.cargarEmpleados();
    });
  }

  borrar(id: string) {
    if (!confirm("¿Borrar empleado?")) return;

    this.empleadoService.borrarEmpleado(id).subscribe(() => {
      alert("Empleado eliminado ❌");
      this.cargarEmpleados();
    });
  }
}

