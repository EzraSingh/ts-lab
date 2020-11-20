
// ? MAP

interface Item {
    id: number;
    name: [string, string];
    profile: {
        username: string;
        email: string;
    }
}

const listA: Item[] = [
    {
        id: 1,
        name: ['John', 'Doe'],
        profile: {
            username: 'foo',
            email: 'a@gmail.com'
        }
    },
    {
        id: 2,
        name: ['Jane', 'Doe'],
        profile: {
            username: 'boo',
            email: 'b@gmail.com'
        }
    },
    {
        id: 3,
        name: ['Jose', 'Doe'],
        profile: {
            username: 'booboo',
            email: 'c@gmail.com'
        }
    }
]


// const onlyProfiles = listA.map(function ({ id, name, profile }: Item, index, array) {
//     return { id, profile };
// });

// ? NOTE: action
function showProfileAndId({ id, name, profile }: Item, index, array) {
    return { id, profile };
}

function showIndex({ id, name, profile }: Item, index, array) {
    return index;
}

function hideFirstItem({ id, name, profile }: Item, index, array) {
    // if (index === 0) {
    //     return null;
    // } else {
    //     return id;
    // }
    return index === 0 ? null : id;
}

const addSmily = (item, index, array) => {
    return item.id + ':)'
}

const onlyProfiles = listA.map(addSmily);

//console.log(onlyProfiles);

// ? FILTER

interface ListBItem {
    age: number;
}

const listB: ListBItem[] = [
    { age: 10 },
    { age: 21 },
    { age: 5 },
    { age: 2 },
    { age: 8 },
    { age: 5 },
    { age: 43 },
    { age: 30 },
    { age: 100 },
    { age: 1000 },
]

const isAdult: (item: ListBItem) => boolean = (item) => {
    return item.age > 18;
}

const isEven: (item: ListBItem) => boolean = (item) => {
    return item.age % 2 === 0;
}

const filteredList = listB.filter(isEven).filter(isAdult);

console.log(filteredList);

// ? REDUCE

