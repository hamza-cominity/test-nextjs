import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const Home = (props) => {
  console.log('users', props.users)
  return (
    <>
      <h1>Users</h1>
      <nav className="panel">
        {props.users.map((user, id) => (
          <Link key={id} href={`/${user.id}`}>
            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              {user.name}
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
}

export const getServerSideProps = async () => {
  const usersRequest = await axios.get('https://jsonplaceholder.typicode.com/users')
  const users = usersRequest.data

  return {
    props: {
      users
    }
  }
}

export default Home
