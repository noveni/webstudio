import React, { Component } from 'react';

const ColorInput = (props) => {

  return (
    <div>
      <input 
        type="color" 
        value={props.color} 
        onInput={(e) => props.changeColor(e)} 
        onChange={(e) => props.changeColor(e)}
      />
    </div>
  )
}

const UrlInput = (props) => {
  return (
    <div>
      <input 
        type="url"
        value={props.websiteUrl}
        placeholder="https://example.com"
        pattern="https://.*" size="30"
        onChange={(e) => props.changeUrl(e)}
        required
      />
    </div>
  )
}

const PaddingInput = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.padding}
        onChange={(e) => props.changePadding(e)}
      />
    </div>
  )
}


class Header extends Component {


  render() {

    const {
      websiteUrl,
      color,
      padding,
      changeColor,
      changeUrl,
      changePadding,
    } = this.props;

    return (
      <div className="Header">
        <ColorInput
          color={color}
          changeColor={changeColor}
        />
        <UrlInput
          websiteUrl={websiteUrl}
          changeUrl={changeUrl}
        />
        <PaddingInput
          padding={padding}
          changePadding={changePadding}
        />
      </div>
    )    
  };
}

export default Header;
