import React, {useContext} from 'react'
import { AppState } from '../../App'

const Home = () => {
  const {user} = useContext(AppState);
  //console.log(user);
  return (
    <div>
      <h1>Home</h1>
      <br />
      
      <h2>welcome: {user.username}</h2>
    </div>
  );
}

export default Home
