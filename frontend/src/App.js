import React from 'react';
import Counter from './components/Counter/Counter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: []
    }
  }
  createCounter = event => {
    event.preventDefault();
    const target = event.target
    this.setState({
      counters: [
        ...this.state.counters, 
        <Counter start={+target.start.value} step={+target.step.value || 1} key={Date.now()} />
      ]
    }, () => {
      target.start.value = "";
      target.step.value = "";
    })
  }
  render() {
    return (
      <div>
        Crea un counter:
        <form onSubmit={this.createCounter}> //nos suscribimos al evento Submit
          <input type="number" className="inputStart" placeholder="introduce el start" name="start"/>
          <input type="number" className="inputStep" placeholder="introduce el step" name="step" />
          <button type="submit" >Crear Counter</button>
        </form>
        <br/>
        {this.state.counters}
      </div>
    );
  }

}
export default App;
