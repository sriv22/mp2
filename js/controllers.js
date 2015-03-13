var imdbControllers = angular.module('imdbController', []);

imdbControllers.controller('listController', function(dataService, $scope) {

  dataService.listData(function(data) {
    $scope.movies = data;
      $scope.reverse = false;
  });

});

imdbControllers.controller('detailsController', function($routeParams, $scope, dataService) {

  dataService.detailData($routeParams.rank, function(data) {
    $scope.movie = data;
  });

});

imdbControllers.controller('galleryController', function(dataService, $scope){
	dataService.galleryData(function(data){
		$scope.movies = data;
	});
    $('#genre_dropdown').on('change', function (e) {
        var selected = $(this).find(':selected').val();
        // clear all
        $('#movie_gallery').find('li').css('display','none');
        $('#movie_gallery').find('li.'+selected).css('display','');
        
        if (selected=="All")
            $('#movie_gallery').find('li').css('display','');
        
        
    });
});