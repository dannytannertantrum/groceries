import { Fragment, useState } from 'react'
import EditItem from './EditItem'
import './AddNewItem.css'

const AddNewItem = ({ addNewItem, list }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const cancelEditItem = () => {
    setIsFormVisible(false)
  }

  const setItem = (item) => {
    addNewItem(item)
    setIsFormVisible(false)
  }

  return (
    <Fragment>
      { isFormVisible ?
        <EditItem
          list={list}
          setItem={setItem}
          cancelEditItem={cancelEditItem}
        />
        : <button
          className={list.length < 1 ? "add" : "add add-margin"}
          onClick={() => setIsFormVisible(true)}>
          Add item
          </button>
      }
    </Fragment>
  )
}

export default AddNewItem
