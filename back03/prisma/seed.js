const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
    {
    firstname : 'pawina',
    lastname : 'lamun',
    phone : '0842013735',
    address : '208/6',
    username : 'pin',
    password : password,
    email: 'pin@gmail.com'
  }
    
]



const run = async () => {
  await prisma.user.createMany({
    data : userData
  })

}

run()
