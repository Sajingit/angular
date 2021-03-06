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


	/**

	Form Controller
	**/
	app.controller('exampleFormController', function( $scope ){  
		
		$scope.formDetails = [];
		$scope.type = 'Reccuring';
		$scope.grade = 0;
		$scope.index = null;

		$scope.addFormDetails = function () { 
			
			if($scope.index != null){
				var contacts = {
						name: $scope.name,
						email: $scope.email,	
						phone: $scope.phone,	
						grade: $scope.grade,	
						type: $scope.type,
					};
			$scope.formDetails[$scope.index] = contacts;
			$scope.index = null;
			
			}else{

				$scope.formDetails.push({
						name: $scope.name,
						email: $scope.email,	
						phone: $scope.phone,	
						grade: $scope.grade,	
						type: $scope.type,			
				});
			}
			$scope.reset();
		}
		
		$scope.remove = function (detail) {
			$scope.formDetails.splice($scope.formDetails.indexOf(detail),1);
		}

		$scope.edit = function (detail) {
			$scope.name = detail.name;
			$scope.email = detail.email;
			$scope.phone = detail.phone;
			$scope.grade = detail.grade;
			$scope.type = detail.type;
			$scope.index = $scope.formDetails.indexOf(detail);
		}
		
		$scope.reset = function (){
			$scope.name = '';
			$scope.email = '';	
			$scope.phone = '';	
			$scope.grade = '';	
			$scope.type = '';	
		}
	});
	
})();	