function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return 'invalid input';
    }

    const newArray = [];
    for(const nArray of array){
        
        if(typeof(nArray) ==="number"  && !isNaN(nArray)){
            newArray.push(nArray);
        }
        
    }
    return newArray;
    
}
const myarray ={num: [ 1 , 2 , 3 ]};
console.log(deleteInvalids(myarray));