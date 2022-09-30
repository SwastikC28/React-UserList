const UserCard = (props) => {
    const deleteHandler = () => {
        props.onClick(props.key)
    }
    const classes = '' + props.className
    return <div className={classes} onClick={deleteHandler}>{props.children}</div>
}

export default UserCard