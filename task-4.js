

function password(obj){
    const cName = obj.name;
    const yName = obj.birthYear;
    const sName = obj.siteName?.charAt(0).toUpperCase()+obj.siteName?.slice(1);
    if(!obj.name|| !obj.birthYear||!obj.siteName|| isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4){
        return "invalid";
    }

    let pass = sName + "#"+ cName +"@"+ yName;
    return pass;
}

const myobj = { name: "maisha" , birthYear: 2002 }

console.log(password(myobj));