import * as x from "d3";
export * from "d3";
import I from "dayjs";
const at = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function X(r) {
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
const H = 1, lt = 2;
function Z(r, s) {
  let h = ["#FFF", "#EEE"], p = x.scaleOrdinal(h), b = 5, w, B = "#AAA", j = 40, M = 3e3, i;
  function o(c) {
    let A = s.domain(), D = X((n) => n), Y = x.scaleOrdinal(h), T = x.scaleOrdinal(h.reverse()), g = ut(j), k = c.selectAll(".row").data(A, s).order(), a = k.enter().append("g").attr("class", "row"), f = k.exit(), l = k.select("text");
    k = k.merge(a).attr("transform", (n) => "translate(0," + s(n) + ")"), f.remove(), a.append("rect").attr("y", 0.5).attr("width", M).attr("height", s.bandwidth()).attr("stroke", B).attr("stroke-width", 0.75).attr("fill", Y), a.append("path").attr("stroke", T), l = l.merge(
      a.append("text").attr("y", s.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(n, e) {
        x.select(this).text() != e && D.show(e);
      }).on("mouseout", D.hide)
    ).text(g), i === void 0 && (i = ct(l) + 2 * b, i = r === H ? M - i : i), w = r === H ? [0, i] : [i, M], l.attr("text-anchor", r === H ? "start" : "end").attr("dx", r === H ? b : -b).attr("x", i);
    const y = function(n, e) {
      i = Math.max(10, Math.min(M - 10, i + n.dx)), x.select(this).attr("d", "M" + i + ",0.5V" + s.range()[1]), l.attr("x", i), w = r === H ? [0, i] : [i, M], c.dispatch("offset", { detail: { offset: i } });
    };
    c.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", B).attr("stroke-width", 1.75).attr("d", "M" + (i + 0.5) + ",0.5V" + s.range()[1]).style("cursor", "ew-resize").call(x.drag().on("drag", y));
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
    return arguments.length ? (b = c, o) : b;
  }, o.range = function(c) {
    return arguments.length ? (w = c, o) : w;
  }, o.trim = function(c) {
    return arguments.length ? (j = c, o) : j;
  }, o.offset = function(c) {
    return arguments.length ? (i = c, o) : i;
  }, o.colorscale = function(c) {
    return arguments.length ? (p = c, o) : p;
  }, o;
}
function dt(r) {
  return Z(lt, r);
}
function ht(r) {
  return Z(H, r);
}
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var U = { exports: {} };
(function(r, s) {
  (function(h, p) {
    r.exports = p();
  })(K, function() {
    var h, p, b = 1e3, w = 6e4, B = 36e5, j = 864e5, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = 31536e6, o = 2628e6, c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, A = { years: i, months: o, days: j, hours: B, minutes: w, seconds: b, milliseconds: 1, weeks: 6048e5 }, D = function(n) {
      return n instanceof l;
    }, Y = function(n, e, t) {
      return new l(n, t, e.$l);
    }, T = function(n) {
      return p.p(n) + "s";
    }, g = function(n) {
      return n < 0;
    }, k = function(n) {
      return g(n) ? Math.ceil(n) : Math.floor(n);
    }, a = function(n) {
      return Math.abs(n);
    }, f = function(n, e) {
      return n ? g(n) ? { negative: !0, format: "" + a(n) + e } : { negative: !1, format: "" + n + e } : { negative: !1, format: "" };
    }, l = function() {
      function n(t, d, m) {
        var u = this;
        if (this.$d = {}, this.$l = m, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), d) return Y(t * A[T(d)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(S) {
          u.$d[T(S)] = t[S];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var $ = t.match(c);
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
        this.$ms = Object.keys(this.$d).reduce(function(d, m) {
          return d + (t.$d[m] || 0) * A[m];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = k(t / i), t %= i, this.$d.months = k(t / o), t %= o, this.$d.days = k(t / j), t %= j, this.$d.hours = k(t / B), t %= B, this.$d.minutes = k(t / w), t %= w, this.$d.seconds = k(t / b), t %= b, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = f(this.$d.years, "Y"), d = f(this.$d.months, "M"), m = +this.$d.days || 0;
        this.$d.weeks && (m += 7 * this.$d.weeks);
        var u = f(m, "D"), $ = f(this.$d.hours, "H"), _ = f(this.$d.minutes, "M"), S = this.$d.seconds || 0;
        this.$d.milliseconds && (S += this.$d.milliseconds / 1e3, S = Math.round(1e3 * S) / 1e3);
        var F = f(S, "S"), O = t.negative || d.negative || u.negative || $.negative || _.negative || F.negative, P = $.format || _.format || F.format ? "T" : "", C = (O ? "-" : "") + "P" + t.format + d.format + u.format + P + $.format + _.format + F.format;
        return C === "P" || C === "-P" ? "P0D" : C;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var d = t || "YYYY-MM-DDTHH:mm:ss", m = { Y: this.$d.years, YY: p.s(this.$d.years, 2, "0"), YYYY: p.s(this.$d.years, 4, "0"), M: this.$d.months, MM: p.s(this.$d.months, 2, "0"), D: this.$d.days, DD: p.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: p.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: p.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: p.s(this.$d.seconds, 2, "0"), SSS: p.s(this.$d.milliseconds, 3, "0") };
        return d.replace(M, function(u, $) {
          return $ || String(m[u]);
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
    }(), y = function(n, e, t) {
      return n.add(e.years() * t, "y").add(e.months() * t, "M").add(e.days() * t, "d").add(e.hours() * t, "h").add(e.minutes() * t, "m").add(e.seconds() * t, "s").add(e.milliseconds() * t, "ms");
    };
    return function(n, e, t) {
      h = t, p = t().$utils(), t.duration = function(u, $) {
        var _ = t.locale();
        return Y(u, { $l: _ }, $);
      }, t.isDuration = D;
      var d = e.prototype.add, m = e.prototype.subtract;
      e.prototype.add = function(u, $) {
        return D(u) ? y(this, u, 1) : d.bind(this)(u, $);
      }, e.prototype.subtract = function(u, $) {
        return D(u) ? y(this, u, -1) : m.bind(this)(u, $);
      };
    };
  });
})(U);
var ft = U.exports;
const mt = /* @__PURE__ */ Q(ft);
var tt = { exports: {} };
(function(r, s) {
  (function(h, p) {
    r.exports = p();
  })(K, function() {
    return function(h, p, b) {
      h = h || {};
      var w = p.prototype, B = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function j(i, o, c, A) {
        return w.fromToBase(i, o, c, A);
      }
      b.en.relativeTime = B, w.fromToBase = function(i, o, c, A, D) {
        for (var Y, T, g, k = c.$locale().relativeTime || B, a = h.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], f = a.length, l = 0; l < f; l += 1) {
          var y = a[l];
          y.d && (Y = A ? b(i).diff(c, y.d, !0) : c.diff(i, y.d, !0));
          var n = (h.rounding || Math.round)(Math.abs(Y));
          if (g = Y > 0, n <= y.r || !y.r) {
            n <= 1 && l > 0 && (y = a[l - 1]);
            var e = k[y.l];
            D && (n = D("" + n)), T = typeof e == "string" ? e.replace("%d", n) : e(n, o, y.l, g);
            break;
          }
        }
        if (o) return T;
        var t = g ? k.future : k.past;
        return typeof t == "function" ? t(T) : t.replace("%s", T);
      }, w.to = function(i, o) {
        return j(i, o, this, !0);
      }, w.from = function(i, o) {
        return j(i, o, this);
      };
      var M = function(i) {
        return i.$u ? b.utc() : b();
      };
      w.toNow = function(i) {
        return this.to(M(this), i);
      }, w.fromNow = function(i) {
        return this.from(M(this), i);
      };
    };
  });
})(tt);
var pt = tt.exports;
const gt = /* @__PURE__ */ Q(pt);
I.extend(mt);
I.extend(gt);
function yt(r, s) {
  return I.duration(s - r).humanize();
}
function L() {
  const r = Array.prototype.slice.call(arguments, 0);
  return function(s) {
    return r.reduce((h, p) => p(h), s);
  };
}
function G(r) {
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
function J(r) {
  const s = r.getFullYear(), h = String(r.getMonth() + 1).padStart(2, "0"), p = String(r.getDate()).padStart(2, "0");
  return `${s}${h}${p}`;
}
function N(r, s) {
  return "translate(" + r + "," + s + ")";
}
function _t() {
  let r = xt, s = 5, h = 2, p = !1, b = !1, w, B, j = 0, M = G(0), i = G(1), o = G(2), c = G(3);
  function A(a, f) {
    const l = a.select("text"), y = a.select("rect"), n = y.attr("width") - 2 * s, e = i(f);
    l.text(e);
    let t = l.node().getComputedTextLength();
    if (t > n) {
      const d = n < 0 ? 0 : n / t, m = Math.floor(e.length * d);
      l.text(m > 2 ? e.slice(0, m - 2) + "…" : "");
    }
  }
  function D(a, f, l) {
    const y = a.select("text").node(), n = y.getBBox(), e = l.scale().domain().indexOf(M(f)), t = l.colorscale()(e), d = a.selectAll("rect.bckg").data([f]).join("rect").attr("class", "bckg").attr("fill", t).attr("x", n.x - s + h).attr("y", n.y - 2).attr("width", n.width + s - h).attr("height", n.height);
    a.node().insertBefore(d.node(), y);
  }
  function Y(a, f) {
    a.each(function(l, y) {
      const n = x.select(this.parentNode);
      c(l) - o(l) ? A(n, l) : D(n, l, f);
    });
  }
  function T(a) {
    return function(f, l) {
      x.active(this).tween("text", function() {
        return function(y) {
          Y(x.select(this), a);
        };
      });
    };
  }
  function g(a) {
    const f = a.datum(), l = new Set(x.map(f, M)), y = new X(k), n = x.scaleOrdinal(r);
    w = w || [x.min(f, o), x.max(f, c)], b && (w = x.extent(w.concat(/* @__PURE__ */ new Date()))), a.each(function(e) {
      const t = B || this.getBoundingClientRect().width, d = l.size * (wt(this) + 4 * s), m = x.scaleBand().domain(l).range([0, d]), u = x.scaleTime().domain(w), $ = (p ? ht : dt)(m).width(t), _ = x.select(this).selectAll("svg").data([1]).join("svg");
      _.attr("class", "timeline").attr("width", t).attr("height", d + 40);
      const S = _.append("g").attr("transform", "translate(0,20)"), F = S.append("g").attr("class", "y axis").call($);
      F.selectAll("text").style("cursor", "pointer").on("click", function(v, z) {
        const V = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${z.replace(/--/g, "").replace(" ", "%20")}%22`;
        window.open(V, "_blank");
      });
      let O = $.range();
      u.range([O[0] + s, O[1] - s]).clamp(!0);
      const P = x.axisBottom(u), C = S.append("g").attr("class", "x axis").attr("transform", N(0, 0)).call(P);
      C.selectAll(".tick text").attr("dy", "-1.5em"), C.selectAll(".tick line").attr("y2", "-5");
      const et = x.axisBottom(u);
      _.append("g").attr("class", "x axis bottom-axis").attr("transform", N(0, d + 20)).call(et).selectAll(".tick line").attr("y2", "5"), F.on("offset", () => {
        O = $.range(), u.range([O[0] + s, O[1] - s]).clamp(!0), P.ticks(Math.min((O[1] - O[0]) / 70, 10)), C.call(P), E.attr("transform", (v) => N(u(o(v)), m(M(v)))).selectAll("rect").attr("width", (v) => u(c(v)) - u(o(v)) || h).call((v) => Y(v, $)), F.call($.draw_ticks, u.ticks().map(u));
      }), C.select(".domain").remove(), C.selectAll(".tick line").attr("stroke", "#AAA");
      const nt = u.ticks().map(u);
      F.call($.draw_ticks, nt);
      let E = S.selectAll("g.task").data(e);
      E.exit().remove();
      const q = E.enter().append("g").classed("task", !0);
      q.append("rect").attr("y", s).style("cursor", "pointer").attr("height", m.bandwidth() - 2 * s).on("mouseover", y.show).on("mouseout", y.hide).on("click", function(v, z) {
        var R = String(z[1]), W = R.replace(" ", "%20"), V = z[2], rt = J(V), st = z[3], it = J(st), ot = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + W + "%22%20%2Bdate_when%3A%5B" + rt + "%20TO%20" + it + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(ot, "_blank");
      }).style("fill", L(i, n)), q.append("text").attr("text-anchor", "start").attr("fill", (v) => c(v) - o(v) ? L(i, n, bt)(v) : "black").attr("pointer-events", "none").attr("dx", s).attr("y", m.bandwidth() / 2).attr("dy", "0.32em").text(i), E = E.merge(q), E.attr("transform", (v) => N(O[0], m(M(v)))).selectAll("rect").attr("width", 0), E.transition().duration(j).attr("transform", (v) => N(u(o(v)), m(M(v)))).selectAll("rect").attr("width", (v) => u(c(v)) - u(o(v)) || h).on("start", T($)), b && S.append("path").attr("stroke", "red").attr("d", "M" + u(/* @__PURE__ */ new Date()) + ",0.5V" + d);
    });
  }
  return g.dates = function(a) {
    return arguments.length ? (w = a, g) : w;
  }, g.width = function(a) {
    return arguments.length ? (B = a, g) : B;
  }, g.today = function(a) {
    return arguments.length ? (b = a, g) : b;
  }, g.colors = function(a) {
    return arguments.length ? (r = a, g) : r;
  }, g.padding = function(a) {
    return arguments.length ? (s = a, g) : s;
  }, g.milestone_width = function(a) {
    return arguments.length ? (h = a, g) : h;
  }, g.reversed = function(a) {
    return arguments.length ? (p = a, g) : p;
  }, g.duration = function(a) {
    return arguments.length ? (j = a, g) : j;
  }, g;
  function k(a, f) {
    const l = L(x.isoParse, x.timeFormat("%Y-%m-%d")), y = `<b>${i(f)}</b><hr style="margin: 2px 0 2px 0">${l(o(f))}`, n = c(f) - o(f) ? ` - ${l(c(f))}<br>${yt(o(f), c(f))}` : "";
    return y + n;
  }
}
export {
  yt as durationFormat,
  _t as timeline,
  dt as timelineAxisLeft,
  ht as timelineAxisRight,
  X as tooltip
};
