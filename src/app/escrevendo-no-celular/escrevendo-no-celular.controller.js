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

    }
  })();



  