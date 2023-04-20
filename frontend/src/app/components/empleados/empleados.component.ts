import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

//definir para Materialize
declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleado: Empleado;

  constructor(public empleadoService: EmpleadoService) { 
    this.empleado = new Empleado();
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void{
    this.empleadoService.getEmpleados()
      .subscribe(res =>{
        this.empleadoService.empleados = res as Empleado[];
        console.log('getEmpleados->',res);
      });
  }

  addEmpleado(form: NgForm): void{
    console.log('form->',form.value);
    //si existe _id =>hay que actualizar
    if(form.value._id){
      this.empleadoService.updateEmpleado(form.value)
        .subscribe(res =>{ 
          console.log('edit Empleado->',res);
          this.resetForm(form);
          M.toast({html: 'Empleado modificado exitosamente'});
          this.getEmpleados();
        });
    }else{
      this.empleadoService.addEmpleado(form.value)  
        .subscribe(res =>{ //escuchar el retorno de la respuesta del Server
          console.log('addEmpleado->',res);
          this.resetForm(form);
          M.toast({html: 'Empleado guardado exitosamente'});
          this.getEmpleados();
        });
    }
  }

  resetForm(form?: NgForm): void{
    if(form){
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }

  editEmpleado(empleado: Empleado): void{
    this.empleadoService.selectedEmpleado = empleado;   
  }

  deleteEmpleado(id: String): void{
    if(confirm('¿Esta seguro que desea eliminar?')){
      this.empleadoService.deleteEmpleado(id)
        .subscribe(res =>{
          console.log('deleteEmpleado->',res);
          M.toast({html: 'Empleado eliminado exitosamente'});
          this.getEmpleados();
        });
    }
  }
}
