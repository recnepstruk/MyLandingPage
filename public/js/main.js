window.onload = function() {
    setTimeout(function() {
        scrollTo(0, 0);
    }, 100); //100ms for example
}

angular.module('Portfolio', [])
    .controller('PageController', pageControl);

pageControl.$inject = ['$http']

function pageControl('$http') {
    var pCtrl = this;

    pCtrl.getHomepage = function() {
        $http.get("/")
            .then(function(success) {
                console.log("Welcome!", success.data);
                pCtrl.data = success.data;
            }, function(error) {
                console.log("Error getting page", error);
            });
    }