# Murmurations Index API

## Index API Documentation :orange_book:

[**https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0**](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0)

The Index API enables [nodes](/about/common-terms.html#node), using predefined [schemas](/about/common-terms.html#schema), to add, update and delete their data in the index so that [aggregators](/about/common-terms.html#aggregator) can discover them.

Nodes store their [profiles](/about/common-terms.html#profile) on their website or through a dedicated profile host and then request them to be referenced in the index. The index validates that the profile meets the requirements of its associated schema(s). The index does not store the entire profile; instead it stores only certain fields that can then be used by aggregators to find profiles that match various [search criteria](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Aggregator%20Endpoints/get_nodes). The index will return a list of nodes and their URLs (`profile_url`s) so that aggregators can then download from each node it's profile data for use in their apps.
