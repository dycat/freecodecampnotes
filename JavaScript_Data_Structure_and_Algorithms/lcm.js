function smallestCommons(arr) {
    let min;
    let max
    if (arr[0] < arr[1]){
      min = arr[0];
      max = arr[1];
    }else{
      min = arr[1];
      max = arr[0];
    }
    let arrs = [];
    for (let i = min; i <= max; i++ ) {
      arrs.push(i)
    }
    let multiple = min;
    arrs.forEach( function(n) {multiple = lcm(multiple, n)} )
    return multiple
  }
  
  function lcm(a, b){
    return a * b / gcd(a,b);
  }
  
  function gcd(a,b){
    return b == 0 ? a : smallestCommons([b, a % b]);
  }