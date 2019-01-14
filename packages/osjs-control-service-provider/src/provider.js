/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */

const robot = require('robotjs');

const SPECIAL_KEYS = new Map([
  [8, 'backspace'],
  [9, 'tab'],
  [13, 'enter'],
  [27, 'escape'],
  [37, 'left'],
  [38, 'up'],
  [39, 'right'],
  [40, 'down']
]);

/**
 * Remote Control OS.js Service Provider
 */
export default class ControlServiceProvider {

  constructor(core, options = {}) {
    this.core = core;
    this.options = options;
  }

  /* The list of registered services */
  provides() {
    return [
      'osjs/rcontrol'
    ];
  }

  /* Initialize your services */
  async init() {
    this.core.singleton('osjs/rcontrol', () => ({
      moveMouse: (x, y) => this.moveMouse(x, y),
      mouseClick: (button, double) => this.mouseClick(button, double),
      keyPress: () => this.keyPress()
    }));
  }

  moveMouse(x, y) {
    const { x: X, y: Y } = robot.getMousePos();

    robot.moveMouse(X + x, Y + y);
  }

  mouseClick(button = 'left', double = false) {
    robot.mouseClick(button, double);
  }

  keyPress(keys) {
    const { alt, ctrl, shift, meta, code, string } = keys;

    if (alt) robot.keyToggle('alt', 'down');
    if (ctrl) robot.keyToggle('control', 'down');
    if (shift) robot.keyToggle('shift', 'down');
    if (meta) robot.keyToggle('command', 'down');

    if (SPECIAL_KEYS.has(code)) {
      robot.keyTap(SPECIAL_KEYS.get(code));
    }
    else if (string) {
      robot.typeString(string);
    } 

    if (alt) robot.keyToggle('alt', 'up');
    if (ctrl) robot.keyToggle('control', 'up');
    if (shift) robot.keyToggle('shift', 'up');
    if (meta) robot.keyToggle('command', 'up');
  }

  /* Start your services */
  start() {}

  /* Clean up */
  destroy() {}

}
