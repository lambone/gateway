/**
 * FrequencyDetail
 *
 * A bubble showing frequency.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

const LabelDetail = require('./label');
const Utils = require('../utils');

class FrequencyDetail extends LabelDetail {
  constructor(thing, name, property) {
    super(thing, name, property.label || 'Frequency', 'Hz', 0);
    this.id = `frequency-${Utils.escapeHtmlForIdClass(this.name)}`;
  }

  view() {
    return `
      <webthing-frequency-property data-value="0"
        data-name="${Utils.escapeHtml(this.label)}" id="${this.id}">
      </webthing-frequency-property>`;
  }
}

module.exports = FrequencyDetail;
