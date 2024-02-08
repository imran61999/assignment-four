function monthlySavings(arr, lCost){
if(!Array.isArray(arr)){
    return 'invalid input';
}
if(typeof(lCost)!=='number'){
    return 'invalid input'
}
let sum=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>=3000){
        sum=sum+ (arr[i]-arr[i]*0.2)
    }
    else{
        sum=sum+arr[i];
    }
}
const saving = sum-lCost;
if(saving<0){
    return "earn more"
}
else{
    return saving;
}
}

const salary =[1000,2000, 2500];
const livingCost = 5000;

console.log(monthlySavings(salary, livingCost))