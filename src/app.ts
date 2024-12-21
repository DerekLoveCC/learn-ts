function ClassDecoratorLogger1(constructor: Function) {
    console.log('6. LOGGER1 Called. |constructor: ', constructor);
}

function LoggerFactor(logString: string) {
    console.log('2. LOGGER FACTORY');
    return function (constructor: Function) {
        console.log('5. ' + logString, '. |constructor:', constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('3. With Template decorator FACTORY called');
    return function (constructor: any) {
        console.log('4. With template decorator called. | template: ' + template + ' | hookId: ' + hookId);
        const hookEl = document.getElementById(hookId);
        const p = new constructor('John', 20, "China");
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

function PropertyDecorator(target: any, propertyKey: string | symbol) {
    console.log('1. Property decorator called', '. |property: ', propertyKey, '| target: ', target);
}

function AccessorDecorator(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator called', '. |property: ', propertyKey, '| target: ', target, '| descriptor: ', descriptor);
}

function MethodDecorator(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator called', '. |propertyKey: ', propertyKey, '| target: ', target, '| descriptor: ', descriptor);
}

function ArgumentDecorator(target: any, methodName: string | symbol, position: number) {
    console.log('Argument decorator called', '. |target: ', target, '| name: ', methodName, '| position: ', position);
}

@ClassDecoratorLogger1
@LoggerFactor('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    @PropertyDecorator
    age: number;

    private _address: string;
    @AccessorDecorator
    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }

    constructor(public name: string, age: number, addr: string) {
        this.age = age;
        this._address = addr;
        console.log('7. constructing person object with name: ' + this.name);
    }

    @MethodDecorator
    greet() {
        console.log(`Hello, my name is ${this.name}, age is ${this.age} and address is ${this.address}`);

    }

    setAge(@ArgumentDecorator age: number) {
        this.age = age;
    }
}
const person = new Person('John', 20, "China");
