import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'



const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="flex-column justify-flex-start min-100-vh">
                <Header />
                <div className="container">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    )
}

export default App;