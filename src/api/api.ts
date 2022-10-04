import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  getAllPosts: async () => {
    let response = await axiosInstance.get('/posts')
    return (response.data)
  },

  postNewPost: async (title: string, body: string, userId: number) => {
    let response = await axiosInstance.post('/posts', { title, body, userId });
    alert('post adicionado com sucesso')
    return response.data;
  },

  getGamesTwitch: async (id: string) => {
    let response = await axios.get(`https://api.twitch.tv/helix/games?id=${id}`, {
      headers: {
        'Authorization': 'Bearer 49e1ov3089wy8uozt90w3nv1iq3qzg',
        'Client-Id': 'no0ig9121143271s4ixq6s41oighz5'
      }
    });
    return response.data;
  }
}