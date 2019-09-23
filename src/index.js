module.exports = function check(str, bracketsConfig) {
 let masopened=[];
 let k=0;
 for(i=0;i<str.length;i++){
  if((str[i]=='|' || str[i]=='7' || str[i]=='8') && masopened[masopened.length-1]!=str[i]) {
    masopened.push(str[i]);
  }
  else 
  if((str[i]=='|' || str[i]=='7' || str[i]=='8') && masopened[masopened.length-1]==str[i]){
    masopened.pop();
  }
  else
  for(j=0;j<bracketsConfig.length;j++){
   
    if(str[i]==bracketsConfig[j][0]){
      masopened.push(str[i]);
      break;
    }
    else
    if(str[i]==bracketsConfig[j][1]){
      if(masopened.pop()==bracketsConfig[j][0]) break;
      else return false;
    }
  }
 }
 if(masopened.length!=0) return false;
 return true;
}
