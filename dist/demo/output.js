define("s1", [], function () {
  return 0;
}),
  define("s2", [], function () {
    return 12;
  }),
  require(["s1", "s2"], function (n, e) {
    console.log(n + e);
  }),
  define("index", function () {});
