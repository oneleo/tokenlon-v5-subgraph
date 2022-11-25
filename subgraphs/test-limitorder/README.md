# Subgraph for imToken LimitOrder contract in Goerli Testnet

## Prepare

- Please follow this [official document](https://thegraph.com/docs/en/cookbook/quick-start/) to install graph-cli

## Download and Compile

- Download

```shell
# Download
% git clone "git@github.com:consenlabs/tokenlon-v5-subgraph.git"
% code "tokenlon-v5-subgraph/"

# Get dependence
% yarn install
```

- Select one of follows:

Compile (Mainnet)

```shell
% yarn run prepare:mainnet && yarn run codegen && yarn run build
```

Compile (Goerli Testnet)

```shell
% yarn run prepare:goerli && yarn run codegen && yarn run build
```

## Compile and deploy for LimitOrder contract only in Goerli Testnet

```shell
% yarn workspace "test-limitorder" run codegen
% yarn workspace "test-limitorder" run build
% yarn workspace "test-limitorder" run graph deploy --studio test-limitorder
```

Output:

```shell
yarn workspace v1.22.19
yarn run v1.22.19
$ /Users/irara/MyGithubOneleo/tokenlon-v5-subgraph/node_modules/.bin/graph deploy --studio test-limitorder
✔ Version Label (e.g. v0.0.1) · v0.0.1
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
  Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
  Skip migration: Bump manifest specVersion from 0.0.2 to 0.0.4
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: LimitOrder => build/LimitOrder/LimitOrder.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/LimitOrder/abis/LimitOrder.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmRtsYrCjJ2YHBJE1xxdm1tQJMzzveWygGwFbzC96t6aT4
  Add file to IPFS build/LimitOrder/abis/LimitOrder.json
                .. QmWtZnAiKbLZ9e6Z8jk6ApR5X9HQhQBn9JPV4P8jBzQvSh
  Add file to IPFS build/LimitOrder/LimitOrder.wasm
                .. QmUtpUNyP6P2JsxEPSuGLLH6YVUPHA2X9tf1v9q1vmJb8k
✔ Upload subgraph to IPFS

Build completed: QmYigtJzraLhczyemJtNVsUDBpCw741cKajvuUZNVmKUDC

Deployed to https://thegraph.com/studio/subgraph/test-limitorder

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/34764/test-limitorder/v0.0.1

✨  Done in 40.66s.
✨  Done in 40.80s.
```
