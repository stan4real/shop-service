import OrderHistoryItem from "./OrderHistoryItem"

const ORDERS = [
    {
        id:123313,
        data:[
          {
          id:'4',
          values:{
            size:'XL',
            color:'White',
            quantity:3
            }
          },
          {
            id:'10',
            values:{
              size:'XL',
              color:'Black',
              quantity:2
            }
          },
          {
            id:'8',
            values:{
              size:'L',
              color:'White',
              quantity:1
            }
          }
        ],
        total:'2720',
        status:'В сборке'
    },
    {
        id:243123,
        data:[
          {
          id:'11',
          values:{
            size:'2XL',
            color:'Green',
            quantity:2
            }
          },
          {
            id:'10',
            values:{
              size:'L',
              color:'Orange',
              quantity:2
              }
            },
        ],
        total:'1600',
        status:'Доставлен'
    },
    {
      id:352312,
      data:[{
        id:'5',
        values:{
          size:'L',
          color:'Black',
          quantity:1
        }
      }
      ],
      total:'537',
      status:'Отменен'
  }
]
function OrdersHistory() {
  
  return (
    <>
    <div className="flex flex-col gap-2 pt-2">
      {ORDERS.map(item => 
          <OrderHistoryItem key={item.id} item={item}/>
      )}

    </div>
    
    </>
  )
}

export default OrdersHistory