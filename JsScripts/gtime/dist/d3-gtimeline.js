import * as d from "d3";
export * from "d3";
import st from "dayjs";
const Pt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function ut(t) {
  d.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Pt);
  const e = d.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Rt(t) {
  return d.max(t.nodes().map((e) => e.getComputedTextLength()));
}
function Ot(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const X = 1, Ht = 2;
function ht(t, e) {
  let n = ["#FFF", "#FFF"], r = d.scaleOrdinal(n), s = 5, i, o = "#AAA", a = 40, c = 3e3, l;
  function h(p) {
    let x = e.domain(), b = ut((y) => y), S = d.scaleOrdinal(n), E = d.scaleOrdinal(n.reverse()), N = Ot(a), _ = p.selectAll(".row").data(x, e).order(), F = _.enter().append("g").attr("class", "row"), g = _.exit(), w = _.select("text");
    _ = _.merge(F).attr("transform", (y) => "translate(0," + e(y) + ")"), g.remove(), F.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", o).attr("stroke-width", 0.75).attr("fill", S), F.append("path").attr("stroke", E), w = w.merge(
      F.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(y, m) {
        d.select(this).text() != m && b.show(m);
      }).on("mouseout", b.hide)
    ).text(N), l === void 0 && (l = Rt(w) + 2 * s, l = t === X ? c - l : l), i = t === X ? [0, l] : [l, c], w.attr("text-anchor", t === X ? "start" : "end").attr("dx", t === X ? s : -s).attr("x", l), p.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", o).attr("stroke-width", 1.75).attr("d", "M" + (l + 0.5) + ",0.5V" + e.range()[1]);
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
function zt(t) {
  return ht(Ht, t);
}
function Vt(t) {
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
    }, S = function(m, f, u) {
      return new w(m, u, f.$l);
    }, E = function(m) {
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
        if (this.$d = {}, this.$l = M, u === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), A) return S(u * x[E(A)], this);
        if (typeof u == "number") return this.$ms = u, this.parseFromMilliseconds(), this;
        if (typeof u == "object") return Object.keys(u).forEach(function(D) {
          v.$d[E(D)] = u[D];
        }), this.calMilliseconds(), this;
        if (typeof u == "string") {
          var k = u.match(p);
          if (k) {
            var C = k.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = C[0], this.$d.months = C[1], this.$d.weeks = C[2], this.$d.days = C[3], this.$d.hours = C[4], this.$d.minutes = C[5], this.$d.seconds = C[6], this.calMilliseconds(), this;
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
        this.$d.years = _(u / l), u %= l, this.$d.months = _(u / h), u %= h, this.$d.days = _(u / a), u %= a, this.$d.hours = _(u / o), u %= o, this.$d.minutes = _(u / i), u %= i, this.$d.seconds = _(u / s), u %= s, this.$d.milliseconds = u;
      }, f.toISOString = function() {
        var u = g(this.$d.years, "Y"), A = g(this.$d.months, "M"), M = +this.$d.days || 0;
        this.$d.weeks && (M += 7 * this.$d.weeks);
        var v = g(M, "D"), k = g(this.$d.hours, "H"), C = g(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3, D = Math.round(1e3 * D) / 1e3);
        var O = g(D, "S"), B = u.negative || A.negative || v.negative || k.negative || C.negative || O.negative, ot = k.format || C.format || O.format ? "T" : "", U = (B ? "-" : "") + "P" + u.format + A.format + v.format + ot + k.format + C.format + O.format;
        return U === "P" || U === "-P" ? "P0D" : U;
      }, f.toJSON = function() {
        return this.toISOString();
      }, f.format = function(u) {
        var A = u || "YYYY-MM-DDTHH:mm:ss", M = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return A.replace(c, function(v, k) {
          return k || String(M[v]);
        });
      }, f.as = function(u) {
        return this.$ms / x[E(u)];
      }, f.get = function(u) {
        var A = this.$ms, M = E(u);
        return M === "milliseconds" ? A %= 1e3 : A = M === "weeks" ? _(A / x[M]) : this.$d[M], A || 0;
      }, f.add = function(u, A, M) {
        var v;
        return v = A ? u * x[E(A)] : b(u) ? u.$ms : S(u, this).$ms, S(this.$ms + v * (M ? -1 : 1), this);
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
        var C = u.locale();
        return S(v, { $l: C }, k);
      }, u.isDuration = b;
      var A = f.prototype.add, M = f.prototype.subtract;
      f.prototype.add = function(v, k) {
        return b(v) ? y(this, v, 1) : A.bind(this)(v, k);
      }, f.prototype.subtract = function(v, k) {
        return b(v) ? y(this, v, -1) : M.bind(this)(v, k);
      };
    };
  });
})(pt);
var qt = pt.exports;
const Lt = /* @__PURE__ */ dt(qt);
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
        for (var S, E, N, _ = p.$locale().relativeTime || o, F = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], g = F.length, w = 0; w < g; w += 1) {
          var y = F[w];
          y.d && (S = x ? s(l).diff(p, y.d, !0) : p.diff(l, y.d, !0));
          var m = (n.rounding || Math.round)(Math.abs(S));
          if (N = S > 0, m <= y.r || !y.r) {
            m <= 1 && w > 0 && (y = F[w - 1]);
            var f = _[y.l];
            b && (m = b("" + m)), E = typeof f == "string" ? f.replace("%d", m) : f(m, h, y.l, N);
            break;
          }
        }
        if (h) return E;
        var u = N ? _.future : _.past;
        return typeof u == "function" ? u(E) : u.replace("%s", E);
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
var It = mt.exports;
const Wt = /* @__PURE__ */ dt(It);
st.extend(Lt);
st.extend(Wt);
function Xt(t, e) {
  return st.duration(e - t).humanize();
}
function nt() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return t.reduce((n, r) => r(n), e);
  };
}
function Z(t) {
  return function(e) {
    return t === void 0 ? e : e[t];
  };
}
var rt = "http://www.w3.org/1999/xhtml";
const lt = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: rt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function gt(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), lt.hasOwnProperty(e) ? { space: lt[e], local: t } : t;
}
function Ut(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === rt && e.documentElement.namespaceURI === rt ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Zt(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function yt(t) {
  var e = gt(t);
  return (e.local ? Zt : Ut)(e);
}
function Gt() {
}
function _t(t) {
  return t == null ? Gt : function() {
    return this.querySelector(t);
  };
}
function Kt(t) {
  typeof t != "function" && (t = _t(t));
  for (var e = this._groups, n = e.length, r = new Array(n), s = 0; s < n; ++s)
    for (var i = e[s], o = i.length, a = r[s] = new Array(o), c, l, h = 0; h < o; ++h)
      (c = i[h]) && (l = t.call(c, c.__data__, h, i)) && ("__data__" in c && (l.__data__ = c.__data__), a[h] = l);
  return new T(r, this._parents);
}
function wt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Jt() {
  return [];
}
function Qt(t) {
  return t == null ? Jt : function() {
    return this.querySelectorAll(t);
  };
}
function jt(t) {
  return function() {
    return wt(t.apply(this, arguments));
  };
}
function te(t) {
  typeof t == "function" ? t = jt(t) : t = Qt(t);
  for (var e = this._groups, n = e.length, r = [], s = [], i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, c, l = 0; l < a; ++l)
      (c = o[l]) && (r.push(t.call(c, c.__data__, l, o)), s.push(c));
  return new T(r, s);
}
function ee(t) {
  return function() {
    return this.matches(t);
  };
}
function xt(t) {
  return function(e) {
    return e.matches(t);
  };
}
var ne = Array.prototype.find;
function re(t) {
  return function() {
    return ne.call(this.children, t);
  };
}
function se() {
  return this.firstElementChild;
}
function ie(t) {
  return this.select(t == null ? se : re(typeof t == "function" ? t : xt(t)));
}
var oe = Array.prototype.filter;
function le() {
  return Array.from(this.children);
}
function ae(t) {
  return function() {
    return oe.call(this.children, t);
  };
}
function ce(t) {
  return this.selectAll(t == null ? le : ae(typeof t == "function" ? t : xt(t)));
}
function ue(t) {
  typeof t != "function" && (t = ee(t));
  for (var e = this._groups, n = e.length, r = new Array(n), s = 0; s < n; ++s)
    for (var i = e[s], o = i.length, a = r[s] = [], c, l = 0; l < o; ++l)
      (c = i[l]) && t.call(c, c.__data__, l, i) && a.push(c);
  return new T(r, this._parents);
}
function vt(t) {
  return new Array(t.length);
}
function he() {
  return new T(this._enter || this._groups.map(vt), this._parents);
}
function K(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
K.prototype = {
  constructor: K,
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
function fe(t) {
  return function() {
    return t;
  };
}
function de(t, e, n, r, s, i) {
  for (var o = 0, a, c = e.length, l = i.length; o < l; ++o)
    (a = e[o]) ? (a.__data__ = i[o], r[o] = a) : n[o] = new K(t, i[o]);
  for (; o < c; ++o)
    (a = e[o]) && (s[o] = a);
}
function pe(t, e, n, r, s, i, o) {
  var a, c, l = /* @__PURE__ */ new Map(), h = e.length, p = i.length, x = new Array(h), b;
  for (a = 0; a < h; ++a)
    (c = e[a]) && (x[a] = b = o.call(c, c.__data__, a, e) + "", l.has(b) ? s[a] = c : l.set(b, c));
  for (a = 0; a < p; ++a)
    b = o.call(t, i[a], a, i) + "", (c = l.get(b)) ? (r[a] = c, c.__data__ = i[a], l.delete(b)) : n[a] = new K(t, i[a]);
  for (a = 0; a < h; ++a)
    (c = e[a]) && l.get(x[a]) === c && (s[a] = c);
}
function me(t) {
  return t.__data__;
}
function ge(t, e) {
  if (!arguments.length) return Array.from(this, me);
  var n = e ? pe : de, r = this._parents, s = this._groups;
  typeof t != "function" && (t = fe(t));
  for (var i = s.length, o = new Array(i), a = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
    var h = r[l], p = s[l], x = p.length, b = ye(t.call(h, h && h.__data__, l, r)), S = b.length, E = a[l] = new Array(S), N = o[l] = new Array(S), _ = c[l] = new Array(x);
    n(h, p, E, N, _, b, e);
    for (var F = 0, g = 0, w, y; F < S; ++F)
      if (w = E[F]) {
        for (F >= g && (g = F + 1); !(y = N[g]) && ++g < S; ) ;
        w._next = y || null;
      }
  }
  return o = new T(o, r), o._enter = a, o._exit = c, o;
}
function ye(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function _e() {
  return new T(this._exit || this._groups.map(vt), this._parents);
}
function we(t, e, n) {
  var r = this.enter(), s = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (s = e(s), s && (s = s.selection())), n == null ? i.remove() : n(i), r && s ? r.merge(s).order() : s;
}
function xe(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, s = n.length, i = r.length, o = Math.min(s, i), a = new Array(s), c = 0; c < o; ++c)
    for (var l = n[c], h = r[c], p = l.length, x = a[c] = new Array(p), b, S = 0; S < p; ++S)
      (b = l[S] || h[S]) && (x[S] = b);
  for (; c < s; ++c)
    a[c] = n[c];
  return new T(a, this._parents);
}
function ve() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], s = r.length - 1, i = r[s], o; --s >= 0; )
      (o = r[s]) && (i && o.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(o, i), i = o);
  return this;
}
function Ae(t) {
  t || (t = be);
  function e(p, x) {
    return p && x ? t(p.__data__, x.__data__) : !p - !x;
  }
  for (var n = this._groups, r = n.length, s = new Array(r), i = 0; i < r; ++i) {
    for (var o = n[i], a = o.length, c = s[i] = new Array(a), l, h = 0; h < a; ++h)
      (l = o[h]) && (c[h] = l);
    c.sort(e);
  }
  return new T(s, this._parents).order();
}
function be(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function $e() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ke() {
  return Array.from(this);
}
function Se() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], s = 0, i = r.length; s < i; ++s) {
      var o = r[s];
      if (o) return o;
    }
  return null;
}
function Me() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Ce() {
  return !this.node();
}
function Ee(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var s = e[n], i = 0, o = s.length, a; i < o; ++i)
      (a = s[i]) && t.call(a, a.__data__, i, s);
  return this;
}
function Fe(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ne(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function De(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Be(t, e) {
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
function Pe(t, e) {
  var n = gt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ne : Fe : typeof e == "function" ? n.local ? Ye : Te : n.local ? Be : De)(n, e));
}
function At(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Re(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Oe(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function He(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function ze(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Re : typeof e == "function" ? He : Oe)(t, e, n ?? "")) : Ve(this.node(), t);
}
function Ve(t, e) {
  return t.style.getPropertyValue(e) || At(t).getComputedStyle(t, null).getPropertyValue(e);
}
function qe(t) {
  return function() {
    delete this[t];
  };
}
function Le(t, e) {
  return function() {
    this[t] = e;
  };
}
function Ie(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function We(t, e) {
  return arguments.length > 1 ? this.each((e == null ? qe : typeof e == "function" ? Ie : Le)(t, e)) : this.node()[t];
}
function bt(t) {
  return t.trim().split(/^|\s+/);
}
function it(t) {
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
  for (var n = it(t), r = -1, s = e.length; ++r < s; ) n.add(e[r]);
}
function St(t, e) {
  for (var n = it(t), r = -1, s = e.length; ++r < s; ) n.remove(e[r]);
}
function Xe(t) {
  return function() {
    kt(this, t);
  };
}
function Ue(t) {
  return function() {
    St(this, t);
  };
}
function Ze(t, e) {
  return function() {
    (e.apply(this, arguments) ? kt : St)(this, t);
  };
}
function Ge(t, e) {
  var n = bt(t + "");
  if (arguments.length < 2) {
    for (var r = it(this.node()), s = -1, i = n.length; ++s < i; ) if (!r.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ze : e ? Xe : Ue)(n, e));
}
function Ke() {
  this.textContent = "";
}
function Je(t) {
  return function() {
    this.textContent = t;
  };
}
function Qe(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function je(t) {
  return arguments.length ? this.each(t == null ? Ke : (typeof t == "function" ? Qe : Je)(t)) : this.node().textContent;
}
function tn() {
  this.innerHTML = "";
}
function en(t) {
  return function() {
    this.innerHTML = t;
  };
}
function nn(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function rn(t) {
  return arguments.length ? this.each(t == null ? tn : (typeof t == "function" ? nn : en)(t)) : this.node().innerHTML;
}
function sn() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function on() {
  return this.each(sn);
}
function ln() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function an() {
  return this.each(ln);
}
function cn(t) {
  var e = typeof t == "function" ? t : yt(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function un() {
  return null;
}
function hn(t, e) {
  var n = typeof t == "function" ? t : yt(t), r = e == null ? un : typeof e == "function" ? e : _t(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function fn() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function dn() {
  return this.each(fn);
}
function pn() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function mn() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function gn(t) {
  return this.select(t ? mn : pn);
}
function yn(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function _n(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function wn(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function xn(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, s = e.length, i; n < s; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function vn(t, e, n) {
  return function() {
    var r = this.__on, s, i = _n(e);
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
function An(t, e, n) {
  var r = wn(t + ""), s, i = r.length, o;
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
  for (a = e ? vn : xn, s = 0; s < i; ++s) this.each(a(r[s], e, n));
  return this;
}
function Mt(t, e, n) {
  var r = At(t), s = r.CustomEvent;
  typeof s == "function" ? s = new s(e, n) : (s = r.document.createEvent("Event"), n ? (s.initEvent(e, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(e, !1, !1)), t.dispatchEvent(s);
}
function bn(t, e) {
  return function() {
    return Mt(this, t, e);
  };
}
function $n(t, e) {
  return function() {
    return Mt(this, t, e.apply(this, arguments));
  };
}
function kn(t, e) {
  return this.each((typeof e == "function" ? $n : bn)(t, e));
}
function* Sn() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], s = 0, i = r.length, o; s < i; ++s)
      (o = r[s]) && (yield o);
}
var Mn = [null];
function T(t, e) {
  this._groups = t, this._parents = e;
}
function Cn() {
  return this;
}
T.prototype = {
  constructor: T,
  select: Kt,
  selectAll: te,
  selectChild: ie,
  selectChildren: ce,
  filter: ue,
  data: ge,
  enter: he,
  exit: _e,
  join: we,
  merge: xe,
  selection: Cn,
  order: ve,
  sort: Ae,
  call: $e,
  nodes: ke,
  node: Se,
  size: Me,
  empty: Ce,
  each: Ee,
  attr: Pe,
  style: ze,
  property: We,
  classed: Ge,
  text: je,
  html: rn,
  raise: on,
  lower: an,
  append: cn,
  insert: hn,
  remove: dn,
  clone: gn,
  datum: yn,
  on: An,
  dispatch: kn,
  [Symbol.iterator]: Sn
};
function at(t) {
  return typeof t == "string" ? new T([document.querySelectorAll(t)], [document.documentElement]) : new T([wt(t)], Mn);
}
var G = 0, I = 0;
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
function Fn(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function Nn(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function Dn(t) {
  return Nn(t) > 165;
}
function Bn(t) {
  return Dn(d.color(t)) ? "black" : "white";
}
function ct(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${r}`;
}
function W(t, e) {
  return "translate(" + t + "," + e + ")";
}
function Tn() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function J(t, e, n) {
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
  let c = o.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), l = parseFloat(c[1]), h = parseFloat(c[2]), x = parseFloat(c[3]) + n;
  o.setAttribute("d", `M${l},${h}V${x}`);
  const b = d.select("g.x.axis.bottom-axis");
  let S = b.attr("transform"), E = parseFloat(S.split("(")[1].split(",")[0].trim()), _ = parseFloat(S.split(",")[1].split(")")[0].trim()) + n;
  b.attr("transform", `translate(${E}, ${_})`);
}
function Ct(t, e) {
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
      let o = d.select(this), a = o.attr("transform"), c = parseFloat(a.split("(")[1].split(",")[0].trim()), l = parseFloat(a.split(",")[1].split(")")[0].trim()), h = l + i;
      o.attr("transform", `translate(${c}, ${l})`).transition().duration(1e3).attr("transform", `translate(${c}, ${h})`).on("start", () => {
        at(`g.task.${s}`).style("display", "none");
      }).on("end", () => {
        o.style("display", "none"), o.attr("transform", `translate(${c}, ${l})`), at(`g.task.${s}`).style("display", "block");
      });
    }
  });
}
function Et(t, e) {
  return new Promise((n) => {
    const r = d.select(t).attr("class").split(" ")[1];
    d.selectAll(`g.task:not(.${r})`).each(function(s) {
      var i = s[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(i)) {
        d.select(this).style("display", "block");
        var o = (e.indexOf(i) + 1) * 38;
        let a = d.select(this), c = a.attr("transform"), l = parseFloat(c.split("(")[1].split(",")[0].trim()), h = parseFloat(c.split(",")[1].split(")")[0].trim()), p = h - o;
        a.transition().duration(1e3).attr("transform", `translate(${l}, ${p})`).on("end", () => {
          d.selectAll(`g.${r}`).style("display", "block"), a.style("display", "none"), a.attr("transform", `translate(${l}, ${h})`), e.forEach(function(x) {
            document.querySelectorAll(`.${x}`).forEach(function(S) {
              S.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function Q(t, e) {
  const r = d.select(t).attr("class"), s = [];
  let i = !1, o = !1;
  return e.selectAll("g.row").each(function(a) {
    const l = d.select(this).attr("class");
    l == r ? i = !0 : i && l.split(" ")[2] == "timelineheader" ? o = !0 : i && !o && s.push(l.split(" ")[1]);
  }), s;
}
function Yn() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let e = [];
  d.selectAll("g.row.timelineheader text").each(function() {
    if (d.select(this).text() === "-") {
      const r = this.parentNode, s = Q(r, d.select(r.parentNode)), i = s.length * 38;
      let o = Et(r, s).then(() => {
        J(r, d.select(r.parentNode), -i), d.select(this).text("+").style("font-size", "20px");
      });
      e.push(o);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = Yn;
function Pn() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let e = [];
  d.selectAll("g.row.timelineheader text").each(function() {
    if (d.select(this).text() === "+") {
      const r = this.parentNode, s = Q(r, d.select(r.parentNode)), i = s.length * 38;
      let o = new Promise((a) => {
        Ct(r, s), J(r, d.select(r.parentNode), i), a();
      }).then(() => {
        d.select(this).text("-").style("font-size", "30px");
      });
      e.push(o);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = Pn;
function zn(t) {
  let e = En, n = 5, r = 2, s = !1, i = !1, o, a, c = 0, l = Z(0), h = Z(1), p = Z(2), x = Z(3);
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
    const m = g.select("text").node(), f = m.getBBox(), u = y.scale().domain().indexOf(l(w)), A = y.colorscale()(u), M = g.selectAll("rect.bckg").data([w]).join("rect").attr("class", "bckg").attr("fill", A).attr("x", f.x - n + r).attr("y", f.y - 2).attr("width", f.width + n - r).attr("height", f.height);
    g.node().insertBefore(M.node(), m);
  }
  function E(g, w) {
    g.each(function(y, m) {
      const f = d.select(this.parentNode);
      x(y) - p(y) ? b(f, y) : S(f, y, w);
    });
  }
  function N(g) {
    return function(w, y) {
      d.active(this).tween("text", function() {
        return function(m) {
          E(d.select(this), g);
        };
      });
    };
  }
  function _(g) {
    const w = g.datum(), y = new Set(d.map(w, l)), m = new ut(F), f = d.scaleOrdinal(e);
    o = o || [d.min(w, p), d.max(w, x)], i && (o = d.extent(o.concat(/* @__PURE__ */ new Date()))), g.each(function(u) {
      const A = a || this.getBoundingClientRect().width, M = y.size * (Fn(this) + 4 * n), v = d.scaleBand().domain(y).range([0, M]), k = d.scaleTime().domain(o), C = (s ? Vt : zt)(v).width(A), D = d.select(this).selectAll("svg").data([1]).join("svg");
      D.attr("class", "timeline").attr("width", A).attr("height", M + 40);
      const O = D.append("g").attr("transform", "translate(0,20)"), B = O.append("g").attr("class", "y axis").call(C);
      let Ft = document.querySelector('path[stroke-width="1.75"]').getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), j = parseFloat(Ft[1]);
      B.selectAll("text").on("mouseover", function() {
        d.select(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        d.select(this).style("text-decoration", "none");
      }).attr("text-anchor", function($) {
        return $.startsWith(" •") ? "middle" : "end";
      }).attr("x", function($) {
        return $.startsWith(" •") ? j / 2 : j - 0.5;
      }).style("cursor", "pointer").style("font-weight", function($) {
        return $.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function($, Y) {
        const P = Y.replace(/ • /g, "").replace(" ", "%20"), R = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${P}%22`;
        window.open(R, "_blank");
      }), B.selectAll("g.row").each(function($) {
        const Y = d.select(this).datum();
        d.select(this).classed(d.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), Y.startsWith(" •") && d.select(this).classed("timelineheader", !0).append("text").attr("x", j - 10).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), B.selectAll("g.row.timelineheader text").on("click", function($, Y) {
        const q = d.select(this).text();
        if (q === "+") {
          G -= 1, I += 1, console.log("Collapsed: ", G), console.log("Expanded: ", I);
          let P = Q(this.parentNode, B), R = P.length * 38;
          Ct(this.parentNode, P), J(this.parentNode, B, R), d.select(this).text() === "+" ? d.select(this).text("-").style("font-size", "30px") : d.select(this).text("+");
        } else if (q === "-") {
          G += 1, I -= 1, console.log("Collapsed: ", G), console.log("Expanded: ", I);
          let P = Q(this.parentNode, B), R = P.length * 38;
          Et(this.parentNode, P).then(() => {
            J(this.parentNode, B, -R);
          }), d.select(this).text() === "-" ? d.select(this).text("+").style("font-size", "20px") : d.select(this).text("-");
        } else {
          const R = Y.replace(/ • /g, "").replace(" ", "%20"), L = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${R}%22`;
          window.open(L, "_blank");
        }
      }), I = d.selectAll("text").filter(function() {
        return this.textContent.startsWith(" •");
      }).size();
      let H = C.range();
      k.range([H[0] + n, H[1] - n]).clamp(!0);
      const tt = d.axisBottom(k), V = O.append("g").attr("class", "x axis").attr("transform", W(0, 0)).call(tt);
      V.selectAll(".tick text").attr("dy", "-1.5em"), V.selectAll(".tick line").attr("y2", "-5");
      const Nt = d.axisBottom(k);
      D.append("g").attr("class", "x axis bottom-axis").attr("transform", W(0, M + 20)).call(Nt).selectAll(".tick line").attr("y2", "5"), B.on("offset", () => {
        H = C.range(), k.range([H[0] + n, H[1] - n]).clamp(!0), tt.ticks(Math.min((H[1] - H[0]) / 70, 10)), V.call(tt), z.attr("transform", ($) => W(k(p($)), v(l($)))).selectAll("rect").attr("width", ($) => k(x($)) - k(p($)) || r).call(($) => E($, C)), B.call(C.draw_ticks, k.ticks().map(k));
      }), V.select(".domain").remove(), V.selectAll(".tick line").attr("stroke", "#AAA");
      const Dt = k.ticks().map(k);
      B.call(C.draw_ticks, Dt);
      let z = O.selectAll("g.task").data(u);
      z.exit().remove();
      const et = z.enter().append("g").classed("task", !0);
      et.each(function($) {
        const Y = l($).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        d.select(this).classed(Y, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", v.bandwidth() - 2 * n).on("mouseover", m.show).on("mouseout", m.hide).on("click", function($, Y) {
        var q = String(Y[1]), P = q.replace(" ", "%20"), R = Y[2], L = ct(R), Bt = Y[3], Tt = ct(Bt), Yt = "https://www.primarysourcecoop.org/publications/" + t + "/search#q%3D%2Bsubject%3A%22" + P + "%22%20%2Bdate_when%3A%5B" + L + "%20TO%20" + Tt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(Yt, "_blank");
      }).style("fill", nt(h, f)), et.append("text").attr("text-anchor", "start").attr("fill", ($) => x($) - p($) ? nt(h, f, Bn)($) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", v.bandwidth() / 2).attr("dy", "0.32em").text(h), z = z.merge(et), z.attr("transform", ($) => W(H[0], v(l($)))).selectAll("rect").attr("width", 0), z.transition().duration(c).attr("transform", ($) => W(k(p($)), v(l($)))).selectAll("rect").attr("width", ($) => k(x($)) - k(p($)) || r).on("start", N(C)), i && O.append("path").attr("stroke", "red").attr("d", "M" + k(/* @__PURE__ */ new Date()) + ",0.5V" + M);
    }), Tn();
  }
  return _.dates = function(g) {
    return arguments.length ? (o = g, _) : o;
  }, _.width = function(g) {
    return arguments.length ? (a = g, _) : a;
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
    const y = nt(d.isoParse, d.timeFormat("%Y-%m-%d")), m = `<b>${h(w)}</b><hr style="margin: 2px 0 2px 0">${y(p(w))}`, f = x(w) - p(w) ? ` - ${y(x(w))}<br>${Xt(p(w), x(w))}` : "";
    return m + f;
  }
}
export {
  Xt as durationFormat,
  zn as timeline,
  zt as timelineAxisLeft,
  Vt as timelineAxisRight,
  ut as tooltip
};
