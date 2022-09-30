import User from "../User/User"
import classes from './UserHolder.module.css'

const UserHolder = (props) => {
    return <div className={classes['user-holder']}>
        {
            props.users.map((user) => { return <User name={user.name} age={user.age} id={user.id} key={user.id} onRemove={props.onRemove} /> })
        }
    </div>
}

export default UserHolder