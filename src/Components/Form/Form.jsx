import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './Form.module.css'
import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import uuid4 from "uuid4";

const DetailsForm = (props) => {

    const [enteredData, setEnteredData] = useState({ name: '', age: '' });
    const [errorState, setErrorState] = useState();

    const nameChangeHandler = (event) => {

        setEnteredData((prevState) => { return { ...prevState, name: event.target.value } })
    }

    const ageChangeHandler = (event) => {
        setEnteredData((prevState) => { return { ...prevState, age: event.target.value } })
    }


    const onSubmitHandler = (event) => {

        event.preventDefault();
        if (enteredData.name.trim().length === 0 || enteredData.age.trim().length === 0) {
            setErrorState({
                error: "Invalid Input",
                message: "Please Fill All the Inputs."
            })
            return;
        }

        if (enteredData.age < 0) {
            setErrorState({
                error: "Invalid Input",
                message: "Age must be greate than 0."
            })
            return;
        }
        const genId = Math.random() * 1000;
        enteredData.id = genId;
        props.onAdd(enteredData)
        setEnteredData({ name: '', age: '' })
    }


    const errorHandler = () => {
        setErrorState(null);
    }

    return <>
        {errorState && <Modal error={errorState.error} message={errorState.message} removeError={errorHandler} />}
        <Form className={classes['form-holder']} onSubmit={onSubmitHandler}>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
                type="text"
                id="name"
                placeholder='Enter Your Name Here'
                value={enteredData.name}
                onChange={nameChangeHandler}
            />

            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control
                type="number"
                id="age"
                placeholder='Enter your Age Here'
                value={enteredData.age}
                onChange={ageChangeHandler}
            />

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default DetailsForm