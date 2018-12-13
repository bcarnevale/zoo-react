import React, {Component} from 'react';

const chooseAnAnimal = [
    'Lion',
    'Giraffe',
    'Tiger'
]

class Animals extends Component {
    state = {
        numOfAnimals: 0
    }
    incrementAnimals() {
        const currentNum = this.state.numOfAnimals;
        this.setState({ numOfAnimals: currentNum + 1 });
        this.props.updateAnimalsAdd();
    }
    decrementAnimals() {
        const currentNum = this.state.numOfAnimals;
        this.setState({ numOfAnimals: currentNum - 1 });
        this.props.updateAnimalsRemove();
    }
    render() {
        return (
            <div>
                <h2>{this.props.id}s: {this.state.numOfAnimals}</h2>
                <button onClick={this.incrementAnimals.bind(this)}>More {this.props.id}s</button>
                <button onClick={this.decrementAnimals.bind(this)}>Less {this.props.id}s</button>
            </div>
        )
    }
}

export default Animals;