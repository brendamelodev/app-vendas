import { Municipio } from './models/municipio';
import { Estado } from './models/estado';
import { Form } from './models/form';
import { AppService } from './services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app_vendas';

  formularios: Form[] = [];
  estados: Estado[] = [];
  municipios: Municipio[] = [];
  formGroup: FormGroup;

  constructor(private service: AppService, formBuilder: FormBuilder) {
    this.service = service;
    this.formGroup = formBuilder.group({
      nome: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      municipio: ["", [Validators.required]],
      endereco: ["", [Validators.required]],
      horaInicio: [, [Validators.required]],
      horaFinal: [, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.initializeEstado();
  }

  initializeEstado(): void {
    this.service.findAllEstado().subscribe(allEstados => {
      this.estados = allEstados;
    });
  }

  setMunicipio(id: number): void {
    this.service.findAllMunicipio(id).subscribe(allMunicipios => {
      this.municipios = allMunicipios;
    })
  }

  create(): void {
    if (this.formGroup.valid) {
      this.formularios.push(this.formGroup.value)
    }
  }

}
