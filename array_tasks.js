


var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var arr2 = []
		arr.forEach(function(index){
			arr2.push(index**2);
		});
		return arr2;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(index){
			total += index;
		});
		return total;
	},

	findDuplicates: function (arr) {
		var dublicates = [];
		arr.forEach(function(num, index){
			if(arr.indexOf(num, index+1)>-1){
				if(dublicates.indexOf(num)===-1){
					dublicates.push(num);
				}
			}
		});
		return dublicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		var clone = [];
		arr.forEach(function(num){
			if(valueToRemove != num){
				clone.push(num);
			}
		}); return clone;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		arr.forEach(function(num, index){
			if(num === itemToFind){
				indexes.push(index);
			}
		});
		return indexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
    var evens = [];
	arr.forEach(function(number){
		if(number%2 == 0){
			evens.push(number)
		}
	});
	evens = this.square(evens);
	return this.sum(evens);
	}

}

module.exports = arrayTasks
