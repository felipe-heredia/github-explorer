// eslint-disable-next-line no-unused-vars
import React, { useState, FormEvent } from 'react'

import logoImage from '../../assets/logo.svg'
import api from '../../services/api'

import * as S from './styled'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const response = await api.get<Repository>(`/repos/${newRepo}`)

    const repository = response.data

    setRepositories([...repositories, repository])
    setNewRepo('')
  }

  return (
    <>
      <img src={logoImage} alt="Github explorer" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form onSubmit={handleAddRepository} >
        <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </S.Form>

      <S.Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <S.Arrow />
          </a>
        ))}
      </S.Repositories>
    </>
  )
}

export default Dashboard
