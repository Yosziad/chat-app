import React, { useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnce from "../../hooks/useOnce";
import { withRouter, Link } from "react-router-dom";
import Message from './Message';

function ThreadView() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();

	const init = useCallback(() => {
		if(chat.socket.readyState && chat.currentThread){
			let skip = chat.currentThread.messages || 0;
			chat.socket.send(JSON.stringify({
			type: 'THREAD_LOAD',
			data: {
				threadId: chat.currentThread.id},
				skip: skip
		}))
		}
	},[chat.currentThread, chat.socket])

	useOnce(()=> {
		init();
	})

	useEffect(() => {
		init();
	},[init])

	

	return (
	<div className="main-view" id="main-view">
		{chat.threads.filter(thread => thread.id === chat.currentThread.id).map((thread, i) => {
			return (
				<div className='message-container' key={i}>
					{
					thread.Messages.map((msg, mi) => {
						return (
							msg &&
							<Message msg={msg} key={mi} profile={thread.profiles.filter(p => p.id === msg.userId)[0]}/>
						)
					})}
				</div>
			)
		})}
	</div>
	)
}

export default ThreadView;
