const numberArrays = [2, 4, 6, 8, 10, 12]
console.log(numberArrays)

numberArrays.pop()
numberArrays.unshift(12)
console.log(numberArrays)

const myArrays = [
    {
        productTitle: `x`,
        productPrice: `x`
    },
    {
        productTitle: `x`,
        productPrice: `x`
    },
    {
        productTitle: `x`,
        productPrice: `x`
    }
]
console.log(myArrays)

const numberArrays2 = [1, 5, 3, 4, 7]
const average = numberArrays2.reduce((a, b) => a + b, 0) / numberArrays2.length;
console.log(average)

const myObject = {
    phoneName: `iPhone`,
    phoneDescription: `apple`,
    phonePrice: 1000,
    shopAddresses:`Tbilisi`,
    phoneMemoryInGB: 6
}
console.log(`Phone name is ${myObject.phoneName}, phone price is ${myObject.phonePrice}$ and you can buy it at ${myObject.shopAddresses}`)