var app = angular.module('service', []);
app.controller('serviceController',function( $scope,registerFactory){ 
	
	$scope.selectedService = [];
	registerFactory.getCources(function(data){
		$scope.services = data;
	});



	$scope.toggleService = function (value){
		value.active = !value.active;

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
	
	$scope.addSelectedService = function (){ 
		var nameCon = '';
		var total = 0;
		angular.forEach($scope.services,function(service){ 
			if(service.active == true){
				nameCon = nameCon + service.name + ", " ;
				total = total + parseInt(service.price);
			}
		});
		
		$scope.selectedService.push({
			name: nameCon.trim().slice(0,-1),
			price: total,
		})
	}
	
	$scope.remove = function (item){ 
		$scope.selectedService.splice($scope.selectedService.indexOf(item),1)
	}
	
	
});
