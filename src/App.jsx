import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setupSocket from "./store/actions/chatActions";
import * as AuthActions from "./store/actions/authActions";
import Messenger from "./components/pages/Messenger";
import useOnce from "./hooks/useOnce";
import Auth from "./components/pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/swag.css";

const App = (props) => {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();

	useOnce(() => {
		dispatch(setupSocket());
	});

	return (
		<div className="App">
			<button onClick={() => dispatch(AuthActions.logout())}>Log Out</button>
			<BrowserRouter>
				<Switch>
					<Route
						path="/login"
						render={(props) => {
							if (auth.token) {
								return <Redirect to="/" />;
							} else {
								return <Auth />;
							}
						}}
					/>
					<Route
						path="/signup"
						render={(props) => {
							if (auth.token) {
								return <Redirect to="/" />;
							} else {
								return <Auth />;
							}
						}}
					/>

					<Route
						path="/"
						render={(props) => {
							if (!auth.token) {
								return <Redirect to="/login" />;
							} else {
								return <Messenger />;
							}
						}}
					/>

					<Route
						path="/:threadId"
						render={(props) => {
							if (!auth.token) {
								return <Redirect to="/login" />;
							} else {
								return <Messenger />;
							}
						}}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
