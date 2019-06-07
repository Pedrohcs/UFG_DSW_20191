new Vue({
    el: '#calculadora',
    data: {
        titulo: 'Calculadora de IMC',
        peso: '',
        altura: '',
        imc: 'Faça',
        situacao: 'e assim descubra sua situação',
        corSituacao: 'black'
    },
    methods: {
        calcularIMC(){
            if(this.peso !== '' && this.altura !== '') {
                let pesoInt = parseFloat(this.peso.replace(",", "."))
                let alturaInt = parseFloat(this.altura.replace(",", "."))
                let resultado = parseFloat(pesoInt / (alturaInt * alturaInt)).toFixed(2)
                this.imc = resultado + ' IMC'
                this.verificaSituacao(resultado)
                this.peso = ''
                this.altura = ''
                return;
            }
            this.imc = 'Peso e Altura não digitados'
            this.situacao = 'Preencha os dados para poder calcular o IMC'
        },
        verificaSituacao(resultado){
            if(resultado <= 18.5){
                this.situacao = 'Abaixo do peso'
                this.corSituacao = '#ff9800'
            } else if(resultado > 18.5 && resultado <= 24.9){
                this.situacao = 'Peso normal'
                this.corSituacao = '#64dd17'
            } else if (resultado > 24.9 && resultado <= 29.9){
                this.situacao = 'Sobrepeso'
                this.corSituacao = '#ef5350'
            } else if (resultado > 29.9 && resultado <= 34.9){
                this.situacao = 'Obesidade grau 1'
                this.corSituacao = '#f44336'
            } else if (resultado > 29.9 && resultado <= 39.9){
                this.situacao = 'Obesidade grau 2'
                this.corSituacao = '#d32f2f'
            } else {
                this.situacao = 'Obesidade grau 3'
                this.corSituacao = '#d50000'
            }
        }
    }
})
