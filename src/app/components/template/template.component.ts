import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid #d9534f;
    }

    .invalid {
      color: #d9534f;
    }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
      codigo: "ESP",
      nombre:"España"
    },
    {
      codigo: "CRI",
      nombre:"Costa Rica"
    }
  ]

  sexos:String[] = ["Hombre", "Mujer", "Sin definir"]

  constructor() { }

  guardar( forma: NgForm ) {
    console.log("ngForm", forma);
    console.log("Valor forma", forma.value);

    console.log("Usuario", this.usuario);
  }

}
