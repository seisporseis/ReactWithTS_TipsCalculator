import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

export default function App() {

  const { order, addItem } = useOrder()

  return (
    <>
      <header className="py-4 text-center bg-gradient-to-r from-rose-400 via-orange-400 to-pink-500">
        <h1 className="font-bold text-2xl text-gray-100">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl py-20 mx-auto grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-left font-bold text-3xl pb-4">Menu</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />    
            ))}
          </div>
        </div>

        <div className="border border-dashed border-rose-400 rounded-md p-4 space-y-10">
          <OrderContents 
            order={order}
          />
        </div>

      </main>

    </>
  )
}

