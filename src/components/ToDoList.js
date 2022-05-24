import { Fragment } from 'react'
import ListItem from './ListItem'
import SortItems from './SortItems'
import './ToDoList.css'

const ToDoList = ({ list, removeItem, setSortStyle, sortStyle, updateItem }) => {
  const sortByPurchased = (array) => {
    return array.sort((a, b) => (a.purchased === b.purchased) ? 0 : a.purchased ? 1 : -1)
  }

  const togglePurchased = (event, purchasedItem) => {
    event.preventDefault()
    updateItem({ ...purchasedItem, purchased: !purchasedItem.purchased })
  }

  const renderedGroceries = sortByPurchased(list).map((item) => {
    return (
      <ListItem
        key={item.id}
        item={item}
        removeItem={removeItem}
        togglePurchased={togglePurchased}
        setItem={updateItem}
        list={list}
      />
    )
  })

  return (
    <Fragment>
      {list.length > 1 ? <SortItems setSortStyle={setSortStyle} sortStyle={sortStyle} /> : null}
      {renderedGroceries}
    </Fragment>
  )
}

export default ToDoList
