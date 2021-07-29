function sum(a: number, b:number): number {
    return a +b;
};

type myFunc = (a: number, b: number) => number;

const sum2: myFunc = (a, b) =>  a +  b;

sum2(2, 3);

//unknown number of args
function sumEverything(...args: number[]){
   return args.reduce((acc, current) => acc + current, 0)
}


//overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;

function calcArea(...args: number[]): number{

    if(args.length === 2){
       return args[0] * args[1];
    }

    return Math.pow(args[0], 2);

}
