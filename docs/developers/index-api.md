# Murmurations Index API

## Index API Documentation :orange_book:

[**https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0**](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0)

The Index API enables [nodes](/about/common-terms.html#node), using predefined [schemas](/about/common-terms.html#schema), to add, update and delete their data in the index so that [aggregators](/about/common-terms.html#aggregator) can discover them.

Nodes store their [profiles](/about/common-terms.html#profile) on their website or through a dedicated profile host and then request them to be referenced in the index. The index validates that the profile meets the requirements of its associated schema(s). The index does not store the entire profile; instead it stores only certain fields that can then be used by aggregators to find profiles that match various [search criteria](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Aggregator%20Endpoints/get_nodes). The index will return a list of nodes and their URLs (`profile_url`s) so that aggregators can then download from each node it's profile data for use in their apps.

## Automated profile deletion

Some profile data may be time-sensitive or may need to be deleted after a certain period of time. The index service will automatically mark a profile as deleted provided the profile has an `expires` field set in the profile data. The `expires` field should be a date in the Unix timestamp format (seconds since 1970-01-01, e.g., 1713561600 for 2024-04-15).
