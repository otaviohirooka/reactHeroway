import React from 'react';

interface IProps {
    name: string;
    company: string;
    since?: number; //? opcional
}

const HelloWorld: React.FC<IProps> = (props) => {
    return (
        <React.Fragment> 
            <div className="potato1">Hello World {props.name}</div>
            <div className="potato2">COmpany: {props.company}</div>
        </React.Fragment>
    )
}

export default HelloWorld;