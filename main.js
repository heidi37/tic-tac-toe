const boxArray = document.getElementsByClassName("box")
let playerGoing = "X"

for(box of boxArray){
  box.addEventListener("click", function(e){
    e.target.innerHTML = playerGoing
    playerGoing === "X" ? playerGoing = "O" : playerGoing = "X"
  })
}

console.log(boxArray)