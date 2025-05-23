function generateJoke() {
  const jokes = [
    "Rajesh Dai doesn't do push-ups. He pushes the Earth down.",
    "When Rajesh Dai enters water, he doesn’t get wet. The water gets Rajesh Dai-ed.",
    "Rajesh Dai once threw a grenade and killed 50 people. Then the grenade exploded.",
    "Rajesh Dai can slam a revolving door.",
    "When Rajesh Dai looks at the sky, the stars get jealous of his shine.",
    "Rajesh Dai doesn’t need Google. Google needs Rajesh Dai.",
    "When Rajesh Dai cracks a joke, reality changes to make it true.",
    "Rajesh Dai counted to infinity. Twice.",
    "Rajesh Dai can divide by zero.",
    "Rajesh Dai doesn’t sleep. He waits.",
    "When Rajesh Dai steps on a Lego, the Lego cries.",
    "Rajesh Dai once beat the sun in a staring contest.",
    "Rajesh Hamal’s calendar goes straight from March 31st to April 2nd. No one fools Rajesh Dai.",
    "Rajesh Dai can unscramble an egg.",
    "Rajesh Hamal’s shadow has never left him. It’s too scared.",
    "Rajesh Dai doesn’t need a GPS. He decides where he is.",
    "When Rajesh Dai watches a scary movie, the monsters get scared.",
    "Rajesh Dai can speak Braille.",
    "Rajesh Dai doesn’t do laundry. Dirt is too afraid to touch his clothes.",
    "When Rajesh Dai does a math problem, calculators ask for his help.",
    "Rajesh Dai once won a game of chess with one move: looking at the board.",
    "Rajesh Dai can clap with one hand.",
    "When Rajesh Dai smiles, the sun takes notes.",
    "Rajesh Dai’s tears cure cancer. Too bad he has never cried.",
    "Rajesh Dai can eat just one Lay’s chip and stop.",
    "When Rajesh Dai says, 'I’ll be there in five minutes,' time slows down.",
    "Rajesh Dai once built a snowman out of rain.",
    "Rajesh Dai doesn’t wear a watch. He decides what time it is.",
    "When Rajesh Dai calls a wrong number, the phone apologizes.",
    "Rajesh Dai can win a game of hide-and-seek without hiding.",
    "Rajesh Dai can light a fire by rubbing two ice cubes together.",
    "When Rajesh Dai whispers, mountains move.",
    "Rajesh Dai never gets lost. The road bends to his will.",
    "Rajesh Dai once defeated gravity. It hasn’t dared to return since.",
    "Rajesh Dai doesn’t need a parachute. The ground catches him softly.",
    "When Rajesh Dai enters a contest, everyone else quits.",
    "Rajesh Dai can finish a book by closing its cover.",
    "Rajesh Dai can divide a circle into three halves.",
    "When Rajesh Dai claps, lightning strikes in response.",
    "Rajesh Dai can spell 'impossible' backwards while blindfolded.",
    "Rajesh Dai once went to Mars. That’s why there’s no life there now.",
    "Rajesh Dai can jump-start a car by looking at it.",
    "Rajesh Dai never waits in line. Lines rearrange themselves for him.",
    "Rajesh Dai once scared a ghost to death.",
    "Rajesh Dai doesn’t age. Time is too respectful to touch him.",
    "When Rajesh Dai enters a room, Wi-Fi signals get stronger.",
    "Rajesh Hamal’s signature changes every time he writes it. It’s always original.",
    "Rajesh Dai doesn’t get hungry. Food comes to him willingly.",
    "When Rajesh Dai loses a game, the game reprograms itself so he wins.",
  ];

  let number = Math.floor(Math.random() * 100) % 50;

  document.getElementsByClassName("quote")[0].innerHTML = jokes[number];
}
