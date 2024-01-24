const persons = [
  {
    name: 'Juan Perez',
    nationality: 'Panamanian',
    country_of_birth: 'Panama',
    id_passport: '1',
    date_of_birth: '2000-04-10',
  },
  {
    name: 'Maria Perez',
    nationality: 'Panamanian',
    country_of_birth: 'Panama',
    id_passport: '2',
    date_of_birth: '2000-04-10',
  },
  {
    name: 'Ana Perez',
    nationality: 'Panamanian',
    country_of_birth: 'Panama',
    id_passport: '3',
    date_of_birth: '2000-04-10',
  },
]

function renameKeysToTitleCase(arrObj: {}[]) {
  function renameKey(obj: {}, old_key: string, new_key: string) {
    if (old_key === new_key) return
    if (!old_key.includes('_')) return
    const descriptor = Object.getOwnPropertyDescriptor(obj, old_key)
    if (!descriptor) return
    Object.defineProperty(obj, new_key, descriptor)
    delete obj[old_key]
  }

  const toTitleCase = (str: string) => {
    const strArray = str.toLowerCase().split('_')
    const strArrayShift = strArray.shift()
    const otherStringsArray = strArray
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join('')
    return strArrayShift + otherStringsArray
  }

  arrObj.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      renameKey(obj, key, toTitleCase(key))
    })
  })

  return arrObj
}

// Test it for yourself:
console.log(renameKeysToTitleCase(persons))
