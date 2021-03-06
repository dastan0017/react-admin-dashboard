import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./index.scss";
import "./core/i18n";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback="Loading...">
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
