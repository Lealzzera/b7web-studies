import React, { ChangeEvent } from 'react'

type Props = {
  addPost: (title: string, body: string) => void
}
const PostForm = ({ addPost }: Props) => {

  const [addTitle, setAddTitle] = React.useState('');
  const [addBody, setAddBody] = React.useState('');

  const handleAddTitle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(target.value)
  }

  const handleAddBody = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBody(target.value)
  }

  const handleClick = () => {
    return addBody && addTitle ? addPost(addBody, addTitle) : alert('Preencha todos os campos');
  }

  return (
    <div>
      <fieldset className='border-2 mb-3 p-3'>
        <legend>Adicionar novo post</legend>
        <input onChange={handleAddTitle} type="text" className='block border bg-blue-100 mb-2' placeholder='Digite um título' />
        <textarea onChange={handleAddBody} className='block border bg-blue-100 mb-2'></textarea>
        <button onClick={handleClick} className='block border bg-green-500'>Adicionar post</button>
      </fieldset>
    </div>
  )
}

export default PostForm