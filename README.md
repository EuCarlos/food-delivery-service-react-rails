# Food delivery MVP

## Requirements:
* Ruby 2.7.3
* Rails 6.1.3
* SQLite


## Routes
| Prefix | Verb | URI Pattern | Controller#Action
| :----: | :--: | :--------- | :----------------
| categories | GET | `/api/categories(.:format)` | categories#index {:format=>:json} |
| restaurants | GET | `/api/restaurants(:format)` | restaurants#index {:format=>:json} |
| restaurant | GET | `/api/restaurants/:id(.:format)` | restaurants#show {:format=>:json} |
| orders | POST | `/api/orders(.:format)` | orders#create {:format=>:json} |
| order | GET | `/api/orders/:id(.:format)` | orders#show {:format=>:json} |
| available_cities | GET | `/api/available_cities(.:format)` | available_cities#index {:format=>:json} |

POST -> Orders
```json
{
    "order":{
        "name": "Leonardo Marcedo",
        "phone_number": "22912345678",
        "city": "Curitiba",
        "neighborhood": "Tingui",
        "number": "115",
        "complement": "apartamento 4",
        "order_products_attributes": [
            { "quantity": 1, "product_id": 1 },
            { "quantity": 9, "product_id": 2 }
        ]
    }
}
```
## Filters
```bash
curl http://localhost:3000/api/restaurants?
    q=bravo             # filter by query
    &city=Maceio        # filter by city
    &category=mexicana  # filter by category
```