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

## Filters
```bash
curl http://localhost:3000/api/restaurants?
    q=bravo             # filter by query
    &city=Maceio        # filter by city
    &category=mexicana  # filter by category
```