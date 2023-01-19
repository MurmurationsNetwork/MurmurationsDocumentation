# Developer FAQs

## I have created JSON profiles for my nodes. How do I add them to the index?

Murmurations operates under the assumption you will tell the index whenever a node is to be added, has been updated or is to be deleted.

Once you have all of your nodes setup on individual pages that return a JSON payload with profile data, you must POST each of them to the index. There are two endpoints for this (docs linked below):  
[https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes)  
[https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes_sync)

The first endpoint is for rapid firing a large volume of profiles at once. The second one is for sending one node at a time to the index, and getting back a response to know if the node was posted successfully.

Also, if you change a node's data, POST it again to either of the same endpoints above. The index will then access the JSON data on the page and update its records accordingly.

If you ever want to remove a node from the index, first delete the page (ideally return a `404 Not Found` error showing it is gone) then send a DELETE request to this endpoint:  
[https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/delete_nodes__node_id_](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/delete_nodes__node_id_)

The index will confirm the JSON data is no longer available at the page and then change it's status to deleted​ in the index.

## I forgot to save the `node_id` for a profile. How do I find it?

The `node_id` is just the SHA256 hash of a `profile_url`. So if your profile is located at `https://my.org/murm.json` the `node_id` is `9097811e1cd5fa478c320c3b6bf210a2b537a8f806955398851c012befdb3e41` (try it out [here](https://emn178.github.io/online-tools/sha256.html)).

## How do I know if any of Murmuration's infrastructure is down?

You can check our status page to see the health of the network:  
[https://status.murmurations.network/](https://status.murmurations.network/)
