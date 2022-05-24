import './SortItems.css'

const SortItems = ({ sortStyle, setSortStyle }) => (
  <p className="sorting">
    Sort by:
    <button
      className={(sortStyle.includes('abc')) ? 'active' : null}
      onClick={() => setSortStyle('abc' === sortStyle ? `${sortStyle}Reversed` : 'abc')}
    >
      Alphabet {sortStyle === 'abc' ? '[a-z]' : sortStyle === 'abcReversed' ? '[z-a]' : null}
    </button>
    <button
      className={(sortStyle.includes('store')) ? 'active' : null}
      onClick={() => setSortStyle('store' === sortStyle ? `${sortStyle}Reversed` : 'store')}
    >
      Store {sortStyle.length > 0 ?
        <img
          alt={sortStyle === 'store' ? './Costco.png' : sortStyle === 'storeReversed' ? './Wegmans.png' : ''}
          src={sortStyle === 'store' ? './Costco.png' : sortStyle === 'storeReversed' ? './Wegmans.png' : null}
        />
        : null}
    </button>
  </p>
)

export default SortItems
