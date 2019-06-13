import React from 'react';
import PropTypes from 'prop-types';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.start
        }
    }
    
  static propTypes = {
    start: PropTypes.number,
    step: PropTypes.number,
  };
  static defaultProps={
      start:0,
      step:1
  }
    decrement = () =>{
        this.setState({ count: this.state.count - this.props.step })
    } 
    increment = () => this.setState({
        count: this.state.count + this.props.step
    });
    render() {
        return (
            <div className="counter">
                <button onClick={this.decrement}>-</button>
                {this.state.count}
                <button onClick={this.increment}>+</button>
                    </div>
        )
    }
}
export default Counter