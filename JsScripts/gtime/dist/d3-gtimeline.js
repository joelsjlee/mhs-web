import * as d from "d3";
export * from "d3";
import nt from "dayjs";
const Tt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function lt(t) {
  d.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Tt);
  const e = d.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Yt(t) {
  return d.max(t.nodes().map((e) => e.getComputedTextLength()));
}
function Pt(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const W = 1, Rt = 2;
function ct(t, e) {
  let n = ["#FFF", "#FFF"], r = d.scaleOrdinal(n), s = 5, i, o = "#AAA", l = 40, c = 3e3, a;
  function h(p) {
    let x = e.domain(), b = lt((y) => y), S = d.scaleOrdinal(n), C = d.scaleOrdinal(n.reverse()), N = Pt(l), _ = p.selectAll(".row").data(x, e).order(), F = _.enter().append("g").attr("class", "row"), g = _.exit(), w = _.select("text");
    _ = _.merge(F).attr("transform", (y) => "translate(0," + e(y) + ")"), g.remove(), F.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", o).attr("stroke-width", 0.75).attr("fill", S), F.append("path").attr("stroke", C), w = w.merge(
      F.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(y, m) {
        d.select(this).text() != m && b.show(m);
      }).on("mouseout", b.hide)
    ).text(N), a === void 0 && (a = Yt(w) + 2 * s, a = t === W ? c - a : a), i = t === W ? [0, a] : [a, c], w.attr("text-anchor", t === W ? "start" : "end").attr("dx", t === W ? s : -s).attr("x", a), p.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", o).attr("stroke-width", 1.75).attr("d", "M" + (a + 0.5) + ",0.5V" + e.range()[1]);
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
    return arguments.length ? (l = p, h) : l;
  }, h.offset = function(p) {
    return arguments.length ? (a = p, h) : a;
  }, h.colorscale = function(p) {
    return arguments.length ? (r = p, h) : r;
  }, h;
}
function Ot(t) {
  return ct(Rt, t);
}
function Ht(t) {
  return ct(W, t);
}
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ft = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ut, function() {
    var n, r, s = 1e3, i = 6e4, o = 36e5, l = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, h = 2628e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, x = { years: a, months: h, days: l, hours: o, minutes: i, seconds: s, milliseconds: 1, weeks: 6048e5 }, b = function(m) {
      return m instanceof w;
    }, S = function(m, f, u) {
      return new w(m, u, f.$l);
    }, C = function(m) {
      return r.p(m) + "s";
    }, N = function(m) {
      return m < 0;
    }, _ = function(m) {
      return N(m) ? Math.ceil(m) : Math.floor(m);
    }, F = function(m) {
      return Math.abs(m);
    }, g = function(m, f) {
      return m ? N(m) ? { negative: !0, format: "" + F(m) + f } : { negative: !1, format: "" + m + f } : { negative: !1, format: "" };
    }, w = function() {
      function m(u, A, M) {
        var v = this;
        if (this.$d = {}, this.$l = M, u === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), A) return S(u * x[C(A)], this);
        if (typeof u == "number") return this.$ms = u, this.parseFromMilliseconds(), this;
        if (typeof u == "object") return Object.keys(u).forEach(function(D) {
          v.$d[C(D)] = u[D];
        }), this.calMilliseconds(), this;
        if (typeof u == "string") {
          var k = u.match(p);
          if (k) {
            var E = k.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = E[0], this.$d.months = E[1], this.$d.weeks = E[2], this.$d.days = E[3], this.$d.hours = E[4], this.$d.minutes = E[5], this.$d.seconds = E[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var f = m.prototype;
      return f.calMilliseconds = function() {
        var u = this;
        this.$ms = Object.keys(this.$d).reduce(function(A, M) {
          return A + (u.$d[M] || 0) * x[M];
        }, 0);
      }, f.parseFromMilliseconds = function() {
        var u = this.$ms;
        this.$d.years = _(u / a), u %= a, this.$d.months = _(u / h), u %= h, this.$d.days = _(u / l), u %= l, this.$d.hours = _(u / o), u %= o, this.$d.minutes = _(u / i), u %= i, this.$d.seconds = _(u / s), u %= s, this.$d.milliseconds = u;
      }, f.toISOString = function() {
        var u = g(this.$d.years, "Y"), A = g(this.$d.months, "M"), M = +this.$d.days || 0;
        this.$d.weeks && (M += 7 * this.$d.weeks);
        var v = g(M, "D"), k = g(this.$d.hours, "H"), E = g(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3, D = Math.round(1e3 * D) / 1e3);
        var O = g(D, "S"), B = u.negative || A.negative || v.negative || k.negative || E.negative || O.negative, st = k.format || E.format || O.format ? "T" : "", X = (B ? "-" : "") + "P" + u.format + A.format + v.format + st + k.format + E.format + O.format;
        return X === "P" || X === "-P" ? "P0D" : X;
      }, f.toJSON = function() {
        return this.toISOString();
      }, f.format = function(u) {
        var A = u || "YYYY-MM-DDTHH:mm:ss", M = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return A.replace(c, function(v, k) {
          return k || String(M[v]);
        });
      }, f.as = function(u) {
        return this.$ms / x[C(u)];
      }, f.get = function(u) {
        var A = this.$ms, M = C(u);
        return M === "milliseconds" ? A %= 1e3 : A = M === "weeks" ? _(A / x[M]) : this.$d[M], A || 0;
      }, f.add = function(u, A, M) {
        var v;
        return v = A ? u * x[C(A)] : b(u) ? u.$ms : S(u, this).$ms, S(this.$ms + v * (M ? -1 : 1), this);
      }, f.subtract = function(u, A) {
        return this.add(u, A, !0);
      }, f.locale = function(u) {
        var A = this.clone();
        return A.$l = u, A;
      }, f.clone = function() {
        return S(this.$ms, this);
      }, f.humanize = function(u) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!u);
      }, f.valueOf = function() {
        return this.asMilliseconds();
      }, f.milliseconds = function() {
        return this.get("milliseconds");
      }, f.asMilliseconds = function() {
        return this.as("milliseconds");
      }, f.seconds = function() {
        return this.get("seconds");
      }, f.asSeconds = function() {
        return this.as("seconds");
      }, f.minutes = function() {
        return this.get("minutes");
      }, f.asMinutes = function() {
        return this.as("minutes");
      }, f.hours = function() {
        return this.get("hours");
      }, f.asHours = function() {
        return this.as("hours");
      }, f.days = function() {
        return this.get("days");
      }, f.asDays = function() {
        return this.as("days");
      }, f.weeks = function() {
        return this.get("weeks");
      }, f.asWeeks = function() {
        return this.as("weeks");
      }, f.months = function() {
        return this.get("months");
      }, f.asMonths = function() {
        return this.as("months");
      }, f.years = function() {
        return this.get("years");
      }, f.asYears = function() {
        return this.as("years");
      }, m;
    }(), y = function(m, f, u) {
      return m.add(f.years() * u, "y").add(f.months() * u, "M").add(f.days() * u, "d").add(f.hours() * u, "h").add(f.minutes() * u, "m").add(f.seconds() * u, "s").add(f.milliseconds() * u, "ms");
    };
    return function(m, f, u) {
      n = u, r = u().$utils(), u.duration = function(v, k) {
        var E = u.locale();
        return S(v, { $l: E }, k);
      }, u.isDuration = b;
      var A = f.prototype.add, M = f.prototype.subtract;
      f.prototype.add = function(v, k) {
        return b(v) ? y(this, v, 1) : A.bind(this)(v, k);
      }, f.prototype.subtract = function(v, k) {
        return b(v) ? y(this, v, -1) : M.bind(this)(v, k);
      };
    };
  });
})(ft);
var Vt = ft.exports;
const qt = /* @__PURE__ */ ht(Vt);
var dt = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ut, function() {
    return function(n, r, s) {
      n = n || {};
      var i = r.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function l(a, h, p, x) {
        return i.fromToBase(a, h, p, x);
      }
      s.en.relativeTime = o, i.fromToBase = function(a, h, p, x, b) {
        for (var S, C, N, _ = p.$locale().relativeTime || o, F = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], g = F.length, w = 0; w < g; w += 1) {
          var y = F[w];
          y.d && (S = x ? s(a).diff(p, y.d, !0) : p.diff(a, y.d, !0));
          var m = (n.rounding || Math.round)(Math.abs(S));
          if (N = S > 0, m <= y.r || !y.r) {
            m <= 1 && w > 0 && (y = F[w - 1]);
            var f = _[y.l];
            b && (m = b("" + m)), C = typeof f == "string" ? f.replace("%d", m) : f(m, h, y.l, N);
            break;
          }
        }
        if (h) return C;
        var u = N ? _.future : _.past;
        return typeof u == "function" ? u(C) : u.replace("%s", C);
      }, i.to = function(a, h) {
        return l(a, h, this, !0);
      }, i.from = function(a, h) {
        return l(a, h, this);
      };
      var c = function(a) {
        return a.$u ? s.utc() : s();
      };
      i.toNow = function(a) {
        return this.to(c(this), a);
      }, i.fromNow = function(a) {
        return this.from(c(this), a);
      };
    };
  });
})(dt);
var zt = dt.exports;
const Lt = /* @__PURE__ */ ht(zt);
nt.extend(qt);
nt.extend(Lt);
function It(t, e) {
  return nt.duration(e - t).humanize();
}
function tt() {
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
var et = "http://www.w3.org/1999/xhtml";
const it = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: et,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function pt(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), it.hasOwnProperty(e) ? { space: it[e], local: t } : t;
}
function Wt(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === et && e.documentElement.namespaceURI === et ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Xt(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function mt(t) {
  var e = pt(t);
  return (e.local ? Xt : Wt)(e);
}
function Ut() {
}
function gt(t) {
  return t == null ? Ut : function() {
    return this.querySelector(t);
  };
}
function Zt(t) {
  typeof t != "function" && (t = gt(t));
  for (var e = this._groups, n = e.length, r = new Array(n), s = 0; s < n; ++s)
    for (var i = e[s], o = i.length, l = r[s] = new Array(o), c, a, h = 0; h < o; ++h)
      (c = i[h]) && (a = t.call(c, c.__data__, h, i)) && ("__data__" in c && (a.__data__ = c.__data__), l[h] = a);
  return new T(r, this._parents);
}
function yt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Gt() {
  return [];
}
function Kt(t) {
  return t == null ? Gt : function() {
    return this.querySelectorAll(t);
  };
}
function Jt(t) {
  return function() {
    return yt(t.apply(this, arguments));
  };
}
function Qt(t) {
  typeof t == "function" ? t = Jt(t) : t = Kt(t);
  for (var e = this._groups, n = e.length, r = [], s = [], i = 0; i < n; ++i)
    for (var o = e[i], l = o.length, c, a = 0; a < l; ++a)
      (c = o[a]) && (r.push(t.call(c, c.__data__, a, o)), s.push(c));
  return new T(r, s);
}
function jt(t) {
  return function() {
    return this.matches(t);
  };
}
function _t(t) {
  return function(e) {
    return e.matches(t);
  };
}
var te = Array.prototype.find;
function ee(t) {
  return function() {
    return te.call(this.children, t);
  };
}
function ne() {
  return this.firstElementChild;
}
function re(t) {
  return this.select(t == null ? ne : ee(typeof t == "function" ? t : _t(t)));
}
var se = Array.prototype.filter;
function ie() {
  return Array.from(this.children);
}
function oe(t) {
  return function() {
    return se.call(this.children, t);
  };
}
function ae(t) {
  return this.selectAll(t == null ? ie : oe(typeof t == "function" ? t : _t(t)));
}
function le(t) {
  typeof t != "function" && (t = jt(t));
  for (var e = this._groups, n = e.length, r = new Array(n), s = 0; s < n; ++s)
    for (var i = e[s], o = i.length, l = r[s] = [], c, a = 0; a < o; ++a)
      (c = i[a]) && t.call(c, c.__data__, a, i) && l.push(c);
  return new T(r, this._parents);
}
function wt(t) {
  return new Array(t.length);
}
function ce() {
  return new T(this._enter || this._groups.map(wt), this._parents);
}
function Z(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Z.prototype = {
  constructor: Z,
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
function ue(t) {
  return function() {
    return t;
  };
}
function he(t, e, n, r, s, i) {
  for (var o = 0, l, c = e.length, a = i.length; o < a; ++o)
    (l = e[o]) ? (l.__data__ = i[o], r[o] = l) : n[o] = new Z(t, i[o]);
  for (; o < c; ++o)
    (l = e[o]) && (s[o] = l);
}
function fe(t, e, n, r, s, i, o) {
  var l, c, a = /* @__PURE__ */ new Map(), h = e.length, p = i.length, x = new Array(h), b;
  for (l = 0; l < h; ++l)
    (c = e[l]) && (x[l] = b = o.call(c, c.__data__, l, e) + "", a.has(b) ? s[l] = c : a.set(b, c));
  for (l = 0; l < p; ++l)
    b = o.call(t, i[l], l, i) + "", (c = a.get(b)) ? (r[l] = c, c.__data__ = i[l], a.delete(b)) : n[l] = new Z(t, i[l]);
  for (l = 0; l < h; ++l)
    (c = e[l]) && a.get(x[l]) === c && (s[l] = c);
}
function de(t) {
  return t.__data__;
}
function pe(t, e) {
  if (!arguments.length) return Array.from(this, de);
  var n = e ? fe : he, r = this._parents, s = this._groups;
  typeof t != "function" && (t = ue(t));
  for (var i = s.length, o = new Array(i), l = new Array(i), c = new Array(i), a = 0; a < i; ++a) {
    var h = r[a], p = s[a], x = p.length, b = me(t.call(h, h && h.__data__, a, r)), S = b.length, C = l[a] = new Array(S), N = o[a] = new Array(S), _ = c[a] = new Array(x);
    n(h, p, C, N, _, b, e);
    for (var F = 0, g = 0, w, y; F < S; ++F)
      if (w = C[F]) {
        for (F >= g && (g = F + 1); !(y = N[g]) && ++g < S; ) ;
        w._next = y || null;
      }
  }
  return o = new T(o, r), o._enter = l, o._exit = c, o;
}
function me(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ge() {
  return new T(this._exit || this._groups.map(wt), this._parents);
}
function ye(t, e, n) {
  var r = this.enter(), s = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (s = e(s), s && (s = s.selection())), n == null ? i.remove() : n(i), r && s ? r.merge(s).order() : s;
}
function _e(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, s = n.length, i = r.length, o = Math.min(s, i), l = new Array(s), c = 0; c < o; ++c)
    for (var a = n[c], h = r[c], p = a.length, x = l[c] = new Array(p), b, S = 0; S < p; ++S)
      (b = a[S] || h[S]) && (x[S] = b);
  for (; c < s; ++c)
    l[c] = n[c];
  return new T(l, this._parents);
}
function we() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], s = r.length - 1, i = r[s], o; --s >= 0; )
      (o = r[s]) && (i && o.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(o, i), i = o);
  return this;
}
function xe(t) {
  t || (t = ve);
  function e(p, x) {
    return p && x ? t(p.__data__, x.__data__) : !p - !x;
  }
  for (var n = this._groups, r = n.length, s = new Array(r), i = 0; i < r; ++i) {
    for (var o = n[i], l = o.length, c = s[i] = new Array(l), a, h = 0; h < l; ++h)
      (a = o[h]) && (c[h] = a);
    c.sort(e);
  }
  return new T(s, this._parents).order();
}
function ve(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ae() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function be() {
  return Array.from(this);
}
function $e() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], s = 0, i = r.length; s < i; ++s) {
      var o = r[s];
      if (o) return o;
    }
  return null;
}
function ke() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Se() {
  return !this.node();
}
function Me(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var s = e[n], i = 0, o = s.length, l; i < o; ++i)
      (l = s[i]) && t.call(l, l.__data__, i, s);
  return this;
}
function Ee(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ce(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fe(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Ne(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function De(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Be(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Te(t, e) {
  var n = pt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ce : Ee : typeof e == "function" ? n.local ? Be : De : n.local ? Ne : Fe)(n, e));
}
function xt(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ye(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Pe(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Re(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Oe(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ye : typeof e == "function" ? Re : Pe)(t, e, n ?? "")) : He(this.node(), t);
}
function He(t, e) {
  return t.style.getPropertyValue(e) || xt(t).getComputedStyle(t, null).getPropertyValue(e);
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
function ze(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Le(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Ve : typeof e == "function" ? ze : qe)(t, e)) : this.node()[t];
}
function vt(t) {
  return t.trim().split(/^|\s+/);
}
function rt(t) {
  return t.classList || new At(t);
}
function At(t) {
  this._node = t, this._names = vt(t.getAttribute("class") || "");
}
At.prototype = {
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
function bt(t, e) {
  for (var n = rt(t), r = -1, s = e.length; ++r < s; ) n.add(e[r]);
}
function $t(t, e) {
  for (var n = rt(t), r = -1, s = e.length; ++r < s; ) n.remove(e[r]);
}
function Ie(t) {
  return function() {
    bt(this, t);
  };
}
function We(t) {
  return function() {
    $t(this, t);
  };
}
function Xe(t, e) {
  return function() {
    (e.apply(this, arguments) ? bt : $t)(this, t);
  };
}
function Ue(t, e) {
  var n = vt(t + "");
  if (arguments.length < 2) {
    for (var r = rt(this.node()), s = -1, i = n.length; ++s < i; ) if (!r.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Xe : e ? Ie : We)(n, e));
}
function Ze() {
  this.textContent = "";
}
function Ge(t) {
  return function() {
    this.textContent = t;
  };
}
function Ke(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Je(t) {
  return arguments.length ? this.each(t == null ? Ze : (typeof t == "function" ? Ke : Ge)(t)) : this.node().textContent;
}
function Qe() {
  this.innerHTML = "";
}
function je(t) {
  return function() {
    this.innerHTML = t;
  };
}
function tn(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function en(t) {
  return arguments.length ? this.each(t == null ? Qe : (typeof t == "function" ? tn : je)(t)) : this.node().innerHTML;
}
function nn() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rn() {
  return this.each(nn);
}
function sn() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function on() {
  return this.each(sn);
}
function an(t) {
  var e = typeof t == "function" ? t : mt(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ln() {
  return null;
}
function cn(t, e) {
  var n = typeof t == "function" ? t : mt(t), r = e == null ? ln : typeof e == "function" ? e : gt(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function un() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function hn() {
  return this.each(un);
}
function fn() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function dn() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function pn(t) {
  return this.select(t ? dn : fn);
}
function mn(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function gn(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function yn(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function _n(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, s = e.length, i; n < s; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function wn(t, e, n) {
  return function() {
    var r = this.__on, s, i = gn(e);
    if (r) {
      for (var o = 0, l = r.length; o < l; ++o)
        if ((s = r[o]).type === t.type && s.name === t.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = i, s.options = n), s.value = e;
          return;
        }
    }
    this.addEventListener(t.type, i, n), s = { type: t.type, name: t.name, value: e, listener: i, options: n }, r ? r.push(s) : this.__on = [s];
  };
}
function xn(t, e, n) {
  var r = yn(t + ""), s, i = r.length, o;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var c = 0, a = l.length, h; c < a; ++c)
        for (s = 0, h = l[c]; s < i; ++s)
          if ((o = r[s]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (l = e ? wn : _n, s = 0; s < i; ++s) this.each(l(r[s], e, n));
  return this;
}
function kt(t, e, n) {
  var r = xt(t), s = r.CustomEvent;
  typeof s == "function" ? s = new s(e, n) : (s = r.document.createEvent("Event"), n ? (s.initEvent(e, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(e, !1, !1)), t.dispatchEvent(s);
}
function vn(t, e) {
  return function() {
    return kt(this, t, e);
  };
}
function An(t, e) {
  return function() {
    return kt(this, t, e.apply(this, arguments));
  };
}
function bn(t, e) {
  return this.each((typeof e == "function" ? An : vn)(t, e));
}
function* $n() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], s = 0, i = r.length, o; s < i; ++s)
      (o = r[s]) && (yield o);
}
var kn = [null];
function T(t, e) {
  this._groups = t, this._parents = e;
}
function Sn() {
  return this;
}
T.prototype = {
  constructor: T,
  select: Zt,
  selectAll: Qt,
  selectChild: re,
  selectChildren: ae,
  filter: le,
  data: pe,
  enter: ce,
  exit: ge,
  join: ye,
  merge: _e,
  selection: Sn,
  order: we,
  sort: xe,
  call: Ae,
  nodes: be,
  node: $e,
  size: ke,
  empty: Se,
  each: Me,
  attr: Te,
  style: Oe,
  property: Le,
  classed: Ue,
  text: Je,
  html: en,
  raise: rn,
  lower: on,
  append: an,
  insert: cn,
  remove: hn,
  clone: pn,
  datum: mn,
  on: xn,
  dispatch: bn,
  [Symbol.iterator]: $n
};
function ot(t) {
  return typeof t == "string" ? new T([document.querySelectorAll(t)], [document.documentElement]) : new T([yt(t)], kn);
}
const Mn = [
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
function En(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function Cn(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function Fn(t) {
  return Cn(t) > 165;
}
function Nn(t) {
  return Fn(d.color(t)) ? "black" : "white";
}
function at(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${r}`;
}
function I(t, e) {
  return "translate(" + t + "," + e + ")";
}
function Dn() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function G(t, e, n) {
  const s = d.select(t).attr("class");
  let i = !1;
  e.selectAll("g.row").each(function(F) {
    const w = d.select(this).attr("class");
    if (w == s)
      i = !0;
    else if (i) {
      let m = this.getAttribute("transform"), f = parseFloat(m.split("(")[1].split(",")[0].trim()), u = parseFloat(m.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${f},${u + n})`);
      var y = w.split(" ")[1];
      document.querySelectorAll(`g.task.${y} rect`).forEach(function(v) {
        v.setAttribute("y", parseFloat(v.getAttribute("y")) + n);
      }), document.querySelectorAll(`g.task.${y} text`).forEach(function(v) {
        v.setAttribute("y", parseFloat(v.getAttribute("y")) + n);
      });
    }
  });
  const o = document.querySelector('path[stroke-width="1.75"]');
  let c = o.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), a = parseFloat(c[1]), h = parseFloat(c[2]), x = parseFloat(c[3]) + n;
  o.setAttribute("d", `M${a},${h}V${x}`);
  const b = d.select("g.x.axis.bottom-axis");
  let S = b.attr("transform"), C = parseFloat(S.split("(")[1].split(",")[0].trim()), _ = parseFloat(S.split(",")[1].split(")")[0].trim()) + n;
  b.attr("transform", `translate(${C}, ${_})`);
}
function St(t, e) {
  e.forEach(function(r) {
    document.querySelectorAll(`g.row.${r}`).forEach(function(i) {
      i.style.display = "block";
    });
  });
  const n = d.select(t).attr("class").split(" ")[1];
  d.selectAll(`g.task.${n}`).each(function(r) {
    var s = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (s == n.replace(/--/g, ""))
      d.select(this).style("display", "none");
    else if (s != n.replace(/--/g, "")) {
      d.select(this).style("display", "block");
      var i = (e.indexOf(s) + 1) * 38;
      let o = d.select(this), l = o.attr("transform"), c = parseFloat(l.split("(")[1].split(",")[0].trim()), a = parseFloat(l.split(",")[1].split(")")[0].trim()), h = a + i;
      o.attr("transform", `translate(${c}, ${a})`).transition().duration(1e3).attr("transform", `translate(${c}, ${h})`).on("start", () => {
        ot(`g.task.${s}`).style("display", "none");
      }).on("end", () => {
        o.style("display", "none"), o.attr("transform", `translate(${c}, ${a})`), ot(`g.task.${s}`).style("display", "block");
      });
    }
  });
}
function Mt(t, e) {
  return new Promise((n) => {
    const r = d.select(t).attr("class").split(" ")[1];
    d.selectAll(`g.task:not(.${r})`).each(function(s) {
      var i = s[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(i)) {
        d.select(this).style("display", "block");
        var o = (e.indexOf(i) + 1) * 38;
        let l = d.select(this), c = l.attr("transform"), a = parseFloat(c.split("(")[1].split(",")[0].trim()), h = parseFloat(c.split(",")[1].split(")")[0].trim()), p = h - o;
        l.transition().duration(1e3).attr("transform", `translate(${a}, ${p})`).on("end", () => {
          d.selectAll(`g.${r}`).style("display", "block"), l.style("display", "none"), l.attr("transform", `translate(${a}, ${h})`), e.forEach(function(x) {
            document.querySelectorAll(`.${x}`).forEach(function(S) {
              S.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function K(t, e) {
  const r = d.select(t).attr("class"), s = [];
  let i = !1, o = !1;
  return e.selectAll("g.row").each(function(l) {
    const a = d.select(this).attr("class");
    a == r ? i = !0 : i && a.split(" ")[2] == "timelineheader" ? o = !0 : i && !o && s.push(a.split(" ")[1]);
  }), s;
}
function Bn() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let e = [];
  d.selectAll("g.row.timelineheader text").each(function() {
    if (d.select(this).text() === "-") {
      const r = this.parentNode, s = K(r, d.select(r.parentNode)), i = s.length * 38;
      let o = Mt(r, s).then(() => {
        G(r, d.select(r.parentNode), -i), d.select(this).text("+").style("font-size", "20px");
      });
      e.push(o);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = Bn;
function Tn() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let e = [];
  d.selectAll("g.row.timelineheader text").each(function() {
    if (d.select(this).text() === "+") {
      const r = this.parentNode, s = K(r, d.select(r.parentNode)), i = s.length * 38;
      let o = new Promise((l) => {
        St(r, s), G(r, d.select(r.parentNode), i), l();
      }).then(() => {
        d.select(this).text("-").style("font-size", "30px");
      });
      e.push(o);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = Tn;
function Rn(t) {
  let e = Mn, n = 5, r = 2, s = !1, i = !1, o, l, c = 0, a = U(0), h = U(1), p = U(2), x = U(3);
  console.log(t);
  function b(g, w) {
    const y = g.select("text"), m = g.select("rect"), f = m.attr("width") - 2 * n, u = h(w);
    y.text(u);
    let A = y.node().getComputedTextLength();
    if (A > f) {
      const M = f < 0 ? 0 : f / A, v = Math.floor(u.length * M);
      y.text(v > 2 ? u.slice(0, v - 2) + "…" : "");
    }
  }
  function S(g, w, y) {
    const m = g.select("text").node(), f = m.getBBox(), u = y.scale().domain().indexOf(a(w)), A = y.colorscale()(u), M = g.selectAll("rect.bckg").data([w]).join("rect").attr("class", "bckg").attr("fill", A).attr("x", f.x - n + r).attr("y", f.y - 2).attr("width", f.width + n - r).attr("height", f.height);
    g.node().insertBefore(M.node(), m);
  }
  function C(g, w) {
    g.each(function(y, m) {
      const f = d.select(this.parentNode);
      x(y) - p(y) ? b(f, y) : S(f, y, w);
    });
  }
  function N(g) {
    return function(w, y) {
      d.active(this).tween("text", function() {
        return function(m) {
          C(d.select(this), g);
        };
      });
    };
  }
  function _(g) {
    const w = g.datum(), y = new Set(d.map(w, a)), m = new lt(F), f = d.scaleOrdinal(e);
    o = o || [d.min(w, p), d.max(w, x)], i && (o = d.extent(o.concat(/* @__PURE__ */ new Date()))), g.each(function(u) {
      const A = l || this.getBoundingClientRect().width, M = y.size * (En(this) + 4 * n), v = d.scaleBand().domain(y).range([0, M]), k = d.scaleTime().domain(o), E = (s ? Ht : Ot)(v).width(A), D = d.select(this).selectAll("svg").data([1]).join("svg");
      D.attr("class", "timeline").attr("width", A).attr("height", M + 40);
      const O = D.append("g").attr("transform", "translate(0,20)"), B = O.append("g").attr("class", "y axis").call(E);
      let Et = document.querySelector('path[stroke-width="1.75"]').getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), J = parseFloat(Et[1]);
      B.selectAll("text").on("mouseover", function() {
        d.select(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        d.select(this).style("text-decoration", "none");
      }).attr("text-anchor", function($) {
        return $.startsWith(" •") ? "middle" : "end";
      }).attr("x", function($) {
        return $.startsWith(" •") ? J / 2 : J - 0.5;
      }).style("cursor", "pointer").style("font-weight", function($) {
        return $.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function($, Y) {
        const P = Y.replace(/ • /g, "").replace(" ", "%20"), R = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${P}%22`;
        window.open(R, "_blank");
      }), B.selectAll("g.row").each(function($) {
        const Y = d.select(this).datum();
        d.select(this).classed(d.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), Y.startsWith(" •") && d.select(this).classed("timelineheader", !0).append("text").attr("x", J - 10).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), B.selectAll("g.row.timelineheader text").on("click", function($, Y) {
        const z = d.select(this).text();
        if (z === "+") {
          let P = K(this.parentNode, B), R = P.length * 38;
          St(this.parentNode, P), G(this.parentNode, B, R), d.select(this).text() === "+" ? d.select(this).text("-").style("font-size", "30px") : d.select(this).text("+");
        } else if (z === "-") {
          let P = K(this.parentNode, B), R = P.length * 38;
          Mt(this.parentNode, P).then(() => {
            G(this.parentNode, B, -R);
          }), d.select(this).text() === "-" ? d.select(this).text("+").style("font-size", "20px") : d.select(this).text("-");
        } else {
          const R = Y.replace(/ • /g, "").replace(" ", "%20"), L = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${R}%22`;
          window.open(L, "_blank");
        }
      });
      let H = E.range();
      k.range([H[0] + n, H[1] - n]).clamp(!0);
      const Q = d.axisBottom(k), q = O.append("g").attr("class", "x axis").attr("transform", I(0, 0)).call(Q);
      q.selectAll(".tick text").attr("dy", "-1.5em"), q.selectAll(".tick line").attr("y2", "-5");
      const Ct = d.axisBottom(k);
      D.append("g").attr("class", "x axis bottom-axis").attr("transform", I(0, M + 20)).call(Ct).selectAll(".tick line").attr("y2", "5"), B.on("offset", () => {
        H = E.range(), k.range([H[0] + n, H[1] - n]).clamp(!0), Q.ticks(Math.min((H[1] - H[0]) / 70, 10)), q.call(Q), V.attr("transform", ($) => I(k(p($)), v(a($)))).selectAll("rect").attr("width", ($) => k(x($)) - k(p($)) || r).call(($) => C($, E)), B.call(E.draw_ticks, k.ticks().map(k));
      }), q.select(".domain").remove(), q.selectAll(".tick line").attr("stroke", "#AAA");
      const Ft = k.ticks().map(k);
      B.call(E.draw_ticks, Ft);
      let V = O.selectAll("g.task").data(u);
      V.exit().remove();
      const j = V.enter().append("g").classed("task", !0);
      j.each(function($) {
        const Y = a($).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        d.select(this).classed(Y, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", v.bandwidth() - 2 * n).on("mouseover", m.show).on("mouseout", m.hide).on("click", function($, Y) {
        var z = String(Y[1]), P = z.replace(" ", "%20"), R = Y[2], L = at(R), Nt = Y[3], Dt = at(Nt), Bt = "https://www.primarysourcecoop.org/publications/" + t + "/search#q%3D%2Bsubject%3A%22" + P + "%22%20%2Bdate_when%3A%5B" + L + "%20TO%20" + Dt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(Bt, "_blank");
      }).style("fill", tt(h, f)), j.append("text").attr("text-anchor", "start").attr("fill", ($) => x($) - p($) ? tt(h, f, Nn)($) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", v.bandwidth() / 2).attr("dy", "0.32em").text(h), V = V.merge(j), V.attr("transform", ($) => I(H[0], v(a($)))).selectAll("rect").attr("width", 0), V.transition().duration(c).attr("transform", ($) => I(k(p($)), v(a($)))).selectAll("rect").attr("width", ($) => k(x($)) - k(p($)) || r).on("start", N(E)), i && O.append("path").attr("stroke", "red").attr("d", "M" + k(/* @__PURE__ */ new Date()) + ",0.5V" + M);
    }), Dn();
  }
  return _.dates = function(g) {
    return arguments.length ? (o = g, _) : o;
  }, _.width = function(g) {
    return arguments.length ? (l = g, _) : l;
  }, _.today = function(g) {
    return arguments.length ? (i = g, _) : i;
  }, _.colors = function(g) {
    return arguments.length ? (e = g, _) : e;
  }, _.padding = function(g) {
    return arguments.length ? (n = g, _) : n;
  }, _.milestone_width = function(g) {
    return arguments.length ? (r = g, _) : r;
  }, _.reversed = function(g) {
    return arguments.length ? (s = g, _) : s;
  }, _.duration = function(g) {
    return arguments.length ? (c = g, _) : c;
  }, _;
  function F(g, w) {
    const y = tt(d.isoParse, d.timeFormat("%Y-%m-%d")), m = `<b>${h(w)}</b><hr style="margin: 2px 0 2px 0">${y(p(w))}`, f = x(w) - p(w) ? ` - ${y(x(w))}<br>${It(p(w), x(w))}` : "";
    return m + f;
  }
}
export {
  It as durationFormat,
  Rn as timeline,
  Ot as timelineAxisLeft,
  Ht as timelineAxisRight,
  lt as tooltip
};
