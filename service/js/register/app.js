var app = angular.module('service', []);
app.controller('serviceController',function( $scope,registerFactory){ 
	
	$scope.selectedService = [];
	$scope.services = registerFactory;

	$scope.toggleService = function (value){
		value.active = !value.active;

	}

	$scope.total = function (){ 
	    total = 0;
		angular.forEach($scope.services,function(service){ 
			if(service.active == true){
				total = total + service.price;
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
				total = total + service.price;
			}
		});
		
		$scope.selectedService.push({
			name: nameCon.trim().slice(0,-1),
			price: total,
		})
	}
	
	$scope.remove = function (item){ console.log($scope.selectedService.indexOf(item));
		$scope.selectedService.splice($scope.selectedService.indexOf(item),1)
	}
	
	
});
