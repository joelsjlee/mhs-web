import * as x from "d3";
export * from "d3";
import q from "dayjs";
const at = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function R(r) {
  x.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(at);
  const s = x.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return s.show = function(h) {
    s.transition().duration(100).style("opacity", 0.95), s.html(r.apply(null, arguments)).style("left", h.pageX + "px").style("top", h.pageY - 28 + "px");
  }, s.hide = function(h) {
    s.transition().duration(100).style("opacity", 0);
  }, s;
}
function ut(r) {
  return x.max(r.nodes().map((s) => s.getComputedTextLength()));
}
function ct(r) {
  return function(s) {
    return s.length > r ? s.slice(0, r - 1) + "…" : s;
  };
}
const H = 1, dt = 2;
function W(r, s) {
  let h = ["#FFF", "#EEE"], g = x.scaleOrdinal(h), b = 5, w, T = "#AAA", D = 40, k = 3e3, i;
  function o(u) {
    let A = s.domain(), Y = R((n) => n), j = x.scaleOrdinal(h), B = x.scaleOrdinal(h.reverse()), p = ct(D), M = u.selectAll(".row").data(A, s).order(), a = M.enter().append("g").attr("class", "row"), f = M.exit(), d = M.select("text");
    M = M.merge(a).attr("transform", (n) => "translate(0," + s(n) + ")"), f.remove(), a.append("rect").attr("y", 0.5).attr("width", k).attr("height", s.bandwidth()).attr("stroke", T).attr("stroke-width", 0.75).attr("fill", j), a.append("path").attr("stroke", B), d = d.merge(
      a.append("text").attr("y", s.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(n, e) {
        x.select(this).text() != e && Y.show(e);
      }).on("mouseout", Y.hide)
    ).text(p), i === void 0 && (i = ut(d) + 2 * b, i = r === H ? k - i : i), w = r === H ? [0, i] : [i, k], d.attr("text-anchor", r === H ? "start" : "end").attr("dx", r === H ? b : -b).attr("x", i);
    const y = function(n, e) {
      i = Math.max(10, Math.min(k - 10, i + n.dx)), x.select(this).attr("d", "M" + i + ",0.5V" + s.range()[1]), d.attr("x", i), w = r === H ? [0, i] : [i, k], u.dispatch("offset", { detail: { offset: i } });
    };
    u.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", T).attr("stroke-width", 1.75).attr("d", "M" + (i + 0.5) + ",0.5V" + s.range()[1]).style("cursor", "ew-resize").call(x.drag().on("drag", y));
  }
  return o.draw_ticks = function(u, A) {
    u.selectAll(".row").select("path").attr("d", A.map((Y) => "M" + Y + ",1v" + (s.bandwidth() - 1)).join(""));
  }, o.scale = function(u) {
    return arguments.length ? (s = u, o) : s;
  }, o.width = function(u) {
    return arguments.length ? (k = u, o) : k;
  }, o.colors = function(u) {
    return arguments.length ? (h = u, o) : h;
  }, o.padding = function(u) {
    return arguments.length ? (b = u, o) : b;
  }, o.range = function(u) {
    return arguments.length ? (w = u, o) : w;
  }, o.trim = function(u) {
    return arguments.length ? (D = u, o) : D;
  }, o.offset = function(u) {
    return arguments.length ? (i = u, o) : i;
  }, o.colorscale = function(u) {
    return arguments.length ? (g = u, o) : g;
  }, o;
}
function lt(r) {
  return W(dt, r);
}
function ht(r) {
  return W(H, r);
}
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Z = { exports: {} };
(function(r, s) {
  (function(h, g) {
    r.exports = g();
  })(J, function() {
    var h, g, b = 1e3, w = 6e4, T = 36e5, D = 864e5, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = 31536e6, o = 2628e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, A = { years: i, months: o, days: D, hours: T, minutes: w, seconds: b, milliseconds: 1, weeks: 6048e5 }, Y = function(n) {
      return n instanceof d;
    }, j = function(n, e, t) {
      return new d(n, t, e.$l);
    }, B = function(n) {
      return g.p(n) + "s";
    }, p = function(n) {
      return n < 0;
    }, M = function(n) {
      return p(n) ? Math.ceil(n) : Math.floor(n);
    }, a = function(n) {
      return Math.abs(n);
    }, f = function(n, e) {
      return n ? p(n) ? { negative: !0, format: "" + a(n) + e } : { negative: !1, format: "" + n + e } : { negative: !1, format: "" };
    }, d = function() {
      function n(t, l, m) {
        var c = this;
        if (this.$d = {}, this.$l = m, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), l) return j(t * A[B(l)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(S) {
          c.$d[B(S)] = t[S];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var $ = t.match(u);
          if ($) {
            var _ = $.slice(2).map(function(S) {
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
        this.$ms = Object.keys(this.$d).reduce(function(l, m) {
          return l + (t.$d[m] || 0) * A[m];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = M(t / i), t %= i, this.$d.months = M(t / o), t %= o, this.$d.days = M(t / D), t %= D, this.$d.hours = M(t / T), t %= T, this.$d.minutes = M(t / w), t %= w, this.$d.seconds = M(t / b), t %= b, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = f(this.$d.years, "Y"), l = f(this.$d.months, "M"), m = +this.$d.days || 0;
        this.$d.weeks && (m += 7 * this.$d.weeks);
        var c = f(m, "D"), $ = f(this.$d.hours, "H"), _ = f(this.$d.minutes, "M"), S = this.$d.seconds || 0;
        this.$d.milliseconds && (S += this.$d.milliseconds / 1e3, S = Math.round(1e3 * S) / 1e3);
        var F = f(S, "S"), O = t.negative || l.negative || c.negative || $.negative || _.negative || F.negative, P = $.format || _.format || F.format ? "T" : "", C = (O ? "-" : "") + "P" + t.format + l.format + c.format + P + $.format + _.format + F.format;
        return C === "P" || C === "-P" ? "P0D" : C;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var l = t || "YYYY-MM-DDTHH:mm:ss", m = { Y: this.$d.years, YY: g.s(this.$d.years, 2, "0"), YYYY: g.s(this.$d.years, 4, "0"), M: this.$d.months, MM: g.s(this.$d.months, 2, "0"), D: this.$d.days, DD: g.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: g.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: g.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: g.s(this.$d.seconds, 2, "0"), SSS: g.s(this.$d.milliseconds, 3, "0") };
        return l.replace(k, function(c, $) {
          return $ || String(m[c]);
        });
      }, e.as = function(t) {
        return this.$ms / A[B(t)];
      }, e.get = function(t) {
        var l = this.$ms, m = B(t);
        return m === "milliseconds" ? l %= 1e3 : l = m === "weeks" ? M(l / A[m]) : this.$d[m], l || 0;
      }, e.add = function(t, l, m) {
        var c;
        return c = l ? t * A[B(l)] : Y(t) ? t.$ms : j(t, this).$ms, j(this.$ms + c * (m ? -1 : 1), this);
      }, e.subtract = function(t, l) {
        return this.add(t, l, !0);
      }, e.locale = function(t) {
        var l = this.clone();
        return l.$l = t, l;
      }, e.clone = function() {
        return j(this.$ms, this);
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
    }(), y = function(n, e, t) {
      return n.add(e.years() * t, "y").add(e.months() * t, "M").add(e.days() * t, "d").add(e.hours() * t, "h").add(e.minutes() * t, "m").add(e.seconds() * t, "s").add(e.milliseconds() * t, "ms");
    };
    return function(n, e, t) {
      h = t, g = t().$utils(), t.duration = function(c, $) {
        var _ = t.locale();
        return j(c, { $l: _ }, $);
      }, t.isDuration = Y;
      var l = e.prototype.add, m = e.prototype.subtract;
      e.prototype.add = function(c, $) {
        return Y(c) ? y(this, c, 1) : l.bind(this)(c, $);
      }, e.prototype.subtract = function(c, $) {
        return Y(c) ? y(this, c, -1) : m.bind(this)(c, $);
      };
    };
  });
})(Z);
var ft = Z.exports;
const mt = /* @__PURE__ */ X(ft);
var K = { exports: {} };
(function(r, s) {
  (function(h, g) {
    r.exports = g();
  })(J, function() {
    return function(h, g, b) {
      h = h || {};
      var w = g.prototype, T = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function D(i, o, u, A) {
        return w.fromToBase(i, o, u, A);
      }
      b.en.relativeTime = T, w.fromToBase = function(i, o, u, A, Y) {
        for (var j, B, p, M = u.$locale().relativeTime || T, a = h.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], f = a.length, d = 0; d < f; d += 1) {
          var y = a[d];
          y.d && (j = A ? b(i).diff(u, y.d, !0) : u.diff(i, y.d, !0));
          var n = (h.rounding || Math.round)(Math.abs(j));
          if (p = j > 0, n <= y.r || !y.r) {
            n <= 1 && d > 0 && (y = a[d - 1]);
            var e = M[y.l];
            Y && (n = Y("" + n)), B = typeof e == "string" ? e.replace("%d", n) : e(n, o, y.l, p);
            break;
          }
        }
        if (o) return B;
        var t = p ? M.future : M.past;
        return typeof t == "function" ? t(B) : t.replace("%s", B);
      }, w.to = function(i, o) {
        return D(i, o, this, !0);
      }, w.from = function(i, o) {
        return D(i, o, this);
      };
      var k = function(i) {
        return i.$u ? b.utc() : b();
      };
      w.toNow = function(i) {
        return this.to(k(this), i);
      }, w.fromNow = function(i) {
        return this.from(k(this), i);
      };
    };
  });
})(K);
var gt = K.exports;
const pt = /* @__PURE__ */ X(gt);
q.extend(mt);
q.extend(pt);
function yt(r, s) {
  return q.duration(s - r).humanize();
}
function L() {
  const r = Array.prototype.slice.call(arguments, 0);
  return function(s) {
    return r.reduce((h, g) => g(h), s);
  };
}
function N(r) {
  return function(s) {
    return r === void 0 ? s : s[r];
  };
}
const xt = [
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
function vt(r) {
  return $t(r) > 165;
}
function bt(r) {
  return vt(x.color(r)) ? "black" : "white";
}
function I(r) {
  const s = r.getFullYear(), h = String(r.getMonth() + 1).padStart(2, "0"), g = String(r.getDate()).padStart(2, "0");
  return `${s}${h}${g}`;
}
function z(r, s) {
  return "translate(" + r + "," + s + ")";
}
function _t() {
  let r = xt, s = 5, h = 2, g = !1, b = !1, w, T, D = 0, k = N(0), i = N(1), o = N(2), u = N(3);
  function A(a, f) {
    const d = a.select("text"), y = a.select("rect"), n = y.attr("width") - 2 * s, e = i(f);
    d.text(e);
    let t = d.node().getComputedTextLength();
    if (t > n) {
      const l = n < 0 ? 0 : n / t, m = Math.floor(e.length * l);
      d.text(m > 2 ? e.slice(0, m - 2) + "…" : "");
    }
  }
  function Y(a, f, d) {
    const y = a.select("text").node(), n = y.getBBox(), e = d.scale().domain().indexOf(k(f)), t = d.colorscale()(e), l = a.selectAll("rect.bckg").data([f]).join("rect").attr("class", "bckg").attr("fill", t).attr("x", n.x - s + h).attr("y", n.y - 2).attr("width", n.width + s - h).attr("height", n.height);
    a.node().insertBefore(l.node(), y);
  }
  function j(a, f) {
    a.each(function(d, y) {
      const n = x.select(this.parentNode);
      u(d) - o(d) ? A(n, d) : Y(n, d, f);
    });
  }
  function B(a) {
    return function(f, d) {
      x.active(this).tween("text", function() {
        return function(y) {
          j(x.select(this), a);
        };
      });
    };
  }
  function p(a) {
    const f = a.datum(), d = new Set(x.map(f, k)), y = new R(M), n = x.scaleOrdinal(r);
    w = w || [x.min(f, o), x.max(f, u)], b && (w = x.extent(w.concat(/* @__PURE__ */ new Date()))), a.each(function(e) {
      const t = T || this.getBoundingClientRect().width, l = d.size * (wt(this) + 4 * s), m = x.scaleBand().domain(d).range([0, l]), c = x.scaleTime().domain(w), $ = (g ? ht : lt)(m).width(t), _ = x.select(this).selectAll("svg").data([1]).join("svg");
      _.attr("class", "timeline").attr("width", t).attr("height", l + 40);
      const S = _.append("g").attr("transform", "translate(0,20)"), F = S.append("g").attr("class", "y axis").call($);
      let O = $.range();
      c.range([O[0] + s, O[1] - s]).clamp(!0);
      const P = x.axisBottom(c), C = S.append("g").attr("class", "x axis").attr("transform", z(0, 0)).call(P);
      C.selectAll(".tick text").attr("dy", "-1.5em"), C.selectAll(".tick line").attr("y2", "-5");
      const Q = x.axisBottom(c);
      _.append("g").attr("class", "x axis bottom-axis").attr("transform", z(0, l + 20)).call(Q).selectAll(".tick line").attr("y2", "5"), F.on("offset", () => {
        O = $.range(), c.range([O[0] + s, O[1] - s]).clamp(!0), P.ticks(Math.min((O[1] - O[0]) / 70, 10)), C.call(P), E.attr("transform", (v) => z(c(o(v)), m(k(v)))).selectAll("rect").attr("width", (v) => c(u(v)) - c(o(v)) || h).call((v) => j(v, $)), F.call($.draw_ticks, c.ticks().map(c));
      }), C.select(".domain").remove(), C.selectAll(".tick line").attr("stroke", "#AAA");
      const U = c.ticks().map(c);
      F.call($.draw_ticks, U);
      let E = S.selectAll("g.task").data(e);
      E.exit().remove();
      const G = E.enter().append("g").classed("task", !0);
      G.append("rect").attr("y", s).attr("height", m.bandwidth() - 2 * s).on("mouseover", y.show).on("mouseout", y.hide).on("click", function(v, V) {
        var tt = String(V[1]), et = tt.replace(" ", "%20"), nt = V[2], rt = I(nt), st = V[3], it = I(st), ot = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + et + "%22%20%2Bdate_when%3A%5B" + rt + "%20TO%20" + it + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(ot, "_blank");
      }).style("fill", L(i, n)), G.append("text").attr("text-anchor", "start").attr("fill", (v) => u(v) - o(v) ? L(i, n, bt)(v) : "black").attr("pointer-events", "none").attr("dx", s).attr("y", m.bandwidth() / 2).attr("dy", "0.32em").text(i), E = E.merge(G), E.attr("transform", (v) => z(O[0], m(k(v)))).selectAll("rect").attr("width", 0), E.transition().duration(D).attr("transform", (v) => z(c(o(v)), m(k(v)))).selectAll("rect").attr("width", (v) => c(u(v)) - c(o(v)) || h).on("start", B($)), b && S.append("path").attr("stroke", "red").attr("d", "M" + c(/* @__PURE__ */ new Date()) + ",0.5V" + l);
    });
  }
  return p.dates = function(a) {
    return arguments.length ? (w = a, p) : w;
  }, p.width = function(a) {
    return arguments.length ? (T = a, p) : T;
  }, p.today = function(a) {
    return arguments.length ? (b = a, p) : b;
  }, p.colors = function(a) {
    return arguments.length ? (r = a, p) : r;
  }, p.padding = function(a) {
    return arguments.length ? (s = a, p) : s;
  }, p.milestone_width = function(a) {
    return arguments.length ? (h = a, p) : h;
  }, p.reversed = function(a) {
    return arguments.length ? (g = a, p) : g;
  }, p.duration = function(a) {
    return arguments.length ? (D = a, p) : D;
  }, p;
  function M(a, f) {
    const d = L(x.isoParse, x.timeFormat("%Y-%m-%d")), y = `<b>${i(f)}</b><hr style="margin: 2px 0 2px 0">${d(o(f))}`, n = u(f) - o(f) ? ` - ${d(u(f))}<br>${yt(o(f), u(f))}` : "";
    return y + n;
  }
}
export {
  yt as durationFormat,
  _t as timeline,
  lt as timelineAxisLeft,
  ht as timelineAxisRight,
  R as tooltip
};
