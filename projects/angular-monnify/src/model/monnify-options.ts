import { EventEmitter } from '@angular/core';

export interface MonnifyOptions {
  /**
   * development status | Should be set to true when using the sandbox and false when on production
   */
  isTestMode?: true | false;
  /**
   * Merchant's API Key (Can be found on the Monnify dashboard)
   */
  apiKey?: string;
  /**
   * Merchant's contract code (Can be found on the Monnify dashboard)
   */
  contractCode?: string;
  /**
   * The amount to be paid by the customer
   */
  amount: number;
  /**
   * The currency of the transaction being initialized. `NGN`
   */
  currency: string;
  /**
   * Merchant's Unique reference for every transaction.
   * (The SDK already has a code snippet that generates this for you, but you can always replace it)
   */
  reference: string;
  /**
   * Full name of the customer
   */
  customerFullName: string;
  /**
   * Email address of the customer
   */
  customerEmail: string;
  /**
   * Phone number of the customer.
   */
  customerMobileNumber: string;
  /**
   * Description for the transaction. Will be used as the account name for bank transfer payments
   */
  paymentDescription?: string;
  /**
   * Transaction Hash added to transaction response for security purposes. 
   *  Click here {@link https://docs.teamapt.com/display/MON/Calculating+the+Transaction+Hash Monnify}.
   *  for information on how to calculate the hash value
   */
  transactionHash?: {};
  /**
   * Status of the transaction ("PAID", "PENDING" or "FAILED")
   */
  paymentStatus?: 'PAID' | 'PENDING' | 'FAILED' | string;
  /**
   * Object containing specifications on how payments to this reserve account should be split.
   */
  incomeSplitConfig?: MonnifySplitOptions[];
  /**
   * Redirect URL
   */
  redirectUrl?: string;
  /**
   * When you need to pass extra data to the API.
   */
  metadata?: object;
  /**
   * The unique reference for the sub account that should receive the split.
   */
  subAccountCode?: string;
}

export interface MonnifySplitOptions {
  /**
   * The unique reference for the sub account that should receive the split.
   */
  subAccountCode: string;
  /**
   * Boolean to determine if the sub account should bear transaction fees or not
   */
  feeBearer?: boolean;
  /**
   * The percentage of the transaction fee to be borne by the sub account
   */
  feePercentage?: number;
  /**
   * The percentage of the amount paid to be split into the sub account.
   */
  splitPercentage?: string;
  /**
   * The percentage of the amount paid to be split into the sub account.
   */
  splitAmount?: number;
}

export interface PrivateMonnifyOptions extends MonnifyOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   * @param response?: The server response
   */
  onComplete: (response?: any) => void;
  /**
   * A function to be called when the pay modal is closed.
   */
  onClose: (response?: any) => void;
  /**
   * A function to be called when payment is about to begin
   */
  init: () => void;
}

export interface PrivateMonnifyOptionsWithEmitters extends MonnifyOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   */
  onComplete: EventEmitter<any>;
  /**
   * A function to be called when the pay modal is closed.
   */
  onClose: EventEmitter<any>;
  /**
   * A function to be called when payment is about to begin
   */
  init: EventEmitter<void>;
}
