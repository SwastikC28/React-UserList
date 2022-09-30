import React from "react"
import { Button } from "react-bootstrap"
import classes from './Modal.module.css'

const Modal = (props) => {
    return <div className={classes.modal} >
        <div className={classes.backdrop} onClick={props.removeError}></div>
        <div className={classes.content}>
            <h1 className={classes.header}>
                {props.error}
            </h1>
            <div className={classes['error-content']}>
                <p>
                    {props.message}
                </p>
                <Button onClick={props.removeError}>Close</Button>
            </div>
        </div>
    </div >
}


export default Modal