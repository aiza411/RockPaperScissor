const computerImage = document.querySelector(".computer img");
const playerImage = document.querySelector(".player img");

const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");

const options = document.querySelectorAll(".option button");

options.forEach((x) => {
  x.addEventListener("click", () => {
    computerImage.classList.add("shakeComputer");
    playerImage.classList.add("shakePlayer");

    setTimeout(() => {
      computerImage.classList.remove("shakeComputer");
      playerImage.classList.remove("shakePlayer");

      playerImage.src="../assets/"+x.innerHTML.toLowerCase()+"Player.png";

      const computerOption=["stone","paper","scissors"];
      let choice=Math.floor(Math.random()*3);
      console.log("choice",choice);

      let computerChoice=computerOption[choice];
      computerImage.src="../assets/"+computerChoice.toLowerCase()+"Computer.png";

      let cPoints=parseInt(computerPoints.innerHTML);
      let pPoints=parseInt(playerPoints.innerHTML);

      if(x.innerHTML.toLowerCase()==="stone")
      {
        if(computerChoice==="paper")
        {
            computerPoints.innerHTML=cPoints+1;
        }

        if(computerChoice==="scissors")
        {
            playerPoints.innerHTML=pPoints+1;
        }
      }

      if(x.innerHTML.toLowerCase()==="paper")
      {
        if(computerChoice==="stone")
        {
            playerPoints.innerHTML=pPoints+1;
        }

        if(computerChoice==="scissors")
        {
            computerPoints.innerHTML=cPoints+1;
        }
      }

      if(x.innerHTML.toLowerCase()==="scissors")
      {
        if(computerChoice==="stone")
        {
            computerPoints.innerHTML=cPoints+1;
        }

        if(computerChoice==="paper")
        {
            playerPoints.innerHTML=pPoints+1;
        }
      }

    }, 900);
  });
});
