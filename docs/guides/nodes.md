# For Nodes: Put your organisation or project on the map

:construction: Work In Progress :construction:

There are three ways you can add your project or organisation to the Murmurations netowrk.

**NB if you are just testing and simply want to see how things work please use the test MPG so as not to pollute the main index with test data.
If you are adding a real profile please use the main MPG, which submits data to the main index.**

## Add via the Murmurations Profile Generator

For a quick (but centralized) approach, you can add a profile using the Murmurations Profile Generator (MPG). This is a centralized web app and data store that allows anyone to create a profile quickly and easily (even if they don't have a website).

Use the [test MPG](https://test-profiles.murmurations.network/) for testing, to see how Murmurations works.
Use the [main MPG](https://profiles.murmurations.network), to add real data to the main index.

### Step by  step guide:

1. Open the Murmurations Profile Generator - use the [test version](https://test-profiles.murmurations.network/) for testing or the [main version](https://profiles.murmurations.network) for real data
2. If you want to save your profile in MPG (so you don't need to host it and submit its URL to the index yourself) register using the 'Login" button (top right)
3. Click on one or more schemas in the panel on the right (test_schema-v2.0.1 is good for testing)
4. Click Select - you will see a form is generated, showing all the fields from the schema/s you selected
5. Fill in the form - required fields are marked with asterisks
6. Click Submit
7. Your profile will be generated and presented in the panel on the left
8. Enter a title for your profile (this is only used to identify your profile in your list of profiles within MPG, so you can find and edit them later) and click Save Profile
9. Your profile will be saved (both in MPG and on IPFS) and submitted to the index
10. Your profile will be listed under 'My Profiles'. You can visit it my clicking on the title, or modify, or delete it using the buttons

To see your profile on a map, visit the [Test Map](https://wpagg.murmurations.network/), or, if you submitted a real profile to the main index visit the [Map of the Regenerative Economy](coming soon!!).


## Get the Node plugin

If you have a website that runs Wordpress, you can [download the Murmurations Node](coming soon!! the plugin is curently being updated to work with v2) WP plugin. Once installed, this allows you to quickly and easily create a decentralized profile that stays on your own server. There are no extra logins or platforms to keep track of, because you can edit the profile right in the admin of your site!

## Host a JSON file yourself

If you have a bit of web tech experience, you can use the MPG to generate a JSON file, and then upload it to your own web location and tell the Murmurations index where it is with a quick POST request.

### Step by  step guide:

1. Follow steps 1 - 7 above to use MPG to create a JSON profile
2. copy the JSON code that MPG generates to a text file and save this with a name like: your-org.json
3. upload this file to your web server. For maximum authority the file should be hosted at the primary URL it is describing i.e. a file describing https:your-org.com should be hosted at: https:your-org.com/your-org.json but profiles can be hosted anywhere, if they're not hosted at the primary URL they are describing they simply have less authority.
4. Visit the [Murmurations API](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Node%20Endpoints/post_nodes), or use cURL to submit your profile's URL to the index
5. On the Swaggerhub page - select the right server at the top (test for testing, main for real profiles)
6. Open the 'POST /nodes - Add a node to the index' section by clicking on the arrow on the right
7. Click 'Try it out'
8. Replace https://somenode.org/optional-subdirectory/node-profile.json with the real URL of the profile you made and click Execute

To see your profile on a map, visit the [Test Map](https://wpagg.murmurations.network/), or, if you submitted a real profile to the main index visit the [Map of the Regenerative Economy](coming soon!!).



