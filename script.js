var modal = document.querySelector(".modal-section")



//Open modal window
function openWindow() {
    modal.style.display = "block";
}
//Close modal window
function closeWindow() {
    modal.style.display = "none";
};

//Close modal window when you click anywhere outside the modal window
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


///////////////////////////////////////////////////////////////////////////


function startGame(picked) {
    //Change section displays when you start the game
    $(".main-holder").css("display", "none")
    $(".result-screen").css("display", "flex")

    //Change player picked symbol to the one he chose
    switch (picked) {
        case "paper":
            $("#you-def1").removeClass().addClass("paper-win");;
            $(".you-img").attr("src", "images/icon-paper.svg");
            break;

        case "sciss":
            $("#you-def1").removeClass().addClass("sciss-win");;
            $(".you-img").attr("src", "images/icon-scissors.svg");
            break;

        case "rock":
            $("#you-def1").removeClass().addClass("rock-win");;
            $(".you-img").attr("src", "images/icon-rock.svg");
            break;
    }

    //Generate random number between 1 and 3, for the house chosen symbol
    var houseNum = randomNum(1, 3);

    //Change house picked symbol to the one euqling the random number
    setTimeout(function () {
        switch (houseNum) {
            case 1:
                $("#house-def1").removeClass("house-def").addClass("paper-win");
                $(".house-img").attr("src", "images/icon-paper.svg");
                houseNum = "paper"
                $("#house-def1").addClass("glow-paper")
                break;

            case 2:
                $("#house-def1").removeClass("house-def").addClass("sciss-win");
                $(".house-img").attr("src", "images/icon-scissors.svg");
                houseNum = "sciss"
                $("#house-def1").addClass("glow-sciss")
                break;

            case 3:
                $("#house-def1").removeClass("house-def").addClass("rock-win");
                $(".house-img").attr("src", "images/icon-rock.svg");
                houseNum = "rock"
                $("#house-def1").addClass("glow-rock")
                break;
        }

        //Determining the winner and displaying the text
        if (picked == houseNum) {
            $("#res-sentence").text("TIE");
        }
        else if ((picked == "paper" && houseNum == "rock") || (picked == "sciss" && houseNum == "paper") || (picked == "rock" && houseNum == "sciss")) {
            $("#res-sentence").text("YOU WIN");
        }
        else {
            $("#res-sentence").text("YOU LOSE");
        }

        $(".result-text").css("display", "block")

    }, 2000);
}




//Generate random number - (Simulating the house picking rock,paper or scissors)
function randomNum(min, max) {
    var num = (Math.floor(Math.random() * (max - min + 1) + min));
    return num;
}










function playAgain() {
    //Change back the section displays, when you want to play again
    $(".result-screen").css("display", "none")
    $(".main-holder").css("display", "block")
    $("#house-def1").removeClass().addClass("house-def");
    $(".house-img").attr("src", " ");
}