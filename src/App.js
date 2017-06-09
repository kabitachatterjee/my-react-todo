import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello World!!!</h1>
        </div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

 export default App;

// export default (
//   <Route path='/' component={App} />
// )
