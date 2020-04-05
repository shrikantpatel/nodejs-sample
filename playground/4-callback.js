setTimeout(() => {
    console.log('2 seconds is up')
}, 2000)

const names = ['shrikant', 'bhumi', 'parth', 'krish']
const shortNames = names.filter(name => name.length <=5)

console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude :0
        }
        callback(data)
    }, 2000)
}

geocode('dallas', data => console.log(data))

const add = (a, b, callback) => {
    setTimeout(()=> {
        callback(a+b)
    },2000)
}

add(1, 4, sum => console.log(sum))

const multiple = (a, b, callback) => {
    setTimeout(() => {
        callback(a*b)
    },2000)
}

multiple(6, 5, multiple => console.log(multiple))