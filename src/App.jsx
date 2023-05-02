// import { useState } from 'react'
import { Post } from './components/Post';
import { PostDois } from './components/PostDois';
import { Header } from './components/Header';
import styles from './App.modules.css';
import { Comment } from './components/Comment'

import './global.css'
import { Sidebar } from './components/Sidebar';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Fernanda Costa',
      role: 'Backend Developer'
    },
    content: [
      {type: 'paragraph', content: 'Boa tarde!' },
      {type: 'paragraph', content: 'Acadei de subir mais um projeto em meu portifólio.' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo ullam quae perspiciatis consequatur deserunt repudiandae placeat, quod alias asperiores iure omnis. Earum, aliquam blanditiis. Delectus eum quisquam atque inventore' },
      {type: 'link', content: 'fernanda.costa/projeto10' },
    ],

    publishedAT: new Date('2023-04-17 17:17:00'),
  },

  {
  id: 2,
  author: {
    avatarUrl: 'https://images.pexels.com/photos/5653485/pexels-photo-5653485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Gabriel Santana',
    role: 'Java Developer'
  },
  content: [
    {type: 'paragraph', content: 'Fala Galera!' },
    {type: 'paragraph', content: 'Acadei de subir mais um projeto em meu portifólio.' },
    {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo ullam quae perspiciatis consequatur deserunt repudiandae placeat, quod alias asperiores iure omnis. Earum, aliquam blanditiis. Delectus eum quisquam atque inventore' },
    {type: 'link', content: 'GabrielSantana/projeto10' },
  ],

  publishedAT: new Date('2023-04-17 14:14:00'),
},




];


function App() {
  return (
    <div>
      <Header />
      <div className="wrapper" >
        <Sidebar />
        <main>

          {posts.map(post =>{
            return <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAT={post.publishedAT}
            
            />
          })}

         
        </main>
      </div>
    </div>
  )
}

export default App


