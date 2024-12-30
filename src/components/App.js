
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from 'react-redux'
import { updateEmail, updateName } from "../redux/action";

const App = () => {
  const { name, email } = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>User Information</h1>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      /> <br />
      Email:
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <h1>Current values in store:</h1>
      <p className="output">Name - {name}</p>
      <p className="output">Email - {email}</p>
    </div>
  )
}

export default App
