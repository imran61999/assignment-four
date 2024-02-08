
function checkBraces(infoToParse) {
   if(typeof infoToParse==='string'){
    const specialChar = ['a','A', 'e','E', 'i','I', 'o','O', 'u','U', 'y','Y', 'w','W'];
    const lastChar = infoToParse[infoToParse.length-1];
    for(let item of specialChar){
        if(lastChar ===item){
            return "Good Name";
        }
    }
    return "Bad Name";
   }
   return "invalid";
    
}
var infoToParse = "RAFEE";
console.log(checkBraces(infoToParse));