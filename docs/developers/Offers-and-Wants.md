# How to Integrate Offers and Wants from your Network with the Murmurations Protocol

**Intro:**

Offers and wants from your network can be shared over the Murmurations protocol by making the data available in appropriately formatted .json files and registering the URLs of these files with the Murmurations index. Aggregators can then query the index, find links to the offers and wants data and present the data to their networks.

[Here’s an example of a basic offer](https://murmurations.network/wp-content/uploads/2022/08/cake.json), in Murmurations compatible .json for a tasty chocolate cake, which validates against the Murmurations [Offers and Wants schema prototype](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/offers_wants_prototype-v0.0.1.json).

You can use the test version of the [Murmurations Profile Generator](https://test-profiles.murmurations.network/) to create test offers and wants profiles, to see how the schema converts data inputs into code.

**To make offers and wants from your network available to Murmurations you need:**

1. To provide an endpoint address, or create a .json file for each node that you would like to share with the network
2. Code that sends a POST request to the Murmurations index to let it know when one of your nodes is updated

To test your code is creating Murmurations compatible .json file you can use the [JSON Schema validator](https://www.jsonschemavalidator.net/), as follows:

1. Copy the full schema code from the Murmurations [Offers and Wants schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/offers_wants_prototype-v0.0.1.json) and paste it (in place of the existing code) on the box on the left
2. Paste your example profile code (in place of the existing code) into the "Input JSON" text area on the right.
3. Keep tweaking until you get the green message that the profile validates against the schema, like below:

![JSON Schema Validator](https://murmurations.network/wp-content/uploads/2022/08/Screenshot-2022-08-09-at-21.59.09.png)

Once your Offers and Wants profiles are validating against the schema and you have published them on your webserver at a publicly accessible URL, you can register them with the Murmurations index [via the API](/developers/index-api.html#node-endpoints). See the [Index API Docs](/developers/index-api.html#node-endpoints) for more details of how the index works.
