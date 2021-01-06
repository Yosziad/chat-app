import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";

function ChatInput() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();

	const [content, setContent] = useState("");

	const onContentChange = useCallback((e) => setContent(e.target.value), []);

	const sendMessage = useCallback((e) => {
    e.preventDefault();
		const msg = {
			threadId: chat.currentThread.id,
			userId: auth.user.id,
			content: content,
			date: new Date(),
		};

		chat.socket.send(
			JSON.stringify({
				type: "ADD_MESSAGE",
				threadId: msg.threadId,
				message: msg,
			})
		);
		setContent('')
	}, [auth.user.id, chat.currentThread.id, chat.socket, content]);

	return (
		<form className="input-view" onSubmit={sendMessage}>
			<div className="input-group">
				<input
					className="form-control"
					type="text"
					placeholder="Write your message"
					value={content}
					onChange={onContentChange}
				/>
				<button className="btn btn-send input-group-append">
					<i className="zmdi zmdi-mail-send" />
				</button>
			</div>
		</form>
	);
}

export default ChatInput;
