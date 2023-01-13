# Schema FAQs

## What is a "Schema" in Murmurations?

See our complete definition of a Schema in the [Common Terms page](/about/common-terms.html#schema). Basically a Schema is a way to define the data to collect from a network, and Murmurations enables you to monitor any changes made to that data by the participants in the network.

## Are there any required fields in a Schema?

There is only one required property in a Murmurations Schema: the `linked_schemas` field, which is an array of strings that lists the Schema (or Schemas) against which a profile has been created.

For example, if you want to create a [Profile](/about/common-terms.html#profile) that can be validated against both the [Organizations schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/organizations_schema-v1.0.0.json) and the [Complementary Currencies schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/complementary_currencies-v2.0.0.json), your Profile document would have to include:

```
{
  "linked_scheams": [
    "organizations_schema-v1.0.0",
    "complementary_currencies-v2.0.0"
  ],
  // The rest of your profile...
}
```

## What is a `profile_url`?

The `profile_url` is the public web address where a Murmurations Profile can be accessed by the Index for indexing. Here is a `profile_url` for the Open Co-op: [`https://www.open.coop/open.json`](https://www.open.coop/open.json)

When this `profile_url` (`https://www.open.coop/open.json`) is sent to the Index, its contents will be downloaded and validated by the Index. If validation is successful against all of the `linked_schemas` listed in the Profile, it will be recorded in the Index.

## What is a `primary_url`?

The `primary_url` field is where a Profile records its canonical web address. We can see the `primary_url` being used in the [Open Co-op Murmurations Profile](https://open.coop/open.json):

```
{
  // ...
  "primary_url": "open.coop",
  // ...
}
```

The `primary_url` references an organization's (or individual's) primary web address. If a Profile is self-hosted on the organization's website, the `primary_url` will be the same domain as the `profile_url`, as is the case for the Open Co-op's Profile referenced in the FAQ above.

Priority should always be given to a Profile whose `profile_url` is hosted at the same domain as the `primary_url`. In other words, a Profile that is hosted at "open.coop" and claiming "open.coop" as it's `primary_url` should have more weight than another Profile hosted at some other domain claiming "open.coop" as it's `primary_url`.
