import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ necesario para ngModel
import { EmpleadosService } from '../../../services/empleados';
import { Empleados } from '../../../interfaces/empleados';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosAdmin {
  private _empleadoService = inject(EmpleadosService);
  allEmployees: Empleados[] = [];
  filteredEmployees: Empleados[] = [];
  selectedDepto: string = '';

  ngOnInit(): void {
    this.showEmployees();
  }

  showEmployees() {
    this._empleadoService.mostrarEmpleados().subscribe({
      next: (res: any) => {
        this.allEmployees = res.data;
        this.filteredEmployees = res.data;
      },
      error: (err: any) => console.error(err.error?.mensaje || err)
    });
  }

  filtrarPorDepartamento() {
    if (this.selectedDepto === '') {
      this.filteredEmployees = this.allEmployees;
    } else {
      this.filteredEmployees = this.allEmployees.filter(
        (emp) => emp.departamento === this.selectedDepto
      );
    }
  }
}
