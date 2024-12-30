import './App.css';
import fundoConvite from './assets/bgfull.png';
import centralImage from './assets/testCouple.png';
import {
  BgContainer,
  CentralImage,
  ImageBgContainer,
  TextContainer,
  VersicleText,
} from './index.style';

function App() {
  return (
    <BgContainer>
      <ImageBgContainer src={fundoConvite} alt="Fundo convite" />

      <VersicleText>
        "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus
        uniu, ninguém separa". <br />
        Mateus 19:6
      </VersicleText>

      <CentralImage>
        <img src={centralImage} alt="Imagem central" />
      </CentralImage>

      <TextContainer>
        <h2>D 💞 A</h2>
      </TextContainer>
    </BgContainer>
  );
}

export default App;
