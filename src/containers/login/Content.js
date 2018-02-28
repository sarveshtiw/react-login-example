import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import request from 'request'
import 'babel-polyfill'
import Login from '../../components/layout/Login'
import {onChange, validate, onUpdateMsg} from '../../actions/login'
import localStorage from '../../lib/Auth'

let baseURL = 'https://swapi.co/api'

class Content extends React.Component {

    constructor(props, context) {
        super(props, context);

        localStorage.deauthenticateUser('userInfo');

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event)
    {
        event.preventDefault()
        let username = this.props.arrData.field.username;
        let password = this.props.arrData.field.password;
        const self = this;
        this.props.validate(this.props.arrData.field)
        if(username && password) {
            request.get(`${baseURL}/people?search=${username}`, (err, res, body) =>{
                if(err)
                {
                    self.props.onUpdateMsg(err)
                }else{
                    let response = JSON.parse(res.body)
                    if(response.count)
                    {
                        let obj = response.results.find(o => o.birth_year == password)
                        if(obj)
                        {
                            self.props.onUpdateMsg("Credintial is correct")
                            localStorage.authenticateUser('userInfo', JSON.stringify(obj));
                            self.props.history.push('/dashboard');
                        }else{
                            self.props.onUpdateMsg("Invalid password")
                        }
                    }else{
                        self.props.onUpdateMsg("Invalid username/password")
                    }
                }
            })
        }
    }
    /**
     * Render the component.
     */
    render() {
        return (
            <Login
                onSubmit={this.onSubmit}
                onChange={this.props.onChange}
                arrData={this.props.arrData}
            />
        );
    }
}

const mapStateToProps = (state, props) =>{
  return {
        arrData:state.login
  }
}

export default connect(
        mapStateToProps,
    {onChange, validate, onUpdateMsg}
)(Content)