import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

export default function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="py-5 text-center bg-gradient-to-r from-rose-400 via-orange-400 to-pink-500">
        <h1 className="font-bold text-2xl text-gray-100">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-5xl mx-auto py-20 grid md:grid-cols-2">
        <div className="bg-white rounded-md pr-4 md:col-span-auto">
          <h2 className="font-bold text-3xl mt-5">Menú</h2>
          <div className="mt-10 space-y-4">
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
          { order.length ? (
            <> 
              <OrderContents 
              order={order}
              removeItem={removeItem}
              />

              <TipPercentageForm
              setTip={setTip}
              tip={tip}
              />

              <OrderTotals
              order={order} 
              tip={tip}
              placeOrder={placeOrder}
              
              />
            </>
          ): (
            <p className="text-center text-gray-400 font-thin">El carrito está vacío, elije tu postre favorito y agregalo a tu carrito</p> 
          )}
         
        </div>

      </main>

    </>
  )
}

