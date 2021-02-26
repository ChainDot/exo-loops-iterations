let tab = [
  [1, 2, 3], //6 
  [4, -5, 7], //6
  [-3, -6], // -9
  [10, -13], // -3
]

let total = 0

for (let i = 0; i < tab.length; i++){
  for(let j= 0; j < tab[i].length; j++){
    total +=  tab[i][j]
 
  }
  
}

console.log(`Sum of each item of each array equal ${total}`)

