const Tree = class {
  constructor (data, lhs, rhs) {
    this.data = data;
    this.lhs = lhs;
    this.rhs = rhs;
  }
}

// const # Leaves
const ten = new Tree(10,null,null)
const nine = new Tree(9,null,ten)
const eight = new Tree(8,null,nine)
const eleven = new Tree(11,null,null)
const six = new Tree(6,null,null)
const five = new Tree(5,null,six)
// const # Interior nodes
const four = new Tree(4,eight,null)
const seven = new Tree(7,eleven,null)
const three = new Tree(3,seven,four)
const two = new Tree(2,five,three)
const one = new Tree(1,two,null)


const pre = cur => {
  console.log(cur.data)
  if (cur.lhs) pre(cur.lhs)
  if (cur.rhs) pre(cur.rhs)
}

const post = cur => {
  if (cur.lhs) post(cur.lhs)
  if (cur.rhs) post(cur.rhs)
  console.log(cur.data)
}

const count = cur => {
  let numNodes = 0
  if (cur.lhs) {
    ++numNodes
    numNodes += count(cur.lhs)
  }
  if (cur.rhs) {
    ++numNodes
    numNodes += count(cur.rhs)
  }
  return numNodes
}

const add = cur => {
  let total = cur.data
  if (cur.rhs) total += add(cur.rhs)
  if (cur.lhs) total += add(cur.lhs)
  return total
}

const prod = cur => {
  let total = cur.data
  if (cur.rhs) total *= prod(cur.rhs)
  if (cur.lhs) total *= prod(cur.lhs)
  return total
}

console.log('Pre-order:')
pre(one)
console.log('\nPost-order:')
post(one)
console.log('\nCount')
console.log(count(one))
console.log('\nSum:')
console.log(add(one))
console.log('\nProduct:')
console.log(prod(one))
// console.log('\nMax:')
// console.log(themax(one))
// console.log('\nMin:')
// console.log(themin(one))
