let doll5 = []
let doll4 = [doll5]
let doll3 = [doll4]
let doll2 = [doll3]
let doll1 = [doll2]

let nestingDolls = doll1

const findDiamond = function(nestingDolls){

  let current = nestingDolls[0]
  let result
  
  //base case
  if(nestingDolls.length === 0){
    return result = "not found!"
  } else if(nestingDolls[0] === "diamond"){
    return result = "found!"
  }

  //recursion
  if (Array.isArray(current)){
    return result = findDiamond(current)
  }      

}

findDiamond(nestingDolls)