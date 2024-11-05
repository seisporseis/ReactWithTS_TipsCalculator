import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-bold text-3xl">Consumo</h2>

        <div className="space-y-3 mt-10">
            {order.map( item => (
                    <div key={item.id} 
                        className="flex justify-between items-center border-t border-rose-100 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            
                            <p className="font-bold">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button className="bg-red-700 text-slate-50 font-bold h-8 w-8 rounded-full" onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                    
            ))}
        </div>
    </div> 
)}
