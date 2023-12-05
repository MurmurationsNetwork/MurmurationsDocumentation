# Murmurations Library API

## Library API Documentation :orange_book:

[**https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/LibraryAPI/2.0.0**](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/LibraryAPI/2.0.0)

The purpose of the Library API is to serve up all of the [Schemas](/about/common-terms.html#schema) in the [library repository](https://github.com/MurmurationsNetwork/MurmurationsLibrary), which is for storing and curating Murmurations schemas and fields. Schemas are created by specific networks or interest groups, and they are added to this repo by pull request. Learn more about creating schemas in the [guide](/guides/create-a-schema.md).

The service running the Library API will regularly synchronize with the library repo to ensure it is up-to-date with the schemas and linked fields on both the `main` (for the production environment) and `test` (for the test environment) branches.

Schemas can be downloaded directly through the Library API. For example, the Organizations schema can be accessed at:

[https://library.murmurations.network/v2/schemas/organizations_schema-v1.0.0](https://library.murmurations.network/v2/schemas/organizations_schema-v1.0.0)
