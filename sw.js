if (!self.define) {
  let e,
    s = {};
  const i = (i, r) => (
    (i = new URL(i + ".js", r).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let o = {};
    const d = (e) => i(e, c),
      t = { module: { uri: c }, exports: o, require: d };
    s[c] = Promise.all(r.map((e) => t[e] || d(e))).then((e) => (n(...e), o));
  };
}
define(["./workbox-dcdab4db"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "css/style.css", revision: "c2db62cd11eeb021e465d4be6288cd37" },
        {
          url: "database.rules.json",
          revision: "a8dec78530cbd4ee9ece4713904434e1",
        },
        {
          url: "img/favicon.png",
          revision: "832a37dcfaa41f666409e94cdedc7002",
        },
        {
          url: "img/favicon.svg",
          revision: "3a83dcbafa04d38e4ddd7be368b2a178",
        },
        { url: "index.html", revision: "e4728520532289a66175bd2cb025c2b5" },
        { url: "js/script.js", revision: "e16e2dc4fc34b453a15b6aadf3e65e31" },
        { url: "manifest.json", revision: "46eb96bb532178126547223be1864664" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
