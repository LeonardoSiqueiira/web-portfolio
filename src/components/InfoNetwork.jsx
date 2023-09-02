import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/InforNet.sass';

const InfoNetwork = () => {
    return (
        <section id="information">
          <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
              <h3>Telefone</h3>
              <p>(17)98107-8468</p>
            </div>
          </div>
          <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
              <h3>E-mail</h3>
              <p>leo2017siqueira@outlook.com</p>
            </div>
          </div>
          <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
              <h3>Localização</h3>
              <p>Olímpia / SP</p>
            </div>
          </div>
        </section>
      );
    };


export default InfoNetwork