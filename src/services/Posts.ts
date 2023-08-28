import api from './api';


export const getPost = async () => {
    const { data } = await api.get(`/1`)

    return data
}
  