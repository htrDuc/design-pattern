// example without factory pattern

const getTransport = (cargoVolume) => {
    switch (cargoVolume) {
        case '10':
            return {
                name: 'Truck 10',
                price: '100.000VND',
                door: 6
            }
        case '20':
            return {
                name: 'Truck 20',
                price: '100.0000VND',
                door: 12
            }
    } 
}

console.log('Level 0', getTransport('10'))

// example with factory pattern
// props: SOLID ( nguyen tac dong mo vi khi mo rong phai sua getTransport)

class ServiceLogistic {
    constructor(door = 6, price =  '100.000VND', name = 'Truck 10') {
        this.door = door
        this.price = price
        this.name = name
    }

    static getTransport = (cargoVolume) => {
        switch (cargoVolume) {
            case '10':
                return new ServiceLogistic()
            case '20':
                return new ServiceLogistic(12, '1000000VND', 'Truck 20')
        } 
    } 
}

console.log('Level xxx', ServiceLogistic.getTransport('20'))

