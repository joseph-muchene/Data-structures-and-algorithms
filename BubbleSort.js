function BubbleSort(arr){
    for(let x = 0; x < arr.length; x++){
    for(let y = 0; y < arr.length;y++){
        // 4,2,5,3,1
        if(arr[y] > arr[y+1]){
            // swap
            let temp = arr[y]
            arr[y] = arr[y + 1]
            arr[y+1] = temp
        }
    }
}
    return arr
}
console.log(BubbleSort([4, 5, 6, 7, 8, 9, 10, 30, 40]));
