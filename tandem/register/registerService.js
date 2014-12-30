app.factory('registerFactory', function($http){

	var registerFactory = {};

	registerFactory.getCources = function(){
		return $http.get('../backend/register/cources.php');
	}
	registerFactory.saveUser = function(data){
		return $http.post('../backend/register/saveUserData.php', data);
	}
	
	return registerFactory;
	
});