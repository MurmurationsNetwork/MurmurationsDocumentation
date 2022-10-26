# WP Aggregator Plugin

## Overview

The Murmurations Aggregator Wordpress plugin provides a quick and powerful way to set up a site that fetches and displays data from the Murmurations network. Out of the box, this data can be displayed on a geographic map, or in a directory. There are also endpoints compatible with Kumu to enable systems mapping, and client-side interfaces built in React that can be embedded in the Wordpress site. Experimental features include the ability to aggregate and display feeds or posts from collected nodes, and fetching data from multiple sources and merging nodes based on their URLs.

The Aggregator plugin code is in the [Github repo](https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP).


## Installation

The aggregator is not available through the WP plugin library. To install, download the .zip file from the latest release at [https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP/releases/](https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP/releases/). Upload it to your /wp-content/plugins/ directory, and activate the plugin.

## Example Implementation

Two examples of the WP Aggregator plugin can be found at:
- [https://wpagg.murmurations.network](https://wpagg.murmurations.network)
- [https://map.currency.community](https://map.currency.community)

## Quick start configuration

By default the aggregator plugin will be configured to collect collect profile URLs from the main production index, and collect the last 100 profiles that have been added to the network.

To do a basic functionality test once you've activated the plugin:

- Generate and add a Mapbox API key, following the link in the Murmurationgs Aggregator > Settings > Map tab.

- Create a new WP page and add the shortcode `[murmurations_react_map]` to it, or `[murmurations_react_directory]` for a Directory listings page.

- On the Murmurations Aggregator admin dashboard, click "Update nodes from the network". You should then see some log output as the aggregator fetches node data from the network.

- Once this has completed, go to the page with the map shortcode and refresh. You should see a map of nodes you've downloaded from the network.

## Trouble shooting

If you do not see a Map or Directory displayed on your page when using the `[murmurations_react_map]` or `[murmurations_react_directory]` shortcodes, try switching your permalinks (in Settings > Permalinks) from Plain to Post name.

## Displaying nodes

### Archive and single pages
By default, Wordpress displays nodes like other custom post types, at the path `example.com/murmurations_nodes`. This path can be customized by updating the `node_slug` setting in the Advanced tab of the admin UI.

### Shortcodes

Two shortcodes are built into the plugin. These are `[murmurations_directory]` for displaying a basic directory of nodes and `[murmurations_map]` for showing a geographic map.

For more advanced client-side functionality, including filters and search, Murmurations uses React Interfaces (which is included in the plugin) which provides two additional shortcodes: `[murmurations_react_map]` and `[murmurations_react_directory]`.

### Overriding templates

Templates for the directory and map popup are overridable following the standard WP template hierarchy. All the directory interfaces (archive, shortcode, and React depending on settings) use the same template for displaying a node in the list. This template is in `templates/node_list_single.php`,

For this template to be applied in the React interfaces, the `Node format sent to front-end interfaces` setting (at the bottom of the Dashboard tab in the Admin UI) needs to be set to `HTML` rather than `JSON` (otherwise the markup is built in React and the template has no effect).

## Settings reference

### Dashboard Tab

#### Node update interval
How frequently should the locally-stored nodes be automatically refreshed from the network? For test installations, leave this set to `manual`. For most installations the recommended value is `weekly`.

#### Ignore node update data when fetching nodes
By default, the aggregator will only refresh nodes that have changed since it last collected nodes. If this is checked, the update date will be ignored, and all the nodes that match other query parameters will be collected, even if they have not changed since they were last downloaded.

It is recommended to leave this unchecked for production sites (but useful to check for new installations and for testing)

#### Updated node post status
Post status for nodes that have been updated from the network. Set to 'Draft' if updated nodes should be reviewed before they are publicly viewable.

#### New node post status
Post status for new nodes from the network. Set to 'Draft' if new nodes should be reviewed before they are publicly viewable - this is useful if you want to moderate new entries.

#### Nodes per page
Controls how many nodes are shown per page in certain client-side interfaces.

#### Node format sent to front-end interfaces

For React interfaces, set whether the interface should request JSON data (layout handled by the interface), or HTML (layout handled by templates). Choose HTML to use overridable templates output in the React interfaces.

### Data Sources Tab

#### Data sources

For each data source:

 - **URL** -- the URL of the index from which to fetch profile URLs. Default is the main Murmurations index at https://index.murmurations.network/v1/nodes which will be deprecated so new aggregators should use: https://test-index.murmurations.network/v2/nodes (for gathering data from the test index) and https://index.murmurations.network/v2/nodes for the main v2 index.

 - **API key** -- for indices that require authentication with a key, add it here
 - **Include API key in node requests** -- For centralized data stores that also require authentication with a key to collect profiles, check this (generally not required or recommended)
 - **Basic auth user name** and **basic auth password** -- For data sources that are behind HTTP Basic Authentication (such as some staging servers), basic auth credentials can be added.
 - **Index query parameters** -- parameters to send to the index to specify results. For available parameters see the [index API spec](https://app.swaggerhub.com/apis-docs/MurmurationsNetwork/IndexAPI/2.0.0#/Aggregator%20Endpoints/get_nodes). Common parameters include `page_size`, which determines how many results are retrieved from the index, `country`, and `schema`, which specifies profiles that have filled in data for a specific schema.
 - **Turn off this data source** -- in cases where there are multiple data sources defined, it can be convenient to turn off a data source, ether to retain settings for future use or so that data sources can be queried one at a time or in a specific sequence.

### Intereface Tab

#### Fields for front-end filters
Fields to show in front-end filters for map and directory

#### Fields for directory display
Array of fields to include in list display (may be irrelevant in custom templates).

### Map Tab

#### Map origin coordinates
Location for the center of the map. Latitude and longitude (as signed floating point numbers), separated by a comma.

#### Map scale
How zoomed in/zoomed out the map should be at initial display. 1 = whole planet shown at the height of the map display.

#### Mapbox API key
API key for Mapbox, tile provider for Leaflet. See https://www.mapbox.com/studio/account/tokens/


### Advanced Tab

#### Filters

Filter "triples" that limit which nodes from the network are added to the local DB.

- **Field** -- the field that this filter should match
- **Comparison** -- how the field value should be compared with the queried value
- **Value** -- what queried value to compare to

Set parameters to limit the items that will be fetched and saved. Items must match all the conditions defined here to be included.

 #### Schema files

 Web-accessible URL for a Murmurations schema. Schemas added here help the aggregator plugin handle the data that's being received from the network, validate it, and display it appropriately. Add any schemas that you are retrieving data for. When this value changes and the settings are saved, the plugin will attempt to download the referenced schemas, as well as any fields that are linked from them, and assemble a combined local schema that will match the data from the profiles. This may take a few moments for large schemas.

 #### URL for field map file

An optional URL for a file that maps fields in the WP data base to fields in the schema. If the data you're collecting doesn't include `name` or `primary_url` fields, a custom field map file is required to map schema fields to required WP DB fields. Otherwise this can probably be left as default unless you are working with a specialized configuration.

#### Template override path
Local path to an alternate template directory. This path overrides the normal template hierarchy.

#### Logging mode
Set whether and how log files are written.

#### Plugin name
The name of the aggregator plugin as displayed in the admin menu and settings pages. Use this for "white-labeling" the aggregator for specific networks.

#### Node name
What nodes are called in the admin interface (singular).

#### Node name plural
What nodes are called in the admin interface (plural).

#### Node slug
String used in the path for archive and single node URLs.

#### Plugin slug
String used to prefix shortcodes and admin settings pages. Don't update this unless there is good reason to!

#### Node single URL field
Field to use for the link to view a single node. If unset, single nodes will link to the single post page. Can be used to set an external location to view a single node, for example by setting this field to `primary_url` to link out to the primary URL of the node, from the Read More link.

#### Node single
Link to single node pages from directory/map. By default this will use the WP post type. Can be overridden with node_single_url_field for custom single URLs, or  primary_url to link out to the node's website.

#### Log file location
File to write logs to. Must be writable if logging is turned on.

#### Meta prefix
Prefix for meta values saved to the WP DB. Don't update unless necessary.

#### API route
API route identifier to define the route to access locally stored nodes from client-side interfaces or external sites.

#### Update time
Timestamp of last node update from the network.

### Enable feeds (EXPERIMENTAL)
This experimental feature of the aggregator will find RSS URLs on node websites and download and display content from those feeds. This can be interesting for creating a hub website that shows activity around a particular network or sector. Experimental. Use with caution!

There is currently not a built-in method for displaying feeds. However, any plugin or tool (or custom code) that will display a custom post type can be used for this.

The feed items are stored as the custom post type `murms_feed_item`, and have `murms_feed_item_tag` and `murms_feed_item_source` taxonomies applied, which can be used for filtering. You will find the standard 'Archive' listings for feed items at https://yoursite.com/?post_type=murms_feed_item

### Enable editing node metadata (EXPERIMENTAL)
Enable editing node metadata in the admin interface. This experimental feature may not work as expected.

## Advanced

## "Wrapper" plugins

The configuration and other properties of the aggregator can be overridden by other pluggins, this means that for customized installations, a "wrapper" plugin can be created that changes the appearance of the aggregator interface, and many other features of the plugin. This has been used within specific networks, so that the aggregator can be used as an "internal" tool for sharing data within the network.

## Kumu output

The aggregator provides an optional endpoint to access locally stored profiles in a format compatible with the Kumu systems mapping application. To use, point your Kumu map to: example.com/wp-json/murmurations-aggregator/v1/get/nodes?format=kumu 

## Aggregator node REST API and use as a headless backend

The aggregator exposes endpoints in the WP REST API for accessing node data. These endpoints are used by React interfaces, but also work to make the aggregator function as a headless admin backend for display of Murmurations data on other, non-Wordpress sites.
