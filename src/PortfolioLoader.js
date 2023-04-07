import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PrivatePortfolio from './PrivatePortfolio';
import PublicPortfolio from './PublicPortfolio';

const PortfolioLoader = () => {
	const pID = useParams().pID;
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios.get(`https://api.parqet.com/v1/portfolios/${pID}`)
	    .then(response => {
	    	setData(response.data);
	      	setIsLoading(false);
	    })
	    .catch(error => {
	      	setError(error);
	      	setIsLoading(false);
	    });
	}, [pID]);
	
	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>{error.message}</p>;

	if(!data.portfolio.public) return (<p>This Portfolio is private.</p>)

	if(!data.portfolio.noAbsoluteValues) return (<PublicPortfolio pID={pID}/>)

	return(<PrivatePortfolio holdings={data.holdings} pID={pID}/>);
}

export default PortfolioLoader;
