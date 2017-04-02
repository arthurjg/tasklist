/**
 * 
 */
app.controller('TarefasController', ['$scope', 
      'tarefas-service', function($scope, tarefasService) {
		tarefasService.success(function(data) {
		    $scope.tarefas = data;
		});
}]);
