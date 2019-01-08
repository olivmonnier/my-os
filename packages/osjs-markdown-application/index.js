/*!
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
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR ha PARTICULAR PURPOSE ARE
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

// TODO: More options

import osjs from 'osjs';
import {h, app} from 'hyperapp';
import marked from 'marked';
import {name as applicationName} from './metadata.json';
import {
  Box,
  BoxContainer,
  Menubar,
  MenubarItem,
  TextareaField,
  Iframe
} from '@osjs/gui';

const defaultColor = '#000000';

/*
 * Utils
 */

const decode = str => marked(str);

/*
 * Base RichText template
 */
const template = (proc, s) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'arial';
      color: ${defaultColor};
      background: #fff;
      padding: 20pt;
      box-sizing: border-box;
    }
    </style>
  </head>
  <body>${s}</body>
</html>`;

/*
 * Custom GUI Components
 */
const RichText = (props) => h(Iframe, Object.assign({
  box: {
    margin: false,
    grow: 1,
    shrink: 1,
  }
}, props));

/*
 * File Menu
 */
const createMenu = (current, actions, _) => ([
  {label: _('LBL_NEW'), onclick: () => actions.menuNew()},
  {label: _('LBL_OPEN'), onclick: () => actions.menuOpen()},
  {label: _('LBL_SAVE'), disabled: !current, onclick: () => actions.menuSave()},
  {label: _('LBL_SAVEAS'), onclick: () => actions.menuSaveAs()},
  {label: _('LBL_QUIT'), onclick: () => actions.menuQuit()}
]);

/*
 * Main Window Application
 */
const createApplication = (core, proc, win, $content) => {
  const _ = core.make('osjs/locale').translate;
  const vfs = core.make('osjs/vfs');
  const basic = core.make('osjs/basic-application', proc, win, {
    defaultFilename: 'New Document.md',
    saveMimeTypes: ['text/markdown']
  });

  const view = (state, actions) =>
    h(Box, {}, [
      h(Menubar, {}, [
        h(MenubarItem, {
          onclick: ev => actions.menu(ev)
        }, _('LBL_FILE'))
      ]),
      h(BoxContainer, {
        grow: 1,
        shrink: 1,
        orientation: 'vertical'
      }, [
        h(TextareaField, {
          box: {grow: 1},
          value: state.text,
          oninput: (ev, value) => actions.setText(value)          
        }),
        h(RichText, {
          box: {grow: 2},
          value: decode(state.text),
          oncreate: el => proc.emit('richtext:inited', el, state.text)
        })
      ])
    ]);

  const ha = app({
    text: ''
  }, {
    setText: text => state => {
      proc.emit('richtext:write', text);
      return {text}
    },

    save: () => state => {
      if (proc.args.file) {
        const contents = $content.querySelector('textarea').value;
        vfs.writefile(proc.args.file, contents);
      }
    },

    load: item => (state, actions) => {
      vfs.readfile(item)
        .then(contents => actions.setText(contents))
        .catch(error => console.error(error)); // FIXME: Dialog
    },

    menu: ev => (state, actions) => {
      core.make('osjs/contextmenu').show({
        position: ev.target,
        menu: createMenu(proc.args.file, actions, _)
      });
    },

    menuNew: () => state => basic.createNew(),
    menuOpen: () => state => basic.createOpenDialog(),
    menuSave: () => (state, actions) => actions.save(),
    menuSaveAs: () => state => basic.createSaveDialog(),
    menuQuit: () => state => proc.destroy()
  }, view, $content);

  proc.on('destroy', () => basic.destroy());
  basic.on('new-file', () => ha.setText(''));
  basic.on('save-file', ha.save);
  basic.on('open-file', ha.load);
  basic.init();
};

// OS.js window
const createMainWindow = (core, proc) => {
  proc.createWindow({
    id: 'MarkdownWindow',
    icon: proc.resource(proc.metadata.icon),
    dimension: {width: 600, height: 700}
  })
    .on('destroy', () => proc.destroy())
    .on('render', (win) => win.focus())
    .on('drop', (ev, data) => {
      if (data.isFile && data.mime) {
        const found = proc.metadata.mimes.find(m => (new RegExp(m)).test(data.mime));
        if (found) {
          basic.open(data);
        }
      }
    })
    .render(($content, win) => createApplication(core, proc, win, $content));
}

const createProcess = (core, args, options, metadata) => {
  let iframeDocument;
  const proc = core.make('osjs/application', {args, options, metadata});

  proc.once('richtext:inited', (iframe, text) => {
    iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    proc.emit('richtext:write', text);
  });

  proc.on('richtext:write', str => {
    if (iframeDocument) {
      iframeDocument.open();
      iframeDocument.write(template(proc, decode(str)));
      iframeDocument.close();
    }
  });

  createMainWindow(core, proc);

  return proc;
}

/*
 * Register OS.js Application
 */
osjs.register(applicationName, createProcess);