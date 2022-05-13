# Murmurations Index API

We are currently running two implementations of Murmurations.

Our latest work on version 2 (V2) of the protocol is operating in our test environment:

> :link: Base URL
>
> https://test-index.murmurations.network/v2/{endpoint}
> 
> :blue_book: API Docs
> 
> [https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0)

The production environment is operating version 1 (V1) of the protocol:

> :link: Base URL
>
> https://index.murmurations.network/v1/{endpoint}
> 
> :blue_book: API Docs
> 
> [https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/1.0](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/1.0)

We are aiming to put V2 into production during Q3 2022, at which point V1 will be deprecated, so **use our test environment** to experiment with the latest version of the Murmurations protocol.

The rest of this page describes V2 of the protocol as it is being developed.

**Overview**

The Index API enables nodes, using predefined schemas, to add, update and delete their data in the index so that aggregators can discover them.

Schemas define collections of data fields that nodes can fill in to share information about themselves. Think of a schema as a form template and each instance of a completed form as a profile.

Nodes store their profiles on their website or through a dedicated profile host and then request them to be referenced in the index. The index validates that the profile meets the requirements of its associated schema(s). The index does not store the entire profile, only certain fields that can then be used by aggregators to find profiles that match various search criteria.

Information stored by the index includes, for example:

- `linked_schemas` - the names of the schemas that the profile has been built and validated against
- `profile_url` - the URL where the profile is stored
- `primary_url` - the website address of the node

Using the information, aggregators can then search the index for nodes with profiles that match specific schemas they want to use to create maps and directories, and the index returns a list of URLs (`profile_url`s) for the matched nodes' profiles. Aggregators then download from each node it's profile data for use in their apps.

The index also stores additional data to enable aggregators to locate nodes based on other information in addition to their associated schemas. This additional information includes, for example:

- _Geolocation data_ - latitude/longitude of primary location of entity - enables searching for nodes within a geographical range (i.e., "1 kilometer from my current location" or "60 miles from my home")
- _Location data_ - town/city, country, etc. for searching based on map location
- _Tags_ - nodes can include an array of strings ('tags') that describe the node (e.g., 'restaurant', 'pizza', 'beer', 'calzones')

## Node Endpoints

### [`POST /validate`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_validate)

Node operators can test the validity of a profile against one or more schemas before posting the profile to their website and submitting the `profile_url` to the index.

#### Input

- The profile JSON to validate, including an array of one or more `linked_schemas` to validate against.

#### Output

- 200 OK response
  - if profile validates to the schema(s), returns a `status` of `200`
  - if profile does not validate, return a `status` of `400` or `404` in the body of the response object along with an array of failure reasons
    - in the case of multiple failure reasons (e.g., a `400` and a `404`), the code for the first listed reason is returned

### [`POST /nodes`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes)

Node operators will call the `POST /nodes` endpoint to add their nodes to the index both when they first create a profile and to indicate when they have made changes to that profile.

They need to store their profile at a publicly accessible URL (`profile_url`), and then submit the `profile_url` to the index.

> :warning: SCHEMA REQUIREMENT
>
> A list of `linked_schemas` (array of strings) must be included in every profile (and therefore every schema) as a required field.
>
> ```json
> {
>   "linkedSchemas": ["some_schema-v2.0.0", "some_other_schema-v1.1.0"]
> }
> ``` 
>
> The library should never accept schemas and the index should never accept profiles without the `linked_schemas` property.

#### Input

- Profile that validates to a referenced schema (or list of schemas), available at a publicly accessible URL
  - The profile must be available at the `profile_url` or it can't be recorded by the index
  - The profile must include one or more `linked_schemas` (unique schema name(s) within a namespace) against which the profile must be validated

#### Output

- `node_id` - hash of the `profile_url`

> :construction: HASH ALGORITHM
>
> The current implementation of the index uses the SHA256 hashing algorithm which produces a 64-character output. The purpose of hashing the `profile_url` is to make it easy to reference as a path parameter when requesting information about the node from the index (e.g., `GET /nodes/{node_id}` as described below).

#### Sequence Diagram - Add Node Profile to Index

![Add Node Profile to Index](/index_api-v1-diagram_1.png)

### [`POST /nodes-sync`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync)

This endpoint is identical to the `POST /nodes` endpoint above but it responds with an immediate success or failure status, so it is useful for posting nodes in an asynchronous call to the index.

#### Input

- Same as for the `POST /nodes` endpoint above

#### Output

Detailed response examples can be seen in the [Open API specification](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync) under the _Responses_ section for `200 OK` response code.

Note that the `received`, `validated` and `post_failed` responses will only be returned in very rare circumstances (i.e., unavailability of one or more of the backend services). Expect to only see the `posted` or one of the `validation_failed` responses when posting to this endpoint.

### [`GET /nodes/{node_id}`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/get_nodes__node_id_)

The record of a node in the index's database can be in one of five possible states: `received`, `validated`, `validation_failed`, `posted`, `post_failed` or `deleted`. The node will only be discoverable in the index when it has the status of `posted` or `deleted`.

This endpoint enables a Murmurations profile generator to get and present an update to the node operator as to the status of the node profile after it has been submitted to the index (i.e., when using `POST /nodes`).

#### Input

- the `node_id` of the node's profile that is currently in the index

#### Output

Detailed response examples can be seen in the [Open API specification](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/get_nodes__node_id_) under the _Responses_ section for `200 OK` response code.

##### Success

- Confirmation of status (e.g., `received`, `validated`, `posted` or `deleted`)

##### Error

###### Validation Failed

- Could not download profile from `profile_url`
- Could not validate profile against one or more schemas
- Could not find one or more schemas in library for validation

###### Post Failed

- Could not post validated profile to the index (internal service issue)

### [`DELETE /nodes/{node_id}`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/delete_nodes__node_id_)

Node operators will use the `DELETE /nodes/{node_id}` endpoint to remove their profile from the index when they no longer want it listed.

#### Input

- the `node_id` of the profile that is currently in the index
  - The profile must no longer be available at the `profile_url` (i.e., should return a `404 Not Found` error when accessing the URL) or it will not be removed from the index

#### Output

##### Success

- Confirmation of removal (e.g., `200 OK` success status response code)

##### Error

- Return a `404 Not Found` error when the `node_id` does not exist in the index
- Return a `400 Bad Request` error when the profile is still available at its `profile_url` on the web

## Aggregator Endpoints

### [`GET /nodes`](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Aggregator%20Endpoints/get_nodes)

<!-- TODO - add this back if/when it happens
> :lock: The `GET /nodes` endpoint will eventually require an API key in order to prevent unauthorized harvesting of data from the index.
 -->

Aggregators can search for nodes based on the schemas nodes use, when the nodes were last updated by the index (i.e., for recent changes to node profiles), and by geolocating nodes within a certain range (e.g., _10km_ or _6mi_) from a specific location or finding them based on the town/city, country, etc. Searching for deleted nodes is also possible so that aggregators can keep their records updated as nodes remove themselves from the index. Finally, nodes can associate tags to their profiles to enable searching by specific keywords, and nodes can be queried based on their `primary_url` value.

It is envisioned that other search parameters will be added to this endpoint as they are defined and deemed useful for aggregator searching.

<!-- TODO - add this back in if/when a solution is determined
> :construction: SEARCH BY ORGANIZATION TYPE
>
> The ability to search by type of organization will eventually be offered, but the methodology for defining and recording the organization type still needs to be determined. ([see this issue for updates](https://github.com/MurmurationsNetwork/MurmurationsProtocol/issues/6))
-->

#### Input Parameters

- `schema` - unique schema name
  - only allows a single value per search
  - can be wildcarded (`my_schema-v1.0` (returns 1.0.x), `my_schema-v1` (returns 1.x.x), `my_schema-v` (return x.x.x))
- `last_updated` - Unix timestamp (in seconds)
- `lat` - latitude geopoint coordinate
- `lon` - longitude geopoint coordinate
- `range` - search distance from geopoint
- `locality` - town, city, etc.
- `region` - state, province, county, etc.
- `country` - ISO 3166 two-letter country code
- `status` - posted or deleted
- `tags` - comma-separated list of strings to match
- `tags_filter` - AND/OR switch
- `tags_exact` - boolean for exact or fuzzy matching
- `primary_url` - the canonical URL that identifies a node

#### Output

- Array of nodes with:
  - `profile_url`
  - `last_updated` (in seconds)
  - `geolocation` - an object containing `lat` & `lon`
  - `locality`
  - `region`
  - `country`
  - `status`
  - `tags`
  - `primary_url`
  - `linked_schemas` - an array containing a list of all schemas the node profile was validated against

<!-- # cURL commands
The following cURL commands can be run on the command line to post a Murmurations profile directly to the Murmurations Index.

Here's the POST command to submit a profile:

`curl --header "Content-Type: application/json" --data '{"profile_url": "https://YOUR.SITE/test1.json"}' https://test-index.murmurations.network/v2/nodes`

The index responds with a `node_id`, like this:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f"}}`

Then you can check the status of your submission after a few seconds to see if the post was successful using:

`curl --header "Accept: application/json" https://test-index.murmurations.networrk/v2/nodes/b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f`

If the post was successful you will get this response:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f","profile_url":"https://YOUR.SITE/test1.json","status":"posted"}}`

If the index is still processing your request you will see:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f","profile_url":"https://YOUR.SITE/test1.json","status":"received"}}`

And if the profile does not validate against the chosen schema you will see:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f","profile_url":"https://YOUR.SITE/test1.json","status":"validation_failed"}}` -->
