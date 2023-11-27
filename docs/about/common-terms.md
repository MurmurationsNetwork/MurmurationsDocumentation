# Common Terms

Here we define some of the common terms we use when working with Murmurations.

## Aggregator

An aggregator is any site which uses information from the Murmurations index to present users with a collection of data, such as a map or directory. The Collaborative Map Builder is a WordPress plugin which makes it simple for content aggregators to create maps and directories using data from the Murmations index. See for example, the [Community Currency Alliance Map](https://map.currency.community/) which features details of community currency projects around the world, all of whom have published Murmurations profiles according to the [Complementary Currency schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/complementary_currencies-v2.0.0.json), in the library. See more details about this WordPress plugin in the [developer docs](/developers/wp-aggregator.html).

## Field

A field is a unit of data in Murmurations. It's like the header column in a spreadsheet or database table: first name, last name, email address, description, etc. Fields define the type (e.g., string, number, date, etc.) and validation rules for data. See the [`primary_url` field](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/fields/primary_url.json) as an example.

## Index

The Murmurations index keeps track of all the nodes (via their profiles) in the network. Whenever an entity updates its profile it tells the index. Aggregators frequently query the index to find profiles using their schemas along with changes to existing profiles, enabling them to provide up-to-date information in their maps, directories and content aggregators.

## Library

[The Murmurations library](https://github.com/MurmurationsNetwork/MurmurationsLibrary/tree/main) stores a list of Murmurations [schemas](#schema) and [fields](#field). Anyone can define a new schema or field and create a pull request to have it added it to the library.

## Murmurations Protocol

The Murmurations protocol, which we also just call Murmurations, is a standardised, open source set of rules designed to enable decentralised collaboration at scale. Murmurations uses existing standards such as [JSON Schema](https://json-schema.org/) to help people, projects and organisations discover each other and share data across platforms and between networks. The ultimate aim of Murmurations is to accelerate the global transition to the [regenerative economy](https://capitalinstitute.org/8-principles-regenerative-economy/).

## Node

A node is an entity (person, project, organisation, event or [smart object](https://en.wikipedia.org/wiki/Smart_object)) that has a [profile](#profile) which is registered in the Murmurations [index](#index).

## Profile

A profile is a [JSON](https://en.wikipedia.org/wiki/JSON) document describing a [node](#node) (organization, person, project, etc.), using one or more [schemas](#schema). Here's an example [profile describing The Open Co-op](https://www.open.coop/open.json), using the [Organizations schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/organizations_schema-v1.0.0.json). Think of a schema as a form template and each instance of a completed form as a profile. Multiple profiles can be created against a schema, just like multiple rows of data are stored in a database table or spreadsheet and arranged by their [fields](#field).

## Profile Generator

The [Murmurations Profile Generator](https://tools.murmurations.network/profile-generator), or MPG for short, is a web application for creating profiles. MPG automatically converts schemas in the [library](#library) into forms to enable people to create the JSON documents for their profiles. MPG can also host these JSON documents, which may seem an odd way to manage decentralised data, but is an important feature which makes the protocol accessible to people who can't host their own profile data.

## Schema

A schema is composed of multiple [fields](#field) and is described using [JSON Schema](https://json-schema.org/), which defines a collection of data fields and explains how they should be used. Schemas validate JSON documents to check the data entered in a [profile](#profile) matches the expected format. See the [Organizations Schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/organizations_schema-v1.0.0.json) as an example.
