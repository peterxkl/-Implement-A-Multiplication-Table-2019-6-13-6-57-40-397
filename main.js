const isNumberValid = require('./isNumberValid');
const isNumberOnRange = require('./isNumberOnRange');
const getMultiplicationEquation = require('./getMultiplicationEquation');
function createMultiplicationTable (startNumber, endNumber) {
    var x=isNumberValid(startNumber,endNumber);
    var y=isNumberOnRange(startNumber,endNumber);
    if(x==false){
        return null;
    }
    if(y==false){
        return null;
    }
    var result="";
    for(var i=startNumber;i<=endNumber;i++){
        var stringLine="";
        for(var j=startNumber;j<=i;j++){
            stringLine=stringLine+getMultiplicationEquation(j,i)+"  ";
        }
        stringLine=stringLine+"\n";
        result=result+stringLine;
    }
    return result;
}

module.exports = createMultiplicationTable;