export type User = {
    emailId?: string,
    imageUrl:String,
    name?:string,
    password?: string,
    city?:string,
    phoneNo?:String,
    address?:String
    orders?:[
        {
            orderId?: number,
            dishes?: [
              {
                name?:string,
                price?: number,
                category?: string,
                imageUrl?:string,
                description?:string
              }
            ]
          }
    ],
    favouriteDishes?:[
        {
            name?: string,
            price?: number,
            category?: string,
            imageUrl?: string,
            description?: string    
          }
    ],
    favouriteRestaurants?:[
        {
            name?:string,
            imageUrl?:string,
            dishes?: [
              {
                name?: string,
                price?: number,
                category?:string,
                imageUrl?:string,
                description?:string
              }
            ],
            location?:string,
          }
    ]


}