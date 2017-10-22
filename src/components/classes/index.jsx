import React from 'react';

import { connect } from 'react-redux';

import { getClasses } from '../../actions/classActions';

class Classes extends React.Component {

    componentDidMount() {
        if (!this.props.classes.fetching && !this.props.classes.fetched) {
            this.props.getClasses();
        }
    }

    render() {
        return (
            <div>
                Classes
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        classes: state.classes
    }
}

export default connect(mapStateToProps, { getClasses })(Classes);