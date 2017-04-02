/**
 * 
 */
app.controller('TarefasController', ['$scope', 
      'tarefas-service', function($scope, tarefasService) {
		
	tarefasService.list().success(function(data) {
		    $scope.tarefas = data;
	});
	
	$scope.tarefaNova = {
	        titulo: '',
	        descricao: ''
	};
	
	$scope.salvar = function(form) { 

		tarefasService.save($scope.tarefaNova.titulo, $scope.tarefaNova.descricao).success(function() {
		    
		});
    };
	
}]);
