# Use Cases

## What can you do with Murmurations?

### End users

For end users Murmurations main use is for collaborative mapping. You can use Murmurations to:

- Build a map of X (e.g., vegan shops) in a specific area
- Build a map of a network of members

See our post on [collaborative mapping](https://murmurations.network/2023/08/22/collaborative-mapping/) for step-by-step instructions and background on the advantages of collaborative mapping.

### Developers

For developers Murmurations offers a flexible protocol for decentralised data sharing, which encourages the re-use of existing fields for greater interoperability and also supports the creation of new fields and [schemas](/guides/create-a-schema.html).

See the background on [composable ontologies](/about/ontology-composability.html) for more details on the advantages of the Murmuration protocol's flexible ontology and composable data approach.

Developers can use Murmurations to create custom schemas and to share data for any type of object. For example, the Community Currency Alliance developed a custom [schema for complimentary currencies](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/complementary_currencies-v2.0.0.json) featuring a range of fields for their specific needs, which enabled them to build a highly filterable, open source [map of complementary currency projects](https://map.currency.community/) to which others can contribute by creating new profiles.

Developers can also use the [Index API](/developers/index-api.html) to search the available data and to find and access the distributed data profiles. They can then use this data to populate their own maps, directories and other aggregators.

Developing with Murmurations helps build the open data commons and encourage the use of decentralised, interoperable data, in place of centralized data silos.

### Data scientists and knowledge curators

Murmurations provides the perfect framework for open data sharing, no matter what kind of data is being shared.

Suppose you had a network of farmers and wanted to encourage the open sharing of fertiliser applications vs crop nutrition and yields to encourage better farming practices to increase food quality and crop yields. This would be easy using Murmurations and the data would remain open for others to see and use rather than locked up on a corporate server.

The process would work like this:

- Determine the data you want to record, by consulting the stakeholders involved
- Define the field names and descriptions, and create any new fields in the field library
- [Create a new schema](/guides/create-a-schema.html) containing the data fields you created
- Get the farmers to record their data by [creating profiles](/guides/create-a-profile.html) for their farms and fields
- Search the index for data matching your schema to find, access, analyse and present the results and conclusions in your chosen format

Murmurations also supports [relationships](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/fields/relationships.json) which can be used to build sophisticated networks of data in the form of [triples](https://en.wikipedia.org/wiki/Semantic_triple).
