# Create a Murmurations Profile

There are 3 ways to create and host a Murmurations Profile.
 
## 1. Hosted on WordPress

The [WordPress Node Plugin](https://docs.murmurations.network/developers/wp-node.html) makes it simple to create Profiles for People, Organisations, Groups, Project and Offers and Wants via your WordPress site.
Just follow the steps in the link above. If you're not using Wordpress see options 2 and 3 below - you can create and host Profiles for any other type of website.

## 2. Hosted by Our Profile Generator

### [Watch the demo video](https://www.loom.com/embed/3bb0548a60cc41e4abcdefd1b6dda41a)

The Murmurations Profile Generator ([MPG](https://test-profiles.murmurations.network)) can be be used to generate profiles and can host them too if you are not able to upload a file anywhere else on the internet. MPG posts profiles to MPG's database and the [IPFS](https://ipfs.io) network.

> :warning: All information you post to Murmurations is stored on an open network. Do not publish anything that you would not want to make available to (potentially) the whole world.

### Step by step guide:

1. Open the Murmurations Profile Generator - use the [test version](https://test-tools.murmurations.network/profile-generator) for testing or the [production version](https://tools.murmurations.network/profile-generator) for real data.

> ℹ️ [Test & Production Environments](/developers/environments.html)  
> If you are just testing and simply want to see how things work, please use the test environment. This will avoid polluting the main Index with test data. If you are adding a real profile please use the production environment, which submits data to the main Index.

2. If you want to save your profile in MPG so you don't need to host it and submit its URL to the Index yourself, register using the "Login" button at the top right of the screen.
3. Click on one or more schemas in the panel on the right (organizations_schema-v1.0.0 is good for testing).
4. Click "Select" - you will see a form is generated, showing all the fields from the schema(s) you selected.
5. Fill in the form - required fields are marked with asterisks.
6. Click "Submit".
7. Your profile will be generated and presented in the panel on the left.
8. Enter a title for your profile (only used to identify your profile within MPG, so you can find and edit it later) and click "Save Profile".
9. Your profile will be saved (both in MPG and on IPFS) and submitted to the Index.
10. Your profile will be listed under 'My Profiles'. You can visit it by clicking on the title, or modify or delete it using the buttons.

## 3. Hosted on Your Server

Use this method for greater data 'authority', if you are able to upload a file to your own server.

### Step by step guide:

1. Follow steps 1 - 7 above to use MPG to create a JSON profile.
2. Copy the JSON code that MPG generates to a text file and save this with a name like `your-profile.json` (the filename must end with the `.json` extension).
3. Upload this file to your web server. For maximum authority, the file should be hosted at the primary URL it is describing, i.e., a file describing `https://your.site` should be hosted at: `https://your.site/your-profile.json`. However, profiles can be hosted anywhere; if they're not hosted at the primary URL they are describing they simply have less authority.
4. Use the [test version](https://test-tools.murmurations.network/index-updater) or [production version](https://tools.murmurations.network/index-updater) of the Index Updater to add your profile to the Index. Just paste the URL of your profile and post it to the Index.
  The response message will include a `posted` status if successful:
  ```json  
  {
    "node_id":"4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8",
    "profile_url":"https://your.site/your-profile.json","profile_hash":"2168110f2eba3d0c89d59fd728917bbf845528e0d63bc53929132815bf1660fe",
    "status":"posted",
    "last_updated":1657117819
  }
  ```
5. Each time you make a change to your profile, update the Index so it timestamps your latest changes.
6. You can now search for your profile. For example, if you entered a `primary_url` (a unique identifier URL, e.g., `your.site`) you can now search for it in the Index by entering 'your.site' in the relevant input box in the Index Explorer ([test](https://test-tools.murmurations.network/index-explorer) / [production](https://tools.murmurations.network/index-explorer).


