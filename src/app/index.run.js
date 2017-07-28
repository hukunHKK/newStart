(function() {
  'use strict';

  angular
    .module('newStart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
