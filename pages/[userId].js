import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const User = ({ user }) => {
  return (
    <div class="card">
      <Link href='/'>
        <a className='go-back'>Back</a>
      </Link>

      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{user.name}</p>
            <p class="subtitle is-6">{user.email}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br/>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>

      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
    </div>
  )
}

export const getStaticProps = async (props) => {
  const { params } = props

  const userRequest = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.userId)

  return {
    props: {
      user: userRequest.data
    }
  }
}

export const getStaticPaths = async () => {
  const usersRequest = await axios.get('https://jsonplaceholder.typicode.com/users')

  const users = usersRequest.data
  
  const paths = users.map(user => ({ params: { userId: user.id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default User
