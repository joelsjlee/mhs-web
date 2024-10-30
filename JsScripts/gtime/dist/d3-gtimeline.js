import * as f from "d3";
export * from "d3";
import et from "dayjs";
const Bt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function ut(t) {
  f.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Bt);
  const e = f.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Pt(t) {
  return f.max(t.nodes().map((e) => e.getComputedTextLength()));
}
function Rt(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const X = 1, Ot = 2;
function ht(t, e) {
  let n = ["#FFF", "#FFF"], r = f.scaleOrdinal(n), s = 5, i, o = "#AAA", a = 40, c = 3e3, l;
  function h(p) {
    let x = e.domain(), b = ut((A) => A), k = f.scaleOrdinal(n), N = f.scaleOrdinal(n.reverse()), $ = Rt(a), E = p.selectAll(".row").data(x, e).order(), g = E.enter().append("g").attr("class", "row"), _ = E.exit(), w = E.select("text");
    E = E.merge(g).attr("transform", (A) => "translate(0," + e(A) + ")"), _.remove(), g.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", o).attr("stroke-width", 0.75).attr("fill", k), g.append("path").attr("stroke", N), w = w.merge(
      g.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(A, m) {
        f.select(this).text() != m && b.show(m);
      }).on("mouseout", b.hide)
    ).text($), l === void 0 && (l = Pt(w) + 2 * s, l = t === X ? c - l : l), i = t === X ? [0, l] : [l, c], w.attr("text-anchor", t === X ? "start" : "end").attr("dx", t === X ? s : -s).attr("x", l), p.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", o).attr("stroke-width", 1.75).attr("d", "M" + (l + 0.5) + ",0.5V" + e.range()[1]);
  }
  return h.draw_ticks = function(p, x) {
    p.selectAll(".row").select("path").attr("d", x.map((b) => "M" + b + ",1v" + (e.bandwidth() - 1)).join(""));
  }, h.scale = function(p) {
    return arguments.length ? (e = p, h) : e;
  }, h.width = function(p) {
    return arguments.length ? (c = p, h) : c;
  }, h.colors = function(p) {
    return arguments.length ? (n = p, h) : n;
  }, h.padding = function(p) {
    return arguments.length ? (s = p, h) : s;
  }, h.range = function(p) {
    return arguments.length ? (i = p, h) : i;
  }, h.trim = function(p) {
    return arguments.length ? (a = p, h) : a;
  }, h.offset = function(p) {
    return arguments.length ? (l = p, h) : l;
  }, h.colorscale = function(p) {
    return arguments.length ? (r = p, h) : r;
  }, h;
}
function Ht(t) {
  return ht(Ot, t);
}
function zt(t) {
  return ht(X, t);
}
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var pt = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ft, function() {
    var n, r, s = 1e3, i = 6e4, o = 36e5, a = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, l = 31536e6, h = 2628e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, x = { years: l, months: h, days: a, hours: o, minutes: i, seconds: s, milliseconds: 1, weeks: 6048e5 }, b = function(m) {
      return m instanceof w;
    }, k = function(m, d, u) {
      return new w(m, u, d.$l);
    }, N = function(m) {
      return r.p(m) + "s";
    }, $ = function(m) {
      return m < 0;
    }, E = function(m) {
      return $(m) ? Math.ceil(m) : Math.floor(m);
    }, g = function(m) {
      return Math.abs(m);
    }, _ = function(m, d) {
      return m ? $(m) ? { negative: !0, format: "" + g(m) + d } : { negative: !1, format: "" + m + d } : { negative: !1, format: "" };
    }, w = function() {
      function m(u, v, S) {
        var y = this;
        if (this.$d = {}, this.$l = S, u === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), v) return k(u * x[N(v)], this);
        if (typeof u == "number") return this.$ms = u, this.parseFromMilliseconds(), this;
        if (typeof u == "object") return Object.keys(u).forEach(function(D) {
          y.$d[N(D)] = u[D];
        }), this.calMilliseconds(), this;
        if (typeof u == "string") {
          var C = u.match(p);
          if (C) {
            var F = C.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = F[0], this.$d.months = F[1], this.$d.weeks = F[2], this.$d.days = F[3], this.$d.hours = F[4], this.$d.minutes = F[5], this.$d.seconds = F[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var d = m.prototype;
      return d.calMilliseconds = function() {
        var u = this;
        this.$ms = Object.keys(this.$d).reduce(function(v, S) {
          return v + (u.$d[S] || 0) * x[S];
        }, 0);
      }, d.parseFromMilliseconds = function() {
        var u = this.$ms;
        this.$d.years = E(u / l), u %= l, this.$d.months = E(u / h), u %= h, this.$d.days = E(u / a), u %= a, this.$d.hours = E(u / o), u %= o, this.$d.minutes = E(u / i), u %= i, this.$d.seconds = E(u / s), u %= s, this.$d.milliseconds = u;
      }, d.toISOString = function() {
        var u = _(this.$d.years, "Y"), v = _(this.$d.months, "M"), S = +this.$d.days || 0;
        this.$d.weeks && (S += 7 * this.$d.weeks);
        var y = _(S, "D"), C = _(this.$d.hours, "H"), F = _(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3, D = Math.round(1e3 * D) / 1e3);
        var T = _(D, "S"), rt = u.negative || v.negative || y.negative || C.negative || F.negative || T.negative, st = C.format || F.format || T.format ? "T" : "", z = (rt ? "-" : "") + "P" + u.format + v.format + y.format + st + C.format + F.format + T.format;
        return z === "P" || z === "-P" ? "P0D" : z;
      }, d.toJSON = function() {
        return this.toISOString();
      }, d.format = function(u) {
        var v = u || "YYYY-MM-DDTHH:mm:ss", S = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return v.replace(c, function(y, C) {
          return C || String(S[y]);
        });
      }, d.as = function(u) {
        return this.$ms / x[N(u)];
      }, d.get = function(u) {
        var v = this.$ms, S = N(u);
        return S === "milliseconds" ? v %= 1e3 : v = S === "weeks" ? E(v / x[S]) : this.$d[S], v || 0;
      }, d.add = function(u, v, S) {
        var y;
        return y = v ? u * x[N(v)] : b(u) ? u.$ms : k(u, this).$ms, k(this.$ms + y * (S ? -1 : 1), this);
      }, d.subtract = function(u, v) {
        return this.add(u, v, !0);
      }, d.locale = function(u) {
        var v = this.clone();
        return v.$l = u, v;
      }, d.clone = function() {
        return k(this.$ms, this);
      }, d.humanize = function(u) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!u);
      }, d.valueOf = function() {
        return this.asMilliseconds();
      }, d.milliseconds = function() {
        return this.get("milliseconds");
      }, d.asMilliseconds = function() {
        return this.as("milliseconds");
      }, d.seconds = function() {
        return this.get("seconds");
      }, d.asSeconds = function() {
        return this.as("seconds");
      }, d.minutes = function() {
        return this.get("minutes");
      }, d.asMinutes = function() {
        return this.as("minutes");
      }, d.hours = function() {
        return this.get("hours");
      }, d.asHours = function() {
        return this.as("hours");
      }, d.days = function() {
        return this.get("days");
      }, d.asDays = function() {
        return this.as("days");
      }, d.weeks = function() {
        return this.get("weeks");
      }, d.asWeeks = function() {
        return this.as("weeks");
      }, d.months = function() {
        return this.get("months");
      }, d.asMonths = function() {
        return this.as("months");
      }, d.years = function() {
        return this.get("years");
      }, d.asYears = function() {
        return this.as("years");
      }, m;
    }(), A = function(m, d, u) {
      return m.add(d.years() * u, "y").add(d.months() * u, "M").add(d.days() * u, "d").add(d.hours() * u, "h").add(d.minutes() * u, "m").add(d.seconds() * u, "s").add(d.milliseconds() * u, "ms");
    };
    return function(m, d, u) {
      n = u, r = u().$utils(), u.duration = function(y, C) {
        var F = u.locale();
        return k(y, { $l: F }, C);
      }, u.isDuration = b;
      var v = d.prototype.add, S = d.prototype.subtract;
      d.prototype.add = function(y, C) {
        return b(y) ? A(this, y, 1) : v.bind(this)(y, C);
      }, d.prototype.subtract = function(y, C) {
        return b(y) ? A(this, y, -1) : S.bind(this)(y, C);
      };
    };
  });
})(pt);
var Vt = pt.exports;
const qt = /* @__PURE__ */ dt(Vt);
var mt = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ft, function() {
    return function(n, r, s) {
      n = n || {};
      var i = r.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function a(l, h, p, x) {
        return i.fromToBase(l, h, p, x);
      }
      s.en.relativeTime = o, i.fromToBase = function(l, h, p, x, b) {
        for (var k, N, $, E = p.$locale().relativeTime || o, g = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], _ = g.length, w = 0; w < _; w += 1) {
          var A = g[w];
          A.d && (k = x ? s(l).diff(p, A.d, !0) : p.diff(l, A.d, !0));
          var m = (n.rounding || Math.round)(Math.abs(k));
          if ($ = k > 0, m <= A.r || !A.r) {
            m <= 1 && w > 0 && (A = g[w - 1]);
            var d = E[A.l];
            b && (m = b("" + m)), N = typeof d == "string" ? d.replace("%d", m) : d(m, h, A.l, $);
            break;
          }
        }
        if (h) return N;
        var u = $ ? E.future : E.past;
        return typeof u == "function" ? u(N) : u.replace("%s", N);
      }, i.to = function(l, h) {
        return a(l, h, this, !0);
      }, i.from = function(l, h) {
        return a(l, h, this);
      };
      var c = function(l) {
        return l.$u ? s.utc() : s();
      };
      i.toNow = function(l) {
        return this.to(c(this), l);
      }, i.fromNow = function(l) {
        return this.from(c(this), l);
      };
    };
  });
})(mt);
var Lt = mt.exports;
const It = /* @__PURE__ */ dt(Lt);
et.extend(qt);
et.extend(It);
function Wt(t, e) {
  return et.duration(e - t).humanize();
}
function ot() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return t.reduce((n, r) => r(n), e);
  };
}
function U(t) {
  return function(e) {
    return t === void 0 ? e : e[t];
  };
}
var tt = "http://www.w3.org/1999/xhtml";
const lt = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: tt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function gt(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), lt.hasOwnProperty(e) ? { space: lt[e], local: t } : t;
}
function Xt(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === tt && e.documentElement.namespaceURI === tt ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ut(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function yt(t) {
  var e = gt(t);
  return (e.local ? Ut : Xt)(e);
}
function Zt() {
}
function _t(t) {
  return t == null ? Zt : function() {
    return this.querySelector(t);
  };
}
function Gt(t) {
  typeof t != "function" && (t = _t(t));
  for (var e = this._groups, n = e.length, r = new Array(n), s = 0; s < n; ++s)
    for (var i = e[s], o = i.length, a = r[s] = new Array(o), c, l, h = 0; h < o; ++h)
      (c = i[h]) && (l = t.call(c, c.__data__, h, i)) && ("__data__" in c && (l.__data__ = c.__data__), a[h] = l);
  return new B(r, this._parents);
}
function wt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Kt() {
  return [];
}
function Jt(t) {
  return t == null ? Kt : function() {
    return this.querySelectorAll(t);
  };
}
function Qt(t) {
  return function() {
    return wt(t.apply(this, arguments));
  };
}
function jt(t) {
  typeof t == "function" ? t = Qt(t) : t = Jt(t);
  for (var e = this._groups, n = e.length, r = [], s = [], i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, c, l = 0; l < a; ++l)
      (c = o[l]) && (r.push(t.call(c, c.__data__, l, o)), s.push(c));
  return new B(r, s);
}
function te(t) {
  return function() {
    return this.matches(t);
  };
}
function xt(t) {
  return function(e) {
    return e.matches(t);
  };
}
var ee = Array.prototype.find;
function ne(t) {
  return function() {
    return ee.call(this.children, t);
  };
}
function re() {
  return this.firstElementChild;
}
function se(t) {
  return this.select(t == null ? re : ne(typeof t == "function" ? t : xt(t)));
}
var ie = Array.prototype.filter;
function oe() {
  return Array.from(this.children);
}
function le(t) {
  return function() {
    return ie.call(this.children, t);
  };
}
function ae(t) {
  return this.selectAll(t == null ? oe : le(typeof t == "function" ? t : xt(t)));
}
function ce(t) {
  typeof t != "function" && (t = te(t));
  for (var e = this._groups, n = e.length, r = new Array(n), s = 0; s < n; ++s)
    for (var i = e[s], o = i.length, a = r[s] = [], c, l = 0; l < o; ++l)
      (c = i[l]) && t.call(c, c.__data__, l, i) && a.push(c);
  return new B(r, this._parents);
}
function vt(t) {
  return new Array(t.length);
}
function ue() {
  return new B(this._enter || this._groups.map(vt), this._parents);
}
function G(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
G.prototype = {
  constructor: G,
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
function he(t) {
  return function() {
    return t;
  };
}
function fe(t, e, n, r, s, i) {
  for (var o = 0, a, c = e.length, l = i.length; o < l; ++o)
    (a = e[o]) ? (a.__data__ = i[o], r[o] = a) : n[o] = new G(t, i[o]);
  for (; o < c; ++o)
    (a = e[o]) && (s[o] = a);
}
function de(t, e, n, r, s, i, o) {
  var a, c, l = /* @__PURE__ */ new Map(), h = e.length, p = i.length, x = new Array(h), b;
  for (a = 0; a < h; ++a)
    (c = e[a]) && (x[a] = b = o.call(c, c.__data__, a, e) + "", l.has(b) ? s[a] = c : l.set(b, c));
  for (a = 0; a < p; ++a)
    b = o.call(t, i[a], a, i) + "", (c = l.get(b)) ? (r[a] = c, c.__data__ = i[a], l.delete(b)) : n[a] = new G(t, i[a]);
  for (a = 0; a < h; ++a)
    (c = e[a]) && l.get(x[a]) === c && (s[a] = c);
}
function pe(t) {
  return t.__data__;
}
function me(t, e) {
  if (!arguments.length) return Array.from(this, pe);
  var n = e ? de : fe, r = this._parents, s = this._groups;
  typeof t != "function" && (t = he(t));
  for (var i = s.length, o = new Array(i), a = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
    var h = r[l], p = s[l], x = p.length, b = ge(t.call(h, h && h.__data__, l, r)), k = b.length, N = a[l] = new Array(k), $ = o[l] = new Array(k), E = c[l] = new Array(x);
    n(h, p, N, $, E, b, e);
    for (var g = 0, _ = 0, w, A; g < k; ++g)
      if (w = N[g]) {
        for (g >= _ && (_ = g + 1); !(A = $[_]) && ++_ < k; ) ;
        w._next = A || null;
      }
  }
  return o = new B(o, r), o._enter = a, o._exit = c, o;
}
function ge(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ye() {
  return new B(this._exit || this._groups.map(vt), this._parents);
}
function _e(t, e, n) {
  var r = this.enter(), s = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (s = e(s), s && (s = s.selection())), n == null ? i.remove() : n(i), r && s ? r.merge(s).order() : s;
}
function we(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, s = n.length, i = r.length, o = Math.min(s, i), a = new Array(s), c = 0; c < o; ++c)
    for (var l = n[c], h = r[c], p = l.length, x = a[c] = new Array(p), b, k = 0; k < p; ++k)
      (b = l[k] || h[k]) && (x[k] = b);
  for (; c < s; ++c)
    a[c] = n[c];
  return new B(a, this._parents);
}
function xe() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], s = r.length - 1, i = r[s], o; --s >= 0; )
      (o = r[s]) && (i && o.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(o, i), i = o);
  return this;
}
function ve(t) {
  t || (t = Ae);
  function e(p, x) {
    return p && x ? t(p.__data__, x.__data__) : !p - !x;
  }
  for (var n = this._groups, r = n.length, s = new Array(r), i = 0; i < r; ++i) {
    for (var o = n[i], a = o.length, c = s[i] = new Array(a), l, h = 0; h < a; ++h)
      (l = o[h]) && (c[h] = l);
    c.sort(e);
  }
  return new B(s, this._parents).order();
}
function Ae(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function be() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function $e() {
  return Array.from(this);
}
function ke() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], s = 0, i = r.length; s < i; ++s) {
      var o = r[s];
      if (o) return o;
    }
  return null;
}
function Se() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Me() {
  return !this.node();
}
function Ee(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var s = e[n], i = 0, o = s.length, a; i < o; ++i)
      (a = s[i]) && t.call(a, a.__data__, i, s);
  return this;
}
function Ce(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ne(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fe(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function De(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Te(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Ye(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Be(t, e) {
  var n = gt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ne : Ce : typeof e == "function" ? n.local ? Ye : Te : n.local ? De : Fe)(n, e));
}
function At(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Pe(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Re(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Oe(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function He(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Pe : typeof e == "function" ? Oe : Re)(t, e, n ?? "")) : ze(this.node(), t);
}
function ze(t, e) {
  return t.style.getPropertyValue(e) || At(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Ve(t) {
  return function() {
    delete this[t];
  };
}
function qe(t, e) {
  return function() {
    this[t] = e;
  };
}
function Le(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ie(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Ve : typeof e == "function" ? Le : qe)(t, e)) : this.node()[t];
}
function bt(t) {
  return t.trim().split(/^|\s+/);
}
function nt(t) {
  return t.classList || new $t(t);
}
function $t(t) {
  this._node = t, this._names = bt(t.getAttribute("class") || "");
}
$t.prototype = {
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
function kt(t, e) {
  for (var n = nt(t), r = -1, s = e.length; ++r < s; ) n.add(e[r]);
}
function St(t, e) {
  for (var n = nt(t), r = -1, s = e.length; ++r < s; ) n.remove(e[r]);
}
function We(t) {
  return function() {
    kt(this, t);
  };
}
function Xe(t) {
  return function() {
    St(this, t);
  };
}
function Ue(t, e) {
  return function() {
    (e.apply(this, arguments) ? kt : St)(this, t);
  };
}
function Ze(t, e) {
  var n = bt(t + "");
  if (arguments.length < 2) {
    for (var r = nt(this.node()), s = -1, i = n.length; ++s < i; ) if (!r.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ue : e ? We : Xe)(n, e));
}
function Ge() {
  this.textContent = "";
}
function Ke(t) {
  return function() {
    this.textContent = t;
  };
}
function Je(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Qe(t) {
  return arguments.length ? this.each(t == null ? Ge : (typeof t == "function" ? Je : Ke)(t)) : this.node().textContent;
}
function je() {
  this.innerHTML = "";
}
function tn(t) {
  return function() {
    this.innerHTML = t;
  };
}
function en(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function nn(t) {
  return arguments.length ? this.each(t == null ? je : (typeof t == "function" ? en : tn)(t)) : this.node().innerHTML;
}
function rn() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sn() {
  return this.each(rn);
}
function on() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ln() {
  return this.each(on);
}
function an(t) {
  var e = typeof t == "function" ? t : yt(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function cn() {
  return null;
}
function un(t, e) {
  var n = typeof t == "function" ? t : yt(t), r = e == null ? cn : typeof e == "function" ? e : _t(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hn() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function fn() {
  return this.each(hn);
}
function dn() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function pn() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function mn(t) {
  return this.select(t ? pn : dn);
}
function gn(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function yn(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function _n(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function wn(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, s = e.length, i; n < s; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function xn(t, e, n) {
  return function() {
    var r = this.__on, s, i = yn(e);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((s = r[o]).type === t.type && s.name === t.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = i, s.options = n), s.value = e;
          return;
        }
    }
    this.addEventListener(t.type, i, n), s = { type: t.type, name: t.name, value: e, listener: i, options: n }, r ? r.push(s) : this.__on = [s];
  };
}
function vn(t, e, n) {
  var r = _n(t + ""), s, i = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, h; c < l; ++c)
        for (s = 0, h = a[c]; s < i; ++s)
          if ((o = r[s]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (a = e ? xn : wn, s = 0; s < i; ++s) this.each(a(r[s], e, n));
  return this;
}
function Mt(t, e, n) {
  var r = At(t), s = r.CustomEvent;
  typeof s == "function" ? s = new s(e, n) : (s = r.document.createEvent("Event"), n ? (s.initEvent(e, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(e, !1, !1)), t.dispatchEvent(s);
}
function An(t, e) {
  return function() {
    return Mt(this, t, e);
  };
}
function bn(t, e) {
  return function() {
    return Mt(this, t, e.apply(this, arguments));
  };
}
function $n(t, e) {
  return this.each((typeof e == "function" ? bn : An)(t, e));
}
function* kn() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], s = 0, i = r.length, o; s < i; ++s)
      (o = r[s]) && (yield o);
}
var Sn = [null];
function B(t, e) {
  this._groups = t, this._parents = e;
}
function Mn() {
  return this;
}
B.prototype = {
  constructor: B,
  select: Gt,
  selectAll: jt,
  selectChild: se,
  selectChildren: ae,
  filter: ce,
  data: me,
  enter: ue,
  exit: ye,
  join: _e,
  merge: we,
  selection: Mn,
  order: xe,
  sort: ve,
  call: be,
  nodes: $e,
  node: ke,
  size: Se,
  empty: Me,
  each: Ee,
  attr: Be,
  style: He,
  property: Ie,
  classed: Ze,
  text: Qe,
  html: nn,
  raise: sn,
  lower: ln,
  append: an,
  insert: un,
  remove: fn,
  clone: mn,
  datum: gn,
  on: vn,
  dispatch: $n,
  [Symbol.iterator]: kn
};
function at(t) {
  return typeof t == "string" ? new B([document.querySelectorAll(t)], [document.documentElement]) : new B([wt(t)], Sn);
}
var Z = 0, I = 0;
const En = [
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
function Cn(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function ct(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${r}`;
}
function W(t, e) {
  return "translate(" + t + "," + e + ")";
}
function Nn() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function K(t, e, n) {
  const s = f.select(t).attr("class");
  let i = !1;
  e.selectAll("g.row").each(function(g) {
    const w = f.select(this).attr("class");
    if (w == s)
      i = !0;
    else if (i) {
      let m = this.getAttribute("transform"), d = parseFloat(m.split("(")[1].split(",")[0].trim()), u = parseFloat(m.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${d},${u + n})`);
      var A = w.split(" ")[1];
      document.querySelectorAll(`g.task.${A} rect`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      }), document.querySelectorAll(`g.task.${A} text`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      });
    }
  }), f.selectAll(".tick line").each(function() {
    const g = f.select(this), _ = parseFloat(g.attr("y1"));
    isNaN(_) || g.attr("y1", _ + n);
  });
  const o = document.querySelector('path[stroke-width="1.75"]');
  let c = o.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), l = parseFloat(c[1]), h = parseFloat(c[2]), x = parseFloat(c[3]) + n;
  o.setAttribute("d", `M${l},${h}V${x}`);
  const b = f.select("g.x.axis.bottom-axis");
  let k = b.attr("transform"), N = parseFloat(k.split("(")[1].split(",")[0].trim()), E = parseFloat(k.split(",")[1].split(")")[0].trim()) + n;
  b.attr("transform", `translate(${N}, ${E})`);
}
function Et(t, e) {
  e.forEach(function(r) {
    document.querySelectorAll(`g.row.${r}`).forEach(function(i) {
      i.style.display = "block";
    });
  });
  const n = f.select(t).attr("class").split(" ")[1];
  f.selectAll(`g.task.${n}`).each(function(r) {
    var s = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (s == n.replace(/--/g, ""))
      f.select(this).style("display", "none");
    else if (s != n.replace(/--/g, "")) {
      f.select(this).style("display", "block");
      var i = (e.indexOf(s) + 1) * 38;
      let o = f.select(this), a = o.attr("transform"), c = parseFloat(a.split("(")[1].split(",")[0].trim()), l = parseFloat(a.split(",")[1].split(")")[0].trim()), h = l + i;
      o.attr("transform", `translate(${c}, ${l})`).transition().duration(1e3).attr("transform", `translate(${c}, ${h})`).on("start", () => {
        at(`g.task.${s}`).style("display", "none");
      }).on("end", () => {
        o.style("display", "none"), o.attr("transform", `translate(${c}, ${l})`), at(`g.task.${s}`).style("display", "block");
      });
    }
  });
}
function Ct(t, e) {
  return new Promise((n) => {
    const r = f.select(t).attr("class").split(" ")[1];
    f.selectAll(`g.task:not(.${r})`).each(function(s) {
      var i = s[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(i)) {
        f.select(this).style("display", "block");
        var o = (e.indexOf(i) + 1) * 38;
        let a = f.select(this), c = a.attr("transform"), l = parseFloat(c.split("(")[1].split(",")[0].trim()), h = parseFloat(c.split(",")[1].split(")")[0].trim()), p = h - o;
        a.transition().duration(1e3).attr("transform", `translate(${l}, ${p})`).on("end", () => {
          f.selectAll(`g.${r}`).style("display", "block"), a.style("display", "none"), a.attr("transform", `translate(${l}, ${h})`), e.forEach(function(x) {
            document.querySelectorAll(`.${x}`).forEach(function(k) {
              k.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function J(t, e) {
  const r = f.select(t).attr("class"), s = [];
  let i = !1, o = !1;
  return e.selectAll("g.row").each(function(a) {
    const l = f.select(this).attr("class");
    l == r ? i = !0 : i && l.split(" ")[2] == "timelineheader" ? o = !0 : i && !o && s.push(l.split(" ")[1]);
  }), s;
}
function Fn() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let e = [];
  f.selectAll("g.row.timelineheader text").each(function() {
    if (f.select(this).text() === "-") {
      const r = this.parentNode, s = J(r, f.select(r.parentNode)), i = s.length * 38;
      let o = Ct(r, s).then(() => {
        K(r, f.select(r.parentNode), -i), f.select(this).text("+").style("font-size", "20px");
      });
      e.push(o);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = Fn;
function Dn() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let e = [];
  f.selectAll("g.row.timelineheader text").each(function() {
    if (f.select(this).text() === "+") {
      const r = this.parentNode, s = J(r, f.select(r.parentNode)), i = s.length * 38;
      let o = new Promise((a) => {
        Et(r, s), K(r, f.select(r.parentNode), i), a();
      }).then(() => {
        f.select(this).text("-").style("font-size", "30px");
      });
      e.push(o);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = Dn;
function Pn(t) {
  let e = En, n = 5, r = 2, s = !1, i = !1, o, a, c = 0, l = U(0), h = U(1), p = U(2), x = U(3);
  console.log(t);
  function b(g, _) {
    const w = g.select("text"), A = g.select("rect"), m = A.attr("width") - 2 * n, d = h(_);
    w.text(d);
    let u = w.node().getComputedTextLength();
    if (u > m) {
      const v = m < 0 ? 0 : m / u, S = Math.floor(d.length * v);
      w.text(S > 2 ? d.slice(0, S - 2) + "…" : "");
    }
  }
  function k(g, _, w) {
    const A = g.select("text").node(), m = A.getBBox(), d = w.scale().domain().indexOf(l(_)), u = w.colorscale()(d), v = g.selectAll("rect.bckg").data([_]).join("rect").attr("class", "bckg").attr("fill", u).attr("x", m.x - n + r).attr("y", m.y - 2).attr("width", m.width + n - r).attr("height", m.height);
    g.node().insertBefore(v.node(), A);
  }
  function N(g, _) {
    g.each(function(w, A) {
      const m = f.select(this.parentNode);
      x(w) - p(w) ? b(m, w) : k(m, w, _);
    });
  }
  function $(g) {
    const _ = g.datum(), w = new Set(f.map(_, l)), A = new ut(E), m = f.scaleOrdinal(e);
    o = o || [f.min(_, p), f.max(_, x)], i && (o = f.extent(o.concat(/* @__PURE__ */ new Date()))), g.each(function(d) {
      const u = a || this.getBoundingClientRect().width - 15, v = w.size * (Cn(this) + 4 * n), S = f.scaleBand().domain(w).range([0, v]), y = f.scaleTime().domain(o), C = (s ? zt : Ht)(S).width(u), F = f.select(this).selectAll("svg").data([1]).join("svg");
      F.attr("class", "timeline").attr("width", u).attr("height", v + 40);
      const D = F.append("g").attr("transform", "translate(0,20)"), T = D.append("g").attr("class", "y axis").call(C);
      let z = document.querySelector('path[stroke-width="1.75"]').getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), Q = parseFloat(z[1]);
      T.selectAll("text").on("mouseover", function() {
        f.select(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        f.select(this).style("text-decoration", "none");
      }).attr("text-anchor", function(M) {
        return M.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(M) {
        return M.startsWith(" •") ? Q / 2 : Q - 0.5;
      }).style("cursor", "pointer").style("font-weight", function(M) {
        return M.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(M, P) {
        const Y = P.replace(/ • /g, "").replace("Topic, ", "").replace(" ", "%20"), R = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${Y}%22`;
        window.open(R, "_blank");
      }), T.selectAll("g.row").each(function(M) {
        const P = f.select(this).datum();
        f.select(this).classed(f.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), P.startsWith(" •") && f.select(this).classed("timelineheader", !0).append("text").attr("x", Q - 10).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), T.selectAll("g.row.timelineheader text").on("click", function(M, P) {
        const q = f.select(this).text();
        if (q === "+") {
          Z -= 1, I += 1, console.log("Collapsed: ", Z), console.log("Expanded: ", I);
          let Y = J(this.parentNode, T), R = Y.length * 38;
          Et(this.parentNode, Y), K(this.parentNode, T, R), f.select(this).text() === "+" ? f.select(this).text("-").style("font-size", "30px") : f.select(this).text("+");
        } else if (q === "-") {
          Z += 1, I -= 1, console.log("Collapsed: ", Z), console.log("Expanded: ", I);
          let Y = J(this.parentNode, T), R = Y.length * 38;
          Ct(this.parentNode, Y).then(() => {
            K(this.parentNode, T, -R);
          }), f.select(this).text() === "-" ? f.select(this).text("+").style("font-size", "20px") : f.select(this).text("-");
        } else {
          const R = P.replace(/ • /g, "").replace("Topic, ", "").replace(" ", "%20"), L = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${R}%22`;
          window.open(L, "_blank");
        }
      }), I = f.selectAll("text").filter(function() {
        return this.textContent.startsWith(" •");
      }).size();
      let O = C.range();
      y.range([O[0] + n, O[1] - n]).clamp(!0);
      const j = f.axisBottom(y), V = D.append("g").attr("class", "x axis").attr("transform", W(0, 0)).call(j);
      V.selectAll(".tick text").attr("dy", "-1.5em"), V.selectAll(".tick line").attr("y2", "-5").attr("y1", v);
      const Nt = f.axisBottom(y);
      F.append("g").attr("class", "x axis bottom-axis").attr("transform", W(0, v + 20)).call(Nt).selectAll(".tick line").attr("y2", "5"), T.on("offset", () => {
        O = C.range(), y.range([O[0] + n, O[1] - n]).clamp(!0), j.ticks(Math.min((O[1] - O[0]) / 70, 10)), V.call(j), H.attr("transform", (M) => W(y(p(M)), S(l(M)))).selectAll("rect").attr("width", (M) => y(x(M)) - y(p(M)) || r).call((M) => N(M, C)), T.call(C.draw_ticks, y.ticks().map(y));
      }), V.select(".domain").remove(), V.selectAll(".tick line").attr("stroke", "#AAA");
      const Ft = y.ticks().map(y);
      T.call(C.draw_ticks, Ft);
      let H = D.selectAll("g.task").data(d);
      H.exit().remove();
      const it = H.enter().append("g").classed("task", !0);
      it.each(function(M) {
        const P = l(M).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        f.select(this).classed(P, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", S.bandwidth() - 2 * n).on("mouseover", A.show).on("mouseout", A.hide).on("click", function(M, P) {
        var q = String(P[1]), Y = q.replace(/ /g, "%20"), Y = Y.replace("Topic,%20", ""), R = P[2], L = ct(R), Dt = P[3], Tt = ct(Dt), Yt = "https://www.primarysourcecoop.org/publications/" + t + "/search#q%3D%2Bsubject%3A%22" + Y + "%22%20%2Bdate_when%3A%5B" + L + "%20TO%20" + Tt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(Yt, "_blank");
      }).style("fill", ot(h, m)), H = H.merge(it), H.attr("transform", (M) => W(O[0], S(l(M)))).selectAll("rect").attr("width", 0), H.transition().duration(c).attr("transform", (M) => W(y(p(M)), S(l(M)))).selectAll("rect").attr("width", (M) => y(x(M)) - y(p(M)) || r), i && D.append("path").attr("stroke", "red").attr("d", "M" + y(/* @__PURE__ */ new Date()) + ",0.5V" + v);
    }), Nn();
  }
  return $.dates = function(g) {
    return arguments.length ? (o = g, $) : o;
  }, $.width = function(g) {
    return arguments.length ? (a = g, $) : a;
  }, $.today = function(g) {
    return arguments.length ? (i = g, $) : i;
  }, $.colors = function(g) {
    return arguments.length ? (e = g, $) : e;
  }, $.padding = function(g) {
    return arguments.length ? (n = g, $) : n;
  }, $.milestone_width = function(g) {
    return arguments.length ? (r = g, $) : r;
  }, $.reversed = function(g) {
    return arguments.length ? (s = g, $) : s;
  }, $.duration = function(g) {
    return arguments.length ? (c = g, $) : c;
  }, $;
  function E(g, _) {
    const w = ot(f.isoParse, f.timeFormat("%Y-%m-%d")), A = `<b>${h(_)}</b><hr style="margin: 2px 0 2px 0">${w(p(_))}`, m = x(_) - p(_) ? ` - ${w(x(_))}<br>${Wt(p(_), x(_))}` : "";
    return A + m;
  }
}
export {
  Wt as durationFormat,
  Pn as timeline,
  Ht as timelineAxisLeft,
  zt as timelineAxisRight,
  ut as tooltip
};
