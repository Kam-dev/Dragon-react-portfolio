import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioManager extends Component {
	constructor() {
		super();

		this.state = {
			portfolioItems: []
		};
	}

	getPortfolioItems() {
		axios
			.get('https://jordan.devcamp.space/portfolio_items', {
				withCredentials: true
			})
			.then(response => {
				this.setState({
					portfolioItems: [
						...response.data.portfolio_Items
					]
				});
			})
			.catch(_error => {
				console.log('error in getPortfolioItems');
			});
	}

	componentDidMount() {
		this.getPortfolioItems();
	}

	render() {
		return (
			<div className="portfolio-manager-wrapper">
				<div className="left-column">
					<h1>Portfolio form....</h1>
				</div>

				<div className="right-column">
					<h1>Portfolio sidebar....</h1>
				</div>
			</div>
		);
	}
}
