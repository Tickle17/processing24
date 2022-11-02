import mainLogoHeader from "./imgs/6198d98915fd08971f6e0a7f21f98f28.png"
import phone from "./imgs/phone2.svg"
import user from "./imgs/user.svg"

export default function Header() {

  return(
    <div className="header">

      <img className="mainLogo" src={mainLogoHeader} alt=""/>

      <div className="mainInfo">
          <div className="phone-buttons">
            <div className="phone">
              <img src={phone} alt="" className="logoHeader"/>
              <a href="">8 (495) 127-82-80</a>
            </div>
            <div className="buttons">
              <div className="btn-header">
                <span>Напишите нам</span>
              </div>
              <div className="btn-header">
                <img className="logoHeader" src={user} alt=""/>
                <span>Личный кабинет</span>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}