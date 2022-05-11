# Index API

The Murmurations index API is [documented on SwaggerHub](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/1.0). There you can also create requests to the index and see how it works!

# cURL commands
The following cURL commands can be run on the command line to post a Murmurations profile directly to the Murmurations Index.

Here's the POST command to submit a profile:

`curl --header "Content-Type: application/json" --data '{"profile_url": "https://ic3.dev/test1.json"}' https://index.murmurations.network/v1/nodes`

Obviously the profile URL has to be changed to the real URL of your profile.

The index responds with a node_id, like this:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f"}}`

Then you can check the status of your submission after a few seconds to see if the post was successful using:

`curl --header "Accept: application/json" https://index.murmurations.networrk/v1/nodes/b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f`

If the post is successful you will get this response:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f","profile_url":"https://ic3.dev/test1.json","status":"posted"}}`

If the index is still processing your request you will see:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f","profile_url":"https://ic3.dev/test1.json","status":"received"}}`

And if the profile does not validate against the chosen schema you will see:

`{"data":{"node_id":"b5a460ea98afe644357be3dd47751d2114a17957ddeb985c7acf9ba12e6ab74f","profile_url":"https://ic3.dev/test1.json","status":"validation_failed"}}`
