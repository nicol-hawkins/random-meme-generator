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
				//Bind handleChange method to the constructor
				this.handleChange = this.handleChange.bind(this)
		}
		
		//Fetch meme data from API and setState
		componentDidMount() {
			fetch("https://api.imgflip.com/get_memes")
			//Turn promise into JSON object
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
			
		handleChange(ev) {
			
		}

    render() {
        return (
            <div>
							<form className="memeForm">
								<input
									type="text"
									name="topText"
									value={this.state.topText}
									onChange={this.handleChange}
								/>
								<input
									type="text"
									name="bottomText"
									value={this.state.bottomText}
									onChange={this.handleChange}
								/>            	
                <button onClick={this.getMeme} type="button" className="button">Generate</button>
							</form>
					  </div>
              
         
        )
    }

};

export default MemeMaker;