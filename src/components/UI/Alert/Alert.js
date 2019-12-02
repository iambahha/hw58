import React from 'react';
import './Alert.css';

const Alert = props => {
    return (
        <div className={["Alert", props.type].join(' ')} style={{display: props.show ? 'block' : 'none',
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'}}
        >
            <button className="btn-dismiss" style={{display: props.dismiss === undefined ? "none" : "block"}} onClick={props.close}>X</button>
           {props.children}
        </div>
    );
};

export default Alert;