import React, { Component } from 'react';

class DetailEntry extends Component {
  constructor(props) {
    super(props);
    this.keyChanged = this.keyChanged.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  keyChanged(event) {
    this.props.onChange(
      Object.assign(
        {}, this.props.detail,
        { key: event.target.value }
      )
    );
  }

  valueChanged(event) {
    this.props.onChange(
      Object.assign(
        {}, this.props.detail,
        { value: event.target.value }
      )
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-1">
          <div className="form-group">
            <label htmlFor="key" className="col-sm-2 control-label">Key</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="key" placeholder="Key" onChange={this.keyChanged}/>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="value" className="col-sm-2 control-label">Value</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="value" placeholder="Value" onChange={this.valueChanged}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailEntry;