export let codes = [
    {
        id: '10000',
        code: 'jbb2jopfa6',
    },
]

// generate a random 10 digit code
export const generateCode = () => {
    let code = ''
    for (let i = 0; i < 10; i++) {
        if (Math.random() < 0.5) {
            code += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        }
        else {
            code += Math.floor(Math.random() * 10)
        }
    }
    for (let i = 0; i < codes.length; i++) {
        if (codes[i].code === code) {
            code = generateCode()
        }
    }
    return code
}

