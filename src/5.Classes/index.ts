class Robot {
    name: string;
    
    constructor(name: string) {
        this.name= name;
    }

    getName(){
        console.log(`my name is ${this.name}`)
    }

    move(distance: number) {
        console.log(`${this.name} is moving with ${distance} mph`);
    }
}

let robot = new Robot("Robot 2.0");

robot.getName();
robot.move(90);

class FlyingRobot extends Robot {
    altitude: number;

    constructor(name: string, altitude: number) {
        super(name);
        this.altitude = altitude;
    }

    move(distance: number){
        super.move(distance);
        console.log(`${this.name} is flying with altitude ${this.altitude} and distance ${distance}`);
    }

}

let flyingRobot = new FlyingRobot("Flying Robot 2.0", 140000);

flyingRobot.getName();
flyingRobot.move(90);