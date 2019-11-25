let joueur_score = 0;
let computeur_score = 0;

var userScoreSpan = document.getElementById('user-score');
var computerScoreSpan = document.getElementById('computer-score');
var resultat = document.querySelector('.resultat > p');
var pierre = document.getElementById('p');
var feuille = document.getElementById('f');
var ciseaux = document.getElementById('c');
var choix = {"p": "Pierre", "f": "Feuille", "c": "Ciseaux"};

function fingame(){
    if (joueur_score === 10){
        alert("gagné :) ");
        window.location.reload();
    }
    if (computeur_score === 10){
        alert("Perdu :( ");
        window.location.reload();
    }

}
function computerChoix(){
    var choix = ["p", "f", "c"];
    var randomNumber = Math.floor(Math.random()*3);
    return choix[randomNumber];
}

function win(user, computer){
    joueur_score++;
    userScoreSpan.innerHTML=joueur_score;
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : GAGNEE`;
    document.getElementById(user).classList.add('green-ring');
    setTimeout(() => {document.getElementById(user).classList.remove('green-ring')}, 500);

}

function lose(user, computer){
    computeur_score++;
    computerScoreSpan.innerHTML = computeur_score;
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : PERDU`;
    document.getElementById(user).classList.add('red-ring');
    setTimeout(() => {document.getElementById(user).classList.remove('red-ring')}, 500);
}

function par(user, computer){
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : EGALITE`;
    document.getElementById(user).classList.add('gray-ring');
    setTimeout(() => {document.getElementById(user).classList.remove('gray-ring')}, 500);
}

function game(user) {
    var computer = computerChoix();
    switch (user + computer){
        case "pc":
        case "fp":
        case "cf":
            win(user, computer)
            break;
        case "cp":
        case "pf":
        case "fc":
            lose(user, computer);
            break;
        case "pp":
        case "ff":
        case "cc":
            par(user, computer);
            break;
    }
    fingame();
}

function main(){
    pierre.addEventListener('click', function(){
        game("p");
    });

    feuille.addEventListener('click', function(){
        game("f");
    });

    ciseaux.addEventListener('click', function(){
        game("c");
    });
}

main();