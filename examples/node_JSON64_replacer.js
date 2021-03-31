const serialize64 = require('..')


const data = {
  aString: 'hello there',
  aNumber: 42,
  anArray: [0, 'one', 'deux', 'tres', 4],
  anObject: {
    aUint8Array: new Uint8Array([1, 2, 3, 4, 5, 6, 7]),
    aFloat32Array: new Float32Array([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7]),
    anotherArray: [
      'a string',
      422,
      new Int32Array([-100000, 32, 9999999])
    ]
  }
}


const replacer = (key, value) => {
  return typeof value === 'number' ? value * 2 : value
}


const reviver = (key, value) => {
  return typeof value === 'number' ? value / 2 : value
}

console.log('data:\n', data)

const json64Serialized = serialize64.JSON64.stringify(data, replacer, 2)

console.log('encoded:\n', json64Serialized)

const dataDecoded = serialize64.JSON64.parse(json64Serialized, reviver)

console.log('decoded:\n', dataDecoded)
