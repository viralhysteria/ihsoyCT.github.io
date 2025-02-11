/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      631: (e) => {
        function t(e, t, n, i) {
          if (!1 === t || null == t || (!t && ("class" === e || "style" === e)))
            return "";
          if (!0 === t) return " " + (i ? e : e + '="' + e + '"');
          var s = typeof t;
          return (
            ("object" !== s && "function" !== s) ||
              "function" != typeof t.toJSON ||
              (t = t.toJSON()),
            "string" == typeof t ||
            ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
              ? (n && (t = r(t)), " " + e + '="' + t + '"')
              : " " + e + "='" + t.replace(/'/g, "&#39;") + "'"
          );
        }
        function n(e, t) {
          return Array.isArray(e)
            ? (function (e, t) {
                for (
                  var i, s = "", u = "", a = Array.isArray(t), o = 0;
                  o < e.length;
                  o++
                )
                  (i = n(e[o])) &&
                    (a && t[o] && (i = r(i)), (s = s + u + i), (u = " "));
                return s;
              })(e, t)
            : e && "object" == typeof e
            ? (function (e) {
                var t = "",
                  n = "";
                for (var r in e)
                  r && e[r] && i.call(e, r) && ((t = t + n + r), (n = " "));
                return t;
              })(e)
            : e || "";
        }
        function r(e) {
          var t = "" + e,
            n = s.exec(t);
          if (!n) return e;
          var r,
            i,
            u,
            a = "";
          for (r = n.index, i = 0; r < t.length; r++) {
            switch (t.charCodeAt(r)) {
              case 34:
                u = "&quot;";
                break;
              case 38:
                u = "&amp;";
                break;
              case 60:
                u = "&lt;";
                break;
              case 62:
                u = "&gt;";
                break;
              default:
                continue;
            }
            i !== r && (a += t.substring(i, r)), (i = r + 1), (a += u);
          }
          return i !== r ? a + t.substring(i, r) : a;
        }
        var i = Object.prototype.hasOwnProperty,
          s = /["&<>]/;
        e.exports = function (e) {
          var i,
            s = "",
            u = e || {};
          return (
            function (e, u, a, o, l, c) {
              s =
                s +
                "<div" +
                t("class", n([o], [!0]), !1, !0) +
                "><p class='comment_title d-flex align-items-center border-bottom pt-1 pb-2 mb-2 gap-1'" +
                t("id", a, !0, !0) +
                "><a" +
                t("href", "https://reddit.com/user/" + e, !0, !0) +
                "id='author' class='fw-semibold'>" +
                r(null == (i = e) ? "" : i) +
                " </a><a" +
                t(
                  "href",
                  "index.html?mode=submissions&subreddit=&author=" + e,
                  !0,
                  !0
                ) +
                "><i class='bi-person-circle'></i> </a><a" +
                t("href", "index.html?mode=comments&author=" + e, !0, !0) +
                "><i class='bi-chat-left-dots me-1'></i> </a><span class='badge p-1 text-body ms-auto'>" +
                r(null == (i = c) ? "" : i) +
                "</span><span class='score badge p-1 text-body'><i class='bi bi-arrow-up me-2 text-success'></i>" +
                (null == (i = l) ? "" : i) +
                "<i class='bi bi-arrow-down ms-2 text-danger'></i></span></p><p>" +
                (null == (i = u) ? "" : i) +
                "</p><div class='children mt-1 bg-body-tertiary'" +
                t("id", "t1_" + a, !0, !0) +
                "></div></div></div>";
            }.call(
              this,
              "author" in u
                ? u.author
                : "undefined" != typeof author
                ? author
                : void 0,
              "body" in u ? u.body : "undefined" != typeof body ? body : void 0,
              "id" in u ? u.id : "undefined" != typeof id ? id : void 0,
              "postClass" in u
                ? u.postClass
                : "undefined" != typeof postClass
                ? postClass
                : void 0,
              "score" in u
                ? u.score
                : "undefined" != typeof score
                ? score
                : void 0,
              "time" in u ? u.time : "undefined" != typeof time ? time : void 0
            ),
            s
          );
        };
      },
      641: (e) => {
        function t(e, t, r, i) {
          if (!1 === t || null == t || (!t && ("class" === e || "style" === e)))
            return "";
          if (!0 === t) return " " + (i ? e : e + '="' + e + '"');
          var s = typeof t;
          return (
            ("object" !== s && "function" !== s) ||
              "function" != typeof t.toJSON ||
              (t = t.toJSON()),
            "string" == typeof t ||
            ((t = JSON.stringify(t)), r || -1 === t.indexOf('"'))
              ? (r && (t = n(t)), " " + e + '="' + t + '"')
              : " " + e + "='" + t.replace(/'/g, "&#39;") + "'"
          );
        }
        function n(e) {
          var t = "" + e,
            n = r.exec(t);
          if (!n) return e;
          var i,
            s,
            u,
            a = "";
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                u = "&quot;";
                break;
              case 38:
                u = "&amp;";
                break;
              case 60:
                u = "&lt;";
                break;
              case 62:
                u = "&gt;";
                break;
              default:
                continue;
            }
            s !== i && (a += t.substring(s, i)), (s = i + 1), (a += u);
          }
          return s !== i ? a + t.substring(s, i) : a;
        }
        var r = /["&<>]/;
        e.exports = function (e) {
          var r,
            i = "",
            s = e || {};
          return (
            function (e, s, u, a, o, l, c) {
              i =
                i +
                "<div class='post'><p class='comment_title'>" +
                n(null == (r = o) ? "" : r) +
                "</p><p class='comment_user'><a" +
                t("href", "https://reddit.com/user/" + e, !0, !0) +
                ">" +
                n(null == (r = e) ? "" : r) +
                " </a><a" +
                t(
                  "href",
                  "index.html?mode=submissions&subreddit=&author=" + e,
                  !0,
                  !0
                ) +
                "><i class='bi-person-circle'></i> </a><a" +
                t("href", "index.html?mode=comments&author=" + e, !0, !0) +
                "><i class='bi-chat-left-dots'></i> </a>- Score: " +
                n(null == (r = l) ? "" : r) +
                " ― " +
                n(null == (r = c) ? "" : r) +
                "</p><p>"(null == (r = s) ? "" : r) +
                "</p><div class='post_navigation'><a" +
                t("href", "index.html?comments=" + a + "&id=" + u, !0, !0) +
                ">Context</a></div></div>";
            }.call(
              this,
              "author" in s
                ? s.author
                : "undefined" != typeof author
                ? author
                : void 0,
              "body" in s ? s.body : "undefined" != typeof body ? body : void 0,
              "id" in s ? s.id : "undefined" != typeof id ? id : void 0,
              "link_id" in s
                ? s.link_id
                : "undefined" != typeof link_id
                ? link_id
                : void 0,
              "permalink" in s
                ? s.permalink
                : "undefined" != typeof permalink
                ? permalink
                : void 0,
              "score" in s
                ? s.score
                : "undefined" != typeof score
                ? score
                : void 0,
              "time" in s ? s.time : "undefined" != typeof time ? time : void 0
            ),
            i
          );
        };
      },
      598: (e) => {
        function t(e, t, r, i) {
          if (!1 === t || null == t || (!t && ("class" === e || "style" === e)))
            return "";
          if (!0 === t) return " " + (i ? e : e + '="' + e + '"');
          var s = typeof t;
          return (
            ("object" !== s && "function" !== s) ||
              "function" != typeof t.toJSON ||
              (t = t.toJSON()),
            "string" == typeof t ||
            ((t = JSON.stringify(t)), r || -1 === t.indexOf('"'))
              ? (r && (t = n(t)), " " + e + '="' + t + '"')
              : " " + e + "='" + t.replace(/'/g, "&#39;") + "'"
          );
        }
        function n(e) {
          var t = "" + e,
            n = r.exec(t);
          if (!n) return e;
          var i,
            s,
            u,
            a = "";
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                u = "&quot;";
                break;
              case 38:
                u = "&amp;";
                break;
              case 60:
                u = "&lt;";
                break;
              case 62:
                u = "&gt;";
                break;
              default:
                continue;
            }
            s !== i && (a += t.substring(s, i)), (s = i + 1), (a += u);
          }
          return s !== i ? a + t.substring(s, i) : a;
        }
        var r = /["&<>]/;
        e.exports = function (e) {
          var r,
            i = "",
            s = e || {};
          return (
            function (e, s, u, a, o, l, c, h, d, f) {
              i =
                i +
                "<div class='main border bg-body shadow-sm p-2 mb-3 rounded'>" +
                "<div class='op_title d-flex align-items-center border-bottom pb-2 mb-2 ms-1 gap-1'><a" +
                t("href", "https://reddit.com/user/" + e, !0, !0) +
                "id='author' class='ms-2 fw-semibold'>" +
                n(null == (r = e) ? "" : r) +
                "</a><a" +
                t(
                  "href",
                  "index.html?mode=submissions&subreddit=&author=" + e,
                  !0,
                  !0
                ) +
                "><i class='bi-person-circle'></i> </a><a" +
                t("href", "index.html?mode=comments&author=" + e, !0, !0) +
                "><i class='bi-chat-left-dots'></i> </a> <span class='badge p-1 text-body ms-auto'>" +
                n(null == (r = h) ? "" : r) +
                "</span> \n" +
                "<span class='score badge p-1 text-body'><i class='bi bi-arrow-up me-2 text-success'></i>" +
                n(null == (r = a) ? "" : r) +
                "<i class='bi bi-arrow-down ms-2 text-danger'></i></span>" +
                "</div>" +
                "<div class='container-fluid'>" +
                "<div class='post_title'><h3 style='word-break: break-word;''>" +
                n(null == (r = d) ? "" : r) +
                "</h3></div><div class='post_link text-break'><a" +
                t("href", f, !0, !0) +
                ">" +
                n(null == (r = f) ? "" : r) +
                "</a></div><div class='comment_link'><a" +
                t("href", "index.html?comments=" + s, !0, !0) +
                ">" +
                n(null == (r = u) ? "" : r) +
                " Comments</a></div><div class='thumbnail p-0 mt-3 border rounded-2 text-center'><img" +
                t("src", c, !0, !0) +
                "'></div><div" +
                t("id", "t3_" + s, !0, !0) +
                "><div class='post py-3 my-3 border rounded-2 fs-6'>" +
                (null == (r = o) ? "<span></span>" : r) +
                "</div></div></div>";
            }.call(
              this,
              "author" in s
                ? s.author
                : "undefined" != typeof author
                ? author
                : void 0,
              "id" in s ? s.id : "undefined" != typeof id ? id : void 0,
              "num_comments" in s
                ? s.num_comments
                : "undefined" != typeof num_comments
                ? num_comments
                : void 0,
              "score" in s
                ? s.score
                : "undefined" != typeof score
                ? score
                : void 0,
              "selftext" in s
                ? s.selftext
                : "undefined" != typeof selftext
                ? selftext
                : void 0,
              "subreddit" in s
                ? s.subreddit
                : "undefined" != typeof subreddit
                ? subreddit
                : void 0,
              "thumbnail" in s
                ? s.thumbnail
                : "undefined" != typeof thumbnail
                ? thumbnail
                : void 0,
              "time" in s ? s.time : "undefined" != typeof time ? time : void 0,
              "title" in s
                ? s.title
                : "undefined" != typeof title
                ? title
                : void 0,
              "url" in s ? s.url : "undefined" != typeof url ? url : void 0
            ),
            i
          );
        };
      },
      669: (e, t, n) => {
        e.exports = n(609);
      },
      448: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = n(26),
          s = n(372),
          u = n(327),
          a = n(97),
          o = n(109),
          l = n(985),
          c = n(61);
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var h = e.data,
              d = e.headers,
              f = e.responseType;
            r.isFormData(h) && delete d["Content-Type"];
            var p = new XMLHttpRequest();
            if (e.auth) {
              var m = e.auth.username || "",
                D = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              d.Authorization = "Basic " + btoa(m + ":" + D);
            }
            var g = a(e.baseURL, e.url);
            function y() {
              if (p) {
                var r =
                    "getAllResponseHeaders" in p
                      ? o(p.getAllResponseHeaders())
                      : null,
                  s = {
                    data:
                      f && "text" !== f && "json" !== f
                        ? p.response
                        : p.responseText,
                    status: p.status,
                    statusText: p.statusText,
                    headers: r,
                    config: e,
                    request: p,
                  };
                i(t, n, s), (p = null);
              }
            }
            if (
              (p.open(
                e.method.toUpperCase(),
                u(g, e.params, e.paramsSerializer),
                !0
              ),
              (p.timeout = e.timeout),
              "onloadend" in p
                ? (p.onloadend = y)
                : (p.onreadystatechange = function () {
                    p &&
                      4 === p.readyState &&
                      (0 !== p.status ||
                        (p.responseURL &&
                          0 === p.responseURL.indexOf("file:"))) &&
                      setTimeout(y);
                  }),
              (p.onabort = function () {
                p &&
                  (n(c("Request aborted", e, "ECONNABORTED", p)), (p = null));
              }),
              (p.onerror = function () {
                n(c("Network Error", e, null, p)), (p = null);
              }),
              (p.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    c(
                      t,
                      e,
                      e.transitional && e.transitional.clarifyTimeoutError
                        ? "ETIMEDOUT"
                        : "ECONNABORTED",
                      p
                    )
                  ),
                  (p = null);
              }),
              r.isStandardBrowserEnv())
            ) {
              var _ =
                (e.withCredentials || l(g)) && e.xsrfCookieName
                  ? s.read(e.xsrfCookieName)
                  : void 0;
              _ && (d[e.xsrfHeaderName] = _);
            }
            "setRequestHeader" in p &&
              r.forEach(d, function (e, t) {
                void 0 === h && "content-type" === t.toLowerCase()
                  ? delete d[t]
                  : p.setRequestHeader(t, e);
              }),
              r.isUndefined(e.withCredentials) ||
                (p.withCredentials = !!e.withCredentials),
              f && "json" !== f && (p.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                p.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                p.upload &&
                p.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  p && (p.abort(), n(e), (p = null));
                }),
              h || (h = null),
              p.send(h);
          });
        };
      },
      609: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = n(849),
          s = n(321),
          u = n(185);
        function a(e) {
          var t = new s(e),
            n = i(s.prototype.request, t);
          return r.extend(n, s.prototype, t), r.extend(n, t), n;
        }
        var o = a(n(655));
        (o.Axios = s),
          (o.create = function (e) {
            return a(u(o.defaults, e));
          }),
          (o.Cancel = n(263)),
          (o.CancelToken = n(972)),
          (o.isCancel = n(502)),
          (o.all = function (e) {
            return Promise.all(e);
          }),
          (o.spread = n(713)),
          (o.isAxiosError = n(268)),
          (e.exports = o),
          (e.exports.default = o);
      },
      263: (e) => {
        "use strict";
        function t(e) {
          this.message = e;
        }
        (t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (t.prototype.__CANCEL__ = !0),
          (e.exports = t);
      },
      972: (e, t, n) => {
        "use strict";
        var r = n(263);
        function i(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          e(function (e) {
            n.reason || ((n.reason = new r(e)), t(n.reason));
          });
        }
        (i.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (i.source = function () {
            var e;
            return {
              token: new i(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = i);
      },
      502: (e) => {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      321: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = n(327),
          s = n(782),
          u = n(572),
          a = n(185),
          o = n(875),
          l = o.validators;
        function c(e) {
          (this.defaults = e),
            (this.interceptors = { request: new s(), response: new s() });
        }
        (c.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = a(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = e.transitional;
          void 0 !== t &&
            o.assertOptions(
              t,
              {
                silentJSONParsing: l.transitional(l.boolean, "1.0.0"),
                forcedJSONParsing: l.transitional(l.boolean, "1.0.0"),
                clarifyTimeoutError: l.transitional(l.boolean, "1.0.0"),
              },
              !1
            );
          var n = [],
            r = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected));
          });
          var i,
            s = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              s.push(e.fulfilled, e.rejected);
            }),
            !r)
          ) {
            var c = [u, void 0];
            for (
              Array.prototype.unshift.apply(c, n),
                c = c.concat(s),
                i = Promise.resolve(e);
              c.length;

            )
              i = i.then(c.shift(), c.shift());
            return i;
          }
          for (var h = e; n.length; ) {
            var d = n.shift(),
              f = n.shift();
            try {
              h = d(h);
            } catch (e) {
              f(e);
              break;
            }
          }
          try {
            i = u(h);
          } catch (e) {
            return Promise.reject(e);
          }
          for (; s.length; ) i = i.then(s.shift(), s.shift());
          return i;
        }),
          (c.prototype.getUri = function (e) {
            return (
              (e = a(this.defaults, e)),
              i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          r.forEach(["delete", "get", "head", "options"], function (e) {
            c.prototype[e] = function (t, n) {
              return this.request(
                a(n || {}, { method: e, url: t, data: (n || {}).data })
              );
            };
          }),
          r.forEach(["post", "put", "patch"], function (e) {
            c.prototype[e] = function (t, n, r) {
              return this.request(a(r || {}, { method: e, url: t, data: n }));
            };
          }),
          (e.exports = c);
      },
      782: (e, t, n) => {
        "use strict";
        var r = n(867);
        function i() {
          this.handlers = [];
        }
        (i.prototype.use = function (e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (i.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (i.prototype.forEach = function (e) {
            r.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = i);
      },
      97: (e, t, n) => {
        "use strict";
        var r = n(793),
          i = n(303);
        e.exports = function (e, t) {
          return e && !r(t) ? i(e, t) : t;
        };
      },
      61: (e, t, n) => {
        "use strict";
        var r = n(481);
        e.exports = function (e, t, n, i, s) {
          var u = new Error(e);
          return r(u, t, n, i, s);
        };
      },
      572: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = n(527),
          s = n(502),
          u = n(655);
        function a(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
          return (
            a(e),
            (e.headers = e.headers || {}),
            (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = r.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            r.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || u.adapter)(e).then(
              function (t) {
                return (
                  a(e),
                  (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  s(t) ||
                    (a(e),
                    t &&
                      t.response &&
                      (t.response.data = i.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      481: (e) => {
        "use strict";
        e.exports = function (e, t, n, r, i) {
          return (
            (e.config = t),
            n && (e.code = n),
            (e.request = r),
            (e.response = i),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
              };
            }),
            e
          );
        };
      },
      185: (e, t, n) => {
        "use strict";
        var r = n(867);
        e.exports = function (e, t) {
          t = t || {};
          var n = {},
            i = ["url", "method", "data"],
            s = ["headers", "auth", "proxy", "params"],
            u = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            a = ["validateStatus"];
          function o(e, t) {
            return r.isPlainObject(e) && r.isPlainObject(t)
              ? r.merge(e, t)
              : r.isPlainObject(t)
              ? r.merge({}, t)
              : r.isArray(t)
              ? t.slice()
              : t;
          }
          function l(i) {
            r.isUndefined(t[i])
              ? r.isUndefined(e[i]) || (n[i] = o(void 0, e[i]))
              : (n[i] = o(e[i], t[i]));
          }
          r.forEach(i, function (e) {
            r.isUndefined(t[e]) || (n[e] = o(void 0, t[e]));
          }),
            r.forEach(s, l),
            r.forEach(u, function (i) {
              r.isUndefined(t[i])
                ? r.isUndefined(e[i]) || (n[i] = o(void 0, e[i]))
                : (n[i] = o(void 0, t[i]));
            }),
            r.forEach(a, function (r) {
              r in t
                ? (n[r] = o(e[r], t[r]))
                : r in e && (n[r] = o(void 0, e[r]));
            });
          var c = i.concat(s).concat(u).concat(a),
            h = Object.keys(e)
              .concat(Object.keys(t))
              .filter(function (e) {
                return -1 === c.indexOf(e);
              });
          return r.forEach(h, l), n;
        };
      },
      26: (e, t, n) => {
        "use strict";
        var r = n(61);
        e.exports = function (e, t, n) {
          var i = n.config.validateStatus;
          n.status && i && !i(n.status)
            ? t(
                r(
                  "Request failed with status code " + n.status,
                  n.config,
                  null,
                  n.request,
                  n
                )
              )
            : e(n);
        };
      },
      527: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = n(655);
        e.exports = function (e, t, n) {
          var s = this || i;
          return (
            r.forEach(n, function (n) {
              e = n.call(s, e, t);
            }),
            e
          );
        };
      },
      655: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = n(16),
          s = n(481),
          u = { "Content-Type": "application/x-www-form-urlencoded" };
        function a(e, t) {
          !r.isUndefined(e) &&
            r.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var o,
          l = {
            transitional: {
              silentJSONParsing: !0,
              forcedJSONParsing: !0,
              clarifyTimeoutError: !1,
            },
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                ("undefined" != typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (o = n(448)),
              o),
            transformRequest: [
              function (e, t) {
                return (
                  i(t, "Accept"),
                  i(t, "Content-Type"),
                  r.isFormData(e) ||
                  r.isArrayBuffer(e) ||
                  r.isBuffer(e) ||
                  r.isStream(e) ||
                  r.isFile(e) ||
                  r.isBlob(e)
                    ? e
                    : r.isArrayBufferView(e)
                    ? e.buffer
                    : r.isURLSearchParams(e)
                    ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                      e.toString())
                    : r.isObject(e) ||
                      (t && "application/json" === t["Content-Type"])
                    ? (a(t, "application/json"),
                      (function (e, t, n) {
                        if (r.isString(e))
                          try {
                            return (0, JSON.parse)(e), r.trim(e);
                          } catch (e) {
                            if ("SyntaxError" !== e.name) throw e;
                          }
                        return (0, JSON.stringify)(e);
                      })(e))
                    : e
                );
              },
            ],
            transformResponse: [
              function (e) {
                var t = this.transitional,
                  n = t && t.silentJSONParsing,
                  i = t && t.forcedJSONParsing,
                  u = !n && "json" === this.responseType;
                if (u || (i && r.isString(e) && e.length))
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (u) {
                      if ("SyntaxError" === e.name)
                        throw s(e, this, "E_JSON_PARSE");
                      throw e;
                    }
                  }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        r.forEach(["delete", "get", "head"], function (e) {
          l.headers[e] = {};
        }),
          r.forEach(["post", "put", "patch"], function (e) {
            l.headers[e] = r.merge(u);
          }),
          (e.exports = l);
      },
      849: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            return e.apply(t, n);
          };
        };
      },
      327: (e, t, n) => {
        "use strict";
        var r = n(867);
        function i(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
          if (!t) return e;
          var s;
          if (n) s = n(t);
          else if (r.isURLSearchParams(t)) s = t.toString();
          else {
            var u = [];
            r.forEach(t, function (e, t) {
              null != e &&
                (r.isArray(e) ? (t += "[]") : (e = [e]),
                r.forEach(e, function (e) {
                  r.isDate(e)
                    ? (e = e.toISOString())
                    : r.isObject(e) && (e = JSON.stringify(e)),
                    u.push(i(t) + "=" + i(e));
                }));
            }),
              (s = u.join("&"));
          }
          if (s) {
            var a = e.indexOf("#");
            -1 !== a && (e = e.slice(0, a)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
          }
          return e;
        };
      },
      303: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      372: (e, t, n) => {
        "use strict";
        var r = n(867);
        e.exports = r.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, i, s, u) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)),
                  r.isNumber(n) &&
                    a.push("expires=" + new Date(n).toGMTString()),
                  r.isString(i) && a.push("path=" + i),
                  r.isString(s) && a.push("domain=" + s),
                  !0 === u && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      793: (e) => {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      268: (e) => {
        "use strict";
        e.exports = function (e) {
          return "object" == typeof e && !0 === e.isAxiosError;
        };
      },
      985: (e, t, n) => {
        "use strict";
        var r = n(867);
        e.exports = r.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function i(e) {
                var r = e;
                return (
                  t && (n.setAttribute("href", r), (r = n.href)),
                  n.setAttribute("href", r),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = i(window.location.href)),
                function (t) {
                  var n = r.isString(t) ? i(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      16: (e, t, n) => {
        "use strict";
        var r = n(867);
        e.exports = function (e, t) {
          r.forEach(e, function (n, r) {
            r !== t &&
              r.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[r]);
          });
        };
      },
      109: (e, t, n) => {
        "use strict";
        var r = n(867),
          i = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            n,
            s,
            u = {};
          return e
            ? (r.forEach(e.split("\n"), function (e) {
                if (
                  ((s = e.indexOf(":")),
                  (t = r.trim(e.substr(0, s)).toLowerCase()),
                  (n = r.trim(e.substr(s + 1))),
                  t)
                ) {
                  if (u[t] && i.indexOf(t) >= 0) return;
                  u[t] =
                    "set-cookie" === t
                      ? (u[t] ? u[t] : []).concat([n])
                      : u[t]
                      ? u[t] + ", " + n
                      : n;
                }
              }),
              u)
            : u;
        };
      },
      713: (e) => {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      875: (e, t, n) => {
        "use strict";
        var r = n(593),
          i = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            i[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var s = {},
          u = r.version.split(".");
        function a(e, t) {
          for (
            var n = t ? t.split(".") : u, r = e.split("."), i = 0;
            i < 3;
            i++
          ) {
            if (n[i] > r[i]) return !0;
            if (n[i] < r[i]) return !1;
          }
          return !1;
        }
        (i.transitional = function (e, t, n) {
          var i = t && a(t);
          function u(e, t) {
            return (
              "[Axios v" +
              r.version +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return function (n, r, a) {
            if (!1 === e) throw new Error(u(r, " has been removed in " + t));
            return (
              i &&
                !s[r] &&
                ((s[r] = !0),
                console.warn(
                  u(
                    r,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, r, a)
            );
          };
        }),
          (e.exports = {
            isOlderVersion: a,
            assertOptions: function (e, t, n) {
              if ("object" != typeof e)
                throw new TypeError("options must be an object");
              for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
                var s = r[i],
                  u = t[s];
                if (u) {
                  var a = e[s],
                    o = void 0 === a || u(a, s, e);
                  if (!0 !== o)
                    throw new TypeError("option " + s + " must be " + o);
                } else if (!0 !== n) throw Error("Unknown option " + s);
              }
            },
            validators: i,
          });
      },
      867: (e, t, n) => {
        "use strict";
        var r = n(849),
          i = Object.prototype.toString;
        function s(e) {
          return "[object Array]" === i.call(e);
        }
        function u(e) {
          return void 0 === e;
        }
        function a(e) {
          return null !== e && "object" == typeof e;
        }
        function o(e) {
          if ("[object Object]" !== i.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function l(e) {
          return "[object Function]" === i.call(e);
        }
        function c(e, t) {
          if (null != e)
            if (("object" != typeof e && (e = [e]), s(e)))
              for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
            else
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) &&
                  t.call(null, e[i], i, e);
        }
        e.exports = {
          isArray: s,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === i.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !u(e) &&
              null !== e.constructor &&
              !u(e.constructor) &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: a,
          isPlainObject: o,
          isUndefined: u,
          isDate: function (e) {
            return "[object Date]" === i.call(e);
          },
          isFile: function (e) {
            return "[object File]" === i.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === i.call(e);
          },
          isFunction: l,
          isStream: function (e) {
            return a(e) && l(e.pipe);
          },
          isURLSearchParams: function (e) {
            return (
              "undefined" != typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: c,
          merge: function e() {
            var t = {};
            function n(n, r) {
              o(t[r]) && o(n)
                ? (t[r] = e(t[r], n))
                : o(n)
                ? (t[r] = e({}, n))
                : s(n)
                ? (t[r] = n.slice())
                : (t[r] = n);
            }
            for (var r = 0, i = arguments.length; r < i; r++)
              c(arguments[r], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              c(t, function (t, i) {
                e[i] = n && "function" == typeof t ? r(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
        };
      },
      674: (e) => {
        function t(e) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        (t.keys = () => []), (t.resolve = t), (t.id = 674), (e.exports = t);
      },
      381: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          "use strict";
          var t, r;
          function i() {
            return t.apply(null, arguments);
          }
          function s(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function u(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function a(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function o(e) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (a(e, t)) return !1;
            return !0;
          }
          function l(e) {
            return void 0 === e;
          }
          function c(e) {
            return (
              "number" == typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function h(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function d(e, t) {
            var n,
              r = [],
              i = e.length;
            for (n = 0; n < i; ++n) r.push(t(e[n], n));
            return r;
          }
          function f(e, t) {
            for (var n in t) a(t, n) && (e[n] = t[n]);
            return (
              a(t, "toString") && (e.toString = t.toString),
              a(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function p(e, t, n, r) {
            return Yt(e, t, n, r, !0).utc();
          }
          function m(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidEra: null,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  era: null,
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              e._pf
            );
          }
          function D(e) {
            if (null == e._isValid) {
              var t = m(e),
                n = r.call(t.parsedDateParts, function (e) {
                  return null != e;
                }),
                i =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidEra &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && n));
              if (
                (e._strict &&
                  (i =
                    i &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return i;
              e._isValid = i;
            }
            return e._isValid;
          }
          function g(e) {
            var t = p(NaN);
            return null != e ? f(m(t), e) : (m(t).userInvalidated = !0), t;
          }
          r = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                var t,
                  n = Object(this),
                  r = n.length >>> 0;
                for (t = 0; t < r; t++)
                  if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1;
              };
          var y = (i.momentProperties = []),
            _ = !1;
          function k(e, t) {
            var n,
              r,
              i,
              s = y.length;
            if (
              (l(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              l(t._i) || (e._i = t._i),
              l(t._f) || (e._f = t._f),
              l(t._l) || (e._l = t._l),
              l(t._strict) || (e._strict = t._strict),
              l(t._tzm) || (e._tzm = t._tzm),
              l(t._isUTC) || (e._isUTC = t._isUTC),
              l(t._offset) || (e._offset = t._offset),
              l(t._pf) || (e._pf = m(t)),
              l(t._locale) || (e._locale = t._locale),
              s > 0)
            )
              for (n = 0; n < s; n++) l((i = t[(r = y[n])])) || (e[r] = i);
            return e;
          }
          function v(e) {
            k(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === _ && ((_ = !0), i.updateOffset(this), (_ = !1));
          }
          function w(e) {
            return e instanceof v || (null != e && null != e._isAMomentObject);
          }
          function b(e) {
            !1 === i.suppressDeprecationWarnings &&
              "undefined" != typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function x(e, t) {
            var n = !0;
            return f(function () {
              if (
                (null != i.deprecationHandler && i.deprecationHandler(null, e),
                n)
              ) {
                var r,
                  s,
                  u,
                  o = [],
                  l = arguments.length;
                for (s = 0; s < l; s++) {
                  if (((r = ""), "object" == typeof arguments[s])) {
                    for (u in ((r += "\n[" + s + "] "), arguments[0]))
                      a(arguments[0], u) &&
                        (r += u + ": " + arguments[0][u] + ", ");
                    r = r.slice(0, -2);
                  } else r = arguments[s];
                  o.push(r);
                }
                b(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(o).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var C,
            F = {};
          function A(e, t) {
            null != i.deprecationHandler && i.deprecationHandler(e, t),
              F[e] || (b(t), (F[e] = !0));
          }
          function E(e) {
            return (
              ("undefined" != typeof Function && e instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function S(e, t) {
            var n,
              r = f({}, e);
            for (n in t)
              a(t, n) &&
                (u(e[n]) && u(t[n])
                  ? ((r[n] = {}), f(r[n], e[n]), f(r[n], t[n]))
                  : null != t[n]
                  ? (r[n] = t[n])
                  : delete r[n]);
            for (n in e) a(e, n) && !a(t, n) && u(e[n]) && (r[n] = f({}, r[n]));
            return r;
          }
          function M(e) {
            null != e && this.set(e);
          }
          (i.suppressDeprecationWarnings = !1),
            (i.deprecationHandler = null),
            (C = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) a(e, t) && n.push(t);
                  return n;
                });
          function B(e, t, n) {
            var r = "" + Math.abs(e),
              i = t - r.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, i)).toString().substr(1) +
              r
            );
          }
          var O =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            T = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Y = {},
            R = {};
          function N(e, t, n, r) {
            var i = r;
            "string" == typeof r &&
              (i = function () {
                return this[r]();
              }),
              e && (R[e] = i),
              t &&
                (R[t[0]] = function () {
                  return B(i.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (R[n] = function () {
                  return this.localeData().ordinal(i.apply(this, arguments), e);
                });
          }
          function P(e, t) {
            return e.isValid()
              ? ((t = j(t, e.localeData())),
                (Y[t] =
                  Y[t] ||
                  (function (e) {
                    var t,
                      n,
                      r,
                      i = e.match(O);
                    for (t = 0, n = i.length; t < n; t++)
                      R[i[t]]
                        ? (i[t] = R[i[t]])
                        : (i[t] = (r = i[t]).match(/\[[\s\S]/)
                            ? r.replace(/^\[|\]$/g, "")
                            : r.replace(/\\/g, ""));
                    return function (t) {
                      var r,
                        s = "";
                      for (r = 0; r < n; r++)
                        s += E(i[r]) ? i[r].call(t, e) : i[r];
                      return s;
                    };
                  })(t)),
                Y[t](e))
              : e.localeData().invalidDate();
          }
          function j(e, t) {
            var n = 5;
            function r(e) {
              return t.longDateFormat(e) || e;
            }
            for (T.lastIndex = 0; n >= 0 && T.test(e); )
              (e = e.replace(T, r)), (T.lastIndex = 0), (n -= 1);
            return e;
          }
          var L = {};
          function z(e, t) {
            var n = e.toLowerCase();
            L[n] = L[n + "s"] = L[t] = e;
          }
          function U(e) {
            return "string" == typeof e ? L[e] || L[e.toLowerCase()] : void 0;
          }
          function I(e) {
            var t,
              n,
              r = {};
            for (n in e) a(e, n) && (t = U(n)) && (r[t] = e[n]);
            return r;
          }
          var $ = {};
          function W(e, t) {
            $[e] = t;
          }
          function H(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          function V(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function G(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = V(t)), n;
          }
          function q(e, t) {
            return function (n) {
              return null != n
                ? (J(this, e, n), i.updateOffset(this, t), this)
                : Z(this, e);
            };
          }
          function Z(e, t) {
            return e.isValid()
              ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
              : NaN;
          }
          function J(e, t, n) {
            e.isValid() &&
              !isNaN(n) &&
              ("FullYear" === t &&
              H(e.year()) &&
              1 === e.month() &&
              29 === e.date()
                ? ((n = G(n)),
                  e._d["set" + (e._isUTC ? "UTC" : "") + t](
                    n,
                    e.month(),
                    Be(n, e.month())
                  ))
                : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
          }
          var Q,
            X = /\d/,
            K = /\d\d/,
            ee = /\d{3}/,
            te = /\d{4}/,
            ne = /[+-]?\d{6}/,
            re = /\d\d?/,
            ie = /\d\d\d\d?/,
            se = /\d\d\d\d\d\d?/,
            ue = /\d{1,3}/,
            ae = /\d{1,4}/,
            oe = /[+-]?\d{1,6}/,
            le = /\d+/,
            ce = /[+-]?\d+/,
            he = /Z|[+-]\d\d:?\d\d/gi,
            de = /Z|[+-]\d\d(?::?\d\d)?/gi,
            fe =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
          function pe(e, t, n) {
            Q[e] = E(t)
              ? t
              : function (e, r) {
                  return e && n ? n : t;
                };
          }
          function me(e, t) {
            return a(Q, e)
              ? Q[e](t._strict, t._locale)
              : new RegExp(
                  De(
                    e
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (e, t, n, r, i) {
                          return t || n || r || i;
                        }
                      )
                  )
                );
          }
          function De(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          Q = {};
          var ge = {};
          function ye(e, t) {
            var n,
              r,
              i = t;
            for (
              "string" == typeof e && (e = [e]),
                c(t) &&
                  (i = function (e, n) {
                    n[t] = G(e);
                  }),
                r = e.length,
                n = 0;
              n < r;
              n++
            )
              ge[e[n]] = i;
          }
          function _e(e, t) {
            ye(e, function (e, n, r, i) {
              (r._w = r._w || {}), t(e, r._w, r, i);
            });
          }
          function ke(e, t, n) {
            null != t && a(ge, e) && ge[e](t, n._a, n, e);
          }
          var ve,
            we = 0,
            be = 1,
            xe = 2,
            Ce = 3,
            Fe = 4,
            Ae = 5,
            Ee = 6,
            Se = 7,
            Me = 8;
          function Be(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n,
              r = ((t % (n = 12)) + n) % n;
            return (
              (e += (t - r) / 12),
              1 === r ? (H(e) ? 29 : 28) : 31 - ((r % 7) % 2)
            );
          }
          (ve = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            N("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            N("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            N("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            z("month", "M"),
            W("month", 8),
            pe("M", re),
            pe("MM", re, K),
            pe("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            pe("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            ye(["M", "MM"], function (e, t) {
              t[be] = G(e) - 1;
            }),
            ye(["MMM", "MMMM"], function (e, t, n, r) {
              var i = n._locale.monthsParse(e, r, n._strict);
              null != i ? (t[be] = i) : (m(n).invalidMonth = e);
            });
          var Oe =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            Te = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Ye = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Re = fe,
            Ne = fe;
          function Pe(e, t, n) {
            var r,
              i,
              s,
              u = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  r = 0;
                r < 12;
                ++r
              )
                (s = p([2e3, r])),
                  (this._shortMonthsParse[r] = this.monthsShort(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[r] = this.months(
                    s,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? -1 !== (i = ve.call(this._shortMonthsParse, u))
                  ? i
                  : null
                : -1 !== (i = ve.call(this._longMonthsParse, u))
                ? i
                : null
              : "MMM" === t
              ? -1 !== (i = ve.call(this._shortMonthsParse, u)) ||
                -1 !== (i = ve.call(this._longMonthsParse, u))
                ? i
                : null
              : -1 !== (i = ve.call(this._longMonthsParse, u)) ||
                -1 !== (i = ve.call(this._shortMonthsParse, u))
              ? i
              : null;
          }
          function je(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
              if (/^\d+$/.test(t)) t = G(t);
              else if (!c((t = e.localeData().monthsParse(t)))) return e;
            return (
              (n = Math.min(e.date(), Be(e.year(), t))),
              e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
              e
            );
          }
          function Le(e) {
            return null != e
              ? (je(this, e), i.updateOffset(this, !0), this)
              : Z(this, "Month");
          }
          function ze() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r = [],
              i = [],
              s = [];
            for (t = 0; t < 12; t++)
              (n = p([2e3, t])),
                r.push(this.monthsShort(n, "")),
                i.push(this.months(n, "")),
                s.push(this.months(n, "")),
                s.push(this.monthsShort(n, ""));
            for (r.sort(e), i.sort(e), s.sort(e), t = 0; t < 12; t++)
              (r[t] = De(r[t])), (i[t] = De(i[t]));
            for (t = 0; t < 24; t++) s[t] = De(s[t]);
            (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              ));
          }
          function Ue(e) {
            return H(e) ? 366 : 365;
          }
          N("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? B(e, 4) : "+" + e;
          }),
            N(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            N(0, ["YYYY", 4], 0, "year"),
            N(0, ["YYYYY", 5], 0, "year"),
            N(0, ["YYYYYY", 6, !0], 0, "year"),
            z("year", "y"),
            W("year", 1),
            pe("Y", ce),
            pe("YY", re, K),
            pe("YYYY", ae, te),
            pe("YYYYY", oe, ne),
            pe("YYYYYY", oe, ne),
            ye(["YYYYY", "YYYYYY"], we),
            ye("YYYY", function (e, t) {
              t[we] = 2 === e.length ? i.parseTwoDigitYear(e) : G(e);
            }),
            ye("YY", function (e, t) {
              t[we] = i.parseTwoDigitYear(e);
            }),
            ye("Y", function (e, t) {
              t[we] = parseInt(e, 10);
            }),
            (i.parseTwoDigitYear = function (e) {
              return G(e) + (G(e) > 68 ? 1900 : 2e3);
            });
          var Ie = q("FullYear", !0);
          function $e(e, t, n, r, i, s, u) {
            var a;
            return (
              e < 100 && e >= 0
                ? ((a = new Date(e + 400, t, n, r, i, s, u)),
                  isFinite(a.getFullYear()) && a.setFullYear(e))
                : (a = new Date(e, t, n, r, i, s, u)),
              a
            );
          }
          function We(e) {
            var t, n;
            return (
              e < 100 && e >= 0
                ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                  (t = new Date(Date.UTC.apply(null, n))),
                  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
                : (t = new Date(Date.UTC.apply(null, arguments))),
              t
            );
          }
          function He(e, t, n) {
            var r = 7 + t - n;
            return (-(7 + We(e, 0, r).getUTCDay() - t) % 7) + r - 1;
          }
          function Ve(e, t, n, r, i) {
            var s,
              u,
              a = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + He(e, r, i);
            return (
              a <= 0
                ? (u = Ue((s = e - 1)) + a)
                : a > Ue(e)
                ? ((s = e + 1), (u = a - Ue(e)))
                : ((s = e), (u = a)),
              { year: s, dayOfYear: u }
            );
          }
          function Ge(e, t, n) {
            var r,
              i,
              s = He(e.year(), t, n),
              u = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return (
              u < 1
                ? (r = u + qe((i = e.year() - 1), t, n))
                : u > qe(e.year(), t, n)
                ? ((r = u - qe(e.year(), t, n)), (i = e.year() + 1))
                : ((i = e.year()), (r = u)),
              { week: r, year: i }
            );
          }
          function qe(e, t, n) {
            var r = He(e, t, n),
              i = He(e + 1, t, n);
            return (Ue(e) - r + i) / 7;
          }
          N("w", ["ww", 2], "wo", "week"),
            N("W", ["WW", 2], "Wo", "isoWeek"),
            z("week", "w"),
            z("isoWeek", "W"),
            W("week", 5),
            W("isoWeek", 5),
            pe("w", re),
            pe("ww", re, K),
            pe("W", re),
            pe("WW", re, K),
            _e(["w", "ww", "W", "WW"], function (e, t, n, r) {
              t[r.substr(0, 1)] = G(e);
            });
          function Ze(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          N("d", 0, "do", "day"),
            N("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            N("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            N("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            N("e", 0, 0, "weekday"),
            N("E", 0, 0, "isoWeekday"),
            z("day", "d"),
            z("weekday", "e"),
            z("isoWeekday", "E"),
            W("day", 11),
            W("weekday", 11),
            W("isoWeekday", 11),
            pe("d", re),
            pe("e", re),
            pe("E", re),
            pe("dd", function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            pe("ddd", function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            pe("dddd", function (e, t) {
              return t.weekdaysRegex(e);
            }),
            _e(["dd", "ddd", "dddd"], function (e, t, n, r) {
              var i = n._locale.weekdaysParse(e, r, n._strict);
              null != i ? (t.d = i) : (m(n).invalidWeekday = e);
            }),
            _e(["d", "e", "E"], function (e, t, n, r) {
              t[r] = G(e);
            });
          var Je =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            Qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Ke = fe,
            et = fe,
            tt = fe;
          function nt(e, t, n) {
            var r,
              i,
              s,
              u = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  r = 0;
                r < 7;
                ++r
              )
                (s = p([2e3, 1]).day(r)),
                  (this._minWeekdaysParse[r] = this.weekdaysMin(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[r] = this.weekdaysShort(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[r] = this.weekdays(
                    s,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? -1 !== (i = ve.call(this._weekdaysParse, u))
                  ? i
                  : null
                : "ddd" === t
                ? -1 !== (i = ve.call(this._shortWeekdaysParse, u))
                  ? i
                  : null
                : -1 !== (i = ve.call(this._minWeekdaysParse, u))
                ? i
                : null
              : "dddd" === t
              ? -1 !== (i = ve.call(this._weekdaysParse, u)) ||
                -1 !== (i = ve.call(this._shortWeekdaysParse, u)) ||
                -1 !== (i = ve.call(this._minWeekdaysParse, u))
                ? i
                : null
              : "ddd" === t
              ? -1 !== (i = ve.call(this._shortWeekdaysParse, u)) ||
                -1 !== (i = ve.call(this._weekdaysParse, u)) ||
                -1 !== (i = ve.call(this._minWeekdaysParse, u))
                ? i
                : null
              : -1 !== (i = ve.call(this._minWeekdaysParse, u)) ||
                -1 !== (i = ve.call(this._weekdaysParse, u)) ||
                -1 !== (i = ve.call(this._shortWeekdaysParse, u))
              ? i
              : null;
          }
          function rt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              i,
              s,
              u = [],
              a = [],
              o = [],
              l = [];
            for (t = 0; t < 7; t++)
              (n = p([2e3, 1]).day(t)),
                (r = De(this.weekdaysMin(n, ""))),
                (i = De(this.weekdaysShort(n, ""))),
                (s = De(this.weekdays(n, ""))),
                u.push(r),
                a.push(i),
                o.push(s),
                l.push(r),
                l.push(i),
                l.push(s);
            u.sort(e),
              a.sort(e),
              o.sort(e),
              l.sort(e),
              (this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + u.join("|") + ")",
                "i"
              ));
          }
          function it() {
            return this.hours() % 12 || 12;
          }
          function st(e, t) {
            N(e, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function ut(e, t) {
            return t._meridiemParse;
          }
          N("H", ["HH", 2], 0, "hour"),
            N("h", ["hh", 2], 0, it),
            N("k", ["kk", 2], 0, function () {
              return this.hours() || 24;
            }),
            N("hmm", 0, 0, function () {
              return "" + it.apply(this) + B(this.minutes(), 2);
            }),
            N("hmmss", 0, 0, function () {
              return (
                "" +
                it.apply(this) +
                B(this.minutes(), 2) +
                B(this.seconds(), 2)
              );
            }),
            N("Hmm", 0, 0, function () {
              return "" + this.hours() + B(this.minutes(), 2);
            }),
            N("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2)
              );
            }),
            st("a", !0),
            st("A", !1),
            z("hour", "h"),
            W("hour", 13),
            pe("a", ut),
            pe("A", ut),
            pe("H", re),
            pe("h", re),
            pe("k", re),
            pe("HH", re, K),
            pe("hh", re, K),
            pe("kk", re, K),
            pe("hmm", ie),
            pe("hmmss", se),
            pe("Hmm", ie),
            pe("Hmmss", se),
            ye(["H", "HH"], Ce),
            ye(["k", "kk"], function (e, t, n) {
              var r = G(e);
              t[Ce] = 24 === r ? 0 : r;
            }),
            ye(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            ye(["h", "hh"], function (e, t, n) {
              (t[Ce] = G(e)), (m(n).bigHour = !0);
            }),
            ye("hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[Ce] = G(e.substr(0, r))),
                (t[Fe] = G(e.substr(r))),
                (m(n).bigHour = !0);
            }),
            ye("hmmss", function (e, t, n) {
              var r = e.length - 4,
                i = e.length - 2;
              (t[Ce] = G(e.substr(0, r))),
                (t[Fe] = G(e.substr(r, 2))),
                (t[Ae] = G(e.substr(i))),
                (m(n).bigHour = !0);
            }),
            ye("Hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[Ce] = G(e.substr(0, r))), (t[Fe] = G(e.substr(r)));
            }),
            ye("Hmmss", function (e, t, n) {
              var r = e.length - 4,
                i = e.length - 2;
              (t[Ce] = G(e.substr(0, r))),
                (t[Fe] = G(e.substr(r, 2))),
                (t[Ae] = G(e.substr(i)));
            });
          var at = q("Hours", !0);
          var ot,
            lt = {
              calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
              },
              longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
              },
              invalidDate: "Invalid date",
              ordinal: "%d",
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
              },
              months: Oe,
              monthsShort: Te,
              week: { dow: 0, doy: 6 },
              weekdays: Je,
              weekdaysMin: Xe,
              weekdaysShort: Qe,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            ct = {},
            ht = {};
          function dt(e, t) {
            var n,
              r = Math.min(e.length, t.length);
            for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
            return r;
          }
          function ft(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function pt(t) {
            var r = null;
            if (
              void 0 === ct[t] &&
              e &&
              e.exports &&
              (function (e) {
                return null != e.match("^[^/\\\\]*$");
              })(t)
            )
              try {
                (r = ot._abbr), n(674)("./" + t), mt(r);
              } catch (e) {
                ct[t] = null;
              }
            return ct[t];
          }
          function mt(e, t) {
            var n;
            return (
              e &&
                ((n = l(t) ? gt(e) : Dt(e, t))
                  ? (ot = n)
                  : "undefined" != typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              ot._abbr
            );
          }
          function Dt(e, t) {
            if (null !== t) {
              var n,
                r = lt;
              if (((t.abbr = e), null != ct[e]))
                A(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (r = ct[e]._config);
              else if (null != t.parentLocale)
                if (null != ct[t.parentLocale]) r = ct[t.parentLocale]._config;
                else {
                  if (null == (n = pt(t.parentLocale)))
                    return (
                      ht[t.parentLocale] || (ht[t.parentLocale] = []),
                      ht[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  r = n._config;
                }
              return (
                (ct[e] = new M(S(r, t))),
                ht[e] &&
                  ht[e].forEach(function (e) {
                    Dt(e.name, e.config);
                  }),
                mt(e),
                ct[e]
              );
            }
            return delete ct[e], null;
          }
          function gt(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return ot;
            if (!s(e)) {
              if ((t = pt(e))) return t;
              e = [e];
            }
            return (function (e) {
              for (var t, n, r, i, s = 0; s < e.length; ) {
                for (
                  t = (i = ft(e[s]).split("-")).length,
                    n = (n = ft(e[s + 1])) ? n.split("-") : null;
                  t > 0;

                ) {
                  if ((r = pt(i.slice(0, t).join("-")))) return r;
                  if (n && n.length >= t && dt(i, n) >= t - 1) break;
                  t--;
                }
                s++;
              }
              return ot;
            })(e);
          }
          function yt(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === m(e).overflow &&
                ((t =
                  n[be] < 0 || n[be] > 11
                    ? be
                    : n[xe] < 1 || n[xe] > Be(n[we], n[be])
                    ? xe
                    : n[Ce] < 0 ||
                      n[Ce] > 24 ||
                      (24 === n[Ce] &&
                        (0 !== n[Fe] || 0 !== n[Ae] || 0 !== n[Ee]))
                    ? Ce
                    : n[Fe] < 0 || n[Fe] > 59
                    ? Fe
                    : n[Ae] < 0 || n[Ae] > 59
                    ? Ae
                    : n[Ee] < 0 || n[Ee] > 999
                    ? Ee
                    : -1),
                m(e)._overflowDayOfYear && (t < we || t > xe) && (t = xe),
                m(e)._overflowWeeks && -1 === t && (t = Se),
                m(e)._overflowWeekday && -1 === t && (t = Me),
                (m(e).overflow = t)),
              e
            );
          }
          var _t =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            kt =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            vt = /Z|[+-]\d\d(?::?\d\d)?/,
            wt = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
              ["YYYYMM", /\d{6}/, !1],
              ["YYYY", /\d{4}/, !1],
            ],
            bt = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            xt = /^\/?Date\((-?\d+)/i,
            Ct =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            Ft = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          function At(e) {
            var t,
              n,
              r,
              i,
              s,
              u,
              a = e._i,
              o = _t.exec(a) || kt.exec(a),
              l = wt.length,
              c = bt.length;
            if (o) {
              for (m(e).iso = !0, t = 0, n = l; t < n; t++)
                if (wt[t][1].exec(o[1])) {
                  (i = wt[t][0]), (r = !1 !== wt[t][2]);
                  break;
                }
              if (null == i) return void (e._isValid = !1);
              if (o[3]) {
                for (t = 0, n = c; t < n; t++)
                  if (bt[t][1].exec(o[3])) {
                    s = (o[2] || " ") + bt[t][0];
                    break;
                  }
                if (null == s) return void (e._isValid = !1);
              }
              if (!r && null != s) return void (e._isValid = !1);
              if (o[4]) {
                if (!vt.exec(o[4])) return void (e._isValid = !1);
                u = "Z";
              }
              (e._f = i + (s || "") + (u || "")), Ot(e);
            } else e._isValid = !1;
          }
          function Et(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          function St(e) {
            var t,
              n,
              r,
              i,
              s,
              u,
              a,
              o,
              l = Ct.exec(
                e._i
                  .replace(/\([^()]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, "")
              );
            if (l) {
              if (
                ((n = l[4]),
                (r = l[3]),
                (i = l[2]),
                (s = l[5]),
                (u = l[6]),
                (a = l[7]),
                (o = [
                  Et(n),
                  Te.indexOf(r),
                  parseInt(i, 10),
                  parseInt(s, 10),
                  parseInt(u, 10),
                ]),
                a && o.push(parseInt(a, 10)),
                (t = o),
                !(function (e, t, n) {
                  return (
                    !e ||
                    Qe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
                    ((m(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                  );
                })(l[1], t, e))
              )
                return;
              (e._a = t),
                (e._tzm = (function (e, t, n) {
                  if (e) return Ft[e];
                  if (t) return 0;
                  var r = parseInt(n, 10),
                    i = r % 100;
                  return ((r - i) / 100) * 60 + i;
                })(l[8], l[9], l[10])),
                (e._d = We.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (m(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function Mt(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function Bt(e) {
            var t,
              n,
              r,
              s,
              u,
              a = [];
            if (!e._d) {
              for (
                r = (function (e) {
                  var t = new Date(i.now());
                  return e._useUTC
                    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                    : [t.getFullYear(), t.getMonth(), t.getDate()];
                })(e),
                  e._w &&
                    null == e._a[xe] &&
                    null == e._a[be] &&
                    (function (e) {
                      var t, n, r, i, s, u, a, o, l;
                      null != (t = e._w).GG || null != t.W || null != t.E
                        ? ((s = 1),
                          (u = 4),
                          (n = Mt(t.GG, e._a[we], Ge(Rt(), 1, 4).year)),
                          (r = Mt(t.W, 1)),
                          ((i = Mt(t.E, 1)) < 1 || i > 7) && (o = !0))
                        : ((s = e._locale._week.dow),
                          (u = e._locale._week.doy),
                          (l = Ge(Rt(), s, u)),
                          (n = Mt(t.gg, e._a[we], l.year)),
                          (r = Mt(t.w, l.week)),
                          null != t.d
                            ? ((i = t.d) < 0 || i > 6) && (o = !0)
                            : null != t.e
                            ? ((i = t.e + s), (t.e < 0 || t.e > 6) && (o = !0))
                            : (i = s)),
                        r < 1 || r > qe(n, s, u)
                          ? (m(e)._overflowWeeks = !0)
                          : null != o
                          ? (m(e)._overflowWeekday = !0)
                          : ((a = Ve(n, r, i, s, u)),
                            (e._a[we] = a.year),
                            (e._dayOfYear = a.dayOfYear));
                    })(e),
                  null != e._dayOfYear &&
                    ((u = Mt(e._a[we], r[we])),
                    (e._dayOfYear > Ue(u) || 0 === e._dayOfYear) &&
                      (m(e)._overflowDayOfYear = !0),
                    (n = We(u, 0, e._dayOfYear)),
                    (e._a[be] = n.getUTCMonth()),
                    (e._a[xe] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = a[t] = r[t];
              for (; t < 7; t++)
                e._a[t] = a[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Ce] &&
                0 === e._a[Fe] &&
                0 === e._a[Ae] &&
                0 === e._a[Ee] &&
                ((e._nextDay = !0), (e._a[Ce] = 0)),
                (e._d = (e._useUTC ? We : $e).apply(null, a)),
                (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Ce] = 24),
                e._w &&
                  void 0 !== e._w.d &&
                  e._w.d !== s &&
                  (m(e).weekdayMismatch = !0);
            }
          }
          function Ot(e) {
            if (e._f !== i.ISO_8601)
              if (e._f !== i.RFC_2822) {
                (e._a = []), (m(e).empty = !0);
                var t,
                  n,
                  r,
                  s,
                  u,
                  a,
                  o,
                  l = "" + e._i,
                  c = l.length,
                  h = 0;
                for (
                  o = (r = j(e._f, e._locale).match(O) || []).length, t = 0;
                  t < o;
                  t++
                )
                  (s = r[t]),
                    (n = (l.match(me(s, e)) || [])[0]) &&
                      ((u = l.substr(0, l.indexOf(n))).length > 0 &&
                        m(e).unusedInput.push(u),
                      (l = l.slice(l.indexOf(n) + n.length)),
                      (h += n.length)),
                    R[s]
                      ? (n ? (m(e).empty = !1) : m(e).unusedTokens.push(s),
                        ke(s, n, e))
                      : e._strict && !n && m(e).unusedTokens.push(s);
                (m(e).charsLeftOver = c - h),
                  l.length > 0 && m(e).unusedInput.push(l),
                  e._a[Ce] <= 12 &&
                    !0 === m(e).bigHour &&
                    e._a[Ce] > 0 &&
                    (m(e).bigHour = void 0),
                  (m(e).parsedDateParts = e._a.slice(0)),
                  (m(e).meridiem = e._meridiem),
                  (e._a[Ce] = (function (e, t, n) {
                    var r;
                    return null == n
                      ? t
                      : null != e.meridiemHour
                      ? e.meridiemHour(t, n)
                      : null != e.isPM
                      ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                        r || 12 !== t || (t = 0),
                        t)
                      : t;
                  })(e._locale, e._a[Ce], e._meridiem)),
                  null !== (a = m(e).era) &&
                    (e._a[we] = e._locale.erasConvertYear(a, e._a[we])),
                  Bt(e),
                  yt(e);
              } else St(e);
            else At(e);
          }
          function Tt(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || gt(e._l)),
              null === t || (void 0 === n && "" === t)
                ? g({ nullInput: !0 })
                : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                  w(t)
                    ? new v(yt(t))
                    : (h(t)
                        ? (e._d = t)
                        : s(n)
                        ? (function (e) {
                            var t,
                              n,
                              r,
                              i,
                              s,
                              u,
                              a = !1,
                              o = e._f.length;
                            if (0 === o)
                              return (
                                (m(e).invalidFormat = !0),
                                void (e._d = new Date(NaN))
                              );
                            for (i = 0; i < o; i++)
                              (s = 0),
                                (u = !1),
                                (t = k({}, e)),
                                null != e._useUTC && (t._useUTC = e._useUTC),
                                (t._f = e._f[i]),
                                Ot(t),
                                D(t) && (u = !0),
                                (s += m(t).charsLeftOver),
                                (s += 10 * m(t).unusedTokens.length),
                                (m(t).score = s),
                                a
                                  ? s < r && ((r = s), (n = t))
                                  : (null == r || s < r || u) &&
                                    ((r = s), (n = t), u && (a = !0));
                            f(e, n || t);
                          })(e)
                        : n
                        ? Ot(e)
                        : (function (e) {
                            var t = e._i;
                            l(t)
                              ? (e._d = new Date(i.now()))
                              : h(t)
                              ? (e._d = new Date(t.valueOf()))
                              : "string" == typeof t
                              ? (function (e) {
                                  var t = xt.exec(e._i);
                                  null === t
                                    ? (At(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        St(e),
                                        !1 === e._isValid &&
                                          (delete e._isValid,
                                          e._strict
                                            ? (e._isValid = !1)
                                            : i.createFromInputFallback(e))))
                                    : (e._d = new Date(+t[1]));
                                })(e)
                              : s(t)
                              ? ((e._a = d(t.slice(0), function (e) {
                                  return parseInt(e, 10);
                                })),
                                Bt(e))
                              : u(t)
                              ? (function (e) {
                                  if (!e._d) {
                                    var t = I(e._i),
                                      n = void 0 === t.day ? t.date : t.day;
                                    (e._a = d(
                                      [
                                        t.year,
                                        t.month,
                                        n,
                                        t.hour,
                                        t.minute,
                                        t.second,
                                        t.millisecond,
                                      ],
                                      function (e) {
                                        return e && parseInt(e, 10);
                                      }
                                    )),
                                      Bt(e);
                                  }
                                })(e)
                              : c(t)
                              ? (e._d = new Date(t))
                              : i.createFromInputFallback(e);
                          })(e),
                      D(e) || (e._d = null),
                      e))
            );
          }
          function Yt(e, t, n, r, i) {
            var a,
              l = {};
            return (
              (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
              (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
              ((u(e) && o(e)) || (s(e) && 0 === e.length)) && (e = void 0),
              (l._isAMomentObject = !0),
              (l._useUTC = l._isUTC = i),
              (l._l = n),
              (l._i = e),
              (l._f = t),
              (l._strict = r),
              (a = new v(yt(Tt(l))))._nextDay &&
                (a.add(1, "d"), (a._nextDay = void 0)),
              a
            );
          }
          function Rt(e, t, n, r) {
            return Yt(e, t, n, r, !1);
          }
          (i.createFromInputFallback = x(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (i.ISO_8601 = function () {}),
            (i.RFC_2822 = function () {});
          var Nt = x(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Rt.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : g();
              }
            ),
            Pt = x(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Rt.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : g();
              }
            );
          function jt(e, t) {
            var n, r;
            if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length))
              return Rt();
            for (n = t[0], r = 1; r < t.length; ++r)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          }
          var Lt = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
          function zt(e) {
            var t = I(e),
              n = t.year || 0,
              r = t.quarter || 0,
              i = t.month || 0,
              s = t.week || t.isoWeek || 0,
              u = t.day || 0,
              o = t.hour || 0,
              l = t.minute || 0,
              c = t.second || 0,
              h = t.millisecond || 0;
            (this._isValid = (function (e) {
              var t,
                n,
                r = !1,
                i = Lt.length;
              for (t in e)
                if (
                  a(e, t) &&
                  (-1 === ve.call(Lt, t) || (null != e[t] && isNaN(e[t])))
                )
                  return !1;
              for (n = 0; n < i; ++n)
                if (e[Lt[n]]) {
                  if (r) return !1;
                  parseFloat(e[Lt[n]]) !== G(e[Lt[n]]) && (r = !0);
                }
              return !0;
            })(t)),
              (this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * o * 60 * 60),
              (this._days = +u + 7 * s),
              (this._months = +i + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = gt()),
              this._bubble();
          }
          function Ut(e) {
            return e instanceof zt;
          }
          function It(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function $t(e, t) {
            N(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + B(~~(e / 60), 2) + t + B(~~e % 60, 2)
              );
            });
          }
          $t("Z", ":"),
            $t("ZZ", ""),
            pe("Z", de),
            pe("ZZ", de),
            ye(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = Ht(de, e));
            });
          var Wt = /([\+\-]|\d\d)/gi;
          function Ht(e, t) {
            var n,
              r,
              i = (t || "").match(e);
            return null === i
              ? null
              : 0 ===
                (r =
                  60 *
                    (n = ((i[i.length - 1] || []) + "").match(Wt) || [
                      "-",
                      0,
                      0,
                    ])[1] +
                  G(n[2]))
              ? 0
              : "+" === n[0]
              ? r
              : -r;
          }
          function Vt(e, t) {
            var n, r;
            return t._isUTC
              ? ((n = t.clone()),
                (r =
                  (w(e) || h(e) ? e.valueOf() : Rt(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + r),
                i.updateOffset(n, !1),
                n)
              : Rt(e).local();
          }
          function Gt(e) {
            return -Math.round(e._d.getTimezoneOffset());
          }
          function qt() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          i.updateOffset = function () {};
          var Zt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Jt =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Qt(e, t) {
            var n,
              r,
              i,
              s,
              u,
              o,
              l = e,
              h = null;
            return (
              Ut(e)
                ? (l = { ms: e._milliseconds, d: e._days, M: e._months })
                : c(e) || !isNaN(+e)
                ? ((l = {}), t ? (l[t] = +e) : (l.milliseconds = +e))
                : (h = Zt.exec(e))
                ? ((n = "-" === h[1] ? -1 : 1),
                  (l = {
                    y: 0,
                    d: G(h[xe]) * n,
                    h: G(h[Ce]) * n,
                    m: G(h[Fe]) * n,
                    s: G(h[Ae]) * n,
                    ms: G(It(1e3 * h[Ee])) * n,
                  }))
                : (h = Jt.exec(e))
                ? ((n = "-" === h[1] ? -1 : 1),
                  (l = {
                    y: Xt(h[2], n),
                    M: Xt(h[3], n),
                    w: Xt(h[4], n),
                    d: Xt(h[5], n),
                    h: Xt(h[6], n),
                    m: Xt(h[7], n),
                    s: Xt(h[8], n),
                  }))
                : null == l
                ? (l = {})
                : "object" == typeof l &&
                  ("from" in l || "to" in l) &&
                  ((s = Rt(l.from)),
                  (u = Rt(l.to)),
                  (i =
                    s.isValid() && u.isValid()
                      ? ((u = Vt(u, s)),
                        s.isBefore(u)
                          ? (o = Kt(s, u))
                          : (((o = Kt(u, s)).milliseconds = -o.milliseconds),
                            (o.months = -o.months)),
                        o)
                      : { milliseconds: 0, months: 0 }),
                  ((l = {}).ms = i.milliseconds),
                  (l.M = i.months)),
              (r = new zt(l)),
              Ut(e) && a(e, "_locale") && (r._locale = e._locale),
              Ut(e) && a(e, "_isValid") && (r._isValid = e._isValid),
              r
            );
          }
          function Xt(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function Kt(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function en(e, t) {
            return function (n, r) {
              var i;
              return (
                null === r ||
                  isNaN(+r) ||
                  (A(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (i = n),
                  (n = r),
                  (r = i)),
                tn(this, Qt(n, r), e),
                this
              );
            };
          }
          function tn(e, t, n, r) {
            var s = t._milliseconds,
              u = It(t._days),
              a = It(t._months);
            e.isValid() &&
              ((r = null == r || r),
              a && je(e, Z(e, "Month") + a * n),
              u && J(e, "Date", Z(e, "Date") + u * n),
              s && e._d.setTime(e._d.valueOf() + s * n),
              r && i.updateOffset(e, u || a));
          }
          (Qt.fn = zt.prototype),
            (Qt.invalid = function () {
              return Qt(NaN);
            });
          var nn = en(1, "add"),
            rn = en(-1, "subtract");
          function sn(e) {
            return "string" == typeof e || e instanceof String;
          }
          function un(e) {
            return (
              w(e) ||
              h(e) ||
              sn(e) ||
              c(e) ||
              (function (e) {
                var t = s(e),
                  n = !1;
                return (
                  t &&
                    (n =
                      0 ===
                      e.filter(function (t) {
                        return !c(t) && sn(e);
                      }).length),
                  t && n
                );
              })(e) ||
              (function (e) {
                var t,
                  n,
                  r = u(e) && !o(e),
                  i = !1,
                  s = [
                    "years",
                    "year",
                    "y",
                    "months",
                    "month",
                    "M",
                    "days",
                    "day",
                    "d",
                    "dates",
                    "date",
                    "D",
                    "hours",
                    "hour",
                    "h",
                    "minutes",
                    "minute",
                    "m",
                    "seconds",
                    "second",
                    "s",
                    "milliseconds",
                    "millisecond",
                    "ms",
                  ],
                  l = s.length;
                for (t = 0; t < l; t += 1) (n = s[t]), (i = i || a(e, n));
                return r && i;
              })(e) ||
              null == e
            );
          }
          function an(e, t) {
            if (e.date() < t.date()) return -an(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(n, "months");
            return (
              -(
                n +
                (t - r < 0
                  ? (t - r) / (r - e.clone().add(n - 1, "months"))
                  : (t - r) / (e.clone().add(n + 1, "months") - r))
              ) || 0
            );
          }
          function on(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = gt(e)) && (this._locale = t), this);
          }
          (i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var ln = x(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function cn() {
            return this._locale;
          }
          var hn = 1e3,
            dn = 6e4,
            fn = 36e5,
            pn = 126227808e5;
          function mn(e, t) {
            return ((e % t) + t) % t;
          }
          function Dn(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - pn
              : new Date(e, t, n).valueOf();
          }
          function gn(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - pn
              : Date.UTC(e, t, n);
          }
          function yn(e, t) {
            return t.erasAbbrRegex(e);
          }
          function _n() {
            var e,
              t,
              n = [],
              r = [],
              i = [],
              s = [],
              u = this.eras();
            for (e = 0, t = u.length; e < t; ++e)
              r.push(De(u[e].name)),
                n.push(De(u[e].abbr)),
                i.push(De(u[e].narrow)),
                s.push(De(u[e].name)),
                s.push(De(u[e].abbr)),
                s.push(De(u[e].narrow));
            (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
              (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
              (this._erasNarrowRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              ));
          }
          function kn(e, t) {
            N(0, [e, e.length], 0, t);
          }
          function vn(e, t, n, r, i) {
            var s;
            return null == e
              ? Ge(this, r, i).year
              : (t > (s = qe(e, r, i)) && (t = s),
                wn.call(this, e, t, n, r, i));
          }
          function wn(e, t, n, r, i) {
            var s = Ve(e, t, n, r, i),
              u = We(s.year, 0, s.dayOfYear);
            return (
              this.year(u.getUTCFullYear()),
              this.month(u.getUTCMonth()),
              this.date(u.getUTCDate()),
              this
            );
          }
          N("N", 0, 0, "eraAbbr"),
            N("NN", 0, 0, "eraAbbr"),
            N("NNN", 0, 0, "eraAbbr"),
            N("NNNN", 0, 0, "eraName"),
            N("NNNNN", 0, 0, "eraNarrow"),
            N("y", ["y", 1], "yo", "eraYear"),
            N("y", ["yy", 2], 0, "eraYear"),
            N("y", ["yyy", 3], 0, "eraYear"),
            N("y", ["yyyy", 4], 0, "eraYear"),
            pe("N", yn),
            pe("NN", yn),
            pe("NNN", yn),
            pe("NNNN", function (e, t) {
              return t.erasNameRegex(e);
            }),
            pe("NNNNN", function (e, t) {
              return t.erasNarrowRegex(e);
            }),
            ye(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
              var i = n._locale.erasParse(e, r, n._strict);
              i ? (m(n).era = i) : (m(n).invalidEra = e);
            }),
            pe("y", le),
            pe("yy", le),
            pe("yyy", le),
            pe("yyyy", le),
            pe("yo", function (e, t) {
              return t._eraYearOrdinalRegex || le;
            }),
            ye(["y", "yy", "yyy", "yyyy"], we),
            ye(["yo"], function (e, t, n, r) {
              var i;
              n._locale._eraYearOrdinalRegex &&
                (i = e.match(n._locale._eraYearOrdinalRegex)),
                n._locale.eraYearOrdinalParse
                  ? (t[we] = n._locale.eraYearOrdinalParse(e, i))
                  : (t[we] = parseInt(e, 10));
            }),
            N(0, ["gg", 2], 0, function () {
              return this.weekYear() % 100;
            }),
            N(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            kn("gggg", "weekYear"),
            kn("ggggg", "weekYear"),
            kn("GGGG", "isoWeekYear"),
            kn("GGGGG", "isoWeekYear"),
            z("weekYear", "gg"),
            z("isoWeekYear", "GG"),
            W("weekYear", 1),
            W("isoWeekYear", 1),
            pe("G", ce),
            pe("g", ce),
            pe("GG", re, K),
            pe("gg", re, K),
            pe("GGGG", ae, te),
            pe("gggg", ae, te),
            pe("GGGGG", oe, ne),
            pe("ggggg", oe, ne),
            _e(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
              t[r.substr(0, 2)] = G(e);
            }),
            _e(["gg", "GG"], function (e, t, n, r) {
              t[r] = i.parseTwoDigitYear(e);
            }),
            N("Q", 0, "Qo", "quarter"),
            z("quarter", "Q"),
            W("quarter", 7),
            pe("Q", X),
            ye("Q", function (e, t) {
              t[be] = 3 * (G(e) - 1);
            }),
            N("D", ["DD", 2], "Do", "date"),
            z("date", "D"),
            W("date", 9),
            pe("D", re),
            pe("DD", re, K),
            pe("Do", function (e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            ye(["D", "DD"], xe),
            ye("Do", function (e, t) {
              t[xe] = G(e.match(re)[0]);
            });
          var bn = q("Date", !0);
          N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            z("dayOfYear", "DDD"),
            W("dayOfYear", 4),
            pe("DDD", ue),
            pe("DDDD", ee),
            ye(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = G(e);
            }),
            N("m", ["mm", 2], 0, "minute"),
            z("minute", "m"),
            W("minute", 14),
            pe("m", re),
            pe("mm", re, K),
            ye(["m", "mm"], Fe);
          var xn = q("Minutes", !1);
          N("s", ["ss", 2], 0, "second"),
            z("second", "s"),
            W("second", 15),
            pe("s", re),
            pe("ss", re, K),
            ye(["s", "ss"], Ae);
          var Cn,
            Fn,
            An = q("Seconds", !1);
          for (
            N("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              N(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              N(0, ["SSS", 3], 0, "millisecond"),
              N(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              N(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              N(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              N(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              N(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              N(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              z("millisecond", "ms"),
              W("millisecond", 16),
              pe("S", ue, X),
              pe("SS", ue, K),
              pe("SSS", ue, ee),
              Cn = "SSSS";
            Cn.length <= 9;
            Cn += "S"
          )
            pe(Cn, le);
          function En(e, t) {
            t[Ee] = G(1e3 * ("0." + e));
          }
          for (Cn = "S"; Cn.length <= 9; Cn += "S") ye(Cn, En);
          (Fn = q("Milliseconds", !1)),
            N("z", 0, 0, "zoneAbbr"),
            N("zz", 0, 0, "zoneName");
          var Sn = v.prototype;
          function Mn(e) {
            return e;
          }
          (Sn.add = nn),
            (Sn.calendar = function (e, t) {
              1 === arguments.length &&
                (arguments[0]
                  ? un(arguments[0])
                    ? ((e = arguments[0]), (t = void 0))
                    : (function (e) {
                        var t,
                          n = u(e) && !o(e),
                          r = !1,
                          i = [
                            "sameDay",
                            "nextDay",
                            "lastDay",
                            "nextWeek",
                            "lastWeek",
                            "sameElse",
                          ];
                        for (t = 0; t < i.length; t += 1) r = r || a(e, i[t]);
                        return n && r;
                      })(arguments[0]) && ((t = arguments[0]), (e = void 0))
                  : ((e = void 0), (t = void 0)));
              var n = e || Rt(),
                r = Vt(n, this).startOf("day"),
                s = i.calendarFormat(this, r) || "sameElse",
                l = t && (E(t[s]) ? t[s].call(this, n) : t[s]);
              return this.format(
                l || this.localeData().calendar(s, this, Rt(n))
              );
            }),
            (Sn.clone = function () {
              return new v(this);
            }),
            (Sn.diff = function (e, t, n) {
              var r, i, s;
              if (!this.isValid()) return NaN;
              if (!(r = Vt(e, this)).isValid()) return NaN;
              switch (
                ((i = 6e4 * (r.utcOffset() - this.utcOffset())), (t = U(t)))
              ) {
                case "year":
                  s = an(this, r) / 12;
                  break;
                case "month":
                  s = an(this, r);
                  break;
                case "quarter":
                  s = an(this, r) / 3;
                  break;
                case "second":
                  s = (this - r) / 1e3;
                  break;
                case "minute":
                  s = (this - r) / 6e4;
                  break;
                case "hour":
                  s = (this - r) / 36e5;
                  break;
                case "day":
                  s = (this - r - i) / 864e5;
                  break;
                case "week":
                  s = (this - r - i) / 6048e5;
                  break;
                default:
                  s = this - r;
              }
              return n ? s : V(s);
            }),
            (Sn.endOf = function (e) {
              var t, n;
              if (
                void 0 === (e = U(e)) ||
                "millisecond" === e ||
                !this.isValid()
              )
                return this;
              switch (((n = this._isUTC ? gn : Dn), e)) {
                case "year":
                  t = n(this.year() + 1, 0, 1) - 1;
                  break;
                case "quarter":
                  t =
                    n(this.year(), this.month() - (this.month() % 3) + 3, 1) -
                    1;
                  break;
                case "month":
                  t = n(this.year(), this.month() + 1, 1) - 1;
                  break;
                case "week":
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7
                    ) - 1;
                  break;
                case "isoWeek":
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                  break;
                case "day":
                case "date":
                  t = n(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case "hour":
                  (t = this._d.valueOf()),
                    (t +=
                      fn -
                      mn(t + (this._isUTC ? 0 : this.utcOffset() * dn), fn) -
                      1);
                  break;
                case "minute":
                  (t = this._d.valueOf()), (t += dn - mn(t, dn) - 1);
                  break;
                case "second":
                  (t = this._d.valueOf()), (t += hn - mn(t, hn) - 1);
              }
              return this._d.setTime(t), i.updateOffset(this, !0), this;
            }),
            (Sn.format = function (e) {
              e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
              var t = P(this, e);
              return this.localeData().postformat(t);
            }),
            (Sn.from = function (e, t) {
              return this.isValid() &&
                ((w(e) && e.isValid()) || Rt(e).isValid())
                ? Qt({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (Sn.fromNow = function (e) {
              return this.from(Rt(), e);
            }),
            (Sn.to = function (e, t) {
              return this.isValid() &&
                ((w(e) && e.isValid()) || Rt(e).isValid())
                ? Qt({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (Sn.toNow = function (e) {
              return this.to(Rt(), e);
            }),
            (Sn.get = function (e) {
              return E(this[(e = U(e))]) ? this[e]() : this;
            }),
            (Sn.invalidAt = function () {
              return m(this).overflow;
            }),
            (Sn.isAfter = function (e, t) {
              var n = w(e) ? e : Rt(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = U(t) || "millisecond")
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() < this.clone().startOf(t).valueOf())
              );
            }),
            (Sn.isBefore = function (e, t) {
              var n = w(e) ? e : Rt(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = U(t) || "millisecond")
                  ? this.valueOf() < n.valueOf()
                  : this.clone().endOf(t).valueOf() < n.valueOf())
              );
            }),
            (Sn.isBetween = function (e, t, n, r) {
              var i = w(e) ? e : Rt(e),
                s = w(t) ? t : Rt(t);
              return (
                !!(this.isValid() && i.isValid() && s.isValid()) &&
                ("(" === (r = r || "()")[0]
                  ? this.isAfter(i, n)
                  : !this.isBefore(i, n)) &&
                (")" === r[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
              );
            }),
            (Sn.isSame = function (e, t) {
              var n,
                r = w(e) ? e : Rt(e);
              return (
                !(!this.isValid() || !r.isValid()) &&
                ("millisecond" === (t = U(t) || "millisecond")
                  ? this.valueOf() === r.valueOf()
                  : ((n = r.valueOf()),
                    this.clone().startOf(t).valueOf() <= n &&
                      n <= this.clone().endOf(t).valueOf()))
              );
            }),
            (Sn.isSameOrAfter = function (e, t) {
              return this.isSame(e, t) || this.isAfter(e, t);
            }),
            (Sn.isSameOrBefore = function (e, t) {
              return this.isSame(e, t) || this.isBefore(e, t);
            }),
            (Sn.isValid = function () {
              return D(this);
            }),
            (Sn.lang = ln),
            (Sn.locale = on),
            (Sn.localeData = cn),
            (Sn.max = Pt),
            (Sn.min = Nt),
            (Sn.parsingFlags = function () {
              return f({}, m(this));
            }),
            (Sn.set = function (e, t) {
              if ("object" == typeof e) {
                var n,
                  r = (function (e) {
                    var t,
                      n = [];
                    for (t in e) a(e, t) && n.push({ unit: t, priority: $[t] });
                    return (
                      n.sort(function (e, t) {
                        return e.priority - t.priority;
                      }),
                      n
                    );
                  })((e = I(e))),
                  i = r.length;
                for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit]);
              } else if (E(this[(e = U(e))])) return this[e](t);
              return this;
            }),
            (Sn.startOf = function (e) {
              var t, n;
              if (
                void 0 === (e = U(e)) ||
                "millisecond" === e ||
                !this.isValid()
              )
                return this;
              switch (((n = this._isUTC ? gn : Dn), e)) {
                case "year":
                  t = n(this.year(), 0, 1);
                  break;
                case "quarter":
                  t = n(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case "month":
                  t = n(this.year(), this.month(), 1);
                  break;
                case "week":
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                  );
                  break;
                case "isoWeek":
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                  );
                  break;
                case "day":
                case "date":
                  t = n(this.year(), this.month(), this.date());
                  break;
                case "hour":
                  (t = this._d.valueOf()),
                    (t -= mn(
                      t + (this._isUTC ? 0 : this.utcOffset() * dn),
                      fn
                    ));
                  break;
                case "minute":
                  (t = this._d.valueOf()), (t -= mn(t, dn));
                  break;
                case "second":
                  (t = this._d.valueOf()), (t -= mn(t, hn));
              }
              return this._d.setTime(t), i.updateOffset(this, !0), this;
            }),
            (Sn.subtract = rn),
            (Sn.toArray = function () {
              var e = this;
              return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
              ];
            }),
            (Sn.toObject = function () {
              var e = this;
              return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
              };
            }),
            (Sn.toDate = function () {
              return new Date(this.valueOf());
            }),
            (Sn.toISOString = function (e) {
              if (!this.isValid()) return null;
              var t = !0 !== e,
                n = t ? this.clone().utc() : this;
              return n.year() < 0 || n.year() > 9999
                ? P(
                    n,
                    t
                      ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  )
                : E(Date.prototype.toISOString)
                ? t
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace("Z", P(n, "Z"))
                : P(
                    n,
                    t
                      ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  );
            }),
            (Sn.inspect = function () {
              if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
              var e,
                t,
                n,
                r = "moment",
                i = "";
              return (
                this.isLocal() ||
                  ((r =
                    0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                  (i = "Z")),
                (e = "[" + r + '("]'),
                (t =
                  0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
                "-MM-DD[T]HH:mm:ss.SSS",
                (n = i + '[")]'),
                this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
              );
            }),
            "undefined" != typeof Symbol &&
              null != Symbol.for &&
              (Sn[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">";
              }),
            (Sn.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (Sn.toString = function () {
              return this.clone()
                .locale("en")
                .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }),
            (Sn.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (Sn.valueOf = function () {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (Sn.creationData = function () {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (Sn.eraName = function () {
              var e,
                t,
                n,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e) {
                if (
                  ((n = this.clone().startOf("day").valueOf()),
                  r[e].since <= n && n <= r[e].until)
                )
                  return r[e].name;
                if (r[e].until <= n && n <= r[e].since) return r[e].name;
              }
              return "";
            }),
            (Sn.eraNarrow = function () {
              var e,
                t,
                n,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e) {
                if (
                  ((n = this.clone().startOf("day").valueOf()),
                  r[e].since <= n && n <= r[e].until)
                )
                  return r[e].narrow;
                if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
              }
              return "";
            }),
            (Sn.eraAbbr = function () {
              var e,
                t,
                n,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e) {
                if (
                  ((n = this.clone().startOf("day").valueOf()),
                  r[e].since <= n && n <= r[e].until)
                )
                  return r[e].abbr;
                if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
              }
              return "";
            }),
            (Sn.eraYear = function () {
              var e,
                t,
                n,
                r,
                s = this.localeData().eras();
              for (e = 0, t = s.length; e < t; ++e)
                if (
                  ((n = s[e].since <= s[e].until ? 1 : -1),
                  (r = this.clone().startOf("day").valueOf()),
                  (s[e].since <= r && r <= s[e].until) ||
                    (s[e].until <= r && r <= s[e].since))
                )
                  return (this.year() - i(s[e].since).year()) * n + s[e].offset;
              return this.year();
            }),
            (Sn.year = Ie),
            (Sn.isLeapYear = function () {
              return H(this.year());
            }),
            (Sn.weekYear = function (e) {
              return vn.call(
                this,
                e,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
              );
            }),
            (Sn.isoWeekYear = function (e) {
              return vn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (Sn.quarter = Sn.quarters =
              function (e) {
                return null == e
                  ? Math.ceil((this.month() + 1) / 3)
                  : this.month(3 * (e - 1) + (this.month() % 3));
              }),
            (Sn.month = Le),
            (Sn.daysInMonth = function () {
              return Be(this.year(), this.month());
            }),
            (Sn.week = Sn.weeks =
              function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d");
              }),
            (Sn.isoWeek = Sn.isoWeeks =
              function (e) {
                var t = Ge(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d");
              }),
            (Sn.weeksInYear = function () {
              var e = this.localeData()._week;
              return qe(this.year(), e.dow, e.doy);
            }),
            (Sn.weeksInWeekYear = function () {
              var e = this.localeData()._week;
              return qe(this.weekYear(), e.dow, e.doy);
            }),
            (Sn.isoWeeksInYear = function () {
              return qe(this.year(), 1, 4);
            }),
            (Sn.isoWeeksInISOWeekYear = function () {
              return qe(this.isoWeekYear(), 1, 4);
            }),
            (Sn.date = bn),
            (Sn.day = Sn.days =
              function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e
                  ? ((e = (function (e, t) {
                      return "string" != typeof e
                        ? e
                        : isNaN(e)
                        ? "number" == typeof (e = t.weekdaysParse(e))
                          ? e
                          : null
                        : parseInt(e, 10);
                    })(e, this.localeData())),
                    this.add(e - t, "d"))
                  : t;
              }),
            (Sn.weekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == e ? t : this.add(e - t, "d");
            }),
            (Sn.isoWeekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                var t = (function (e, t) {
                  return "string" == typeof e
                    ? t.weekdaysParse(e) % 7 || 7
                    : isNaN(e)
                    ? null
                    : e;
                })(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7);
              }
              return this.day() || 7;
            }),
            (Sn.dayOfYear = function (e) {
              var t =
                Math.round(
                  (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
                ) + 1;
              return null == e ? t : this.add(e - t, "d");
            }),
            (Sn.hour = Sn.hours = at),
            (Sn.minute = Sn.minutes = xn),
            (Sn.second = Sn.seconds = An),
            (Sn.millisecond = Sn.milliseconds = Fn),
            (Sn.utcOffset = function (e, t, n) {
              var r,
                s = this._offset || 0;
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                if ("string" == typeof e) {
                  if (null === (e = Ht(de, e))) return this;
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return (
                  !this._isUTC && t && (r = Gt(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != r && this.add(r, "m"),
                  s !== e &&
                    (!t || this._changeInProgress
                      ? tn(this, Qt(e - s, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        i.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
              return this._isUTC ? s : Gt(this);
            }),
            (Sn.utc = function (e) {
              return this.utcOffset(0, e);
            }),
            (Sn.local = function (e) {
              return (
                this._isUTC &&
                  (this.utcOffset(0, e),
                  (this._isUTC = !1),
                  e && this.subtract(Gt(this), "m")),
                this
              );
            }),
            (Sn.parseZone = function () {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ("string" == typeof this._i) {
                var e = Ht(he, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (Sn.hasAlignedHourOffset = function (e) {
              return (
                !!this.isValid() &&
                ((e = e ? Rt(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 == 0)
              );
            }),
            (Sn.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }),
            (Sn.isLocal = function () {
              return !!this.isValid() && !this._isUTC;
            }),
            (Sn.isUtcOffset = function () {
              return !!this.isValid() && this._isUTC;
            }),
            (Sn.isUtc = qt),
            (Sn.isUTC = qt),
            (Sn.zoneAbbr = function () {
              return this._isUTC ? "UTC" : "";
            }),
            (Sn.zoneName = function () {
              return this._isUTC ? "Coordinated Universal Time" : "";
            }),
            (Sn.dates = x(
              "dates accessor is deprecated. Use date instead.",
              bn
            )),
            (Sn.months = x(
              "months accessor is deprecated. Use month instead",
              Le
            )),
            (Sn.years = x(
              "years accessor is deprecated. Use year instead",
              Ie
            )),
            (Sn.zone = x(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              function (e, t) {
                return null != e
                  ? ("string" != typeof e && (e = -e),
                    this.utcOffset(e, t),
                    this)
                  : -this.utcOffset();
              }
            )),
            (Sn.isDSTShifted = x(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              function () {
                if (!l(this._isDSTShifted)) return this._isDSTShifted;
                var e,
                  t = {};
                return (
                  k(t, this),
                  (t = Tt(t))._a
                    ? ((e = t._isUTC ? p(t._a) : Rt(t._a)),
                      (this._isDSTShifted =
                        this.isValid() &&
                        (function (e, t, n) {
                          var r,
                            i = Math.min(e.length, t.length),
                            s = Math.abs(e.length - t.length),
                            u = 0;
                          for (r = 0; r < i; r++)
                            ((n && e[r] !== t[r]) ||
                              (!n && G(e[r]) !== G(t[r]))) &&
                              u++;
                          return u + s;
                        })(t._a, e.toArray()) > 0))
                    : (this._isDSTShifted = !1),
                  this._isDSTShifted
                );
              }
            ));
          var Bn = M.prototype;
          function On(e, t, n, r) {
            var i = gt(),
              s = p().set(r, t);
            return i[n](s, e);
          }
          function Tn(e, t, n) {
            if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return On(e, t, n, "month");
            var r,
              i = [];
            for (r = 0; r < 12; r++) i[r] = On(e, r, n, "month");
            return i;
          }
          function Yn(e, t, n, r) {
            "boolean" == typeof e
              ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((n = t = e),
                (e = !1),
                c(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var i,
              s = gt(),
              u = e ? s._week.dow : 0,
              a = [];
            if (null != n) return On(t, (n + u) % 7, r, "day");
            for (i = 0; i < 7; i++) a[i] = On(t, (i + u) % 7, r, "day");
            return a;
          }
          (Bn.calendar = function (e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return E(r) ? r.call(t, n) : r;
          }),
            (Bn.longDateFormat = function (e) {
              var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
              return t || !n
                ? t
                : ((this._longDateFormat[e] = n
                    .match(O)
                    .map(function (e) {
                      return "MMMM" === e ||
                        "MM" === e ||
                        "DD" === e ||
                        "dddd" === e
                        ? e.slice(1)
                        : e;
                    })
                    .join("")),
                  this._longDateFormat[e]);
            }),
            (Bn.invalidDate = function () {
              return this._invalidDate;
            }),
            (Bn.ordinal = function (e) {
              return this._ordinal.replace("%d", e);
            }),
            (Bn.preparse = Mn),
            (Bn.postformat = Mn),
            (Bn.relativeTime = function (e, t, n, r) {
              var i = this._relativeTime[n];
              return E(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
            }),
            (Bn.pastFuture = function (e, t) {
              var n = this._relativeTime[e > 0 ? "future" : "past"];
              return E(n) ? n(t) : n.replace(/%s/i, t);
            }),
            (Bn.set = function (e) {
              var t, n;
              for (n in e)
                a(e, n) &&
                  (E((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
              (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    "|" +
                    /\d{1,2}/.source
                ));
            }),
            (Bn.eras = function (e, t) {
              var n,
                r,
                s,
                u = this._eras || gt("en")._eras;
              for (n = 0, r = u.length; n < r; ++n)
                switch (
                  ("string" == typeof u[n].since &&
                    ((s = i(u[n].since).startOf("day")),
                    (u[n].since = s.valueOf())),
                  typeof u[n].until)
                ) {
                  case "undefined":
                    u[n].until = 1 / 0;
                    break;
                  case "string":
                    (s = i(u[n].until).startOf("day").valueOf()),
                      (u[n].until = s.valueOf());
                }
              return u;
            }),
            (Bn.erasParse = function (e, t, n) {
              var r,
                i,
                s,
                u,
                a,
                o = this.eras();
              for (e = e.toUpperCase(), r = 0, i = o.length; r < i; ++r)
                if (
                  ((s = o[r].name.toUpperCase()),
                  (u = o[r].abbr.toUpperCase()),
                  (a = o[r].narrow.toUpperCase()),
                  n)
                )
                  switch (t) {
                    case "N":
                    case "NN":
                    case "NNN":
                      if (u === e) return o[r];
                      break;
                    case "NNNN":
                      if (s === e) return o[r];
                      break;
                    case "NNNNN":
                      if (a === e) return o[r];
                  }
                else if ([s, u, a].indexOf(e) >= 0) return o[r];
            }),
            (Bn.erasConvertYear = function (e, t) {
              var n = e.since <= e.until ? 1 : -1;
              return void 0 === t
                ? i(e.since).year()
                : i(e.since).year() + (t - e.offset) * n;
            }),
            (Bn.erasAbbrRegex = function (e) {
              return (
                a(this, "_erasAbbrRegex") || _n.call(this),
                e ? this._erasAbbrRegex : this._erasRegex
              );
            }),
            (Bn.erasNameRegex = function (e) {
              return (
                a(this, "_erasNameRegex") || _n.call(this),
                e ? this._erasNameRegex : this._erasRegex
              );
            }),
            (Bn.erasNarrowRegex = function (e) {
              return (
                a(this, "_erasNarrowRegex") || _n.call(this),
                e ? this._erasNarrowRegex : this._erasRegex
              );
            }),
            (Bn.months = function (e, t) {
              return e
                ? s(this._months)
                  ? this._months[e.month()]
                  : this._months[
                      (this._months.isFormat || Ye).test(t)
                        ? "format"
                        : "standalone"
                    ][e.month()]
                : s(this._months)
                ? this._months
                : this._months.standalone;
            }),
            (Bn.monthsShort = function (e, t) {
              return e
                ? s(this._monthsShort)
                  ? this._monthsShort[e.month()]
                  : this._monthsShort[Ye.test(t) ? "format" : "standalone"][
                      e.month()
                    ]
                : s(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
            }),
            (Bn.monthsParse = function (e, t, n) {
              var r, i, s;
              if (this._monthsParseExact) return Pe.call(this, e, t, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []),
                  (this._longMonthsParse = []),
                  (this._shortMonthsParse = [])),
                  r = 0;
                r < 12;
                r++
              ) {
                if (
                  ((i = p([2e3, r])),
                  n &&
                    !this._longMonthsParse[r] &&
                    ((this._longMonthsParse[r] = new RegExp(
                      "^" + this.months(i, "").replace(".", "") + "$",
                      "i"
                    )),
                    (this._shortMonthsParse[r] = new RegExp(
                      "^" + this.monthsShort(i, "").replace(".", "") + "$",
                      "i"
                    ))),
                  n ||
                    this._monthsParse[r] ||
                    ((s =
                      "^" +
                      this.months(i, "") +
                      "|^" +
                      this.monthsShort(i, "")),
                    (this._monthsParse[r] = new RegExp(
                      s.replace(".", ""),
                      "i"
                    ))),
                  n && "MMMM" === t && this._longMonthsParse[r].test(e))
                )
                  return r;
                if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                  return r;
                if (!n && this._monthsParse[r].test(e)) return r;
              }
            }),
            (Bn.monthsRegex = function (e) {
              return this._monthsParseExact
                ? (a(this, "_monthsRegex") || ze.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (a(this, "_monthsRegex") || (this._monthsRegex = Ne),
                  this._monthsStrictRegex && e
                    ? this._monthsStrictRegex
                    : this._monthsRegex);
            }),
            (Bn.monthsShortRegex = function (e) {
              return this._monthsParseExact
                ? (a(this, "_monthsRegex") || ze.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (a(this, "_monthsShortRegex") ||
                    (this._monthsShortRegex = Re),
                  this._monthsShortStrictRegex && e
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (Bn.week = function (e) {
              return Ge(e, this._week.dow, this._week.doy).week;
            }),
            (Bn.firstDayOfYear = function () {
              return this._week.doy;
            }),
            (Bn.firstDayOfWeek = function () {
              return this._week.dow;
            }),
            (Bn.weekdays = function (e, t) {
              var n = s(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    e && !0 !== e && this._weekdays.isFormat.test(t)
                      ? "format"
                      : "standalone"
                  ];
              return !0 === e ? Ze(n, this._week.dow) : e ? n[e.day()] : n;
            }),
            (Bn.weekdaysMin = function (e) {
              return !0 === e
                ? Ze(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
            }),
            (Bn.weekdaysShort = function (e) {
              return !0 === e
                ? Ze(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
            }),
            (Bn.weekdaysParse = function (e, t, n) {
              var r, i, s;
              if (this._weekdaysParseExact) return nt.call(this, e, t, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  r = 0;
                r < 7;
                r++
              ) {
                if (
                  ((i = p([2e3, 1]).day(r)),
                  n &&
                    !this._fullWeekdaysParse[r] &&
                    ((this._fullWeekdaysParse[r] = new RegExp(
                      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
                      "i"
                    )),
                    (this._shortWeekdaysParse[r] = new RegExp(
                      "^" +
                        this.weekdaysShort(i, "").replace(".", "\\.?") +
                        "$",
                      "i"
                    )),
                    (this._minWeekdaysParse[r] = new RegExp(
                      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
                      "i"
                    ))),
                  this._weekdaysParse[r] ||
                    ((s =
                      "^" +
                      this.weekdays(i, "") +
                      "|^" +
                      this.weekdaysShort(i, "") +
                      "|^" +
                      this.weekdaysMin(i, "")),
                    (this._weekdaysParse[r] = new RegExp(
                      s.replace(".", ""),
                      "i"
                    ))),
                  n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
                )
                  return r;
                if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                  return r;
                if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                  return r;
                if (!n && this._weekdaysParse[r].test(e)) return r;
              }
            }),
            (Bn.weekdaysRegex = function (e) {
              return this._weekdaysParseExact
                ? (a(this, "_weekdaysRegex") || rt.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke),
                  this._weekdaysStrictRegex && e
                    ? this._weekdaysStrictRegex
                    : this._weekdaysRegex);
            }),
            (Bn.weekdaysShortRegex = function (e) {
              return this._weekdaysParseExact
                ? (a(this, "_weekdaysRegex") || rt.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (a(this, "_weekdaysShortRegex") ||
                    (this._weekdaysShortRegex = et),
                  this._weekdaysShortStrictRegex && e
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (Bn.weekdaysMinRegex = function (e) {
              return this._weekdaysParseExact
                ? (a(this, "_weekdaysRegex") || rt.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (a(this, "_weekdaysMinRegex") ||
                    (this._weekdaysMinRegex = tt),
                  this._weekdaysMinStrictRegex && e
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (Bn.isPM = function (e) {
              return "p" === (e + "").toLowerCase().charAt(0);
            }),
            (Bn.meridiem = function (e, t, n) {
              return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
            }),
            mt("en", {
              eras: [
                {
                  since: "0001-01-01",
                  until: 1 / 0,
                  offset: 1,
                  name: "Anno Domini",
                  narrow: "AD",
                  abbr: "AD",
                },
                {
                  since: "0000-12-31",
                  until: -1 / 0,
                  offset: 1,
                  name: "Before Christ",
                  narrow: "BC",
                  abbr: "BC",
                },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return (
                  e +
                  (1 === G((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th")
                );
              },
            }),
            (i.lang = x(
              "moment.lang is deprecated. Use moment.locale instead.",
              mt
            )),
            (i.langData = x(
              "moment.langData is deprecated. Use moment.localeData instead.",
              gt
            ));
          var Rn = Math.abs;
          function Nn(e, t, n, r) {
            var i = Qt(t, n);
            return (
              (e._milliseconds += r * i._milliseconds),
              (e._days += r * i._days),
              (e._months += r * i._months),
              e._bubble()
            );
          }
          function Pn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function jn(e) {
            return (4800 * e) / 146097;
          }
          function Ln(e) {
            return (146097 * e) / 4800;
          }
          function zn(e) {
            return function () {
              return this.as(e);
            };
          }
          var Un = zn("ms"),
            In = zn("s"),
            $n = zn("m"),
            Wn = zn("h"),
            Hn = zn("d"),
            Vn = zn("w"),
            Gn = zn("M"),
            qn = zn("Q"),
            Zn = zn("y");
          function Jn(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var Qn = Jn("milliseconds"),
            Xn = Jn("seconds"),
            Kn = Jn("minutes"),
            er = Jn("hours"),
            tr = Jn("days"),
            nr = Jn("months"),
            rr = Jn("years");
          var ir = Math.round,
            sr = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
          function ur(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r);
          }
          var ar = Math.abs;
          function or(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function lr() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              r,
              i,
              s,
              u,
              a,
              o = ar(this._milliseconds) / 1e3,
              l = ar(this._days),
              c = ar(this._months),
              h = this.asSeconds();
            return h
              ? ((e = V(o / 60)),
                (t = V(e / 60)),
                (o %= 60),
                (e %= 60),
                (n = V(c / 12)),
                (c %= 12),
                (r = o ? o.toFixed(3).replace(/\.?0+$/, "") : ""),
                (i = h < 0 ? "-" : ""),
                (s = or(this._months) !== or(h) ? "-" : ""),
                (u = or(this._days) !== or(h) ? "-" : ""),
                (a = or(this._milliseconds) !== or(h) ? "-" : ""),
                i +
                  "P" +
                  (n ? s + n + "Y" : "") +
                  (c ? s + c + "M" : "") +
                  (l ? u + l + "D" : "") +
                  (t || e || o ? "T" : "") +
                  (t ? a + t + "H" : "") +
                  (e ? a + e + "M" : "") +
                  (o ? a + r + "S" : ""))
              : "P0D";
          }
          var cr = zt.prototype;
          return (
            (cr.isValid = function () {
              return this._isValid;
            }),
            (cr.abs = function () {
              var e = this._data;
              return (
                (this._milliseconds = Rn(this._milliseconds)),
                (this._days = Rn(this._days)),
                (this._months = Rn(this._months)),
                (e.milliseconds = Rn(e.milliseconds)),
                (e.seconds = Rn(e.seconds)),
                (e.minutes = Rn(e.minutes)),
                (e.hours = Rn(e.hours)),
                (e.months = Rn(e.months)),
                (e.years = Rn(e.years)),
                this
              );
            }),
            (cr.add = function (e, t) {
              return Nn(this, e, t, 1);
            }),
            (cr.subtract = function (e, t) {
              return Nn(this, e, t, -1);
            }),
            (cr.as = function (e) {
              if (!this.isValid()) return NaN;
              var t,
                n,
                r = this._milliseconds;
              if ("month" === (e = U(e)) || "quarter" === e || "year" === e)
                switch (
                  ((t = this._days + r / 864e5), (n = this._months + jn(t)), e)
                ) {
                  case "month":
                    return n;
                  case "quarter":
                    return n / 3;
                  case "year":
                    return n / 12;
                }
              else
                switch (((t = this._days + Math.round(Ln(this._months))), e)) {
                  case "week":
                    return t / 7 + r / 6048e5;
                  case "day":
                    return t + r / 864e5;
                  case "hour":
                    return 24 * t + r / 36e5;
                  case "minute":
                    return 1440 * t + r / 6e4;
                  case "second":
                    return 86400 * t + r / 1e3;
                  case "millisecond":
                    return Math.floor(864e5 * t) + r;
                  default:
                    throw new Error("Unknown unit " + e);
                }
            }),
            (cr.asMilliseconds = Un),
            (cr.asSeconds = In),
            (cr.asMinutes = $n),
            (cr.asHours = Wn),
            (cr.asDays = Hn),
            (cr.asWeeks = Vn),
            (cr.asMonths = Gn),
            (cr.asQuarters = qn),
            (cr.asYears = Zn),
            (cr.valueOf = function () {
              return this.isValid()
                ? this._milliseconds +
                    864e5 * this._days +
                    (this._months % 12) * 2592e6 +
                    31536e6 * G(this._months / 12)
                : NaN;
            }),
            (cr._bubble = function () {
              var e,
                t,
                n,
                r,
                i,
                s = this._milliseconds,
                u = this._days,
                a = this._months,
                o = this._data;
              return (
                (s >= 0 && u >= 0 && a >= 0) ||
                  (s <= 0 && u <= 0 && a <= 0) ||
                  ((s += 864e5 * Pn(Ln(a) + u)), (u = 0), (a = 0)),
                (o.milliseconds = s % 1e3),
                (e = V(s / 1e3)),
                (o.seconds = e % 60),
                (t = V(e / 60)),
                (o.minutes = t % 60),
                (n = V(t / 60)),
                (o.hours = n % 24),
                (u += V(n / 24)),
                (a += i = V(jn(u))),
                (u -= Pn(Ln(i))),
                (r = V(a / 12)),
                (a %= 12),
                (o.days = u),
                (o.months = a),
                (o.years = r),
                this
              );
            }),
            (cr.clone = function () {
              return Qt(this);
            }),
            (cr.get = function (e) {
              return (e = U(e)), this.isValid() ? this[e + "s"]() : NaN;
            }),
            (cr.milliseconds = Qn),
            (cr.seconds = Xn),
            (cr.minutes = Kn),
            (cr.hours = er),
            (cr.days = tr),
            (cr.weeks = function () {
              return V(this.days() / 7);
            }),
            (cr.months = nr),
            (cr.years = rr),
            (cr.humanize = function (e, t) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var n,
                r,
                i = !1,
                s = sr;
              return (
                "object" == typeof e && ((t = e), (e = !1)),
                "boolean" == typeof e && (i = e),
                "object" == typeof t &&
                  ((s = Object.assign({}, sr, t)),
                  null != t.s && null == t.ss && (s.ss = t.s - 1)),
                (r = (function (e, t, n, r) {
                  var i = Qt(e).abs(),
                    s = ir(i.as("s")),
                    u = ir(i.as("m")),
                    a = ir(i.as("h")),
                    o = ir(i.as("d")),
                    l = ir(i.as("M")),
                    c = ir(i.as("w")),
                    h = ir(i.as("y")),
                    d =
                      (s <= n.ss && ["s", s]) ||
                      (s < n.s && ["ss", s]) ||
                      (u <= 1 && ["m"]) ||
                      (u < n.m && ["mm", u]) ||
                      (a <= 1 && ["h"]) ||
                      (a < n.h && ["hh", a]) ||
                      (o <= 1 && ["d"]) ||
                      (o < n.d && ["dd", o]);
                  return (
                    null != n.w &&
                      (d = d || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
                    ((d = d ||
                      (l <= 1 && ["M"]) ||
                      (l < n.M && ["MM", l]) ||
                      (h <= 1 && ["y"]) || ["yy", h])[2] = t),
                    (d[3] = +e > 0),
                    (d[4] = r),
                    ur.apply(null, d)
                  );
                })(this, !i, s, (n = this.localeData()))),
                i && (r = n.pastFuture(+this, r)),
                n.postformat(r)
              );
            }),
            (cr.toISOString = lr),
            (cr.toString = lr),
            (cr.toJSON = lr),
            (cr.locale = on),
            (cr.localeData = cn),
            (cr.toIsoString = x(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              lr
            )),
            (cr.lang = ln),
            N("X", 0, 0, "unix"),
            N("x", 0, 0, "valueOf"),
            pe("x", ce),
            pe("X", /[+-]?\d+(\.\d{1,3})?/),
            ye("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e));
            }),
            ye("x", function (e, t, n) {
              n._d = new Date(G(e));
            }),
            (i.version = "2.29.4"),
            (t = Rt),
            (i.fn = Sn),
            (i.min = function () {
              return jt("isBefore", [].slice.call(arguments, 0));
            }),
            (i.max = function () {
              return jt("isAfter", [].slice.call(arguments, 0));
            }),
            (i.now = function () {
              return Date.now ? Date.now() : +new Date();
            }),
            (i.utc = p),
            (i.unix = function (e) {
              return Rt(1e3 * e);
            }),
            (i.months = function (e, t) {
              return Tn(e, t, "months");
            }),
            (i.isDate = h),
            (i.locale = mt),
            (i.invalid = g),
            (i.duration = Qt),
            (i.isMoment = w),
            (i.weekdays = function (e, t, n) {
              return Yn(e, t, n, "weekdays");
            }),
            (i.parseZone = function () {
              return Rt.apply(null, arguments).parseZone();
            }),
            (i.localeData = gt),
            (i.isDuration = Ut),
            (i.monthsShort = function (e, t) {
              return Tn(e, t, "monthsShort");
            }),
            (i.weekdaysMin = function (e, t, n) {
              return Yn(e, t, n, "weekdaysMin");
            }),
            (i.defineLocale = Dt),
            (i.updateLocale = function (e, t) {
              if (null != t) {
                var n,
                  r,
                  i = lt;
                null != ct[e] && null != ct[e].parentLocale
                  ? ct[e].set(S(ct[e]._config, t))
                  : (null != (r = pt(e)) && (i = r._config),
                    (t = S(i, t)),
                    null == r && (t.abbr = e),
                    ((n = new M(t)).parentLocale = ct[e]),
                    (ct[e] = n)),
                  mt(e);
              } else
                null != ct[e] &&
                  (null != ct[e].parentLocale
                    ? ((ct[e] = ct[e].parentLocale), e === mt() && mt(e))
                    : null != ct[e] && delete ct[e]);
              return ct[e];
            }),
            (i.locales = function () {
              return C(ct);
            }),
            (i.weekdaysShort = function (e, t, n) {
              return Yn(e, t, n, "weekdaysShort");
            }),
            (i.normalizeUnits = U),
            (i.relativeTimeRounding = function (e) {
              return void 0 === e
                ? ir
                : "function" == typeof e && ((ir = e), !0);
            }),
            (i.relativeTimeThreshold = function (e, t) {
              return (
                void 0 !== sr[e] &&
                (void 0 === t
                  ? sr[e]
                  : ((sr[e] = t), "s" === e && (sr.ss = t - 1), !0))
              );
            }),
            (i.calendarFormat = function (e, t) {
              var n = e.diff(t, "days", !0);
              return n < -6
                ? "sameElse"
                : n < -1
                ? "lastWeek"
                : n < 0
                ? "lastDay"
                : n < 1
                ? "sameDay"
                : n < 2
                ? "nextDay"
                : n < 7
                ? "nextWeek"
                : "sameElse";
            }),
            (i.prototype = Sn),
            (i.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            i
          );
        })();
      },
      970: (e, t) => {
        "use strict";
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                e,
                (void 0,
                "symbol" ==
                typeof (i = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var n = e[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" != typeof r) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(r.key))
                  ? i
                  : String(i)),
                r
              );
          }
          var i;
        }
        function r() {
          return (
            (r = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            r.apply(this, arguments)
          );
        }
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function s(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (n) return (n = n.call(e)).next.bind(n);
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function u() {
          return {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            hooks: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1,
          };
        }
        t.defaults = {
          async: !1,
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          hooks: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        };
        var a = /[&<>"']/,
          o = new RegExp(a.source, "g"),
          l = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
          c = new RegExp(l.source, "g"),
          h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          },
          d = function (e) {
            return h[e];
          };
        function f(e, t) {
          if (t) {
            if (a.test(e)) return e.replace(o, d);
          } else if (l.test(e)) return e.replace(c, d);
          return e;
        }
        var p = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function m(e) {
          return e.replace(p, function (e, t) {
            return "colon" === (t = t.toLowerCase())
              ? ":"
              : "#" === t.charAt(0)
              ? "x" === t.charAt(1)
                ? String.fromCharCode(parseInt(t.substring(2), 16))
                : String.fromCharCode(+t.substring(1))
              : "";
          });
        }
        var D = /(^|[^\[])\^/g;
        function g(e, t) {
          (e = "string" == typeof e ? e : e.source), (t = t || "");
          var n = {
            replace: function (t, r) {
              return (
                (r = (r = r.source || r).replace(D, "$1")),
                (e = e.replace(t, r)),
                n
              );
            },
            getRegex: function () {
              return new RegExp(e, t);
            },
          };
          return n;
        }
        var y = /[^\w:]/g,
          _ = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function k(e, t, n) {
          if (e) {
            var r;
            try {
              r = decodeURIComponent(m(n)).replace(y, "").toLowerCase();
            } catch (e) {
              return null;
            }
            if (
              0 === r.indexOf("javascript:") ||
              0 === r.indexOf("vbscript:") ||
              0 === r.indexOf("data:")
            )
              return null;
          }
          t &&
            !_.test(n) &&
            (n = (function (e, t) {
              v[" " + e] ||
                (w.test(e)
                  ? (v[" " + e] = e + "/")
                  : (v[" " + e] = A(e, "/", !0)));
              var n = -1 === (e = v[" " + e]).indexOf(":");
              return "//" === t.substring(0, 2)
                ? n
                  ? t
                  : e.replace(b, "$1") + t
                : "/" === t.charAt(0)
                ? n
                  ? t
                  : e.replace(x, "$1") + t
                : e + t;
            })(t, n));
          try {
            n = encodeURI(n).replace(/%25/g, "%");
          } catch (e) {
            return null;
          }
          return n;
        }
        var v = {},
          w = /^[^:]+:\/*[^/]*$/,
          b = /^([^:]+:)[\s\S]*$/,
          x = /^([^:]+:\/*[^/]*)[\s\S]*$/,
          C = { exec: function () {} };
        function F(e, t) {
          var n = e
              .replace(/\|/g, function (e, t, n) {
                for (var r = !1, i = t; --i >= 0 && "\\" === n[i]; ) r = !r;
                return r ? "|" : " |";
              })
              .split(/ \|/),
            r = 0;
          if (
            (n[0].trim() || n.shift(),
            n.length > 0 && !n[n.length - 1].trim() && n.pop(),
            n.length > t)
          )
            n.splice(t);
          else for (; n.length < t; ) n.push("");
          for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
          return n;
        }
        function A(e, t, n) {
          var r = e.length;
          if (0 === r) return "";
          for (var i = 0; i < r; ) {
            var s = e.charAt(r - i - 1);
            if (s !== t || n) {
              if (s === t || !n) break;
              i++;
            } else i++;
          }
          return e.slice(0, r - i);
        }
        function E(e, t) {
          if (t < 1) return "";
          for (var n = ""; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
          return n + e;
        }
        function S(e, t, n, r) {
          var i = t.href,
            s = t.title ? f(t.title) : null,
            u = e[1].replace(/\\([\[\]])/g, "$1");
          if ("!" !== e[0].charAt(0)) {
            r.state.inLink = !0;
            var a = {
              type: "link",
              raw: n,
              href: i,
              title: s,
              text: u,
              tokens: r.inlineTokens(u),
            };
            return (r.state.inLink = !1), a;
          }
          return { type: "image", raw: n, href: i, title: s, text: f(u) };
        }
        var M = (function () {
            function e(e) {
              this.options = e || t.defaults;
            }
            var n = e.prototype;
            return (
              (n.space = function (e) {
                var t = this.rules.block.newline.exec(e);
                if (t && t[0].length > 0) return { type: "space", raw: t[0] };
              }),
              (n.code = function (e) {
                var t = this.rules.block.code.exec(e);
                if (t) {
                  var n = t[0].replace(/^ {1,4}/gm, "");
                  return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? n : A(n, "\n"),
                  };
                }
              }),
              (n.fences = function (e) {
                var t = this.rules.block.fences.exec(e);
                if (t) {
                  var n = t[0],
                    r = (function (e, t) {
                      var n = e.match(/^(\s+)(?:```)/);
                      if (null === n) return t;
                      var r = n[1];
                      return t
                        .split("\n")
                        .map(function (e) {
                          var t = e.match(/^\s+/);
                          return null === t
                            ? e
                            : t[0].length >= r.length
                            ? e.slice(r.length)
                            : e;
                        })
                        .join("\n");
                    })(n, t[3] || "");
                  return {
                    type: "code",
                    raw: n,
                    lang: t[2]
                      ? t[2].trim().replace(this.rules.inline._escapes, "$1")
                      : t[2],
                    text: r,
                  };
                }
              }),
              (n.heading = function (e) {
                var t = this.rules.block.heading.exec(e);
                if (t) {
                  var n = t[2].trim();
                  if (/#$/.test(n)) {
                    var r = A(n, "#");
                    this.options.pedantic
                      ? (n = r.trim())
                      : (r && !/ $/.test(r)) || (n = r.trim());
                  }
                  return {
                    type: "heading",
                    raw: t[0],
                    depth: t[1].length,
                    text: n,
                    tokens: this.lexer.inline(n),
                  };
                }
              }),
              (n.hr = function (e) {
                var t = this.rules.block.hr.exec(e);
                if (t) return { type: "hr", raw: t[0] };
              }),
              (n.blockquote = function (e) {
                var t = this.rules.block.blockquote.exec(e);
                if (t) {
                  var n = t[0].replace(/^ *>[ \t]?/gm, ""),
                    r = this.lexer.state.top;
                  this.lexer.state.top = !0;
                  var i = this.lexer.blockTokens(n);
                  return (
                    (this.lexer.state.top = r),
                    { type: "blockquote", raw: t[0], tokens: i, text: n }
                  );
                }
              }),
              (n.list = function (e) {
                var t = this.rules.block.list.exec(e);
                if (t) {
                  var n,
                    r,
                    i,
                    s,
                    u,
                    a,
                    o,
                    l,
                    c,
                    h,
                    d,
                    f,
                    p = t[1].trim(),
                    m = p.length > 1,
                    D = {
                      type: "list",
                      raw: "",
                      ordered: m,
                      start: m ? +p.slice(0, -1) : "",
                      loose: !1,
                      items: [],
                    };
                  (p = m ? "\\d{1,9}\\" + p.slice(-1) : "\\" + p),
                    this.options.pedantic && (p = m ? p : "[*+-]");
                  for (
                    var g = new RegExp(
                      "^( {0,3}" + p + ")((?:[\t ][^\\n]*)?(?:\\n|$))"
                    );
                    e &&
                    ((f = !1), (t = g.exec(e))) &&
                    !this.rules.block.hr.test(e);

                  ) {
                    if (
                      ((n = t[0]),
                      (e = e.substring(n.length)),
                      (l = t[2].split("\n", 1)[0].replace(/^\t+/, function (e) {
                        return " ".repeat(3 * e.length);
                      })),
                      (c = e.split("\n", 1)[0]),
                      this.options.pedantic
                        ? ((s = 2), (d = l.trimLeft()))
                        : ((s = (s = t[2].search(/[^ ]/)) > 4 ? 1 : s),
                          (d = l.slice(s)),
                          (s += t[1].length)),
                      (a = !1),
                      !l &&
                        /^ *$/.test(c) &&
                        ((n += c + "\n"),
                        (e = e.substring(c.length + 1)),
                        (f = !0)),
                      !f)
                    )
                      for (
                        var y = new RegExp(
                            "^ {0," +
                              Math.min(3, s - 1) +
                              "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"
                          ),
                          _ = new RegExp(
                            "^ {0," +
                              Math.min(3, s - 1) +
                              "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"
                          ),
                          k = new RegExp(
                            "^ {0," + Math.min(3, s - 1) + "}(?:```|~~~)"
                          ),
                          v = new RegExp("^ {0," + Math.min(3, s - 1) + "}#");
                        e &&
                        ((c = h = e.split("\n", 1)[0]),
                        this.options.pedantic &&
                          (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                        !k.test(c)) &&
                        !v.test(c) &&
                        !y.test(c) &&
                        !_.test(e);

                      ) {
                        if (c.search(/[^ ]/) >= s || !c.trim())
                          d += "\n" + c.slice(s);
                        else {
                          if (a) break;
                          if (l.search(/[^ ]/) >= 4) break;
                          if (k.test(l)) break;
                          if (v.test(l)) break;
                          if (_.test(l)) break;
                          d += "\n" + c;
                        }
                        a || c.trim() || (a = !0),
                          (n += h + "\n"),
                          (e = e.substring(h.length + 1)),
                          (l = c.slice(s));
                      }
                    D.loose ||
                      (o ? (D.loose = !0) : /\n *\n *$/.test(n) && (o = !0)),
                      this.options.gfm &&
                        (r = /^\[[ xX]\] /.exec(d)) &&
                        ((i = "[ ] " !== r[0]),
                        (d = d.replace(/^\[[ xX]\] +/, ""))),
                      D.items.push({
                        type: "list_item",
                        raw: n,
                        task: !!r,
                        checked: i,
                        loose: !1,
                        text: d,
                      }),
                      (D.raw += n);
                  }
                  (D.items[D.items.length - 1].raw = n.trimRight()),
                    (D.items[D.items.length - 1].text = d.trimRight()),
                    (D.raw = D.raw.trimRight());
                  var w = D.items.length;
                  for (u = 0; u < w; u++)
                    if (
                      ((this.lexer.state.top = !1),
                      (D.items[u].tokens = this.lexer.blockTokens(
                        D.items[u].text,
                        []
                      )),
                      !D.loose)
                    ) {
                      var b = D.items[u].tokens.filter(function (e) {
                          return "space" === e.type;
                        }),
                        x =
                          b.length > 0 &&
                          b.some(function (e) {
                            return /\n.*\n/.test(e.raw);
                          });
                      D.loose = x;
                    }
                  if (D.loose) for (u = 0; u < w; u++) D.items[u].loose = !0;
                  return D;
                }
              }),
              (n.html = function (e) {
                var t = this.rules.block.html.exec(e);
                if (t) {
                  var n = {
                    type: "html",
                    raw: t[0],
                    pre:
                      !this.options.sanitizer &&
                      ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                    text: t[0],
                  };
                  if (this.options.sanitize) {
                    var r = this.options.sanitizer
                      ? this.options.sanitizer(t[0])
                      : f(t[0]);
                    (n.type = "paragraph"),
                      (n.text = r),
                      (n.tokens = this.lexer.inline(r));
                  }
                  return n;
                }
              }),
              (n.def = function (e) {
                var t = this.rules.block.def.exec(e);
                if (t) {
                  var n = t[1].toLowerCase().replace(/\s+/g, " "),
                    r = t[2]
                      ? t[2]
                          .replace(/^<(.*)>$/, "$1")
                          .replace(this.rules.inline._escapes, "$1")
                      : "",
                    i = t[3]
                      ? t[3]
                          .substring(1, t[3].length - 1)
                          .replace(this.rules.inline._escapes, "$1")
                      : t[3];
                  return { type: "def", tag: n, raw: t[0], href: r, title: i };
                }
              }),
              (n.table = function (e) {
                var t = this.rules.block.table.exec(e);
                if (t) {
                  var n = {
                    type: "table",
                    header: F(t[1]).map(function (e) {
                      return { text: e };
                    }),
                    align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    rows:
                      t[3] && t[3].trim()
                        ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                        : [],
                  };
                  if (n.header.length === n.align.length) {
                    n.raw = t[0];
                    var r,
                      i,
                      s,
                      u,
                      a = n.align.length;
                    for (r = 0; r < a; r++)
                      /^ *-+: *$/.test(n.align[r])
                        ? (n.align[r] = "right")
                        : /^ *:-+: *$/.test(n.align[r])
                        ? (n.align[r] = "center")
                        : /^ *:-+ *$/.test(n.align[r])
                        ? (n.align[r] = "left")
                        : (n.align[r] = null);
                    for (a = n.rows.length, r = 0; r < a; r++)
                      n.rows[r] = F(n.rows[r], n.header.length).map(function (
                        e
                      ) {
                        return { text: e };
                      });
                    for (a = n.header.length, i = 0; i < a; i++)
                      n.header[i].tokens = this.lexer.inline(n.header[i].text);
                    for (a = n.rows.length, i = 0; i < a; i++)
                      for (u = n.rows[i], s = 0; s < u.length; s++)
                        u[s].tokens = this.lexer.inline(u[s].text);
                    return n;
                  }
                }
              }),
              (n.lheading = function (e) {
                var t = this.rules.block.lheading.exec(e);
                if (t)
                  return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: t[1],
                    tokens: this.lexer.inline(t[1]),
                  };
              }),
              (n.paragraph = function (e) {
                var t = this.rules.block.paragraph.exec(e);
                if (t) {
                  var n =
                    "\n" === t[1].charAt(t[1].length - 1)
                      ? t[1].slice(0, -1)
                      : t[1];
                  return {
                    type: "paragraph",
                    raw: t[0],
                    text: n,
                    tokens: this.lexer.inline(n),
                  };
                }
              }),
              (n.text = function (e) {
                var t = this.rules.block.text.exec(e);
                if (t)
                  return {
                    type: "text",
                    raw: t[0],
                    text: t[0],
                    tokens: this.lexer.inline(t[0]),
                  };
              }),
              (n.escape = function (e) {
                var t = this.rules.inline.escape.exec(e);
                if (t) return { type: "escape", raw: t[0], text: f(t[1]) };
              }),
              (n.tag = function (e) {
                var t = this.rules.inline.tag.exec(e);
                if (t)
                  return (
                    !this.lexer.state.inLink && /^<a /i.test(t[0])
                      ? (this.lexer.state.inLink = !0)
                      : this.lexer.state.inLink &&
                        /^<\/a>/i.test(t[0]) &&
                        (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock &&
                    /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                      ? (this.lexer.state.inRawBlock = !0)
                      : this.lexer.state.inRawBlock &&
                        /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                        (this.lexer.state.inRawBlock = !1),
                    {
                      type: this.options.sanitize ? "text" : "html",
                      raw: t[0],
                      inLink: this.lexer.state.inLink,
                      inRawBlock: this.lexer.state.inRawBlock,
                      text: this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(t[0])
                          : f(t[0])
                        : t[0],
                    }
                  );
              }),
              (n.link = function (e) {
                var t = this.rules.inline.link.exec(e);
                if (t) {
                  var n = t[2].trim();
                  if (!this.options.pedantic && /^</.test(n)) {
                    if (!/>$/.test(n)) return;
                    var r = A(n.slice(0, -1), "\\");
                    if ((n.length - r.length) % 2 == 0) return;
                  } else {
                    var i = (function (e, t) {
                      if (-1 === e.indexOf(t[1])) return -1;
                      for (var n = e.length, r = 0, i = 0; i < n; i++)
                        if ("\\" === e[i]) i++;
                        else if (e[i] === t[0]) r++;
                        else if (e[i] === t[1] && --r < 0) return i;
                      return -1;
                    })(t[2], "()");
                    if (i > -1) {
                      var s =
                        (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + i;
                      (t[2] = t[2].substring(0, i)),
                        (t[0] = t[0].substring(0, s).trim()),
                        (t[3] = "");
                    }
                  }
                  var u = t[2],
                    a = "";
                  if (this.options.pedantic) {
                    var o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);
                    o && ((u = o[1]), (a = o[3]));
                  } else a = t[3] ? t[3].slice(1, -1) : "";
                  return (
                    (u = u.trim()),
                    /^</.test(u) &&
                      (u =
                        this.options.pedantic && !/>$/.test(n)
                          ? u.slice(1)
                          : u.slice(1, -1)),
                    S(
                      t,
                      {
                        href: u
                          ? u.replace(this.rules.inline._escapes, "$1")
                          : u,
                        title: a
                          ? a.replace(this.rules.inline._escapes, "$1")
                          : a,
                      },
                      t[0],
                      this.lexer
                    )
                  );
                }
              }),
              (n.reflink = function (e, t) {
                var n;
                if (
                  (n = this.rules.inline.reflink.exec(e)) ||
                  (n = this.rules.inline.nolink.exec(e))
                ) {
                  var r = (n[2] || n[1]).replace(/\s+/g, " ");
                  if (!(r = t[r.toLowerCase()])) {
                    var i = n[0].charAt(0);
                    return { type: "text", raw: i, text: i };
                  }
                  return S(n, r, n[0], this.lexer);
                }
              }),
              (n.emStrong = function (e, t, n) {
                void 0 === n && (n = "");
                var r = this.rules.inline.emStrong.lDelim.exec(e);
                if (
                  r &&
                  (!r[3] ||
                    !n.match(
                      /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                    ))
                ) {
                  var i = r[1] || r[2] || "";
                  if (
                    !i ||
                    (i && ("" === n || this.rules.inline.punctuation.exec(n)))
                  ) {
                    var s,
                      u,
                      a = r[0].length - 1,
                      o = a,
                      l = 0,
                      c =
                        "*" === r[0][0]
                          ? this.rules.inline.emStrong.rDelimAst
                          : this.rules.inline.emStrong.rDelimUnd;
                    for (
                      c.lastIndex = 0, t = t.slice(-1 * e.length + a);
                      null != (r = c.exec(t));

                    )
                      if ((s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]))
                        if (((u = s.length), r[3] || r[4])) o += u;
                        else if (!((r[5] || r[6]) && a % 3) || (a + u) % 3) {
                          if (!((o -= u) > 0)) {
                            u = Math.min(u, u + o + l);
                            var h = e.slice(
                              0,
                              a + r.index + (r[0].length - s.length) + u
                            );
                            if (Math.min(a, u) % 2) {
                              var d = h.slice(1, -1);
                              return {
                                type: "em",
                                raw: h,
                                text: d,
                                tokens: this.lexer.inlineTokens(d),
                              };
                            }
                            var f = h.slice(2, -2);
                            return {
                              type: "strong",
                              raw: h,
                              text: f,
                              tokens: this.lexer.inlineTokens(f),
                            };
                          }
                        } else l += u;
                  }
                }
              }),
              (n.codespan = function (e) {
                var t = this.rules.inline.code.exec(e);
                if (t) {
                  var n = t[2].replace(/\n/g, " "),
                    r = /[^ ]/.test(n),
                    i = /^ /.test(n) && / $/.test(n);
                  return (
                    r && i && (n = n.substring(1, n.length - 1)),
                    (n = f(n, !0)),
                    { type: "codespan", raw: t[0], text: n }
                  );
                }
              }),
              (n.br = function (e) {
                var t = this.rules.inline.br.exec(e);
                if (t) return { type: "br", raw: t[0] };
              }),
              (n.del = function (e) {
                var t = this.rules.inline.del.exec(e);
                if (t)
                  return {
                    type: "del",
                    raw: t[0],
                    text: t[2],
                    tokens: this.lexer.inlineTokens(t[2]),
                  };
              }),
              (n.autolink = function (e, t) {
                var n,
                  r,
                  i = this.rules.inline.autolink.exec(e);
                if (i)
                  return (
                    (r =
                      "@" === i[2]
                        ? "mailto:" +
                          (n = f(this.options.mangle ? t(i[1]) : i[1]))
                        : (n = f(i[1]))),
                    {
                      type: "link",
                      raw: i[0],
                      text: n,
                      href: r,
                      tokens: [{ type: "text", raw: n, text: n }],
                    }
                  );
              }),
              (n.url = function (e, t) {
                var n;
                if ((n = this.rules.inline.url.exec(e))) {
                  var r, i;
                  if ("@" === n[2])
                    i =
                      "mailto:" + (r = f(this.options.mangle ? t(n[0]) : n[0]));
                  else {
                    var s;
                    do {
                      (s = n[0]),
                        (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                    } while (s !== n[0]);
                    (r = f(n[0])),
                      (i = "www." === n[1] ? "http://" + n[0] : n[0]);
                  }
                  return {
                    type: "link",
                    raw: n[0],
                    text: r,
                    href: i,
                    tokens: [{ type: "text", raw: r, text: r }],
                  };
                }
              }),
              (n.inlineText = function (e, t) {
                var n,
                  r = this.rules.inline.text.exec(e);
                if (r)
                  return (
                    (n = this.lexer.state.inRawBlock
                      ? this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(r[0])
                          : f(r[0])
                        : r[0]
                      : f(this.options.smartypants ? t(r[0]) : r[0])),
                    { type: "text", raw: r[0], text: n }
                  );
              }),
              e
            );
          })(),
          B = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences:
              /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
            table: C,
            lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph:
              /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
            _title:
              /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
          };
        (B.def = g(B.def)
          .replace("label", B._label)
          .replace("title", B._title)
          .getRegex()),
          (B.bullet = /(?:[*+-]|\d{1,9}[.)])/),
          (B.listItemStart = g(/^( *)(bull) */)
            .replace("bull", B.bullet)
            .getRegex()),
          (B.list = g(B.list)
            .replace(/bull/g, B.bullet)
            .replace(
              "hr",
              "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
            )
            .replace("def", "\\n+(?=" + B.def.source + ")")
            .getRegex()),
          (B._tag =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
          (B._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
          (B.html = g(B.html, "i")
            .replace("comment", B._comment)
            .replace("tag", B._tag)
            .replace(
              "attribute",
              / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
            )
            .getRegex()),
          (B.paragraph = g(B._paragraph)
            .replace("hr", B.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("|lheading", "")
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", B._tag)
            .getRegex()),
          (B.blockquote = g(B.blockquote)
            .replace("paragraph", B.paragraph)
            .getRegex()),
          (B.normal = r({}, B)),
          (B.gfm = r({}, B.normal, {
            table:
              "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
          })),
          (B.gfm.table = g(B.gfm.table)
            .replace("hr", B.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("blockquote", " {0,3}>")
            .replace("code", " {4}[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", B._tag)
            .getRegex()),
          (B.gfm.paragraph = g(B._paragraph)
            .replace("hr", B.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("|lheading", "")
            .replace("table", B.gfm.table)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", B._tag)
            .getRegex()),
          (B.pedantic = r({}, B.normal, {
            html: g(
              "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
            )
              .replace("comment", B._comment)
              .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: C,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: g(B.normal._paragraph)
              .replace("hr", B.hr)
              .replace("heading", " *#{1,6} *[^\n]")
              .replace("lheading", B.lheading)
              .replace("blockquote", " {0,3}>")
              .replace("|fences", "")
              .replace("|list", "")
              .replace("|html", "")
              .getRegex(),
          }));
        var O = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: C,
          tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(ref)\]/,
          nolink: /^!?\[(ref)\](?:\[\])?/,
          reflinkSearch: "reflink|nolink(?!\\()",
          emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            rDelimAst:
              /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
            rDelimUnd:
              /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
          },
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: C,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          punctuation: /^([\spunctuation])/,
        };
        function T(e) {
          return e
            .replace(/---/g, "—")
            .replace(/--/g, "–")
            .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
            .replace(/'/g, "’")
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
            .replace(/"/g, "”")
            .replace(/\.{3}/g, "…");
        }
        function Y(e) {
          var t,
            n,
            r = "",
            i = e.length;
          for (t = 0; t < i; t++)
            (n = e.charCodeAt(t)),
              Math.random() > 0.5 && (n = "x" + n.toString(16)),
              (r += "&#" + n + ";");
          return r;
        }
        (O._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
          (O.punctuation = g(O.punctuation)
            .replace(/punctuation/g, O._punctuation)
            .getRegex()),
          (O.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
          (O.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
          (O._comment = g(B._comment)
            .replace("(?:--\x3e|$)", "--\x3e")
            .getRegex()),
          (O.emStrong.lDelim = g(O.emStrong.lDelim)
            .replace(/punct/g, O._punctuation)
            .getRegex()),
          (O.emStrong.rDelimAst = g(O.emStrong.rDelimAst, "g")
            .replace(/punct/g, O._punctuation)
            .getRegex()),
          (O.emStrong.rDelimUnd = g(O.emStrong.rDelimUnd, "g")
            .replace(/punct/g, O._punctuation)
            .getRegex()),
          (O._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (O._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (O._email =
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (O.autolink = g(O.autolink)
            .replace("scheme", O._scheme)
            .replace("email", O._email)
            .getRegex()),
          (O._attribute =
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (O.tag = g(O.tag)
            .replace("comment", O._comment)
            .replace("attribute", O._attribute)
            .getRegex()),
          (O._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (O._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
          (O._title =
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (O.link = g(O.link)
            .replace("label", O._label)
            .replace("href", O._href)
            .replace("title", O._title)
            .getRegex()),
          (O.reflink = g(O.reflink)
            .replace("label", O._label)
            .replace("ref", B._label)
            .getRegex()),
          (O.nolink = g(O.nolink).replace("ref", B._label).getRegex()),
          (O.reflinkSearch = g(O.reflinkSearch, "g")
            .replace("reflink", O.reflink)
            .replace("nolink", O.nolink)
            .getRegex()),
          (O.normal = r({}, O)),
          (O.pedantic = r({}, O.normal, {
            strong: {
              start: /^__|\*\*/,
              middle:
                /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              endAst: /\*\*(?!\*)/g,
              endUnd: /__(?!_)/g,
            },
            em: {
              start: /^_|\*/,
              middle:
                /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
              endAst: /\*(?!\*)/g,
              endUnd: /_(?!_)/g,
            },
            link: g(/^!?\[(label)\]\((.*?)\)/)
              .replace("label", O._label)
              .getRegex(),
            reflink: g(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace("label", O._label)
              .getRegex(),
          })),
          (O.gfm = r({}, O.normal, {
            escape: g(O.escape).replace("])", "~|])").getRegex(),
            _extended_email:
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal:
              /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
          })),
          (O.gfm.url = g(O.gfm.url, "i")
            .replace("email", O.gfm._extended_email)
            .getRegex()),
          (O.breaks = r({}, O.gfm, {
            br: g(O.br).replace("{2,}", "*").getRegex(),
            text: g(O.gfm.text)
              .replace("\\b_", "\\b_| {2,}\\n")
              .replace(/\{2,\}/g, "*")
              .getRegex(),
          }));
        var R = (function () {
            function e(e) {
              (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = e || t.defaults),
                (this.options.tokenizer = this.options.tokenizer || new M()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
              var n = { block: B.normal, inline: O.normal };
              this.options.pedantic
                ? ((n.block = B.pedantic), (n.inline = O.pedantic))
                : this.options.gfm &&
                  ((n.block = B.gfm),
                  this.options.breaks
                    ? (n.inline = O.breaks)
                    : (n.inline = O.gfm)),
                (this.tokenizer.rules = n);
            }
            (e.lex = function (t, n) {
              return new e(n).lex(t);
            }),
              (e.lexInline = function (t, n) {
                return new e(n).inlineTokens(t);
              });
            var r,
              i,
              s = e.prototype;
            return (
              (s.lex = function (e) {
                var t;
                for (
                  e = e.replace(/\r\n|\r/g, "\n"),
                    this.blockTokens(e, this.tokens);
                  (t = this.inlineQueue.shift());

                )
                  this.inlineTokens(t.src, t.tokens);
                return this.tokens;
              }),
              (s.blockTokens = function (e, t) {
                var n,
                  r,
                  i,
                  s,
                  u = this;
                for (
                  void 0 === t && (t = []),
                    e = this.options.pedantic
                      ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
                      : e.replace(/^( *)(\t+)/gm, function (e, t, n) {
                          return t + "    ".repeat(n.length);
                        });
                  e;

                )
                  if (
                    !(
                      this.options.extensions &&
                      this.options.extensions.block &&
                      this.options.extensions.block.some(function (r) {
                        return (
                          !!(n = r.call({ lexer: u }, e, t)) &&
                          ((e = e.substring(n.raw.length)), t.push(n), !0)
                        );
                      })
                    )
                  )
                    if ((n = this.tokenizer.space(e)))
                      (e = e.substring(n.raw.length)),
                        1 === n.raw.length && t.length > 0
                          ? (t[t.length - 1].raw += "\n")
                          : t.push(n);
                    else if ((n = this.tokenizer.code(e)))
                      (e = e.substring(n.raw.length)),
                        !(r = t[t.length - 1]) ||
                        ("paragraph" !== r.type && "text" !== r.type)
                          ? t.push(n)
                          : ((r.raw += "\n" + n.raw),
                            (r.text += "\n" + n.text),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              r.text));
                    else if ((n = this.tokenizer.fences(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.heading(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.hr(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.blockquote(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.list(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.html(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.def(e)))
                      (e = e.substring(n.raw.length)),
                        !(r = t[t.length - 1]) ||
                        ("paragraph" !== r.type && "text" !== r.type)
                          ? this.tokens.links[n.tag] ||
                            (this.tokens.links[n.tag] = {
                              href: n.href,
                              title: n.title,
                            })
                          : ((r.raw += "\n" + n.raw),
                            (r.text += "\n" + n.raw),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              r.text));
                    else if ((n = this.tokenizer.table(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.lheading(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if (
                      ((i = e),
                      this.options.extensions &&
                        this.options.extensions.startBlock &&
                        (function () {
                          var t = 1 / 0,
                            n = e.slice(1),
                            r = void 0;
                          u.options.extensions.startBlock.forEach(function (e) {
                            "number" ==
                              typeof (r = e.call({ lexer: this }, n)) &&
                              r >= 0 &&
                              (t = Math.min(t, r));
                          }),
                            t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
                        })(),
                      this.state.top && (n = this.tokenizer.paragraph(i)))
                    )
                      (r = t[t.length - 1]),
                        s && "paragraph" === r.type
                          ? ((r.raw += "\n" + n.raw),
                            (r.text += "\n" + n.text),
                            this.inlineQueue.pop(),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              r.text))
                          : t.push(n),
                        (s = i.length !== e.length),
                        (e = e.substring(n.raw.length));
                    else if ((n = this.tokenizer.text(e)))
                      (e = e.substring(n.raw.length)),
                        (r = t[t.length - 1]) && "text" === r.type
                          ? ((r.raw += "\n" + n.raw),
                            (r.text += "\n" + n.text),
                            this.inlineQueue.pop(),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              r.text))
                          : t.push(n);
                    else if (e) {
                      var a = "Infinite loop on byte: " + e.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(a);
                        break;
                      }
                      throw new Error(a);
                    }
                return (this.state.top = !0), t;
              }),
              (s.inline = function (e, t) {
                return (
                  void 0 === t && (t = []),
                  this.inlineQueue.push({ src: e, tokens: t }),
                  t
                );
              }),
              (s.inlineTokens = function (e, t) {
                var n,
                  r,
                  i,
                  s = this;
                void 0 === t && (t = []);
                var u,
                  a,
                  o,
                  l = e;
                if (this.tokens.links) {
                  var c = Object.keys(this.tokens.links);
                  if (c.length > 0)
                    for (
                      ;
                      null !=
                      (u = this.tokenizer.rules.inline.reflinkSearch.exec(l));

                    )
                      c.includes(u[0].slice(u[0].lastIndexOf("[") + 1, -1)) &&
                        (l =
                          l.slice(0, u.index) +
                          "[" +
                          E("a", u[0].length - 2) +
                          "]" +
                          l.slice(
                            this.tokenizer.rules.inline.reflinkSearch.lastIndex
                          ));
                }
                for (
                  ;
                  null != (u = this.tokenizer.rules.inline.blockSkip.exec(l));

                )
                  l =
                    l.slice(0, u.index) +
                    "[" +
                    E("a", u[0].length - 2) +
                    "]" +
                    l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (
                  ;
                  null != (u = this.tokenizer.rules.inline.escapedEmSt.exec(l));

                )
                  (l =
                    l.slice(0, u.index + u[0].length - 2) +
                    "++" +
                    l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
                    this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
                for (; e; )
                  if (
                    (a || (o = ""),
                    (a = !1),
                    !(
                      this.options.extensions &&
                      this.options.extensions.inline &&
                      this.options.extensions.inline.some(function (r) {
                        return (
                          !!(n = r.call({ lexer: s }, e, t)) &&
                          ((e = e.substring(n.raw.length)), t.push(n), !0)
                        );
                      })
                    ))
                  )
                    if ((n = this.tokenizer.escape(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.tag(e)))
                      (e = e.substring(n.raw.length)),
                        (r = t[t.length - 1]) &&
                        "text" === n.type &&
                        "text" === r.type
                          ? ((r.raw += n.raw), (r.text += n.text))
                          : t.push(n);
                    else if ((n = this.tokenizer.link(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.reflink(e, this.tokens.links)))
                      (e = e.substring(n.raw.length)),
                        (r = t[t.length - 1]) &&
                        "text" === n.type &&
                        "text" === r.type
                          ? ((r.raw += n.raw), (r.text += n.text))
                          : t.push(n);
                    else if ((n = this.tokenizer.emStrong(e, l, o)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.codespan(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.br(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.del(e)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if ((n = this.tokenizer.autolink(e, Y)))
                      (e = e.substring(n.raw.length)), t.push(n);
                    else if (
                      this.state.inLink ||
                      !(n = this.tokenizer.url(e, Y))
                    ) {
                      if (
                        ((i = e),
                        this.options.extensions &&
                          this.options.extensions.startInline &&
                          (function () {
                            var t = 1 / 0,
                              n = e.slice(1),
                              r = void 0;
                            s.options.extensions.startInline.forEach(function (
                              e
                            ) {
                              "number" ==
                                typeof (r = e.call({ lexer: this }, n)) &&
                                r >= 0 &&
                                (t = Math.min(t, r));
                            }),
                              t < 1 / 0 &&
                                t >= 0 &&
                                (i = e.substring(0, t + 1));
                          })(),
                        (n = this.tokenizer.inlineText(i, T)))
                      )
                        (e = e.substring(n.raw.length)),
                          "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)),
                          (a = !0),
                          (r = t[t.length - 1]) && "text" === r.type
                            ? ((r.raw += n.raw), (r.text += n.text))
                            : t.push(n);
                      else if (e) {
                        var h = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) {
                          console.error(h);
                          break;
                        }
                        throw new Error(h);
                      }
                    } else (e = e.substring(n.raw.length)), t.push(n);
                return t;
              }),
              (r = e),
              (i = [
                {
                  key: "rules",
                  get: function () {
                    return { block: B, inline: O };
                  },
                },
              ]),
              null && n(r.prototype, null),
              i && n(r, i),
              Object.defineProperty(r, "prototype", { writable: !1 }),
              e
            );
          })(),
          N = (function () {
            function e(e) {
              this.options = e || t.defaults;
            }
            var n = e.prototype;
            return (
              (n.code = function (e, t, n) {
                var r = (t || "").match(/\S*/)[0];
                if (this.options.highlight) {
                  var i = this.options.highlight(e, r);
                  null != i && i !== e && ((n = !0), (e = i));
                }
                return (
                  (e = e.replace(/\n$/, "") + "\n"),
                  r
                    ? '<pre><code class="' +
                      this.options.langPrefix +
                      f(r) +
                      '">' +
                      (n ? e : f(e, !0)) +
                      "</code></pre>\n"
                    : "<pre><code>" + (n ? e : f(e, !0)) + "</code></pre>\n"
                );
              }),
              (n.blockquote = function (e) {
                return "<blockquote>\n" + e + "</blockquote>\n";
              }),
              (n.html = function (e) {
                return e;
              }),
              (n.heading = function (e, t, n, r) {
                return this.options.headerIds
                  ? "<h" +
                      t +
                      ' id="' +
                      (this.options.headerPrefix + r.slug(n)) +
                      '">' +
                      e +
                      "</h" +
                      t +
                      ">\n"
                  : "<h" + t + ">" + e + "</h" + t + ">\n";
              }),
              (n.hr = function () {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
              }),
              (n.list = function (e, t, n) {
                var r = t ? "ol" : "ul";
                return (
                  "<" +
                  r +
                  (t && 1 !== n ? ' start="' + n + '"' : "") +
                  ">\n" +
                  e +
                  "</" +
                  r +
                  ">\n"
                );
              }),
              (n.listitem = function (e) {
                return "<li>" + e + "</li>\n";
              }),
              (n.checkbox = function (e) {
                return (
                  "<input " +
                  (e ? 'checked="" ' : "") +
                  'disabled="" type="checkbox"' +
                  (this.options.xhtml ? " /" : "") +
                  "> "
                );
              }),
              (n.paragraph = function (e) {
                return "<p>" + e + "</p>\n";
              }),
              (n.table = function (e, t) {
                return (
                  t && (t = "<tbody>" + t + "</tbody>"),
                  "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                );
              }),
              (n.tablerow = function (e) {
                return "<tr>\n" + e + "</tr>\n";
              }),
              (n.tablecell = function (e, t) {
                var n = t.header ? "th" : "td";
                return (
                  (t.align
                    ? "<" + n + ' align="' + t.align + '">'
                    : "<" + n + ">") +
                  e +
                  "</" +
                  n +
                  ">\n"
                );
              }),
              (n.strong = function (e) {
                return "<strong>" + e + "</strong>";
              }),
              (n.em = function (e) {
                return "<em>" + e + "</em>";
              }),
              (n.codespan = function (e) {
                return "<code>" + e + "</code>";
              }),
              (n.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>";
              }),
              (n.del = function (e) {
                return "<del>" + e + "</del>";
              }),
              (n.link = function (e, t, n) {
                if (
                  null ===
                  (e = k(this.options.sanitize, this.options.baseUrl, e))
                )
                  return n;
                var r = '<a href="' + e + '"';
                return t && (r += ' title="' + t + '"'), r + ">" + n + "</a>";
              }),
              (n.image = function (e, t, n) {
                if (
                  null ===
                  (e = k(this.options.sanitize, this.options.baseUrl, e))
                )
                  return n;
                var r = '<img src="' + e + '" alt="' + n + '"';
                return (
                  t && (r += ' title="' + t + '"'),
                  r + (this.options.xhtml ? "/>" : ">")
                );
              }),
              (n.text = function (e) {
                return e;
              }),
              e
            );
          })(),
          P = (function () {
            function e() {}
            var t = e.prototype;
            return (
              (t.strong = function (e) {
                return e;
              }),
              (t.em = function (e) {
                return e;
              }),
              (t.codespan = function (e) {
                return e;
              }),
              (t.del = function (e) {
                return e;
              }),
              (t.html = function (e) {
                return e;
              }),
              (t.text = function (e) {
                return e;
              }),
              (t.link = function (e, t, n) {
                return "" + n;
              }),
              (t.image = function (e, t, n) {
                return "" + n;
              }),
              (t.br = function () {
                return "";
              }),
              e
            );
          })(),
          j = (function () {
            function e() {
              this.seen = {};
            }
            var t = e.prototype;
            return (
              (t.serialize = function (e) {
                return e
                  .toLowerCase()
                  .trim()
                  .replace(/<[!\/a-z].*?>/gi, "")
                  .replace(
                    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                    ""
                  )
                  .replace(/\s/g, "-");
              }),
              (t.getNextSafeSlug = function (e, t) {
                var n = e,
                  r = 0;
                if (this.seen.hasOwnProperty(n)) {
                  r = this.seen[e];
                  do {
                    n = e + "-" + ++r;
                  } while (this.seen.hasOwnProperty(n));
                }
                return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
              }),
              (t.slug = function (e, t) {
                void 0 === t && (t = {});
                var n = this.serialize(e);
                return this.getNextSafeSlug(n, t.dryrun);
              }),
              e
            );
          })(),
          L = (function () {
            function e(e) {
              (this.options = e || t.defaults),
                (this.options.renderer = this.options.renderer || new N()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.textRenderer = new P()),
                (this.slugger = new j());
            }
            (e.parse = function (t, n) {
              return new e(n).parse(t);
            }),
              (e.parseInline = function (t, n) {
                return new e(n).parseInline(t);
              });
            var n = e.prototype;
            return (
              (n.parse = function (e, t) {
                void 0 === t && (t = !0);
                var n,
                  r,
                  i,
                  s,
                  u,
                  a,
                  o,
                  l,
                  c,
                  h,
                  d,
                  f,
                  p,
                  D,
                  g,
                  y,
                  _,
                  k,
                  v,
                  w = "",
                  b = e.length;
                for (n = 0; n < b; n++)
                  if (
                    ((h = e[n]),
                    !(
                      this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[h.type]
                    ) ||
                      (!1 ===
                        (v = this.options.extensions.renderers[h.type].call(
                          { parser: this },
                          h
                        )) &&
                        [
                          "space",
                          "hr",
                          "heading",
                          "code",
                          "table",
                          "blockquote",
                          "list",
                          "html",
                          "paragraph",
                          "text",
                        ].includes(h.type)))
                  )
                    switch (h.type) {
                      case "space":
                        continue;
                      case "hr":
                        w += this.renderer.hr();
                        continue;
                      case "heading":
                        w += this.renderer.heading(
                          this.parseInline(h.tokens),
                          h.depth,
                          m(this.parseInline(h.tokens, this.textRenderer)),
                          this.slugger
                        );
                        continue;
                      case "code":
                        w += this.renderer.code(h.text, h.lang, h.escaped);
                        continue;
                      case "table":
                        for (
                          l = "", o = "", s = h.header.length, r = 0;
                          r < s;
                          r++
                        )
                          o += this.renderer.tablecell(
                            this.parseInline(h.header[r].tokens),
                            { header: !0, align: h.align[r] }
                          );
                        for (
                          l += this.renderer.tablerow(o),
                            c = "",
                            s = h.rows.length,
                            r = 0;
                          r < s;
                          r++
                        ) {
                          for (
                            o = "", u = (a = h.rows[r]).length, i = 0;
                            i < u;
                            i++
                          )
                            o += this.renderer.tablecell(
                              this.parseInline(a[i].tokens),
                              { header: !1, align: h.align[i] }
                            );
                          c += this.renderer.tablerow(o);
                        }
                        w += this.renderer.table(l, c);
                        continue;
                      case "blockquote":
                        (c = this.parse(h.tokens)),
                          (w += this.renderer.blockquote(c));
                        continue;
                      case "list":
                        for (
                          d = h.ordered,
                            f = h.start,
                            p = h.loose,
                            s = h.items.length,
                            c = "",
                            r = 0;
                          r < s;
                          r++
                        )
                          (y = (g = h.items[r]).checked),
                            (_ = g.task),
                            (D = ""),
                            g.task &&
                              ((k = this.renderer.checkbox(y)),
                              p
                                ? g.tokens.length > 0 &&
                                  "paragraph" === g.tokens[0].type
                                  ? ((g.tokens[0].text =
                                      k + " " + g.tokens[0].text),
                                    g.tokens[0].tokens &&
                                      g.tokens[0].tokens.length > 0 &&
                                      "text" === g.tokens[0].tokens[0].type &&
                                      (g.tokens[0].tokens[0].text =
                                        k + " " + g.tokens[0].tokens[0].text))
                                  : g.tokens.unshift({ type: "text", text: k })
                                : (D += k)),
                            (D += this.parse(g.tokens, p)),
                            (c += this.renderer.listitem(D, _, y));
                        w += this.renderer.list(c, d, f);
                        continue;
                      case "html":
                        w += this.renderer.html(h.text);
                        continue;
                      case "paragraph":
                        w += this.renderer.paragraph(
                          this.parseInline(h.tokens)
                        );
                        continue;
                      case "text":
                        for (
                          c = h.tokens ? this.parseInline(h.tokens) : h.text;
                          n + 1 < b && "text" === e[n + 1].type;

                        )
                          c +=
                            "\n" +
                            ((h = e[++n]).tokens
                              ? this.parseInline(h.tokens)
                              : h.text);
                        w += t ? this.renderer.paragraph(c) : c;
                        continue;
                      default:
                        var x =
                          'Token with "' + h.type + '" type was not found.';
                        if (this.options.silent) return void console.error(x);
                        throw new Error(x);
                    }
                  else w += v || "";
                return w;
              }),
              (n.parseInline = function (e, t) {
                t = t || this.renderer;
                var n,
                  r,
                  i,
                  s = "",
                  u = e.length;
                for (n = 0; n < u; n++)
                  if (
                    ((r = e[n]),
                    !(
                      this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[r.type]
                    ) ||
                      (!1 ===
                        (i = this.options.extensions.renderers[r.type].call(
                          { parser: this },
                          r
                        )) &&
                        [
                          "escape",
                          "html",
                          "link",
                          "image",
                          "strong",
                          "em",
                          "codespan",
                          "br",
                          "del",
                          "text",
                        ].includes(r.type)))
                  )
                    switch (r.type) {
                      case "escape":
                      case "text":
                        s += t.text(r.text);
                        break;
                      case "html":
                        s += t.html(r.text);
                        break;
                      case "link":
                        s += t.link(
                          r.href,
                          r.title,
                          this.parseInline(r.tokens, t)
                        );
                        break;
                      case "image":
                        s += t.image(r.href, r.title, r.text);
                        break;
                      case "strong":
                        s += t.strong(this.parseInline(r.tokens, t));
                        break;
                      case "em":
                        s += t.em(this.parseInline(r.tokens, t));
                        break;
                      case "codespan":
                        s += t.codespan(r.text);
                        break;
                      case "br":
                        s += t.br();
                        break;
                      case "del":
                        s += t.del(this.parseInline(r.tokens, t));
                        break;
                      default:
                        var a =
                          'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return void console.error(a);
                        throw new Error(a);
                    }
                  else s += i || "";
                return s;
              }),
              e
            );
          })(),
          z = (function () {
            function e(e) {
              this.options = e || t.defaults;
            }
            var n = e.prototype;
            return (
              (n.preprocess = function (e) {
                return e;
              }),
              (n.postprocess = function (e) {
                return e;
              }),
              e
            );
          })();
        function U(e, t) {
          return function (n, i, s) {
            "function" == typeof i && ((s = i), (i = null));
            var u = r({}, i),
              a = (function (e, t, n) {
                return function (r) {
                  if (
                    ((r.message +=
                      "\nPlease report this to https://github.com/markedjs/marked."),
                    e)
                  ) {
                    var i =
                      "<p>An error occurred:</p><pre>" +
                      f(r.message + "", !0) +
                      "</pre>";
                    return t ? Promise.resolve(i) : n ? void n(null, i) : i;
                  }
                  if (t) return Promise.reject(r);
                  if (!n) throw r;
                  n(r);
                };
              })((i = r({}, I.defaults, u)).silent, i.async, s);
            if (null == n)
              return a(
                new Error("marked(): input parameter is undefined or null")
              );
            if ("string" != typeof n)
              return a(
                new Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(n) +
                    ", string expected"
                )
              );
            if (
              ((function (e) {
                e &&
                  e.sanitize &&
                  !e.silent &&
                  console.warn(
                    "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
                  );
              })(i),
              i.hooks && (i.hooks.options = i),
              s)
            ) {
              var o,
                l = i.highlight;
              try {
                i.hooks && (n = i.hooks.preprocess(n)), (o = e(n, i));
              } catch (e) {
                return a(e);
              }
              var c = function (e) {
                var n;
                if (!e)
                  try {
                    i.walkTokens && I.walkTokens(o, i.walkTokens),
                      (n = t(o, i)),
                      i.hooks && (n = i.hooks.postprocess(n));
                  } catch (t) {
                    e = t;
                  }
                return (i.highlight = l), e ? a(e) : s(null, n);
              };
              if (!l || l.length < 3) return c();
              if ((delete i.highlight, !o.length)) return c();
              var h = 0;
              return (
                I.walkTokens(o, function (e) {
                  "code" === e.type &&
                    (h++,
                    setTimeout(function () {
                      l(e.text, e.lang, function (t, n) {
                        if (t) return c(t);
                        null != n &&
                          n !== e.text &&
                          ((e.text = n), (e.escaped = !0)),
                          0 == --h && c();
                      });
                    }, 0));
                }),
                void (0 === h && c())
              );
            }
            if (i.async)
              return Promise.resolve(i.hooks ? i.hooks.preprocess(n) : n)
                .then(function (t) {
                  return e(t, i);
                })
                .then(function (e) {
                  return i.walkTokens
                    ? Promise.all(I.walkTokens(e, i.walkTokens)).then(
                        function () {
                          return e;
                        }
                      )
                    : e;
                })
                .then(function (e) {
                  return t(e, i);
                })
                .then(function (e) {
                  return i.hooks ? i.hooks.postprocess(e) : e;
                })
                .catch(a);
            try {
              i.hooks && (n = i.hooks.preprocess(n));
              var d = e(n, i);
              i.walkTokens && I.walkTokens(d, i.walkTokens);
              var p = t(d, i);
              return i.hooks && (p = i.hooks.postprocess(p)), p;
            } catch (e) {
              return a(e);
            }
          };
        }
        function I(e, t, n) {
          return U(R.lex, L.parse)(e, t, n);
        }
        (z.passThroughHooks = new Set(["preprocess", "postprocess"])),
          (I.options = I.setOptions =
            function (e) {
              var n;
              return (
                (I.defaults = r({}, I.defaults, e)),
                (n = I.defaults),
                (t.defaults = n),
                I
              );
            }),
          (I.getDefaults = u),
          (I.defaults = t.defaults),
          (I.use = function () {
            for (
              var e = I.defaults.extensions || {
                  renderers: {},
                  childTokens: {},
                },
                t = arguments.length,
                n = new Array(t),
                i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            n.forEach(function (t) {
              var n = r({}, t);
              if (
                ((n.async = I.defaults.async || n.async || !1),
                t.extensions &&
                  (t.extensions.forEach(function (t) {
                    if (!t.name) throw new Error("extension name required");
                    if (t.renderer) {
                      var n = e.renderers[t.name];
                      e.renderers[t.name] = n
                        ? function () {
                            for (
                              var e = arguments.length, r = new Array(e), i = 0;
                              i < e;
                              i++
                            )
                              r[i] = arguments[i];
                            var s = t.renderer.apply(this, r);
                            return !1 === s && (s = n.apply(this, r)), s;
                          }
                        : t.renderer;
                    }
                    if (t.tokenizer) {
                      if (
                        !t.level ||
                        ("block" !== t.level && "inline" !== t.level)
                      )
                        throw new Error(
                          "extension level must be 'block' or 'inline'"
                        );
                      e[t.level]
                        ? e[t.level].unshift(t.tokenizer)
                        : (e[t.level] = [t.tokenizer]),
                        t.start &&
                          ("block" === t.level
                            ? e.startBlock
                              ? e.startBlock.push(t.start)
                              : (e.startBlock = [t.start])
                            : "inline" === t.level &&
                              (e.startInline
                                ? e.startInline.push(t.start)
                                : (e.startInline = [t.start])));
                    }
                    t.childTokens && (e.childTokens[t.name] = t.childTokens);
                  }),
                  (n.extensions = e)),
                t.renderer &&
                  (function () {
                    var e = I.defaults.renderer || new N(),
                      r = function (n) {
                        var r = e[n];
                        e[n] = function () {
                          for (
                            var i = arguments.length, s = new Array(i), u = 0;
                            u < i;
                            u++
                          )
                            s[u] = arguments[u];
                          var a = t.renderer[n].apply(e, s);
                          return !1 === a && (a = r.apply(e, s)), a;
                        };
                      };
                    for (var i in t.renderer) r(i);
                    n.renderer = e;
                  })(),
                t.tokenizer &&
                  (function () {
                    var e = I.defaults.tokenizer || new M(),
                      r = function (n) {
                        var r = e[n];
                        e[n] = function () {
                          for (
                            var i = arguments.length, s = new Array(i), u = 0;
                            u < i;
                            u++
                          )
                            s[u] = arguments[u];
                          var a = t.tokenizer[n].apply(e, s);
                          return !1 === a && (a = r.apply(e, s)), a;
                        };
                      };
                    for (var i in t.tokenizer) r(i);
                    n.tokenizer = e;
                  })(),
                t.hooks &&
                  (function () {
                    var e = I.defaults.hooks || new z(),
                      r = function (n) {
                        var r = e[n];
                        z.passThroughHooks.has(n)
                          ? (e[n] = function (i) {
                              if (I.defaults.async)
                                return Promise.resolve(
                                  t.hooks[n].call(e, i)
                                ).then(function (t) {
                                  return r.call(e, t);
                                });
                              var s = t.hooks[n].call(e, i);
                              return r.call(e, s);
                            })
                          : (e[n] = function () {
                              for (
                                var i = arguments.length,
                                  s = new Array(i),
                                  u = 0;
                                u < i;
                                u++
                              )
                                s[u] = arguments[u];
                              var a = t.hooks[n].apply(e, s);
                              return !1 === a && (a = r.apply(e, s)), a;
                            });
                      };
                    for (var i in t.hooks) r(i);
                    n.hooks = e;
                  })(),
                t.walkTokens)
              ) {
                var i = I.defaults.walkTokens;
                n.walkTokens = function (e) {
                  var n = [];
                  return (
                    n.push(t.walkTokens.call(this, e)),
                    i && (n = n.concat(i.call(this, e))),
                    n
                  );
                };
              }
              I.setOptions(n);
            });
          }),
          (I.walkTokens = function (e, t) {
            for (
              var n,
                r = [],
                i = function () {
                  var e = n.value;
                  switch (((r = r.concat(t.call(I, e))), e.type)) {
                    case "table":
                      for (var i, u = s(e.header); !(i = u()).done; ) {
                        var a = i.value;
                        r = r.concat(I.walkTokens(a.tokens, t));
                      }
                      for (var o, l = s(e.rows); !(o = l()).done; )
                        for (var c, h = s(o.value); !(c = h()).done; ) {
                          var d = c.value;
                          r = r.concat(I.walkTokens(d.tokens, t));
                        }
                      break;
                    case "list":
                      r = r.concat(I.walkTokens(e.items, t));
                      break;
                    default:
                      I.defaults.extensions &&
                      I.defaults.extensions.childTokens &&
                      I.defaults.extensions.childTokens[e.type]
                        ? I.defaults.extensions.childTokens[e.type].forEach(
                            function (n) {
                              r = r.concat(I.walkTokens(e[n], t));
                            }
                          )
                        : e.tokens && (r = r.concat(I.walkTokens(e.tokens, t)));
                  }
                },
                u = s(e);
              !(n = u()).done;

            )
              i();
            return r;
          }),
          (I.parseInline = U(R.lexInline, L.parseInline)),
          (I.Parser = L),
          (I.parser = L.parse),
          (I.Renderer = N),
          (I.TextRenderer = P),
          (I.Lexer = R),
          (I.lexer = R.lex),
          (I.Tokenizer = M),
          (I.Slugger = j),
          (I.Hooks = z),
          (I.parse = I);
        var $ = I.options,
          W = I.setOptions,
          H = I.use,
          V = I.walkTokens,
          G = I.parseInline,
          q = I,
          Z = L.parse,
          J = R.lex;
        (t.Hooks = z),
          (t.Lexer = R),
          (t.Parser = L),
          (t.Renderer = N),
          (t.Slugger = j),
          (t.TextRenderer = P),
          (t.Tokenizer = M),
          (t.getDefaults = u),
          (t.lexer = J),
          (t.marked = I),
          (t.options = $),
          (t.parse = q),
          (t.parseInline = G),
          (t.parser = Z),
          (t.setOptions = W),
          (t.use = H),
          (t.walkTokens = V);
      },
      593: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
        );
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(s.exports, s, s.exports, n), (s.loaded = !0), s.exports;
  }
  (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      const e = n(669).default,
        t = n(381),
        r = n(970),
        i = {
          link: {
            submission:
              "https://api.pullpush.io/reddit/search/submission/?test",
            commentsID:
              "https://api.pushshift.io/reddit/submission/comment_ids/",
            comments:
              "https://api.pushshift.io/reddit/search/comment?filter=id,author,parent_id,score,body,created_utc&ids=",
            commentSearch:
              "https://api.pullpush.io/reddit/search/comment/?test",
            commentsBackup:
              "https://api.pullpush.io/reddit/comment/search?sort=asc&limit=1000&link_id=",
          },
          template: {
            submissionCompiled: n(598),
            postCompiled: n(631),
            profilePostCompiled: n(641),
          },
          $el: (() => {
            const e = document.createElement("div");
            return (e.id = "submission"), e;
          })(),
          requestCount: 0,
          changeStatus(e) {
            document.getElementById("status").innerHTML = e;
          },
          last: null,
          useOld: !1,
          createRequest(e) {
            let t = [];
            return (
              e.forEach((e, n) => {
                ("since" !== n &&
                  "until" !== n &&
                  "before" !== n &&
                  "after" !== n) ||
                  "" === e ||
                  (e = Math.floor(new Date(e).getTime() / 1e3)),
                  "" !== e && "mode" !== n && t.push(n + "=" + e);
              }),
              t.join("&")
            );
          },
          grabSubmissions(n) {
            const r = i.createRequest(n);
            i.changeStatus(
              "<span class='d-flex align-items-center'>Loading Submissions…<div class='spinner-border ms-2' style='width:1rem; height:1rem;' role='loading'></div></span>"
            );

            e.get(i.link.submission + "&" + r)
              .then((e) => {
                i.$el.innerHTML = "";

                const promiseArray = e.data.data.map((e) => {
                  e.time = t.unix(e.created_utc).format("llll");
                  if (["jpg", "png", "gif"].includes(e.url.split(".").pop())) {
                    e.thumbnail = e.url;
                  }

                  i.$el.innerHTML += i.template.submissionCompiled(e);
                  i.last = e;

                  return Promise.resolve();
                });

                return Promise.all(promiseArray);
              })
              .then(() => {
                i.changeStatus(
                  "<span>Submissions Loaded<i class='bi bi-check-circle ms-2'></i></span>"
                );
              })

              .catch((e) => {
                console.log(e), i.changeStatus("<span>" + e + "</span>");
              });
          },
          grabComments(n, s) {
            i.changeStatus(
              "<span class='d-flex align-items-center'>Loading Comments…<div class='spinner-border text-body ms-2' style='width:1rem; height:1rem;' role='loading'></div></span>"
            ),
              i.changeStatus("<span>Loading Comments (Backup)</span>"),
              (i.$el.innerHTML = ""),
              e
                .get(i.link.submission + "&ids=" + n)
                .then((e) => {
                  (e.data.data[0].time = t
                    .unix(e.data.data[0].created_utc)
                    .format("llll")),
                    (e.data.data[0].selftext = r.parse(
                      e.data.data[0].selftext
                    )),
                    (i.$el.innerHTML = i.template.submissionCompiled(
                      e.data.data[0]
                    ));
                })
                .then(() => {
                  i.changeStatus(
                    "<span>Submission Loaded<i class='bi bi-check-circle ms-2'></i></span>"
                  );
                }),
              i.loadCommentsBackup(n, s).then(() => {
                i.changeStatus(
                  "<span>Comments Loaded<i class='bi bi-check-circle ms-2'></i></span>"
                );
              });
          },
          sleep: (e) => (
            i.changeStatus("Waiting for:" + e + "ms"),
            new Promise((t) => setTimeout(t, e))
          ),
          searchComments(n) {
            const s = i.createRequest(n);
            e.get(i.link.commentSearch + "&" + s)
              .then((e) => {
                (i.$el.innerHTML = ""),
                  e.data.data.forEach((e) => {
                    (e.time = t.unix(e.created_utc).format("llll")),
                      (e.body = r.parse(e.body)),
                      (e.link_id = e.link_id.split("_").pop()),
                      (i.$el.innerHTML += i.template.profilePostCompiled(e)),
                      (i.last = e);
                  });
              })
              .catch(i.error);
          },
          async loadCommentsBackup(n, s, u = null) {
            i.changeStatus(
              "<span>Loading Comments (Backup)<i class='bi bi-floppy2 ms-2'></i></span>"
            );
            let a = i.link.commentsBackup + n;
            null !== u && (a += "&after=" + (u + 1)),
              i.requestCount > 10 &&
                ((i.requestCount = 0),
                console.log("Waiting"),
                await i.sleep(1e4)),
              e
                .get(a)
                .then((e) => {
                  let a = null;
                  e.data.data.forEach((e) => {
                    switch (
                      ((e.time = t.unix(e.created_utc).format("llll")),
                      e.id === s
                        ? (e.postClass = "post_highlight fs-4")
                        : (e.postClass = "post"),
                      (e.body = r.parse(e.body)),
                      typeof e.parent_id)
                    ) {
                      case "undefined":
                        e.parent_id = "t3_" + n;
                        break;
                      case "number":
                        e.parent_id =
                          "t1_" + ((u = e.parent_id), parseInt(u).toString(36));
                    }
                    var u;
                    document.getElementById(e.parent_id)
                      ? (document.getElementById(e.parent_id).innerHTML +=
                          i.template.postCompiled(e))
                      : null == e.parent_id
                      ? (document.getElementById("comments_fix").innerHTML +=
                          i.template.postCompiled(e))
                      : ((e.postClass = "orphan p-3 border bg-body"),
                        (document.getElementById("orphans").innerHTML +=
                          i.template.postCompiled(e))),
                      (a = e);
                  }),
                    null !== a && a.created_utc != u
                      ? i.loadCommentsBackup(n, s, a.created_utc)
                      : i.changeStatus(
                          "<span>Comments Loaded<i class='bi bi-check-circle ms-2'></i></span>"
                        ),
                    null !== s && document.getElementById(s).scrollIntoView();
                })
                .catch(() => {
                  i.changeStatus(
                    "<span>Error<br/>Most likely too many requests. Try again later</span>"
                  );
                });
          },
          set_source_link() {
            if (/\?comments=[\w\d]{6,7}$/g.test(window.location.href)) {
              const postCode = window.location.href.split("=").pop();
              console.log(postCode);
              const g = document.querySelector("#submission");
              const p = document.createElement("div");
              p.setAttribute("id", "source_link");
              p.classList.add("text-end", "mb-3");
              p.style.zIndex = "100";
              g.insertAdjacentElement("afterend", p);
              document.getElementById("source_link").innerHTML =
                null != postCode
                  ? "<a href='https://reddit.com/" +
                    postCode +
                    "' class='btn btn-sm btn-link text-light' style='font-size: 12px'>Original Post</a>"
                  : "";
            }
          },
        };

      function s(e) {
        e.forEach((e, t) => {
          document.getElementById(t).value = e;
        });
      }

      window.onload = () => {
        const e = window.location.search,
          t = new URLSearchParams(e);
        const n = t.get("mode");
        t.has("limit") || t.set("limit", 100),
          "comments" === n
            ? (s(t), t.delete("mode"), i.searchComments(t))
            : null !== t.get("comments")
            ? i.grabComments(t.get("comments"), t.get("id"))
            : t.has("subreddit") &&
              (s(t), t.delete("mode"), i.grabSubmissions(t)),
          document.getElementById("content").appendChild(i.$el);
        setTimeout(() => i.set_source_link(), "1000");
      };
    })();
})();
