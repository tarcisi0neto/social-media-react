import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const post = [
  {
      id:1,
      author: {
          avatar_url:"https://avatars.githubusercontent.com/u/66277856?s=96&v=4",
          name: "Tarcísio Neto",
          role: "Web Developer",
      },
      content:[
          {type:'paragraph', content:'Fala galeraa 👋'},
          {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type:'link', content:'jane.design/doctorcare'},
          {type:'paragraph', content:'#novoprojeto #nlw #rocketseat'},
      ],
      publishedAt: new Date('2022-11-20 10:23:00')
  },
  {
      id:2,
      author: {
          avatar_url:"https://avatars.githubusercontent.com/u/66277856?s=96&v=4",
          name: "Tarcísio Neto",
          role: "Web Developer",
      },
      content:[
          {type:'paragraph', content:'Fala galeraa 👋'},
          {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type:'link', content:'jane.design/doctorcare'},
          {type:'paragraph', content:'#novoprojeto #nlw #rocketseat'},
      ],
      publishedAt: new Date('2022-11-20 10:23:00')
  }
]

export function App() {

  return (

    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {post.map(post => { 
              return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              /> 
              )
            })}
        </main>
      </div>
    </div>
  )
}




