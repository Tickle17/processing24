import mainLogoHeader from "./imgs/6198d98915fd08971f6e0a7f21f98f28.png";

export default function Footer() {
  return(
    <div className="Footer">
      <div className="footerBlocks">
        <div className="Blocks1" >
          <img className="mainLogo" src={mainLogoHeader} alt=""/>
          <div className="footerCompany">ⓒ 2019 ООО "Процессинг 24"</div>
          <div className="ref"><a href="">Политика конфидециальности</a></div>
        </div>
        <div className="Blocks2" >
          <ul>
            <li>Карта АЗС</li>
            <li>АЗС по регионам</li>
            <li>АЗС по брендам</li>
            <li>Доставка топлива</li>
          </ul>
        </div>
        <div className="Blocks3" >
          <ul>
            <li>Контакты</li>
            <li>О компании</li>
            <li>Личный кабинет</li>
          </ul>
        </div>
        <div className="Blocks4" >
          <div className="Blocks4Title">Отдел продаж</div>
          <div className="Blocks4Number"> 8 (495) 127-81-70</div>
        </div>
      </div>
    </div>
  )
}