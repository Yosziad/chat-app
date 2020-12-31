import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";

function Sidebar() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
  const dispatch = useDispatch();
  
  const [search, setSearch] = useState("");

  const onSearchChange = useCallback((e) => setSearch(e.target.value), []);

	return (
  <div className="sidebar">
  <div className='search-container'>
    <input className='form-control' placeholder='serch....' value={search} onChange={onSearchChange} />
  </div>
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
