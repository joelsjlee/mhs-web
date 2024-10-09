import * as x from "d3";
export * from "d3";
import I from "dayjs";
const at = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function J(r) {
  x.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(at);
  const s = x.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return s.show = function(h) {
    s.transition().duration(100).style("opacity", 0.95), s.html(r.apply(null, arguments)).style("left", h.pageX + "px").style("top", h.pageY - 28 + "px");
  }, s.hide = function(h) {
    s.transition().duration(100).style("opacity", 0);
  }, s;
}
function ct(r) {
  return x.max(r.nodes().map((s) => s.getComputedTextLength()));
}
function ut(r) {
  return function(s) {
    return s.length > r ? s.slice(0, r - 1) + "…" : s;
  };
}
const z = 1, lt = 2;
function X(r, s) {
  let h = ["#FFF", "#EEE"], g = x.scaleOrdinal(h), v = 5, $, B = "#AAA", j = 40, M = 3e3, i;
  function o(c) {
    let A = s.domain(), D = J((n) => n), Y = x.scaleOrdinal(h), T = x.scaleOrdinal(h.reverse()), y = ut(j), k = c.selectAll(".row").data(A, s).order(), a = k.enter().append("g").attr("class", "row"), f = k.exit(), l = k.select("text");
    k = k.merge(a).attr("transform", (n) => "translate(0," + s(n) + ")"), f.remove(), a.append("rect").attr("y", 0.5).attr("width", M).attr("height", s.bandwidth()).attr("stroke", B).attr("stroke-width", 0.75).attr("fill", Y), a.append("path").attr("stroke", T), l = l.merge(
      a.append("text").attr("y", s.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(n, e) {
        x.select(this).text() != e && D.show(e);
      }).on("mouseout", D.hide)
    ).text(y), i === void 0 && (i = ct(l) + 2 * v, i = r === z ? M - i : i), $ = r === z ? [0, i] : [i, M], l.attr("text-anchor", r === z ? "start" : "end").attr("dx", r === z ? v : -v).attr("x", i);
    const w = function(n, e) {
      i = Math.max(10, Math.min(M - 10, i + n.dx)), x.select(this).attr("d", "M" + i + ",0.5V" + s.range()[1]), l.attr("x", i), $ = r === z ? [0, i] : [i, M], c.dispatch("offset", { detail: { offset: i } });
    };
    c.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", B).attr("stroke-width", 1.75).attr("d", "M" + (i + 0.5) + ",0.5V" + s.range()[1]).style("cursor", "ew-resize").call(x.drag().on("drag", w));
  }
  return o.draw_ticks = function(c, A) {
    c.selectAll(".row").select("path").attr("d", A.map((D) => "M" + D + ",1v" + (s.bandwidth() - 1)).join(""));
  }, o.scale = function(c) {
    return arguments.length ? (s = c, o) : s;
  }, o.width = function(c) {
    return arguments.length ? (M = c, o) : M;
  }, o.colors = function(c) {
    return arguments.length ? (h = c, o) : h;
  }, o.padding = function(c) {
    return arguments.length ? (v = c, o) : v;
  }, o.range = function(c) {
    return arguments.length ? ($ = c, o) : $;
  }, o.trim = function(c) {
    return arguments.length ? (j = c, o) : j;
  }, o.offset = function(c) {
    return arguments.length ? (i = c, o) : i;
  }, o.colorscale = function(c) {
    return arguments.length ? (g = c, o) : g;
  }, o;
}
function dt(r) {
  return X(lt, r);
}
function ht(r) {
  return X(z, r);
}
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var U = { exports: {} };
(function(r, s) {
  (function(h, g) {
    r.exports = g();
  })(K, function() {
    var h, g, v = 1e3, $ = 6e4, B = 36e5, j = 864e5, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = 31536e6, o = 2628e6, c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, A = { years: i, months: o, days: j, hours: B, minutes: $, seconds: v, milliseconds: 1, weeks: 6048e5 }, D = function(n) {
      return n instanceof l;
    }, Y = function(n, e, t) {
      return new l(n, t, e.$l);
    }, T = function(n) {
      return g.p(n) + "s";
    }, y = function(n) {
      return n < 0;
    }, k = function(n) {
      return y(n) ? Math.ceil(n) : Math.floor(n);
    }, a = function(n) {
      return Math.abs(n);
    }, f = function(n, e) {
      return n ? y(n) ? { negative: !0, format: "" + a(n) + e } : { negative: !1, format: "" + n + e } : { negative: !1, format: "" };
    }, l = function() {
      function n(t, d, m) {
        var u = this;
        if (this.$d = {}, this.$l = m, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), d) return Y(t * A[T(d)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(S) {
          u.$d[T(S)] = t[S];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var b = t.match(c);
          if (b) {
            var _ = b.slice(2).map(function(S) {
              return S != null ? Number(S) : 0;
            });
            return this.$d.years = _[0], this.$d.months = _[1], this.$d.weeks = _[2], this.$d.days = _[3], this.$d.hours = _[4], this.$d.minutes = _[5], this.$d.seconds = _[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var e = n.prototype;
      return e.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(d, m) {
          return d + (t.$d[m] || 0) * A[m];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = k(t / i), t %= i, this.$d.months = k(t / o), t %= o, this.$d.days = k(t / j), t %= j, this.$d.hours = k(t / B), t %= B, this.$d.minutes = k(t / $), t %= $, this.$d.seconds = k(t / v), t %= v, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = f(this.$d.years, "Y"), d = f(this.$d.months, "M"), m = +this.$d.days || 0;
        this.$d.weeks && (m += 7 * this.$d.weeks);
        var u = f(m, "D"), b = f(this.$d.hours, "H"), _ = f(this.$d.minutes, "M"), S = this.$d.seconds || 0;
        this.$d.milliseconds && (S += this.$d.milliseconds / 1e3, S = Math.round(1e3 * S) / 1e3);
        var O = f(S, "S"), C = t.negative || d.negative || u.negative || b.negative || _.negative || O.negative, P = b.format || _.format || O.format ? "T" : "", E = (C ? "-" : "") + "P" + t.format + d.format + u.format + P + b.format + _.format + O.format;
        return E === "P" || E === "-P" ? "P0D" : E;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var d = t || "YYYY-MM-DDTHH:mm:ss", m = { Y: this.$d.years, YY: g.s(this.$d.years, 2, "0"), YYYY: g.s(this.$d.years, 4, "0"), M: this.$d.months, MM: g.s(this.$d.months, 2, "0"), D: this.$d.days, DD: g.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: g.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: g.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: g.s(this.$d.seconds, 2, "0"), SSS: g.s(this.$d.milliseconds, 3, "0") };
        return d.replace(M, function(u, b) {
          return b || String(m[u]);
        });
      }, e.as = function(t) {
        return this.$ms / A[T(t)];
      }, e.get = function(t) {
        var d = this.$ms, m = T(t);
        return m === "milliseconds" ? d %= 1e3 : d = m === "weeks" ? k(d / A[m]) : this.$d[m], d || 0;
      }, e.add = function(t, d, m) {
        var u;
        return u = d ? t * A[T(d)] : D(t) ? t.$ms : Y(t, this).$ms, Y(this.$ms + u * (m ? -1 : 1), this);
      }, e.subtract = function(t, d) {
        return this.add(t, d, !0);
      }, e.locale = function(t) {
        var d = this.clone();
        return d.$l = t, d;
      }, e.clone = function() {
        return Y(this.$ms, this);
      }, e.humanize = function(t) {
        return h().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
      }, e.valueOf = function() {
        return this.asMilliseconds();
      }, e.milliseconds = function() {
        return this.get("milliseconds");
      }, e.asMilliseconds = function() {
        return this.as("milliseconds");
      }, e.seconds = function() {
        return this.get("seconds");
      }, e.asSeconds = function() {
        return this.as("seconds");
      }, e.minutes = function() {
        return this.get("minutes");
      }, e.asMinutes = function() {
        return this.as("minutes");
      }, e.hours = function() {
        return this.get("hours");
      }, e.asHours = function() {
        return this.as("hours");
      }, e.days = function() {
        return this.get("days");
      }, e.asDays = function() {
        return this.as("days");
      }, e.weeks = function() {
        return this.get("weeks");
      }, e.asWeeks = function() {
        return this.as("weeks");
      }, e.months = function() {
        return this.get("months");
      }, e.asMonths = function() {
        return this.as("months");
      }, e.years = function() {
        return this.get("years");
      }, e.asYears = function() {
        return this.as("years");
      }, n;
    }(), w = function(n, e, t) {
      return n.add(e.years() * t, "y").add(e.months() * t, "M").add(e.days() * t, "d").add(e.hours() * t, "h").add(e.minutes() * t, "m").add(e.seconds() * t, "s").add(e.milliseconds() * t, "ms");
    };
    return function(n, e, t) {
      h = t, g = t().$utils(), t.duration = function(u, b) {
        var _ = t.locale();
        return Y(u, { $l: _ }, b);
      }, t.isDuration = D;
      var d = e.prototype.add, m = e.prototype.subtract;
      e.prototype.add = function(u, b) {
        return D(u) ? w(this, u, 1) : d.bind(this)(u, b);
      }, e.prototype.subtract = function(u, b) {
        return D(u) ? w(this, u, -1) : m.bind(this)(u, b);
      };
    };
  });
})(U);
var ft = U.exports;
const mt = /* @__PURE__ */ Q(ft);
var tt = { exports: {} };
(function(r, s) {
  (function(h, g) {
    r.exports = g();
  })(K, function() {
    return function(h, g, v) {
      h = h || {};
      var $ = g.prototype, B = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function j(i, o, c, A) {
        return $.fromToBase(i, o, c, A);
      }
      v.en.relativeTime = B, $.fromToBase = function(i, o, c, A, D) {
        for (var Y, T, y, k = c.$locale().relativeTime || B, a = h.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], f = a.length, l = 0; l < f; l += 1) {
          var w = a[l];
          w.d && (Y = A ? v(i).diff(c, w.d, !0) : c.diff(i, w.d, !0));
          var n = (h.rounding || Math.round)(Math.abs(Y));
          if (y = Y > 0, n <= w.r || !w.r) {
            n <= 1 && l > 0 && (w = a[l - 1]);
            var e = k[w.l];
            D && (n = D("" + n)), T = typeof e == "string" ? e.replace("%d", n) : e(n, o, w.l, y);
            break;
          }
        }
        if (o) return T;
        var t = y ? k.future : k.past;
        return typeof t == "function" ? t(T) : t.replace("%s", T);
      }, $.to = function(i, o) {
        return j(i, o, this, !0);
      }, $.from = function(i, o) {
        return j(i, o, this);
      };
      var M = function(i) {
        return i.$u ? v.utc() : v();
      };
      $.toNow = function(i) {
        return this.to(M(this), i);
      }, $.fromNow = function(i) {
        return this.from(M(this), i);
      };
    };
  });
})(tt);
var pt = tt.exports;
const gt = /* @__PURE__ */ Q(pt);
I.extend(mt);
I.extend(gt);
function xt(r, s) {
  return I.duration(s - r).humanize();
}
function L() {
  const r = Array.prototype.slice.call(arguments, 0);
  return function(s) {
    return r.reduce((h, g) => g(h), s);
  };
}
function G(r) {
  return function(s) {
    return r === void 0 ? s : s[r];
  };
}
const yt = [
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
function wt(r) {
  const s = window.getComputedStyle(r, null).getPropertyValue("font-size");
  return parseFloat(s);
}
function $t(r) {
  return r.r * 0.299 + r.g * 0.587 + r.b * 0.114;
}
function bt(r) {
  return $t(r) > 165;
}
function vt(r) {
  return bt(x.color(r)) ? "black" : "white";
}
function Z(r) {
  const s = r.getFullYear(), h = String(r.getMonth() + 1).padStart(2, "0"), g = String(r.getDate()).padStart(2, "0");
  return `${s}${h}${g}`;
}
function W(r, s) {
  return "translate(" + r + "," + s + ")";
}
function _t() {
  let r = yt, s = 5, h = 2, g = !1, v = !1, $, B, j = 0, M = G(0), i = G(1), o = G(2), c = G(3);
  function A(a, f) {
    const l = a.select("text"), w = a.select("rect"), n = w.attr("width") - 2 * s, e = i(f);
    l.text(e);
    let t = l.node().getComputedTextLength();
    if (t > n) {
      const d = n < 0 ? 0 : n / t, m = Math.floor(e.length * d);
      l.text(m > 2 ? e.slice(0, m - 2) + "…" : "");
    }
  }
  function D(a, f, l) {
    const w = a.select("text").node(), n = w.getBBox(), e = l.scale().domain().indexOf(M(f)), t = l.colorscale()(e), d = a.selectAll("rect.bckg").data([f]).join("rect").attr("class", "bckg").attr("fill", t).attr("x", n.x - s + h).attr("y", n.y - 2).attr("width", n.width + s - h).attr("height", n.height);
    a.node().insertBefore(d.node(), w);
  }
  function Y(a, f) {
    a.each(function(l, w) {
      const n = x.select(this.parentNode);
      c(l) - o(l) ? A(n, l) : D(n, l, f);
    });
  }
  function T(a) {
    return function(f, l) {
      x.active(this).tween("text", function() {
        return function(w) {
          Y(x.select(this), a);
        };
      });
    };
  }
  function y(a) {
    const f = a.datum(), l = new Set(x.map(f, M)), w = new J(k), n = x.scaleOrdinal(r);
    $ = $ || [x.min(f, o), x.max(f, c)], v && ($ = x.extent($.concat(/* @__PURE__ */ new Date()))), a.each(function(e) {
      const t = B || this.getBoundingClientRect().width, d = l.size * (wt(this) + 4 * s), m = x.scaleBand().domain(l).range([0, d]), u = x.scaleTime().domain($), b = (g ? ht : dt)(m).width(t), _ = x.select(this).selectAll("svg").data([1]).join("svg");
      _.attr("class", "timeline").attr("width", t).attr("height", d + 40);
      const S = _.append("g").attr("transform", "translate(0,20)"), O = S.append("g").attr("class", "y axis").call(b);
      O.selectAll("text").attr("text-anchor", function(p) {
        return p.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(p) {
        return p.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(p) {
        return p.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(p, H) {
        const V = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${H.replace(/--/g, "").replace(" ", "%20")}%22`;
        window.open(V, "_blank");
      }), O.selectAll("g.row").each(function(p) {
        const N = x.select(this).select("text").text();
        N.startsWith(" •") && x.select(this).classed("timelineheader", !0).classed(N.replace(/^ • /, "").replace("  ", "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0).append("text").attr("x", 320.5).attr("y", 25).text("+").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "20px").attr("fill", "black");
      });
      let C = b.range();
      u.range([C[0] + s, C[1] - s]).clamp(!0);
      const P = x.axisBottom(u), E = S.append("g").attr("class", "x axis").attr("transform", W(0, 0)).call(P);
      E.selectAll(".tick text").attr("dy", "-1.5em"), E.selectAll(".tick line").attr("y2", "-5");
      const et = x.axisBottom(u);
      _.append("g").attr("class", "x axis bottom-axis").attr("transform", W(0, d + 20)).call(et).selectAll(".tick line").attr("y2", "5"), O.on("offset", () => {
        C = b.range(), u.range([C[0] + s, C[1] - s]).clamp(!0), P.ticks(Math.min((C[1] - C[0]) / 70, 10)), E.call(P), F.attr("transform", (p) => W(u(o(p)), m(M(p)))).selectAll("rect").attr("width", (p) => u(c(p)) - u(o(p)) || h).call((p) => Y(p, b)), O.call(b.draw_ticks, u.ticks().map(u));
      }), E.select(".domain").remove(), E.selectAll(".tick line").attr("stroke", "#AAA");
      const nt = u.ticks().map(u);
      O.call(b.draw_ticks, nt);
      let F = S.selectAll("g.task").data(e);
      F.exit().remove();
      const q = F.enter().append("g").classed("task", !0);
      q.append("rect").style("opacity", 0.7).attr("y", s).style("cursor", "pointer").attr("height", m.bandwidth() - 2 * s).on("mouseover", w.show).on("mouseout", w.hide).on("click", function(p, H) {
        var N = String(H[1]), R = N.replace(" ", "%20"), V = H[2], rt = Z(V), st = H[3], it = Z(st), ot = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + R + "%22%20%2Bdate_when%3A%5B" + rt + "%20TO%20" + it + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(ot, "_blank");
      }).style("fill", L(i, n)), q.append("text").attr("text-anchor", "start").attr("fill", (p) => c(p) - o(p) ? L(i, n, vt)(p) : "black").attr("pointer-events", "none").attr("dx", s).attr("y", m.bandwidth() / 2).attr("dy", "0.32em").text(i), F = F.merge(q), F.attr("transform", (p) => W(C[0], m(M(p)))).selectAll("rect").attr("width", 0), F.transition().duration(j).attr("transform", (p) => W(u(o(p)), m(M(p)))).selectAll("rect").attr("width", (p) => u(c(p)) - u(o(p)) || h).on("start", T(b)), v && S.append("path").attr("stroke", "red").attr("d", "M" + u(/* @__PURE__ */ new Date()) + ",0.5V" + d);
    });
  }
  return y.dates = function(a) {
    return arguments.length ? ($ = a, y) : $;
  }, y.width = function(a) {
    return arguments.length ? (B = a, y) : B;
  }, y.today = function(a) {
    return arguments.length ? (v = a, y) : v;
  }, y.colors = function(a) {
    return arguments.length ? (r = a, y) : r;
  }, y.padding = function(a) {
    return arguments.length ? (s = a, y) : s;
  }, y.milestone_width = function(a) {
    return arguments.length ? (h = a, y) : h;
  }, y.reversed = function(a) {
    return arguments.length ? (g = a, y) : g;
  }, y.duration = function(a) {
    return arguments.length ? (j = a, y) : j;
  }, y;
  function k(a, f) {
    const l = L(x.isoParse, x.timeFormat("%Y-%m-%d")), w = `<b>${i(f)}</b><hr style="margin: 2px 0 2px 0">${l(o(f))}`, n = c(f) - o(f) ? ` - ${l(c(f))}<br>${xt(o(f), c(f))}` : "";
    return w + n;
  }
}
export {
  xt as durationFormat,
  _t as timeline,
  dt as timelineAxisLeft,
  ht as timelineAxisRight,
  J as tooltip
};
