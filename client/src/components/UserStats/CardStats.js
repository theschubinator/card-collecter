import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../../actions/filters';


const rookieCards = (cards) => {
	return cards.filter((card) => card.rookie).length;
}

const cardValue = (cards) => {
	let total = 0;
	cards.forEach((card) => {
		if(card.value) {
			total += parseFloat(card.value)
		}
	})
	return parseFloat(total / 100).toFixed(2);
}

class CardStats extends Component {

	componentWillMount() {
		this.props.sortBy('created_at');
	}

	handleChange = (e) => {
		this.props.sortBy(e.target.value);
	}

	render() {
		return (
			this.props.user &&
			<div id="card-stats">
			<h4>
				<span className="stats-row">
					<span id="total"><strong>Total:</strong></span>
					<span>Cards: {this.props.user.cards.length}</span>
					<span>Rookie Cards: {rookieCards(this.props.user.cards)}</span>
					<span>Value: ${cardValue(this.props.user.cards)}</span>
				</span>
				<span id="select">Sort By:
					<select onChange={this.handleChange}>
						<option value="created_at descending" defaultValue>Newly Added</option>
						<option value="brand ascending year">Brand</option>
						<option value="last_name ascending year">Player</option>
						<option value="rookie ascending last_name">Rookie</option>
						<option value="value descending last_name">Value</option>
						<option value="year ascending last_name">Year</option>
					</select>
					<a>Advanced Filters</a>
				</span>
			</h4>		
		</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	filters: state.filters
});

export default connect(mapStateToProps, { sortBy })(CardStats);