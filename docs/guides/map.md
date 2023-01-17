# Murmurations Map

When a [Node](/about/common-terms.html#node) posts a [Profile](/about/common-terms.html#profile) to the [Index](/about/common-terms.html#index) and has geolocation coordinates (i.e., latitude and longitude) included in its profile, it wil be plotted on the map. The synchronization between the map and index take place every minute.

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
