let fsk = require('../index')

function test () {
  fsk.logRT(() => {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In Arrow function, generated string of size =', str.length)
  })
  // RT for '' is 30 ms

  fsk.logRT(function () {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In anonymous function, generated string of size =', str.length)
  })
  // RT for '' is 6 ms

  fsk.logRT(function normalNamedFunc () {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In normalNamedFunc, generated string of size =', str.length)
  })
  // RT for 'normalNamedFunc' is 4 ms

  function normalPredifinedNamedFunc () {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In normalPredifinedNamedFunc, generated string of size =', str.length)
  }
  fsk.logRT(normalPredifinedNamedFunc)
  // RT for 'normalPredifinedNamedFunc' is 7 ms

  let normalAssignedToVariableFunc = function () {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In normalAssignedToVariableFunc, generated string of size =', str.length)
  }
  fsk.logRT(normalAssignedToVariableFunc)
  // RT for 'normalAssignedToVariableFunc' is 8 ms

  let assignedToVariableArrayFunc = () => {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In assignedToVariableArrayFunc, generated string of size =', str.length)
  }
  fsk.logRT(assignedToVariableArrayFunc)
  // RT for 'assignedToVariableArrayFunc' is 8 ms

  fsk.logRT(() => {
    let str = ''
    for (let i = 0; i < 25000; i++) {
      str += i + 'abcdefghijk\n'
    }
    console.log('In myOwnName, generated string of size =', str.length)
  }, 'myOwnName')
  // RT for 'myOwnName' is 7 ms
}

test()
