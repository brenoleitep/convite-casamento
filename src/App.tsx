import { useState } from 'react';
import './App.css';
import fundoConvite from './assets/bgfull.png';
import centralImage from './assets/testCouple.png';
import {
  BgContainer,
  ButtonContainer,
  CentralImage,
  DateContainer,
  DayContainer,
  ImageBgContainer,
  MonthYearContainer,
  Subtitle,
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

      <VersicleText>
        Você foi convidado para o casamento de Davi e Amanda!
      </VersicleText>

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
      </BgContainer>
    </>
  );
}

export default App;
