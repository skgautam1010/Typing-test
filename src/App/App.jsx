import React from 'react';
import './App.css';
import Nav from '../NavBar/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';



class App extends React.Component {
    render() {
        return (
            <div className="app">

                <Nav />

                <Home />

                <ChallengeSection />

                <Footer />

            </div>
        );
    }
}


export default App;