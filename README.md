Service Worker with IndexedDB Demo
==================================

In [this
demo](https://klaustrainer.github.io/service-worker-indexed-db-demo/),
the below image is stored in IndexedDB when the service worker is
installed. When the service worker is active, the image will be fetched
from IndexedDB store when it is requested.

If There Wasn't That Issue with Firefox…
----------------------------------------

This works in Chromium (and Chrome), but currently not in Firefox. And
yes, it's supposed to work in Firefox as well. When the service worker
is active, and the page gets (re-)loaded, Firefox is throwing an error
with the following message (unfortunately there's no additional
information in the console error log):

`A ServiceWorker intercepted the request and encountered an unexpected error.`

### Here the Image:

![You are supposed to be seeing an image here.](explore.jpg)

### Issue Report

The issue is filed in the Firefox issue tracker as [bug
1253777](https://bugzilla.mozilla.org/show_bug.cgi?id=1253777).

Workaround for Firefox
----------------------

For Firefox versions 46 or greater, there's a
[workaround](https://github.com/KlausTrainer/service-worker-indexed-db-demo/blob/47725fba243f8aeef2788647f9617281c1beb816/service-worker.js#L92)
that copies the image
[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) to an
[`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
The workaround is only available from Firefox version 46 or greater
because it uses
[`FileReader`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader),
which isn't supported in workers in prior versions.

Source Code
-----------

The source code is available
[here](https://github.com/KlausTrainer/service-worker-indexed-db-demo)
under the terms of the Apache License Version 2.0.
