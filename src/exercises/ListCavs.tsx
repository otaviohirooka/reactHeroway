import React from 'react';

interface Cavaleiros {
    id: number;
    name: string;
    armadura: string;
}

interface IProps {
    cavaleiros : Cavaleiros[];
}

const ListCavs: React.FC<IProps> = props => {
    return (
        <ul>
            {props.cavaleiros.map(cavs => {
                return <li key={cavs.id}>{cavs.name}: {cavs.armadura}</li>;
            })}
        </ul>
    );
};

export default ListCavs;