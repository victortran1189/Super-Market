beforeEach(module('superMarket'));

var mainController,
scope;

beforeEach(inject(function($rootScope, $controller){
  scope =$rootScope.$new();
  mainController = $controller('mainController',{
    $scope: scope
  });
}));


//example of me using karma/jasmine to unit test

it('Expect the array length should be 6', function() {
  expect($scope.invetory.length).toEqual(6);
});


it('Access the array of objects, with the index of 0 within the array, with the property of name to have a string value to be Milk', function() {
  expect($scope.inventory[0].name).toBe("Milk");
});


it('Access the array of objects, with the index of 6 within the array, with the property of barcode to have a interger value to be 4900', function() {
  expect($scope.inventory[6].barcode).toEqual(4900);
});







});
