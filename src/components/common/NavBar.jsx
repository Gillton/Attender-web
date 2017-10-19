import React from 'react';

import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { connect } from 'react-redux';

import { login, logout } from '../../actions/authActions';
import { getMe } from '../../actions/userActions';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: null
        }
    }

    componentWillMount() {
        if (this.props.auth.isAuthenticated) 
            this.props.getMe();
    }

    render() {
        const { auth, user } = this.props;
        
        return (
            <div>
                <CommandBar
                    farItems={[
                        {
                            key: 'display-name',
                            name: user.displayName
                        },
                        {
                            key: 'log-in-out-button',
                            name: auth.isAuthenticated ? 'Sign out' : 'Sign in',
                            onClick: auth.isAuthenticated ? this.props.logout : login
                        }
                    ]}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user
    }
}

export default connect(mapStateToProps, { getMe, logout })(NavBar);