(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckCtrl', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
   $scope.menu_list = " , , ";
   $scope.message = "Please enter data first";
   $scope.chkTooMuch = function() {
       var words = $scope.menu_list.split(",");
       var total = 0;
       console.log("Obj",words,"Size",words.length);
       for(var i=0;i<words.length;i++){
          if(words[i].trim() != "")
             total++;
       }
       if(total == 0)
           $scope.message = "Please enter data first";
       else if(total > 0 && total <= 3)
               $scope.message = "Enjoy!";
           else
               $scope.message = "Too much!";
  };
 }
})();
