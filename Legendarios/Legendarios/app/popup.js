// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */

var legendariosGenerator = {
    /**
     * URL com a lista das legendas
     *
     * @type {string}
     * @private
     */
    //urlTodas: 'http://legendas.kivson.com.br/todas',

    /**
     * XHR Get para pegar a lista das legendas.
     * 'onload' do XHR' dispara a renderização da lista
     *
     * @public
     */
    //requestTodas: function () {
    //    var req = new XMLHttpRequest();
    //    req.open("GET", this.urlTodas, true);
    //    req.onload = this.showTodas.bind(this);
    //    req.send(null);
    //},

    ///**
    // * Trata o retorno do showTodas
    // *
    // * @param {ProgressEvent} e The XHR ProgressEvent.
    // * @private
    // */
    //showTodas: function (e) {
    //    console.log(e.target.responseText);
    //    var legendas = JSON.parse(e.target.responseText);
    //    for (var i = 0; i < legendas.todas.length; i++) {
    //        var span = document.createElement('span');
    //        span.innerHTML = legendas.todas[i];
    //        var br = document.createElement('br');
    //        document.body.appendChild(span);
    //        document.body.appendChild(br);
    //    }
    //},

    teste: function()
    {
        $('#temp').typeahead({
            name: 'legendasss',
            prefetch: {
                url: 'http://legendas.kivson.com.br/todas',
                filter: function(data) {
                    return data.todas;
                }
            },
            limit: 5
        });
    }
};

// Gera a lista de todas quando carregar
document.addEventListener('DOMContentLoaded', function () {
    //legendariosGenerator.requestTodas();
    legendariosGenerator.teste();
});
