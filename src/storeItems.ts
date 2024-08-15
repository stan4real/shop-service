import {create} from 'zustand'
import { CardItemType } from './components/utils/types'
import { DATA_GOODS } from './components/utils/static'
type ItemsStore ={
    items:CardItemType[]
}
export const useItemsStore = create<ItemsStore>(()=> ({
    items:DATA_GOODS,
}))