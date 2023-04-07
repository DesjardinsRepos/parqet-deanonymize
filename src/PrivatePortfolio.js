import React, { useState, useEffect } from "react";
import { wrap } from 'comlink';
import PrivateParqetView from './PrivateParqetView';
import AnalysisView from './AnalysisView';

const PrivatePortfolio = props => {
	const [ res, setRes ] = useState(null);
	const [ done, setDone ] = useState(false);

	useEffect(() => {
		const workerCode = `
		      self.onmessage = e => {
		      		d = e.data
	      		
	      			let amount = [], diffChart = [];
	      			for(d[0].amount = 1; d[0].amount < 1000; ++d[0].amount) {
	      		
	      				let diff = 0;
	      				for(let i = 1; i < d.length; ++i) {
	      					let implicatedPortfolioValue = d[0].price * d[0].amount / d[0].alloc * 100;
	      					d[i].amount = implicatedPortfolioValue * d[i].alloc / 100 / d[i].price;
							
	      					diff += Math.abs(
	      						Math.round(d[i].amount) - d[i].amount
	      					)
	      				}
	      				diffChart.push(diff);
	      		
	      				// escape case
	      				if(diff < 1) break;
	      			}
		      
		      		self.postMessage({ holdings: d, diffChart: diffChart, volume: d[0].amount * d[0].price / d[0].alloc * 100 });
		      }
		`;

	    const worker = new Worker(
			URL.createObjectURL(
				new Blob([workerCode], { type: 'application/javascript' })
			)
	    );
	    
	    worker.postMessage(
			props.holdings
			.map(hol => ({ 
				id: hol._id,
				name: hol.nickname ?? hol.security.name,
				currency: hol.currency,
				price: hol.position.currentPrice,
				alloc: hol.position.allocation,
				assetType: hol.assetType
			}))
			.filter(el =>					// quick fix, need to edit later
				el.alloc > 0 
				&& el.assetType !== "cash" 
				&& el.currency === "EUR"
			)
			.sort((a, b) =>
				b.price - a.price
			)
		);

	    worker.onmessage = event => {
			setRes({
				holdings: event.data.holdings.sort((a, b) =>
					b.alloc - a.alloc
				),
				...event.data
			});
			setDone(true);
	    };

	    return () => worker.terminate();
	}, []);

	if(done) return(
		<div style={css.screenWrapper}>
			<PrivateParqetView style={css.parqetIframe} pID={props.pID}/>

			<div style={css.analysis}>
				<AnalysisView res={res}/>
			</div>			
		</div>
	);

	return(
		<>
			loading
		</>
	);
}

const css = {
	screenWrapper: {
		display: "flex", 
		height: "100vh", 
		width: "100vw"
	},
	parqetIframe: {
		width: "50%", 
		border: "none"
	},
	analysis: { 
		width: "50%"
	}
}

/*
https://www.npmjs.com/package/iframe-resizer-react

With this use case it can be configured as follows

<IframeResizer
    heightCalculationMethod="bodyScroll"
    src="http://anotherdomain.com/iframe.html"
    style={{width: '1px', minWidth: '100%'}} // for ios issue
/>
*/

export default PrivatePortfolio;
