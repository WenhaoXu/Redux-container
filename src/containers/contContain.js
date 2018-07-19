import {connect} from 'react-redux';
import {addTo, decTo, mulTo} from "../actions";
import addCont from "../concent/addCont";

const mapStateToProps=(state,ownProps)=>{
      return {
          value:state[ownProps.index]
      }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onIncrement:(index) => dispatch(addTo(index)),
        onDecrement:(index) => dispatch(decTo(index)),
        onMul:(index, multipler) => dispatch(mulTo(index,multipler)),
        // onDaly:(index)=>dispatch(dalyTo(index))
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(addCont)