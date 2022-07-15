# Murmurations Profile Generator

[MPG](https://profiles.murmurations.network) is used to generate and post profiles to networks you want to be a part of. Just create an account, select the network schema you want, enter the requested data and your profile is instantly posted to MPG's database and the [IPFS](https://ipfs.io) network.

> :warning: All information you post to Murmurations is stored on an open network. Do not publish anything that you would not want to make available to (potentially) the whole world.

MPG will store and publish your profiles for you if you do not have the means to do so yourself. Or you can just copy and paste the generated JSON into a `.json` file, post it to your website, and then submit your profile link to the Index.

```bash
$ curl --header "Content-Type: application/json" --data '{"profile_url": "https://your.site/your-profile.json"}' https://index.murmurations.network/v2/nodes

{"data":{"node_id":"4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8"}}%
```

You can then check the status of your profile in the Index.

```bash
$ curl https://index.murmurations.network/v2/nodes/4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8

{"data":{"node_id":"4c4ec22cc828a05bcddb7f9b9987a7b5e365fd645e24e87991d0913f236160e8","profile_url":"https://your.site/your-profile.json","profile_hash":"2168110f2eba3d0c89d59fd728917bbf845528e0d63bc53929132815bf1660fe","status":"posted","last_updated":1657117819}}%
```

The `status` will be `posted` if your profile validated successfully against the network schemas you chose for it.

If you entered a `primary_url` (a unique identifier URL, e.g., `your.site`) you can now search for it in the Index.

```bash
$ curl "https://index.murmurations.network/v2/nodes?primary_url=your.site"

{"data":[{"country":"FR","geolocation":{"lat":48.856613,"lon":2.352222},"last_updated":1657117819,"linked_schemas":["karte_von_morgen-v1.0.0","murmurations_map-v2.0.0"],"locality":"Paris","primary_url":"your.site","profile_url":"https://your.site/murmurations-v2.json","status":"posted","tags":["software","open source","development"]}],"meta":{"number_of_results":1,"total_pages":1}}%
```
