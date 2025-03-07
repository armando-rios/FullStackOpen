import { useState } from "react"

function Header({ title }) {
  return (
    <h1 style={{
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '1rem 0',
      textTransform: 'capitalize'
    }}>
      {title}
    </h1>
  )
}

function Button({ name, action }) {
  const handleButton = () => {
    action(prevValue => prevValue + 1)
  }
  return (
    <button
      onClick={handleButton}
      style={{
        padding: '0.5rem 1rem',
        margin: '0 0.5rem 0.5rem 0',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
    >
      {name}
    </button>
  )
}

function Statistics({ stats }) {
  const { good, neutral, bad } = stats
  const total = good + neutral + bad

  // Si no hay feedback, mostrar mensaje alternativo
  if (total === 0) {
    return <p style={{ color: '#7f8c8d', fontStyle: 'italic', margin: '1rem 0' }}>No feedback given yet</p>
  }

  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positivePercentage = (good / total) * 100

  return (
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
      border: '1px solid #ddd'
    }}>
      <tbody>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>good</td>
          <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{good}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>neutral</td>
          <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{neutral}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>bad</td>
          <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{bad}</td>
        </tr>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>total</td>
          <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{total}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>average</td>
          <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>positive</td>
          <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>{positivePercentage.toFixed(1)}%</td>
        </tr>
      </tbody>
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const resetStats = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header title="give feedback" />
      <div style={{ marginBottom: '1rem' }}>
        <Button name="good" action={setGood} />
        <Button name="neutral" action={setNeutral} />
        <Button name="bad" action={setBad} />
      </div>

      <button
        onClick={resetStats}
        style={{
          padding: '0.5rem 1rem',
          marginBottom: '1rem',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
      >
        reset
      </button>

      <Header title="statistics" />
      <Statistics stats={{ good, neutral, bad }} />
    </div>
  )
}

export default App
