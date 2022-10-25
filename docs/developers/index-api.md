# Murmurations Index API

### Index API Documentation

> :orange_book: **Index API Docs**
> 
> [**https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0**](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0)

The Index API enables [Nodes](/about/common-terms.html#node), using predefined [Schemas](/about/common-terms.html#schema), to add, update and delete their data in the Index so that [Aggregators](/about/common-terms.html#aggregator) can discover them.

Nodes store their [Profiles](/about/common-terms.html#profile) on their website or through a dedicated profile host and then request them to be referenced in the Index. The Index validates that the Profile meets the requirements of its associated Schema(s). The Index does not store the entire Profile; instead it stores only certain fields that can then be used by Aggregators to find Profiles that match various [search criteria](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Aggregator%20Endpoints/get_nodes). The Index will return a list of Nodes and their URLs (`profile_url`s) so that Aggregators can then download from each Node it's Profile data for use in their apps.
