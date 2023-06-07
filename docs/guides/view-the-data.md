# View Murmurations Data

## View the Map

### [Watch the demo video](https://player.vimeo.com/video/791872327)

The [Murmurations Map](https://map.murmurations.network/) allows you to explore all of the Nodes in Murmurations that have geolocation coordinates associated with them.

[Learn how to create custom map views](/guides/map.md)

## Search the Index

Use the [Index Explorer](https://test-tools.murmurations.network/index-explorer) to search for [Nodes](/about/common-terms.md) in the Murmurations network based on a variety of criteria such as:

- Schema name
- User-defined tags
  - All or any tags entered (default is any)
  - Exact or fuzzy matching (default is fuzzy, to handle spelling variances, typos, etc.)
- Authentic website address (`primary_url`)
- Last update time
- A distance in kilometers ("25km") or miles ("15mi")) from a specific geolocation (`lat`, `lon`, `range`)
- Town/city (`locality`), state/province/county (`region`) and `country` ([two letter ISO codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))

## Using the API

The [Index API](/developers/index-api.md) enables you to programmatically fetch data using the [`GET /nodes`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Aggregator%20Endpoints/get_nodes) endpoint. The search and filtering options are the same as with the Index Explorer search page described above.
