// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Line 9 above establishes the parent Component and allows it to be accessed by new Components that are called Child Components.  Below are the files you can fine within the Child Components that are being accessed by establishing a path to those files using 'from', to 'import' these components.
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2) "class Board extends Component" is establishing that the constuctors below can be accessed by child components so they can individually run functions independalty from one another.  'this.state' is holding the elements that we can access later on as we establish our arguments for the child components.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) This is our first function that carries arguments that allows the program to identify when it should run an action, and what it should do.
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) the argument here says that the program should roll a random number within the given length of choices it has and it will pick which number to randomly return.
    let newRoll = rollImages[randomNum]
    // 5) then it will return a new array or string with the answer
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 6) this will now render into the child components, or in other words, assign each component to individual tasks.  the <Dice> component is in charge of rollinhg the dice, while the Log component keeps record of the numbers returned.
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) here it seems we are in the Dice component which extends our original React parent Component.
  render(){
    // 8) this will then render it's assined task back to the parent component so it can be displayed, perhaps on a webpage or a browser, which in this case looks like this Component is in charge of rolling the dice, and displays a current picture of the results eg. "current number is 6".
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9)the id tags are identifiers that allow other components, such as the css component, to call back on a specific component we'd like to customize and add artwork to it.  all of these are able to be displayed thanks to the <div> tag, which is a tag that lets HTML recieve and display JavaScript functions.
          alt="images of dice"
          // 10)and last but definitely not least, we finish giving the functions to the child component, and export all of this, returning and connecting the Child Component back to the original Parent Component.
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
