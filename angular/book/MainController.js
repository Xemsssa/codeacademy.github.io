/*app.controller('MainController',['$scope', function($scope) {
  $scope.title = 'Hello, AngularJS!';
  $scope.promo = 'This is a promo string!!!';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08')
  };
  
}]);*/

app.controller('MainController',['$scope', function($scope) {
  $scope.title = 'Hello, AngularJS!';
  $scope.promo = 'This is a promo string!!!';
  $scope.products = [
    {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03','08'),
    cover: 'img/the-book-of-trees.jpg'
  	},
    {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08','01'),
    cover: 'img/program-or-be-programmed.jpg'
 		},
    {
    name: 'Program or be Programmed',
    price: 24,
    pubdate: new Date('2013', '08','01'),
    cover: 'https://emmabookwise.files.wordpress.com/2015/02/harry-potter-1.jpg'
 		},
    {
    name: 'Psyhonanaliz',
    price: 4,
    pubdate: new Date('1996', '08','01'),
    cover: 'http://n1s2.hsmedia.ru/6c/16/6a/6c166ae2bc8af1f1a17c995942e7d095/165x255_0xc0a8392b_6615240341428426735.jpg'
 		}
  ];
  $scope.plusOne = function (index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function (index) {
  	$scope.products[index].dislikes += 1;
  };
}]);