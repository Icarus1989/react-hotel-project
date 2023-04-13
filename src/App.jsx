import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/rooms" element={<Rooms />}></Route>
				<Route exact path="/rooms/:slug" element={<SingleRoom />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</>
	);
}

export default App;
