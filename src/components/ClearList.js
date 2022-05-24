import { Fragment, useState } from 'react'
import './ClearList.css'

const ClearList = ({ setList }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const onClearList = () => {
    localStorage.clear()
    setList([])
    setShowConfirmation(false)
  }

  return (
    <div className="clearListContainer">
      { !showConfirmation ? <button className="clearList" onClick={() => setShowConfirmation(true)}>Clear list</button> : null}
      { showConfirmation ?
        <Fragment>
          <p>You worked so <em>hard</em> on this grocery list. Are you sure you want to delete it AND clear all local storage?</p>
          <div className="clearListOptions">
            <button onClick={onClearList}>Yeah, man. Totally.</button>
            <button onClick={() => setShowConfirmation(false)}>No, don't!</button>
          </div>
        </Fragment>
        : null}
    </div>
  )
}

export default ClearList
