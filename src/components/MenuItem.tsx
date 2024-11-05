import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
   <>
    <button 
        className="w-full p-2 border border-rose-400 flex justify-between rounded-md hover:bg-gradient-to-r from-rose-200 via-orange-200 to-pink-300" 
        onClick={() => addItem(item)}
    >
        <p className="font-light text-sm">{item.name}</p>
        <p className="font-bold text-sm">€{item.price}</p>
    </button>
   </>
  )
}
