import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import ThreadView from "../partials/ThreadView";
import ChatInput from '../partials/ChatInput';

function Messenger() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();
	return (
		<div className="messenger-container">
			<Sidebar />
			<ThreadView />
      <ChatInput />
		</div>
	);
}

export default Messenger;
