# General FAQs

## What is the Murmurations protocol?

The Murmurations protocol, which we also just call Murmurations, is a standardised, open source set of rules designed to enable decentralised, interoperable data sharing and aggregation. Murmurations uses existing standards such as [JSON Schema](https://json-schema.org/) to help people, projects and organisations discover each other and share data across platforms and between networks. The ultimate aim of Murmurations is to facilitate collaboration at scale by enabling interoperable data sharing across platforms and between networks, all while providing individuals and other data creators control over their data.

## How is Murmurations "privacy-focused" as described in your tagline?

Murmurations' tagline is "a privacy-focused distributed data sharing protocol".

We are still developing the software that implements the protocol, so some of the privacy features have not been built, but they have been described in the [Murmurations White Paper](https://murmurations.network/wp-content/uploads/2024/04/Murmurations-White-Paper-v1.0.pdf) (see the section on data privacy), namely:

- Obfuscated URLs of JSON profiles
- Access controls (authentication) on indexes
- Encryption of select data fields

As we work on these privacy features, we will add them to our [Road Map](https://github.com/orgs/MurmurationsNetwork/projects/7).

## What can I do with Murmurations?

See our post on [collaborative mapping](https://murmurations.network/2023/08/22/collaborative-mapping/) for some user stories explaining how you can use Murmurations to:

- Build a map of X (e.g., vegan shops) in a specific area
- Build a map of a network of members

## How do I create a Murmurations profile?

Visit the [Murmurations Profile Generator](https://test-tools.murmurations.network/profile-generator) and follow the steps, or for more detail see our [create a profile](/guides/create-a-profile.md) guide.

## How can I use Murmurations to create a map or directory or other type of aggregator?

See our [WordPress Collaborative Map Builder Plugin](/developers/wp-aggregator.html) for an example aggregator built on top of WordPress.

## Are there any restrictions on what I can do with Murmurations?

Yes, to use Murmurations you must agree to [the principles](https://murmurations.network/principles/).

## Isn't this just like ___ ?

### Solid

Both [Solid](https://solidproject.org/) and Murmurations share the goal of decentralizing data and promoting data ownership and control, but Solid is mainly focused on empowering individual users through the concept of "pods", which are personal online data stores that users control and can share selectively with apps and services.

Murmurations has a broader scope; we are aiming to facilitate collaboration at scale in order to create a decentralized ecosystem of &mdash; in fact, a distributed database for &mdash; social applications and services, all while providing individuals and other data creators control over their data. Rather than initially focusing on individual users (and burdening them with complex software) we are instead focused on enabling networks to collaborate and exchange data using an open protocol. Individuals can adopt the Murmurations protocol and tools at their leisure, once they understand the importance of being the "source of truth" about their own data, rather than allowing some third party to be that source and possibly disseminating inaccurate and/or outdated information about them.

### ActivityPub

[ActivityPub](https://activitypub.rocks/) is a decentralized social networking protocol that provides a client to server API for creating, updating and deleting content, as well as a federated server to server API for delivering notifications and subscribing to content. Murmurations doesn't deliver notifications or enable people to subscribe to content. Instead it provides a way to store and find data according to a standardized set of fields, which makes that data interoperable accross platforms and networks.

In essence, Murmurations is a protocol for a distributed database system whereas ActivityPub is primarily focused on decentralized social networking and microblogging.

### Schema.org

[Schema.org](https://schema.org/) provides a shared vocabulary for structured data on the internet, which make certain data interoperable across platforms. Murmurations leverages Schema.org's vocabulary but also extends it by enabling a wider set of fields and schemas, which are composable and extensible so they can easily be adopted to any use case. And on top of that, Murmurations describes a way for sharing and synchronizing data in a distributed manner, whereas Schema.org does not address data distribution at all.

## My questions isn’t answered here – what can I do?

You can [send us a message](https://murmurations.network/contact/) and we will reply and add the answer here, or join the [Telegram group](https://t.me/joinchat/JvotB0kuxrjFgvYszbNvZw) and ask there.
