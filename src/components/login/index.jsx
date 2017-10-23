import React from 'react';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { login } from '../../actions/authActions';

class Login extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <br />
                    <br />
                    Login
                    <br />
                    <br />
                    <DefaultButton primary={true} onClick={() => login()}>
                        <Icon iconName='OfficeLogo'/> Sign in with Office 365
                    </DefaultButton>
                </center>
            </div>
        );
    }
}

export default Login;