
import UserCard from '../UserCard/UserCard'
import classes from './User.module.css'

const User = (props) => {
    console.log(props)
    return <UserCard className={classes['user-card']} onClick={props.onRemove} id={props.id}>
        <h3 className={classes['user-name']}>{props.name}</h3>
        <p>{props.age} Years Old</p>
    </UserCard>
}

export default User