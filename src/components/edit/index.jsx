import React from 'react';

import { Button } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux';
// import { Persona, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { editClass, getClasses } from '../../actions/classActions';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.defaultClass = {
            _id: 'new',
            name: '',
            instructor: {
                _id: '',
                name: '',
            },
            students: []
        }

        let currentClass = props.classes.data[props.match.params.id];

        this.state = {
            isLoadingPics: false,
            classId: props.match.params.id,
            currentClass: props.match.params.id === 'new' ? this.defaultClass : currentClass
        }

        this.onNameChange = this.onNameChange.bind(this);
    }

    componentWillMount() {
        if (!this.props.classes.fetching && !this.props.classes.fetched)
            this.props.getClasses();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.classes.fetching && !nextProps.classes.fetched)
            this.props.getClasses();
        let classId  = nextProps.match.params.id;
        this.setState({ currentClass: classId === 'new' ? this.defaultClass : nextProps.classes.data[classId] });
    }

    onNameChange(newName) {
        let t = this.state.currentClass;
        t.name = newName;
        this.setState({currentClass: t});
    }

    render() {
        const { currentClass } = this.state;

        return (
            <div>
                <center>
                    <br />
                    <form ref='form'>
                        <div>{currentClass === undefined ? '' : currentClass.name}</div>
                        <div className='col-md-5 col-md-offset-3'>
                            <TextField
                                name="name"
                                placeholder='Name'
                                value={currentClass === undefined ? '' : currentClass.name}
                                onChanged={this.onNameChange}
                            />
                        </div>
                        <div className='col-md-1'>
                            <Button
                                primary={true}
                                onClick={() => this.props.editClass(currentClass)}
                                text='Save'
                            />
                        </div>
                    </form>
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

export default connect(mapStateToProps, { editClass, getClasses })(Edit);