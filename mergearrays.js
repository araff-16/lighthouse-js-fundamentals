function merge(arr1,arr2){
  return (arr1.concat(arr2)).sort()
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]))