import ReactDOM from 'react-dom'

import { Button } from "react-bootstrap"
import classes from './Modal.module.css'

const Modal = (props) => {
    return < >
        {ReactDOM.createPortal(<div className={classes.backdrop} onClick={props.removeError}></div>, document.getElementById('backdrop'))}
        {
            ReactDOM.createPortal(<div className={classes.content}>
                <h1 className={classes.header}>
                    {props.error}
                </h1>
                <div className={classes['error-content']}>
                    <p>
                        {props.message}
                    </p>
                    <Button onClick={props.removeError}>Close</Button>
                </div>
            </div>, document.getElementById('overlay'))
        }
    </>
}


export default Modal