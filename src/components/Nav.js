import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

export default function Nav({user, setUser}){

    const handleLogOut = () =>{

        usersService.logOut();
        setUser(null);
    }

    return(
        <nav>
            <h2>Welcome, {user.name}</h2>
           <Link to="/orders">Order History</Link>
           &nbsp; | &nbsp;
           <Link to='/orders/new'>New Order</Link>
           &nbsp; | &nbsp;
           <Link to="" onClick={handleLogOut} >Log Out</Link>
        </nav>
    )
}