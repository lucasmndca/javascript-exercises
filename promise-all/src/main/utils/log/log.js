const colors = require('colors')

const warn = (msg) => {
    console.warn('[warn]: '.yellow + msg)
}

const info = (msg) => {
    console.log('[info]: '.blue + msg)
}

const error = (msg) => {
    console.error('[error]: '.red + msg)
}

const title = (msg) => {
    console.error(`=== ${msg.toUpperCase()} ===` .yellow)
}

module.exports= {
    warn,
    info,
    error,
    title
}