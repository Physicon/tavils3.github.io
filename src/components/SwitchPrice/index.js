import React from 'react';

class SwitchPrice extends React.Component {
  constructor() {
    super();
    this.showButtons = this.showButtons.bind(this);
  }

  showButtons() {
    const moneyButtonActiveClass = this.props.isPriceInMoney ? "switch-price__buttons-item_active" : "";
    const bonusButtonActiveClass = !this.props.isPriceInMoney ? "switch-price__buttons-item_active" : "";
    return (
      <div className="switch-price__buttons">
        <button
          className={`switch-price__buttons-item ${moneyButtonActiveClass}`}
          type="button"
          onClick={() => {this.props.togglePriceHandle(true)}}
        >в рублях</button>
        <button
          className={`switch-price__buttons-item ${bonusButtonActiveClass}`}
          type="button"
          onClick={() => {this.props.togglePriceHandle(false)}}
        >в бонусах</button>
      </div>
    )
  }

  render() {
    return (
      <div className="switch-price">
        <p className="switch-price__title">Цена указана</p>
        {this.showButtons()}
      </div>
    )
  }
}

export default SwitchPrice;