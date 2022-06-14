import React, { Component } from 'react'
import Car from './Cars';

class MyCarts extends Component {

    render() {

        return(
            <div>
                <h1>{this.props.title}</h1>
                <Car>Ford</Car>
                <Car>Mercedes</Car>
                <Car>Peugeot</Car>
            </div>
        )
    }


}

export default MyCarts;