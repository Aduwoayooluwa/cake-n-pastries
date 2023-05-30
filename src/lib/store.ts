import { ProductSlice } from "@/interfaces/crateProductSlice.interface"
import { cartSlice } from "@/interfaces/createCartSlice.interface"
import {create} from "zustand"
import { createCartSlice } from "./slices/createCartSlice"

type StoreState =  cartSlice

export const useAppStore = create<StoreState>()((...a) => ({
    ...createCartSlice(...a)
}))