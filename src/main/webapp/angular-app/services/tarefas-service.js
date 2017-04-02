/**
 * 
 */
app.factory('tarefas-service', ['$http', function($http) { 
  
	return $http.get('http://localhost:8080/tasklist/rest/tarefas') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);