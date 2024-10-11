import * as g from "d3";
export * from "d3";
import J from "dayjs";
const Tt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function ot(t) {
  g.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Tt);
  const e = g.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Et(t) {
  return g.max(t.nodes().map((e) => e.getComputedTextLength()));
}
function Ft(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const V = 1, Dt = 2;
function at(t, e) {
  let n = ["#FFF", "#EEE"], s = g.scaleOrdinal(n), r = 5, i, a = "#AAA", l = 40, c = 3e3, o;
  function u(p) {
    let k = e.domain(), S = ot((d) => d), M = g.scaleOrdinal(n), E = g.scaleOrdinal(n.reverse()), A = Ft(l), T = p.selectAll(".row").data(k, e).order(), m = T.enter().append("g").attr("class", "row"), _ = T.exit(), y = T.select("text");
    T = T.merge(m).attr("transform", (d) => "translate(0," + e(d) + ")"), _.remove(), m.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", M), m.append("path").attr("stroke", E), y = y.merge(
      m.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(d, h) {
        g.select(this).text() != h && S.show(h);
      }).on("mouseout", S.hide)
    ).text(A), o === void 0 && (o = Et(y) + 2 * r, o = t === V ? c - o : o), i = t === V ? [0, o] : [o, c], y.attr("text-anchor", t === V ? "start" : "end").attr("dx", t === V ? r : -r).attr("x", o);
    const b = function(d, h) {
      o = Math.max(10, Math.min(c - 10, o + d.dx)), g.select(this).attr("d", "M" + o + ",0.5V" + e.range()[1]), y.attr("x", o), i = t === V ? [0, o] : [o, c], p.dispatch("offset", { detail: { offset: o } });
    };
    p.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (o + 0.5) + ",0.5V" + e.range()[1]).style("cursor", "ew-resize").call(g.drag().on("drag", b));
  }
  return u.draw_ticks = function(p, k) {
    p.selectAll(".row").select("path").attr("d", k.map((S) => "M" + S + ",1v" + (e.bandwidth() - 1)).join(""));
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
function Nt(t) {
  return at(Dt, t);
}
function Yt(t) {
  return at(V, t);
}
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ct(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ut = { exports: {} };
(function(t, e) {
  (function(n, s) {
    t.exports = s();
  })(lt, function() {
    var n, s, r = 1e3, i = 6e4, a = 36e5, l = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, o = 31536e6, u = 2628e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, k = { years: o, months: u, days: l, hours: a, minutes: i, seconds: r, milliseconds: 1, weeks: 6048e5 }, S = function(d) {
      return d instanceof y;
    }, M = function(d, h, f) {
      return new y(d, f, h.$l);
    }, E = function(d) {
      return s.p(d) + "s";
    }, A = function(d) {
      return d < 0;
    }, T = function(d) {
      return A(d) ? Math.ceil(d) : Math.floor(d);
    }, m = function(d) {
      return Math.abs(d);
    }, _ = function(d, h) {
      return d ? A(d) ? { negative: !0, format: "" + m(d) + h } : { negative: !1, format: "" + d + h } : { negative: !1, format: "" };
    }, y = function() {
      function d(f, v, $) {
        var w = this;
        if (this.$d = {}, this.$l = $, f === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), v) return M(f * k[E(v)], this);
        if (typeof f == "number") return this.$ms = f, this.parseFromMilliseconds(), this;
        if (typeof f == "object") return Object.keys(f).forEach(function(D) {
          w.$d[E(D)] = f[D];
        }), this.calMilliseconds(), this;
        if (typeof f == "string") {
          var C = f.match(p);
          if (C) {
            var F = C.slice(2).map(function(D) {
              return D != null ? Number(D) : 0;
            });
            return this.$d.years = F[0], this.$d.months = F[1], this.$d.weeks = F[2], this.$d.days = F[3], this.$d.hours = F[4], this.$d.minutes = F[5], this.$d.seconds = F[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var h = d.prototype;
      return h.calMilliseconds = function() {
        var f = this;
        this.$ms = Object.keys(this.$d).reduce(function(v, $) {
          return v + (f.$d[$] || 0) * k[$];
        }, 0);
      }, h.parseFromMilliseconds = function() {
        var f = this.$ms;
        this.$d.years = T(f / o), f %= o, this.$d.months = T(f / u), f %= u, this.$d.days = T(f / l), f %= l, this.$d.hours = T(f / a), f %= a, this.$d.minutes = T(f / i), f %= i, this.$d.seconds = T(f / r), f %= r, this.$d.milliseconds = f;
      }, h.toISOString = function() {
        var f = _(this.$d.years, "Y"), v = _(this.$d.months, "M"), $ = +this.$d.days || 0;
        this.$d.weeks && ($ += 7 * this.$d.weeks);
        var w = _($, "D"), C = _(this.$d.hours, "H"), F = _(this.$d.minutes, "M"), D = this.$d.seconds || 0;
        this.$d.milliseconds && (D += this.$d.milliseconds / 1e3, D = Math.round(1e3 * D) / 1e3);
        var N = _(D, "S"), H = f.negative || v.negative || w.negative || C.negative || F.negative || N.negative, L = C.format || F.format || N.format ? "T" : "", O = (H ? "-" : "") + "P" + f.format + v.format + w.format + L + C.format + F.format + N.format;
        return O === "P" || O === "-P" ? "P0D" : O;
      }, h.toJSON = function() {
        return this.toISOString();
      }, h.format = function(f) {
        var v = f || "YYYY-MM-DDTHH:mm:ss", $ = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return v.replace(c, function(w, C) {
          return C || String($[w]);
        });
      }, h.as = function(f) {
        return this.$ms / k[E(f)];
      }, h.get = function(f) {
        var v = this.$ms, $ = E(f);
        return $ === "milliseconds" ? v %= 1e3 : v = $ === "weeks" ? T(v / k[$]) : this.$d[$], v || 0;
      }, h.add = function(f, v, $) {
        var w;
        return w = v ? f * k[E(v)] : S(f) ? f.$ms : M(f, this).$ms, M(this.$ms + w * ($ ? -1 : 1), this);
      }, h.subtract = function(f, v) {
        return this.add(f, v, !0);
      }, h.locale = function(f) {
        var v = this.clone();
        return v.$l = f, v;
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
    }(), b = function(d, h, f) {
      return d.add(h.years() * f, "y").add(h.months() * f, "M").add(h.days() * f, "d").add(h.hours() * f, "h").add(h.minutes() * f, "m").add(h.seconds() * f, "s").add(h.milliseconds() * f, "ms");
    };
    return function(d, h, f) {
      n = f, s = f().$utils(), f.duration = function(w, C) {
        var F = f.locale();
        return M(w, { $l: F }, C);
      }, f.isDuration = S;
      var v = h.prototype.add, $ = h.prototype.subtract;
      h.prototype.add = function(w, C) {
        return S(w) ? b(this, w, 1) : v.bind(this)(w, C);
      }, h.prototype.subtract = function(w, C) {
        return S(w) ? b(this, w, -1) : $.bind(this)(w, C);
      };
    };
  });
})(ut);
var Bt = ut.exports;
const Rt = /* @__PURE__ */ ct(Bt);
var ft = { exports: {} };
(function(t, e) {
  (function(n, s) {
    t.exports = s();
  })(lt, function() {
    return function(n, s, r) {
      n = n || {};
      var i = s.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function l(o, u, p, k) {
        return i.fromToBase(o, u, p, k);
      }
      r.en.relativeTime = a, i.fromToBase = function(o, u, p, k, S) {
        for (var M, E, A, T = p.$locale().relativeTime || a, m = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], _ = m.length, y = 0; y < _; y += 1) {
          var b = m[y];
          b.d && (M = k ? r(o).diff(p, b.d, !0) : p.diff(o, b.d, !0));
          var d = (n.rounding || Math.round)(Math.abs(M));
          if (A = M > 0, d <= b.r || !b.r) {
            d <= 1 && y > 0 && (b = m[y - 1]);
            var h = T[b.l];
            S && (d = S("" + d)), E = typeof h == "string" ? h.replace("%d", d) : h(d, u, b.l, A);
            break;
          }
        }
        if (u) return E;
        var f = A ? T.future : T.past;
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
})(ft);
var Ht = ft.exports;
const Ot = /* @__PURE__ */ ct(Ht);
J.extend(Rt);
J.extend(Ot);
function qt(t, e) {
  return J.duration(e - t).humanize();
}
function Z() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return t.reduce((n, s) => s(n), e);
  };
}
function W(t) {
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
function ht(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), j.hasOwnProperty(e) ? { space: j[e], local: t } : t;
}
function Pt(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === K && e.documentElement.namespaceURI === K ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Vt(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function dt(t) {
  var e = ht(t);
  return (e.local ? Vt : Pt)(e);
}
function Lt() {
}
function pt(t) {
  return t == null ? Lt : function() {
    return this.querySelector(t);
  };
}
function zt(t) {
  typeof t != "function" && (t = pt(t));
  for (var e = this._groups, n = e.length, s = new Array(n), r = 0; r < n; ++r)
    for (var i = e[r], a = i.length, l = s[r] = new Array(a), c, o, u = 0; u < a; ++u)
      (c = i[u]) && (o = t.call(c, c.__data__, u, i)) && ("__data__" in c && (o.__data__ = c.__data__), l[u] = o);
  return new Y(s, this._parents);
}
function mt(t) {
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
function Ut(t) {
  return function() {
    return mt(t.apply(this, arguments));
  };
}
function Xt(t) {
  typeof t == "function" ? t = Ut(t) : t = Wt(t);
  for (var e = this._groups, n = e.length, s = [], r = [], i = 0; i < n; ++i)
    for (var a = e[i], l = a.length, c, o = 0; o < l; ++o)
      (c = a[o]) && (s.push(t.call(c, c.__data__, o, a)), r.push(c));
  return new Y(s, r);
}
function Gt(t) {
  return function() {
    return this.matches(t);
  };
}
function gt(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Zt = Array.prototype.find;
function Kt(t) {
  return function() {
    return Zt.call(this.children, t);
  };
}
function Jt() {
  return this.firstElementChild;
}
function Qt(t) {
  return this.select(t == null ? Jt : Kt(typeof t == "function" ? t : gt(t)));
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
  return this.selectAll(t == null ? te : ee(typeof t == "function" ? t : gt(t)));
}
function re(t) {
  typeof t != "function" && (t = Gt(t));
  for (var e = this._groups, n = e.length, s = new Array(n), r = 0; r < n; ++r)
    for (var i = e[r], a = i.length, l = s[r] = [], c, o = 0; o < a; ++o)
      (c = i[o]) && t.call(c, c.__data__, o, i) && l.push(c);
  return new Y(s, this._parents);
}
function yt(t) {
  return new Array(t.length);
}
function se() {
  return new Y(this._enter || this._groups.map(yt), this._parents);
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
  var l, c, o = /* @__PURE__ */ new Map(), u = e.length, p = i.length, k = new Array(u), S;
  for (l = 0; l < u; ++l)
    (c = e[l]) && (k[l] = S = a.call(c, c.__data__, l, e) + "", o.has(S) ? r[l] = c : o.set(S, c));
  for (l = 0; l < p; ++l)
    S = a.call(t, i[l], l, i) + "", (c = o.get(S)) ? (s[l] = c, c.__data__ = i[l], o.delete(S)) : n[l] = new U(t, i[l]);
  for (l = 0; l < u; ++l)
    (c = e[l]) && o.get(k[l]) === c && (r[l] = c);
}
function le(t) {
  return t.__data__;
}
function ce(t, e) {
  if (!arguments.length) return Array.from(this, le);
  var n = e ? ae : oe, s = this._parents, r = this._groups;
  typeof t != "function" && (t = ie(t));
  for (var i = r.length, a = new Array(i), l = new Array(i), c = new Array(i), o = 0; o < i; ++o) {
    var u = s[o], p = r[o], k = p.length, S = ue(t.call(u, u && u.__data__, o, s)), M = S.length, E = l[o] = new Array(M), A = a[o] = new Array(M), T = c[o] = new Array(k);
    n(u, p, E, A, T, S, e);
    for (var m = 0, _ = 0, y, b; m < M; ++m)
      if (y = E[m]) {
        for (m >= _ && (_ = m + 1); !(b = A[_]) && ++_ < M; ) ;
        y._next = b || null;
      }
  }
  return a = new Y(a, s), a._enter = l, a._exit = c, a;
}
function ue(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function fe() {
  return new Y(this._exit || this._groups.map(yt), this._parents);
}
function he(t, e, n) {
  var s = this.enter(), r = this, i = this.exit();
  return typeof t == "function" ? (s = t(s), s && (s = s.selection())) : s = s.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? i.remove() : n(i), s && r ? s.merge(r).order() : r;
}
function de(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, s = e._groups, r = n.length, i = s.length, a = Math.min(r, i), l = new Array(r), c = 0; c < a; ++c)
    for (var o = n[c], u = s[c], p = o.length, k = l[c] = new Array(p), S, M = 0; M < p; ++M)
      (S = o[M] || u[M]) && (k[M] = S);
  for (; c < r; ++c)
    l[c] = n[c];
  return new Y(l, this._parents);
}
function pe() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var s = t[e], r = s.length - 1, i = s[r], a; --r >= 0; )
      (a = s[r]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function me(t) {
  t || (t = ge);
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
function ve() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function xe() {
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
function Se(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ke(t, e) {
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
function Te(t, e) {
  var n = ht(t);
  if (arguments.length < 2) {
    var s = this.node();
    return n.local ? s.getAttributeNS(n.space, n.local) : s.getAttribute(n);
  }
  return this.each((e == null ? n.local ? $e : be : typeof e == "function" ? n.local ? Ce : Me : n.local ? ke : Se)(n, e));
}
function _t(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ee(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fe(t, e, n) {
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
function Ne(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ee : typeof e == "function" ? De : Fe)(t, e, n ?? "")) : Ye(this.node(), t);
}
function Ye(t, e) {
  return t.style.getPropertyValue(e) || _t(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Be(t) {
  return function() {
    delete this[t];
  };
}
function Re(t, e) {
  return function() {
    this[t] = e;
  };
}
function He(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Oe(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Be : typeof e == "function" ? He : Re)(t, e)) : this.node()[t];
}
function wt(t) {
  return t.trim().split(/^|\s+/);
}
function Q(t) {
  return t.classList || new vt(t);
}
function vt(t) {
  this._node = t, this._names = wt(t.getAttribute("class") || "");
}
vt.prototype = {
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
function xt(t, e) {
  for (var n = Q(t), s = -1, r = e.length; ++s < r; ) n.add(e[s]);
}
function At(t, e) {
  for (var n = Q(t), s = -1, r = e.length; ++s < r; ) n.remove(e[s]);
}
function qe(t) {
  return function() {
    xt(this, t);
  };
}
function Pe(t) {
  return function() {
    At(this, t);
  };
}
function Ve(t, e) {
  return function() {
    (e.apply(this, arguments) ? xt : At)(this, t);
  };
}
function Le(t, e) {
  var n = wt(t + "");
  if (arguments.length < 2) {
    for (var s = Q(this.node()), r = -1, i = n.length; ++r < i; ) if (!s.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ve : e ? qe : Pe)(n, e));
}
function ze() {
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
function Ue(t) {
  return arguments.length ? this.each(t == null ? ze : (typeof t == "function" ? We : Ie)(t)) : this.node().textContent;
}
function Xe() {
  this.innerHTML = "";
}
function Ge(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ze(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ke(t) {
  return arguments.length ? this.each(t == null ? Xe : (typeof t == "function" ? Ze : Ge)(t)) : this.node().innerHTML;
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
  var e = typeof t == "function" ? t : dt(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function nn() {
  return null;
}
function rn(t, e) {
  var n = typeof t == "function" ? t : dt(t), s = e == null ? nn : typeof e == "function" ? e : pt(e);
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
function fn(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function hn(t) {
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
    var s = this.__on, r, i = fn(e);
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
  var s = hn(t + ""), r, i = s.length, a;
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
function bt(t, e, n) {
  var s = _t(t), r = s.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = s.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function gn(t, e) {
  return function() {
    return bt(this, t, e);
  };
}
function yn(t, e) {
  return function() {
    return bt(this, t, e.apply(this, arguments));
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
var vn = [null];
function Y(t, e) {
  this._groups = t, this._parents = e;
}
function xn() {
  return this;
}
Y.prototype = {
  constructor: Y,
  select: zt,
  selectAll: Xt,
  selectChild: Qt,
  selectChildren: ne,
  filter: re,
  data: ce,
  enter: se,
  exit: fe,
  join: he,
  merge: de,
  selection: xn,
  order: pe,
  sort: me,
  call: ye,
  nodes: _e,
  node: we,
  size: ve,
  empty: xe,
  each: Ae,
  attr: Te,
  style: Ne,
  property: Oe,
  classed: Le,
  text: Ue,
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
function An(t) {
  return typeof t == "string" ? new Y([document.querySelectorAll(t)], [document.documentElement]) : new Y([mt(t)], vn);
}
const bn = [
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
function $n(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function Sn(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function kn(t) {
  return Sn(t) > 165;
}
function Mn(t) {
  return kn(g.color(t)) ? "black" : "white";
}
function tt(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), s = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${s}`;
}
function I(t, e) {
  return "translate(" + t + "," + e + ")";
}
function et(t, e) {
  An(`g.task.${t}`).each(function(n) {
    g.select(this).style("display", e);
  });
}
function Cn() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function Tn(t, e) {
  let s = t.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
  if (s) {
    let r = parseFloat(s[1]), i = parseFloat(s[2]);
    i += e, t.setAttribute("transform", `translate(${r},${i})`);
  }
}
function nt(t, e, n) {
  const r = g.select(t).attr("class");
  let i = !1;
  e.selectAll("g.row").each(function(a) {
    const c = g.select(this).attr("class");
    c == r ? i = !0 : i && (Tn(this, n), En(c.split(" ")[1], n));
  });
}
function En(t, e) {
  document.querySelectorAll(`g.task.${t} rect`).forEach(function(r) {
    let a = parseFloat(r.getAttribute("y")) + e;
    r.setAttribute("y", a);
  }), document.querySelectorAll(`g.task.${t} text`).forEach(function(r) {
    let a = parseFloat(r.getAttribute("y")) + e;
    r.setAttribute("y", a);
  });
}
function rt(t, e, n) {
  const r = g.select(t).attr("class"), i = [];
  let a = !1, l = !1;
  return e.selectAll("g.row").each(function(c) {
    const u = g.select(this).attr("class");
    u == r ? a = !0 : a && u.split(" ")[2] == "timelineheader" ? l = !0 : a && !l && i.push(u.split(" ")[1]);
  }), console.log(r.split(" ")[1]), n == "block" ? (et(r.split(" ")[1], "none"), console.log("You pressed plus")) : (console.log("You pressed minus"), et(r.split(" ")[1], "block")), i.forEach(function(c) {
    document.querySelectorAll(`.${c}`).forEach(function(u) {
      u.style.display = n;
    });
  }), i.length * 38;
}
function st(t) {
  const e = document.querySelector('path[stroke-width="1.75"]');
  if (e) {
    let s = e.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/);
    if (s) {
      let r = parseFloat(s[1]), i = parseFloat(s[2]), l = parseFloat(s[3]) + t;
      e.setAttribute("d", `M${r},${i}V${l}`);
    }
  } else
    console.error('Path with stroke-width="1.75" not found.');
}
function it(t) {
  const e = document.querySelector("g.x.axis.bottom-axis");
  if (e) {
    let s = e.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
    if (s) {
      let r = parseFloat(s[1]), a = parseFloat(s[2]) + t;
      e.setAttribute("transform", `translate(${r},${a})`);
    }
  } else
    console.error("x axis bottom-axis not found.");
}
function Nn() {
  let t = bn, e = 5, n = 2, s = !1, r = !1, i, a, l = 0, c = W(0), o = W(1), u = W(2), p = W(3);
  function k(m, _) {
    const y = m.select("text"), b = m.select("rect"), d = b.attr("width") - 2 * e, h = o(_);
    y.text(h);
    let f = y.node().getComputedTextLength();
    if (f > d) {
      const v = d < 0 ? 0 : d / f, $ = Math.floor(h.length * v);
      y.text($ > 2 ? h.slice(0, $ - 2) + "…" : "");
    }
  }
  function S(m, _, y) {
    const b = m.select("text").node(), d = b.getBBox(), h = y.scale().domain().indexOf(c(_)), f = y.colorscale()(h), v = m.selectAll("rect.bckg").data([_]).join("rect").attr("class", "bckg").attr("fill", f).attr("x", d.x - e + n).attr("y", d.y - 2).attr("width", d.width + e - n).attr("height", d.height);
    m.node().insertBefore(v.node(), b);
  }
  function M(m, _) {
    m.each(function(y, b) {
      const d = g.select(this.parentNode);
      p(y) - u(y) ? k(d, y) : S(d, y, _);
    });
  }
  function E(m) {
    return function(_, y) {
      g.active(this).tween("text", function() {
        return function(b) {
          M(g.select(this), m);
        };
      });
    };
  }
  function A(m) {
    const _ = m.datum(), y = new Set(g.map(_, c)), b = new ot(T), d = g.scaleOrdinal(t);
    i = i || [g.min(_, u), g.max(_, p)], r && (i = g.extent(i.concat(/* @__PURE__ */ new Date()))), m.each(function(h) {
      const f = a || this.getBoundingClientRect().width, v = y.size * ($n(this) + 4 * e), $ = g.scaleBand().domain(y).range([0, v]), w = g.scaleTime().domain(i), C = (s ? Yt : Nt)($).width(f), F = g.select(this).selectAll("svg").data([1]).join("svg");
      F.attr("class", "timeline").attr("width", f).attr("height", v + 40);
      const D = F.append("g").attr("transform", "translate(0,20)"), N = D.append("g").attr("class", "y axis").call(C);
      N.selectAll("text").attr("text-anchor", function(x) {
        return x.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(x) {
        return x.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(x) {
        return x.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(x, B) {
        const P = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(P, "_blank");
      }), N.selectAll("g.row").each(function(x) {
        const B = g.select(this).datum();
        g.select(this).classed(g.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), B.startsWith(" •") && g.select(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), N.selectAll("g.row.timelineheader text").on("click", function(x, B) {
        const z = g.select(this).text();
        if (z === "+") {
          let R = rt(this.parentNode, N, "block");
          nt(this.parentNode, N, R), st(R), it(R), g.select(this).text() === "+" ? g.select(this).text("-").style("font-size", "30px") : g.select(this).text("+");
        } else if (z === "-") {
          let R = rt(this.parentNode, N, "none");
          nt(this.parentNode, N, -R), st(-R), it(-R), g.select(this).text() === "-" ? g.select(this).text("+").style("font-size", "20px") : g.select(this).text("-");
        } else {
          const G = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
          window.open(G, "_blank");
        }
      });
      let H = C.range();
      w.range([H[0] + e, H[1] - e]).clamp(!0);
      const L = g.axisBottom(w), O = D.append("g").attr("class", "x axis").attr("transform", I(0, 0)).call(L);
      O.selectAll(".tick text").attr("dy", "-1.5em"), O.selectAll(".tick line").attr("y2", "-5");
      const $t = g.axisBottom(w);
      F.append("g").attr("class", "x axis bottom-axis").attr("transform", I(0, v + 20)).call($t).selectAll(".tick line").attr("y2", "5"), N.on("offset", () => {
        H = C.range(), w.range([H[0] + e, H[1] - e]).clamp(!0), L.ticks(Math.min((H[1] - H[0]) / 70, 10)), O.call(L), q.attr("transform", (x) => I(w(u(x)), $(c(x)))).selectAll("rect").attr("width", (x) => w(p(x)) - w(u(x)) || n).call((x) => M(x, C)), N.call(C.draw_ticks, w.ticks().map(w));
      }), O.select(".domain").remove(), O.selectAll(".tick line").attr("stroke", "#AAA");
      const St = w.ticks().map(w);
      N.call(C.draw_ticks, St);
      let q = D.selectAll("g.task").data(h);
      q.exit().remove();
      const X = q.enter().append("g").classed("task", !0);
      X.each(function(x) {
        const B = c(x).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        g.select(this).classed(B, !0);
      }).append("rect").style("opacity", 1).attr("y", e).style("cursor", "pointer").attr("height", $.bandwidth() - 2 * e).on("mouseover", b.show).on("mouseout", b.hide).on("click", function(x, B) {
        var z = String(B[1]), R = z.replace(" ", "%20"), P = B[2], G = tt(P), kt = B[3], Mt = tt(kt), Ct = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + R + "%22%20%2Bdate_when%3A%5B" + G + "%20TO%20" + Mt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(Ct, "_blank");
      }).style("fill", Z(o, d)), X.append("text").attr("text-anchor", "start").attr("fill", (x) => p(x) - u(x) ? Z(o, d, Mn)(x) : "black").attr("pointer-events", "none").attr("dx", e).attr("y", $.bandwidth() / 2).attr("dy", "0.32em").text(o), q = q.merge(X), q.attr("transform", (x) => I(H[0], $(c(x)))).selectAll("rect").attr("width", 0), q.transition().duration(l).attr("transform", (x) => I(w(u(x)), $(c(x)))).selectAll("rect").attr("width", (x) => w(p(x)) - w(u(x)) || n).on("start", E(C)), r && D.append("path").attr("stroke", "red").attr("d", "M" + w(/* @__PURE__ */ new Date()) + ",0.5V" + v);
    }), Cn();
  }
  return A.dates = function(m) {
    return arguments.length ? (i = m, A) : i;
  }, A.width = function(m) {
    return arguments.length ? (a = m, A) : a;
  }, A.today = function(m) {
    return arguments.length ? (r = m, A) : r;
  }, A.colors = function(m) {
    return arguments.length ? (t = m, A) : t;
  }, A.padding = function(m) {
    return arguments.length ? (e = m, A) : e;
  }, A.milestone_width = function(m) {
    return arguments.length ? (n = m, A) : n;
  }, A.reversed = function(m) {
    return arguments.length ? (s = m, A) : s;
  }, A.duration = function(m) {
    return arguments.length ? (l = m, A) : l;
  }, A;
  function T(m, _) {
    const y = Z(g.isoParse, g.timeFormat("%Y-%m-%d")), b = `<b>${o(_)}</b><hr style="margin: 2px 0 2px 0">${y(u(_))}`, d = p(_) - u(_) ? ` - ${y(p(_))}<br>${qt(u(_), p(_))}` : "";
    return b + d;
  }
}
export {
  qt as durationFormat,
  Nn as timeline,
  Nt as timelineAxisLeft,
  Yt as timelineAxisRight,
  ot as tooltip
};
