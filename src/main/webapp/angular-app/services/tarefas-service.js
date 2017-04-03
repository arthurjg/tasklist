/**
 * 
 */
app.factory('tarefas-service', ['$http', function($http) { 
	
	var tarefasService = {
			list: function(){				
				return $http.get('http://localhost:8080/tasklist/rest/tarefas').then();				
			},
			setTarefa: function(tarefa){
				localStorage.setItem("tarefa", tarefa);
			}, 
			getTarefa: function(){
				return localStorage.getItem("tarefa");
			}, 
            save: function(id, titulo, descricao){
            	
            	var data = {
            			"id": id,
                        "titulo": titulo,
                        "descricao": descricao
                			};
            	$http.post( 'http://localhost:8080/tasklist/rest/tarefas', 
            			data, 
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