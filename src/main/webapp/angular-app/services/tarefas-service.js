/**
 * 
 */
app.factory('tarefas-service', ['$http', function($http) { 
	
	var tarefasService = {
			list: function(){				
				return $http.get('http://localhost:8080/tasklist/rest/tarefas').then();				
			},
            save: function(tarefaEdicao){
            	
            	var data = {
            			"status": tarefaEdicao.status,
                        "titulo": tarefaEdicao.titulo,
                        "descricao": tarefaEdicao.descricao
                			};
            	return $http.post( 'http://localhost:8080/tasklist/rest/tarefas', 
            			data, 
                        {"content-type":'application/json'})
                          .success(function() { 
                  			console.log("ok");
                  		}) 
                  		.error(function(err) { 
                  			console.log("erro");
                  		});
            },
            update: function(tarefa){
            	
            	var data = {
            			"id": tarefa.id,
                        "titulo": tarefa.titulo,
                        "status": tarefa.status,
                        "descricao": tarefa.descricao
                			};
            	return $http.put( 'http://localhost:8080/tasklist/rest/tarefas', 
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