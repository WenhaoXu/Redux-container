import React, { Component } from 'react';
import  Group from './concent/ContGroup'
class App extends Component {

    constructor(props) {
        super(props);
        this.inputText=React.createRef();
    }

    render() {
        return( <div className="App">  <Group  num={3}/></div>)

        // const { state, onIncrement, onDecrement } = this.props;
        // return (
        //
        //
        //     <div className="App">
        //         <p>
        //             Clicked: {state} times
        //             {' '}
        //             <button onClick={onIncrement}>
        //                 +
        //             </button>
        //             <button onClick={onDecrement}>
        //                 -
        //             </button>
        //             <input  type="text"  ref={this.inputText}></input>
        //             <button onClick={this.mul}>
        //                 *
        //             </button>
        //         </p >
        //     </div>
        // );
    }
}

export default App;
