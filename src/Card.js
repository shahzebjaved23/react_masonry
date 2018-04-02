import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
	render(){
		return (
			<div className="card">
				<div className="card-image">
					<img className="card-image" src={this.props.src} />	
				</div>	
				<div className="card-text">
					{this.props.text}
				</div>	

			</div>
		)
	}
}

export default Card;