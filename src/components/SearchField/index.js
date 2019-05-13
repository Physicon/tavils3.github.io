import React from 'react';

class SearchField extends React.Component {
  render() {
    return (
      <div className="showcase__filters-item showcase__filters-item_search search-block">
        <input
          name="search"
          className="search-block__field"
          type="text"
        />
        <button
          className="search-block__button"
          type="submit"
          onClick={() => {this.props.filterFormHandle(filterForm)}}
        />
      </div>
    );
  }
}

export default SearchField;