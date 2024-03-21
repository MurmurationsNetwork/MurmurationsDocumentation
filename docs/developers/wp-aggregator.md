# WordPress Collaborative Map Builder Plugin

## Overview

The Murmurations Collaborative Map Builder WordPress Plugin provides a quick and powerful way to set up a site that fetches data from the Murmurations network displays it on a geographic map or in a directory.

An example of the plugin running on a WordPress site can be found at <https://wordpress.murmurations.network>.

## Installation

::: danger Older plugin versions
If you have an earlier (pre 1.0.0) version of the plugin installed, you must deactivate and uninstall it first before installing the current version. The current 1.0.0 version is a major update so the old data will be incompatible with this new release.
:::

::: warning WP/PHP requirements
You need to be running the latest version of WordPress (version 6.4 or higher) and PHP 8. The plugin is not backwards compatible with older versions of WordPress or PHP.
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

## Theming

You can create Directories and Maps straight out of the box, without any need for customisation of your theme.
However, if you want to link to single node pages on your own site (using link_type="wp" in your shortcode) instead of linking out to the primary_url of each node, read on.

The latest [plugin installer file](https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP/releases) includes single page templates for each of the Custom Post Types: People, Organisations and Offers & Wants, which display the details of single nodes.
Standard template files are included in the zip in: admin > views. There are template files for the WordPress Twentytwenty theme and the Twentytwentyfour theme.

### Using Twentytwenty theme or Twentytwentyfour theme
The key difference between "twentytwenty-child" and "twentytwentyfour-child" is that "twentytwentyfour-child" uses the block editor and "twentytwenty-child" uses the classic editor.

#### Installation Guide
1. Download the latest [plugin installer file](https://github.com/MurmurationsNetwork/MurmurationsAggregatorWP/releases) from GitHub.
2. Locate Theme Folders:
   - Access the /admin/views directory. 
   - Locate and select either the "twentytwenty-child" or "twentytwentyfour-child" folder, depending on your preference.
3. Compress the chosen folder into a .zip file format. 
4. Upload to WordPress:
   - Log into your WordPress dashboard.
   - Navigate to the 'Appearance' section, followed by 'Themes'.
   - Click on 'Add New', then 'Upload Theme'.
   - Choose the .zip file you prepared earlier and initiate the upload.
5. Activate the theme.

   If you encutner a "Incompatible Archive" message when installinf the zip of the theme, this is happening because the folder contains '.DS_Store' or 'MACOSX' files.
   To prevent this from happening, you can execute the following command in the terminal to zip the folder, thereby avoiding the above error.
   ```zip -r astra-child.zip astra-child/ -x "*.DS_Store" -x "MACOSX"```
   Or, if you upload the zip direclty to your themes folder for your Wordpress on your server and extract it there, it will also work.

### Using a different theme
If you are not using the "twentytwenty" or "twentytwentyfour" theme you can still create Directories and Maps straight out of the box, without any need for customisation of your theme.
However, if you want to link to single node pages on your own site (using link_type="wp" in your shortcode) you will need to add some template files to your theme in order for the node details to display on the single-node pages for People, Organisations and Offers & Wants.
To set up single node templates for pages for each of the Custom Post Types you need to place the correctly named file in the root of your theme folder (i.e. not inside 'templates' or any other folder, or it will not work)

The required files are:
- single-organization-schema.php
- single-offers-wants-prototype-schema.php
- single-people-schema.php

#### Installation Guide
The process of creating templates for other themes involves the following steps:

1. Copy the single.php file from your theme to the root of your theme folder and rename it to match the names above. For example, to make a template for single Organisation nodes, rename it to single-organization-schema.php. 
2. Refer to the template files for the twent-twenty-child theme in the zip to find the extra code you need to add to your new template file. For example, for an Organisations template you will need the following code

   ```
   <?php
            echo do_shortcode( '[murmurations_data title="Name" path="name"]' );
            echo do_shortcode( '[murmurations_data title="Nickname" path="nickname"]' );
            echo do_shortcode( '[murmurations_data title="Description" path="description"]' );
            echo do_shortcode( '[murmurations_data title="Primary URL" path="primary_url"]' );
            echo do_shortcode( '[murmurations_data title="Tags" path="tags"]' );
            echo do_shortcode( '[murmurations_data title="URLs" path="urls"]' );
            echo do_shortcode( '[murmurations_data title="Relationships" path="relationships"]' );
   ?>
   ```
   
4. Add the code to your new temaplate. For example, using Hello Elementor theme the code for a single-organization-schema.php file should look as follows:

   ```
   <?php
/**
 * The template for displaying singular post-types: posts, pages and user-defined custom post types.
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

while ( have_posts() ) :
    the_post();
    ?>

    <main id="content" <?php post_class( 'site-main' ); ?>>

        <?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
            <header class="page-header">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
            </header>
        <?php endif; ?>

        <div class="page-content">
            <?php
            echo do_shortcode( '[murmurations_data title="Name" path="name"]' );
            echo do_shortcode( '[murmurations_data title="Nickname" path="nickname"]' );
            echo do_shortcode( '[murmurations_data title="Description" path="description"]' );
            echo do_shortcode( '[murmurations_data title="Primary URL" path="primary_url"]' );
            echo do_shortcode( '[murmurations_data title="Tags" path="tags"]' );
            echo do_shortcode( '[murmurations_data title="URLs" path="urls"]' );
            echo do_shortcode( '[murmurations_data title="Relationships" path="relationships"]' );
            ?>
            <?php the_content(); ?>
            <div class="post-tags">
                <?php the_tags( '<span class="tag-links">' . esc_html__( 'Tagged ', 'hello-elementor' ), null, '</span>' ); ?>
            </div>
            <?php wp_link_pages(); ?>
        </div>

        <?php comments_template(); ?>

    </main>

<?php
endwhile;
```

4. Save the file. 
5. Visit your directory page (which must include the link_type="wp" in your shortcode) and click on the "More..." link for a single node. The Murmurations Map Builder plugin will now find the correctly named template file and use this to display single nodes of the associated Content Type.


