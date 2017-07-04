class Card {
    constructor() {
	this.name = "Kittenator";
	this.type = "Sandfire";
	this.hp = "135";
	this.descriptions = "Though cute as a button and equally loving, \
the kittenator would just as easily melt your face off when it is tired of \
your attention";
    }
}

class CardDB {
    constructor() {
	var cards = [ new Card(), new Card() ];
    }

    getCards() {
	return this.cards;
    }
}

export default CardDB;
