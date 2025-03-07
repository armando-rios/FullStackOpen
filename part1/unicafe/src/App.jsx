import { useState } from "react"

function Header({ title }) {
  return (
    <h1>{title}</h1>
  )
}

function Button({ name, action }) {
  const handleButton = () => {
    action(prevValue => prevValue + 1)
  }
  return (
    <button
      onClick={handleButton}
    >
      {name}
    </button>
  )
}

function Statistics({ stats }) {
  const { good, neutral, bad } = stats
  const all = good + neutral + bad

  // Si no hay feedback, mostrar mensaje alternativo
  if (all === 0) {
    return <p>No feedback given yet</p>
  }

  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  const positivePercentage = (good / all) * 100

  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positivePercentage.toFixed(1)}%</td>
        </tr>
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback" />
      <div>
        <Button name="good" action={setGood} />
        <Button name="neutral" action={setNeutral} />
        <Button name="bad" action={setBad} />
      </div>

      <Header title="statistics" />
      <Statistics stats={{ good, neutral, bad }} />
    </div>
  )
}

export default App
