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


    startTimer = () => {
        this.setState({timerStarted:true});
        const timer= setInterval(() =>{
            if(this.state.timeRemaining>0)
            {
                const timeSpent=TotalTime-this.state.timeRemaining;
                const wpm=timeSpent>0 ? ((this.state.words)/timeSpent)*TotalTime : 0;
                this.setState({
                    timeRemaining:this.state.timeRemaining-1,
                    wpm:parseInt(wpm),
                })
            }
            else{
                clearInterval(timer)
            }
        },1000)
    }

    handleInputChange = (inputValue) => {
        if(!this.state.timerStarted)
        {
            this.startTimer();
        }
        console.log(inputValue);
        /*
        * Handle the underflow case- all the characters should be shown as not attempted
        * Handle the overflow case-early exit
        * Handle the backspace
        *       1- mark all the [index+1] as not attempted
                dont forget the overflow case when the index can go out of bound
                for eg: [index+1] if its the last index then that is index==length-1
        * update the status in the test info
                
        */      
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
    }

    render() {
        return (
            <div className="app">

                <Nav />

                <Home />

                <ChallengeSection selectedParagraph={this.state.selectedParagraph} words={this.state.words} characters={this.state.characters}
                wpm={this.state.wpm} timeRemaining={this.state.timeRemaining} timerStarted={this.state.timerStarted}
                testInfo={this.state.testInfo}
                onInputChange={this.handleInputChange}
                />

                <Footer />

            </div>
        );
    }
}


export default App;