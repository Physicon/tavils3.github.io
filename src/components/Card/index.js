import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <li className="cards-list__item">
        <img
          src={`https://www.imumk.ru/svc/coursecover/${this.props.courseId}`}
          alt={this.props.subject}
          className="cards-list__item-image"
        />
        <div className="cards-list__item-info">
          <p className="cards-list__item-title">{this.props.subject}</p>
          <p className="cards-list__item-grade">{this.props.grade}</p>
          <p className="cards-list__item-genre">{this.props.genre}</p>
          <a href="/" className="cards-list__item-meta">Подробнее</a>
          <p className="cards-list__item-price">{this.props.price}</p>
        </div>
      </li>
    )
  }
}

export default Card;