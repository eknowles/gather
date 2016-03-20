'use strict';

(function () {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
    }

  }

  angular.module('gatherApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
