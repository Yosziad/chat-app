import React, { useState } from 'react';


function AuthReducer(action) {
  const [token] = useState(null);
  const [user] = useState({});

  switch(action.type){
    default:
      return [token, user]
  }



}

export default AuthReducer;
