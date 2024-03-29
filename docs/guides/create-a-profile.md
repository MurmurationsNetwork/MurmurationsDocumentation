# Create a Murmurations profile

There are 3 ways to create and host a Murmurations profile.

::: warning :warning: Data Privacy
All information you post to Murmurations is stored on an open network. Do not publish anything that you would not want to make public.
:::

## 1. Hosted on WordPress

The [WordPress Profile Plugin](/developers/wp-node.html) makes it simple to create profiles for people, organisations, groups, projects and offers/wants via your WordPress site.

Just follow the steps in the link above. If you're not using WordPress see options 2 and 3 below - you can create and host profiles on any website or server that support the HTTP protocol.

## 2. Hosted by our profile generator

### [Watch the demo video](https://player.vimeo.com/video/888697915)

The Murmurations Profile Generator ([MPG](https://test-profiles.murmurations.network)) can be be used to generate profiles and can host them too if you are not able to upload a file anywhere else on the internet.

### Host on MPG

> ℹ️ [Test & Production Environments](/developers/environments.html)  
> If you are just testing and simply want to see how things work, please use the test environment. This will avoid polluting the production environment with test data.

1. Open MPG - use the [test instance](https://test-tools.murmurations.network/profile-generator) for testing or the [production instance](https://tools.murmurations.network/profile-generator) for real data
2. Register using the "Login" button at the top right of the screen
3. Click on one or more schemas in the panel on the right (organizations_schema-v1.0.0 is good for testing)
4. Click "Select" - you will see a form is generated, showing all the fields from the schema(s) you selected
5. Fill in the form - required fields are marked with asterisks (*)
6. Click "Submit"
7. Your profile will be generated and presented in the panel on the left
8. Enter a title for your profile (only used to identify your profile within MPG, so you can find and edit it later) and click "Save Profile"
9. Your profile will be saved in MPG's database and submitted to the Murmurations index
10. Your profile will be listed under 'My Profiles'. You can visit it by clicking on the title, or modify or delete it

## 3. Hosted on your server

Use this method for greater data ['authority'](/faqs/schema.html#what-is-a-primary-url) if you are able to upload a file to your own server.

### Host on your server

1. Follow steps 1 - 7 above to use MPG to create a JSON profile (you can skip step 2 for registering with MPG)
2. Copy the JSON code that MPG generates to a text file and save this with a name like `your-profile.json` (the filename must end with the `.json` extension).
3. Upload this file to your web server. For maximum authority, the file should be hosted at the primary URL it is describing, i.e., a file describing `https://your.site` should be hosted at: `https://your.site/your-profile.json`. However, profiles can be hosted anywhere; if they're not hosted at the primary URL they are describing they simply have less authority.
4. Use the [test instance](https://test-tools.murmurations.network/index-updater) or [production instance](https://tools.murmurations.network/index-updater) of MPG's Index Updater to add your profile to the index. Just paste the URL of your profile and post it to the index.
    The response message will include a `posted` status if successful:

    ```json  
    {
      "node_id":"4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8",
      "profile_url":"https://your.site/your-profile.json",
      "profile_hash":"2168110f2eba3d0c89d59fd728917bbf845528e0d63bc53929132815bf1660fe",
      "status":"posted",
      "last_updated":1657117819
    }
    ```

5. Each time you make a change to your profile, update the index so it timestamps your latest changes.
6. You can now search for your profile. For example, if you entered a `primary_url` (a unique identifier URL, e.g., `your.site`) you can now search for it in the index by entering 'your.site' in the relevant input box in MPG's Index Explorer ([test](https://test-tools.murmurations.network/index-explorer) / [production](https://tools.murmurations.network/index-explorer)).
