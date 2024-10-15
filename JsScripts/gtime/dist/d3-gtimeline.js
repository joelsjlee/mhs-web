import * as m from "d3";
export * from "d3";
import J from "dayjs";
const Mt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function st(t) {
  m.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Mt);
  const e = m.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Ct(t) {
  return m.max(t.nodes().map((e) => e.getComputedTextLength()));
}
function Ft(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const W = 1, Et = 2;
function it(t, e) {
  let n = ["#FFF", "#FFF"], s = m.scaleOrdinal(n), r = 5, i, a = "#AAA", l = 40, c = 3e3, o;
  function u(p) {
    let k = e.domain(), A = st((v) => v), M = m.scaleOrdinal(n), E = m.scaleOrdinal(n.reverse()), b = Ft(l), C = p.selectAll(".row").data(k, e).order(), g = C.enter().append("g").attr("class", "row"), w = C.exit(), _ = C.select("text");
    C = C.merge(g).attr("transform", (v) => "translate(0," + e(v) + ")"), w.remove(), g.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", M), g.append("path").attr("stroke", E), _ = _.merge(
      g.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(v, d) {
        m.select(this).text() != d && A.show(d);
      }).on("mouseout", A.hide)
    ).text(b), o === void 0 && (o = Ct(_) + 2 * r, o = t === W ? c - o : o), i = t === W ? [0, o] : [o, c], _.attr("text-anchor", t === W ? "start" : "end").attr("dx", t === W ? r : -r).attr("x", o), p.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (o + 0.5) + ",0.5V" + e.range()[1]);
  }
  return u.draw_ticks = function(p, k) {
    p.selectAll(".row").select("path").attr("d", k.map((A) => "M" + A + ",1v" + (e.bandwidth() - 1)).join(""));
  }, u.scale = function(p) {
    return arguments.length ? (e = p, u) : e;
  }, u.width = function(p) {
    return arguments.length ? (c = p, u) : c;
  }, u.colors = function(p) {
    return arguments.length ? (n = p, u) : n;
  }, u.padding = function(p) {
    return arguments.length ? (r = p, u) : r;
  }, u.range = function(p) {
    return arguments.length ? (i = p, u) : i;
  }, u.trim = function(p) {
    return arguments.length ? (l = p, u) : l;
  }, u.offset = function(p) {
    return arguments.length ? (o = p, u) : o;
  }, u.colorscale = function(p) {
    return arguments.length ? (s = p, u) : s;
  }, u;
}
function Dt(t) {
  return it(Et, t);
}
function Nt(t) {
  return it(W, t);
}
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function at(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lt = { exports: {} };
(function(t, e) {
  (function(n, s) {
    t.exports = s();
  })(ot, function() {
    var n, s, r = 1e3, i = 6e4, a = 36e5, l = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, o = 31536e6, u = 2628e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, k = { years: o, months: u, days: l, hours: a, minutes: i, seconds: r, milliseconds: 1, weeks: 6048e5 }, A = function(d) {
      return d instanceof _;
    }, M = function(d, h, f) {
      return new _(d, f, h.$l);
    }, E = function(d) {
      return s.p(d) + "s";
    }, b = function(d) {
      return d < 0;
    }, C = function(d) {
      return b(d) ? Math.ceil(d) : Math.floor(d);
    }, g = function(d) {
      return Math.abs(d);
    }, w = function(d, h) {
      return d ? b(d) ? { negative: !0, format: "" + g(d) + h } : { negative: !1, format: "" + d + h } : { negative: !1, format: "" };
    }, _ = function() {
      function d(f, x, S) {
        var y = this;
        if (this.$d = {}, this.$l = S, f === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), x) return M(f * k[E(x)], this);
        if (typeof f == "number") return this.$ms = f, this.parseFromMilliseconds(), this;
        if (typeof f == "object") return Object.keys(f).forEach(function(N) {
          y.$d[E(N)] = f[N];
        }), this.calMilliseconds(), this;
        if (typeof f == "string") {
          var F = f.match(p);
          if (F) {
            var D = F.slice(2).map(function(N) {
              return N != null ? Number(N) : 0;
            });
            return this.$d.years = D[0], this.$d.months = D[1], this.$d.weeks = D[2], this.$d.days = D[3], this.$d.hours = D[4], this.$d.minutes = D[5], this.$d.seconds = D[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var h = d.prototype;
      return h.calMilliseconds = function() {
        var f = this;
        this.$ms = Object.keys(this.$d).reduce(function(x, S) {
          return x + (f.$d[S] || 0) * k[S];
        }, 0);
      }, h.parseFromMilliseconds = function() {
        var f = this.$ms;
        this.$d.years = C(f / o), f %= o, this.$d.months = C(f / u), f %= u, this.$d.days = C(f / l), f %= l, this.$d.hours = C(f / a), f %= a, this.$d.minutes = C(f / i), f %= i, this.$d.seconds = C(f / r), f %= r, this.$d.milliseconds = f;
      }, h.toISOString = function() {
        var f = w(this.$d.years, "Y"), x = w(this.$d.months, "M"), S = +this.$d.days || 0;
        this.$d.weeks && (S += 7 * this.$d.weeks);
        var y = w(S, "D"), F = w(this.$d.hours, "H"), D = w(this.$d.minutes, "M"), N = this.$d.seconds || 0;
        this.$d.milliseconds && (N += this.$d.milliseconds / 1e3, N = Math.round(1e3 * N) / 1e3);
        var T = w(N, "S"), R = f.negative || x.negative || y.negative || F.negative || D.negative || T.negative, P = F.format || D.format || T.format ? "T" : "", O = (R ? "-" : "") + "P" + f.format + x.format + y.format + P + F.format + D.format + T.format;
        return O === "P" || O === "-P" ? "P0D" : O;
      }, h.toJSON = function() {
        return this.toISOString();
      }, h.format = function(f) {
        var x = f || "YYYY-MM-DDTHH:mm:ss", S = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return x.replace(c, function(y, F) {
          return F || String(S[y]);
        });
      }, h.as = function(f) {
        return this.$ms / k[E(f)];
      }, h.get = function(f) {
        var x = this.$ms, S = E(f);
        return S === "milliseconds" ? x %= 1e3 : x = S === "weeks" ? C(x / k[S]) : this.$d[S], x || 0;
      }, h.add = function(f, x, S) {
        var y;
        return y = x ? f * k[E(x)] : A(f) ? f.$ms : M(f, this).$ms, M(this.$ms + y * (S ? -1 : 1), this);
      }, h.subtract = function(f, x) {
        return this.add(f, x, !0);
      }, h.locale = function(f) {
        var x = this.clone();
        return x.$l = f, x;
      }, h.clone = function() {
        return M(this.$ms, this);
      }, h.humanize = function(f) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!f);
      }, h.valueOf = function() {
        return this.asMilliseconds();
      }, h.milliseconds = function() {
        return this.get("milliseconds");
      }, h.asMilliseconds = function() {
        return this.as("milliseconds");
      }, h.seconds = function() {
        return this.get("seconds");
      }, h.asSeconds = function() {
        return this.as("seconds");
      }, h.minutes = function() {
        return this.get("minutes");
      }, h.asMinutes = function() {
        return this.as("minutes");
      }, h.hours = function() {
        return this.get("hours");
      }, h.asHours = function() {
        return this.as("hours");
      }, h.days = function() {
        return this.get("days");
      }, h.asDays = function() {
        return this.as("days");
      }, h.weeks = function() {
        return this.get("weeks");
      }, h.asWeeks = function() {
        return this.as("weeks");
      }, h.months = function() {
        return this.get("months");
      }, h.asMonths = function() {
        return this.as("months");
      }, h.years = function() {
        return this.get("years");
      }, h.asYears = function() {
        return this.as("years");
      }, d;
    }(), v = function(d, h, f) {
      return d.add(h.years() * f, "y").add(h.months() * f, "M").add(h.days() * f, "d").add(h.hours() * f, "h").add(h.minutes() * f, "m").add(h.seconds() * f, "s").add(h.milliseconds() * f, "ms");
    };
    return function(d, h, f) {
      n = f, s = f().$utils(), f.duration = function(y, F) {
        var D = f.locale();
        return M(y, { $l: D }, F);
      }, f.isDuration = A;
      var x = h.prototype.add, S = h.prototype.subtract;
      h.prototype.add = function(y, F) {
        return A(y) ? v(this, y, 1) : x.bind(this)(y, F);
      }, h.prototype.subtract = function(y, F) {
        return A(y) ? v(this, y, -1) : S.bind(this)(y, F);
      };
    };
  });
})(lt);
var Tt = lt.exports;
const Yt = /* @__PURE__ */ at(Tt);
var ct = { exports: {} };
(function(t, e) {
  (function(n, s) {
    t.exports = s();
  })(ot, function() {
    return function(n, s, r) {
      n = n || {};
      var i = s.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function l(o, u, p, k) {
        return i.fromToBase(o, u, p, k);
      }
      r.en.relativeTime = a, i.fromToBase = function(o, u, p, k, A) {
        for (var M, E, b, C = p.$locale().relativeTime || a, g = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], w = g.length, _ = 0; _ < w; _ += 1) {
          var v = g[_];
          v.d && (M = k ? r(o).diff(p, v.d, !0) : p.diff(o, v.d, !0));
          var d = (n.rounding || Math.round)(Math.abs(M));
          if (b = M > 0, d <= v.r || !v.r) {
            d <= 1 && _ > 0 && (v = g[_ - 1]);
            var h = C[v.l];
            A && (d = A("" + d)), E = typeof h == "string" ? h.replace("%d", d) : h(d, u, v.l, b);
            break;
          }
        }
        if (u) return E;
        var f = b ? C.future : C.past;
        return typeof f == "function" ? f(E) : f.replace("%s", E);
      }, i.to = function(o, u) {
        return l(o, u, this, !0);
      }, i.from = function(o, u) {
        return l(o, u, this);
      };
      var c = function(o) {
        return o.$u ? r.utc() : r();
      };
      i.toNow = function(o) {
        return this.to(c(this), o);
      }, i.fromNow = function(o) {
        return this.from(c(this), o);
      };
    };
  });
})(ct);
var Bt = ct.exports;
const Rt = /* @__PURE__ */ at(Bt);
J.extend(Yt);
J.extend(Rt);
function Ot(t, e) {
  return J.duration(e - t).humanize();
}
function G() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return t.reduce((n, s) => s(n), e);
  };
}
function X(t) {
  return function(e) {
    return t === void 0 ? e : e[t];
  };
}
var K = "http://www.w3.org/1999/xhtml";
const j = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: K,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ut(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), j.hasOwnProperty(e) ? { space: j[e], local: t } : t;
}
function qt(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === K && e.documentElement.namespaceURI === K ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ht(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ft(t) {
  var e = ut(t);
  return (e.local ? Ht : qt)(e);
}
function Lt() {
}
function ht(t) {
  return t == null ? Lt : function() {
    return this.querySelector(t);
  };
}
function Pt(t) {
  typeof t != "function" && (t = ht(t));
  for (var e = this._groups, n = e.length, s = new Array(n), r = 0; r < n; ++r)
    for (var i = e[r], a = i.length, l = s[r] = new Array(a), c, o, u = 0; u < a; ++u)
      (c = i[u]) && (o = t.call(c, c.__data__, u, i)) && ("__data__" in c && (o.__data__ = c.__data__), l[u] = o);
  return new Y(s, this._parents);
}
function dt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Vt() {
  return [];
}
function zt(t) {
  return t == null ? Vt : function() {
    return this.querySelectorAll(t);
  };
}
function It(t) {
  return function() {
    return dt(t.apply(this, arguments));
  };
}
function Wt(t) {
  typeof t == "function" ? t = It(t) : t = zt(t);
  for (var e = this._groups, n = e.length, s = [], r = [], i = 0; i < n; ++i)
    for (var a = e[i], l = a.length, c, o = 0; o < l; ++o)
      (c = a[o]) && (s.push(t.call(c, c.__data__, o, a)), r.push(c));
  return new Y(s, r);
}
function Xt(t) {
  return function() {
    return this.matches(t);
  };
}
function pt(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Ut = Array.prototype.find;
function Zt(t) {
  return function() {
    return Ut.call(this.children, t);
  };
}
function Gt() {
  return this.firstElementChild;
}
function Kt(t) {
  return this.select(t == null ? Gt : Zt(typeof t == "function" ? t : pt(t)));
}
var Jt = Array.prototype.filter;
function Qt() {
  return Array.from(this.children);
}
function jt(t) {
  return function() {
    return Jt.call(this.children, t);
  };
}
function te(t) {
  return this.selectAll(t == null ? Qt : jt(typeof t == "function" ? t : pt(t)));
}
function ee(t) {
  typeof t != "function" && (t = Xt(t));
  for (var e = this._groups, n = e.length, s = new Array(n), r = 0; r < n; ++r)
    for (var i = e[r], a = i.length, l = s[r] = [], c, o = 0; o < a; ++o)
      (c = i[o]) && t.call(c, c.__data__, o, i) && l.push(c);
  return new Y(s, this._parents);
}
function mt(t) {
  return new Array(t.length);
}
function ne() {
  return new Y(this._enter || this._groups.map(mt), this._parents);
}
function U(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
U.prototype = {
  constructor: U,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function re(t) {
  return function() {
    return t;
  };
}
function se(t, e, n, s, r, i) {
  for (var a = 0, l, c = e.length, o = i.length; a < o; ++a)
    (l = e[a]) ? (l.__data__ = i[a], s[a] = l) : n[a] = new U(t, i[a]);
  for (; a < c; ++a)
    (l = e[a]) && (r[a] = l);
}
function ie(t, e, n, s, r, i, a) {
  var l, c, o = /* @__PURE__ */ new Map(), u = e.length, p = i.length, k = new Array(u), A;
  for (l = 0; l < u; ++l)
    (c = e[l]) && (k[l] = A = a.call(c, c.__data__, l, e) + "", o.has(A) ? r[l] = c : o.set(A, c));
  for (l = 0; l < p; ++l)
    A = a.call(t, i[l], l, i) + "", (c = o.get(A)) ? (s[l] = c, c.__data__ = i[l], o.delete(A)) : n[l] = new U(t, i[l]);
  for (l = 0; l < u; ++l)
    (c = e[l]) && o.get(k[l]) === c && (r[l] = c);
}
function oe(t) {
  return t.__data__;
}
function ae(t, e) {
  if (!arguments.length) return Array.from(this, oe);
  var n = e ? ie : se, s = this._parents, r = this._groups;
  typeof t != "function" && (t = re(t));
  for (var i = r.length, a = new Array(i), l = new Array(i), c = new Array(i), o = 0; o < i; ++o) {
    var u = s[o], p = r[o], k = p.length, A = le(t.call(u, u && u.__data__, o, s)), M = A.length, E = l[o] = new Array(M), b = a[o] = new Array(M), C = c[o] = new Array(k);
    n(u, p, E, b, C, A, e);
    for (var g = 0, w = 0, _, v; g < M; ++g)
      if (_ = E[g]) {
        for (g >= w && (w = g + 1); !(v = b[w]) && ++w < M; ) ;
        _._next = v || null;
      }
  }
  return a = new Y(a, s), a._enter = l, a._exit = c, a;
}
function le(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ce() {
  return new Y(this._exit || this._groups.map(mt), this._parents);
}
function ue(t, e, n) {
  var s = this.enter(), r = this, i = this.exit();
  return typeof t == "function" ? (s = t(s), s && (s = s.selection())) : s = s.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? i.remove() : n(i), s && r ? s.merge(r).order() : r;
}
function fe(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, s = e._groups, r = n.length, i = s.length, a = Math.min(r, i), l = new Array(r), c = 0; c < a; ++c)
    for (var o = n[c], u = s[c], p = o.length, k = l[c] = new Array(p), A, M = 0; M < p; ++M)
      (A = o[M] || u[M]) && (k[M] = A);
  for (; c < r; ++c)
    l[c] = n[c];
  return new Y(l, this._parents);
}
function he() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var s = t[e], r = s.length - 1, i = s[r], a; --r >= 0; )
      (a = s[r]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function de(t) {
  t || (t = pe);
  function e(p, k) {
    return p && k ? t(p.__data__, k.__data__) : !p - !k;
  }
  for (var n = this._groups, s = n.length, r = new Array(s), i = 0; i < s; ++i) {
    for (var a = n[i], l = a.length, c = r[i] = new Array(l), o, u = 0; u < l; ++u)
      (o = a[u]) && (c[u] = o);
    c.sort(e);
  }
  return new Y(r, this._parents).order();
}
function pe(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function me() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ge() {
  return Array.from(this);
}
function ye() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var s = t[e], r = 0, i = s.length; r < i; ++r) {
      var a = s[r];
      if (a) return a;
    }
  return null;
}
function _e() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function we() {
  return !this.node();
}
function ve(t) {
  for (var e = this._groups, n = 0, s = e.length; n < s; ++n)
    for (var r = e[n], i = 0, a = r.length, l; i < a; ++i)
      (l = r[i]) && t.call(l, l.__data__, i, r);
  return this;
}
function xe(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ae(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function be(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function $e(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ke(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Se(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Me(t, e) {
  var n = ut(t);
  if (arguments.length < 2) {
    var s = this.node();
    return n.local ? s.getAttributeNS(n.space, n.local) : s.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ae : xe : typeof e == "function" ? n.local ? Se : ke : n.local ? $e : be)(n, e));
}
function gt(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ce(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fe(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Ee(t, e, n) {
  return function() {
    var s = e.apply(this, arguments);
    s == null ? this.style.removeProperty(t) : this.style.setProperty(t, s, n);
  };
}
function De(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ce : typeof e == "function" ? Ee : Fe)(t, e, n ?? "")) : Ne(this.node(), t);
}
function Ne(t, e) {
  return t.style.getPropertyValue(e) || gt(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Te(t) {
  return function() {
    delete this[t];
  };
}
function Ye(t, e) {
  return function() {
    this[t] = e;
  };
}
function Be(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Re(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Te : typeof e == "function" ? Be : Ye)(t, e)) : this.node()[t];
}
function yt(t) {
  return t.trim().split(/^|\s+/);
}
function Q(t) {
  return t.classList || new _t(t);
}
function _t(t) {
  this._node = t, this._names = yt(t.getAttribute("class") || "");
}
_t.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function wt(t, e) {
  for (var n = Q(t), s = -1, r = e.length; ++s < r; ) n.add(e[s]);
}
function vt(t, e) {
  for (var n = Q(t), s = -1, r = e.length; ++s < r; ) n.remove(e[s]);
}
function Oe(t) {
  return function() {
    wt(this, t);
  };
}
function qe(t) {
  return function() {
    vt(this, t);
  };
}
function He(t, e) {
  return function() {
    (e.apply(this, arguments) ? wt : vt)(this, t);
  };
}
function Le(t, e) {
  var n = yt(t + "");
  if (arguments.length < 2) {
    for (var s = Q(this.node()), r = -1, i = n.length; ++r < i; ) if (!s.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? He : e ? Oe : qe)(n, e));
}
function Pe() {
  this.textContent = "";
}
function Ve(t) {
  return function() {
    this.textContent = t;
  };
}
function ze(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ie(t) {
  return arguments.length ? this.each(t == null ? Pe : (typeof t == "function" ? ze : Ve)(t)) : this.node().textContent;
}
function We() {
  this.innerHTML = "";
}
function Xe(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ue(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ze(t) {
  return arguments.length ? this.each(t == null ? We : (typeof t == "function" ? Ue : Xe)(t)) : this.node().innerHTML;
}
function Ge() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ke() {
  return this.each(Ge);
}
function Je() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qe() {
  return this.each(Je);
}
function je(t) {
  var e = typeof t == "function" ? t : ft(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function tn() {
  return null;
}
function en(t, e) {
  var n = typeof t == "function" ? t : ft(t), s = e == null ? tn : typeof e == "function" ? e : ht(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), s.apply(this, arguments) || null);
  });
}
function nn() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function rn() {
  return this.each(nn);
}
function sn() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function on() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function an(t) {
  return this.select(t ? on : sn);
}
function ln(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function cn(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function un(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", s = e.indexOf(".");
    return s >= 0 && (n = e.slice(s + 1), e = e.slice(0, s)), { type: e, name: n };
  });
}
function fn(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, s = -1, r = e.length, i; n < r; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++s] = i;
      ++s ? e.length = s : delete this.__on;
    }
  };
}
function hn(t, e, n) {
  return function() {
    var s = this.__on, r, i = cn(e);
    if (s) {
      for (var a = 0, l = s.length; a < l; ++a)
        if ((r = s[a]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, i, n), r = { type: t.type, name: t.name, value: e, listener: i, options: n }, s ? s.push(r) : this.__on = [r];
  };
}
function dn(t, e, n) {
  var s = un(t + ""), r, i = s.length, a;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var c = 0, o = l.length, u; c < o; ++c)
        for (r = 0, u = l[c]; r < i; ++r)
          if ((a = s[r]).type === u.type && a.name === u.name)
            return u.value;
    }
    return;
  }
  for (l = e ? hn : fn, r = 0; r < i; ++r) this.each(l(s[r], e, n));
  return this;
}
function xt(t, e, n) {
  var s = gt(t), r = s.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = s.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function pn(t, e) {
  return function() {
    return xt(this, t, e);
  };
}
function mn(t, e) {
  return function() {
    return xt(this, t, e.apply(this, arguments));
  };
}
function gn(t, e) {
  return this.each((typeof e == "function" ? mn : pn)(t, e));
}
function* yn() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var s = t[e], r = 0, i = s.length, a; r < i; ++r)
      (a = s[r]) && (yield a);
}
var _n = [null];
function Y(t, e) {
  this._groups = t, this._parents = e;
}
function wn() {
  return this;
}
Y.prototype = {
  constructor: Y,
  select: Pt,
  selectAll: Wt,
  selectChild: Kt,
  selectChildren: te,
  filter: ee,
  data: ae,
  enter: ne,
  exit: ce,
  join: ue,
  merge: fe,
  selection: wn,
  order: he,
  sort: de,
  call: me,
  nodes: ge,
  node: ye,
  size: _e,
  empty: we,
  each: ve,
  attr: Me,
  style: De,
  property: Re,
  classed: Le,
  text: Ie,
  html: Ze,
  raise: Ke,
  lower: Qe,
  append: je,
  insert: en,
  remove: rn,
  clone: an,
  datum: ln,
  on: dn,
  dispatch: gn,
  [Symbol.iterator]: yn
};
function tt(t) {
  return typeof t == "string" ? new Y([document.querySelectorAll(t)], [document.documentElement]) : new Y([dt(t)], _n);
}
const vn = [
  "#4285f4",
  "#db4437",
  "#f4b400",
  "#0f9d58",
  "#ab47bc",
  "#5e97f5",
  "#e06055",
  "#f5bf26",
  "#33ab71",
  "#b762c6",
  "#00acc1",
  "#ff855f",
  "#9e9d24",
  "#26b8ca",
  "#ff7043"
];
function xn(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function An(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function bn(t) {
  return An(t) > 165;
}
function $n(t) {
  return bn(m.color(t)) ? "black" : "white";
}
function et(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), s = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${s}`;
}
function I(t, e) {
  return "translate(" + t + "," + e + ")";
}
function kn() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function nt(t, e, n) {
  const r = m.select(t).attr("class");
  let i = !1;
  e.selectAll("g.row").each(function(g) {
    const _ = m.select(this).attr("class");
    if (_ == r)
      i = !0;
    else if (i) {
      let d = this.getAttribute("transform"), h = parseFloat(d.split("(")[1].split(",")[0].trim()), f = parseFloat(d.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${h},${f + n})`);
      var v = _.split(" ")[1];
      document.querySelectorAll(`g.task.${v} rect`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      }), document.querySelectorAll(`g.task.${v} text`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      });
    }
  });
  const a = document.querySelector('path[stroke-width="1.75"]');
  let c = a.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), o = parseFloat(c[1]), u = parseFloat(c[2]), k = parseFloat(c[3]) + n;
  a.setAttribute("d", `M${o},${u}V${k}`);
  const A = document.querySelector("g.x.axis.bottom-axis");
  let E = A.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/), b = parseFloat(E[1]), C = parseFloat(E[2]);
  A.setAttribute("transform", `translate(${b},${C + n})`);
}
function Sn(t, e) {
  e.forEach(function(s) {
    document.querySelectorAll(`g.row.${s}`).forEach(function(i) {
      i.style.display = "block";
    });
  });
  const n = m.select(t).attr("class").split(" ")[1];
  m.selectAll(`g.task.${n}`).each(function(s) {
    var r = s[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (r == n.replace(/--/g, ""))
      m.select(this).style("display", "none");
    else if (r != n.replace(/--/g, "")) {
      m.select(this).style("display", "block");
      var i = (e.indexOf(r) + 1) * 38;
      let a = m.select(this), l = a.attr("transform"), c = parseFloat(l.split("(")[1].split(",")[0].trim()), o = parseFloat(l.split(",")[1].split(")")[0].trim()), u = o + i;
      a.attr("transform", `translate(${c}, ${o})`).transition().duration(1e3).attr("transform", `translate(${c}, ${u})`).on("start", () => {
        tt(`g.task.${r}`).style("display", "none");
      }).on("end", () => {
        a.style("display", "none"), a.attr("transform", `translate(${c}, ${o})`), tt(`g.task.${r}`).style("display", "block");
      });
    }
  });
}
function Mn(t, e) {
  return new Promise((n) => {
    const s = m.select(t).attr("class").split(" ")[1];
    m.selectAll(`g.task:not(.${s})`).each(function(r) {
      var i = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(i)) {
        m.select(this).style("display", "block");
        var a = (e.indexOf(i) + 1) * 38;
        let l = m.select(this), c = l.attr("transform"), o = parseFloat(c.split("(")[1].split(",")[0].trim()), u = parseFloat(c.split(",")[1].split(")")[0].trim()), p = u - a;
        l.transition().duration(1e3).attr("transform", `translate(${o}, ${p})`).on("end", () => {
          m.selectAll(`g.${s}`).style("display", "block"), l.style("display", "none"), l.attr("transform", `translate(${o}, ${u})`), e.forEach(function(k) {
            document.querySelectorAll(`.${k}`).forEach(function(M) {
              M.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function rt(t, e) {
  const s = m.select(t).attr("class"), r = [];
  let i = !1, a = !1;
  return e.selectAll("g.row").each(function(l) {
    const o = m.select(this).attr("class");
    o == s ? i = !0 : i && o.split(" ")[2] == "timelineheader" ? a = !0 : i && !a && r.push(o.split(" ")[1]);
  }), r;
}
function En() {
  let t = vn, e = 5, n = 2, s = !1, r = !1, i, a, l = 0, c = X(0), o = X(1), u = X(2), p = X(3);
  function k(g, w) {
    const _ = g.select("text"), v = g.select("rect"), d = v.attr("width") - 2 * e, h = o(w);
    _.text(h);
    let f = _.node().getComputedTextLength();
    if (f > d) {
      const x = d < 0 ? 0 : d / f, S = Math.floor(h.length * x);
      _.text(S > 2 ? h.slice(0, S - 2) + "…" : "");
    }
  }
  function A(g, w, _) {
    const v = g.select("text").node(), d = v.getBBox(), h = _.scale().domain().indexOf(c(w)), f = _.colorscale()(h), x = g.selectAll("rect.bckg").data([w]).join("rect").attr("class", "bckg").attr("fill", f).attr("x", d.x - e + n).attr("y", d.y - 2).attr("width", d.width + e - n).attr("height", d.height);
    g.node().insertBefore(x.node(), v);
  }
  function M(g, w) {
    g.each(function(_, v) {
      const d = m.select(this.parentNode);
      p(_) - u(_) ? k(d, _) : A(d, _, w);
    });
  }
  function E(g) {
    return function(w, _) {
      m.active(this).tween("text", function() {
        return function(v) {
          M(m.select(this), g);
        };
      });
    };
  }
  function b(g) {
    const w = g.datum(), _ = new Set(m.map(w, c)), v = new st(C), d = m.scaleOrdinal(t);
    i = i || [m.min(w, u), m.max(w, p)], r && (i = m.extent(i.concat(/* @__PURE__ */ new Date()))), g.each(function(h) {
      const f = a || this.getBoundingClientRect().width, x = _.size * (xn(this) + 4 * e), S = m.scaleBand().domain(_).range([0, x]), y = m.scaleTime().domain(i), F = (s ? Nt : Dt)(S).width(f), D = m.select(this).selectAll("svg").data([1]).join("svg");
      D.attr("class", "timeline").attr("width", f).attr("height", x + 40);
      const N = D.append("g").attr("transform", "translate(0,20)"), T = N.append("g").attr("class", "y axis").call(F);
      T.selectAll("text").attr("text-anchor", function($) {
        return $.startsWith(" •") ? "middle" : "end";
      }).attr("x", function($) {
        return $.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function($) {
        return $.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function($, B) {
        const H = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(H, "_blank");
      }), T.selectAll("g.row").each(function($) {
        const B = m.select(this).datum();
        m.select(this).classed(m.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), B.startsWith(" •") && m.select(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), T.selectAll("g.row.timelineheader text").on("click", function($, B) {
        const V = m.select(this).text();
        if (V === "+") {
          let q = rt(this.parentNode, T), H = q.length * 38;
          Sn(this.parentNode, q), nt(this.parentNode, T, H), m.select(this).text() === "+" ? m.select(this).text("-").style("font-size", "30px") : m.select(this).text("+");
        } else if (V === "-") {
          let q = rt(this.parentNode, T), H = q.length * 38;
          Mn(this.parentNode, q).then(() => {
            nt(this.parentNode, T, -H);
          }), m.select(this).text() === "-" ? m.select(this).text("+").style("font-size", "20px") : m.select(this).text("-");
        } else {
          const z = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
          window.open(z, "_blank");
        }
      });
      let R = F.range();
      y.range([R[0] + e, R[1] - e]).clamp(!0);
      const P = m.axisBottom(y), O = N.append("g").attr("class", "x axis").attr("transform", I(0, 0)).call(P);
      O.selectAll(".tick text").attr("dy", "-1.5em"), O.selectAll(".tick line").attr("y2", "-5");
      const At = m.axisBottom(y);
      D.append("g").attr("class", "x axis bottom-axis").attr("transform", I(0, x + 20)).call(At).selectAll(".tick line").attr("y2", "5"), T.on("offset", () => {
        R = F.range(), y.range([R[0] + e, R[1] - e]).clamp(!0), P.ticks(Math.min((R[1] - R[0]) / 70, 10)), O.call(P), L.attr("transform", ($) => I(y(u($)), S(c($)))).selectAll("rect").attr("width", ($) => y(p($)) - y(u($)) || n).call(($) => M($, F)), T.call(F.draw_ticks, y.ticks().map(y));
      }), O.select(".domain").remove(), O.selectAll(".tick line").attr("stroke", "#AAA");
      const bt = y.ticks().map(y);
      T.call(F.draw_ticks, bt);
      let L = N.selectAll("g.task").data(h);
      L.exit().remove();
      const Z = L.enter().append("g").classed("task", !0);
      Z.each(function($) {
        const B = c($).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        m.select(this).classed(B, !0);
      }).append("rect").style("opacity", 1).attr("y", e).style("cursor", "pointer").attr("height", S.bandwidth() - 2 * e).on("mouseover", v.show).on("mouseout", v.hide).on("click", function($, B) {
        var V = String(B[1]), q = V.replace(" ", "%20"), H = B[2], z = et(H), $t = B[3], kt = et($t), St = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + q + "%22%20%2Bdate_when%3A%5B" + z + "%20TO%20" + kt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(St, "_blank");
      }).style("fill", G(o, d)), Z.append("text").attr("text-anchor", "start").attr("fill", ($) => p($) - u($) ? G(o, d, $n)($) : "black").attr("pointer-events", "none").attr("dx", e).attr("y", S.bandwidth() / 2).attr("dy", "0.32em").text(o), L = L.merge(Z), L.attr("transform", ($) => I(R[0], S(c($)))).selectAll("rect").attr("width", 0), L.transition().duration(l).attr("transform", ($) => I(y(u($)), S(c($)))).selectAll("rect").attr("width", ($) => y(p($)) - y(u($)) || n).on("start", E(F)), r && N.append("path").attr("stroke", "red").attr("d", "M" + y(/* @__PURE__ */ new Date()) + ",0.5V" + x);
    }), kn();
  }
  return b.dates = function(g) {
    return arguments.length ? (i = g, b) : i;
  }, b.width = function(g) {
    return arguments.length ? (a = g, b) : a;
  }, b.today = function(g) {
    return arguments.length ? (r = g, b) : r;
  }, b.colors = function(g) {
    return arguments.length ? (t = g, b) : t;
  }, b.padding = function(g) {
    return arguments.length ? (e = g, b) : e;
  }, b.milestone_width = function(g) {
    return arguments.length ? (n = g, b) : n;
  }, b.reversed = function(g) {
    return arguments.length ? (s = g, b) : s;
  }, b.duration = function(g) {
    return arguments.length ? (l = g, b) : l;
  }, b;
  function C(g, w) {
    const _ = G(m.isoParse, m.timeFormat("%Y-%m-%d")), v = `<b>${o(w)}</b><hr style="margin: 2px 0 2px 0">${_(u(w))}`, d = p(w) - u(w) ? ` - ${_(p(w))}<br>${Ot(u(w), p(w))}` : "";
    return v + d;
  }
}
export {
  Ot as durationFormat,
  En as timeline,
  Dt as timelineAxisLeft,
  Nt as timelineAxisRight,
  st as tooltip
};
