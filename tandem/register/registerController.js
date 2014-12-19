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
		angular.forEach($scope.services,function(service){ 
			if(service.active == true){
				total = total + parseInt(service.price);
			}
		});
		return total;
	}
	
	$scope.clickRegister = function (){ 

		registerFactory.saveUser($scope.register).success(function(){
			alert("success");
		}).error(function(){
			alert("error");
		});
		console.log($scope.register);
	}
	
	$scope.remove = function (item){ 
		$scope.selectedService.splice($scope.selectedService.indexOf(item),1)
	}
	
	
});
