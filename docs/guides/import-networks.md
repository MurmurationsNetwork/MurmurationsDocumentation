# Import Networks

To make your network's data available via Murmurations and to start to transition to a fully decentralized database which is automatically updated and which you can easily curate, the steps are as follows:

1. Compare your existing member's database fields to the fields used in the Organizations schema (see <https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/organizations_schema-v1.0.0.json> to look at the code, or <https://test-tools.murmurations.network/profile-generator> and select organizations_schema-v1.0.0 to see it as a form) and decide if you are happy to use the existing Organizations schema or if you would prefer to [create an add-on schema](/faqs/schema.html#what-is-the-difference-between-a-base-schema-and-an-add-on-schema).

    - If creating an add-on schema, [follow the instructions here](/guides/create-a-schema.html) or simply tell us which extra fields you want in addition to those in the Organizations schema and we can help draft your add-on schema with you.

2. Prepare your data, so that is it compatible with your chosen schema. This can be as simple as [creating a CSV file and importing it](#spreadsheet-import) or, if you want to host the JSON profiles yourself, you need to generate JSON files for each node profile you want to add to the Murmurations index and then register the URLs of these files with the index [via the API](/developers/index-api.html). We suggest using a custom tag to help identify your data, so ensure each profile has "YourNetworkName" (e.g., "Open.coop") as one of its tags.

3. At this point you can start telling your members who want to appear on your map/in your directory to create Murmurations profiles using your chosen schema and, providing they use the "YourNetworkName" tag you will easily be able to find them and see when their profile has been updated.

4. To show your network's nodes on your site you need an aggregator tool. You can build custom versions which use the API to query the index, see which nodes match your requirements, find the URLs of these profiles, collect the data from the profiles, cache it and present it however you like. Or you can use our [WordPress Collaborative Map Builder Plugin tool](/developers/wp-aggregator.html) which does all of the above to present customized maps and directories.

The Collaborative Map Builder Plugin lets you check for updates as often as you like, view new updates, view what has been changed, `ignore` (never see again), `dismiss` (ignore this time only) or `publish` the changes so you can curate exactly what shows on your map/directory.

You and others can then continue to contribute to and expand your map/directory by creating new profiles in two ways:

1. Using the [WordPress Profile Generator Plugin](/developers/wp-node.html) on any WordPress site. Use it on your own site and others can use it on any other WordPress sites and all the profiles anyone adds can be picked up by your map/directory, presuming they use the "YourNetworkName" tag.

2. By using the Murmurations Profile Generator here <https://test-tools.murmurations.network/profile-generator> and hosting the profiles they create there, or preferably on their own URLs for greater "authority". For example, a profile describing `open.coop` which is hosted at `open.coop/open.json` has more authority than one hosted at `some-other.org/open.json`, and the WordPress Collaborative Map Builder will recognize this and assist you with your curation to encourage the use of the most authoritative profiles.

## Spreadsheet import

Murmurations provides a data import tool to make it easy for organisations to use Murmurations to map their members, sector or geographic area.

### [Watch the demo video](https://player.vimeo.com/video/807714220)

If you maintain your network data in a spreadsheet, use MPG's [Batch Importer](https://test-tools.murmurations.network/batch-importer) to upload a CSV file of your network, which you have exported from your spreadsheet. Every time you add, update or delete any of your network's data profiles in your spreadsheet, just export the data in a CSV file and re-upload it in the Batch Importer.

### CSV field formats

- Maximum rows (profiles) per batch is set to 1,000
- The first column must always contain the `oid` (originating ID) field; this is a unique identifier for the entity in your network. It must be unique and only ever associated with that one entity; do not re-use `oid`s when adding new entities.
- The column names must map exactly to the names used for fields in the schema. See the column names in the [example import file](https://raw.githubusercontent.com/MurmurationsNetwork/MurmurationsServices/main/test/organizations_schema-v1.0.0-example-import.csv) for the [Organizations schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/organizations_schema-v1.0.0.json) in the Murmurations library.
- Array items are specified with square brackets: `tags[0], tags[1], tags[2] ...`
  - Multiple items can also be defined in a single column using `tags(list-0)` and including a quoted, comma-separated list of items. Both ways of listing arrays of strings can be used in the same batch row, for example:

    ```sh
    oid,name,primary_url,tags[0],tags[1],tags[2],tags(list-0),tags(list-1)
    myOrgID1,Alice,https://alice.net,programmer,golang,unit tests,"friendly,outgoing","tenacious,""to the point"",exact"
    myOrgID2,Bob,https://bob.net,"Next, Inc.","Bob ""the Cob"" Dobbs",,"either\, or, neither\, nor","Los Angeles, California , USA"
    # Alice's profile will show these tags:
    # "programmer", "golang", "unit tests", "friendly", "outgoing", "tenacious", "\"to the point\"", "exact"
    # And Bob's will show:
    # "Next, Inc.", "Bob \"the Cob\" Dobbs", "either, or", "neither, nor", "Los Angeles", "California", "USA"
    ```

  - The special characters `"` and `,` can be included inside tags if they are correctly escaped (`""` and `\,`)
- Object properties with periods: `geolocation.lat, geolocation.lon`
- Array of objects with both: `urls[0].name, urls[0].url, urls[1].name, urls[1].url ...`
- Fields with enumerated lists, like the `[status](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/fields/status.json)` and `[geographic_scope](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/fields/geographic_scope.json)` fields in the Organizations schema should only contain 1 of the available options from the list of items in the `enum` property.

All of the above requirements are illustrated in the [example import file](https://raw.githubusercontent.com/MurmurationsNetwork/MurmurationsServices/main/test/organizations_schema-v1.0.0-example-import.csv).
