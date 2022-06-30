# Food delivery MVP
🌐 _Para a versão em português deste README, [clique aqui](./docs/locales/pt-br/README.md)._
## Requirements:
* Backend
    * Ruby 2.7.3
    * Rails 6.1.3
    * SQLite
* Frontend
    * React
    * TypeScript

## Installation:
## Configuration:
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
        "name": "Carlos Alves",
        "phone_number": "22912345678",
        "restaurant_id": 1,
        "city": "Curitiba",
        "street": "São João",
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

## How to contribute to this project?
Before starting, check and follow the instructions for contributing to the repository. If not, you can follow the instructions below:

1. Fork the project
2. Create a new branch: git checkout -b nova-branch
3. Commit your changes: git commit -m 'I added something'
4. Push to branch: git push origin nova-branch
5. Open a Pull Request

## How do I report a bug or request a feature?
If you want to report a bug or request a feature, go to [Issue](https://github.com/eucarlos/food-delivery-service-react-rails/issues) on the GitHub Project and add your request.

___

<p align="center">
Created with 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a></p>