import React, {useState, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";

function Sidebar() {
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
  const dispatch = useDispatch();
  
  const [search, setSearch] = useState("");

  const onSearchChange = useCallback((e) => setSearch(e.target.value), []);

  const onClick = useCallback(() =>{
    chat.socket.send(JSON.stringify({
      type: 'SEARCH',
      data: search
    }))
  },[chat.socket, search])

	return (
  <div className="sidebar">
  <div className='search-container'>
    <input className='form-control' placeholder='Search....' value={search} onChange={onSearchChange} />
    <button className='btn btn-primary' onClick={onClick} >Search</button>
  </div>
  {search ?
    <ul className='thread-list'>
      <label>Results</label>
      {chat.users.map((user, ui)=> {
        return (
          <li key={ui}>
        <Link to='/thread'>
          <i className='zmdi zmdi-account-circle'/>
          <h5>{user.name}</h5>
          <p>{user.email}</p>
        </Link>
      </li>
        )
      })}
    </ul>
  :
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
  }
  </div>
  );
}

export default Sidebar;
