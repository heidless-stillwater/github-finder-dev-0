import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'
// import { FaWindowRestore } from 'react-icons/fa'
// import { createRenderer } from 'react-dom/test-utils'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
