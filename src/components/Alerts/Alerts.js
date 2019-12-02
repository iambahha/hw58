import React from 'react';
import Alert from "../UI/Alert/Alert";

const Alerts = () => {
    const someHandler = () => null;
    const alerts = [
        {type: 'primary', show: true, dismiss: someHandler},
        {type: 'success', show: true, dismiss: someHandler},
        {type: 'warning', show: true},
        {type: 'danger', show: true, dismiss: someHandler},
        {type: 'primary', show: false, dismiss: someHandler},
    ];

    return (
        <div className="alerts container">
            <h2 style={{color: "#a2ca28"}}>Alerts examples:</h2>
            {alerts.map((alert,index)=> (
                <Alert
                    key={index}
                    type={alert.type}
                    show={alert.show}
                    dismiss={alert.dismiss}
                >This is a {alert.type} type alert</Alert>
            ))}
        </div>
    );
};

export default Alerts;