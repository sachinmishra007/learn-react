
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Message = (props) => {
    
    const { message, display, setDisplay, color = 'green' } = props.config;
    const onClose = () => {
        setDisplay(false);
    }
    return (
        <>
            {
                display &&
                <div className={'msgBox '+ color } >
                    <div className='msgTitle'>
                        {message}
                    </div>
                    <div className='msgClose' onClick={onClose}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                </div>
            }
        </>
    )
}

export default Message;