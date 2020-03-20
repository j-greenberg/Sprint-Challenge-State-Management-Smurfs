import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { useState } from 'react';

import { createSmurf, getSmurfs } from '../actions/mainActions';

function CreateSmurf(props){

    const [smurf, setSmurf] = useState({name: '', age: '', height: ''});

    function handleChange(event){
        setSmurf({...smurf, [event.target.name]: event.target.value})
        console.log(smurf);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.createSmurf(smurf);
        setSmurf({name: '', age: '', height: ''})
        props.getSmurfs();
    }

    return(
        <form>
            <TextField variant='outlined' type='text' name='name' value={smurf.name} onChange={handleChange}/>
            <TextField variant='outlined' type='text' name='age' value={smurf.age} onChange={handleChange}/>
            <TextField variant='outlined' type='text' name='height' value={smurf.height} onChange={handleChange}/>
            <Button variant='outlined' onClick={handleSubmit}>Create Smurf</Button>
        </form>
    )
}

export default connect(null, { createSmurf, getSmurfs })(CreateSmurf);