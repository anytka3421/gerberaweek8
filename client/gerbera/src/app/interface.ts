export interface Product {
  bouquets: [
      {
          id: number,
          title: string,
          description: string,
          price: number,
          stock: boolean,
          image: string,
          display:boolean
      }
  ]
}
