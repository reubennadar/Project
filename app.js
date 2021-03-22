(function () {
  'use strict'
  angular.module('myFirstApp',[])
  .controller('myFirstController',DIController);
  DIController.$inject=['$scope','$filter','$injector'];
  function DIController($scope,
    $filter,
    $injector) {
    $scope.name="Reuben";
    $scope.totalvalue="";
    $scope.displayNumeric=function () {
      var enteredstring=$scope.name;
      var totalnumericvalue=calculatenumericvalue(enteredstring);
      $scope.totalvalue=totalnumericvalue;
    }

    function calculatenumericvalue(string) {
      var totalnumericvalues=0;
      for(var i=0;i<string.length;i++)
      {
        totalnumericvalues+=string.charCodeAt(i);
      }
      return totalnumericvalues;
    }
    $scope.uppercasevalue="";
    $scope.upper=function () {
      var uppers=$filter('uppercase');
      $scope.uppercasevalue=uppers($scope.uppercasevalue);
      console.log($injector.annotate(DIController));

    }
    console.log(DIController.toString());

  }
})();
