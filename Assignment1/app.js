(function () {
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckfunction);
  LunchCheckfunction.$inject=['$scope','$filter'];
  function LunchCheckfunction($scope) {
    $scope.lunchText="";
    $scope.Message="";
    $scope.lunchSubmit=function () {
      const lt=$scope.lunchText;
      if(lt=="")
      {
        $scope.Message="Please enter data first";
      }
      else {
        const words=lt.split(',');
        console.log(words.length);
        var count=words.length;
        for(var i=0;i<words.length;i++)
        {
          if(words[i]==" "||words[i]=="")
          {
            count--;
          }
        }
        if(count<=3)
        {
          $scope.Message="Enjoy";
        }
        else {
          $scope.Message="Too Much";
        }
      }

    }
  }
})();
