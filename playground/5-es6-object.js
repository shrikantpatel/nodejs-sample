//***************object property shorthand

const name = 'shri'
const age = '39'

const user = {
    name,
    age,
    location: 'dallas'
}

console.log(user)

//***************object destructing

const product = {
    label: 'test',
    stock: 'stock',
    rating: undefined
}

//const label = product.label

const { label, stock } = product
console.log(label)
console.log(stock)

// if dont want to the defualt name for label
const { label: labelProduct } = product
console.log(labelProduct)

//use the default value for some variable if on set in product or does not exist in product
const { label: labelProductm, rating = 5 } = product
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)