angular.module('appIndex', ['templates', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      templateUrl: 'tpl.home.html',
      controller: 'ctrl.home',
      url: '/'
    }).state('info', {
      templateUrl: 'tpl.info.html',
      url: '/info'
    });
    $urlRouterProvider.otherwise('/');
  }]);
angular
  .module('appIndex')
  .controller('ctrl.home', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    var self = $scope.self = {
      time: new Date(),
      refresh: function () {
        this.time = new Date();
      }
    };
  }]);