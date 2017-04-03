/**
 * 
 */
app.controller('TarefasController', ['$scope', '$window',
      'tarefas-service',  function($scope, $window, tarefasService) {
		
	tarefasService.list().then(function(response) {		
		$scope.tarefas = response.data;
	});
	
	if(tarefasService.getTarefa() == null || tarefasService.getTarefa() == undefined){		
		console.log("null");
		$scope.tarefaEdicao = {
				id: null,
				titulo: '',
				descricao: ''
		};
	} else {		
		$scope.tarefaEdicao = tarefasService.getTarefa();
		console.log($scope.tarefaEdicao.titulo);
	}
	
	
	
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
    	
    	tarefasService.setTarefa(tarefa);
    	$window.location.href = 'tarefa-edicao.xhtml';
    }
	
}]);
