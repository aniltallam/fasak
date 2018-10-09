function logRT (func, logText) {
  let start = Date.now()
  // start = process.hrtime()
  func()
  let dur = Date.now() - start
  // dur = process.hrtime(start)
  if (!logText) {
    logText = func.name
  }
  console.log(`RT for '${logText}' is ${dur} ms`)
}

module.exports.logRT = logRT
