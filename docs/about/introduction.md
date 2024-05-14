# Introduction

## What is Murmurations?

Murmurations is a distributed data sharing protocol that describes a method for coordinating the storage, indexing and retrieval of data over a distributed network. The ultimate goal of Murmurations is to facilitate collaboration at scale by enabling interoperable data sharing across platforms and between networks, all while providing individuals and other data creators control over their data.

The distributed data sharing network is comprised of:

1. [_**Nodes**_](/about/common-terms.html#node) and other data hosts that share data in the network
2. [_**Indexes**_](/about/common-terms.html#index) that keep track of what data is available in the network and where it is located
3. [_**Aggregators**_](/about/common-terms.html#aggregator) that collect data from the network and display it in various ways
4. [_**Libraries**_](/about/common-terms.html#library) of schemas that describe the data in the network

To enable these entities to work together, the Murmurations team has created:

- A protocol for defining and exchanging data based on existing standards such as [JSON Schema](https://json-schema.org/understanding-json-schema/) and [REST APIs](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [Open source plug-ins and other code](https://github.com/MurmurationsNetwork) to make it as easy as possible to use, share and contribute data to the network

The initial use case for Murmurations is to facilitate decentralized mapping of purpose-driven solidarity economy organizations and projects, making them visible to the world and each other.

Further information about the distributed data sharing protocol can be found in the [Murmurations White Paper](https://murmurations.network/wp-content/uploads/2024/04/Murmurations-White-Paper-v1.0.pdf).

## How does it work?

The Murmurations protocol enables individuals and organizations (nodes) to create [_**profiles**_](/about/common-terms.html#profile) about themselves in order to easily share information with aggregators, who create [_**schemas**_](/about/common-terms.html#schema) to define the data they need to create maps, directories and content aggregators.

A library stores details of the schemas and the fields (data points such as `name`, `geolocation`, etc.) of which they are composed. A node obtains a schema from the library to determine the data needed to create a profile. You can [try out the Murmurations Profile Generator](https://test-tools.murmurations.network/profile-generator) to create a profile based on the schemas currently available in the library.

An index keeps track of nodes based on the schemas linked to their profiles. Whenever a node updates its profile it should tell the index. Aggregators regularly query the index for profile changes by nodes they want to track by referencing their schemas, enabling them to provide accurate and timely information in their maps, directories and content aggregators.

## Why Murmurations?

![Murmurations Overview Infographic](/murmurations_overview.png)
