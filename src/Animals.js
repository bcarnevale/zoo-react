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
        this.props.updateAnimals();
    }
    render() {
        return (
        <div>
            <h1>{this.state.numOfAnimals}</h1>
            <button onClick={this.incrementAnimals.bind(this)}>Add more!</button>
        </div>
        )
    }
}

export default Animals;