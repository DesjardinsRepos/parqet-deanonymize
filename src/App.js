import React from 'react';
import { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import LandingPage from './LandingPage';
import PortfolioLoader from './PortfolioLoader';
import NotFound from './NotFound';

export const Context = React.createContext(null);


const App = () => {
  	return (
	  	<div className="App" style={css.App}>
	  		<BrowserRouter>
	  			<Context.Provider value={{ }}>
					<Routes>
						<Route exact path="/parqet-deanonymize/" element={<LandingPage/>}/>
						<Route exact path="/parqet-deanonymize/p/:pID" element={<PortfolioLoader/>}/>
						{/*<Route exact path="/parqet-deanonymize" element={<Navigate replace to="/"/>}/>*/}
						<Route element={<NotFound/>}/>
					</Routes>
				</Context.Provider>
			</BrowserRouter>
	  	</div>
  	);
}

const css = { 
	App: {
		display: "flex", 
		flexDirection: "column", 
		justifyContent: "center", 
		alignItems: "center", 
		height: "100vh"
	}
}

export default App;
