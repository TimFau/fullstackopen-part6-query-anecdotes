import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseUrl).then(res => {
    console.log(res.data)
    return res.data
})

export const createAnecdote = newAnecdote => {
    return axios.post(baseUrl, newAnecdote).then(res => {
        console.log('createAnecdote', res.data)
        return res.data
    })
}
