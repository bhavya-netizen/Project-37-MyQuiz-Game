class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        textFont("bold")
        text("Result of the Quiz", 340, 50);
        text("----------------------------", 320, 65);
        Contestant.getPlayerInfo();

        if(allContestants !== undefined){
            var display_answers = 250;
            fill("blue");
            textSize(20);
            text("*NOTE : Contestant who answered correct are highlighted in green color!!", 130, 250);
            
            for(var plr in allContestants){
                var correctAns = "2";
                if(correctAns === allContestants[plr].answer)
                  fill("green");
                else
                  fill("red");
                
                display_answers+=30;
                textSize(20);
                text(allContestants[plr].name + " : " + allContestants[plr].answer, 370, display_answers)
            }
        }
    }

}