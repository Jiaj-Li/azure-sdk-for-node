/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * An SRV record.
 *
 */
class SrvRecord {
  /**
   * Create a SrvRecord.
   * @member {number} [priority] The priority value for this SRV record.
   * @member {number} [weight] The weight value for this SRV record.
   * @member {number} [port] The port value for this SRV record.
   * @member {string} [target] The target domain name for this SRV record.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SrvRecord
   *
   * @returns {object} metadata of SrvRecord
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SrvRecord',
      type: {
        name: 'Composite',
        className: 'SrvRecord',
        modelProperties: {
          priority: {
            required: false,
            serializedName: 'priority',
            type: {
              name: 'Number'
            }
          },
          weight: {
            required: false,
            serializedName: 'weight',
            type: {
              name: 'Number'
            }
          },
          port: {
            required: false,
            serializedName: 'port',
            type: {
              name: 'Number'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SrvRecord;
