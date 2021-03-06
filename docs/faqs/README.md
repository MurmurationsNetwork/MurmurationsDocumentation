# General FAQs

:construction: Work In Progress :construction:

## What is the Murmurations Protocol?

The Murmurations Protocol, which we also just call Murmurations, is a standardised, open source set of rules designed to enable decentrlaised, interoperable, data sharing and aggregation. Murmurations uses existing standards including [JSON-Schema](https://json-schema.org/), [Schema.org](https://schema.org/), and [RSS](https://en.wikipedia.org/wiki/RSS) to help people, projects and organisations discover each other and share data across platforms and between networks. The ultimate aim of Murmurations is to accelerate the global transition to the [regenerative economy](https://capitalinstitute.org/8-principles-regenerative-economy/).

## Can you explain the terms you use?

See the [common terms](https://docs.murmurations.network/about/common-terms.html) we use when working with Murmurations and our blog posts [Murmurations explained](https://murmurations.network/2022/07/07/murmurations-explained/), and [using Murmurations](https://murmurations.network/2022/07/12/using-murmurations/).

## How do I create a Murmurations profile?

Visit the [Murmurations Profile Generator](https://profiles.murmurations.network/) and follow the steps, or for more detail see our guide [for nodes](https://docs.murmurations.network/guides/nodes.html).

## How can I use Murmurations to create a map or directory or other type of aggregator?

See our [guide for aggregators](https://docs.murmurations.network/guides/aggregators.html)

## Are there any restrictions on what I can do with Murmurations?

Yes, to use Murmurations you must agree to [the principles](https://murmurations.network/principles/).

## Isn't this just like...

### Solid
Not really - [Solid](https://solid.mit.edu/) is a proposed set of conventions and tools for building decentralized social applications based on Linked Data principles. Solid aims to offer 'data pods' to help you store and share your data and to restrict access to it on your terms. Murmurations provides a way to share and map public data according to a standaridised set of fields, which make the data interoperable accross platforms and networks.

### ActivityPub
Not really - [ActivityPub](https://activitypub.rocks/) is a decentralized social networking protocol based on the ActivityStreams 2.0 data format, which provides a client to server API for creating, updating and deleting content, as well as a federated server to server API for delivering notifications and subscribing to content. Murmurations doesn't deliver notifications or enable people to subscribe to content, instead it provides a way to share and map public data according to a standaridised set of fields, which make the data interoperable accross platforms and networks.

### Schema.org
Not really - [Schema.org](https://schema.org/) provides a shared vocabulary to make it easier for webmasters and developers to decide on a schema and get the maximum benefit for their efforts. Murmurations uses Schema.org's vocabulary and extends it by creating a standaridised set of fields, which make the data interoperable accross platforms and networks.

## Are Murmurations profiles JSON-LD? - NB needs confirming!
Not really - [JSON-LD](https://json-ld.org/) is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale. Murmurations profiles use JSON but their structure is not strict JSON-LD because they don't reference the schema.org @context. Instead they reference the linked_schemas	against which they validate, which reference the fields used, most of which are based on Schema.org's vocabulary, but since we did not want to restrict Murmurations to ONLY terms (and hence fields) specified by Schema.org Murmurations profiles are not strict JSON-LD.

## Aren't you just building another map?
No - we're building a new way to map: a protocol which makes data on maps interoperable, and a suite of tools to help mappers build better maps based on the protocol.

## My questions isn???t answered here ??? what can I do?

You can search and ask in [the Forum](https://murmurations.flarum.cloud/), and if you still have questions [send us a message](https://murmurations.network/contact/) and we will reply and add the answer here, or join the [Telegram group](https://t.me/joinchat/JvotB0kuxrjFgvYszbNvZw) and ask there...
