var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
  deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '44991234567',
      address: {
        postalcode: '87114073',
        street: 'Rua Projetada C',
        number: '707',
        details: 'Casa A',
        district: 'Jardim São Paulo',
        city_state: 'Sarandi/PR'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}