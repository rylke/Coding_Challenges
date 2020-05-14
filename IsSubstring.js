function isSubstring(text, sub){
   for(let index = 0; index < text.length; index++){
       if(text.startsWith(sub, index)) {
           return index
       }
   }
   return -1;
}


console.log(isSubstring('Samantha Ming', "n"))