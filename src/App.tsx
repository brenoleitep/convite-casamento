import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import './App.css';
import fundoConvite from './assets/bgfull.png';
import centralImage from './assets/testCouple.png';
import {
  BgContainer,
  ButtonContainer,
  CentralImage,
  DateContainer,
  DayContainer,
  IconsContainer,
  IconsJustify,
  ImageBgContainer,
  MonthYearContainer,
  Subtitle,
  TextContainer,
  TitleContainer,
  VersicleText,
} from './index.style';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenInvite = () => {
    setIsOpen((prev) => !prev);
  };

  return isOpen ? (
    <BgContainer>
      <ImageBgContainer src={fundoConvite} alt="Fundo convite" />

      <TextContainer>
        Você foi convidado para o casamento de <br /> <span>Davi e Amanda</span>
      </TextContainer>

      <CentralImage>
        <img src={centralImage} alt="Imagem central" />
      </CentralImage>

      <ButtonContainer onClick={handleOpenInvite}>
        Abra o seu convite
      </ButtonContainer>
    </BgContainer>
  ) : (
    <>
      <BgContainer>
        <ImageBgContainer src={fundoConvite} alt="Fundo convite" />

        <VersicleText>
          "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que
          Deus uniu, ninguém separa." <br /> Matheus 19:6
        </VersicleText>

        <TitleContainer>
          Davi <br /> & <br /> Amanda
        </TitleContainer>

        <Subtitle>
          É com imenso prazer e alegria que te convidamos para participar da
          nossa união a realizar-se no dia,
        </Subtitle>

        <DateContainer>
          <MonthYearContainer>
            <p>Março</p>
          </MonthYearContainer>

          <DayContainer>
            <span>SÁBADO</span>
            <h2>26</h2>
            <span>ÀS 16H</span>
          </DayContainer>

          <MonthYearContainer>
            <p>2024</p>
          </MonthYearContainer>
        </DateContainer>

        <IconsContainer>
          <p>TOQUE NOS ÍCONES PARA ACESSAR</p>

          <IconsJustify>
            <ul>
              <li>
                {' '}
                <FaWhatsapp />
                <span>
                  CONFIRMAR <br />
                  PRESENÇA
                </span>
              </li>
              <li>
                {' '}
                <FaLocationDot />
                <span>
                  COMO <br />
                  CHEGAR
                </span>
              </li>
            </ul>
          </IconsJustify>
        </IconsContainer>
      </BgContainer>
    </>
  );
}

export default App;
