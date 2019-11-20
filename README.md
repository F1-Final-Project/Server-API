# Server API

## [Heroku Link](https://f1-server-api.herokuapp.com/)

## Documentation
* [User API](#user-api)
* [Auth API](#auth-api)
* [Ingredient API](#ingredient-api)
* [Dish API](#dish-api)
* [CategoryMenu API](#category-menu-api)
* [Invoice API](#invoice-api)
* [Order API](#order-api)
* [News API](#news-api)
* [Reserved API](#reserved-api)

## User API
### GET /users
Returns all User instance.

Example response:
```json
[
    {
        "isAdmin": true,
        "_id": "5dd0713430a9086cae1b76b4",
        "email": "admin@test.com",
        "password": "$2b$10$TMLDo9vvdBagWID6QmlwEuqujGF.I0Bhx3JYhrkqvUPpsquNU2a46",
        "__v": 0
    }
]
```

### POST /users
Adds to User instance in a database.

|Param|Type|Description|
|--|--|--|
|email|`string`|User email.|
|password|`string`|User password.|
|isAdmin|`bool`|Сonfirm that the user is an admin.|

Example request:
```json
{
    "email": "admin3@test.com",
    "password": "2222",
    "isAdmin": true
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /users/:id
Returns a User instance by id.

Example response:
```json
{
    "isAdmin": true,
    "_id": "5dd0713430a9086cae1b76b3",
    "email": "admin3@test.com",
    "password": "$2b$10$TMLDo9vvdBagWID6QmlwEuqujGF.I0Bhx3JYhrkqvUPpsquNU2a46",
    "__v": 0
}
```

### DELETE /users/:id
Delete a User instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```

## Auth API
### POST /auth
Returns auth token.

|Param|Type|
|--|--|
|email|`string`|
|password|`string`|

Example request:
```json
{
    "email": "admin3@test.com",
    "password": "2222"
}
```
Example response:
```json
    "eyJhbGciOiJIUzI1Ni.6Y8vNf59spDgFkQB_K84FKnunuHWlG2pVVyr7W95-4I"
```

## Ingredient API
### GET /ingredients
Returns all Ingredient instance.

Example response:
```json
[
    {
        "price": 100,
        "_id": "5dd098570cdb777077a0bec3",
        "title": "Японский рис",
        "restInStock": 500,
        "description": "Круглозерный японский рис, более твердый, чем другие круглозерные сорта.",
        "__v": 0
    }
]
```

### POST /ingredients
Adds to Ingredient instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|description|`string`|
|restInStock|`number`|
|price|`number`|

Example request:
```json
{
    "price": 100,
    "title": "Японский рис",
    "restInStock": 500,
    "description": "Круглозерный японский рис, более твердый, чем другие круглозерные сорта."
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /ingredients/:id
Returns a Ingredient instance by id.

Example response:
```json
{
    "price": 100,
    "_id": "5dd098570cdb777077a0bec3",
    "title": "Японский рис",
    "restInStock": 500,
    "description": "Круглозерный японский рис, более твердый, чем другие круглозерные сорта.",
    "__v": 0
}
```
### PUT /ingredients/:id
Updates to Ingredient instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|description|`string`|
|restInStock|`number`|
|price|`number`|

Example request:
```json
{
    "price": 1002,
    "title": "Японский рис",
    "restInStock": 500,
    "description": "Круглозерный японский рис, более твердый, чем другие круглозерные сорта."
}
```
Example response:
```json
{
    "message": "Successfully updated!"
}
```
### DELETE /ingredients/:id
Delete a Ingredient instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```

## Dish API
### GET /dishes
Returns all dish instance.

Example response:
```json
[
    {
        "ingredients": [
            {
                "price": 10,
                "_id": "5dd09c2a0cdb777077a0bec8",
                "title": "Творог",
                "restInStock": 10000,
                "description": "",
                "__v": 0
            }
        ],
        "additionalIngredients": [
            {
                "price": 40,
                "_id": "5dd1b0a91c9d440000c0d815",
                "title": "Шоколад",
                "restInStock": 450,
                "description": "Черный шоколад с высоким содержанием какао-масла",
                "__v": 0
            }
        ],
        "price": 80,
        "_id": "5dd0a0bd40d38b71a3adc7de",
        "title": "Сырники из творога",
        "description": "Bкусно",
        "category": {
            "_id": "5dd19ed91c9d440000c0d802",
            "title": "Десерты",
            "description": "мммм",
            "__v": 0
            },
        "weight": 120,
        "__v": 0
    }
]
```

### POST /dishes
Adds to Dish instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|description|`string`|
|category|`string`|
|ingredients|`array`|
|additionalIngredients|`array`|
|price|`number`|
|weight|`number`|

Example request:
```json
{
    "ingredients": ["5dd09c2a0cdb777077a0bec8"],
    "additionalIngredients": ["5dd1b0a91c9d440000c0d815"],
    "price": 80,
    "title": "Сырники из творога",
    "description": "Bкусно",
    "category": "5dd19ed91c9d440000c0d802",
    "weight": 120
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /dishes/:id
Returns a Dish instance by id.

Example response:
```json
{
    "ingredients": [
        {
            "price": 10,
            "_id": "5dd09c2a0cdb777077a0bec8",
            "title": "Творог",
            "restInStock": 10000,
            "description": "",
            "__v": 0
        }
    ],
    "additionalIngredients": [
        {
            "price": 40,
            "_id": "5dd1b0a91c9d440000c0d815",
            "title": "Шоколад",
            "restInStock": 450,
            "description": "Черный шоколад с высоким содержанием какао-масла",
            "__v": 0
        }
    ],
    "price": 80,
    "_id": "5dd0a0bd40d38b71a3adc7de",
    "title": "Сырники из творога",
    "description": "Bкусно",
    "category": {
        "_id": "5dd19ed91c9d440000c0d802",
        "title": "Десерты",
        "description": "мммм",
        "__v": 0
        },
    "weight": 120,
    "__v": 0
}
```
### PUT /dishes/:id
Updates to Dish instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|description|`string`|
|category|`string`|
|ingredients|`array`|
|additionalIngredients|`array`|
|price|`number`|
|weight|`number`|

Example request:
```json
{
    "ingredients": ["5dd09c2a0cdb777077a0bec8"],
    "additionalIngredients": ["5dd1b0a91c9d440000c0d815"],
    "price": 80,
    "title": "Сырники из творога",
    "description": "Bкусно",
    "category": "5dd19ed91c9d440000c0d802",
    "weight": 120
}
```
Example response:
```json
{
    "message": "Successfully updated!"
}
```
### DELETE /dishes/:id
Delete a Dish instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```

## Category Menu API
### GET /categoryMenus
Returns all CategoryMenu instance.

Example response:
```json
[
    {
        "_id": "5dd0a8c6084bb372ff2e619b",
        "title": "Салаты",
        "description": "",
        "__v": 0
    },
    {
        "_id": "5dd19ed91c9d440000c0d802",
        "title": "Десерты",
        "description": "мммм",
        "__v": 0
    }
]
```

### POST /categoryMenus
Adds to CategoryMenu instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|description|`string`|

Example request:
```json
{
    "title": "Десерты",
    "description": "мммм"
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /categoryMenus/:id
Returns a CategoryMenu instance by id.

Example response:
```json
{
    "_id": "5dd0a8c6084bb372ff2e619b",
    "title": "Салаты",
    "description": "",
    "__v": 0
}
```
### PUT /categoryMenus/:id
Updates to CategoryMenu instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|description|`string`|

Example request:
```json
{
    "title": "Салаты",
    "description": ""
}
```
Example response:
```json
{
    "message": "Successfully updated!"
}
```
### DELETE /categoryMenus/:id
Delete a CategoryMenu instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```

## Invoice API
### GET /invoices
Returns all Invoice instance.

Example response:
```json
[
    {
        "invoicePrice": 250,
        "_id": "5dd279e270bead896a12b181",
        "invoiceItems": [
            {
                "price": 200,
                "_id": "5dd279e270bead896a12b183",
                "title": "Test1"
            },
            {
                "price": 50,
                "_id": "5dd279e270bead896a12b182",
                "title": "Test2"
            }
        ],
        "created_at": "2019-11-18T11:00:50.005Z",
        "__v": 0
    }
]
```

### POST /invoices
Adds to Invoice instance in a database.

|Param|Type|
|--|--|
|invoiceItems|`array`|
|invoicePrice|`number`|

Example request:
```json
{
    "invoicePrice": 250,
    "invoiceItems": [
        {
            "price": 200,
            "_id": "5dd279e270bead896a12b183",
            "title": "Test1"
        },
        {
            "price": 50,
            "_id": "5dd279e270bead896a12b182",
            "title": "Test2"
        }
    ]
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /invoices/:id
Returns a Invoice instance by id.

Example response:
```json
{
    "invoicePrice": 250,
    "_id": "5dd279e270bead896a12b181",
    "invoiceItems": [
        {
            "price": 200,
            "_id": "5dd279e270bead896a12b183",
            "title": "Test1"
        },
        {
            "price": 50,
            "_id": "5dd279e270bead896a12b182",
            "title": "Test2"
        }
    ],
    "created_at": "2019-11-18T11:00:50.005Z",
    "__v": 0
}
```

### DELETE /invoices/:id
Delete a Invoice instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```

## Order API
### GET /orders
Returns all Order instance.

Example response:
```json
[
    {
        "orderPrice": 100,
        "onKitchen": false,
        "completed": false,
        "_id": "5dd15d91f3c8a07baa5ee90f",
        "staff": {
            "isAdmin": false,
            "_id": "5dd071bc30a9086cae1b76b5",
            "email": "user@test.com",
            "password": "$2b$10$pq0QweG6QwTDus6VzAh3YekwJLWE6zOdPkfGKeXCDULAupWRCWMky",
            "__v": 0
        },
        "table": null,
        "orderItems": [
            {
                "ingredients": [
                    {
                        "price": null,
                        "_id": "5dd09c790cdb777077a0becc",
                        "title": "Сахар",
                        "restInStock": null,
                        "description": "",
                        "__v": 0
                    },
                    {
                        "price": null,
                        "_id": "5dd0a21d40d38b71a3adc7e2",
                        "title": "Белый хлеб",
                        "restInStock": null,
                        "description": "",
                        "__v": 0
                    }
                ],
                "price": 100,
                "_id": "5dd15d91f3c8a07baa5ee910",
                "title": "aaaa"
            }
        ],
        "created_at": "2019-11-17T14:47:45.316Z",
        "updated_at": "2019-11-17T14:47:45.316Z",
        "__v": 0
    }
]
```

### POST /orders
Adds to Order instance in a database.

|Param|Type|
|--|--|
|staff|`string`|
|table|`number`|
|orderItems|`array`|
|orderPrice|`number`|
|onKitchen|`boolean`|
|completed|`boolean`|

Example request:
```json
{
    "orderPrice": 100,
    "onKitchen": true,
    "completed": false,
    "staff": "5dd071bc30a9086cae1b76b5",
    "table": 12,
    "orderItems": ["5dd09c790cdb777077a0becc"]
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /orders/:id
Returns a Order instance by id.

Example response:
```json
{
    "orderPrice": 100,
    "onKitchen": false,
    "completed": false,
    "_id": "5dd15d91f3c8a07baa5ee90f",
    "staff": {
        "isAdmin": false,
        "_id": "5dd071bc30a9086cae1b76b5",
        "email": "user@test.com",
        "password": "$2b$10$pq0QweG6QwTDus6VzAh3YekwJLWE6zOdPkfGKeXCDULAupWRCWMky",
        "__v": 0
    },
    "table": null,
    "orderItems": [
        {
            "ingredients": [
                {
                    "price": null,
                    "_id": "5dd09c790cdb777077a0becc",
                    "title": "Сахар",
                    "restInStock": null,
                    "description": "",
                    "__v": 0
                },
                {
                    "price": null,
                    "_id": "5dd0a21d40d38b71a3adc7e2",
                    "title": "Белый хлеб",
                    "restInStock": null,
                    "description": "",
                    "__v": 0
                }
            ],
            "price": 100,
            "_id": "5dd15d91f3c8a07baa5ee910",
            "title": "aaaa"
        }
    ],
    "created_at": "2019-11-17T14:47:45.316Z",
    "updated_at": "2019-11-17T14:47:45.316Z",
    "__v": 0
}
```
### PUT /orders/:id
Updates to Order instance in a database.

|Param|Type|
|--|--|
|staff|`string`|
|table|`number`|
|orderItems|`array`|
|orderPrice|`number`|
|onKitchen|`boolean`|
|completed|`boolean`|

Example request:
```json
{
    "orderPrice": 100,
    "onKitchen": true,
    "completed": false,
    "staff": "5dd071bc30a9086cae1b76b5",
    "table": 12,
    "orderItems": ["5dd09c790cdb777077a0becc"]
}
```
Example response:
```json
{
    "message": "Successfully updated!"
}
```
### DELETE /orders/:id
Delete a Order instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```

## News API
### GET /news
Returns all News instance.

Example response:
```json
[
    {
        
        "_id": "5dd29010c322138cf5c8a49e",
        "title": "Title1",
        "text": "Text1",
        "img": "Url img1",
        "__v": 0
    },
    {
        "_id": "5dd2901dc322138cf5c8a49f",
        "title": "Title2",
        "text": "Text2",
        "img": "Url img2",
        "__v": 0
    }
]
```

### POST /news
Adds to News instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|text|`string`|
|img|`string`|

Example request:
```json
{
    "title": "Title2",
    "text": "Text2",
    "img": "Url img2"
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /news/:id
Returns a News instance by id.

Example response:
```json
{
    "_id": "5dd2901dc322138cf5c8a49f",
    "title": "Title2",
    "text": "Text2",
    "img": "Url img2",
    "__v": 0
}
```
### PUT /news/:id
Updates to News instance in a database.

|Param|Type|
|--|--|
|title|`string`|
|text|`string`|
|img|`string`|

Example request:
```json
{
    "title": "Title2",
    "text": "Text2",
    "img": "Url img2"
}
```
Example response:
```json
{
    "message": "Successfully updated!"
}
```
### DELETE /news/:id
Delete a News instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```


[]: https://f1-server-api.herokuapp.com/

## Reserved API
### GET /reserved
Returns all Reserved instance.

Example response:
```json
[
    {
        "table": 2,
        "client": "Test",
        "_id": "5dd31f81d55c9a23c484041c",
        "date": "2019-11-29T22:00:00.000Z",
        "phone": "0676767676",
        "__v": 0
    }
]
```

### POST /reserved
Adds to Reserved instance in a database.

|Param|Type|
|--|--|
|date|`string`|
|table|`number`|
|client|`string`|
|phone|`string`|

Example request:
```json
{
    "table": 2,
    "client": "Test",
    "date": "2019-11-29T22:00:00.000Z",
    "phone": "0676767676"
}
```
Example response:
```json
{
    "message": "Successfully created!"
}
```

### GET /reserved/:id
Returns a Reserved instance by id.

Example response:
```json
{
    "table": 2,
    "client": "Test",
    "_id": "5dd31f81d55c9a23c484041c",
    "date": "2019-11-29T22:00:00.000Z",
    "phone": "0676767676",
    "__v": 0
}
```
### PUT /reserved/:id
Updates to Reserved instance in a database.

|Param|Type|
|--|--|
|date|`string`|
|table|`number`|
|client|`string`|
|phone|`string`|

Example request:
```json
{
    "table": 2,
    "client": "Test",
    "date": "2019-11-29T22:00:00.000Z",
    "phone": "0676767676"
}
```
Example response:
```json
{
    "message": "Successfully updated!"
}
```
### DELETE /reserved/:id
Delete a Reserved instance by id.

Example response:
```json
{
    "message": "Successfully deleted!"
}
```
