import Header from "./components/Header";
import NewComponent from "./components/NewComponent";
import React, {Component} from "react";
// import NewItem from "./components/NewItem";

import JSON from "./db.json"

class App extends Component {

  state = {
    news: JSON,
  }

  render(){
    return (
      <div>
        <Header />
        <NewComponent item = {this.state.news}/>
        {/* <NewItem /> */}
      </div>
    )
  }
  
}

export default App;