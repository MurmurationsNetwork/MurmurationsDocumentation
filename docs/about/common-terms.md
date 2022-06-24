# Common Terms

:construction: Work In Progress :construction:

Here we define some of the common terms we use when working with Murmurations.

### Aggregator:
TODO - needs defining

### Index:
The Murmurations Index keeps track of all the Nodes (via their Profiles) in the network. Whenever someone (or something) updates its Profile it tells the Index. Aggregators frequently query the Index to find Profiles using their Schemas along with changes to existing Profiles, enabling them to provide up to date information in their maps, directories and content aggregators.

### Library:
[The Murmurations Library](https://github.com/MurmurationsNetwork/MurmurationsLibrary) stores a list of Murmurations Schemas and data fields.
Anyone can define a new Schema, or data field, and create a pull request to have it added it to the Library.

### Murmurations Protocol:
The Murmurations Protocol, which we also just call Murmurations, is a standardised, open source set of rules designed to enable decentralised collaboration at scale. Murmurations uses existing standards including [JSON Schema](https://json-schema.org/), [Schema.org](https://schema.org/), [RSS](https://en.wikipedia.org/wiki/RSS) and [JSON-LD](https://json-ld.org/) to help people, projects and organisations discover each other and share data across platforms and between networks. The ultimate aim of Murmurations is to accelerate the global transition to the [regenerative economy](https://capitalinstitute.org/8-principles-regenerative-economy/).

### Node:
A Node is an entity (person, project, organisation, event or smart object) that has a Profile which is registered in the Murmurations Index.

### Profile:
A Profile is a [JSON](https://en.wikipedia.org/wiki/JSON) document describing a Node (person, project, etc.), using one or more Schemas. [Here's an example Murmurations Profile](https://www.open.coop/open.json) describing The Open Co-op, using the [Murmurations Map schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/master/schemas/murmurations_map-v1.json).

### Profile Generator:
The [Murmurations Profile Generator](https://main-profiles.murmurations.network), or MPG for short, is a web application for creating Profiles. MPG automatically converts Schemas in the Library into forms to enable people to create the JSON documents for their Profiles. MPG can also host these JSON documents, which may seem an odd way to manage decentralised data, but is an important feature which makes the protocol accessible to people who can't host their own Profile files.

### Schema:
A schema is a [JSON Schema](https://json-schema.org/) file which defines a collection of data fields and explains how they should be used. Schemas validate JSON documents to check the data entered in a Profile matches the expected format. Schemas define the composition of fields, and fields define the type and validation rules for data. See the [Murmurations Map Schema file](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/master/schemas/murmurations_map-v1.json) as an example. 
