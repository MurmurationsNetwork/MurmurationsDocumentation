# Introduction

## What is Murmurations?

Murmurations is a distributed data sharing network built to help connect regenerative economy projects and organizations and make them visible to the world and each other.

The network is comprised of:

1. _**Nodes**_ and other data hosts that share data in the network
2. An _**index**_ that keeps track of what data is available in the network, and where it is located
3. _**Aggregators**_ that collect data from the network and display it in various ways
4. A _**library**_ of fields and schemas that describe the data in the network

To enable these entities to work together, Murmurations provides:

- A protocol for defining and exchanging data about and amongst organizations, based on existing standards such as JSON Schema, Schema.org, REST APIs and JSON-LD principles.
- A demo [index](https://test-index.murmurations.network/v2/nodes), [library](https://test-library.murmurations.network/v1/schemas), [profile generator](https://mpgv2.murmurations.network/) and a user-friendly data host where organizations can quickly add themselves to the network.
- Open source plug-ins and other code to make it as easy as possible to use, share and contribute data to the network in a decentralized way.

The initial use case for Murmurations was to facilitate decentralized mapping of purpose-driven and solidarity economy organizations and projects.

Further historical background is in the 2019 [Murmurations Whitepaper](https://murmurations.network/wp-content/uploads/2019/09/murmurations-white-paper-v0.1.0.pdf).

## How does it work?

The Murmurations Protocol enables individuals and organizations (_**nodes**_) to create _**profiles**_ about themselves in order to easily share information with _**aggregators**_, who create _**schemas**_ to define the data they need to create maps, directories and content aggregators.

A [_**library**_](https://github.com/MurmurationsNetwork/MurmurationsLibrary) stores details of the schemas and the _**fields**_ (data points) they are composed of.

A node pulls a schema from the library to determine the data needed to create a profile. You can [**try out the latest version of the profile generator**](https://mpgv2.murmurations.network) to create a node profile based on a selection of schemas.

An [_**index**_](https://github.com/MurmurationsNetwork/MurmurationsServices) keeps track of nodes and the schemas linked to their profiles. Whenever a node updates its profile it should tell the index. Aggregators regularly query the index for profile changes by nodes using their schemas, enabling them to provide accurate and timely information in their maps, directories and content aggregators.

## Why Murmurations?

![Murmurations Overview Infographic](/murmurations_overview.png)
