import React, {Component} from 'react';

import Cont from '../containers/contContain'

export default class ContGroup extends Component {

    render() {
        const {num} = this.props;
        const list = Array.from({length: num}, (v, k) => k);
        return (<div>{list.map((x) => <Cont index={x} key={x}/>)}</div>
        );


    }
}