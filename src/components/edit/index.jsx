import React from 'react';

import { Button } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { Persona, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';

import { getClasses } from '../../actions/classActions';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingPics: false,
            classId: props.match.params.id,
            class: props.classes.data[props.match.params.id]
        }
    }

    componentWillMount() {
        if (!this.props.classes.fetching && !this.props.classes.fetched)
            this.props.getClasses();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.classes.fetching && !nextProps.classes.fetched)
            this.props.getClasses();
        this.setState({class: nextProps.classes.data[this.state.classId]});
    }

    render() {
        console.log(this.state.class);
        return (
            <div>
                <center>
                    {/* <NormalPeoplePicker
                        onResolveSuggestions={this._onFilterChanged.bind(this)}
                        pickerSuggestionsProps={{
                            suggestionsHeaderText: 'Suggested People',
                            noResultsFoundText: 'No results found',
                            searchForMoreText: 'Search',
                            loadingText: 'Loading...',
                            isLoading: this.state.isLoadingPics
                        }}
                        getTextFromItem={(persona) => persona.primaryText}
                        onChange={this._onSelectionChanged.bind(this)}
                        onGetMoreResults={this._onGetMoreResults.bind(this)}
                        className='ms-PeoplePicker'
                        key='normal-people-picker' /> */}
                    <br />
                        Coming soon...
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

export default connect(mapStateToProps, { getClasses })(Edit);