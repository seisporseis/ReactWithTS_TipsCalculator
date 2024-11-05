import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
    
  return (
    <div>
        <h3 className="font-bold text-xl">Propina</h3>

        <form action="">
            { tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-4">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input type="radio"
                            id={tipOption.id} 
                            name="tip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                    />
                </div>
            ))}
            
        </form>
        
    </div>
  )
}
