---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
tags: ['Next.js', 'Performance', 'SSG', 'SSR']
---

We recommend using (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.You should ask yourself: "Can I pre-render this page of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation isa good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

You should ask yourself: "Can I pre-render this page of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
