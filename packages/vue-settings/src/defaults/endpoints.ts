// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Option } from '../types';

export const ENDPOINTS: Option[] = [
  {
    info: 'kusama',
    text: 'Kusama (Parity)',
    value: 'wss://kusama-rpc.polkadot.io'
  },
  {
    info: 'kusama',
    text: 'Kusama (OnFinality)',
    value: 'wss://kusama.api.onfinality.io/public-ws'
  },
  {
    info: 'kusama',
    text: 'Kusama (Patract Elara)',
    value: 'wss://kusama.elara.patract.io'
  },
  {
    info: 'basilisk',
    text: 'Basilisk (HydraDX)',
    value: 'wss://rpc-01.basilisk.hydradx.io'
  },
  {
    info: 'basilisk',
    text: 'Basilisk Egg (HydraDX)',
    value: 'wss://rpc-01.basilisk-testnet.hydradx.io'
  },
  {
    info: 'dusty',
    text: 'Dusty (Stake Technologies)',
    value: 'wss://rpc.dusty.plasmnet.io'
  },
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  }
];

export const ENDPOINT_DEFAULT = ENDPOINTS[0].value || 'wss://kusama-rpc.polkadot.io';
