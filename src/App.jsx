import { useState, useEffect } from "react"

const Card = ({title}) => {
const [hasLiked, setHasLiked] = useState (false);
const [count, setCount] = useState (0);

useEffect (() => {
  console.log(`${title} has been liked: ${hasLiked}`);
}, [hasLiked] );

  return (
    <div className = "movie" onClick={() => setCount ((prevCount) => prevCount + 1)}>
      {title} <br/> {count || null}

      <button onClick={ () => setHasLiked (!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Card title = "Reacher"/>
      <Card title = "Lion King"/>
      <Card title = "Shutter Island"/>
    </div>
  )
}

export default App
