import React from "react";
import "./App.css";

import SmurfList from '../components/SmurfList';
import CreateSmurf from '../components/CreateSmurf';

import { connect } from "react-redux";
import { getSmurfs } from '../actions/mainActions';

// const mapStateToProps = state => {
//   return {
//    smurfs: state.smurfs
//   };
// }

function App (props) {

    props.getSmurfs();

    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <CreateSmurf/>
        <SmurfList/>

      </div>
    );
}

export default connect(null, { getSmurfs })(App)
