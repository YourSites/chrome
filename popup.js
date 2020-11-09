// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let name = document.getElementById('url');
let sicher = document.getElementById('sicher');


async function getApi(api, url){

  const response = await fetch(api + url);

  if(response.ok) let apiData = await response.json();

  else let apiData = {url, response.status};

  return apiData;

}

chrome.tabs.getSelected(null, function(tab) {
    main(tab.url);
});

function main(url){

  chrome.storage.sync.get('api', function(data) {

      result = getApi(data.api, url);

  });
}
