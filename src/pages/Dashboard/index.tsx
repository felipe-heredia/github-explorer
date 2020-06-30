import React from 'react'

import logoImage from '../../assets/logo.svg'

import * as S from './styled'

const Dashboard: React.FC = () => (
  <>
    <img src={logoImage} alt="Github explorer" />
    <S.Title>Explore repositórios no Github</S.Title>

    <S.Form>
      <input placeholder="Digite o nome do repositório" />
      <button>Pesquisar</button>
    </S.Form>

    <S.Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/50281523?s=460&u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4"
          alt="felipesuri"
        />
        <div>
          <strong>felipesuri/felipesuri.com</strong>
          <p>My personal website</p>
        </div>
        <S.Arrow />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/50281523?s=460&u=ff701a533e123e47961d0f2cf81b4081990c9d38&v=4"
          alt="felipesuri"
        />
        <div>
          <strong>felipesuri/felipesuri.com</strong>
          <p>My personal website</p>
        </div>
        <S.Arrow />
      </a>
    </S.Repositories>
  </>
)

export default Dashboard
