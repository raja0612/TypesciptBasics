type Alias1 = string | string[] | null;

type Alias2 = {a: number} & {b: number} ;

type Alias3<T> = T[];

type Alias4 = {
    a: number;
    b: number
};

// use interfaces to describe object shapes
// use type when intersect or union types are required. type means to create a name for an existing type


type WithTranslationFunction<T extends object> = T & { translate(str: string): string };
const myObject: WithTranslationFunction<{ someProp: number }> = 
{ someProp: 1, translate: (str) => `Translated ${str}` };
