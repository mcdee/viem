import { expect, test } from 'vitest'

import * as utils from './index'

test('exports utils', () => {
  expect(utils).toMatchInlineSnapshot(`
    {
      "boolToBytes": [Function],
      "boolToHex": [Function],
      "buildRequest": [Function],
      "bytesToBigint": [Function],
      "bytesToBool": [Function],
      "bytesToHex": [Function],
      "bytesToNumber": [Function],
      "bytesToString": [Function],
      "decodeAbi": [Function],
      "decodeBytes": [Function],
      "decodeErrorResult": [Function],
      "decodeFunctionData": [Function],
      "decodeFunctionResult": [Function],
      "decodeHex": [Function],
      "decodeRlp": [Function],
      "encodeAbi": [Function],
      "encodeBytes": [Function],
      "encodeDeployData": [Function],
      "encodeEventTopics": [Function],
      "encodeFunctionData": [Function],
      "encodeFunctionResult": [Function],
      "encodeHex": [Function],
      "encodeRlp": [Function],
      "extractFunctionName": [Function],
      "extractFunctionParams": [Function],
      "extractFunctionType": [Function],
      "format": [Function],
      "formatBlock": [Function],
      "formatEther": [Function],
      "formatGwei": [Function],
      "formatTransaction": [Function],
      "formatTransactionRequest": [Function],
      "formatUnit": [Function],
      "getAddress": [Function],
      "getContractAddress": [Function],
      "getCreate2Address": [Function],
      "getCreateAddress": [Function],
      "getEventSignature": [Function],
      "getFunctionSignature": [Function],
      "hexToBigInt": [Function],
      "hexToBool": [Function],
      "hexToBytes": [Function],
      "hexToNumber": [Function],
      "hexToString": [Function],
      "isAddress": [Function],
      "isAddressEqual": [Function],
      "isBytes": [Function],
      "isHex": [Function],
      "keccak256": [Function],
      "numberToBytes": [Function],
      "numberToHex": [Function],
      "pad": [Function],
      "padBytes": [Function],
      "padHex": [Function],
      "parseEther": [Function],
      "parseGwei": [Function],
      "parseUnit": [Function],
      "rpc": {
        "http": [Function],
        "webSocket": [Function],
        "webSocketAsync": [Function],
      },
      "size": [Function],
      "slice": [Function],
      "sliceBytes": [Function],
      "sliceHex": [Function],
      "stringToBytes": [Function],
      "stringToHex": [Function],
      "trim": [Function],
    }
  `)
})
