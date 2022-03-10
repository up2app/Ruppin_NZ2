import { useContext } from 'react';
import { UserContext } from '../Context/userContext';

export default function Profile() {

  const { currentUser } = useContext(UserContext);

  return (
    <div>
      Hi {currentUser.name}<br/>
      You've got a new message: {currentUser.msg}
    </div>
  )
}
