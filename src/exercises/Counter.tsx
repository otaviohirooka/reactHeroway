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
        //variável num recebe o estado number
        let num = this.state.number;

        //variável number soma 1
        num = num + 1;

        //setState altera o estado number para o novo valor da variável num
        this.setState({number: num});
    }

    minusOne = () => {
        let num = this.state.number;

        num = num - 1;

        this.setState({number: num});
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