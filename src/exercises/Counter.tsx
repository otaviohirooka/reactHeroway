import React from 'react';
import { number } from 'prop-types';

interface IProps {
    propsNumber: number;
}

interface IState {
    number: number;
}

class Counter extends React.Component<IProps,IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            //estado number definido inicialmente como '0' no App.tsx
            number: props.propsNumber,
        }
    }

    plusOne = () => {
        //variável number recebe o estado number
        let number = this.state.number;

        //variável number soma 1
        number = number + 1;

        //setState altera o estado number para o novo valor da variável number
        this.setState({number: number});
    }

    minusOne = () => {
        let number = this.state.number;

        number = number - 1;

        this.setState({number: number});
    }

    render() {
        return (
            <>
                <button onClick={this.plusOne}>+</button>
                <div>{this.state.number}</div>
                <button onClick={this.minusOne}>-</button>
            </>
        )
    }
}

export default Counter;