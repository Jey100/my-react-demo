import React from 'react';


class Hello extends React.Component {
    constructor(){
        super();
    }

    say(){
        alert(123)
    }

  render() {
    return (
      <div className="App">
          <button onClick={this.say}>点击我</button>
      </div>
    );
  }
}

export default Hello;
