const dog = {
    name: 'fidee',
    age: 4,
    bark() {
        console.log('woof');
    }
}

// const name = dog.name;
// const age = dog.age;

const { name: fullName, age } = dog;