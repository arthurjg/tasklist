/**
 * 
 */
app.controller('TarefasController', ['$scope', '$window',
      'tarefas-service',  function($scope, $window, tarefasService) {
		
	tarefasService.list().then(function(response) {		
		$scope.tarefas = response.data;
	});
	
	
	$scope.tarefaEdicao = {
		id: null,
		titulo: '',
		descricao: ''
	};
	
	$scope.salvar = function(form) { 		
		tarefasService.save($scope.tarefaEdicao.id, $scope.tarefaEdicao.titulo, $scope.tarefaEdicao.descricao)
			.success(function() {		
				tarefasService.tarefaEdicao = {};
				$scope.tarefaEdicao = {
						id: null,
						titulo: '',
						descricao: ''
				};
		});
    };
    
    $scope.editar = function(tarefa) {
    	$scope.tarefaEdicao.id = tarefa.id;
    	$scope.tarefaEdicao.titulo = tarefa.titulo;
    	$scope.tarefaEdicao.descricao = tarefa.descricao;     	
    	
    	$window.location.href = 'tarefa-edicao.xhtml';
    }
	
}]);
