import * as customerDao from './customers-dao.js';


const createCustomer = async (req, res) => {
  const customer = req.body
  const actualCustomer = await customerDao.createUser(customer)
  res.json(actualCustomer)
}

const findCustomerById = async (req, res) => {
  const uid = req.params.uid
  const customer = await customerDao.findUserById(uid)

  console.log(customer);
  if (customer) {
      res.json(customer)
      return
  }
  res.sendStatus(404);

}

const findCustomerByUsername = async (req, res) => {
    const username = req.params.username
    console.log(username)
    const customer = await customerDao.findUserByUsername(username)
  
    console.log(customer);
    if (customer) {
        res.json(customer)
        return
    }
    res.sendStatus(404);
  
  }

const updateCustomer = async (req, res) => {
  const uid = req.params.uid
  const updates = req.body
  const status = await customerDao.updateUser(uid,  updates)
  res.json(status)
  
}
const CustomerController = (app) =>{
  app.get('/api/customers/:uid', findCustomerById);
  app.put('/api/customers/:uid', updateCustomer);
  app.post('/api/customers/', createCustomer);
  app.get('/api/customers/find/:username', findCustomerByUsername);

}

export default CustomerController