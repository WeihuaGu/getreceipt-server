module.exports.isOnline=(deviceid)=>{
         for ( let i = 0; i <global.socketlist.length; i++){
            let item=global.socketlist[i];
            if(item.deviceid==deviceid)
                 return true;
         }
         return false;
}


module.exports.removeSocket=(socketid)=>{
        for ( let j = 0; j <global.socketlist.length; j++){
            let item=global.socketlist[j];
            if(item.socketid==socketid){
                 global.socketlist.splice(j,1);
                 return true;
            }
         }
        return false;
}

