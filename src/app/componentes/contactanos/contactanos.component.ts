import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudesContactosComponent } from '../solicitudes-contactos/solicitudes-contactos.component';
import { SolicitudesContactosService } from '../../servicios/solicitudes-contactos/solicitudes-contactos.service';
import { error } from 'console';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder, private solicitudesContactosSrv:SolicitudesContactosService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
  }
  enviarDatos(){
    this.datos_formulario = this.formularioForm.value;
    this.solicitudesContactosSrv.crearFormulario(this.datos_formulario).subscribe(
      (response:any) => {
        console.log(response.solicitud_formulario)
      },error =>{
        console.log(error)
      }
    )

    console.log("Enviar datos")
    
    console.log(this.formularioForm.value);
  }
}
