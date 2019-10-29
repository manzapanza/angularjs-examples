(function() {
    'use strict';
  
    angular
      .module('dojo')
      .controller('EscrevendoNoCelularController', EscrevendoNoCelularController);
  
    /** @ngInject */
    function EscrevendoNoCelularController() {
      var ctrl = this;
      
      ctrl.texto = 'SEMPRE ACESSO O DOJOPUZZLES';
      ctrl.resultadoCorreto = '77773367_7773302_222337777_777766606660366656667889999_9999555337777';
      ctrl.resultado = '';

      var tabela = [
          {letras: 'ABC', numero: 2},
          {letras: 'DEF', numero: 3},
          {letras: 'GHI', numero: 4},
          {letras: 'JKL', numero: 5},
          {letras: 'MNO', numero: 6},
          {letras: 'PQRS', numero:7},
          {letras: 'TUV', numero: 8},
          {letras: 'WXYZ', numero:9},
          {letras: ' ', numero: 0}
      ];

      function converterLetraEmNumeros(letra) {
        var resultado = '';
        
        tabela.forEach(function(letrasNumero) {
          var posicao = letrasNumero.letras.indexOf(letra);

          if(posicao > -1){
            for (var i = 0; i < posicao + 1; i++){
              resultado += ''+letrasNumero.numero;
            }
          }
        });

        return resultado;
      }
      
      for (let letra of ctrl.texto) {
        var numeros = converterLetraEmNumeros(letra);
        
        if(numeros.substring(0,1) == ctrl.resultado.substring(ctrl.resultado.length-1,ctrl.resultado.length)){
          ctrl.resultado += '_';
        }
        ctrl.resultado += numeros;
      }

    }
  })();



  