import React, { Component } from 'react';

import Menu from './Components/Menu/Menu';
import WebView from './Components/WebView/WebView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteUrl: 'https://www.paloma-latelier.be/',
      color: "#EECC90",
      padding: "80px",
      presetValue: 'none',
    };

    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangePadding = this.handleChangePadding.bind(this);
    this.handleChangePreset = this.handleChangePreset.bind(this);
  }

  handleChangeUrl(e) {
    e.preventDefault();
    this.setState({siteUrl: e.target.value})
  }

  handleChangeColor(e) {
    e.preventDefault();
    this.setState({color: e.target.value})
  }

  handleChangePadding(e) {
    e.preventDefault();
    this.setState({padding:  e.target.value})
  }

  handleChangePreset(presetValue) {
    this.setState({presetValue: presetValue})
  }

  render() { 

    return (
      <div className="App">
        <Menu
          websiteUrl={this.state.siteUrl}
          color={this.state.color}
          padding={this.state.padding}
          presetValue={this.state.presetValue}
          changeColor={this.handleChangeColor}
          changeUrl={this.handleChangeUrl}
          changePadding={this.handleChangePadding}
          changePreset={this.handleChangePreset}
        />
        <WebView
          websiteUrl={this.state.siteUrl}
          color={this.state.color}
          padding={this.state.padding}
          presetValue={this.state.presetValue}
        />
      </div>
    )    
  };
}

export default App;
