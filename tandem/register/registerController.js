var app = angular.module('service', []);
app.controller('serviceController',function( $scope,registerFactory){ 
	
	$scope.register = {};
	$scope.selectedService = [];

	registerFactory.getCources().success(function(data){
		$scope.cources = data;
	});


	$scope.toggleService = function (value){
		value.active = !value.active;
		selected = '';
		angular.forEach($scope.cources, function(cource){
			if(cource.active == true){
				selected = cource.name +', '+ selected;
			}
		});

		$scope.register.selectedCourses = selected.slice( 0 , -2);
	}

	$scope.total = function (){ 
	    total = 0;
		angular.forEach($scope.cources,function(cource){ 
			if(cource.active == true){
				total = total + parseInt(cource.price);
			}
		});
		return total;
	}
	
	$scope.clickRegister = function (){ 

		registerFactory.saveUser($scope.register).success(function(data){
				if(data.success_message != null){
					$scope.successMessage = data.success_message;
				}else{
					$scope.errorMessage = data.error_message; 
				}
			}
		}).error(function(){
			alert("error");
		});
		console.log($scope.register);
	}
	
	$scope.remove = function (item){ 
		$scope.selectedService.splice($scope.selectedService.indexOf(item),1)
	}
	
	
});
