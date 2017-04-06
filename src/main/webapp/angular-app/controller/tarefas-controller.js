/**
 * 
 */
app.controller('TarefasController', ['$scope', '$window',
      'tarefas-service',  function($scope, $window, tarefasService) {
		
	$scope.editing = undefined;	
	$scope.tarefaEdicao = {};
	$scope.openStatus = "";	
	$scope.closedStatus = "";	
	$scope.disableClose = "";	
	$scope.tarefas = [];
	
	$scope.init = function(){
		$scope.editing = false;	
		$scope.openStatus = "active";	
		$scope.disableClose = "disabled";
		$scope.closedStatus = "";
		$scope.listar();
		$scope.initTarefa();
	}
	
	$scope.listar = function(){
		tarefasService.list().then(function(response) {		
			$scope.tarefas = response.data;
		});
	}
	
	$scope.initTarefa = function(){
		$scope.tarefaEdicao = {
				id: null,
				titulo: '',
				descricao: '',
				status: 'A'
			};
	}		
	
	$scope.salvar = function(form) { 	
		if($scope.tarefaEdicao.id == null){
			tarefasService.save($scope.tarefaEdicao)
				.success(function() {		
					$scope.init();
				});
		} else {
			tarefasService.update($scope.tarefaEdicao)
				.success(function() {		
					$scope.init();
			});
		}		
    };
    
    $scope.editar = function(tarefa) {
    	if(tarefa != null && tarefa != undefined){
    		$scope.tarefaEdicao.id = tarefa.id;
        	$scope.tarefaEdicao.titulo = tarefa.titulo;
        	$scope.tarefaEdicao.descricao = tarefa.descricao;   
        	if(tarefa.status == 'Aberta'){
        		$scope.tarefaEdicao.status = 'A';
        		$scope.openStatus = "active";	
        	} else {
        		$scope.tarefaEdicao.status = 'E';
        		$scope.closedStatus = "active";
        		$scope.openStatus = "";	
        	}        	
    	}    
    	$scope.disableClose = "";
    	$scope.editing = true;    	
    }
    
    $scope.changeStatus = function(){
    	if($scope.disableClose != "disabled"){
    		if($scope.tarefaEdicao.status == 'A'){
    			$scope.tarefaEdicao.status = 'E';
    			$scope.closedStatus = "active";
    			$scope.openStatus = "";	
    		} else {
    			$scope.tarefaEdicao.status = 'A';
    			$scope.openStatus = "active";
    		}
    	}
	}	
	
}]);
