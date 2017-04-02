/**
 * 
 */
app.factory('tarefas-service', ['$http', function($http) { 
	
	var tarefasService = {
			list: function(){
				console.log("list");
				return $http.get('http://localhost:8080/tasklist/rest/tarefas').then();				
			},
            		
            save: function(titulo, descricao){
            	$http.post( 'http://localhost:8080/tasklist/rest/tarefas', 
            			{
                    "titulo": titulo,
                    "descricao": descricao
            }, 
                        {"content-type":'application/json'})
                          .success(function() { 
                  			console.log("ok");
                  		}) 
                  		.error(function(err) { 
                  			console.log("erro");
                  		});
            }
            
	};
  
	return tarefasService;
}]);