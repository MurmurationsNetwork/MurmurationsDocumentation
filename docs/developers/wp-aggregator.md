# WordPress Collaborative Map Builder Plugin

## Overview

The Murmurations Collaborative Map Builder WordPress Plugin provides a quick and powerful way to set up a site that fetches data from the Murmurations network displays it on a geographic map or in a directory.

An example of the plugin running on a WordPress site can be found at <https://wptest.murmurations.network>.

## Installation

::: warning Older plugin versions
If you have an earlier (pre 1.0.0) version of the plugin installed, you must deactivate and uninstall it first before installing the current version. The current 1.0.0 version is a major update so the old data will be incompatible with this new release.
:::

The Collaborative Map Builder Plugin is currently a beta release available for download at our [GitHub repository](https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP/releases). We are releasing it as beta software to facilitate wider testing and feedback before we make it available in the [WordPress Plugins directory](https://wordpress.org/plugins/).

::: info Getting help
If you have any issues installing or using the plugin, please [contact us](/about/getting-support.html). We would love to get your feedback to make the plugin even more useful and performant.
:::

To setup the beta plugin on your WordPress site:

1. Download the latest [plugin installer file](https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP/releases) (click the dropdown arrow next to 'Assets' for the latest release and select the `MurmurationsAggregatorWP-v1.0.0-beta.XX.zip` file)
2. Login to the Admin pages of your WordPress site and select the Plugins menu item
3. Click on "Add New" and then "Upload Plugin"
4. Select the file you downloaded in Step 1 above, then click "Install Now"
5. Once installed, click on "Activate Plugin"
6. Finally, click on the "Murm-Map" menu item
7. Start creating maps and directories with data from the Murmurations network!

## Getting Started

Once the plugin is installed, you will find two new menu items in your WordPress admin menu bar:

- **Murm-Nodes** - The custom post type that holds information about each node based on your query to the index
- **Murm-Maps** - The plugin UI that enables you to create maps and directories by querying the index for nodes

(add screenshot)

Click the "Create Map" button and fill in the form.

All of the filters are optional, but they will help you to search the Murmurations index for the nodes that interest you and narrow down the profiles you will display on your map.

Complete the form and click the "Create" button. You will then see the card for your map.

(add screenshot)

The Query URL is the link to the index that returns the list of nodes based on the filter criteria you selected.

You can click the Edit Map button to adjust the center point and scale of your map.

### Shortcodes

You can copy and paste the shortcode for your map into a WordPress page or post, to display the map on your website. The parameters for the `murmurations_map` shortcode are:

- `tag_slug` - a unique identifier for the map
- `view` - can be either `map` or `dir` (directory), default is map
- `width` - width of the map, default is 100% of the screen width
- `height` - height of the map, default is 60% of the screen height
- `link_type` - can be either `primary` (`primary_url` for the node) or `wp` (custom post type page in WordPress), default is primary

### Managing Nodes

Select *Update Nodes* to check for updates from the index about nodes that match your query. It will return the changes made to nodes as they are added, updated or deleted.

If you just want to add and remove nodes from your map without checking the index first, select *Manage Nodes*. 

Set the *publish* status for nodes you want to see in your map. Or set the *dismiss* status if you don't want to show the node, but you want to know if it makes changes to its profile. The *ignore* status is for nodes you simply want to ignore completely. 

Nodes can be changed to and from any of these statuses.

#### Node Selection Columns

The columns on the Select Nodes page have the following meaning:

- **ID** - The internal ID in the WordPress database for the node
- **Geopoint** - If the node has geolocation coordinates, it is indicated with a 📍, so you know it will be displayed on a map
- **Name/Title** - The name associated with the node's profile, or in the case of an offer/want profile, the title of the offer/want
- **Profile URL** - The URL where the profile is located, as recorded in the index
- **Status** - The status of the profile (`new`, `publish`, `dismiss`, `ignore`)
- **Availability** - `Available` if the profile can be accessed at its Profile URL, otherwise `Unavailable`

Murmurations is a dynamic index that records nodes on a distributed network, so the availability of those nodes can fluctuate. Sometimes a node may not be accessible if the server that hosts it is down, if there are network issues contacting the server, configuration problems with the server, etc. When this happens, try the *Update Nodes* option again later.

#### Deleted Profiles

A profile owner can decide to delete their profile and remove the reference to it from the index. When this happens you will see the deleted profile above the list of profiles for your map. The profile will then be automatically deleted from your WordPress database, and from the map if it was published. Murmurations respects the right of profile owners to have their data "forgotten" if they choose.
