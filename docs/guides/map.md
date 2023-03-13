# Murmurations Map

When a [Node](/about/common-terms.html#node) posts a [Profile](/about/common-terms.html#profile) to the [Index](/about/common-terms.html#index) and has geolocation coordinates (i.e., latitude and longitude) included in its profile, it wil be plotted on the map. The synchronization between the map and index take place every minute.

Use the search options and URL parameters explained below to create **custom map views** of geolocated data in Murmurations.

## Search Options

### Schema

Select a schema if you want to narrow down the results to nodes whose profiles are based on a specific schema. The default is to show all nodes in Murmurations ("all schemas").

### Tags

Search for nodes who have one or more tags associated to their profiles. For example: `bio, demeter` will return a list of nodes with either of these tags in the profile. Searching for `demeter` will only return nodes with that tag.

The tag search uses fuzzy matching, which means spelling differences/mistakes and partial word matches are possible.

### Primary URL

The `primary_url` is usually the unique web address for an entity. For example, `murmurations.network` is the `primary_url` of the Murmurations project. [Read this entry in the Schemas FAQ](/faqs/schema.html#what-is-a-primary-url) for more information about it.

Unlike with tags, the `primary_url` search is an exact match search. Typos and spelling mistakes will not be matched.

### Last Update Time

Use the date/time picker to specify the moment after which the nodes were last updated in the index. This is a good way to find new nodes that have been added to the index, or who made recent updates to their profiles.

## URL Parameters

### Search Parameters

All of the above search options have corresponding URL parameters. For example:

[https://map.murmurations.network/?schema=organizations_schema-v1.0.0&tags=co-op,commons&primary_url=open.coop&last_updated=1673817120](https://map.murmurations.network/?schema=organizations_schema-v1.0.0&tags=co-op,commons&primary_url=open.coop&last_updated=1673817120)

There are two additional parameters that can be specified with the `tags` parameter:

- `tags_exact` (`true` or `false`, default is `false`)
- `tags_filter` (`and` or `or`, default is `or`)

When `tags_exact` is `true`, only exact tag matches will be returned (fuzzy matching is disabled).

When `tags_filter` is `and`, only results that contain all of the listed tags are returned.

Compare:  
[https://map.murmurations.network/?tags=bio,demeter](https://map.murmurations.network/?tags=bio,demeter)

To:  
[https://map.murmurations.network/?tags=bio,demeter&tags_filter=and](https://map.murmurations.network/?tags=bio,demeter&tags_filter=and)

The latter returns significantly fewer results than the former.

### Localization Parameters

You can set tbe center point and zoom level of the map with the following parameters:

- `lat`
- `lon`
- `zoom`

For example, centering London:  
[https://map.murmurations.network/?lat=51.513853&lon=0.098354&zoom=10](https://map.murmurations.network/?lat=51.513853&lon=0.098354&zoom=10)

And Berlin:  
[https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11](https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11)

### Controlling data size with the `range` parameter

With over 30,000 nodes in the index, it can take some time to load and then render them all on a map in a browser. See this [discussion post](https://github.com/MurmurationsNetwork/MurmurationsProtocol/discussions/55) for more details.

To narrow down the amount of data that loads and thus render the map faster, set a center point on the map using the localization parameters described above, but add an additional `range` parameter (e.g., `10km` or `6mi`). 

Here is an example loading all index data in the Paris area:  
[https://map.murmurations.network/?lat=48.85&lon=2.35&range=10km&zoom=12](https://map.murmurations.network/?lat=48.85&lon=2.35&range=10km&zoom=12)


And the Berlin example from above with the `range` parameter set to 5 kilometers:  
[https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11&range=5km](https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11&range=5km)

And 20 kilometers:  
[https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11&range=20km](https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11&range=20km)

Depending on the range you set, you will need to adjust the zoom level accordingly to show all of the data within that range.

### Hiding search parameter inputs

For a more compact view when you are embedding the map on your website or for mobile viewing, use the `hide_search` URL parameter.

[https://map.murmurations.network/?schema=complementary_currencies-v2.0.0&hide_search=true](https://map.murmurations.network/?schema=complementary_currencies-v2.0.0&hide_search=true)
