import { useState, useEffect } from 'react'

export function App() {
  const [list, setList] = useState<string[]>([])

  useEffect(() => {{
    avisarAPI()
  }}, [list])

  function avisarAPI() {
    console.log('Lista salva')
  }
  function addToList() {
    setList((state) => [...state, 'Novo item'])
  }
  return (
   <>
    <div>
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>

      <button onClick={addToList}>Add to list</button>
    </div>
   </>
  )
}

// Hooks: 

// useState: Conseguimos armazenar váriaveis que quando tem o seu valor
          // alterado provoca uma nova redenrização do componente. 
// useEffect: Side-effect -> Efeito Colateral
          // Ação que acontece por causa de uma ação anterior. 
          // Permite ficar monitorando mudanças em uma variável e independente de 
          // quem mexer nessa variável e toda vez que ela mudar eu quero que
          // uma função seja disparada. 