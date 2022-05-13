# Murmurations Library API

The purpose of the Library API is to replicate the list of fields and schemas so that they are stored in at least one more location, thus removing the GitHub library repo as a single point of failure.

The Index and Murmurations profile generators (MPGs) can access the schema list from the Library and then download the schemas from our CDN.

The service running the Library API will regularly synchronize with the GitHub library repo to ensure it is up-to-date with the list of fields and schemas on both the main (for production environment) and staging (for test environment) branches.

## Raw Data Endpoints

Schemas and fields can be downloaded directly from the Murmurations CDN. For example, a test schema can be accessed at:

[https://test-cdn.murmurations.network/schemas/test_schema-v2.0.0.json](https://test-cdn.murmurations.network/schemas/test_schema-v2.0.0.json)

And the Name field referenced in the above schema can be accessed at:

[https://test-cdn.murmurations.network/fields/name.json](https://test-cdn.murmurations.network/fields/name.json)

## Index & Node UI Endpoints

> :link: BASE URL
>
> _Test Environment_  
> https://test-library.murmurations.network/v1/{endpoint}
>
> _Production Environment_  
> https://library.murmurations.network/v1/{endpoint}
> 
> :blue_book: API Docs
> 
> [https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/LibraryAPI/1.0](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/LibraryAPI/1.0)

### [`GET /schemas`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/LibraryAPI/1.0#/default/get_schemas)

#### Input

- A standard GET request with no additional parameters

> :construction: OPTIMIZATION WITH PARAMETERS
>
> When the list of schemas starts to become large, we can add parameters for searching by schema name or ID, schemas using a specific field, date/time last updated, etc.

#### Output

- JSON array of schemas with some basic information about them

```json
{
  "data": [
    {
      "title": "Test Schema",
      "description": "Just for testing.",
      "name": "test_schema-v2.0.0",
      "url": "https://murmurations.network/schemas/test_schema"
    }
  ]
}
```

- `title` is the same as defined in the schema
- `description` is the same as defined in the schema
- `name` is the filename (without the `.json` extension) of the schema as stored in the library
- `url` is a link to a web page where one can learn more about the schema from its creators. The web page should include information about the schema's purpose, a CHANGELOG describing changes made between versions and any other relevant information that could be useful to the node operator who is considering to use the schema.

All of the information above is pulled from the schema as it is recorded in the library, either from its JSON Schema-related contents (`title` & `description`) or from its `metadata.schema` (`name`, `version`, `url`):

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "$id": "https://test-cdn.murmurations.network/schemas/test_schema-v2.0.0.json",
  "title": "Test Schema",
  "description": "Just for testing.",
  "type": "object",
  "properties": {
    "linked_schemas": {
      "$ref": "../fields/linked_schemas.json"
    },
    "name": {
      "$ref": "../fields/name.json"
    },
    "latitude": {
      "$ref": "../fields/latitude.json"
    },
    "longitude": {
      "$ref": "../fields/longitude.json"
    }
  },
  "required": [
    "linked_schemas",
    "name",
    "latitude",
    "longitude"
  ],
  "metadata": {
    "creator": {
      "name": "Murmurations Network",
      "url": "https://murmurations.network/"
    },
    "schema": {
      "name": "test_schema-v2.0.0",
      "purpose": "A test schema for creating test profiles.",
      "url": "https://murmurations.network/schemas/test_schema"
    }
  }
}
```
