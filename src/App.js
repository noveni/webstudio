import React, { Component } from 'react';

import Header from './Components/Header/Header'


const Webview = (props) => {
  return (
    <iframe
      title="Website Preview"
      width="100%"
      height="100%"
      src={props.url}
    >
    </iframe>
  );
}

const ViewWrapper = (props) => {


  const viewWrapperStyles = {
    padding: props.padding
  }
  return (
    <div className="ViewWrapper" style={viewWrapperStyles}>
      {props.children}
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteUrl: 'https://ecrannoir.be',
      color: "#ffffff",
      padding: "20px",
    };

    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handlerChangePadding = this.handlerChangePadding.bind(this);
  }

  handleChangeUrl(e) {
    e.preventDefault();
    this.setState({siteUrl: e.target.value})
  }

  handleChangeColor(e) {
    e.preventDefault();
    this.setState({color: e.target.value})
  }

  handlerChangePadding(e) {
    e.preventDefault();
    this.setState({padding:  e.target.value})
  }

  render() {

    const wrapperStyles = {
      backgroundColor: this.state.color,
    }

    return (
      <div className="App" style={wrapperStyles}>
        <Header
          websiteUrl={this.state.siteUrl}
          color={this.state.color}
          padding={this.state.padding}
          changeColor={this.handleChangeColor}
          changeUrl={this.handleChangeUrl}
          changePadding={this.handlerChangePadding}
        />
        <ViewWrapper padding={this.state.padding}>
            <Webview url={this.state.siteUrl} />
        </ViewWrapper>
      </div>
    )    
  };
}

export default App;
