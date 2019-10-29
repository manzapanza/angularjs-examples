(function() {
  'use strict';

  angular
    .module('dojo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var main = this;

    main.dojos = [
      'escrevendo-no-celular'
    ];

    main.goToDojo = function(dojo){
      $state.go(dojo);
    };
  }
})();
