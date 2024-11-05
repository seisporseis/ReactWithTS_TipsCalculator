import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-left font-bold text-3xl pb-4">Consumo</h2>

        <div className="space-y-4 mt-5">
            {order.length === 0 ? 
            <p className="text-center">El carrito está vacío, elije tu plato favorito y agregalo a tu carrito</p> : 
            ( order.map( item => (
                <div key={item.id} className="flex justify-between items-center border-t border-rose-100 py-5 last-of-type:border-b">
                    <p className="text-lg">
                        {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-bold">
                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                    <button className="bg-red-700 text-slate-50 font-bold h-8 w-8 rounded-full">
                        X
                    </button>
                </div>
            )))}

        </div>
    </div> 
)
}
