class Question{
    constructor(){
        this.title1 = createElement('h1')
        this.title2 = createElement('h1')
        this.input1 = createInput("  Enter Your Name Here.....");
        this.input2 = createInput(" Enter Correct Option No.....");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }

    hide(){
        this.title1.hide();
        this.title2.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.title1.html("My Quiz Game");
        this.title1.position(350, 30);

        this.title2.html("----------------------");
        this.title2.position(335, 45);

        this.question.html("Question :- What starts and ends with the letter 'E', but has only one letter ? ");
        this.question.position(150, 100);

        this.option1.html("1. Everyone ");
        this.option1.position(200, 130);

        this.option2.html("2. Envelope ");
        this.option2.position(200, 150);

        this.option3.html("3. Estimate ");
        this.option3.position(200, 170);

        this.option4.html("4. Example ");
        this.option4.position(200, 190);

        this.input1.position(250, 280);
        this.input2.position(450, 280);
        this.button.position(410, 330);

        this.button.mousePressed(()=>{
            this.title1.hide();
            this.input1.hide();
            this.title2.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });

    }
}