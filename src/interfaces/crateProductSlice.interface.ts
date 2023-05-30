export interface Products {
    caegory: {
        id: number
        name: string
        image: string
    }
    description: string
    idMeal: string
    image: string
    price: number
    strMeal: string
    quantity: number
}

export interface ProductSlice {
    products: Products[]
    fetchProduct: () => void
}