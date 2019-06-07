import { Component } from '@angular/core';
import { Imc } from './models/imc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private imcModel : Imc){
  }

  titulo = 'Calculadora de IMC';

  pessoa = {
    peso: '',
    altura: ''
  };

  resultado = {
    imc: 'Faça',
        situacao: {
            estado: 'e assim descubra sua situação',
            corEstado: 'black'
        }
  };

  calcular(){
    this.resultado = this.imcModel.calcularIMC(this.pessoa)
  }

}
