import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/mainActions';

const SmurfCard = props => {

    return(
        <Card variant='outlined'>
            <CardContent>{props.smurf.name}</CardContent>
            <CardContent>{props.smurf.age}</CardContent>
            <CardContent>{props.smurf.height}</CardContent>
            <CardContent>{props.smurf.id}</CardContent>
            <Button variant='outlined' onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</Button>
        </Card>
    );
};

export default connect(null, { deleteSmurf })(SmurfCard);