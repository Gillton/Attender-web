import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getClasses } from '../../actions/classActions';

class Classes extends React.Component {

    componentDidMount() {
        if (!this.props.classes.fetching && !this.props.classes.fetched) {
            this.props.getClasses();
        }
    }

    render() {
        const { classes } = this.props;
        let classList = classes.data.map(c => {
            return (
                <span key={c._id}>
                    <Link to={'/classes/' + c._id}>{c.name}</Link> <Link to={'/classes/' + c._id + '/collect'}>Collect</Link>
                    <br />
                </span>
            );
        });
        return (
            <div>
                <center>
                    {classList}
                </center>
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