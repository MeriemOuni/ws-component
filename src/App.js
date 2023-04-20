import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Carous from "./Components/Carous";
import Cards from "./Components/Cards";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Carous />
			<Cards />
			<h1>Workshop React Js </h1>
		</div>
	);
}

export default App;
