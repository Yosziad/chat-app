import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";

function ChatInput() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
  const dispatch = useDispatch();
  
  const [content, setContent] = useState("");

  const onContentChange = useCallback((e) => setContent(e.target.value), []);

	return (
  <div className="input-view">
    <input 
    className='form-control'
    type='text'
    placeholder='Write your message' 
    value={content}
    onChange={onContentChange}
  />
  </div>
  )
}

export default ChatInput;
