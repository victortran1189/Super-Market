var superMarket = angular.module('superMarket',[]);


superMarket.controller("mainController", ['$scope','totalService', function ($scope, totalService) {

    $scope.userItems = [];

    $scope.item_error = "";


    $scope.inventory = [
        {
          id :  1,
          name : "Milk",
          barcode: 8873,
          price : 2.49,
          qty : 1
        },

        {
          id :  2,
          name : "Tooth Brush",
          barcode: 1983,
          price : 1.99,
          qty : 1
        },

        {
          id :  3,
          name : "Promo Tooth Brush Pack",
          barcode: 1983,
          price : 3.98,
          qty : 3
        },

        {
          id :  4,
          name : "Bottle of Wine",
          barcode: 0923,
          price : 2.99,
          qty : 1,
          tax : 0.0925
        },

        {
          id :  5,
          name : "Chips",
          barcode: 6723,
          price : 2.49,
          qty : 1
        },

        {
          id :  6,
          name : "Salsa",
          barcode: 4900,
          price : 3.49,
          qty : 1
        },

        {
          id :  7,
          name : "Chips and Salsa Bundle",
          barcode: 4900,
          price : 4.99,
          qty : 1,
          bundle : true
          },

      ];



$scope.checkOut = function (){
  $location.path('/checkOut')
}

//Js function from underscore.js to loop and check value of array until returns true
var checkItemDuplication = function(inventory, barcode) {
        return _.find(invetory, function(inventory) {
          return inventory.barcode === barcode;
          });
      };


$scope.addItem = function(itemBeingAdd) {

  //now we plug the variable incase our cart already has the selected barcode in their cart #effiency

var check = checkItemDuplication($scope.userItems, itemBeingAdd.barcode);
    if (check) {
      check.qty += itemBeingAdd.qty;
    }
    else {
      $scope.userItems.push(itemBeingAdd));
    }
  };


    $scope.deleteItem = function(item){

        var removeItem = $scope.userItems.indexOf(item);

        $scope.userItems.splice(item, 1)

  };

  $scope.getItemCost = function(item) {
      return item.qty * item.price;
    };

    $scope.clearCart = function() {
      $scope.userItems.length = 0;
    };


//Example of how I refractor some code and store into service
    $scope.Total = totalService.total($scope.userItems);


});
