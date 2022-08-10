# How to integrate Offers and Wants from your network with the Murmurations protocol.

**Intro:**
Offers and Wants from your network can be shared over the Murmurations protocol by making the data available in appropriately formatted .json files and registering the URLs of these files with the Murmurations Index. Aggregators can then query the index, find links to the Offers and Wants data and present the data to their networks. 
[
Here’s an example of a basic Offer](https://murmurations.network/wp-content/uploads/2022/08/cake.json), in Murmurations compatible .json for a tasty chocolate cake, which validates against the Murmurations [Offers and Wants Schema]([url](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/offers_wants_prototype-v0.0.1.json)).

You can use the [Murmurations Test Profile Generator](https://test-profiles.murmurations.network/) to create test Offers and Wants profiles, to see how the Schema converts data inputs into code.

**To make Offers and Wants from your network available to Murmurations you need:**

1. To provide an endpoint address, or create a .json file for each node that you would like to share with the network; and
2. Code that sends a POST request to the Murmurations index to let it know when one of your nodes is updated

To test your code is creating Murmurations compatible .json file you can use the [JSON Schema validator](https://www.jsonschemavalidator.net/), as follows:

1. Copy the full schema code from the Murmurations [Offers and Wants Schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/offers_wants_prototype-v0.0.1.json) and paste it (in place of the existing code) on the box on the left
2. Paste your example profile code (in place of the existing code) into the "Input JSON" text area on the right.
3. Keep tweaking until you get the green message that the profile validates against the schema, like below:

![](https://murmurations.network/wp-content/uploads/2022/08/Screenshot-2022-08-09-at-21.59.09.png)

Once your Offers and Wants profiles are validating against the schema OK, and you have published them on your webserver at a publicly accessible URL you can register them with the Murmurations Index [via the API](https://docs.murmurations.network/developers/index-api.html#node-endpoints). See the [Index API Docs](https://docs.murmurations.network/developers/index-api.html#node-endpoints) for more details of how the Index works.

