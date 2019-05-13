import React from 'react';

class SelectField extends React.Component {
  constructor() {
    super();
  }

  showOptions() {
    let items = [];
    this.props.items.forEach((item) => {
      items.push(item);
    });
    return items.map((item) => {
      return <option value={item} key={item}>{item}</option>;
    });
  }

  render() {
    return (
      <select
        className="showcase__filters-item"
        name={this.props.filterName}
        onChange={() => {this.props.filterFormHandle(filterForm)}}
      >
        <option value="">{this.props.defaultValue}</option>
        {this.showOptions()}
      </select>
    )
  }
}

export default SelectField;