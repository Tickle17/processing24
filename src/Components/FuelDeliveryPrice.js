import {useEffect, useState} from "react";
import vector from "./imgs/Vector 1.svg"

export default function FuelDeliveryPrice() {
 // rangeState
 const [rangeValue, setRangeValue] = useState(1670)
  //dropDownState
  const [isActive,setIsActive] = useState(false)
  const [isSelected, setSelected] = useState("ДТ")
  const Countries = ["ДТ", "АИ-95"]

  return(
    <div className="FuelDeliveryPrice">
      <div className="deliveryPriceContainer">
        <div className="delPriceContTitle">Топливо с доставкой</div>
        <div className="delPriceContMenu">
          <div className="contMenuLeftSide">
            <div className="leftSideInfo">
              Вид топлива
              <div className="infoContainer">
                <div className="dropdown">
                  <div className="dropdown-btn "
                       onClick={(e)=>setIsActive(!isActive)}>
                    {isSelected}
                    <img className="vectorImg"  src={vector} alt=""/>
                  </div>
                  {isActive &&(
                    <div className="dropdown-content" >
                      {Countries.map((fuel)=>(
                        <div
                          onClick={
                            (e) =>{
                              setSelected(fuel);
                              setIsActive(false)
                            }}
                          className="dropdown-item"
                        >
                          {fuel}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="leftSideInfo">
              Объем топлива
              <div className="infoContainer1">
                <div className="containerValue">{rangeValue+" литров"}</div>
                <input className="rangeInput"  type="range" min="0" max="10000" value={rangeValue} onChange={event => setRangeValue(event.target.value)}/>
              </div>
            </div>
            <div className="leftSideInfo">
              Место доставки
              <div className="infoContainer">
                <input type="text" placeholder="Укажите место" />
              </div>
            </div>
            <div className="leftSideInfo">
              Ваше имя
              <div className="infoContainer">
                <input type="text" placeholder="Иван" />
              </div>
            </div>
            <div className="leftSideInfo">
              Номер телефона
              <div className="infoContainer">
                <input type="tel" placeholder="+7 (___) ___-__-__" pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
              </div>
            </div>
          </div>
          <div className="contMenuRightSide">
          <div className="rightSideTitle">Итого</div>
          <div className="rightSideMainInfo">
            <div className="price">
              <div className="namePrice">Стоимость топлива</div>
              <div className="costPrice">0 Р</div>
            </div>
            <div className="pricePerOne">
              <div className="strPrice">
                <div className="namePrice">Цена за литр:</div>
                <div className="infoPrice">Цена и стоимость указаны ориентировочно.  <br/>
                  Точные цену и стоимость собщит наш менеджер при подтверждении заявки.</div></div>
              <div className="costPrice">0 Р</div>
            </div>
          </div>
            <div className="total">
              <div className="strPrice">
                <div className="namePrice">Выгода:</div>
                <div className="infoPrice">При цене на АЗС  "(price)" ₽  за литр, цены актуальны на "(date)" </div></div>
              <div className="costPrice">0 Р</div>
            </div>
            <div className="tab3">
              <button>Заказать топливо</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}