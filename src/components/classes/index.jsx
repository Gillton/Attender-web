import React from 'react';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteClass, getClasses } from '../../actions/classActions';

class Classes extends React.Component {

    componentDidMount() {
        if (!this.props.classes.fetching && !this.props.classes.fetched) {
            this.props.getClasses();
        }
    }

    render() {
        const { classes } = this.props;
        let classList = Object.keys(classes.data).map(id => {
            let c = classes.data[id];
            return (
                <tr key={id}>
                    <td><Link to={'/classes/' + id}>{c.name}</Link></td>
                    <td>{c.instructor.name}</td>
                    <td><Link to={'/classes/' + id + '/edit'}>Edit</Link></td>
                    <td onClick={() => {this.props.deleteClass(id)}}>Delete</td>
                    <td><Link to={'/classes/' + id + '/collect'}>Collect</Link></td>
                </tr>
            );
        });
        return (
            <div>
                <div style={{float: 'right', paddingRight: '20px'}}>
                    <DefaultButton
                        primary={true}
                        text='New +'
                        href='/classes/new/edit'        // TODO: route w/ react-router
                    />
                </div>
                <center>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Instructor</th>
                                <th></th>   
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {classList}
                        </tbody>
                    </table>
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

export default connect(mapStateToProps, { deleteClass, getClasses })(Classes);