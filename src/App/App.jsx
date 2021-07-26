import React from 'react';
import './App.css';
import Nav from '../NavBar/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime=60;

const url="http://metaphorpsum.com/paragraphs/1/12"


class App extends React.Component {

    state={
        selectedParagraph:"This is Sonu Kumar gautam",
        timerStarted:false,
        timeRemaining:TotalTime,
        words:0,
        characters:0,
        wpm:0,
        testInfo:[],
    }


    componentDidMount(){
        fetch(url)
       .then(response => response.text())
       .then(data => {
       this.setState({selectedParagraph:data})
       const selectedParagraphArray=data.split("");
       const testInfo=selectedParagraphArray.map((selectedLetter)=> {
        return{
            testLetter :selectedLetter,
            status:"notAttempted",
        };
    })
    this.setState({testInfo});
    })


        //const selectedParagraphArray=data.split("");
        
    }

    render() {
        return (
            <div className="app">

                <Nav />

                <Home />

                <ChallengeSection selectedParagraph={this.state.selectedParagraph} words={this.state.words} characters={this.state.characters}
                wpm={this.state.wpm} timeRemaining={this.state.timeRemaining} timerStarted={this.state.timerStarted}
                testInfo={this.state.testInfo}
                />

                <Footer />

            </div>
        );
    }
}


export default App;