import React from 'react';
import Grid from '@material-ui/core/Grid';
import SmurfCard from './SmurfCard';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions/mainActions';

const mapStateToProps = state => {
    return {
     smurfs: state.smurfs
    };
  }

const SmurfList = props => {

    //props.getSmurfs();
    console.log('These are the props being passed in: ', props);

    return(
        <Grid>
            {props.smurfs.map(smurf =>(
                <SmurfCard key={smurf.id} smurf={smurf}/>
            )
        )}
        </Grid>
    )
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);