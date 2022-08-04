import React from "react";
import { Button} from "./ColorRandomizerButton";

class Random extends React.Component {
    componentDidMount() {
        this.applyColor();
      }
    
    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }
    
    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }
    
    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }
    
    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }
    
    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random()*256));
        }
        return random;
    }
    
    handleClick() {
        this.setState({
            color: this.chooseColor()
        });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            color: [192, 32, 53]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
                    Your color is {this.formatColor(this.state.color)}.
                </h1>
                <Button 
                    light={this.isLight()}
                    onClick={this.handleClick} 
                />
            </div>
        );
    }
}

export default Random;