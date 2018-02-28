import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const styles = {
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
    },
    submit_btn: {
        marginTop: '15px'

    },
    hint: {
        textAlign: 'center',
        marginTop: '1em',
        color: '#ccc',
    },
    errorMsg:{
        color:'red'
    }
};

const Form = ({
                  onSubmit,
                  onChange,
                  arrData
              }) => (
    <form action="/" onSubmit={onSubmit}>
        <div style={styles.form}>
            {arrData.msg && <p style={styles.errorMsg}>{arrData.msg}</p>}
            <div style={styles.input}>
                <TextField
                    floatingLabelText="Username"
                    name="username"
                    errorText={arrData.error.username}
                    onChange={onChange}
                    value={arrData.field.username}
                />
            </div>
            <div style={styles.input}>
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={arrData.error.password}
                    value={arrData.field.password}
                />
            </div>
            <CardActions>
                <RaisedButton type="submit" label="Log in" primary fullWidth style={styles.submit_btn}/>
            </CardActions>
        </div>
    </form>
);
export default Form;
