import React from 'react';

class FilterBlock extends React.Component {
  render() {
    return (
      <form
        className="showcase__filters"
        id="filterForm"
        onSubmit={(event) => {event.preventDefault(); this.props.filterFormHandle(filterForm)}}
      >
        {this.props.children}
      </form>
    );
  }
}

export default FilterBlock;