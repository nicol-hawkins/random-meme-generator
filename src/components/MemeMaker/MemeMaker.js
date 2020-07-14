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
                <button onClick={this.getMeme} type="button" class="btn btn-dark">Click Me</button>
            </div>
              <h3>(Meme's go here)</h3>
          </div>
        )
    }

};

export default MemeMaker;