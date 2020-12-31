import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";

function Sidebar() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();
	return (
  <div className="sidebar">
    <ul className='thread-list'>
      <label>Messages</label>
      <li>
        <Link to='/thread'>
          <i className='zmdi zmdi-account-circle'/>
          <h5>Name</h5>
          <p>this is the last message</p>
        </Link>
      </li>
    </ul>
  </div>
  );
}

export default Sidebar;
