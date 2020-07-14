import React, {Component} from 'react';

//Class based component deals with state and API calls
class MemeMaker extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getMeme() {
        console.log('clicked')
      }

    render() {
        return (
            <div>
                <div className="memeButtonDiv">
                    <button onClick={this.getMeme} className="memeButton">
                        Click Me
                    </button>
                </div>
                <h1>Meme's go here</h1>
          </div>
        )
    }

};

export default MemeMaker;