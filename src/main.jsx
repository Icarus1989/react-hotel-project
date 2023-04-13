import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RoomProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RoomProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RoomProvider>
	</React.StrictMode>
);
