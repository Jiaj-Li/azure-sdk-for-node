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

const models = require('./index');

/**
 * Represents a safety check for the seed nodes being performed by service
 * fabric before continuing with node level operations.
 *
 * @extends models['SafetyCheck']
 */
class SeedNodeSafetyCheck extends models['SafetyCheck'] {
  /**
   * Create a SeedNodeSafetyCheck.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SeedNodeSafetyCheck
   *
   * @returns {object} metadata of SeedNodeSafetyCheck
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EnsureSeedNodeQuorum',
      type: {
        name: 'Composite',
        className: 'SeedNodeSafetyCheck',
        modelProperties: {
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SeedNodeSafetyCheck;