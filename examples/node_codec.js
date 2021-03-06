const serialize64 = require('..')

console.log('serialize64: ', serialize64)

const someData = new Uint8Array([1, 2, 3, 4, 5, 6, 99])
const someStrData = serialize64.Codec.encode(someData)
console.log('someData: ', someData)
console.log('someStrData: ', someStrData)
const decoded = serialize64.Codec.decode(someStrData)
console.log('decoded: ', decoded)


const size = 1000
const someData2 = new Float32Array(size)
for (let i = 0; i < size; i += 1) {
  someData2[i] = Math.random()
}
console.time('encoding')
const someStrData2 = serialize64.Codec.encode(someData2)
console.timeEnd('encoding')
// console.log('someData2: ', someData2)
// console.log('someStrData2: ', someStrData2)
console.time('decoding')
const decoded2 = serialize64.Codec.decode(someStrData2)
console.timeEnd('decoding')
// console.log('decoded2: ', decoded2)

let sqErr = 0
for (let i = 0; i < size; i += 1) {
  sqErr += (someData2[i] - decoded2[i]) ** 2
}
const mse = sqErr / size
console.log('mse: ', mse);
console.log('original byte size: ', someData2.byteLength)
console.log('encoded byte size: ', someStrData2.length);
console.log('growth ratio: ', someStrData2.length / someData2.byteLength);
