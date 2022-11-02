import certificate from "./imgs/certificate.svg"
import clock from "./imgs/clock.svg"
import ruble from "./imgs/ruble.svg"
import place from "./imgs/place.svg"
import shield from "./imgs/shield.svg"
import way from "./imgs/way.svg"





export default function OurAdvantages() {
  return(
    <div className="OurAdvantages">
      <div className="OurAdvantagesBlock">
        <div className="advantageTitle">Преимущества сервиса</div>
        <div className="advantageMainBlocks">
          <div className="topBlocksAdv">
            <div className="advBlock">
              <img className="advLogos" src={certificate} alt=""/>
              <div className="advInfos">
                <div className="advBlockTitle">Качество топлива</div>
                <div className="advBlockInfo">Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.</div>
              </div>

            </div>
            <div className="advBlock">
              <img className="advLogos" src={clock} alt=""/>
              <div className="advInfos">
                <div className="advBlockTitle">Бережем ваше время и нервы</div>
                <div className="advBlockInfo">Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.</div>
              </div>

            </div>
            <div className="advBlock">
              <img className="advLogos" src={ruble} alt=""/>
              <div className="advInfos">
                <div className="advBlockTitle">Цена</div>
                <div className="advBlockInfo">Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.</div>
              </div>

            </div>
          </div>
          <div className="botBlocksAdv">
            <div className="advBlock">
              <img className="advLogos" src={place} alt=""/>
              <div className="advInfos">
                <div className="advBlockTitle">Ваш комфорт—наша забота</div>
                <div className="advBlockInfo">Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.</div>
              </div>

            </div>
            <div className="advBlock">
              <img className="advLogos" src={shield} alt=""/>
              <div className="advInfos">
                <div className="advBlockTitle">Безопасность процесса</div>
                <div className="advBlockInfo">Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.</div>
              </div>

            </div>
            <div className="advBlock">
              <img className="advLogos" src={way} alt=""/>
              <div className="advInfos">
                <div className="advBlockTitle">Несколько ТС в одном месте?</div>
                <div className="advBlockInfo">Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}