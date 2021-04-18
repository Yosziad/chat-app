import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function Message(props) {

  const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();

  return (
    <div>
    {props.msg ?
    <div className={`message-item ${props.msg.userId === auth.user.id ? `msg-right` : `msg-left`}`}>
      <i className="zmdi zmdi-account-circle" />
      <div className='chat-bubble' title={props.profile.name}  data-toggle='tooltip'>{props.msg.content}</div>
    </div>
    :
    null}
    </div>
  )
}

export default Message;