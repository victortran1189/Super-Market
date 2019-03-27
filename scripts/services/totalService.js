superMarket.service('totalService', function() {

var service = this;


this.getItemCost = function(item) {
    return item.qty * item.price;
  };


this.Total = function(items) {
  //_.reduce is underscore.js, reduce a list of values into a single value. This case I used the cart array
    var total =  _.reduce($scope.userItems, function(sum, item) {
      return sum + $scope.getItemCost(item);
    }, 0);
    return total;
  };

});
