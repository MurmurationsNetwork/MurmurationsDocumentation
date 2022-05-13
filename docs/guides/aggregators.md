# For Aggregators: Use Murmurations to map your network, sector or geographic area

:construction: Work In Progress :construction:

Murmurations provides several tools to make it easy for organisations to use Murmurations to map their members, sector, or geographic area.

If you are a new aggregator, you may want to use existing data to set up your network. The simplest approach to this is to use the Murmurations Aggregator Wordpress plugin, which will automatically allow your site to interact with the network and display maps or directories of Murmurations data.

## Creating a schema

If you're an organisation that already holds data about nodes in your network, or you're just getting started, it's likely you will want to create a Murmurations schema to describe the data you want to share or collect from nodes. To do that, see [creating a murmurations schema](create_a_schema.html). (If you just want to aggregate existing data in the network you can skip this step).

## Setting up an aggregator

If your site uses Wordpress (or if you can set up a Wordpress site for your aggregator back end), you can use the simplest approach to collecting and displaying Murmurations data: the [WP Aggregator plugin](). This plugin can quickly turn your Wordpress site into a full-featured aggregator fro Murmurations data. In addition, it includes some other features for pulling feeds and other content from the nodes in your network. For more details, see the [installation and setup guide]() for the Wordpress Aggregator plugin.

## Custom Aggregators

If you don't want to use Wordpress, or you have other aggregation needs that aren't served by the Wordpress aggregator, you can build a custom aggregator. This requires a few pieces:
 - Data storage, so you can cache nodes on your server for quick retrieval
 - Code that makes API calls to the Murmurations network to collect profiles
 - Code that pulls nodes from the data storage and displays them in some way, such as on a map



## Questions?

If you need help setting up your aggregator or if you have any questions, please post them at the [Murmurations Forum](https://murmurations.flarum.cloud).
