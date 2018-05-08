var StateOver={    
    
    
    create:function()
    {
        var score = 0;
        if (localStorage.getItem("score") !== null) {
            score = parseInt(localStorage.getItem("score"));
            game.add.text(
              0, 0,  // x, y position
              "Score.: " + score,
              { fontSize: "32px", fill: "#fff" }
            );
        }
        
        //add a sprite to be used as a play again button
        this.playAgain=game.add.sprite(game.width/2,game.height/2,"playAgain");
        //center the button image
        this.playAgain.anchor.set(0.5,0.5);
        //enable for input
        this.playAgain.inputEnabled=true;
        //add an event listener
        this.playAgain.events.onInputDown.add(this.restartGame,this);
    },
    restartGame:function()
    {
    	//restart the game by starting stateMain
    	game.state.start("StateMain");
    }
}