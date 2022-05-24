import { Fragment, useState } from 'react'
import EditItem from './EditItem'

const ListItem = ({
  item,
  removeItem,
  togglePurchased,
  list,
  setItem
}) => {
  const [readOnly, setReadOnly] = useState(true)

  const cancelEditItem = () => {
    setReadOnly(true)
  }

  const setListItem = (item) => {
    setItem(item)
    setReadOnly(true)
  }

  const renderedItem = (
    <div className="container">
      <button type="button" onClick={(event) => togglePurchased(event, item)}>{item.purchased ? "✅" : "⬜"}</button>
      <input
        className={item.purchased ? 'purchased' : ''}
        value={item.item}
        readOnly
      />
      <button type="button" disabled>
        <img
          alt={item.store}
          src={`./${item.store}.png`}
        />
      </button>
      <button type="button" onClick={() => setReadOnly(false)}>✏️</button>
      <button type="button" className="remove" onClick={() => removeItem(item)}>X</button>
    </div>
  )

  return (
    <Fragment>
      {
        readOnly ? renderedItem
          : <EditItem
            item={item}
            list={list}
            setItem={setListItem}
            cancelEditItem={cancelEditItem}
          />
      }
    </Fragment>
  )
}

export default ListItem
