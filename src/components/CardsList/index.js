import React from 'react';

class CardsList extends React.Component {
  render() {
    if (this.props.cards.length === 0) {
      return <div className="cards-list-empty">Курсы не найдены</div>
    }
    return <ul className="cards-list">{this.props.cards}</ul>
  }
}

export default CardsList;