import click from "./imgs/click.svg"
import phone from "./imgs/phone.svg"
import oil from "./imgs/oil-barrel 1.svg"

import vector from "./imgs/Vector 3.svg"


export default function OurWork() {
  return(
    <div className="ourWork">
      <div className="oWTitle">Как мы работаем</div>
      <div className="oWMainInfo">
        <div className="mainInfoOW">
          <div className="miHeader">
            <img className="miImg" src={click} alt=""/>
            <div className="timeBlock">
              <div className="time">1-3 мин.</div>
              <img className="tbImage" src={vector} alt=""/>
            </div>
          </div>
          <div className="miBody">
            <div className="miBodyTitle">Оформление заявки</div>
            <div className="miBodyInfo">Заполните заявку на сайте, укажите удобное для вас место приезда заправщика, сорт и количество топлива, которое хотите купить</div>
          </div>
        </div>
        <div className="mainInfoOW">
          <div className="miHeader">
            <img className="miImg" src={phone} alt=""/>
            <div className="timeBlock">
              <div className="time">1-3 мин.</div>
              <img className="tbImage" src={vector} alt=""/>
            </div>
          </div>
          <div className="miBody">
            <div className="miBodyTitle">Подтверждение заявки менеджером</div>
            <div className="miBodyInfo">Дождитесь звонка нашего <br/> менеджера для уточнения  <br/> условий заказа</div>
          </div>
        </div>
        <div className="mainInfoOW">
          <div className="miHeader">
            <img className="miImg"  src={oil} alt=""/>
            <div className="timeBlock">
              <div className="time">30-90 мин.</div>
            </div>
          </div>
          <div className="miBody">
            <div className="miBodyTitle">Заправка вашего автомобиля</div>
            <div className="miBodyInfo">В назначенное время приедет заправщик и заправит автомобиль топливом. <br/><br/>              Если у заказчика есть действующий договор на топливные карты, то при оплате можно провести транзакцию через терминал. Переносное устройство есть у каждого заправщика</div>
          </div>
        </div>
      </div>
    </div>
  )

}