
import { Form, useLoaderData } from 'react-router-dom'
import Button from './Button'
import Total from './Total'

function ShippingForm() {
    const inputClass = 'p-3 text-2xl rounded-2xl'
    const loaderInfo = useLoaderData()
    console.log(loaderInfo)
  return (
    <Form method='get' navigate={false} fetcherKey="my-key" className='flex flex-col gap-2 pt-2'>
        <h1 className='text-center text-xl'>Укажите адрес доставки</h1>
        <input type='text' name='City' placeholder='Город' className={inputClass}/>
        <input type='text' name='Street' placeholder='Улица' className={inputClass}/>
        <input type='text' name='Apartment' placeholder='Дом' className={inputClass}/>
        <Total />
        <Button type='submit'>
            <p>Оформить</p>
        </Button>
    </Form>
  )
}

export default ShippingForm