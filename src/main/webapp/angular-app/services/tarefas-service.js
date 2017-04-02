/**
 * 
 */
app.factory('tarefas-service', ['$http', function($http) { 
	
	var tarefasService = {
			list: function(){
				return $http.get('http://localhost:8080/tasklist/rest/tarefas') 
				.success(function(data) { 
        			return data; 
        		}) 
        		.error(function(err) { 
        			return err; 
        		});
			},
            		
            save: function(titulo, descricao){
            	$http.post( 'http://localhost:8080/tasklist/rest/tarefas', 
                        null, 
                        {"content-type":'application/json',
                         params: {
                                  "titulo": titulo,
                                  "descricao": descricao}
                          })
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