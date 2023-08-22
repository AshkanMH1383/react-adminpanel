import axios from "axios"

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
})


export const getPost = async () => {
    const { data } = await client.get(`/1`)

    return data
}
  