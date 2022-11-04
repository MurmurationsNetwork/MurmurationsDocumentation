# Create a Murmurations Profile

If your organisation holds data about projects and initiatives that are making the world a better place, sharing that data into the Murmurations ecosystem can be a great way to forward the mission of interoperability and support synergies among organisations doing on-the-ground work.

Making your data available in Murmurations format also means that the tools that Murmurations makes available for displaying data (for example, as maps or directories) will be usable for flexibly displaying your data as well.

> ℹ️ [Test & Production Environments](/developers/environments.html)  
> If you are just testing and simply want to see how things work, please use the test environment. This will avoid polluting the main Index with test data. If you are adding a real profile please use the production environment, which submits data to the main Index.
## Hosted by Our Profile Generator

The Murmurations Profile Generator ([MPG](https://test-profiles.murmurations.network)) is used to generate and post profiles to networks you want to be a part of. Just create an account, select the network schema you want, enter the requested data and your profile is instantly posted to MPG's database and the [IPFS](https://ipfs.io) network.

> :warning: All information you post to Murmurations is stored on an open network. Do not publish anything that you would not want to make available to (potentially) the whole world.

MPG can be used to store and publish your profiles for you if you do not have the means to do so yourself.

### Step by step guide:

1. Open the Murmurations Profile Generator - use the [test version](https://test-profiles.murmurations.network/) for testing or the [production version](https://profiles.murmurations.network) for real data.
2. If you want to save your profile in MPG so you don't need to host it and submit its URL to the Index yourself, register using the "Login" button at tne top right of the screen.
3. Click on one or more schemas in the panel on the right (organizations_schema-v1.0.0 is good for testing).
4. Click "Select" - you will see a form is generated, showing all the fields from the schema(s) you selected.
5. Fill in the form - required fields are marked with asterisks.
6. Click "Submit".
7. Your profile will be generated and presented in the panel on the left.
8. Enter a title for your profile (this is only used to identify your profile in your list of profiles within MPG, so you can find and edit them later) and click "Save Profile".
9. Your profile will be saved (both in MPG and on IPFS) and submitted to the Index.
10. Your profile will be listed under 'My Profiles'. You can visit it my clicking on the title, or modify or delete it using the buttons.
## Hosted on Your Server

Or you can just copy and paste the generated JSON into a `.json` file, post it to your website, and then submit your profile link to the Index.

### Step by  step guide:

1. Follow steps 1 - 7 above to use MPG to create a JSON profile.
2. Copy the JSON code that MPG generates to a text file and save this with a name like `your-profile.json` (the filename must end with the `.json` extension).
3. Upload this file to your web server. For maximum authority, the file should be hosted at the primary URL it is describing, i.e., a file describing `https://your.site` should be hosted at: `https://your.site/your-profile.json`. However, Profiles can be hosted anywhere; if they're not hosted at the primary URL they are describing they simply have less authority.
4. Open a terminal and use `curl` to submit your Profile to the Index: 
  ```bash
  $ curl --header "Content-Type: application/json" --data '{"profile_url": "https://your.site/your-profile.json"}' https://index.murmurations.network/v2/nodes
  
  {"data":{"node_id":"4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8"}}%
  ```
5. You can then check the status of your profile in the Index. The `status` will be `posted` if your profile validated successfully against the network schemas you chose for it.
  ```bash
  $ curl https://index.murmurations.network/v2/nodes/4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8
  
  {"data":{"node_id":"4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8","profile_url":"https://your.site/your-profile.json","profile_hash":"2168110f2eba3d0c89d59fd728917bbf845528e0d63bc53929132815bf1660fe","status":"posted","last_updated":1657117819}}%
  ```
6. If you entered a `primary_url` (a unique identifier URL, e.g., `your.site`) you can now search for it in the Index.
  ```bash
  $ curl "https://index.murmurations.network/v2/nodes?primary_url=your.site"
  
  {"data":[{"country":"FR","geolocation":{"lat":48.856613,"lon":2.352222},"last_updated":1657117819,"linked_schemas":["karte_von_morgen-v1.0.0","murmurations_map-v2.0.0"],"locality":"Paris","primary_url":"your.site","profile_url":"https://your.site/your-profile.json","status":"posted","tags":["open source","software"]}],"meta":{"number_of_results":1,"total_pages":1}}%
  ```

## Hosted on WordPress

:construction: Work In Progress :construction:

The WordPress Node Plugin is currently being rewritten to be compatible with the latest version (v2.0.0) of the [Murmurations Protocol](/about/common-terms.html#murmurations-protocol).

Once this work is completed you will be able to import the Murmurations WordPress plugin into your WordPress server to create a Profile and post it to the Murmurations Index.
