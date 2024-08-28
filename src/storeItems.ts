import {create} from 'zustand'
import { CardItemType } from './components/utils/types'
import { DATA_GOODS } from './components/utils/static'
type ItemsStore ={
    items:CardItemType[],
    search:string,
    changeSearch:(value:string) =>void,
}
export const useItemsStore = create<ItemsStore>((set)=> ({
    items:DATA_GOODS,
    search:'',
    changeSearch:(value) => {
        set({search:value})
    }
}))