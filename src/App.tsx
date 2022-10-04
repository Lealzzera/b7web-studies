import React from 'react';
import PostForm from './components/PostForm';
import { Post } from './types/Post';
import PostItem from './components/PostItem';
import { api } from './api/api';
import foto from './assets/familyMoney.png';
import AppBar from './components/AppBar'


const App = () => {

  let image = './assets/familyMoney.png'
  const [post, setPost] = React.useState<Post[]>();
  const [loading, setLoading] = React.useState<boolean>(false);


  React.useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts()
    setLoading(false);
    setPost(json);
  };

  const addNewPost = async (title: string, body: string) => {
    api.postNewPost(title, body, 1);
  }

  return (
    <div className='bg-blue-200'>
      <AppBar />
      {loading && <div>Carregando...</div>}
      <div>
      </div>
      {!loading &&
        <>
          <div>Total posts: {post?.length}</div>
          <div>
            <PostForm addPost={addNewPost} />
            {post?.map((item) => (
              <PostItem key={item.id} data={item} />
            ))}
          </div>

        </>}
      <img src={foto} alt="" />
    </div>
  )
}

export default App