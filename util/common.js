

















module.exports.clearArrNull=(arr)=>{
         for(var i=0,len=arr.length;i<len;i++){
             if(!arr[i]||arr[i]==''||arr[i] === null){
                   arr.splice(i,1);
                   len--;
                   i--;
             }
      }
     return arr;
}

