import Increment from './increment'

let incre = Increment(0, Math.pow(2, 16))

/**
 * 生成用于本地的 id
 * @param {string} name 
 * @returns {string} 
 */
export default function loid(name) {
    let time = new Date().getTime()
    let count = incre.getValue()
    let random = Math.floor(Math.random() * Math.pow(2, 16))

    return name + '_' + _10to16(random) + '_' + _10to16(count) + '_' + _10to16(time)
}


function _10to16(num) {
    let str = ''

    while (Math.floor(num / 16) || (num % 16)) {
        str = _16to0F(num % 16) + str
        num = Math.floor(num / 16)
    }
    return str
}

function _16to0F(letter) {
    switch (letter) {
        case 10:
            return 'A'
        case 11:
            return 'B'
        case 12:
            return 'C'
        case 13:
            return 'D'
        case 14:
            return 'E'
        case 15:
            return 'F'
        default:
            return letter + ''
    }
}

