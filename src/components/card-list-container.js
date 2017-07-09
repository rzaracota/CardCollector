import { connect } from 'react-redux';

import CardList from './card-list';

const mapStateToProps = (state) => {
    return {
	cards: state[0].cards
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
	clickHandler: () => dispatch()
    }
}

const VisibleCardList = connect(
    mapStateToProps,
    mapDispatchToProps
) (CardList);

export default VisibleCardList;
