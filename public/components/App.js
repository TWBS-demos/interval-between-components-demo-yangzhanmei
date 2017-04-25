import React from 'react';
import Hello from './Hello.js';

class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {name:"Hello"};
   }
   render() {
      return (
         <div>
            <Hello name={this.state.name}/> World!
         </div>
      );
   }
}

export default App;