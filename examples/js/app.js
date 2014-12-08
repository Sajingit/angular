(function() {
	var app = angular.module('examples', []);
	app.controller('exampleController', function( $scope ){ 
		$scope.counterVal = 0;
		$scope.counter = function(){
			if($scope.counterVal >= 5){
				alert("No more click");
				return false;
			}
			$scope.counterVal = $scope.counterVal + 1;
		}
	});
	
	
	app.controller('exampleRepeatController', function( $scope ){ 
		
		// Item List Arrays
		$scope.details = [];
		$scope.name = '';
		$scope.age  = '';
		$scope.message = 'No details are found';
		$scope.activeMessage = true;
		$scope.activeTable = false;
		
		$scope.addDetails = function () {
			
			$scope.emptyError = '';
			if($scope.name.length == 0 || $scope.age.length == 0){
				$scope.message = 'Plese fill all the fields';
				$scope.activeMessage = true;
				return false;
			}
			
			$scope.details.push({
		        name: $scope.name,
		        age: $scope.age
		    });
			$scope.name = '';
			$scope.age  = '';
			
			var arrayLength = $scope.details.length;
			if(arrayLength > 0){
				$scope.message = 'No details are found';
				$scope.activeTable = true;
				$scope.activeMessage = false;
			}
		}
		
		$scope.removeDetails = function (detail) {
			$scope.details.splice(($scope.details.indexOf(detail)),1);
			var arrayLength = $scope.details.length;
			if(arrayLength == 0){
				$scope.message = 'No details are found';
				$scope.activeTable = false;
				$scope.activeMessage = true;
			}
		}
		
		
		$scope.toggle = function (detail) {
			$scope.activeTable = !$scope.activeTable;
		}
	});
	
})();	