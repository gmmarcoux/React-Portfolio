import { useContext } from 'react'
import header from './components/header/header'
import aboutMe from './components/aboutMe/aboutMe'
import portfolio from './components/portfolio/portfolio'
import resume from './components/resume/resume'
import contactMe from './components/contactMe/contactMe'
import Footer from './components/footer/footer'
import './App.css'

const App = () => {
    return ( 
        <div>
            <header />

            <main>
                <aboutMe />
                <portfolio />
                <contactMe />
                <resume />
                <contactMe />
            </main>

            <footer />
        </div>
    )
}

export default App