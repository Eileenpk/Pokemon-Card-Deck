
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import PokemonContainer from './containers/PokemonContainer'
function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
      <main className="App">
        <h1>Gotta Catch Em All!</h1>
        <PokemonContainer />
      </main>
    </ApolloProvider>
    
  )
}

export default App
