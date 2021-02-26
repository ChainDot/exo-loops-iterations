let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]
const reducer = (accumulator, currentValue) => accumulator + currentValue
for (let i = 0; i < tab.length; i++){
  for( let j= 0; j < tab[i].length; j++){
    console.log(tab[i][j])
  }
}
