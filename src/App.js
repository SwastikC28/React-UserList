import DetailsForm from './Components/Form/Form';
import './App.css';
import UserHolder from './Components/Users/UserHolder/UserHolder';
import { useState } from 'react';

const USERS_LIST = [];


function App() {

  const [userData, setUserData] = useState(USERS_LIST);

  const onAddHandler = (data) => {
    setUserData((prevState) => { return [...prevState, data] })
    console.log(userData);
  }

  const onRemoveHandler = (id) => {
    setUserData(prevState => {
      const updateState = prevState.filter(user => user.key !== id);
      return updateState
    })
  }

  return <div className='App'>
    <DetailsForm onAdd={onAddHandler} />
    {userData.length === 0 && <p>No Users on the List.</p>}
    {userData.length > 0 && <UserHolder users={userData} onRemove={onRemoveHandler} />}

    {/* <Modal error="Invalid Message" error-message="Please Enter Age above 1." /> */}
  </div>
}

export default App;
