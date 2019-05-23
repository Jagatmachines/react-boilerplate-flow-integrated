import * as React from 'react';
import Autosuggest from 'react-autosuggest';
import type { INavSearchBarProps, INavSearchBarState } from './types';
import { Link } from 'react-router-dom';
/* import moment from 'moment'; */

class NavSearchBar extends React.Component<INavSearchBarProps, INavSearchBarState> {
  constructor(props: INavSearchBarProps) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  // Imagine you have a list of languages that you'd like to autosuggest.
  /* languages = [
    {
      name: 'C'
    },
    {
      name: 'Elm'
    },
    {
      name: 'C++'
    }
  ]; */

  escapeRegexCharacters = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value: string) => {
    const { vehicleTrack } = this.props;

    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('\\b' + escapedValue, 'i');
    const totalVehicle: Array<string> = vehicleTrack.totalVehicle.filter(vehicle => {
      return regex.test(this.getSuggestionValue(vehicle));
    });

    return totalVehicle;
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion: string) => {
    const { vehicleTrack } = this.props;
    return vehicleTrack.vehicleLocation[suggestion].vehicle_no;
  };

  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion: string) => {
    const { vehicleTrack } = this.props;
    return (
      <Link
        to={`/vehicle/${suggestion}`} /* onClick={() => { fetchVehiclePath(suggestion, moment().format('YYYY-MM-DD')) }} */
      >
        {vehicleTrack.vehicleLocation[suggestion].vehicle_no}
      </Link>
    );
  };

  onChange = (event: Event, value: { newValue: string }) => {
    this.setState({
      value: value.newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = (newValue: { value: string }) => {
    this.setState({
      suggestions: this.getSuggestions(newValue.value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    };

    return (
      <div className="search-page">
        <button className="btn-search">
          <i className="melo-icon melo-icon-search" />
        </button>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default NavSearchBar;
