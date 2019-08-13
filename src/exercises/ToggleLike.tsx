import React from 'react';

interface IProps {
    defaultLiked: boolean;
}

interface IState {
    liked: boolean;
}

/**
 * Funções padrões - render / componentDidMount / etc.
 * Propriedades padrões - this.props / thi.state;
 * this.props ===> SOMENTE LEITURA
 * this.state ===> DECLARA, LÊ E MODIFICA
 *  */

//transformando minha classe comum em um compoente react
class ToggleLike extends React.Component<IProps, IState> {

    constructor(props: IProps) { 
        super(props); //tem que ter!!

        //declaração do this.state
        this.state = {
            liked: props.defaultLiked,
        }
    }

    componentDidMount() {
        console.log('Componente acabou de ser montado');
    }

    changeLikedState = () => {
        let liked = null;

        if(this.state.liked) {
            liked = false;
        } else {
            liked = true;
        }

        this.setState({ liked: liked });
    }

    //react.Component usa essa função para renderizar p conteúdo
    //função reservada do react que é executada automaticamente
    render() {
        return (
            <div>
                <button onClick={this.changeLikedState}>Toggle Like</button>
                <div>props.defaultLike = {this.props.defaultLiked.toString()}</div>
                <div>state.liked = {this.state.liked.toString()}</div>

                {this.state.liked === true ? 'LIKED' : 'NOT LIKED'}
            </div>
        )
    }
}

export default ToggleLike;