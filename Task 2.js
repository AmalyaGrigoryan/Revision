//միջին թվաբանական

var result = 0;
var result1 = 0;
var arr1 = []

function goods(arr){
    debugger
    for(i = 0; i <=arr.length; i++ ){
        if(arr[i] > 0 ){
            arr1.push(arr[i])
            result = (result + arr[i])
        }
       
    }
   return result1 = result/arr1.length
} 
console.log(goods([-1,-2,2,4,3,-5]))
