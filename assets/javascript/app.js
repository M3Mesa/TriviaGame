$('#start').on('click', function () {
    game.start();
});

$(document).on('click', '#end', function () {
    game.done();
});

var questions = [{
    question: "When was the first car bearing the brand name Porsche officially approved?",
    answers: ["1932", "1898", "1925", "1948"],
    correctAnswer: "1948"
}, {
    question: "Where was the first car bearing the brand name Porsche officially approved?",
    answers: ["Karnten, Austria", "Wolfsburg, Germany", "Stuttgart, Germany", "Detroit, America"],
    correctAnswer: "Karnten, Austria"
}, {
    question: "The first 356 had a modified Volkswagen engine as its heart.  How much break horse power (bhp) did it develop?",
    answers: ["105 bhp", "35 bhp", "66 bhp", "42 bhp"],
    correctAnswer: "35 bhp"
}, {
    question: "James Dean, the actor famous from 'Rebel without a cause' died in a Porsche.  With what type of Porsche did he have an accident?",
    answers: ["911 Spyder", "550 Spyder", "912 E", "500 Carrera"],
    correctAnswer: "550 Spyder"
}, {
    question: "Porsche's best known model is the long running 911 series. What did Porsche want to call this car intially?",
    answers: ["901", "912", "911", "921"],
    correctAnswer: "901"
}, {
    question: "How many Porsche 911 Turbos did Porsche originally intend to produce?",
    answers: ["500", "35,000", "90", "10,000"],
    correctAnswer: "500"
}, {
    question: "In 2005 the Toyota Prius won the 'car of the year' award.  Which Porsche model has also won this award?",
    answers: ["911", "356", "914", "928"],
    correctAnswer: "928"
}, {
    question: "In 1978 Porsche had a new weapon for racees. The 935. What was this car's nickname?",
    answers: ["Spyder", "Moby Dick", "Ducktail", "Battle-Pieces"],
    correctAnswer: "Moby Dick"
}, {
    question: "In which of Porsche's models did Audi play an important role?",
    answers: ["Cayene", "911", "924", "914"],
    correctAnswer: "924"
}, {
    question: "Which motor sport event has never been won by a Porsche car?",
    answers: ["Monte Carlo Rally", "Formula 1 World Championship", "Paris - Dakar Rally", "Le Mans 24 Hour"],
    correctAnswer: "Formula 1 World Championship"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter = 0) {
            console.log("Out of Time!");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#wrapper').append('<h2>' + questions[i].question + ' </h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#wrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<button id="end">FINISHED</button>');
    },

    done: function () {
        $.each($('input[name="question-0]":checked')), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-1]":checked')), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-2]":checked')), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-3]":checked')), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-4]":checked')), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-5]":checked')), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-6]":checked')), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-7]":checked')), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-8]":checked')), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-9]":checked')), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };

        this.result();
    },

    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>Finished!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this).correct) + "</h3>");
    }
};