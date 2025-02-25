# Schema FAQs

## What is a "schema" in Murmurations?

See our complete definition of a schema in the [Common Terms page](/about/common-terms.html#schema). Basically a schema is a way to define the data to collect from a network. Think of a schema as the definition of the header row of a spreadsheet, defining the columns that will be used to collect data (e.g., name, website address, location, etc.).

## Are there any required fields in a schema?

There is only one required property in a Murmurations schema: the `linked_schemas` field, which is an array of strings that lists the schema (or schemas) against which a profile has been created.

For example, if you want to create a [profile](/about/common-terms.html#profile) that can be validated against both the [Organizations schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/organizations_schema-v1.0.0.json) and the [Complementary Currencies schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/main/schemas/complementary_currencies-v2.0.0.json), your Profile document would have to include:

```json
{
  "linked_schemas": [
    "organizations_schema-v1.0.0",
    "complementary_currencies-v2.0.0"
  ],
  // The rest of your profile...
}
```

## What is a `profile_url`?

The `profile_url` is the public web address where a Murmurations profile can be accessed by the index for indexing. Here is a `profile_url` for the Open Co-op: [`https://www.open.coop/open.json`](https://www.open.coop/open.json)

When this `profile_url` (`https://www.open.coop/open.json`) is sent to the index, its contents will be downloaded and validated by the index. If validation is successful against all of the `linked_schemas` listed in the profile, it will be recorded in the index.

## What is a `primary_url`?

The `primary_url` field is where a profile records its canonical web address. We can see the `primary_url` being used in the [Open Co-op Murmurations profile](https://open.coop/open.json):

```json
{
  // ...
  "primary_url": "open.coop",
  // ...
}
```

The `primary_url` references an organization's (or individual's) primary web address. If a profile is self-hosted on the organization's website, the `primary_url` will be the same domain as the `profile_url`, as is the case for the Open Co-op's profile referenced in the FAQ above.

Priority should always be given to a profile whose `profile_url` is hosted at the same domain as the `primary_url`. In other words, a profile that is hosted at "open.coop" and claiming "open.coop" as it's `primary_url` should have more weight than another profile hosted at some other domain claiming "open.coop" as it's `primary_url`.

## How is the `primary_url` derived from a website address?

Let's assume the website address is `https://www.manyorgs.org/myorg/`. When the address is converted into a `primary_url` we remove the protocol (`https://`), the `www.` subdomain and the trailing `/`, leaving `manyorgs.org/myorg` as the `primary_url`.

Only the  `www.` subdomain is removed. All other subdomains are kept as part of the `primary_url`. For the complete details of `primary_url` processing, see this GitHub issue:

[https://github.com/MurmurationsNetwork/MurmurationsServices/issues/238](https://github.com/MurmurationsNetwork/MurmurationsServices/issues/238)

## What is the difference between a base schema and an add-on schema?

A base schema is a set of core fields that describe an entity. There are currently 3 base schemas in Murmurations:

- Organizations schema - entities include organizations, groups, projects, for-profit and non-profit businesses, NGOs, etc.
- People schema - entities include natural persons
- Offers/wants schema - entities include items or services that can be donated, traded, etc.

An add-on schema shares the same fields with a base schema, but includes other fields that are specific to a sector, industry, region, etc.

Consider two organizations, one issuing a complementary currency and another focused on regenerative agriculture. Both entities will share the fields in the organizations schema, but they can each have a different add-on schema with fields specific to their focus.

Using base schemas increases interoperability and discoverability, while add-on schemas increase specificity. For example, one can [search using a base schema](https://tools.murmurations.network/index-explorer?schema=organizations_schema-v1.0.0&status=posted&tags_filter=or&tags_exact=false) to find all profiles which match the base schema AND any add-on schemas, making a wider range of profiles discoverable. Alternatively, one can [search using an add-on schema](https://tools.murmurations.network/index-explorer?schema=permaculture_addon_schema-v1.0.0&status=posted&tags_filter=or&tags_exact=false) to find just the specific profiles which match the add-on schema.
