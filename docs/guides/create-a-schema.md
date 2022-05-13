# Creating a Murmurations schema

:construction: Work In Progress :construction:

## Overview

A **schema** is a JSON document that describes data that is shared in the network. Murmurations schemas use the [JSON Schema](https://json-schema.org/) standard. Schemas contain **metadata**, which is information about the schema itself, and **fields** that describe what particular data points mean and how they are structured.

An example of a schema can be seen in the [Murmurations Map schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/master/schemas/murmurations_map-v1.json).

There are two ways that fields can be defined in a Murmurations schema:

 - **Library fields** are pre-defined fields that are linked into the schema, and intended to be *interoperable* among many different sources of data and data users
 - **Custom fields** are defined in the schema document itself, and are only intended to be used in one schema

 Whenever possible, it is encouraged to use library fields in your schema to support the goal of data interoperabilty, and to make it easier for nodes to provide data to multiple networks simultaneously.

## Step 1: define your fields

The first step in creating a schema is to decide what data fields will be included in it. This may be a combination of custom fields that will only ever be used in your schema, existing interoperable fields in the [Murmurations Library](https://github.com/MurmurationsNetwork/MurmurationsLibrary/fields), and new fields that should be added to the library.

Don't hesitate to reach out via the [contact form on Murmurations.network](https://murmurations.network/contact/), the [Murmurations Forum](https://murmurations.flarum.cloud/d/14-creating-murmurations-schemas), or the Murmurations [Telegram channel](https://t.me/+SS7GuP5kMDf-zx6l) for assistance in building your schema and fields.

## Step 2: Draft the schema document

Draft your schema following the example format of the [Murmurations Map schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/master/schemas/murmurations_map-v1.json).

### Add fields

Add your fields to the `properties` section of the schema.

Use `$ref`s to point to any existing fields in the library you want to use, or define the new fields you need directly in the schema. Reusing existing fields from the library whenever possible makes it easier for nodes using your schema to be compatible with other schemas without needing to re-enter the same data twice.

Make sure your schema validates using the [JSON Schema Validator](https://www.jsonschemavalidator.net/). Select _Schema Draft v4_ from the "Select schema" dropdown menu and then paste your schema into the "Input JSON" text area.

#### Required fields

If some fields should be required for anyone filling in data for your schema, add the names of those fields to the `required` property. Use sparingly, since this might make it more difficult for people to use your schema!

### Add metadata

Near the beginning of the schema you will find four metadata properties in the main schema object:

 - **$schema** A reference to the version of the JSON-Schema standard that will be used to interpret this schema. You can probably leave this as is.
 - **id** The final canonical URI of the schema in the Murmurations library. You can leave most of this as is in the example, replacing the final part with the filename of your schema (see below).
 - **title** A human-readable title for your schema. This will appear in various places where the schema is used, including in the nod plugin and the Murmurations Profile Generator, where people can choose to add information that matches your schema to their profiles.
 - **description** A human-readable description of your schema and what it's for.

 Example:

```
"$schema": "https://json-schema.org/draft-04/schema#",
"id": "https://cdn.murmurations.network/schemas/murmurations_map-v1.json",
"title": "Murmurations Map",
"description": "Regenerative economy orgs - Select this schema to show your profile on the Murmurations map.",
```
Further in the schema there is a `metadata` section, with more information about the schema. This metadata is not part of the JSON-Schema standard, but is used in Murmurations schemas to provide more detail about the context of schemas.

The `creator` metadata property contains information about the organisation or entity that created the schema. `Name` should be the name of the organisation, and `url` is a web address where someone could find out more about the organisation.

The `schema` metadata property contains information about the schema itself, including the name, version, purpose, and a url where there might be more information about the schema.

```
metadata": {
  "creator": {
    "name": "Murmurations Network",
    "url": "https://murmurations.network/"
  },
  "schema": {
    "name": "test_schema",
    "version": "1.0.0",
    "purpose": "A test schema to present profiles on the test map.",
    "url": "https://murmurations.network/schemas/test_schema"
  }
},
```

### File names and version numbers

Murmurations schemas use [semver](https://semver.org/) versioning. The version number appears at the end of the schema file name, and in the `version` metadata property.

The semver format is major.minor.patch (e.g. `my_schema-v1.1.1.json`). Any change to the major version number represents a breaking change to data validated against the schema. Breaking change would be anything that could cause data that was valid against the previous version to be invalid against the new version (eg. smaller max size, removed enum values, more restrictive regex pattern, new required fields).

A minor change can be any non-breaking change that affects the data (or potential data) in any way (eg new non-required fields, additional enum values, etc.). A patch would be a change to parts of the schema that don't change the data, such as rewording field descriptions (presuming the meaning of the field stays equivalent), schema annotations, re-ordering fields, or moving fields between the library and the schema itself (eg, moving a field definition out of the schema and into the library).

The file name should be the name of your schema with underscores as word separators, followed by a hyphen and the semver version number
`my_schema-v1.1.1.json` or `solidarity_economy_schema-v1.1.1.json`

## Step 3: Submit your draft

If you're comfortable using git, you can submit your new schema directly with a pull request to the library repo by:
1. Fork [library repo](https://github.com/MurmurationsNetwork/MurmurationsLibrary) and create a new branch, including the name of your schema in the branch name
2. Add your new schema in the `/schemas/` directory of the branch. Name the schema file using underscores as word separators, followed by a hyphen and a semver-style version number. Example: `my_amazing_schema-v0.0.1.json`.
3. If there are fields that you would like to add to the Murmurations library and use in your schema, add JSON files for those fields to the `/fields/` directory in the repo, following the template of other library fields. For more details see [creating a library field]().
4. Create a pull request to the `staging` branch in the upstream repo. This will notify the Murmurations maintainers. We'll take a look at your schema to make sure it's correctly put together and follows best practices, and review any fields you're submitting to the library. It's possible we will make suggestions for how to update the schema to improve interoperability.
5. Once your updates have been approved and merged into the repo, your schema will be live in the test version of the library. This means you can try creating profiles based on the schema in the test version of the Murmurations Profile Generator.
6. Once testing is done, the staging branch will be merged into the production branch of the repo and your schema will be live and available to nodes in the network.

If you are not comfortable using git, you can submit your draft schema directly to the Murmurations library maintainers, and we will review your schema and add it to the repo for you.

##  Step 4: Testing your schema - an example

You can use [JSON Schema validator](https://www.jsonschemavalidator.net/) to test your new schema and make sure it's working as intended.

In this example we are going to test the [Complementary Currencies Schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/master/schemas/complementary_currencies-v1.json).

1. Copy the full schema code from the [Complementary Currencies Schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/master/schemas/complementary_currencies-v1.json) and paste it (in place of the existing code) on the box on the left on https://www.jsonschemavalidator.net/

You will see a screen like this indicating that the empty schema is giving errors already because it is missing the 3 required fields.

![](https://murmurations.network/wp-content/uploads/2021/02/Screenshot-2021-02-24-at-21.01.33.png)

2. Paste the example profile (JSON object) below into the "Input JSON" text area on the right.

```
{
	"name": "Just testing",
    "url": "https://test.com",
    "area_served": "national",
    "linked_schemas": [
      "complementary_currencies-v1" 
      ]
}
```

You should see the profile validates against the schema, like below:

![](https://murmurations.network/wp-content/uploads/2021/02/Screenshot-2021-02-24-at-21.08.26.png)

The validator ignores all the other fields in the schema because they are not required.

You can keep adding data to test your profile against the other fields, for example by adding data for the `"area_served"`field:

![json-validator-additional-field](https://murmurations.network/wp-content/uploads/2021/02/Screenshot-2021-02-24-at-21.36.54.png)

## Questions?

If you need help setting up your schema or if you have any questions, please post them at the [Murmurations Forum](https://murmurations.flarum.cloud/d/14-creating-murmurations-schemas).
