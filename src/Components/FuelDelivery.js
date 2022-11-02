export default function FuelDelivery() {
    return(
      <div className="fuelDelivery">
        <div className="fuelDelivery-Title">Доставка топлива</div>
        <div className="fuelDelivery-mainBlock">
          <div className="mainBlockInside">
            <div className="mainBlockInside-Title">Быстрый <span>заказ топлива</span></div>
            <div className="mainBlockInside-Info">
              <div className="tab">
                <span>Ваше имя</span>
                <input type="text" placeholder="Иван" />
              </div>
              <div className="tab">
                <span>Номер телефона</span>
                <input type="tel" placeholder="+7 (___) ___-__-__" pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
              </div>
              <div className="tab3">
                <button>Заказать топливо</button>
              </div>
            </div>
            <div className="mainBlockInside-CheckBox">
              <input type="checkbox"/>
              <a href="">Я согласен с условиями обработки данных</a>
            </div>
          </div>
        </div>
      </div>
    )
  }