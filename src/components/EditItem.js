import { Fragment, useState } from 'react'
import * as uuid from 'uuid'
import './EditItem.css'

const stores = ["Wegmans", "Costco"]

const EditItem = ({ cancelEditItem, setItem, item = {}, list }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [newItem, setNewItem] = useState(item.item || '')
  const [selectedStore, setSelectedStore] = useState(item.store || stores[0])

  const onInputChange = (event) => {
    setErrorMessage('')
    setNewItem(event.target.value)
  }

  const onSubmitNewItem = (event) => {
    event.preventDefault()

    let trimmedNewItem = newItem.trim()
    if (!trimmedNewItem.length) {
      setErrorMessage("Ummm...you want to buy nothing? 😉")
      return
    }

    const filteredItems = list.filter(itemToFilter => itemToFilter.id !== item.id)

    for (let item of filteredItems) {
      if (item["item"].toLowerCase() === trimmedNewItem.toLowerCase()) {
        setErrorMessage(`Looks like the item "${trimmedNewItem}" is already on your list 😊`)
        return
      }
    }

    const itemToUpdate = { id: item.id || uuid.v4(), item: trimmedNewItem, store: selectedStore, purchased: false }

    setItem(itemToUpdate)
  }

  const toggleStore = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setSelectedStore(selectedStore === 'Wegmans' ? 'Costco' : 'Wegmans')
  }

  return (
    <Fragment>
      <form onSubmit={onSubmitNewItem} className="container">
        <input
          className={list.length >= 1 ? 'editItem' : ''}
          onChange={onInputChange}
          value={newItem}
          placeholder={item.item ? item.item : 'Enter new product'}
          autoFocus
        />
        <button type="button" onClick={toggleStore}>
          <img
            alt={`logo for ${selectedStore}}`}
            src={`./${selectedStore}.png`}
          />
        </button>
        <button onClick={onSubmitNewItem}>💾</button>
        <button className="remove" onClick={cancelEditItem}>X</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </Fragment>
  )
}

export default EditItem
