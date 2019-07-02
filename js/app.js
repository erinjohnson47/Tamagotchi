console.log('This JS file has loaded.')
class Tomagotchi {
    constructor(name) {
    this.name = name;
    this.age = 0;
    this.boredom = 0;
    this.hunger = 0;
    this.sleepiness = 0;
    }
    death() {
        if (this.boredom === 10) {
            alert(`${this.name} has died of boredom!`)
        } else if (this.hunger === 10) {
            alert(`${this.name} has died of hunger!`)
        } else if (this.sleepiness === 10) {
            alert(`${this.name} has died of exhaustion!`)
        }
    }
    eat() {
        if (this.hunger === 0) {
            alert(`${this.name} is not hungry.`)
        } else {
            //code here to feed pet
            this.hunger -= 1;
        }
    }
    play() {
        if (this.boredom === 0) {
            alert(`${this.name} is not bored.`)
        } else {
            //code here to play a game?
            this.boredtom -= 1;
        }
    }
    sleep() {
        if(this.sleepiness ===0) {
            alert(`${this.name} is not sleepy.`)
        } else {
            //code here to turn off lights
            this.sleep -= 1;
        }
    }
    //method here to reproduce
    //method here to exercise
}
const tomaPet = new Tomagotchi("TomaPet")

//future extention of class here to include superpowers