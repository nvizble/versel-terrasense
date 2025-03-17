import "./agro-ai.css";
import Container from 'react-bootstrap/Container';

const AgroAI = () => {
  return(
    <Container
      fluid
      className="agro-ai"
      id="agro-ai"
      style={{
        backgroundImage: "url(../images/background-images/background_pattern.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Container className="agro-ai-container">
        <Container className="agro-ai-content">
          <Container className="agro-ai-header">
            <h2>Como funciona a Inteligência Artificial</h2>
            <img
              src="../images/terrasense/terrasense_tipografia.svg"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Terra Sense AI"
            />
          </Container>
          <h3>
            Utilizamos tecnologia de ponta, o Chat GPT-4, que processa grandes volumes de dados
            agrícolas, climáticos e regionais para oferecer soluções personalizadas aos agricultores, da seguinte forma:
          </h3>
          <ol>
            <li>
              <span>Coleta e Análise de Dados:</span> A IA coleta dados de diversas fontes, como previsões meteorológicas,
              notícias agrícolas e informações sobre pragas. Com a permissão do usuário, também utiliza dados de
              localização para oferecer recomendações mais precisas.
            </li>
            <li>
              <span>Processamento Inteligente:</span> Usando o Chat GPT-4, a IA processa essas informações e gera
              sugestões detalhadas sobre as melhores práticas de plantio, irrigação, compra de insumos e cuidados com a
              plantação, tudo adaptado ao tamanho da fazenda e às condições locais.
            </li>
            <li>
              <span>Interação com o Usuário:</span> Através de uma interface intuitiva, o agricultor pode fazer perguntas
              diretas à IA sobre como proceder em determinadas situações (como pragas ou clima desfavorável) e receber
              respostas instantâneas, baseadas nas melhores práticas agrícolas.
            </li>
            <li>
              <span>Recomendações Personalizadas:</span> A IA oferece planos de ação específicos, como quais materiais
              comprar, quando e como plantar, e até onde vender a produção, tudo baseado nas necessidades do usuário e nas
              condições reais do terreno e do clima.
            </li>
          </ol>
        </Container>
        <div className="agro-ai-img">
          <img
            src="../images/mockup-images/mocku_ai.png"
            alt="Mockup do chat com a Inteligência Artificial da Terra Sense AI"
          />
        </div>
      </Container>
    </Container>
  );
};

export {AgroAI};

