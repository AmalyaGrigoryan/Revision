// // խաղաքարտեր

var result = 0;

function cards(arr){
    debugger
    for(i = 0; i <=arr.length; i++ ){
        if(arr[i] > 0 && arr[i] % 2 == 0){
            result = result + arr[i]
        }
       
    }
   return result 
} 
console.log(cards([1,5,2,9,4,-1,-5]))
