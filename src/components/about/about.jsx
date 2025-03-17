import "./about.css";
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container fluid
      className="quem-somos"
      id="quem-somos"
      style={{
        backgroundImage: "url(../images/background-images/background_pattern.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Container className="quem-somos-parte1">
        <div className="que-tal-transformar">
          <h3>Que tal transformar a sua terra em tudo que sempre sonhou?</h3>
          <div className="nos-somos-terrasense">
            <h2>NÓS SOMOS A</h2>
            <img src="../images/terrasense/terrasense_tipografia.svg" alt="Terra Sense AI" />
          </div>
          <p>
            Uma plataforma de inteligência artificial que oferece soluções
            completas para pequenos e médios agricultores, desde o plantio até a
            colheita, otimizando cada etapa com base em dados personalizados.
          </p>
        </div>
        <img
          className="quem-somos-img"
          src="../images/mockup-images/hand_mockup.png"
          alt="Mockup e mãos com um celular apresentando a tela inicial do Terra Sense AI"
        />
      </Container>
      <Container className="como-funciona">
        <h2>Como Funciona?</h2>
        <div className="etapas-funcionamento">
          <h3>
            <span>1.</span> Cadastre-se no nosso APP
          </h3>
          <p>
            Basta clicar em <a className="App-link" href="https://google.com">cadastre-se</a> ou no botão no canto superior
            direito. Você só irá precisar colocar o seu nome, e-mail, whatsapp e
            senha, ou se preferir, pode se conectar com sua conta do Google ou
            Facebook.
          </p>
        </div>
        <div className="etapas-funcionamento">
          <h3>
            <span>2.</span> Responda as perguntas sobre a sua terra
          </h3>
          <p>
            Para personalizar as suas respostas com base na sua terra, nós
            preparamos uma sequência de perguntas importantes para entendermos
            melhor sobre você e quais desafios agrícolas você enfrenta em sua
            propriedade.
          </p>
        </div>
        <div className="etapas-funcionamento">
          <h3>
            <span>3.</span> Veja o resultado da nossa análise
          </h3>
          <p>
            Por fim, você poderá ver o resultado da nossa análise e começar a
            trabalhar em cima da sua terra, além de receber notícias diárias e
            tirar todas as suas dúvidas sobre qualquer assunto agrícola.
          </p>
        </div>
      </Container>
    </Container>
  );
};

export {About};
