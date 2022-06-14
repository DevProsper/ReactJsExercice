import React from 'react';

const Car = (props) => {

    return (
        <div className="cars">
            <p>Marque : {props.children}</p>
            <p>Couleur : </p>
        </div>
    )
}

export default Car;