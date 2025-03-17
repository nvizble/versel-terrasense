import "./faq.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";

const faqData = [
  {
    question: "Posso receber alertas e relatórios no meu celular?",
    answer:
      "Sim, a plataforma envia alertas, relatórios detalhados e recomendações diretamente para o seu celular, tablet ou computador, permitindo acesso rápido e prático às informações.",
  },
  {
    question: "A solução pode ser usada em qualquer tipo de cultivo?",
    answer:
      "Sim! A tecnologia é adaptável a diferentes tipos de cultivo e tamanhos de propriedades, desde pequenas fazendas até grandes áreas de plantio.",
  },
  {
    question: "Como funciona o treinamento da IA para diferentes regiões e climas?",
    answer:
      "A IA é continuamente alimentada com dados específicos da região, como clima, vegetação e histórico de incêndios, para ajustar os modelos de previsão e detecção.",
  },
  {
    question: "Quanto custa implementar essa tecnologia?",
    answer:
      "Os custos variam de acordo com o tamanho da área e os recursos escolhidos. Oferecemos planos personalizados para atender a diferentes orçamentos.",
  },
  {
    question:
      "Qual é a diferença entre esta solução e um sistema tradicional de monitoramento?",
    answer:
      "Enquanto sistemas tradicionais apenas monitoram, a IA utiliza análise preditiva, aprendizado contínuo e integração de múltiplas fontes para oferecer um monitoramento mais completo e eficiente.",
  },
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Container fluid
      className="faq-container"
      id="faq"
      style={{
        backgroundImage: "url(../images/background-images/background_pattern.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Container className="faq-title">
        <h2>Perguntas Frequêntes</h2>
      </Container>
      {faqData.map((item, index) => (
        <Container key={index} className="question">
          <div className="header-question">
            <h4>{item.question}</h4>
            <button className="faq-btn" onClick={() => toggleFaq(index)}>
              <img
                src={
                  openIndexes.includes(index)
                    ? "/images/faq-icons/faq-arrow-open.svg"
                    : "/images/faq-icons/faq-arrow-close.svg"
                }
                alt={openIndexes.includes(index) ? "Abrir" : "Fechar"}
              />
            </button>
          </div>
          <p
            className={`faq-description ${
              openIndexes.includes(index) ? "" : "faq-description-off"
            }`}
          >
            {item.answer}
          </p>
        </Container>
      ))}
    </Container>
  );
};

export { Faq };
