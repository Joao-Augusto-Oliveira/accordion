import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      <Accordion
        title= "Qual o valor máximo de empréstimo com veículo em garantia?"
        content= "O valor máximo é de R$50.000,00." 
      />

      <Accordion
        title= "Qual a quantidade máxima de parcelas?"
        content= "Financiamos empréstimo em até 12x." 
      />

      <Accordion
        title= "Estou negativado. Posso solicitar empréstimo?"
        content= "Claro! Nossa equipe irá avaliar as melhores condições para o teu perfil." 
      />  
    </div>
  );
}

export default App;
