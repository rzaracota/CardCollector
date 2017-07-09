import { createStore } from 'redux';

import CardDB from './card-database';

const funcs = {
    fib: function(state = 0, action) {
	if (state === 0) {
	    return [1];
	} else if (state.length === 1) {
	    return [...state, 1];
	} else {
	    let n1 = state[state.length - 2];
	    let n2 = state[state.length - 1];

	    return [...state, n1 + n2];
	}
    },

    cards: function(state = 0, action) {
     	var db = new CardDB();
	var cards = db.getCards();

	return [...state, { cards: cards }]; 
    }
};

export function collectDispatcher(state = 0, action) {
    if (funcs[action.type]) {
	return funcs[action.type](state);
    } else {
	return funcs["cards"](state);
    }
}

var id = 0;

class state_manager {
    constructor(clicker) {
	this.id = id++;
	
	this.store = createStore(collectDispatcher);

	this.store.subscribe(() => {
	    return console.log("state changed: " + this.store.getState());
	});
    }

    test() {
	this.store.dispatch({ type: "fib" });
    }
}

export default state_manager;
