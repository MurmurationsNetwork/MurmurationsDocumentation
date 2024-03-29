# Create a Map

Murmurations provides a simple way to build customised maps and directories, with the added advantage that you can draw from, and add to, a large body of collaborative mapping data, so you don’t need to start from scratch and your mapping efforts will contribute to a growing body of open, interoperable data. When a [node](/about/common-terms.html#node) posts a [profile](/about/common-terms.html#profile) to the [index](/about/common-terms.html#index) and has geolocation coordinates (i.e., latitude and longitude) included in its profile, it wil be plotted on the map. The synchronization between the map and index take place every minute.

## Create a map of X (e.g., vegan shops) in your area

Suppose you want to create a map of ‘Vegan shops in Berlin’ to show on your website. Here’s how to do that using Murmurations:

- [Search the main map](https://map.murmurations.network/) by tags to see what data already exists (note: to see all the available data for a specific tag remove the ‘schema=organizations_schema-v1.0.0’ part of the URL e.g. <https://map.murmurations.network/?tags=vegan>)
- Adjust the search URL using the [URL parameters](/guides/map.html#url-parameters-for-customised-embedded-maps) until the map shows the area and data you want (e.g., this URL centers on Berlin and shows only profiles with the ‘vegan’ tag: <https://map.murmurations.network/?tags=vegan&zoom=11&lat=52.5200&lon=13.4050&hide_search=true>)
- Copy the URL for the search and paste it into an iframe (e.g., `<iframe src=”https://map.murmurations.network/?tags=vegan&zoom=11&lat=52.5200&lon=13.4050&hide_search=true“></iframe>`)
- Then add additional nodes to your map by creating new profiles using the [WordPress Profile Plugin](/developers/wp-node.html) or the [Murmurations Profile Generator](/guides/create-a-profile.html#_2-hosted-by-our-profile-generator)
- The new profiles you create will show up on your embedded map straight away

See other examples of [custom embedded maps](https://murmurations.network/2023/01/30/embedded-maps/).

## Create a network map

### Option 1: Create an embedded map

- Pick a descriptive tag for your network (e.g., ‘Transition Group’)
- Ask your members to create profiles including the ‘Transition Group’ tag by using the [WordPress Profile Plugin](/developers/wp-node.html) or the [Murmurations Profile Generator](/guides/create-a-profile.html#_2-hosted-by-our-profile-generator)
- Search the map for profiles tagged ‘Transition Group’ e.g. <https://map.murmurations.network/?tags=transition%20group>
- Adjust the search URL using the [URL parameters](/guides/map.html#url-parameters-for-customised-embedded-maps) until the map shows the area and data you want
- Copy the URL for the search and paste it into a iframe
- Either you, or your members, can then add additional nodes to your map by creating new profiles using the [WordPress Profile Plugin](/developers/wp-node.html) or the [Murmurations Profile Generator](/guides/create-a-profile.html#step-by-step-guide)

### Option 2: Create a map from existing member data

If you already have a lot of data you can register this with the Murmurations index to avoid asking your members to make new profiles. The disadvantage of this method will be that you are the ‘owner’ of the data, making it harder for your members to edit and update their profiles themselves. However, the Murmurations WordPress Map Plugin recognizes the ‘authority’ of profiles according to their [primary URL](/faqs/schema.html#what-is-a-primary-url), so if a member wanted to update their profile on your map they could simply create a new profile and host this on their own website and the new profile data would be displayed instead of the original, since it would have greater authority. See [this post](https://murmurations.network/2022/07/07/murmurations-wordpress-aggregator-mapping-demo/) for a demo.

To import an existing dataset and create a map:

- Prepare your data as a CSV file by following the [instructions](/guides/import-networks.html#spreadsheet-import) using the example import file
- Register your data with the index using MPG's [Batch Importer](https://test-tools.murmurations.network/batch-importer)
- Create an embedded map showing the data you want (as per Option 1 above) or
- Use [the API](/guides/view-the-data.html#using-the-api) to get the nodes you want and display them on your own custom map

### Option 3: Use the Murmurations WordPress Map Plugin

The [Murmurations WordPress Map Plugin](/developers/wp-aggregator.html) makes it easy for anyone running WordPress to access data in the index, and to collect, filter, moderate and curate profiles in order to display customised maps and directories on their sites.

## Search options

Use the search options and URL parameters explained below to create **custom map views** of geolocated data in Murmurations.

### Schema

The default schema is the Organizations schema. Select a different schema if you want to narrow down the results to nodes whose profiles are based on a specific schema.

### Tags

Search for nodes who have one or more tags associated to their profiles. For example: `bio, demeter` will return a list of nodes with either of these tags in the profile. Searching for `demeter` will only return nodes with that tag.

The tag search uses fuzzy matching, which means spelling differences/mistakes and partial word matches are possible.

### Primary URL

The `primary_url` is usually the unique web address for an entity. For example, `murmurations.network` is the `primary_url` of the Murmurations project. [Read this entry in the Schemas FAQ](/faqs/schema.html#what-is-a-primary-url) for more information about it.

Unlike with tags, the `primary_url` search is an exact match search. Typos and spelling mistakes will not be matched.

### Last update time

Use the date/time picker to specify the moment after which the nodes were last updated in the index. This is a good way to find new nodes that have been added to the index, or who made recent updates to their profiles.

## URL parameters for customised embedded maps

### Search parameters

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

### Localization parameters

You can set the center point and zoom level of the map with the following parameters:

- `lat`
- `lon`
- `zoom`

For example, centering London:  
[https://map.murmurations.network/?lat=51.513853&lon=0.098354&zoom=10](https://map.murmurations.network/?lat=51.513853&lon=0.098354&zoom=10)

And Berlin:  
[https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11](https://map.murmurations.network/?lat=52.517038&lon=13.377040&zoom=11)

### Controlling data size

With over 30,000 nodes in the index, it can take some time to load and then render them all on a map in a browser. See this [discussion post](https://github.com/MurmurationsNetwork/MurmurationsProtocol/discussions/55) for more details.

To narrow down the amount of data that loads and thus render the map faster, filter the ammount of data by schema or range:

#### Controlling data size with the `schema` or `tags` parameters

Map searches default to the Organization schema, so a search for the tag 'vegan' returns the URL: <https://map.murmurations.network/?schema=organizations_schema-v1.0.0&tags=vegan>.

To search all schemas for a specific tag remove the 'schema=organizations_schema-v1.0.0' part of the URL (e.g., <https://map.murmurations.network/?tags=vegan>).

#### Controlling data size with the `range` parameter

Set a center point on the map using the localization parameters described above, but add an additional `range` parameter (e.g., `10km` or `6mi`).

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
