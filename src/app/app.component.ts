import { Municipio } from './models/municipio';
import { Estado } from './models/estado';
import { Observable } from 'rxjs';
import { Form } from './models/form';
import { AppService } from './services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app_vendas';

  forms: Form[] = [];
  estados: Estado[] = [];
  municipios: Municipio[] = [];
  public form: FormGroup;

  constructor(private service: AppService, formBuilder: FormBuilder) {
    this.service = service;
    this.form = formBuilder.group({
      nome: [""],
      estado: [""],
      municipio: [""],
      endereco: [""],
      horaInicio: [],
      horaFinal: []
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
    // this.forms.push(this.form);
  }
}
