class Dance {
  constructor(grade, numberOfPlayers, top, useOfStones, trick) {
    this.type = "dance";
    this.grade = grade;
    this.numberOfPlayers = numberOfPlayers;
    this.top = top;
    this.useOfStones = useOfStones;
    this.trick = trick;
  }
  startDance() {
    console.log("dance has begun!");
  }
  aboutThisDance() {
    return (
      "dance " +
      this.type +
      ", participants " +
      this.numberOfPlayers +
      ", occupied place - " +
      this.top +
      ", obtained estimate - " +
      this.grade
    );
  }
  checkingTheUseOfStones() {
    if ((this.useOfStones = "yes")) {
      console.log("the stones was used");
    } else {
      console.log("the stones wasn't used");
    }
  }
  checkingTheUseOfTheTrick() {
    if ((this.trick = "yes")) {
      console.log("the trick was used");
      return;
    }
    console.log("the trick wasn't used");
  }
}

class DanceTeamStep extends Dance {
  constructor(grade, numberOfPlayers, top, useOfStones, trick, teamColor) {
    super(grade, numberOfPlayers, top, useOfStones, trick);
    this.teamColor = teamColor;
    this.type = "team Step";
  }
  startDance() {
    console.log("team dance has begun!");
  }
  DanceColor() {
    if ((this.teamColor = "pink")) {
      console.log("your team color is pink");
    } else {
      console.log("your team color is blue");
    }
  }
}

class DanceBattle extends Dance {
  constructor(
    grade,
    numberOfPlayers,
    top,
    useOfStones,
    trick,
    teamColor,
    star
  ) {
    super(grade, numberOfPlayers, top, useOfStones, trick, teamColor);
    this.star = star;
    this.type = "dance battle";
  }
  startDance() {
    console.log("dance battle has begun!");
  }
  choosStar() {
    if ((this.star = "Sasha")) {
      console.log("you have chosen a star - Sasha. Difficulty level is easy.");
    } else if ((this.star = "Valya")) {
      console.log(
        "you have chosen a star - Valya. Difficulty level is normal."
      );
    } else {
      console.log("you have chosen a star - Lorik. Difficulty level is hard.");
    }
  }
}

class DanceRoseBattle extends Dance {
  constructor(
    grade,
    numberOfPlayers,
    top,
    useOfStones,
    trick,
    teamColor,
    roseColor,
    roseTransfer
  ) {
    super(grade, numberOfPlayers, top, useOfStones, trick, teamColor);
    this.teamColor = teamColor;
    this.roseColor = roseColor;
    this.roseTransfer = roseTransfer;
    this.type = "rose battle";
  }
  startDance() {
    console.log("dance rose battle has begun!");
  }
  aboutDanceRoseBattle() {
    if ((this.roseTransfer = "yes")) {
      console.log(
        "you choose " +
          this.teamColor +
          " team.The rose has a " +
          this.roseColor +
          " color. During the dance a rose was given to you :) "
      );
    } else {
      console.log(
        "you choose " +
          this.teamColor +
          " team. During the dance you were not given a rose :( "
      );
    }
  }
}

class DanceVirtuoZ extends Dance {
  constructor(grade, numberOfPlayers, top, useOfStones, trick, level) {
    super(grade, numberOfPlayers, top, useOfStones, trick);
    this.level = level;
    this.levelColor = null;
    this.type = "virtuoz";
  }
  startDance() {
    console.log("virtuoz dance has begun!");
  }
  levelCharacteristic() {
    if (this.level == "1") {
      this.levelColor = "blue";
    }
    if (this.level == "2") {
      this.levelColor = "green";
    }
    if (this.level == "3") {
      this.levelColor = "pink";
    }
    if (this.level == "4") {
      this.levelColor = "orange";
    }
    console.log(
      "you are on level " +
        this.level +
        ". The color of this level - " +
        this.levelColor +
        "."
    );
  }
}

let teamStep = new DanceTeamStep("SS", "8", "1", "yes", "yes", "pink");
console.log(teamStep.aboutThisDance());
console.log(teamStep.startDance());
console.log(teamStep.checkingTheUseOfStones());
console.log(teamStep.checkingTheUseOfTheTrick());
let battle = new DanceBattle("A", "3", "2", "no", "yes", " ", "Sasha");
console.log(battle.choosStar());
console.log(battle.startDance());
let roseBattle = new DanceRoseBattle(
  "A",
  "6",
  "2",
  "yes",
  "yes",
  "blue",
  "white",
  "yes"
);
console.log(roseBattle.aboutDanceRoseBattle());
console.log(roseBattle.startDance());
let virtuoz = new DanceVirtuoZ("C", "2", "2", "no", "no", "2");
console.log(virtuoz.levelCharacteristic());
console.log(virtuoz.startDance());

class Transport {
  constructor(type) {
    this.type = type;
  }
  callATransport() {
    console.log("you called the transport - " + this.type);
  }
}

class Surfboard extends Transport {
  constructor(type) {
    super();
    this.type = type;
  }
  callATransport() {
    console.log(
      "you called the transport - " + this.type + ". you can use it in water."
    );
  }
}

class flyingWhale extends Transport {
  constructor(type) {
    super();
    this.type = type;
  }
  callATransport() {
    console.log(
      "you called the transport - " +
        this.type +
        ". you can put another player and two children there."
    );
  }
}

class kittyMobile extends Transport {
  constructor(type) {
    super();
    this.type = type;
  }
  callATransport() {
    console.log(
      "you called the transport - " +
        this.type +
        ". you can put up to four player there."
    );
  }
}

let surf = new Surfboard("surfboard");
surf.callATransport();
let whale = new flyingWhale("flying whale");
whale.callATransport();
let kitty = new kittyMobile("Kitty - Mobile");
kitty.callATransport();

class jewelersBox {
  constructor(type, price, chance, color) {
    this.type = type;
    this.price = price;
    this.chance = chance;
    this.cellColor = color;
  }

  getTheStone() {
    console.log(
      "congratulations, you got the " +
        this.type +
        ". price - " +
        this.price +
        " crystal. Cell color -" +
        this.cellColor +
        "."
    );
  }
}

class Amethyst extends jewelersBox {
  constructor(type, price, chance, color, feature) {
    super(type, price, chance, color);
    this.feature = feature;
  }
  getTheStone() {
    console.log(
      "congratulations, you got the " +
        this.type +
        ". price - " +
        this.price +
        " crystal. Cell color -" +
        this.cellColor +
        ". Amethyst" +
        this.feature +
        "."
    );
  }
}

class Zircon extends jewelersBox {
  constructor(type, price, chance, color, bonus) {
    super(type, price, chance, color);
    this.bonus = bonus;
  }
  getTheStone() {
    console.log(
      "congratulations, you got the " +
        this.type +
        ". price - " +
        this.price +
        " crystal. Cell color -" +
        this.cellColor +
        ". Zircon gives" +
        this.bonus +
        " % points."
    );
  }
}

class Lazyrit extends jewelersBox {
  constructor(type, price, chance, color, teamBonus) {
    super(type, price, chance, color);
    this.teamBonus = teamBonus;
  }
  getTheStone() {
    console.log(
      "congratulations, you got the " +
        this.type +
        ". price - " +
        this.price +
        " crystal. Cell color -" +
        this.cellColor +
        ". Lazyrit works on all players of your team"
    );
  }
  checkTeamBonus() {
    if (this.teamBonus == 1) {
      console.log("your team has received a bonus!");
    } else {
      console.log("your team didn't receive a bonus.");
    }
  }
}

let zircon = new Zircon("Zircon", "100", "0,4", "yellow", "50");
zircon.getTheStone();
let amethyst = new Amethyst("Amethyst", "50", " ", "purple", "increases charm");
amethyst.getTheStone();
let lazurit = new Lazyrit("Lazurit", "25", "0.4", "blue", 1);
lazurit.getTheStone();
lazurit.checkTeamBonus();
