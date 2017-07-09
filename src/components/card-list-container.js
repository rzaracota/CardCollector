import { connect } from 'react-redux';

import CardList from './card-list';

const mapStateToProps = (state, ownProps) => {
    return {
	cards: state[0].cards, clickHandler: ownProps.clickHandler
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const VisibleCardList = connect(
    mapStateToProps,
    mapDispatchToProps
) (CardList);

export default VisibleCardList;
