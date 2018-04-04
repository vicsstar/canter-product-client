import React, { Component } from 'react';

class DetailEntry extends Component {
  constructor(props) {
    super(props);
    this.detailChanged = this.detailChanged.bind(this);
  }
  
  detailChanged(field, target) {
    const detail = Object.assign({}, this.props.detail);
    detail[field] = target.value;
    this.props.onChange(detail);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-1">
          <div className="form-group">
            <label htmlFor="key" className="col-sm-2 control-label">Key</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="key" placeholder="Key" onChange={(e) => this.detailChanged('key', e.target)}/>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="value" className="col-sm-2 control-label">Value</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="value" placeholder="Value" onChange={(e) => this.detailChanged('value', e.target)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailEntry;
