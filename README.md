# Server API
* [User API](#user-api)
* [Ingredient API](#ingredient-api)

## User API
### GET /user
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

### POST /user
Adds to User instance in a database.
Returns a User instance.

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
    "isAdmin": true,
    "_id": "5dd0713430a9086cae1b76b3",
    "email": "admin3@test.com",
    "password": "$2b$10$TMLDo9vvdBagWID6QmlwEuqujGF.I0Bhx3JYhrkqvUPpsquNU2a46",
    "__v": 0
}
```

### GET /user/:id
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

### DELETE /user/:id
Delete a User instance by id.

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
## Ingredient API
### GET /ingredient
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

### POST /ingredient
Adds to Ingredient instance in a database.
Returns a Ingredient instance.

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
    "price": 100,
    "_id": "5dd098570cdb777077a0bec3",
    "title": "Японский рис",
    "restInStock": 500,
    "description": "Круглозерный японский рис, более твердый, чем другие круглозерные сорта.",
    "__v": 0
}
```

### GET /ingredient/:id
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
### PUT /ingredient/:id
Updates to Ingredient instance in a database.
Returns a Ingredient instance.

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
    "price": 1002,
    "_id": "5dd098570cdb777077a0bec3",
    "title": "Японский рис",
    "restInStock": 500,
    "description": "Круглозерный японский рис, более твердый, чем другие круглозерные сорта.",
    "__v": 0
}
```
### DELETE /ingredient/:id
Delete a Ingredient instance by id.

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
