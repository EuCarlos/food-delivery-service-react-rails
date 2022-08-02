# Food delivery MVP
🌐 _Para a versão em português deste README, [clique aqui](./docs/locales/pt-br/README.md)._



<p align="center">
    <code>Food Delivery Service</code> is a Minimum Viable Product (MVP) application of an online food ordering and delivery platform based on iFood.</br>
    <img src="https://img.shields.io/badge/SWAGGER_UI-1d4145?style=for-the-badge&logo=swagger&logoColor=85ea2d" alt="Logo Swagger UI"/>
    <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="Logo Ruby on Rails" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Logo React js" />
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/food-delivery-service-react-rails?color=orange&style=for-the-badge">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/food-delivery-service-react-rails?style=for-the-badge">
</p>

## Summary
- [1. Requirements:](#1-requirements)
- [2. Installation:](#2-installation)
    - [2.1. Backend](#21-backend)
    - [2.2. Frontend](#22-frontend)
- [3. Routes](#3-routes)
- [4. Filters](#4-filters)
- [5. How to contribute to this project?](#5-how-to-contribute-to-this-project)
- [6. How do I report a bug or request a feature?](#6-how-do-i-report-a-bug-or-request-a-feature)
## 1. Requirements:
* Backend
    * Ruby 2.7.3
    * Rails 6.1.3
    * SQLite
* Frontend
    * React
    * TypeScript
    * Vite
    * Yarn

## 2. Installation:
Clone the repo:
```bash
git clone https://github.com/EuCarlos/food-delivery-service-react-rails.git && cd food-delivery-service-react-rails
```
### 2.1. Backend

Install dependencies using Yarn or NPM:

```bash
cd backend && bundle install
```
**Configuration:**

Database creation
```bash
rails db:create
```
Database initialization
```bash
rails db:migrate
```
**Run the project**
```bash
rails s
```
### 2.2. Frontend
Install the dependencies using Yarn:
```bash
cd frontend && yarn install
```
**Run the project**
```bash
yarn dev
```
## 3. Routes API
OBS.: All route information has been documented with **Swagger UI**, and can be found in the `/doc-api` route

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
## 4. Filters
```bash
curl http://localhost:3000/api/restaurants?
    q=bravo             # filter by query
    &city=Maceio        # filter by city
    &category=mexicana  # filter by category
```

## 5. How to contribute to this project?
Before starting, check and follow the instructions for contributing to the repository. If not, you can follow the instructions below:

1. Fork the project
2. Create a new branch: git checkout -b nova-branch
3. Commit your changes: git commit -m 'I added something'
4. Push to branch: git push origin nova-branch
5. Open a Pull Request

## 6. How do I report a bug or request a feature?
If you want to report a bug or request a feature, go to [Issue](https://github.com/eucarlos/food-delivery-service-react-rails/issues) on the GitHub Project and add your request.

___

<p align="center">
Created with 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a></p>