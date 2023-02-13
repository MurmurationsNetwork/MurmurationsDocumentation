# Composable Ontologies

When describing Murmurations we use a couple of terms - "flexible approach to ontology" and "data composability" - that may or may not be completely clear, so we would like to expand on them both a bit. In essence, they are two sides of the same coin.

## Flexible approach to ontology

The Murmurations protocol does not enforce a specific ontology. It has a flexible approach through which anyone using Murmurations is free to create their own ontology by defining a schema (using JSON Schema).  As a simple example, imagine two different Murmurations users want to define their own organization ontology. Alice might define it as a schema composed of the following fields:

-	Name
-	Purpose
-	City
-	Country
-	Website

Bob might define his own organization schema as:

-	Name
-	Mission
-	Geolocation (latitude and longitude)
-	Website

Murmurations allows both Alice and Bob to create their own organization schemas. Alice's Org Schema and Bob's Org Schema can be used separately or together by any organization that wants to be picked up in Alice's and/or Bob's list of organizations.

## Data composability

Before explaining data composability, let's start with a definition of composability (from Wikipedia):

> "Composability is a system design principle that deals with the inter-relationships of components. A highly composable system provides components that can be selected and assembled in various combinations to satisfy specific user requirements."

What are the composable (reusable) components of the above two schemas? The obvious ones are:

-	Name
-	Website

One might consider that these two are highly related as well:

-	Purpose
-	Mission

Perhaps Alice and Bob could agree they are one in the same thing and standardize on the same name. Or perhaps they mean different things and they agree it makes sense to have two different fields and further define what those fields mean so it is obvious to anyone considering to use their schemas. In other words, they need to give further context to the meaning of these two fields.

The remaining fields, even though they describe a similar thing (location), are distinct:

-	City & Country
-	Geolocation (latitude and longitude)

Thus they are not composable (reusable) and have to be specified separately to satisfy the requirements of both schemas.

So how would we specify data in Murmurations to satisfy both of these schemas? We use JSON Schema to create a [_**Profile**_](/about/common-terms.html#profile), which looks like this:

```
{
  "linked_schemas": [
    "alice_org_schema-v1.0.0",
    "bob_org_schema-v1.0.0"
  ],
  "name": "My Org",
  "purpose": "My org's specific purpose",
  "mission": "My org's stated mission",
  "city": "London",
  "country": "England"
  "geolocation": {
    "lat":  51.509865,
    "lon": -0.118092
  }
}
```

We start with defining the lists of schemas we want our data to conform to using the `linked_schemas` field. Next, we add all of the fields required by both of those schemas. We host this data ideally on our own servers, or using a third party hosting service (like [tools.murmurations.network](https://tools.murmurations.network/profile-generator)). Finally, we submit the URL where this data is hosted to the Murmurations Index so it is recorded and [can be searched for by anyone](https://tools.murmurations.network/index-explorer?schema=organizations_schema-v1.0.0) who is interested in finding organizations who define themselves according to Alice's or Bob's organizations schemas.

These are simple examples, but hopefully they illustrate to you the flexibility and power of the Murmuration protocol's flexible ontology and [composable data](https://dazuck.substack.com/p/data-composability-what-it-is-why) approach.
