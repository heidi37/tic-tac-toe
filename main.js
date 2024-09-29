const gameObject = {
  playerGoing: "X",
  movePlayer: function(e){
    e.target.innerHTML = this.playerGoing
    this.playerGoing === "X" ? this.playerGoing = "O" : this.playerGoing = "X"
  },
  resetGame: function(){
    location.reload()
  }
}

const boxArray = document.getElementsByClassName("box")
const button = document.getElementById("reset")

button.addEventListener("click", gameObject.resetGame.bind(gameObject))

for(box of boxArray){
  box.addEventListener("click", gameObject.movePlayer.bind(gameObject))
}
