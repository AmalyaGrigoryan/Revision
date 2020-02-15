//Ուսուցչի տոն

var arr = []


function teacherholiday(goodsweight){
    debugger
    var min = 0
    var max = 0
    for(i =goodsweight.length;  goodsweight.length > 0; i++){
        if(goodsweight[0] > max){
           var max = goodsweight[0]
           var min = goodsweight[0]
           arr.push(goodsweight.shift())
        }else{
            arr.push(goodsweight.shift())
        }   
    }
    for(j = arr.length;  arr.length > 0; j++ ){
        if(arr[0] < min){
        var min = arr[0]
        
    }
    else{
        arr.shift()
    }
    }
    return min+max
}

console.log(teacherholiday([4,3,2,1,9]))
