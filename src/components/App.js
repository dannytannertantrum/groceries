import { useEffect, useState } from 'react'
import AddNewItem from './AddNewItem'
import ClearList from './ClearList'
import Search from './Search'
import ToDoList from './ToDoList'
import './styles.css'

const shoppingList = JSON.parse(localStorage.getItem('dttGroceryList')) || []

console.log(localStorage)

const sortMap = {
  abc: (a, b) => a.item < b.item ? -1 : 1,
  abcReversed: (a, b) => a.item > b.item ? -1 : 1,
  store: (a, b) => a.store < b.store ? -1 : 1,
  storeReversed: (a, b) => a.store > b.store ? -1 : 1
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [filteredList, setFilteredList] = useState(shoppingList)
  const [list, setList] = useState(shoppingList)
  const [sortStyle, setSortStyle] = useState('')



  useEffect(() => {
    localStorage.setItem('dttGroceryList', JSON.stringify(list))
    if (filter) {
      setFilteredList([...list.filter(({ item }) => (
        item.toLowerCase().includes(filter.toLowerCase())
      )).sort(sortMap[sortStyle])])
    } else {
      setFilteredList([...list.sort(sortMap[sortStyle])])
    }
  }, [list, filter, sortStyle])

  const addNewItem = (item) => {
    setList([...list, item])
  }

  const removeItem = (removedItem) => {
    setList(list.filter(({ id }) => id !== removedItem.id))
  }

  const updateItem = (updatedItem) => {
    const updatedItemIndex = list.findIndex(item => item.id === updatedItem.id)
    const prefixedList = list.slice(0, updatedItemIndex)
    const suffixedList = list.slice(updatedItemIndex + 1)

    setList([...prefixedList, updatedItem, ...suffixedList])
  }

  return (
    <div className="wrapper">
      <h1>Grocery List</h1>
      {list.length > 0 ? <Search setFilter={setFilter} /> : null}
      <ToDoList
        list={filteredList}
        removeItem={removeItem}
        setList={setList}
        setSortStyle={setSortStyle}
        sortStyle={sortStyle}
        updateItem={updateItem}
      />
      <AddNewItem
        addNewItem={addNewItem}
        list={list}
      />
      {list.length > 0 ? <ClearList setList={setList} /> : null}
    </div>
  )
}

export default App
