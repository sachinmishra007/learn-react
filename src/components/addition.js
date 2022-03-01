
import React, { useState } from 'react';
import Message from './message';
// import FlipMotion, { FlipMotionHeight } from "react-flip-motion";

const Addition = () => {
    const [display, setDisplay] = useState(false);
    const [message, setMessage] = useState('');
    const [numbers] = useState({ first: React.createRef(), second: React.createRef() });
    const [vars] = useState({
        first: 0,
        second: 0,
    });



    const onClick = () => {
        let message = '';
        if (numbers.first === '') {
            message = 'Please Enter the First Number';
        }
        else if (numbers.second === '') {
            message = 'Please Enter the Second Number';
        }
        else {
            const first = parseInt(numbers.first.current.value, 10);
            const second = parseInt(numbers.second.current.value, 10);
            const sum = first + second;
            message = 'Sum of two numbers : ' + sum;
        }
        if (message !== '') {
            setDisplay(true);
            setMessage(message);
        }
        else {
            setDisplay(false);
        }

    }

    const handleChange = (event, param) => {
        const { name, value } = event.target;
        vars[name] = value;

    }

    const onClear = () => {
        setDisplay(false);
        numbers.first.current.value = 0;
        numbers.second.current.value = 0;
    }

    return (
        <>
            <div className='title'>
                Addition of two Number
            </div>
            <Message config={{ message, display, setDisplay }} />
            <div className='container'>
                <div className='control'>
                    <label className='labelCls'>First Number</label>
                    <input ref={numbers.first} onChange={handleChange} defaultValue={vars.first} className='inputCls' type='number' name='first'></input>
                </div>
                <div className='control'>
                    <label className='labelCls'>Second Number</label>
                    <input ref={numbers.second} onChange={handleChange} defaultValue={vars.second} className='inputCls' type='number' name='second'></input>
                </div>
                <div className='seprator'>
                </div>
                <div className='btnCls'>
                    <div className='button' onClick={onClear}>Clear</div>
                    <div className='button' onClick={onClick}>Submit</div>
                </div>
            </div>
        </>
    );
}

export default Addition;
