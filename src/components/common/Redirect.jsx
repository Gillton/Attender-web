import React from 'react';

class Redirect extends React.Component {
    componentWillMount() {
        this.history.pushState(null, 'classes');
    }
}

export default Redirect;