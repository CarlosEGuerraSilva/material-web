/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../../elevation/elevation.js';

import {html} from 'lit';

import {Button} from './button.js';

/**
 * A filled button component.
 */
export class FilledButton extends Button {
  protected override renderElevationOrOutline() {
    return html`<md-elevation></md-elevation>`;
  }
}
