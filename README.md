# Planet Api

### Setup
Create .env
````shell
cp .env.example .env
````

Build and up containers
```shell
docker-compose up --build -d
```

Run Tests
````shell
docker-compose exec node npm test
````

Start Server
````shell
docker-compose exec node node ./public/index.js
````

### Usages for Api
`host`: localhost/planet

#### Create Planet
- Make **POST** request to *host* with:
````json
{
    "name": "Tatooine",
    "climate": "arid",
    "ground": "terrain"
}
````

response
````json
{
    "films": [],
    "_id": "60cfc905ae5f690449b34375",
    "name": "Tatooine",
    "ground": "arid",
    "climate": "terrain",
    "createdAt": "2021-06-20T23:02:29.405Z",
    "updatedAt": "2021-06-20T23:02:29.405Z",
    "__v": 0,
    "id": "60cfc905ae5f690449b34375"
}
````

#### Find Planet By ID or Name
- Make a **GET** request to `localhost/planet/find?id=60cfc905ae5f690449b34375` find by **ID**
- Make a **GET** request to `localhost/planet/find?name=Tatooine` find by **Name**

#### Delete a Planet
- Make a **DELETE** request to `localhost/planet/60cfc905ae5f690449b34375`

#### Get All Planets
- Make a **GET** request to `localhost/planet`

**response**:
````json
[
    {
        "films": [
            {
                "title": "A New Hope",
                "release_date": "1977-05-25"
            },
            {
                "title": "Attack of the Clones",
                "release_date": "2002-05-16"
            },
            {
                "title": "Return of the Jedi",
                "release_date": "1983-05-25"
            },
            {
                "title": "The Phantom Menace",
                "release_date": "1999-05-19"
            },
            {
                "title": "Revenge of the Sith",
                "release_date": "2005-05-19"
            }
        ],
        "_id": "60cfc7f6d228d1042823788b",
        "name": "Tatooine",
        "ground": "arid",
        "climate": "terrain",
        "createdAt": "2021-06-20T23:02:29.405Z",
        "updatedAt": "2021-06-20T23:02:29.405Z",
        "__v": 5,
        "id": "60cfc7f6d228d1042823788b"
    }
]
````

#### References:
[cfjedimaster/SWAPI-Wrapper](https://github.com/cfjedimaster/SWAPI-Wrapper)
