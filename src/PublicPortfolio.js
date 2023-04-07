import React from "react";
import { Link } from "react-router-dom";

const PublicPortfolio = props => {
	return(
		<>
			<p style={css.text}> 
				This is a public portfolio, nothing to do here.&nbsp;
				<Link to="/parqet-deanonymize" style={{ color: "#30C9C1" }}>go back</Link> 
			</p>
			<iframe 
				src={`https://app.parqet.com/p/${props.pID}`}
				style={css.iframe}
			/>	
		</>
	);
}

const css = {
	text: {
		margin: "0",
		padding: "15px",
		width: "100%", 
		textAlign: "center",
		backgroundColor: "#1F2937",
		color: "white"
	},
	iframe: {
		width: "100%",
		height: "100%",
		margin: "auto",
		border: "none"
	}
}

export default PublicPortfolio;
