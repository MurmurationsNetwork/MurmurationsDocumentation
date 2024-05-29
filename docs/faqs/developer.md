# Developer FAQs

## How can you say Murmurations is decentralized when the index and library are hosted solely by you?

The Murmurations core team currently hosts a test and live version of the index, library and other services that implement the protocol, but our aim is for this function to be distributed widely. We do not want to be a single point of failure for the protocol. As a result, we have developed [detailed deployment documentation](https://github.com/MurmurationsNetwork/MurmurationsServices/tree/main/docs/rancher) to enable other parties to set up their own indexes and related services.

And as we explain in the [Murmurations White Paper](/Murmurations-White-Paper-v1.0.pdf) (see the section on index synchronization), we intend to develop the protocol further so that indexes can be operated by multiple parties and those operators can choose to peer with other index operators, thus distributing the index function and making the indexed data redundant.

## I have created JSON profiles for my nodes. How do I add them to the index?

Murmurations operates under the assumption you will tell the index whenever a node is to be added, has been updated or is to be deleted.

Once you have all of your nodes setup on individual pages that return a JSON payload with profile data, you must POST each of them to the index. There are two endpoints for this (docs linked below):  
[https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes)  
[https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync)

The first endpoint is for rapid firing a large volume of profiles at once. The second one is for sending one node at a time to the index, and getting back a response to know if the node was posted successfully.

Also, if you change a node's data, POST it again to either of the same endpoints above. The index will then access the JSON data in that profile hosted at its URL and update its records accordingly.

If you ever want to remove a node from the index, first delete the page (it must return a `404 Not Found` error showing it is gone) then send a DELETE request to this endpoint:  
[https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/delete_nodes__node_id_](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/delete_nodes__node_id_)

The index will confirm the JSON data is no longer available at the page and then change it's status to deleted​ in the index.

## I forgot to save the `node_id` for a profile. How do I find it?

The `node_id` is just the alphanumeric SHA256 hash of a `profile_url`. So if your profile is located at `https://my.org/murm.json` the `node_id` is `9097811e1cd5fa478c320c3b6bf210a2b537a8f806955398851c012befdb3e41` (try it out [here](https://emn178.github.io/online-tools/sha256.html)).

## How do I know if any of Murmuration's infrastructure is down?

You can check our status page to see the health of the network:  
[https://status.murmurations.network/](https://status.murmurations.network/)

## Are Murmurations profiles JSON-LD?

No - [JSON-LD](https://json-ld.org/) is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale. Murmurations profiles use JSON but their structure is not strict JSON-LD. Instead they reference the `linked_schemas` against which they validate, which reference the fields used, some of which are based on Schema.org's vocabulary.
