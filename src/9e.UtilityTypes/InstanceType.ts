class User {
    deletd:  boolean;
    delete() {
        console.log("logic to delete User");
    }
    constructor(public name: string){}
}

class Car {
    deletd:  boolean;
    delete() {
        console.log("logic to delete Car");
    }
    constructor(public name: string){}
}
// so w have 2 common propeties deleted, delete() , so we can  use mixin pattern to share the common funcionality
//share b/w User and Car


function Deletable<BaseClass>(Base: BaseClass) {}

// here BaseClass type is the actual class that can be constructed

// create helper type to instantiate the class

type Construtable<ClassInstance> = new (...args: any[]) => ClassInstance

// now this Construtable type construct any class object,so we use constraint to instantiate the above Base class

function Deletable2<BaseClass extends Construtable<{}>>(Base: BaseClass) {
    //return anonymous class
    return class extends Base {
        deletd:  boolean;
        delete() {
            console.log("logic to delete User and Car");
        }
    }

}


class User {
    constructor(public name: string);
}

class Car {
    constructor(public name: string);
}

const DeletableUser = Deletable2(User);
const DeletableCar = Deletable2(Car);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;


class Profile {
    user: DeletableUserInstance;
    car: DeletableCarInstance;
}

const profile = new Profile();

profile.user = new DeletableUser('John');
profile.car = new DeletableCar('Ferrari');


