import React, { Component } from 'react';

const formats = [
  {
    title: 'None',
    paddingTop: 'none',
    className: 'none',
  },
  {
    title: 'Square 1:1',
    paddingTop: '100%',
    className: '11',
  },
  {
    title: '16:9',
    paddingTop: '56.25%',
    className: '169',
  },
  {
    title: '4:3',
    paddingTop: '75%',
    className: '43',
  }
]

class Presets extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.props.onPresetChange(e.target.value)
  }

  render() {

    return (
      <div>
        <select value={this.props.presetValue} onChange={this.handleChange}>
          {formats.map((format) => 
            <option value={format.className}>{format.title}</option>
          )}
        </select>
      </div>
    )
  }
}

export default Presets;
