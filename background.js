// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';



chrome.runtime.onInstalled.addListener(function() {

  //Füge dem Daictionary dara color hinzu
  chrome.storage.sync.set({api : ''}, function() {
    console.log('Erfolgreich!');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlContains: '[^:chrome://:]'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
