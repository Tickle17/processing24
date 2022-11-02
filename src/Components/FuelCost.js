export default function FuelCost() {
  return(
    <div className="fuelCost">
      <div className="fuelCost-Title">Стоимость топлива</div>
      <div className="fuelCost_Table">

        <div className="tableHeader">
          <div className="tableHeader1">Сорт топлива</div>
          <div className="tableHeader2">Экологический класс</div>
          <div className="tableHeader3">Производитель</div>
          <div className="tableHeader4">Наличный расчет</div>
          <div className="tableHeader5">Безналичный расчет</div>
        </div>

        <div className="DT">
          <div className="tableDT">
          <div className="DTName">ДТ</div>
          <div className="DTClass">
            <div className="classEuro5">ЕВРО-5</div>
            <div className="classEEuro4">ЕВРО-4</div>
          </div>
          <div className="DTBrand">
            <div className="brandName-price">
              <div className="brand"><span>Газпромнефть</span></div>
              <div className="price">
                <div className="price1">45.43р.</div>
                <div className="price2">44.43р.</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Лукойл</div>
              <div className="price">
                <div className="price1">45.16р.</div>
                <div className="price2">43.98р.</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Роснефть</div>
              <div className="price">
                <div className="price1">42.34р.</div>
                <div className="price2">41.64р.</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Газпромнефть</div>
              <div className="price">
                <div className="price1">-</div>
                <div className="price2">-</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Лукойл</div>
              <div className="price">
                <div className="price1">41.16р.</div>
                <div className="price2">40.67р.</div></div>
            </div>
          </div>

          <div className="DTNalPrice"></div>
          <div className="DTOnlinePrice"></div>
        </div>
        </div>

        <div className="AI95">
          <div className="tableDT">
          <div className="DTName">АИ-95</div>
          <div className="DTClass">
            <div className="classEuro5">ЕВРО-5</div>
            <div className="classEEuro4">ЕВРО-4</div>
            <div className="classEuro5">ЕВРО-3</div>
          </div>
          <div className="DTBrand">
            <div className="brandName-price">
              <div className="brand"><span>Газпромнефть</span></div>
              <div className="price">
                <div className="price1">45.43р.</div>
                <div className="price2">44.43р.</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Роснефть</div>
              <div className="price">
                <div className="price1">42.34р.</div>
                <div className="price2">41.64р.</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Лукойл</div>
              <div className="price">
                <div className="price1">45.16р.</div>
                <div className="price2">43.98p</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Лукойл</div>
              <div className="price">
                <div className="price1">41.16р</div>
                <div className="price2">40.67р</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Газпромнефть</div>
              <div className="price">
                <div className="price1">-</div>
                <div className="price2">-</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Роснефть</div>
              <div className="price">
                <div className="price1">42.34р.</div>
                <div className="price2">41.64р.</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Газпромнефть</div>
              <div className="price">
                <div className="price1">-</div>
                <div className="price2">-</div></div>
            </div>
            <div className="brandName-price">
              <div className="brand">Лукойл</div>
              <div className="price">
                <div className="price1">45.16р.</div>
                <div className="price2">43.98р.</div></div>
            </div>
          </div>
          <div className="DTNalPrice"></div>
          <div className="DTOnlinePrice"></div>
        </div>
        </div>
      </div>
    </div>
  )
}