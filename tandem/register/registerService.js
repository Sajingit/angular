app.factory('registerFactory', function($http){

	return{
		getCources : function(callback){
			$http.get('../backend/register/register.php').success(callback);
		}
	}
	
});