# Import Networks

Murmurations provides a data import tool to make it easy for organisations to use Murmurations to map their members, sector or geographic area.

## Spreadsheet import

### [Watch the demo video](https://player.vimeo.com/video/807714220)

If you maintain your network data in a spreadsheet, use MPG's [Batch Importer](https://test-tools.murmurations.network/batch-importer) to upload a CSV file of your network, which you have exported from your spreadsheet. Every time you add, update or delete any of your network's data profiles in your spreadsheet, just export the data in a CSV file and re-upload it in the Batch Importer.

### CSV field formats

- Maximum rows (profiles) per batch is set to 1,000
- The first column must always contain the `oid` (originating ID) field; this is a unique identifier for the entity in your network. It must be unique and only ever associated with that one entity; do not re-use `oid`s when adding new entities.
- The column names must map exactly to the names used for fields in the schema. See the column names in the [example import file](https://github.com/MurmurationsNetwork/MurmurationsServices/blob/main/tests/organizations_schema-v1.0.0-example-import.csv) for the [Organizations schema](https://github.com/MurmurationsNetwork/MurmurationsLibrary/blob/test/schemas/organizations_schema-v1.0.0.json) in the Murmurations library.
- Array items are specified with square brackets: `tags[0], tags[1], tags[2] ...`
- Object properties with periods: `geolocation.lat, geolocation.lon`
- Arrays of object with both: `urls[0].name, urls[0].url, urls[1].name, urls[1].url ...`

All of the above requirements are illustrated in the [example import file](https://github.com/MurmurationsNetwork/MurmurationsServices/blob/main/tests/organizations_schema-v1.0.0-example-import.csv).
