(function() {
	var app = angular.module('service', []);
	app.controller('serviceController', function( $scope ){ 
		
		$scope.services = [
		{
			name: 'Web Development',
			price: 300,
			active:true
		},{
			name: 'Design',
			price: 400,
			active:false
		},{
			name: 'Integration',
			price: 250,
			active:false
		},{
			name: 'Training',
			price: 220,
			active:false
		}
	];

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
		$scope.alert = function (){ 
alert("Test");

		}
	});

})();	 