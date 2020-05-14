// function isSubstring(text, sub){
//    for(let index = 0; index < text.length; index++){
//        if(text.startsWith(sub, index)) {
//            return index
//        }
//    }
//    return -1;
// }


// console.log(isSubstring('Samantha Ming', "n"))

var encryptThis = function(text) {
  let words = text.split(" ")
  for (let i = 0; i < words.length; i++){
     let letters = words[i].split("")
     for (let index = 0; index < letters.length; index++){
        if (index === 0){
           letters[index] = letters[index].charCodeAt(0)
        } else if (index === 1){
            let temp = letters[index]
            letters[index] = letters[letters.length - 1]
            letters[letters.length - 1] = temp
        }
     }
     words[i] = letters.join(" ")
  }
  return words.join("")
}

encryptThis("A wise old owl lived in an oak")