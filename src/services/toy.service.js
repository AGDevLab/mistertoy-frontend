import { utilService } from './util.service.js'
// import { httpService } from './http.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'toyDB'
const BASE_URL = 'toy/'

_createToys()

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
  getDefaultFilter,
}

// function query(filterBy = {}) {
//   return storageService.query(STORAGE_KEY).then((toys) => {
//     toys = _filter(toys, filterBy)
//     return toys
//   })
// }

function query(filterBy = {}) {
  return storageService.query(STORAGE_KEY).then((toys) => {
    if (!filterBy.name) filterBy.name = ''
    if (!filterBy.price) filterBy.price = Infinity
    const regExp = new RegExp(filterBy.name, 'i')
    return toys.filter(
      (toy) => regExp.test(toy.name) && toy.price <= filterBy.price
    )
  })
}

function getById(toyId) {
  return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
  if (toy._id) {
    return storageService.put(STORAGE_KEY, toy)
  } else {
    return storageService.post(STORAGE_KEY, toy)
  }
}

function getEmptyToy() {
  return {
    name: 'Doll-' + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(1000, 9000),
  }
}

function getDefaultFilter() {
  return { name: '', price: '' }
}

function _createToys() {
  let toys = utilService.loadFromStorage(STORAGE_KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        _id: 't101',
        name: 'Talking Doll',
        price: 123,
        labels: ['Doll'],
        createdAt: 1631031801011,
        inStock: true,
      },
      {
        _id: 't102',
        name: 'Talking Doll',
        price: 50,
        labels: ['Doll', 'Baby'],
        createdAt: 1631031801014,
        inStock: true,
      },
      {
        _id: 't103',
        name: 'Talking Doll',
        price: 150,
        labels: ['Battery Powered'],
        createdAt: 1631031801012,
        inStock: true,
      },
      {
        _id: 't104',
        name: 'Talking Doll',
        price: 87,
        labels: ['Doll', 'Battery Powered'],
        createdAt: 1631031801013,
        inStock: true,
      },
    ]
  }
  utilService.saveToStorage(STORAGE_KEY, toys)
}
