var path = require("path");

/**
 * GET /api/v1/groups
 *
 * x-test-description: /api/v1/groups/:id - deletes a group
 * user-agent: mock-okta-client
 * accept: application/json
 * content-type: application/json
 * authorization: SSWS 00OgOWZBLBIID9O8SKRGgrJDqebJL54x2cPfzQ3U-l
 * host: rain.okta1.com:1802
 * connection: keep-alive
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqUtclIL-JQreKCWvJWn-pMQ");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=D2C9FA0507BD73B2653214AB87630E7A; Path=/"]);
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1188");
  res.setHeader("x-rate-limit-reset", "1487657432");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("link", "<http://rain.okta1.com:1802/api/v1/groups?limit=10000>; rel=\"self\"");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Tue, 21 Feb 2017 06:09:37 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOiIwMGdzYWRYQTJsSEVBWm5lMjBnMyIsImNyZWF0ZWQiOiIyMDE3LTAyLTIxVDA2OjA5OjMzLjAwMFoiLCJsYXN0VXBkYXRlZCI6IjIwMTctMDItMjFUMDY6MDk6MzMuMDAwWiIsImxhc3RNZW1iZXJzaGlwVXBkYXRlZCI6IjIwMTctMDItMjFUMDY6MDk6MzMuMDAwWiIsIm9iamVjdENsYXNzIjpbIm9rdGE6dXNlcl9ncm91cCJdLCJ0eXBlIjoiT0tUQV9HUk9VUCIsInByb2ZpbGUiOnsibmFtZSI6IkRlbGV0ZUdyb3VwIiwiZGVzY3JpcHRpb24iOiJUZXN0IGdyb3VwIHRoYXQgd2lsbCBiZSByZW1vdmVkIn0sIl9saW5rcyI6eyJsb2dvIjpbeyJuYW1lIjoibWVkaXVtIiwiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2Fzc2V0cy9pbWcvbG9nb3MvZ3JvdXBzL29rdGEtbWVkaXVtLmQ3ZmI4MzFiYzRlN2UxYTVkOGJkMzVkZmFmNDA1ZDllLnBuZyIsInR5cGUiOiJpbWFnZS9wbmcifSx7Im5hbWUiOiJsYXJnZSIsImhyZWYiOiJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hc3NldHMvaW1nL2xvZ29zL2dyb3Vwcy9va3RhLWxhcmdlLjUxMWZjYjBkZTlkYTE4NWI1MjU4OWNiMTRkNTgxYzJjLnBuZyIsInR5cGUiOiJpbWFnZS9wbmcifV0sInVzZXJzIjp7ImhyZWYiOiJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hcGkvdjEvZ3JvdXBzLzAwZ3NhZFhBMmxIRUFabmUyMGczL3VzZXJzIn0sImFwcHMiOnsiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2FwaS92MS9ncm91cHMvMDBnc2FkWEEybEhFQVpuZTIwZzMvYXBwcyJ9fX0seyJpZCI6IjAwZ2x0ZlhKZFFlWENRY2tHMGczIiwiY3JlYXRlZCI6IjIwMTctMDItMTNUMjE6MTc6NDUuMDAwWiIsImxhc3RVcGRhdGVkIjoiMjAxNy0wMi0xM1QyMToxNzo0NS4wMDBaIiwibGFzdE1lbWJlcnNoaXBVcGRhdGVkIjoiMjAxNy0wMi0yMVQwNjowOTozMy4wMDBaIiwib2JqZWN0Q2xhc3MiOlsib2t0YTp1c2VyX2dyb3VwIl0sInR5cGUiOiJCVUlMVF9JTiIsInByb2ZpbGUiOnsibmFtZSI6IkV2ZXJ5b25lIiwiZGVzY3JpcHRpb24iOiJBbGwgdXNlcnMgaW4geW91ciBvcmdhbml6YXRpb24ifSwiX2xpbmtzIjp7ImxvZ28iOlt7Im5hbWUiOiJtZWRpdW0iLCJocmVmIjoiaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXNzZXRzL2ltZy9sb2dvcy9ncm91cHMvb2t0YS1tZWRpdW0uZDdmYjgzMWJjNGU3ZTFhNWQ4YmQzNWRmYWY0MDVkOWUucG5nIiwidHlwZSI6ImltYWdlL3BuZyJ9LHsibmFtZSI6ImxhcmdlIiwiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2Fzc2V0cy9pbWcvbG9nb3MvZ3JvdXBzL29rdGEtbGFyZ2UuNTExZmNiMGRlOWRhMTg1YjUyNTg5Y2IxNGQ1ODFjMmMucG5nIiwidHlwZSI6ImltYWdlL3BuZyJ9XSwidXNlcnMiOnsiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2FwaS92MS9ncm91cHMvMDBnbHRmWEpkUWVYQ1Fja0cwZzMvdXNlcnMifSwiYXBwcyI6eyJocmVmIjoiaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXBpL3YxL2dyb3Vwcy8wMGdsdGZYSmRRZVhDUWNrRzBnMy9hcHBzIn19fSx7ImlkIjoiMDBnbWI0Q0JOQ3ZzYTlyQVUwZzMiLCJjcmVhdGVkIjoiMjAxNy0wMi0xNVQwMzo1OToyMC4wMDBaIiwibGFzdFVwZGF0ZWQiOiIyMDE3LTAyLTIxVDA2OjA3OjE3LjAwMFoiLCJsYXN0TWVtYmVyc2hpcFVwZGF0ZWQiOiIyMDE3LTAyLTIxVDA2OjA3OjIwLjAwMFoiLCJvYmplY3RDbGFzcyI6WyJva3RhOnVzZXJfZ3JvdXAiXSwidHlwZSI6Ik9LVEFfR1JPVVAiLCJwcm9maWxlIjp7Im5hbWUiOiJUZXN0R3JvdXAiLCJkZXNjcmlwdGlvbiI6IkFtZW5kZWQgZGVzY3JpcHRpb24ifSwiX2xpbmtzIjp7ImxvZ28iOlt7Im5hbWUiOiJtZWRpdW0iLCJocmVmIjoiaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXNzZXRzL2ltZy9sb2dvcy9ncm91cHMvb2t0YS1tZWRpdW0uZDdmYjgzMWJjNGU3ZTFhNWQ4YmQzNWRmYWY0MDVkOWUucG5nIiwidHlwZSI6ImltYWdlL3BuZyJ9LHsibmFtZSI6ImxhcmdlIiwiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2Fzc2V0cy9pbWcvbG9nb3MvZ3JvdXBzL29rdGEtbGFyZ2UuNTExZmNiMGRlOWRhMTg1YjUyNTg5Y2IxNGQ1ODFjMmMucG5nIiwidHlwZSI6ImltYWdlL3BuZyJ9XSwidXNlcnMiOnsiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2FwaS92MS9ncm91cHMvMDBnbWI0Q0JOQ3ZzYTlyQVUwZzMvdXNlcnMifSwiYXBwcyI6eyJocmVmIjoiaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXBpL3YxL2dyb3Vwcy8wMGdtYjRDQk5DdnNhOXJBVTBnMy9hcHBzIn19fSx7ImlkIjoiMDBnc2FtOVNpQVA4NzVjSkkwZzMiLCJjcmVhdGVkIjoiMjAxNy0wMi0yMVQwNjowOTozNy4wMDBaIiwibGFzdFVwZGF0ZWQiOiIyMDE3LTAyLTIxVDA2OjA5OjM3LjAwMFoiLCJsYXN0TWVtYmVyc2hpcFVwZGF0ZWQiOiIyMDE3LTAyLTIxVDA2OjA5OjM3LjAwMFoiLCJvYmplY3RDbGFzcyI6WyJva3RhOnVzZXJfZ3JvdXAiXSwidHlwZSI6Ik9LVEFfR1JPVVAiLCJwcm9maWxlIjp7Im5hbWUiOiJXZXN0IENvYXN0IFVzZXJzIiwiZGVzY3JpcHRpb24iOiJTdHJhaWdodCBPdXR0YSBDb21wdG9uIn0sIl9saW5rcyI6eyJsb2dvIjpbeyJuYW1lIjoibWVkaXVtIiwiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2Fzc2V0cy9pbWcvbG9nb3MvZ3JvdXBzL29rdGEtbWVkaXVtLmQ3ZmI4MzFiYzRlN2UxYTVkOGJkMzVkZmFmNDA1ZDllLnBuZyIsInR5cGUiOiJpbWFnZS9wbmcifSx7Im5hbWUiOiJsYXJnZSIsImhyZWYiOiJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hc3NldHMvaW1nL2xvZ29zL2dyb3Vwcy9va3RhLWxhcmdlLjUxMWZjYjBkZTlkYTE4NWI1MjU4OWNiMTRkNTgxYzJjLnBuZyIsInR5cGUiOiJpbWFnZS9wbmcifV0sInVzZXJzIjp7ImhyZWYiOiJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hcGkvdjEvZ3JvdXBzLzAwZ3NhbTlTaUFQODc1Y0pJMGczL3VzZXJzIn0sImFwcHMiOnsiaHJlZiI6Imh0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2FwaS92MS9ncm91cHMvMDBnc2FtOVNpQVA4NzVjSkkwZzMvYXBwcyJ9fX1d", "base64"));
  res.end();

  return __filename;
};
