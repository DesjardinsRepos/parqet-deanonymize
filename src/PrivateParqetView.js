import React, { useEffect, useRef } from 'react';

const PrivateParqetView = props => {
	const iframe = useRef(null);

	/*
	useEffect(() => {
		if (iframe.current) {
			const _document = iframe.current.contentWindow.document;
			const blockedElement = _document.getElementById('blocked-element');
			if (blockedElement) {
				blockedElement.style.display = 'none'; // hide the blocked element
				// or: blockedElement.parentNode.removeChild(blockedElement); // remove the blocked element from the DOM
			}
		}
	}, []);*/

	// this does not work. maybe create an iframe only site on github.io and frame it into here?

	return (
		<iframe
			style={props.style}
			ref={iframe}
			src={`https://app.parqet.com/p/${props.pID}`}
		/>
	);
}

export default PrivateParqetView;
