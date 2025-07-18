// App.jsx
import React from 'react';
import Header from './Header';
import ResultContainer from './ResultContainer';
import SearchBox from './SearchBox';
import "../ui/Domain.css"
import name from '@rstacruz/startup-name-generator';

class App extends React.Component {
  state = {
    headerText: "Just Name It!!",
    headerExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: inputText.length === 0,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div id='domain'>
        <Header
          headTitle={this.state.headerText}
          headerExpanded={this.state.headerExpanded}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
