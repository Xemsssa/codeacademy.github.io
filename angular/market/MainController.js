app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  
  $scope.apps = [
    {
      icon: 'img/move.jpg',
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
  	},
    {
      icon: 'img/shutterbugg.jpg',
      title: 'Shutterbugg',
      developer: 'Chico Dusty',
      price: 2.99
    },
    {
      icon: 'img/jump.jpg',
      title: 'JUMP',
      developer: 'ME Inc.',
      price: 0.79
  	},
    {
      icon: 'img/Hey.jpg',
      title: 'HEY!',
      developer: 'MY.com',
      price: 0.59
  	},
	];
}]);