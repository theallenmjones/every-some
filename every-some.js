function hasOddNumber(arr) {
    // Loop through the input array
    for (let i = 0; i < arr.length; i++) {
      // If an odd number is found, return true
      if (arr[i] % 2 !== 0) {
        return true;
      }
    }
    
    // If no odd numbers are found, return false
    return false;
  }

  

  function hasAZero(num) {
    // Convert the number to a string to check if it contains a zero
    const numStr = num.toString();
    
    // Loop through the string
    for (let i = 0; i < numStr.length; i++) {
      // If a zero is found, return true
      if (numStr[i] === "0") {
        return true;
      }
    }
    
    // If no zeros are found, return false
    return false;
  }

  function hasOnlyOddNumbers(arr){
    for (let i = 0; i < arr.length; i++){
        return arr.every(function(num){
            return num % 2 !== 0;
        })
    }
  }
// or 
  function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
  }

  function hasNoDuplicates(arr){
    return arr.every(function(num){
      return arr.indexOf(num) === arr.lastIndexOf(num);
    });
  }
  //or
  function hasNoDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }

  function hasCertainKey(arr, key) {
    return arr.every(function(obj) {
      return obj.hasOwnProperty(key);
    });
  }

  function hasCertainValue(arr, key, value) {
    return arr.every(function(obj) {
      return obj[key] === value;
    });
  }