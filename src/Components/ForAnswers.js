export default function ForAnswers() {
  return(
    <div className="ForAnswers">
      <div className="forAnswersMenu">
        <div className="fuelDelivery-Title">Остались вопросы?</div>
        <div className="answerMenu-mainBlock">
          <div className="">
            <div className="mainBlockInfo">Готовы ответить на любой ваш вопрос. Оставьте свой номер телефона и мы свяжемся с вами в ближайшее время</div>
            <div className="mainBlockInsideInfo">
              <div className="tab">
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="tab">
                <input type="tel" placeholder="Номер телефона" pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
              </div>
              <div className="tab2">
                <button>Перезвоните мне</button>
              </div>
            </div>
            <div className="mainBlockInsideCheckBox">
              <a href="">Нажимая на кнопку, "перезвоните мне" я соглашаюсь с <span>политикой конфидециальности</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}