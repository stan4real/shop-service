import { CartProps } from "../../storeCart"

export type CardItemType = {
    id:string,
    name:string,
    price:string,
    img:string,
    images?:string[]
}
export type CartItemType = {
    id:string,
    name:string,
    size:string,
    color:string,
    price:string,
    quantity:number,
    img:string
}

export type Order = {
    id:number,
    data:CartProps[],
    total:string,
    status:string
  }