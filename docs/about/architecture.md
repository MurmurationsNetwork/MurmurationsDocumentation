# Architecture

## Systems Design

### Requirements

- **Ensure adherance to a common data format**
  - Both data creators (nodes) and data processors (aggregators) use [JSON Schema](https://json-schema.org/understanding-json-schema/) for defining and validating the structure of data.
- **Prioritize decentralized storage solutions**
  - Nodes would ideally host their own data in order to retain control of it, but hosting platforms can also provide this service (the Profile Generator provides such a service, which can be replicated by others).
  - Future enhancements could include leveraging [IPFS](https://ipfs.io/#how) to replicate data and distribute it across the Murmurations network of nodes and aggregators.
- **Make Murmurations accessible to the widest audience possible**
  - Make sure user-facing apps are fast, and still functional even when operating under poor network conditions.
    - Leverage edge storage and computing whenever possible to keep data close to users.
  - Test user interfaces with screen readers and ensure best practices for accessibility [a11y](https://www.a11yproject.com/).

## Technical Architecture

### Requirements

- Must use open source software
  - We build on: Linux, Docker, Golang, JavaScript, React, [Remix](https://remix.run)
  - All the software we build ourselves is open source under the GPLv3 License
- Make deployment simple and reliable, and scalable
  - We use [Kubernetes](https://kubernetes.io/) to build and manage our production and test environments
