import './App.css'
import Blockquote from './components/Blockquote/Blockquote'
import Button from './components/Button/Button'
import Card from './components/Card/Card'

//.illustration => Classe das imagens grandes.
//.default => Classe do layout: TEXTO IMAGEM.

function App() {

  return (
    <div className="App">
      <div className="default">
        <blockquote>
          <Blockquote
            title = "OLÁ, SEJA BEM-VINDO"
            description = "Aqui você encontrará informações relacionadas a mim e meus projetos."
            TitleColor = "#3267B2"
            DescriptionColor = "#484848"
          />
          <Button text = "COMEÇAR"/>
        </blockquote>
        <img className="illustration" src="../public/images/undraw_welcome_cats_thqn.svg" alt="Welcome-Cats" />
      </div>

      <div className="default" style={{background: "#3267B2"}}>
        <img className="illustration" src="../public/images/undraw_hiring_re_yk5n.svg" alt="Welcome-Cats" />
        <blockquote>
          <Blockquote
            title = "PROJETOS"
            description = "Aqui você poderá ver alguns projetos feitos por mim."
            TitleColor = "white"
            DescriptionColor = "white"
          />
        </blockquote>
      </div>

      <div style={{background: "#2C5DA3"}}>
        <Card/>
      </div>

    </div>
  )
}

export default App
