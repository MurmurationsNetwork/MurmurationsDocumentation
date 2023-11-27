# Introduction

## What is Murmurations?

Murmurations is a distributed data sharing network built to help connect regenerative economy projects and organizations and make them visible to the world and each other.

The network is comprised of:

1. [_**Nodes**_](/about/common-terms.html#node) and other data hosts that share data in the network
2. An [_**index**_](/about/common-terms.html#index) that keeps track of what data is available in the network, and where it is located
3. [_**Aggregators**_](/about/common-terms.html#aggregator) that collect data from the network and display it in various ways
4. A [_**library**_](/about/common-terms.html#library) of schemas that describe the data in the network

To enable these entities to work together, Murmurations provides:

- A protocol for defining and exchanging data about and amongst organizations, based on existing standards such as [JSON Schema](https://json-schema.org/understanding-json-schema/) and [REST APIs](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- An [index](https://test-index.murmurations.network/v2/nodes), a [library](https://test-library.murmurations.network/v2/schemas) and a user-friendly data host (the [Murmurations Profile Generator](https://test-tools.murmurations.network/profile-generator)) which enables organizations to quickly add themselves to the network
- [Open source plug-ins and other code](https://github.com/MurmurationsNetwork) to make it as easy as possible to use, share and contribute data to the network in a decentralized way

The initial use case for Murmurations was to facilitate decentralized mapping of purpose-driven and solidarity economy organizations and projects.

Further historical background is in the 2019 [Murmurations Whitepaper](https://murmurations.network/wp-content/uploads/2019/09/murmurations-white-paper-v0.1.0.pdf).

## How does it work?

The Murmurations protocol enables individuals and organizations (nodes) to create [_**profiles**_](/about/common-terms.html#profile) about themselves in order to easily share information with aggregators, who create [_**schemas**_](/about/common-terms.html#schema) to define the data they need to create maps, directories and content aggregators.

A library stores details of the schemas and the fields (data points) of which they are composed. A node obtains a schema from the library to determine the data needed to create a profile. You can [try out the Murmurations Profile Generator](https://test-tools.murmurations.network/profile-generator) to create a profile based on the schemas currently available in the library.

An index keeps track of nodes based on the schemas linked to their profiles. Whenever a node updates its profile it should tell the index. Aggregators regularly query the index for profile changes by nodes they want to track by referencing their schemas, enabling them to provide accurate and timely information in their maps, directories and content aggregators.

## Why Murmurations?

![Murmurations Overview Infographic](/murmurations_overview.png)
