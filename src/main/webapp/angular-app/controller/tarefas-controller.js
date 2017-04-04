/**
 * 
 */
app.controller('TarefasController', ['$scope', '$window',
      'tarefas-service',  function($scope, $window, tarefasService) {
		
	$scope.listar = function(){
		tarefasService.list().then(function(response) {		
			$scope.tarefas = response.data;
		});
	}
	
	$scope.editing = false;	
	
	$scope.tarefaEdicao = {
		id: null,
		titulo: '',
		descricao: ''
	};
	
	$scope.salvar = function(form) { 	
		if($scope.tarefaEdicao.id == null){
			tarefasService.save($scope.tarefaEdicao.id, $scope.tarefaEdicao.titulo, $scope.tarefaEdicao.descricao)
			.success(function() {		
				$scope.editing = false;
				$scope.tarefaEdicao = {
						id: null,
						titulo: '',
						descricao: ''
				};
				$scope.listar();
		});
		}
		tarefasService.update($scope.tarefaEdicao.id, $scope.tarefaEdicao.titulo, $scope.tarefaEdicao.descricao)
			.success(function() {		
				$scope.editing = false;
				$scope.tarefaEdicao = {
						id: null,
						titulo: '',
						descricao: ''
				};
				$scope.listar();
		});
    };
    
    $scope.editar = function(tarefa) {
    	if(tarefa != null && tarefa != undefined){
    		$scope.tarefaEdicao.id = tarefa.id;
        	$scope.tarefaEdicao.titulo = tarefa.titulo;
        	$scope.tarefaEdicao.descricao = tarefa.descricao;    
    	}    	 	
    	$scope.editing = true;
    	//$window.location.href = 'tarefa-edicao.xhtml';
    }
	
}]);
