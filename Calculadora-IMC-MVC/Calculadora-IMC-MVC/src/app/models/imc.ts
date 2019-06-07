export class Imc {
    situacao = {
        estado: '',
        corEstado: ''
    };
    resultado = {
        imc: 'Faça',
        situacao: {
            estado: 'e assim descubra sua situação',
            corEstado: 'black'
        }
    }
  
    calcularIMC(pessoa){
      if(pessoa.peso !== '' && pessoa.altura !== '') {
          let pesoInt = parseFloat(pessoa.peso.replace(",", "."))
          let alturaInt = parseFloat(pessoa.altura.replace(",", "."))
          let calculo = (pesoInt / (alturaInt * alturaInt)).toFixed(2)
          let imc = calculo + ' IMC'
          this.situacao = this.verificaSituacao(calculo)
          this.resultado.imc = imc;
          this.resultado.situacao.estado = this.situacao.estado;
          this.resultado.situacao.corEstado = this.situacao.corEstado
          return this.resultado;
      }
      return this.resultado;
    }
  
    verificaSituacao(resultado){
      if(resultado <= 18.5){
          this.situacao.estado = 'Abaixo do peso'
          this.situacao.corEstado = '#ff9800'
          return this.situacao
      } else if(resultado > 18.5 && resultado <= 24.9){
          this.situacao.estado = 'Peso normal'
          this.situacao.corEstado = '#64dd17'
          return this.situacao
      } else if (resultado > 24.9 && resultado <= 29.9){
          this.situacao.estado = 'Sobrepeso'
          this.situacao.corEstado = '#ef5350'
          return this.situacao
      } else if (resultado > 29.9 && resultado <= 34.9){
          this.situacao.estado = 'Obesidade grau 1'
          this.situacao.corEstado = '#f44336'
          return this.situacao
      } else if (resultado > 29.9 && resultado <= 39.9){
          this.situacao.estado = 'Obesidade grau 2'
          this.situacao.corEstado = '#d32f2f'
          return this.situacao
      } else {
          this.situacao.estado = 'Obesidade grau 3'
          this.situacao.corEstado = '#d50000'
          return this.situacao
      }
  }
  }