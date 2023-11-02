import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const anecdotesResult = useQuery({
    queryKey: ['anecdotes'],
    queryFn: () => {
      return axios.get('http://localhost:3001/anecdotes').then(res => {
        console.log(res.data)
        return res.data
      })
    }
  })

  if ( anecdotesResult.isLoading ) {
    return <div>Loading anecdotes...</div>
  }

  if ( anecdotesResult.isError ) {
    return <div>Anecdote service is not available due to server error</div>
  }

  console.log('anecdotesResult', anecdotesResult)

  const anecdotes = anecdotesResult.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        anecdote &&
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
