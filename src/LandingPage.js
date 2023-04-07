import { useState } from 'react';
import { TextField, IconButton, Tooltip } from '@material-ui/core';
import { NavigateNext as SearchIcon, HelpOutline as HelpIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { noSelect, particlesJsOptions, muiTheme } from './usefulStuff.js';

import Styled from "styled-components";

const LandingPage = props => {
	const navigate = useNavigate();
	const [ value, setValue ] = useState("");
	const [ error, setError ] = useState(false);
	
	const isValidPID = () => /^[0-9a-z]{24}$/.test(value);

	const onEnterPressed = ev => {
		if(ev.key === 'Enter') {  
			ev.preventDefault();
			onSubmit();
		}
	}

	const onSubmit = () => isValidPID() ? navigate(`/parqet-deanonymize/p/${value}`) : setError(true);

	const particlesInit = useCallback(
		async engine => await loadFull(engine),
    	[]
    );
    
	/*
    const particlesLoaded = useCallback(
    	async container => await console.log(container), 
      	[]
    );*/
    
    
	return (
		<ThemeProvider theme={muiTheme}>
		
			<div style={{zIndex: -1}}>
				<Particles init={particlesInit} id="tsparticles" options={particlesJsOptions} /> {/*loaded={particlesLoaded}*/}
			</div>	
			
			<p style={css.heading}>
				parqet-deanonymize
			</p>
			<p style={css.subHeading}> 
				deanonymize user funds using ✨ Math ✨ 
			</p>
			
			<css.inputWrapper> {/* is schaisse, aber immerhin funktionieren queries */}
				<div style={css.searchWrapper}>
					<TextField
						label="enter portfolio-ID"
						onChange={ev =>{ setError(false); setValue(ev.target.value);}}
						value={value}
						onKeyPress={onEnterPressed}
						error={error}
						helperText={error ? "this is not a valid Portfolio-ID :(" : ""}			
						style={css.textField}	
					/>

					<IconButton onClick={onSubmit} style={css.iconButton}>
						<SearchIcon/>
					</IconButton>
				</div>

				<Tooltip 
					arrow 
					enterTouchDelay={0}
					title={
						<div>
							<img src="https://raw.githubusercontent.com/DesjardinsRepos/parqet-deanonymize/f0132e74a7b9115e1e4d74a9541152571ea12e1f/pidExample.png" style={css.tooltip.image}/>
							<p style={css.tooltip.text}>
								The URL of a portfolio contains a 24-character-long combination of numbers and letters - this is the Portfolio-ID.
							</p> 
						</div>
					}
				>
					<a style={css.helper.wrapper}>
						<HelpIcon style={css.helper.icon}/>  
						<p style={css.helper.text}>what is the portfolio-ID? </p> 
					</a>
				</Tooltip>
			</css.inputWrapper>
			
		</ThemeProvider>
	);
}

const css = {
	heading: {
		color: "#ffffff", 
		fontSize: "calc(2.5vw + 1.4rem)", 
		margin: "0 0 1vh 0", 
		...noSelect 
	},
	subHeading: {
		color: "#ffffff", 
		fontSize: "calc(0.8vw + 0.8rem)", 
		margin: "0 0 200px 0", 
		...noSelect 
	},
	inputWrapper: Styled.div`
		background: #26B6AA22;
		box-shadow: 0 0 10px 10px #26B6AA22;
		backdrop-filter: blur(1px); 
		display: flex;
		flex-direction: column; 
		width: 85%;
		max-width: 400px; 
		align-items: center;

		@media only screen and (max-width: 768px) {
		    bottom: 170px;
		    position: fixed;
		}
    `,
    searchWrapper: {
    	width: "98%",
    	display: "flex",
    	flexDirection: "row"	
    },
	textField: { 
		width: "calc(100% - 20px)", 
		margin: "0px 5px 20px 10px" 
	},
	iconButton: { 
		width: "44px", 
		height: "44px", 
		marginTop: "10px"
	},
	helper: {
		wrapper: {
			color: "#ffffff", 
			cursor: "pointer",
			margin: "auto auto auto 12px",
			display: "flex",
			flexDirection: "row",
			...noSelect 
		},
		icon: {
			margin: "13px 4px 0 0",
			height: "18px",
			width: "18px",
		},
		text: {
			marginTop: "10px"
		},
	},
	tooltip: {
		image: {
			width: "100%", 
			marginTop: "5px"
		},
		text: {
			fontSize: "15px", 
			lineHeight: "17px", 
			margin: "10px 8px 10px 8px"
		}
	}
}

export default LandingPage;
