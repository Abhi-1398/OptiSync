import React from 'react';

class ComplexComp extends React.Component{
    render()
    {
        let nm = 'Karan';
        let num= 12;
        return (
            <div>
                <h1> welcome {nm} </h1>
                <h1> square {num * num} </h1>
                <p> Date : { new Date().toString()}</p>
                <h1> complex UI</h1>
            </div>
        )
    }
}

export default ComplexComp;