new Vue({
    el: '#calculadora',
    data: {
        contador: 1,
        titulo: 'Calculadora para Churrascos',
        resultado: [],
        carnesBovinasEscolhidas: [
        ],
        outrasCarnesEscolhidas: [
        ],
        bebidasEscolhidas: [
        ],
        carnesBovinas: [
            {carne: 'Picanha'},
            {carne: 'Alcatra'},
            {carne: 'Costela'},
            {carne: 'Contra Filé'},
            {carne: 'Maminha'}
        ],
        outrasCarnes: [
            {carne: 'Asinha de Frango'},
            {carne: 'Linguiça'}
        ],
        bebidas: [
            {bebida: 'Refigerante 1L'},
            {bebida: 'Cerveja 1L'},
            {bebida: 'Suco 1L'}
        ],
        adultos: '',
        criancas: ''
    },
    methods: {
        calcularChurrasco () {
            this.resultado = [];
            let totalCarneBovina = (0.6 * this.adultos) + (0.3 * this.criancas)
            let totalOutraCarne = (0.4 * this.adultos) + (0.2 * this.criancas)
            let quantidadeCadaCarneBovina = totalCarneBovina / this.carnesBovinasEscolhidas.length
            let quantidadeCadaOutraCarne = totalOutraCarne / this.outrasCarnesEscolhidas.length

            this.carnesBovinasEscolhidas.forEach(carneEscolhida => {
                const carne = {
                    nome: carneEscolhida,
                    quantidade: quantidadeCadaCarneBovina + 'Kg'
                }
                this.resultado.push(carne)
            })

            this.outrasCarnesEscolhidas.forEach(carneEscolhida => {
                const carne = {
                    nome: carneEscolhida,
                    quantidade: quantidadeCadaOutraCarne + 'Kg'
                }
                this.resultado.push(carne)
            })

            this.bebidasEscolhidas.forEach(bebidaEscolhida => {
                if(bebidaEscolhida == 'Refigerante 1L'){
                    const refrigerante = {
                        nome: bebidaEscolhida,
                        quantidade: (this.adultos * 2) + (this.criancas * 0.5) + ' unidade'
                    }
                    this.resultado.push(refrigerante)
                }
                else if(bebidaEscolhida == 'Cerveja 1L'){
                    const cerveja = {
                        nome: bebidaEscolhida,
                        quantidade:(this.adultos * 3) + ' unidade'
                    }
                    this.resultado.push(cerveja)
                }
                else{
                    const suco = {
                        nome: bebidaEscolhida,
                        quantidade: (this.adultos * 2) + (this.criancas * 1) + ' unidade'
                    }
                    this.resultado.push(suco)
                }
            })


        }
    }
})
