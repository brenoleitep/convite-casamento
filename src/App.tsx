import './App.css';
import fundoConvite from './assets/bgfull.png';
import centralImage from './assets/testCouple.png';
import {
  BgContainer,
  ButtonContainer,
  CentralImage,
  ImageBgContainer,
  VersicleText,
} from './index.style';

function App() {
  return (
    <BgContainer>
      <ImageBgContainer src={fundoConvite} alt="Fundo convite" />

      <VersicleText>
        Você foi convidado para o casamento de Davi e Amanda!
      </VersicleText>

      <CentralImage>
        <img src={centralImage} alt="Imagem central" />
      </CentralImage>

      <ButtonContainer>Abra o seu convite</ButtonContainer>
      {/* <TextContainer>
        <h2>D 💞 A</h2>
      </TextContainer> */}
    </BgContainer>
  );
}

export default App;
