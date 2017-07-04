class Card {
    constructor() {
	this.name = "Kittenator";
	this.type = "Sandfire";
	this.hp = "135";
	this.lvl = "70";
	this.description = "Though cute as a button and equally loving, \
the kittenator would just as easily melt your face off when it is tired of \
your attention";
    }
}

class CardDB {
    constructor() {
	this.cards = [ new Card(), new Card() ];
    }

    getCards() {
	return this.cards.slice(0);
    }
}

export default CardDB;
