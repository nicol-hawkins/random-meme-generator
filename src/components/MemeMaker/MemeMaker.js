import React, {Component} from 'react';
import './MemeMaker.css';

//Class based component deals with state and API calls
class MemeMaker extends Component {
    constructor() {
        super();
        this.state = {
					topText: '',
					buttomText: '',
					randomImg: 'http://i.imgflip.com/1bij.jpg',
					memeImgs: []
				};
				console.log(this.state.memeImg)
		}
		
		componentDidMount() {
			fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const { memes } = response.data
				this.setState({
					memeImgs: memes
				})
				console.log(this.state.memeImgs[0])
			})
		};

    getMeme() {
        console.log('clicked')
      }

    render() {
        return (
            <div>
            	<div className="memeButtonDiv">
                <button onClick={this.getMeme} type="button" className="button">Click Me</button>
            </div>
              <h3>(Meme's go here)</h3>
          </div>
        )
    }

};

export default MemeMaker;