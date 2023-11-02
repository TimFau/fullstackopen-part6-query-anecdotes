import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseUrl).then(res => {
    console.log(res.data)
    return res.data
})

export const createAnecdote = newAnecdote => {
    newAnecdote.votes = 0
    return axios.post(baseUrl, newAnecdote).then(res => {
        console.log('createAnecdote', res.data)
        return res.data
    })
}

export const voteForAnecdote = (data) => {
    const id = data.anecdote.id
    return axios.put(`${baseUrl}/${id}`, {
        content: data.anecdote.content,
        id: data.anecdote.id,
        votes: data.anecdote.votes + 1
    }).then(res => res.data)
}