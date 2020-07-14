import React, {Component} from 'react';
import './MemeMaker.css';

//Class based component deals with state and API calls
class MemeMaker extends Component {
    constructor() {
        super();
        this.state = {
					topText: '',
					bottomText: '',
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
			
		handleChange(ev) {
			console.log('handleChange')
			const {name, value} = ev.target
			this.setState({
				[name]: value
			})
		}

		handleSubmit(ev) {

		}

    render() {
        return (
            <div>
							<form className="memeForm">
								<div>
									<input
										type="text"
										name="topText"
										value={this.state.topText}
										onChange={this.handleChange}
										placeholder="Top Text"
									/>
									<input
										type="text"
										name="bottomText"
										value={this.state.bottomText}
										onChange={this.handleChange}
										placeholder="Bottom Text"
									/> 
								</div>           	
                <button onClick={this.getMeme} type="button" className="button">Generate</button>
							</form>
							<div className="meme">
								<img src={this.state.randomImg} alt='' />
								<h2 className="top">{this.state.topText}</h2>
								<h2 className="bottom">{this.state.bottomText}</h2>
							</div>
					  </div>
              
         
        )
    }

};

export default MemeMaker;