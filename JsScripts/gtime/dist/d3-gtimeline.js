import * as f from "d3";
export * from "d3";
import j from "dayjs";
const Et = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function st(t) {
  f.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Et);
  const e = f.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Ft(t) {
  return f.max(t.nodes().map((e) => e.getComputedTextLength()));
}
function Nt(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const W = 1, Dt = 2;
function it(t, e) {
  let n = ["#FFF", "#FFF"], s = f.scaleOrdinal(n), r = 5, i, a = "#AAA", l = 40, c = 3e3, o;
  function u(m) {
    let $ = e.domain(), A = st((x) => x), k = f.scaleOrdinal(n), F = f.scaleOrdinal(n.reverse()), S = Nt(l), C = m.selectAll(".row").data($, e).order(), g = C.enter().append("g").attr("class", "row"), w = C.exit(), _ = C.select("text");
    C = C.merge(g).attr("transform", (x) => "translate(0," + e(x) + ")"), w.remove(), g.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", k), g.append("path").attr("stroke", F), _ = _.merge(
      g.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(x, p) {
        f.select(this).text() != p && A.show(p);
      }).on("mouseout", A.hide)
    ).text(S), o === void 0 && (o = Ft(_) + 2 * r, o = t === W ? c - o : o), i = t === W ? [0, o] : [o, c], _.attr("text-anchor", t === W ? "start" : "end").attr("dx", t === W ? r : -r).attr("x", o), m.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (o + 0.5) + ",0.5V" + e.range()[1]);
  }
  return u.draw_ticks = function(m, $) {
    m.selectAll(".row").select("path").attr("d", $.map((A) => "M" + A + ",1v" + (e.bandwidth() - 1)).join(""));
  }, u.scale = function(m) {
    return arguments.length ? (e = m, u) : e;
  }, u.width = function(m) {
    return arguments.length ? (c = m, u) : c;
  }, u.colors = function(m) {
    return arguments.length ? (n = m, u) : n;
  }, u.padding = function(m) {
    return arguments.length ? (r = m, u) : r;
  }, u.range = function(m) {
    return arguments.length ? (i = m, u) : i;
  }, u.trim = function(m) {
    return arguments.length ? (l = m, u) : l;
  }, u.offset = function(m) {
    return arguments.length ? (o = m, u) : o;
  }, u.colorscale = function(m) {
    return arguments.length ? (s = m, u) : s;
  }, u;
}
function Bt(t) {
  return it(Dt, t);
}
function Tt(t) {
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
    var n, s, r = 1e3, i = 6e4, a = 36e5, l = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, o = 31536e6, u = 2628e6, m = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, $ = { years: o, months: u, days: l, hours: a, minutes: i, seconds: r, milliseconds: 1, weeks: 6048e5 }, A = function(p) {
      return p instanceof _;
    }, k = function(p, d, h) {
      return new _(p, h, d.$l);
    }, F = function(p) {
      return s.p(p) + "s";
    }, S = function(p) {
      return p < 0;
    }, C = function(p) {
      return S(p) ? Math.ceil(p) : Math.floor(p);
    }, g = function(p) {
      return Math.abs(p);
    }, w = function(p, d) {
      return p ? S(p) ? { negative: !0, format: "" + g(p) + d } : { negative: !1, format: "" + p + d } : { negative: !1, format: "" };
    }, _ = function() {
      function p(h, v, M) {
        var y = this;
        if (this.$d = {}, this.$l = M, h === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), v) return k(h * $[F(v)], this);
        if (typeof h == "number") return this.$ms = h, this.parseFromMilliseconds(), this;
        if (typeof h == "object") return Object.keys(h).forEach(function(D) {
          y.$d[F(D)] = h[D];
        }), this.calMilliseconds(), this;
        if (typeof h == "string") {
          var E = h.match(m);
          if (E) {
            var N = E.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = N[0], this.$d.months = N[1], this.$d.weeks = N[2], this.$d.days = N[3], this.$d.hours = N[4], this.$d.minutes = N[5], this.$d.seconds = N[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var d = p.prototype;
      return d.calMilliseconds = function() {
        var h = this;
        this.$ms = Object.keys(this.$d).reduce(function(v, M) {
          return v + (h.$d[M] || 0) * $[M];
        }, 0);
      }, d.parseFromMilliseconds = function() {
        var h = this.$ms;
        this.$d.years = C(h / o), h %= o, this.$d.months = C(h / u), h %= u, this.$d.days = C(h / l), h %= l, this.$d.hours = C(h / a), h %= a, this.$d.minutes = C(h / i), h %= i, this.$d.seconds = C(h / r), h %= r, this.$d.milliseconds = h;
      }, d.toISOString = function() {
        var h = w(this.$d.years, "Y"), v = w(this.$d.months, "M"), M = +this.$d.days || 0;
        this.$d.weeks && (M += 7 * this.$d.weeks);
        var y = w(M, "D"), E = w(this.$d.hours, "H"), N = w(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3, D = Math.round(1e3 * D) / 1e3);
        var B = w(D, "S"), P = h.negative || v.negative || y.negative || E.negative || N.negative || B.negative, z = E.format || N.format || B.format ? "T" : "", R = (P ? "-" : "") + "P" + h.format + v.format + y.format + z + E.format + N.format + B.format;
        return R === "P" || R === "-P" ? "P0D" : R;
      }, d.toJSON = function() {
        return this.toISOString();
      }, d.format = function(h) {
        var v = h || "YYYY-MM-DDTHH:mm:ss", M = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return v.replace(c, function(y, E) {
          return E || String(M[y]);
        });
      }, d.as = function(h) {
        return this.$ms / $[F(h)];
      }, d.get = function(h) {
        var v = this.$ms, M = F(h);
        return M === "milliseconds" ? v %= 1e3 : v = M === "weeks" ? C(v / $[M]) : this.$d[M], v || 0;
      }, d.add = function(h, v, M) {
        var y;
        return y = v ? h * $[F(v)] : A(h) ? h.$ms : k(h, this).$ms, k(this.$ms + y * (M ? -1 : 1), this);
      }, d.subtract = function(h, v) {
        return this.add(h, v, !0);
      }, d.locale = function(h) {
        var v = this.clone();
        return v.$l = h, v;
      }, d.clone = function() {
        return k(this.$ms, this);
      }, d.humanize = function(h) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!h);
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
      }, p;
    }(), x = function(p, d, h) {
      return p.add(d.years() * h, "y").add(d.months() * h, "M").add(d.days() * h, "d").add(d.hours() * h, "h").add(d.minutes() * h, "m").add(d.seconds() * h, "s").add(d.milliseconds() * h, "ms");
    };
    return function(p, d, h) {
      n = h, s = h().$utils(), h.duration = function(y, E) {
        var N = h.locale();
        return k(y, { $l: N }, E);
      }, h.isDuration = A;
      var v = d.prototype.add, M = d.prototype.subtract;
      d.prototype.add = function(y, E) {
        return A(y) ? x(this, y, 1) : v.bind(this)(y, E);
      }, d.prototype.subtract = function(y, E) {
        return A(y) ? x(this, y, -1) : M.bind(this)(y, E);
      };
    };
  });
})(lt);
var Yt = lt.exports;
const Pt = /* @__PURE__ */ at(Yt);
var ct = { exports: {} };
(function(t, e) {
  (function(n, s) {
    t.exports = s();
  })(ot, function() {
    return function(n, s, r) {
      n = n || {};
      var i = s.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function l(o, u, m, $) {
        return i.fromToBase(o, u, m, $);
      }
      r.en.relativeTime = a, i.fromToBase = function(o, u, m, $, A) {
        for (var k, F, S, C = m.$locale().relativeTime || a, g = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], w = g.length, _ = 0; _ < w; _ += 1) {
          var x = g[_];
          x.d && (k = $ ? r(o).diff(m, x.d, !0) : m.diff(o, x.d, !0));
          var p = (n.rounding || Math.round)(Math.abs(k));
          if (S = k > 0, p <= x.r || !x.r) {
            p <= 1 && _ > 0 && (x = g[_ - 1]);
            var d = C[x.l];
            A && (p = A("" + p)), F = typeof d == "string" ? d.replace("%d", p) : d(p, u, x.l, S);
            break;
          }
        }
        if (u) return F;
        var h = S ? C.future : C.past;
        return typeof h == "function" ? h(F) : h.replace("%s", F);
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
var Rt = ct.exports;
const Ot = /* @__PURE__ */ at(Rt);
j.extend(Pt);
j.extend(Ot);
function qt(t, e) {
  return j.duration(e - t).humanize();
}
function J() {
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
var Q = "http://www.w3.org/1999/xhtml";
const et = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Q,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ut(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), et.hasOwnProperty(e) ? { space: et[e], local: t } : t;
}
function Ht(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Q && e.documentElement.namespaceURI === Q ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function zt(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ht(t) {
  var e = ut(t);
  return (e.local ? zt : Ht)(e);
}
function Lt() {
}
function ft(t) {
  return t == null ? Lt : function() {
    return this.querySelector(t);
  };
}
function Vt(t) {
  typeof t != "function" && (t = ft(t));
  for (var e = this._groups, n = e.length, s = new Array(n), r = 0; r < n; ++r)
    for (var i = e[r], a = i.length, l = s[r] = new Array(a), c, o, u = 0; u < a; ++u)
      (c = i[u]) && (o = t.call(c, c.__data__, u, i)) && ("__data__" in c && (o.__data__ = c.__data__), l[u] = o);
  return new T(s, this._parents);
}
function dt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function It() {
  return [];
}
function Wt(t) {
  return t == null ? It : function() {
    return this.querySelectorAll(t);
  };
}
function Xt(t) {
  return function() {
    return dt(t.apply(this, arguments));
  };
}
function Ut(t) {
  typeof t == "function" ? t = Xt(t) : t = Wt(t);
  for (var e = this._groups, n = e.length, s = [], r = [], i = 0; i < n; ++i)
    for (var a = e[i], l = a.length, c, o = 0; o < l; ++o)
      (c = a[o]) && (s.push(t.call(c, c.__data__, o, a)), r.push(c));
  return new T(s, r);
}
function Zt(t) {
  return function() {
    return this.matches(t);
  };
}
function pt(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Gt = Array.prototype.find;
function Kt(t) {
  return function() {
    return Gt.call(this.children, t);
  };
}
function Jt() {
  return this.firstElementChild;
}
function Qt(t) {
  return this.select(t == null ? Jt : Kt(typeof t == "function" ? t : pt(t)));
}
var jt = Array.prototype.filter;
function te() {
  return Array.from(this.children);
}
function ee(t) {
  return function() {
    return jt.call(this.children, t);
  };
}
function ne(t) {
  return this.selectAll(t == null ? te : ee(typeof t == "function" ? t : pt(t)));
}
function re(t) {
  typeof t != "function" && (t = Zt(t));
  for (var e = this._groups, n = e.length, s = new Array(n), r = 0; r < n; ++r)
    for (var i = e[r], a = i.length, l = s[r] = [], c, o = 0; o < a; ++o)
      (c = i[o]) && t.call(c, c.__data__, o, i) && l.push(c);
  return new T(s, this._parents);
}
function mt(t) {
  return new Array(t.length);
}
function se() {
  return new T(this._enter || this._groups.map(mt), this._parents);
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
function ie(t) {
  return function() {
    return t;
  };
}
function oe(t, e, n, s, r, i) {
  for (var a = 0, l, c = e.length, o = i.length; a < o; ++a)
    (l = e[a]) ? (l.__data__ = i[a], s[a] = l) : n[a] = new U(t, i[a]);
  for (; a < c; ++a)
    (l = e[a]) && (r[a] = l);
}
function ae(t, e, n, s, r, i, a) {
  var l, c, o = /* @__PURE__ */ new Map(), u = e.length, m = i.length, $ = new Array(u), A;
  for (l = 0; l < u; ++l)
    (c = e[l]) && ($[l] = A = a.call(c, c.__data__, l, e) + "", o.has(A) ? r[l] = c : o.set(A, c));
  for (l = 0; l < m; ++l)
    A = a.call(t, i[l], l, i) + "", (c = o.get(A)) ? (s[l] = c, c.__data__ = i[l], o.delete(A)) : n[l] = new U(t, i[l]);
  for (l = 0; l < u; ++l)
    (c = e[l]) && o.get($[l]) === c && (r[l] = c);
}
function le(t) {
  return t.__data__;
}
function ce(t, e) {
  if (!arguments.length) return Array.from(this, le);
  var n = e ? ae : oe, s = this._parents, r = this._groups;
  typeof t != "function" && (t = ie(t));
  for (var i = r.length, a = new Array(i), l = new Array(i), c = new Array(i), o = 0; o < i; ++o) {
    var u = s[o], m = r[o], $ = m.length, A = ue(t.call(u, u && u.__data__, o, s)), k = A.length, F = l[o] = new Array(k), S = a[o] = new Array(k), C = c[o] = new Array($);
    n(u, m, F, S, C, A, e);
    for (var g = 0, w = 0, _, x; g < k; ++g)
      if (_ = F[g]) {
        for (g >= w && (w = g + 1); !(x = S[w]) && ++w < k; ) ;
        _._next = x || null;
      }
  }
  return a = new T(a, s), a._enter = l, a._exit = c, a;
}
function ue(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function he() {
  return new T(this._exit || this._groups.map(mt), this._parents);
}
function fe(t, e, n) {
  var s = this.enter(), r = this, i = this.exit();
  return typeof t == "function" ? (s = t(s), s && (s = s.selection())) : s = s.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? i.remove() : n(i), s && r ? s.merge(r).order() : r;
}
function de(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, s = e._groups, r = n.length, i = s.length, a = Math.min(r, i), l = new Array(r), c = 0; c < a; ++c)
    for (var o = n[c], u = s[c], m = o.length, $ = l[c] = new Array(m), A, k = 0; k < m; ++k)
      (A = o[k] || u[k]) && ($[k] = A);
  for (; c < r; ++c)
    l[c] = n[c];
  return new T(l, this._parents);
}
function pe() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var s = t[e], r = s.length - 1, i = s[r], a; --r >= 0; )
      (a = s[r]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function me(t) {
  t || (t = ge);
  function e(m, $) {
    return m && $ ? t(m.__data__, $.__data__) : !m - !$;
  }
  for (var n = this._groups, s = n.length, r = new Array(s), i = 0; i < s; ++i) {
    for (var a = n[i], l = a.length, c = r[i] = new Array(l), o, u = 0; u < l; ++u)
      (o = a[u]) && (c[u] = o);
    c.sort(e);
  }
  return new T(r, this._parents).order();
}
function ge(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ye() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function _e() {
  return Array.from(this);
}
function we() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var s = t[e], r = 0, i = s.length; r < i; ++r) {
      var a = s[r];
      if (a) return a;
    }
  return null;
}
function xe() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function ve() {
  return !this.node();
}
function Ae(t) {
  for (var e = this._groups, n = 0, s = e.length; n < s; ++n)
    for (var r = e[n], i = 0, a = r.length, l; i < a; ++i)
      (l = r[i]) && t.call(l, l.__data__, i, r);
  return this;
}
function be(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $e(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ke(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Se(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Me(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Ce(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Ee(t, e) {
  var n = ut(t);
  if (arguments.length < 2) {
    var s = this.node();
    return n.local ? s.getAttributeNS(n.space, n.local) : s.getAttribute(n);
  }
  return this.each((e == null ? n.local ? $e : be : typeof e == "function" ? n.local ? Ce : Me : n.local ? Se : ke)(n, e));
}
function gt(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Fe(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ne(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function De(t, e, n) {
  return function() {
    var s = e.apply(this, arguments);
    s == null ? this.style.removeProperty(t) : this.style.setProperty(t, s, n);
  };
}
function Be(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Fe : typeof e == "function" ? De : Ne)(t, e, n ?? "")) : Te(this.node(), t);
}
function Te(t, e) {
  return t.style.getPropertyValue(e) || gt(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Ye(t) {
  return function() {
    delete this[t];
  };
}
function Pe(t, e) {
  return function() {
    this[t] = e;
  };
}
function Re(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Oe(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Ye : typeof e == "function" ? Re : Pe)(t, e)) : this.node()[t];
}
function yt(t) {
  return t.trim().split(/^|\s+/);
}
function tt(t) {
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
  for (var n = tt(t), s = -1, r = e.length; ++s < r; ) n.add(e[s]);
}
function xt(t, e) {
  for (var n = tt(t), s = -1, r = e.length; ++s < r; ) n.remove(e[s]);
}
function qe(t) {
  return function() {
    wt(this, t);
  };
}
function He(t) {
  return function() {
    xt(this, t);
  };
}
function ze(t, e) {
  return function() {
    (e.apply(this, arguments) ? wt : xt)(this, t);
  };
}
function Le(t, e) {
  var n = yt(t + "");
  if (arguments.length < 2) {
    for (var s = tt(this.node()), r = -1, i = n.length; ++r < i; ) if (!s.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? ze : e ? qe : He)(n, e));
}
function Ve() {
  this.textContent = "";
}
function Ie(t) {
  return function() {
    this.textContent = t;
  };
}
function We(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Xe(t) {
  return arguments.length ? this.each(t == null ? Ve : (typeof t == "function" ? We : Ie)(t)) : this.node().textContent;
}
function Ue() {
  this.innerHTML = "";
}
function Ze(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ge(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ke(t) {
  return arguments.length ? this.each(t == null ? Ue : (typeof t == "function" ? Ge : Ze)(t)) : this.node().innerHTML;
}
function Je() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Qe() {
  return this.each(Je);
}
function je() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function tn() {
  return this.each(je);
}
function en(t) {
  var e = typeof t == "function" ? t : ht(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function nn() {
  return null;
}
function rn(t, e) {
  var n = typeof t == "function" ? t : ht(t), s = e == null ? nn : typeof e == "function" ? e : ft(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), s.apply(this, arguments) || null);
  });
}
function sn() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function on() {
  return this.each(sn);
}
function an() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ln() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function cn(t) {
  return this.select(t ? ln : an);
}
function un(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function hn(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function fn(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", s = e.indexOf(".");
    return s >= 0 && (n = e.slice(s + 1), e = e.slice(0, s)), { type: e, name: n };
  });
}
function dn(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, s = -1, r = e.length, i; n < r; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++s] = i;
      ++s ? e.length = s : delete this.__on;
    }
  };
}
function pn(t, e, n) {
  return function() {
    var s = this.__on, r, i = hn(e);
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
function mn(t, e, n) {
  var s = fn(t + ""), r, i = s.length, a;
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
  for (l = e ? pn : dn, r = 0; r < i; ++r) this.each(l(s[r], e, n));
  return this;
}
function vt(t, e, n) {
  var s = gt(t), r = s.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = s.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function gn(t, e) {
  return function() {
    return vt(this, t, e);
  };
}
function yn(t, e) {
  return function() {
    return vt(this, t, e.apply(this, arguments));
  };
}
function _n(t, e) {
  return this.each((typeof e == "function" ? yn : gn)(t, e));
}
function* wn() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var s = t[e], r = 0, i = s.length, a; r < i; ++r)
      (a = s[r]) && (yield a);
}
var xn = [null];
function T(t, e) {
  this._groups = t, this._parents = e;
}
function vn() {
  return this;
}
T.prototype = {
  constructor: T,
  select: Vt,
  selectAll: Ut,
  selectChild: Qt,
  selectChildren: ne,
  filter: re,
  data: ce,
  enter: se,
  exit: he,
  join: fe,
  merge: de,
  selection: vn,
  order: pe,
  sort: me,
  call: ye,
  nodes: _e,
  node: we,
  size: xe,
  empty: ve,
  each: Ae,
  attr: Ee,
  style: Be,
  property: Oe,
  classed: Le,
  text: Xe,
  html: Ke,
  raise: Qe,
  lower: tn,
  append: en,
  insert: rn,
  remove: on,
  clone: cn,
  datum: un,
  on: mn,
  dispatch: _n,
  [Symbol.iterator]: wn
};
function nt(t) {
  return typeof t == "string" ? new T([document.querySelectorAll(t)], [document.documentElement]) : new T([dt(t)], xn);
}
const An = [
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
function bn(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function $n(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function kn(t) {
  return $n(t) > 165;
}
function Sn(t) {
  return kn(f.color(t)) ? "black" : "white";
}
function rt(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), s = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${s}`;
}
function I(t, e) {
  return "translate(" + t + "," + e + ")";
}
function Mn() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function Z(t, e, n) {
  const r = f.select(t).attr("class");
  let i = !1;
  e.selectAll("g.row").each(function(g) {
    const _ = f.select(this).attr("class");
    if (_ == r)
      i = !0;
    else if (i) {
      let p = this.getAttribute("transform"), d = parseFloat(p.split("(")[1].split(",")[0].trim()), h = parseFloat(p.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${d},${h + n})`);
      var x = _.split(" ")[1];
      document.querySelectorAll(`g.task.${x} rect`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      }), document.querySelectorAll(`g.task.${x} text`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      });
    }
  });
  const a = document.querySelector('path[stroke-width="1.75"]');
  let c = a.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), o = parseFloat(c[1]), u = parseFloat(c[2]), $ = parseFloat(c[3]) + n;
  a.setAttribute("d", `M${o},${u}V${$}`);
  const A = f.select("g.x.axis.bottom-axis");
  let k = A.attr("transform"), F = parseFloat(k.split("(")[1].split(",")[0].trim()), C = parseFloat(k.split(",")[1].split(")")[0].trim()) + n;
  A.attr("transform", `translate(${F}, ${C})`);
}
function At(t, e) {
  e.forEach(function(s) {
    document.querySelectorAll(`g.row.${s}`).forEach(function(i) {
      i.style.display = "block";
    });
  });
  const n = f.select(t).attr("class").split(" ")[1];
  f.selectAll(`g.task.${n}`).each(function(s) {
    var r = s[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (r == n.replace(/--/g, ""))
      f.select(this).style("display", "none");
    else if (r != n.replace(/--/g, "")) {
      f.select(this).style("display", "block");
      var i = (e.indexOf(r) + 1) * 38;
      let a = f.select(this), l = a.attr("transform"), c = parseFloat(l.split("(")[1].split(",")[0].trim()), o = parseFloat(l.split(",")[1].split(")")[0].trim()), u = o + i;
      a.attr("transform", `translate(${c}, ${o})`).transition().duration(1e3).attr("transform", `translate(${c}, ${u})`).on("start", () => {
        nt(`g.task.${r}`).style("display", "none");
      }).on("end", () => {
        a.style("display", "none"), a.attr("transform", `translate(${c}, ${o})`), nt(`g.task.${r}`).style("display", "block");
      });
    }
  });
}
function bt(t, e) {
  return new Promise((n) => {
    const s = f.select(t).attr("class").split(" ")[1];
    f.selectAll(`g.task:not(.${s})`).each(function(r) {
      var i = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(i)) {
        f.select(this).style("display", "block");
        var a = (e.indexOf(i) + 1) * 38;
        let l = f.select(this), c = l.attr("transform"), o = parseFloat(c.split("(")[1].split(",")[0].trim()), u = parseFloat(c.split(",")[1].split(")")[0].trim()), m = u - a;
        l.transition().duration(1e3).attr("transform", `translate(${o}, ${m})`).on("end", () => {
          f.selectAll(`g.${s}`).style("display", "block"), l.style("display", "none"), l.attr("transform", `translate(${o}, ${u})`), e.forEach(function($) {
            document.querySelectorAll(`.${$}`).forEach(function(k) {
              k.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function G(t, e) {
  const s = f.select(t).attr("class"), r = [];
  let i = !1, a = !1;
  return e.selectAll("g.row").each(function(l) {
    const o = f.select(this).attr("class");
    o == s ? i = !0 : i && o.split(" ")[2] == "timelineheader" ? a = !0 : i && !a && r.push(o.split(" ")[1]);
  }), r;
}
function Cn() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let e = [];
  f.selectAll("g.row.timelineheader text").each(function() {
    if (f.select(this).text() === "-") {
      const s = this.parentNode, r = G(s, f.select(s.parentNode)), i = r.length * 38;
      let a = bt(s, r).then(() => {
        Z(s, f.select(s.parentNode), -i), f.select(this).text("+").style("font-size", "20px");
      });
      e.push(a);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = Cn;
function En() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let e = [];
  f.selectAll("g.row.timelineheader text").each(function() {
    if (f.select(this).text() === "+") {
      const s = this.parentNode, r = G(s, f.select(s.parentNode)), i = r.length * 38;
      let a = new Promise((l) => {
        At(s, r), Z(s, f.select(s.parentNode), i), l();
      }).then(() => {
        f.select(this).text("-").style("font-size", "30px");
      });
      e.push(a);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = En;
function Dn() {
  let t = An, e = 5, n = 2, s = !1, r = !1, i, a, l = 0, c = X(0), o = X(1), u = X(2), m = X(3);
  function $(g, w) {
    const _ = g.select("text"), x = g.select("rect"), p = x.attr("width") - 2 * e, d = o(w);
    _.text(d);
    let h = _.node().getComputedTextLength();
    if (h > p) {
      const v = p < 0 ? 0 : p / h, M = Math.floor(d.length * v);
      _.text(M > 2 ? d.slice(0, M - 2) + "…" : "");
    }
  }
  function A(g, w, _) {
    const x = g.select("text").node(), p = x.getBBox(), d = _.scale().domain().indexOf(c(w)), h = _.colorscale()(d), v = g.selectAll("rect.bckg").data([w]).join("rect").attr("class", "bckg").attr("fill", h).attr("x", p.x - e + n).attr("y", p.y - 2).attr("width", p.width + e - n).attr("height", p.height);
    g.node().insertBefore(v.node(), x);
  }
  function k(g, w) {
    g.each(function(_, x) {
      const p = f.select(this.parentNode);
      m(_) - u(_) ? $(p, _) : A(p, _, w);
    });
  }
  function F(g) {
    return function(w, _) {
      f.active(this).tween("text", function() {
        return function(x) {
          k(f.select(this), g);
        };
      });
    };
  }
  function S(g) {
    const w = g.datum(), _ = new Set(f.map(w, c)), x = new st(C), p = f.scaleOrdinal(t);
    i = i || [f.min(w, u), f.max(w, m)], r && (i = f.extent(i.concat(/* @__PURE__ */ new Date()))), g.each(function(d) {
      const h = a || this.getBoundingClientRect().width, v = _.size * (bn(this) + 4 * e), M = f.scaleBand().domain(_).range([0, v]), y = f.scaleTime().domain(i), E = (s ? Tt : Bt)(M).width(h), N = f.select(this).selectAll("svg").data([1]).join("svg");
      N.attr("class", "timeline").attr("width", h).attr("height", v + 40);
      const D = N.append("g").attr("transform", "translate(0,20)"), B = D.append("g").attr("class", "y axis").call(E);
      B.selectAll("text").on("mouseover", function() {
        f.select(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        f.select(this).style("text-decoration", "none");
      }).attr("text-anchor", function(b) {
        return b.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(b) {
        return b.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(b) {
        return b.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(b, Y) {
        const q = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${Y.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(q, "_blank");
      }), B.selectAll("g.row").each(function(b) {
        const Y = f.select(this).datum();
        f.select(this).classed(f.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), Y.startsWith(" •") && f.select(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), B.selectAll("g.row.timelineheader text").on("click", function(b, Y) {
        const L = f.select(this).text();
        if (L === "+") {
          let O = G(this.parentNode, B), q = O.length * 38;
          At(this.parentNode, O), Z(this.parentNode, B, q), f.select(this).text() === "+" ? f.select(this).text("-").style("font-size", "30px") : f.select(this).text("+");
        } else if (L === "-") {
          let O = G(this.parentNode, B), q = O.length * 38;
          bt(this.parentNode, O).then(() => {
            Z(this.parentNode, B, -q);
          }), f.select(this).text() === "-" ? f.select(this).text("+").style("font-size", "20px") : f.select(this).text("-");
        } else {
          const V = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${Y.replace(/ • /g, "").replace(" ", "%20")}%22`;
          window.open(V, "_blank");
        }
      });
      let P = E.range();
      y.range([P[0] + e, P[1] - e]).clamp(!0);
      const z = f.axisBottom(y), R = D.append("g").attr("class", "x axis").attr("transform", I(0, 0)).call(z);
      R.selectAll(".tick text").attr("dy", "-1.5em"), R.selectAll(".tick line").attr("y2", "-5");
      const $t = f.axisBottom(y);
      N.append("g").attr("class", "x axis bottom-axis").attr("transform", I(0, v + 20)).call($t).selectAll(".tick line").attr("y2", "5"), B.on("offset", () => {
        P = E.range(), y.range([P[0] + e, P[1] - e]).clamp(!0), z.ticks(Math.min((P[1] - P[0]) / 70, 10)), R.call(z), H.attr("transform", (b) => I(y(u(b)), M(c(b)))).selectAll("rect").attr("width", (b) => y(m(b)) - y(u(b)) || n).call((b) => k(b, E)), B.call(E.draw_ticks, y.ticks().map(y));
      }), R.select(".domain").remove(), R.selectAll(".tick line").attr("stroke", "#AAA");
      const kt = y.ticks().map(y);
      B.call(E.draw_ticks, kt);
      let H = D.selectAll("g.task").data(d);
      H.exit().remove();
      const K = H.enter().append("g").classed("task", !0);
      K.each(function(b) {
        const Y = c(b).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        f.select(this).classed(Y, !0);
      }).append("rect").style("opacity", 1).attr("y", e).style("cursor", "pointer").attr("height", M.bandwidth() - 2 * e).on("mouseover", x.show).on("mouseout", x.hide).on("click", function(b, Y) {
        var L = String(Y[1]), O = L.replace(" ", "%20"), q = Y[2], V = rt(q), St = Y[3], Mt = rt(St), Ct = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + O + "%22%20%2Bdate_when%3A%5B" + V + "%20TO%20" + Mt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(Ct, "_blank");
      }).style("fill", J(o, p)), K.append("text").attr("text-anchor", "start").attr("fill", (b) => m(b) - u(b) ? J(o, p, Sn)(b) : "black").attr("pointer-events", "none").attr("dx", e).attr("y", M.bandwidth() / 2).attr("dy", "0.32em").text(o), H = H.merge(K), H.attr("transform", (b) => I(P[0], M(c(b)))).selectAll("rect").attr("width", 0), H.transition().duration(l).attr("transform", (b) => I(y(u(b)), M(c(b)))).selectAll("rect").attr("width", (b) => y(m(b)) - y(u(b)) || n).on("start", F(E)), r && D.append("path").attr("stroke", "red").attr("d", "M" + y(/* @__PURE__ */ new Date()) + ",0.5V" + v);
    }), Mn();
  }
  return S.dates = function(g) {
    return arguments.length ? (i = g, S) : i;
  }, S.width = function(g) {
    return arguments.length ? (a = g, S) : a;
  }, S.today = function(g) {
    return arguments.length ? (r = g, S) : r;
  }, S.colors = function(g) {
    return arguments.length ? (t = g, S) : t;
  }, S.padding = function(g) {
    return arguments.length ? (e = g, S) : e;
  }, S.milestone_width = function(g) {
    return arguments.length ? (n = g, S) : n;
  }, S.reversed = function(g) {
    return arguments.length ? (s = g, S) : s;
  }, S.duration = function(g) {
    return arguments.length ? (l = g, S) : l;
  }, S;
  function C(g, w) {
    const _ = J(f.isoParse, f.timeFormat("%Y-%m-%d")), x = `<b>${o(w)}</b><hr style="margin: 2px 0 2px 0">${_(u(w))}`, p = m(w) - u(w) ? ` - ${_(m(w))}<br>${qt(u(w), m(w))}` : "";
    return x + p;
  }
}
export {
  qt as durationFormat,
  Dn as timeline,
  Bt as timelineAxisLeft,
  Tt as timelineAxisRight,
  st as tooltip
};
