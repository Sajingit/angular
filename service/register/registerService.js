app.factory('registerFactory', function(){
	
	var services = [
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
	return services;
	
});