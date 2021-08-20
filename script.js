let questions = [{
        "question": "Welcher Hersteller produziert jährlich am meisten Reifen?",
        "answer_1": "Dunlop",
        "answer_2": "Michelin",
        "answer_3": "Lego",
        "answer_4": "Pirelli",
        "right_answer": 3,
    },
    {
        "question": "Ein Rolls-Royce Phantom mit einem Leergewicht von 2745 kg und einer Länge von über 6m, wird von einem über 400 PS starken Motor angetrieben. Wie schnell ist die Beschleunigung von 0 auf 100 km/h?",
        "answer_1": "6,1 Sekunden",
        "answer_2": "12,3 Sekunden",
        "answer_3": "5,7 Sekunden",
        "answer_4": "9,9 Sekunden",
        "right_answer": 1,
    },
    {
        "question": "Was ist die längste Autobahn in Deutschland?",
        "answer_1": "A1",
        "answer_2": "A3",
        "answer_3": "A9",
        "answer_4": "A7",
        "right_answer": 4,
    },
    {
        "question": "Wie teuer ist ein Satz Reifen, ohne Felge, für einen Bugatti Chiron?",
        "answer_1": "15000 €",
        "answer_2": "1499 €",
        "answer_3": "9250 €",
        "answer_4": "7390 €",
        "right_answer": 3,
    },
    {
        "question": "Welche Sonderausstattunf ist bei dem Mercedes-Benz G 63 AMG 6x6 nicht zu bestellen?",
        "answer_1": "Kühlschrank",
        "answer_2": "Lederausstattung",
        "answer_3": "Einparkhilfe (PDC)",
        "answer_4": "Massagesitze",
        "right_answer": 3,
    },
    {
        "question": "Wie schlafen Delphine?",
        "answer_1": "Sie legen sich auf den Meeresboden und schlafen, bis sie wieder Luftholen müssen.",
        "answer_2": "Delphine schlafen gar nicht.",
        "answer_3": "Delphiene treiben an der Wasseroberfläche, um ständig atmen zu können.",
        "answer_4": "Sie schalten eine Gehirnhälfte ab und schlafen so.",
        "right_answer": 4,
    },
    {
        "question": "Wie schnell werden Delphine?",
        "answer_1": "80 km/h",
        "answer_2": "20 m/s",
        "answer_3": "55 km/h",
        "answer_4": "5 m/s",
        "right_answer": 3,
    },
    {
        "question": "Wie alt werden Delphine?",
        "answer_1": "40 Jahre",
        "answer_2": "15 Jahre",
        "answer_3": "55 Jahre",
        "answer_4": "30 Jahre",
        "right_answer": 1,
    },
    {
        "question": "Wie heißt die einzige Walgattung, die in Deutschen Meeren zu finden ist?",
        "answer_1": "Pottwal",
        "answer_2": "Buckelwal",
        "answer_3": "Narwal",
        "answer_4": "Schweinswal",
        "right_answer": 4,
    },
    {
        "question": "Was zeichnet einen Narwal aus?",
        "answer_1": "Seine Länge von knapp 100 Meter.",
        "answer_2": "Der überdimensionale, spiralförmige Stoßzahn.",
        "answer_3": "Sein aufblasbarer Brustkorb.",
        "answer_4": "Seine enorme Geschwindigkeit von 70 km/h.",
        "right_answer": 2,
    },
];

let leaderboard = [{
    "name": "Moritz",
    "score": 5,
}];

let rightQuestions = 0;
let currentQuestion = 0;

function startGame() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('game-screen').classList.remove('d-none');
}

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    loadquiz();
}

function loadquiz() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        showQuestions();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showQuestions() {
    let question = questions[currentQuestion];
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer_1'];
    document.getElementById('answer-2').innerHTML = question['answer_2'];
    document.getElementById('answer-3').innerHTML = question['answer_3'];
    document.getElementById('answer-4').innerHTML = question['answer_4'];
}

function answer(id) {
    let question = questions[currentQuestion];
    let selectetAnswer = id.slice(-1);
    //    let idRightAnswer = `answer_${question['right_answer']}`;

    if (selectetAnswer == question['right_answer']) {
        document.getElementById(id).classList.add('right-answer');
        rightQuestions++;
    } else {
        document.getElementById(id).classList.add('wrong-answer');
        //        document.getElementById(idRightAnswer).classList.add('right-answer');
    };

    document.getElementById('button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('button').disabled = true;
    loadquiz();
    resetAnswer();
}

function resetAnswer() {
    document.getElementById('answer-1').classList.remove('right-answer');
    document.getElementById('answer-1').classList.remove('wrong-answer');
    document.getElementById('answer-2').classList.remove('right-answer');
    document.getElementById('answer-2').classList.remove('wrong-answer');
    document.getElementById('answer-3').classList.remove('right-answer');
    document.getElementById('answer-3').classList.remove('wrong-answer');
    document.getElementById('answer-4').classList.remove('right-answer');
    document.getElementById('answer-4').classList.remove('wrong-answer');
}

function showEndScreen() {
    document.getElementById('endscreen').classList.remove('d-none')
    document.getElementById('game-screen').classList.add('d-none');
    document.getElementById('amountRightAnswer').innerHTML = rightQuestions;
    document.getElementById('maxQuestions').innerHTML = questions.length;
}

function showLeaderboard() {
    document.getElementById('leaderboard').classList.remove('d-none')
    document.getElementById('endscreen').classList.add('d-none');

    for (let i = 0; i < leaderboard.length; i++) {
        const leader = leaderboard[i]
        let scoreboard = document.getElementById('leaderboardTable');

        scoreboard.innerHTML += createTable(leader);
    }
}

function createTable(leader) {
    return `
    <tr>
        <td>
        ${leader['name']}
        </td>
        <td>
        ${leader['score']}
        </td>
    </tr>
`
}

function addLeaderboard() {
    document.getElementById('name').value;

}

function restart() {
    document.getElementById('game-screen').classList.remove('d-none');
    document.getElementById('endscreen').classList.add('d-none');
    document.getElementById('leaderboard').classList.add('d-none');
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestions();
}