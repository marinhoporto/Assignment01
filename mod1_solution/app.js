(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckCtrl', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.menu_list = "Item1, Item2, Item3";
  $scope.message = "Inicial..";
  //$scope.upper = function () {
  //  var upCase = $filter('uppercase');
  //  $scope.name = upCase($scope.name);
  //};
  $scope.chkTooMuch = function() {
      var words = $scope.menu_list.split(",");
      var total = 0;
      console.log("Obj",words,"Size",words.length);
      for(var i=0;i<words.length;i++){
        if(words[i] != "")
          total++;
      }
      if(total == 0)
          $scope.message = "Try Again";
      else if(total > 0 && total <= 3)
              $scope.message = "Enjoy!";
           else
              $scope.message = "Too much!";
  };
 }
})();
