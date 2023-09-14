export let profiles = [
    {
        id: '10000',
        name: 'Alice Smith',
        email: 'alice@email.com',
        phone: '647-123-4567',
        password: 'password',
        banking: {
            chequing: {
                accountNumber: '123456789',
                balance: 1000,
                open: true,
            },
            savings: {
                accountNumber: '987654321',
                balance: 20000,
                open: true,
            },
            credit: {
                accountNumber: '1111111111',
                balance: 30000,
                open: true,
            },
            investments: {
                accountNumber: '2222222222',
                balance: 4000,
                open: true,
            },
        }
    },
    {
        id: '10001',
        name: 'Bob Smith',
        email: 'bob@email.com',
        phone: '647-222-2222',
        password: 'wordpass',
        banking: {
            chequing: {
                accountNumber: '111111112',
                balance: 5000,
                open: true,
            },
            savings: {
                accountNumber: '222222232',
                balance: 60000,
                open: true,
            },
            credit: {
                accountNumber: '333333333',
                balance: 70000,
                open: true,
            },
            investments: {
                accountNumber: '444444444',
                balance: 8000,
                open: true,
            },
        }
    },
]

// generate new account number
export const generateAccountNumber = () => {
    const newNumber = Math.floor(Math.random() * 1000000000)
    //check if its not already in use for any of the profiles
    profiles.forEach(profile => {
        if (profile.banking.chequing.accountNumber === newNumber || profile.banking.savings.accountNumber === newNumber || profile.banking.credit.accountNumber === newNumber || profile.banking.investments.accountNumber === newNumber) {
            generateAccountNumber()
        }
    })
    return newNumber
}