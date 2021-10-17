let img = document.getElementById('charaImg').querySelector('img');
let title = document.getElementById('charaTitle');
let desc = document.getElementById('charaDesc');

//Characters

let assassin = document.querySelector('#btn1');
let demonio = document.querySelector('#btn2');
let gunslinger = document.querySelector('#btn3');
let hunter = document.querySelector('#btn4');
let juggernout = document.querySelector('#btn5');
let knight = document.querySelector('#btn6');
let mechanic = document.querySelector('#btn7');
let monk = document.querySelector('#btn8');
let paladin = document.querySelector('#btn9');
let tamer = document.querySelector('#btn10');

assassin.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Assassin.png';
    title.innerHTML = 'A S S A S S I N';
    desc.innerHTML = 'Assassin will haunt you at night and will beat you down with her sword and bow. She also very sneaky and fast, so be careful..'
});

demonio.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Demonio.png';
    title.innerHTML = 'D E M O N I O';
    desc.innerHTML = 'Comeback from the abyss, looking for revenge. He is Demonio with his sword, he will haunt you down to the hell.';
});
 
gunslinger.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Gunslinger.png';
    title.innerHTML = 'G U N S L I N G E R';
    desc.innerHTML = 'The Gunslinger from the west will break your head apart using his guns. He always accurate so watch for your head mate';
});

hunter.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Hunter.png';
    title.innerHTML = 'H U N T E R';
    desc.innerHTML = 'He is the hunter, he always watching his prey everywhere and anytime. Be careful he might already be behind you';
});

juggernout.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Juggernaut.png';
    title.innerHTML = 'J U G G E R N O U T';
    desc.innerHTML = 'Juggernout loves to smash, Juggernout loves disaster, and Juggernout loves fighting. Juggernout is Strong and Hard to hit';
});

knight.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Knight.png';
    title.innerHTML = 'K N I G H T';
    desc.innerHTML = 'Knight serve his country with his honor and sword. He will beat every enemy in front of his country'
});

mechanic.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Mechanic.png';
    title.innerHTML = 'M E C H A N I C';
    desc.innerHTML = 'Robots and Machine everywhere ! She love to make it. She is Mechanic, who will beats you with her robot cannons !'
});

monk.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Monk.png';
    title.innerHTML = 'M O N K';
    desc.innerHTML = 'She is train 50 years in her dojo. She is the great legendary Monk. She will beat you with her martial arts!'
});

paladin.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/paladin.png'; 
    title.innerHTML = 'P A L A D I N';
    desc.innerHTML= 'He protect his realm with all of his soul and will. He is the great paladin ! He will protect his friends and realm at all cost !'
});

tamer.addEventListener('click', () =>{
    img.src = '../images/FullImageCharacters/Tamer.png';
    title.innerHTML = 'T A M E R';
    desc.innerHTML = 'He born with so much spritual energy. That makes him loved by the lost soul. He is tamer, he is king of soul !'
});




