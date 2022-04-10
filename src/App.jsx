import './App.css'
import Blockquote from './components/Blockquote/Blockquote'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Tech from './components/Tech/Tech'

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
        <img className="illustration" src="../images/undraw_welcome_cats_thqn.svg" alt="Welcome-Cats" />
      </div>

      <div className="default" style={{background: "#3267B2"}}>
        <img className="illustration" src="../images/undraw_hiring_re_yk5n.svg" alt="hiring" />
        <blockquote>
          <Blockquote
            title = "PROJETOS"
            description = "Aqui você poderá ver alguns projetos feitos por mim."
            TitleColor = "white"
            DescriptionColor = "white"
          />
        </blockquote>
      </div>

      <div className='cards' style={{background: "#2C5DA3"}}>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="default">
        <blockquote>
          <Blockquote
            title = "SOBRE MIM"
            description = "Eu me chamo Guilherme. Tenho 18 anos e quero me tornar um desenvolvedor de games. No entanto, atualmente estudo desenvolvimento web e estou cursando Análise e Desenvolvimento de Sistemas."
            TitleColor = "#3267B2"
            DescriptionColor = "#484848"
          />
        </blockquote>
        <img className="illustration" src="../images/undraw_designer_re_5v95.svg" alt="designer" />
      </div>

      <div className="default" style={{background: "#3267B2"}}>
        <img className="illustration" src="../images/undraw_experience_design_eq-3-j.svg" alt="Welcome-Cats" />
        <blockquote>
          <Blockquote
            title = "TECNOLOGIAS"
            description = "Aqui você encontrará algumas tecnologias que estudo e outras que tenho interesse."
            TitleColor = "white"
            DescriptionColor = "white"
          />
        </blockquote>
      </div>

      <div className='tech' style={{background:"#2761B3"}}>
        <h1 style={{color: "white", fontSize: "64px"}}>ESTUDANDO</h1>
        <main>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt = "html"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  alt = "css"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt = "javascript"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt = "react"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt = "node"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt = "mongo"/>
        </main>
      </div>

      <div className='tech' style={{background:"#1553AA"}}>
        <h1 style={{color: "white", fontSize: "64px"}}>INTERESSES</h1>
        <main>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  alt = "postgreesql"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  alt = "typescript"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt = "react-native"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt = "docker"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt = "jest"/>
          <Tech src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" alt = "unreal"/>
        </main>
      </div>

      <div className="default">
        <blockquote>
          <Blockquote
            title = "CURRÍCULO"
            description = "Aqui você poderá baixar meu currículo, caso tenha interesse em meu trabalho."
            TitleColor = "#3267B2"
            DescriptionColor = "#484848"
          />
          <Button text = "DOWNLOAD"/>
        </blockquote>
        <img className="illustration" src="../images/undraw_good_team_re_j1kc.svg" alt="Welcome-Cats" />
      </div>

    </div>
  )
}

export default App
