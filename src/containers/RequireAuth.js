import React, {Component} from 'react';
import { connect } from 'react-redux';
import localStorage from '../lib/Auth'
import { updateAuthenticated } from '../actions/AuthToken'

export default function (ComposedComponent) {

    class Authentication extends Component {

        constructor(props, context) {
            super(props, context);
        }

        componentWillMount() {
            let userInfo = localStorage.isUserAuthenticated('userInfo') ? JSON.parse(localStorage.getToken('userInfo')) : {}
            if (Object.keys(userInfo).length > 0) {
                this.props.updateAuthenticated({authenticated: true, msg: ''});
            } else {
                this.props.updateAuthenticated({authenticated: false, msg: "User does not exists."});
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ComposedComponent
                {...this.props}
            />
        }
    }

    function mapStateToProps(state, props) {
        return {
            authenticated: state.auth.authenticated,
            msg: state.auth.msg
        };
    }

    return connect(
        mapStateToProps,
        {updateAuthenticated}
    )(Authentication)
}
