# For Data Holders: Share your data into the Murmurations network

If your organisation holds data about projects and initiatives that are making the world a better place, sharing that data into the Murmurations ecosystem can be a great way to forward the mission of interoperability and support synergies among organisations doing on-the-ground work.

Making your data available in Murmurations format also means that the tools that Murmurations makes available for displaying data (for example as maps or on Kumu) will be usable for flexibly displaying your data as well.

Sharing data from an existing data set into the Murmurations network generally requires two things:

 - An endpoint address (or file) for each node that you would like to share in the network; and
 - Code that sends a POST request to the central Murmurations index to let it know when one of your nodes is updated

## Schema

Generally an early step in preparing to share data into the Murmurations network is to create a schema for your data. For details on how to do this, see [Creating a Schema](create_a_schema.html).

## Licensing and permissions

An important consideration when sharing data is the license and permissions associated with it.

## Future
In the future, an alternative will be to host a Murmurations index that lists all your nodes with their update dates, so that the Murmurations crawler can find them and update the central index accordingly. This will remove the need to send a request to the central index every time a node is updated.

If you're in the Wordpress world and you have modest amounts of data to share, ask us about the MurmurationsServer Wordpress plugin. This plugin has only been used in a few cases and is not yet production ready, but it is a very efficient way to turn existing data sets into Murmurations-compatible data if you're in the Wordpress ecosystem.
