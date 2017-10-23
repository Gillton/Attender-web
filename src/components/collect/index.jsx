import React from 'react';

import { connect } from 'react-redux';

import { startCollect, endCollect } from '../../actions/collectActions';

class Collect extends React.Component {
    render() {
        return (
            <div>
                Collect
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, { startCollect, endCollect })(Collect);