const CategoryRepository = require('./repositories/CategoryRepository')
const DeviceRepository = require('./repositories/DeviceRepository')

const main = async () =>{
    const categoryRepository = new CategoryRepository()

    const deviceReposiroty = new DeviceRepository()
/*
    const category = {
        name: 'Smartphone'
    }

    await categoryRepository.add(category)
*/
    const categories = await categoryRepository.selectAll()

    //console.log(categories[0].dataValues)
    console.log('**********Categories**********')
    for (const key in categories) {
       console.log(categories[key].dataValues)
    }
    console.log('**********Categories**********')


    const device = {
        id: 1,
        name: 'Galaxy A12',
        category_id: 1,
        color: 'BLACK', 
        partnumber: 123456456789
    }

    //await deviceReposiroty.add(device)

    await deviceReposiroty.update(device)

    const devices = await deviceReposiroty.selectAll()

    //console.log(devices)
    console.log('**********Devices**********')
    for (const iterator of devices) {
        console.log('Retorno', iterator.dataValues)
    }
}

main()