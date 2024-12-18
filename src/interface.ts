interface AddFunc {
    (a: number, b: number): number;
}

interface Named {
    readonly name: string;
}
interface Animal extends Named {
    age?: number;
    bark(): void;
    eat?(food: string): void;
}

class Dog implements Animal {
    private breed: string = "Golden Retriever";
    bark(this: Dog): void {
        console.log("Woof! by dog " + this.name + this.breed);
    }

    constructor(public name: string) { }
}