import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { log } from 'console';
import { Wallet, prepareTransaction } from 'expand-network';

const EXPAND_NETWORK_API = process.env.EXPAND_NETWORK_API;

const base = axios.create({
  baseURL: 'https://api.expand.network',
  headers: {
    'x-api-key': EXPAND_NETWORK_API,
  },
});

@Injectable()
export class AppService {
  private wallet;

  constructor() {
    this.wallet = new Wallet({
      privateKey:
        '0x9bb6ca3ff73a4b99f1dab52b9b3bda3b57d5dfb3275d6119862a358cacb6d717',
      xApiKey: EXPAND_NETWORK_API,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async test() {
    // Signing transaction
    try {
      console.log('Wallet:', 'njj');

      const signedTx = await this.wallet.signTransaction({
        from: '0xBe1113a214CA8057C7cD2609Adab905978FBDc6d',
        to: '0x8Bc655575d98B9Fd98A0Fc1A71d5E12035E9c0b1',
        value: '0.0001',
        chainId: '421614',
        gas: '50000',
      });

      log('Signed Transaction:', signedTx);

      //Sending transaction
      // const tx = await this.wallet.sendTransaction(signedTx);
      // console.log('Transaction Pending....', tx.data);

      return 'test';
    } catch (error) {
      log('Error:', error);
    }
  }
}
