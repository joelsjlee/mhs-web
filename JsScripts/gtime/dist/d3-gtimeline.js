import * as l from "d3";
export * from "d3";
import X from "dayjs";
const dt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function U(n) {
  l.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(dt);
  const e = l.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(u) {
    e.transition().duration(100).style("opacity", 0.95), e.html(n.apply(null, arguments)).style("left", u.pageX + "px").style("top", u.pageY - 28 + "px");
  }, e.hide = function(u) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function ht(n) {
  return l.max(n.nodes().map((e) => e.getComputedTextLength()));
}
function ft(n) {
  return function(e) {
    return e.length > n ? e.slice(0, n - 1) + "…" : e;
  };
}
const z = 1, mt = 2;
function tt(n, e) {
  let u = ["#FFF", "#EEE"], i = l.scaleOrdinal(u), f = 5, d, b = "#AAA", M = 40, v = 3e3, a;
  function o(h) {
    let Y = e.domain(), j = U((s) => s), D = l.scaleOrdinal(u), F = l.scaleOrdinal(u.reverse()), $ = ft(M), _ = h.selectAll(".row").data(Y, e).order(), c = _.enter().append("g").attr("class", "row"), y = _.exit(), p = _.select("text");
    _ = _.merge(c).attr("transform", (s) => "translate(0," + e(s) + ")"), y.remove(), c.append("rect").attr("y", 0.5).attr("width", v).attr("height", e.bandwidth()).attr("stroke", b).attr("stroke-width", 0.75).attr("fill", D), c.append("path").attr("stroke", F), p = p.merge(
      c.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(s, r) {
        l.select(this).text() != r && j.show(r);
      }).on("mouseout", j.hide)
    ).text($), a === void 0 && (a = ht(p) + 2 * f, a = n === z ? v - a : a), d = n === z ? [0, a] : [a, v], p.attr("text-anchor", n === z ? "start" : "end").attr("dx", n === z ? f : -f).attr("x", a);
    const A = function(s, r) {
      a = Math.max(10, Math.min(v - 10, a + s.dx)), l.select(this).attr("d", "M" + a + ",0.5V" + e.range()[1]), p.attr("x", a), d = n === z ? [0, a] : [a, v], h.dispatch("offset", { detail: { offset: a } });
    };
    h.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", b).attr("stroke-width", 1.75).attr("d", "M" + (a + 0.5) + ",0.5V" + e.range()[1]).style("cursor", "ew-resize").call(l.drag().on("drag", A));
  }
  return o.draw_ticks = function(h, Y) {
    h.selectAll(".row").select("path").attr("d", Y.map((j) => "M" + j + ",1v" + (e.bandwidth() - 1)).join(""));
  }, o.scale = function(h) {
    return arguments.length ? (e = h, o) : e;
  }, o.width = function(h) {
    return arguments.length ? (v = h, o) : v;
  }, o.colors = function(h) {
    return arguments.length ? (u = h, o) : u;
  }, o.padding = function(h) {
    return arguments.length ? (f = h, o) : f;
  }, o.range = function(h) {
    return arguments.length ? (d = h, o) : d;
  }, o.trim = function(h) {
    return arguments.length ? (M = h, o) : M;
  }, o.offset = function(h) {
    return arguments.length ? (a = h, o) : a;
  }, o.colorscale = function(h) {
    return arguments.length ? (i = h, o) : i;
  }, o;
}
function pt(n) {
  return tt(mt, n);
}
function gt(n) {
  return tt(z, n);
}
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var rt = { exports: {} };
(function(n, e) {
  (function(u, i) {
    n.exports = i();
  })(et, function() {
    var u, i, f = 1e3, d = 6e4, b = 36e5, M = 864e5, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, o = 2628e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, Y = { years: a, months: o, days: M, hours: b, minutes: d, seconds: f, milliseconds: 1, weeks: 6048e5 }, j = function(s) {
      return s instanceof p;
    }, D = function(s, r, t) {
      return new p(s, t, r.$l);
    }, F = function(s) {
      return i.p(s) + "s";
    }, $ = function(s) {
      return s < 0;
    }, _ = function(s) {
      return $(s) ? Math.ceil(s) : Math.floor(s);
    }, c = function(s) {
      return Math.abs(s);
    }, y = function(s, r) {
      return s ? $(s) ? { negative: !0, format: "" + c(s) + r } : { negative: !1, format: "" + s + r } : { negative: !1, format: "" };
    }, p = function() {
      function s(t, g, w) {
        var m = this;
        if (this.$d = {}, this.$l = w, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), g) return D(t * Y[F(g)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(T) {
          m.$d[F(T)] = t[T];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var k = t.match(h);
          if (k) {
            var S = k.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = S[0], this.$d.months = S[1], this.$d.weeks = S[2], this.$d.days = S[3], this.$d.hours = S[4], this.$d.minutes = S[5], this.$d.seconds = S[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = s.prototype;
      return r.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(g, w) {
          return g + (t.$d[w] || 0) * Y[w];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = _(t / a), t %= a, this.$d.months = _(t / o), t %= o, this.$d.days = _(t / M), t %= M, this.$d.hours = _(t / b), t %= b, this.$d.minutes = _(t / d), t %= d, this.$d.seconds = _(t / f), t %= f, this.$d.milliseconds = t;
      }, r.toISOString = function() {
        var t = y(this.$d.years, "Y"), g = y(this.$d.months, "M"), w = +this.$d.days || 0;
        this.$d.weeks && (w += 7 * this.$d.weeks);
        var m = y(w, "D"), k = y(this.$d.hours, "H"), S = y(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3, T = Math.round(1e3 * T) / 1e3);
        var C = y(T, "S"), B = t.negative || g.negative || m.negative || k.negative || S.negative || C.negative, N = k.format || S.format || C.format ? "T" : "", R = (B ? "-" : "") + "P" + t.format + g.format + m.format + N + k.format + S.format + C.format;
        return R === "P" || R === "-P" ? "P0D" : R;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(t) {
        var g = t || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: i.s(this.$d.years, 2, "0"), YYYY: i.s(this.$d.years, 4, "0"), M: this.$d.months, MM: i.s(this.$d.months, 2, "0"), D: this.$d.days, DD: i.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: i.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: i.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: i.s(this.$d.seconds, 2, "0"), SSS: i.s(this.$d.milliseconds, 3, "0") };
        return g.replace(v, function(m, k) {
          return k || String(w[m]);
        });
      }, r.as = function(t) {
        return this.$ms / Y[F(t)];
      }, r.get = function(t) {
        var g = this.$ms, w = F(t);
        return w === "milliseconds" ? g %= 1e3 : g = w === "weeks" ? _(g / Y[w]) : this.$d[w], g || 0;
      }, r.add = function(t, g, w) {
        var m;
        return m = g ? t * Y[F(g)] : j(t) ? t.$ms : D(t, this).$ms, D(this.$ms + m * (w ? -1 : 1), this);
      }, r.subtract = function(t, g) {
        return this.add(t, g, !0);
      }, r.locale = function(t) {
        var g = this.clone();
        return g.$l = t, g;
      }, r.clone = function() {
        return D(this.$ms, this);
      }, r.humanize = function(t) {
        return u().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
      }, r.valueOf = function() {
        return this.asMilliseconds();
      }, r.milliseconds = function() {
        return this.get("milliseconds");
      }, r.asMilliseconds = function() {
        return this.as("milliseconds");
      }, r.seconds = function() {
        return this.get("seconds");
      }, r.asSeconds = function() {
        return this.as("seconds");
      }, r.minutes = function() {
        return this.get("minutes");
      }, r.asMinutes = function() {
        return this.as("minutes");
      }, r.hours = function() {
        return this.get("hours");
      }, r.asHours = function() {
        return this.as("hours");
      }, r.days = function() {
        return this.get("days");
      }, r.asDays = function() {
        return this.as("days");
      }, r.weeks = function() {
        return this.get("weeks");
      }, r.asWeeks = function() {
        return this.as("weeks");
      }, r.months = function() {
        return this.get("months");
      }, r.asMonths = function() {
        return this.as("months");
      }, r.years = function() {
        return this.get("years");
      }, r.asYears = function() {
        return this.as("years");
      }, s;
    }(), A = function(s, r, t) {
      return s.add(r.years() * t, "y").add(r.months() * t, "M").add(r.days() * t, "d").add(r.hours() * t, "h").add(r.minutes() * t, "m").add(r.seconds() * t, "s").add(r.milliseconds() * t, "ms");
    };
    return function(s, r, t) {
      u = t, i = t().$utils(), t.duration = function(m, k) {
        var S = t.locale();
        return D(m, { $l: S }, k);
      }, t.isDuration = j;
      var g = r.prototype.add, w = r.prototype.subtract;
      r.prototype.add = function(m, k) {
        return j(m) ? A(this, m, 1) : g.bind(this)(m, k);
      }, r.prototype.subtract = function(m, k) {
        return j(m) ? A(this, m, -1) : w.bind(this)(m, k);
      };
    };
  });
})(rt);
var xt = rt.exports;
const yt = /* @__PURE__ */ nt(xt);
var st = { exports: {} };
(function(n, e) {
  (function(u, i) {
    n.exports = i();
  })(et, function() {
    return function(u, i, f) {
      u = u || {};
      var d = i.prototype, b = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function M(a, o, h, Y) {
        return d.fromToBase(a, o, h, Y);
      }
      f.en.relativeTime = b, d.fromToBase = function(a, o, h, Y, j) {
        for (var D, F, $, _ = h.$locale().relativeTime || b, c = u.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], y = c.length, p = 0; p < y; p += 1) {
          var A = c[p];
          A.d && (D = Y ? f(a).diff(h, A.d, !0) : h.diff(a, A.d, !0));
          var s = (u.rounding || Math.round)(Math.abs(D));
          if ($ = D > 0, s <= A.r || !A.r) {
            s <= 1 && p > 0 && (A = c[p - 1]);
            var r = _[A.l];
            j && (s = j("" + s)), F = typeof r == "string" ? r.replace("%d", s) : r(s, o, A.l, $);
            break;
          }
        }
        if (o) return F;
        var t = $ ? _.future : _.past;
        return typeof t == "function" ? t(F) : t.replace("%s", F);
      }, d.to = function(a, o) {
        return M(a, o, this, !0);
      }, d.from = function(a, o) {
        return M(a, o, this);
      };
      var v = function(a) {
        return a.$u ? f.utc() : f();
      };
      d.toNow = function(a) {
        return this.to(v(this), a);
      }, d.fromNow = function(a) {
        return this.from(v(this), a);
      };
    };
  });
})(st);
var wt = st.exports;
const $t = /* @__PURE__ */ nt(wt);
X.extend(yt);
X.extend($t);
function bt(n, e) {
  return X.duration(e - n).humanize();
}
function L() {
  const n = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return n.reduce((u, i) => i(u), e);
  };
}
function W(n) {
  return function(e) {
    return n === void 0 ? e : e[n];
  };
}
const vt = [
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
function At(n) {
  const e = window.getComputedStyle(n, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function kt(n) {
  return n.r * 0.299 + n.g * 0.587 + n.b * 0.114;
}
function Mt(n) {
  return kt(n) > 165;
}
function _t(n) {
  return Mt(l.color(n)) ? "black" : "white";
}
function Z(n) {
  const e = n.getFullYear(), u = String(n.getMonth() + 1).padStart(2, "0"), i = String(n.getDate()).padStart(2, "0");
  return `${e}${u}${i}`;
}
function V(n, e) {
  return "translate(" + n + "," + e + ")";
}
function St(n, e) {
  let i = n.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
  if (i) {
    let f = parseFloat(i[1]), d = parseFloat(i[2]);
    d += e, n.setAttribute("transform", `translate(${f},${d})`);
  }
}
function I(n, e, u) {
  const f = l.select(n).attr("class");
  let d = !1;
  e.selectAll("g.row").each(function(b) {
    const v = l.select(this).attr("class");
    v == f ? d = !0 : d && (St(this, u), Yt(v.split(" ")[1], u));
  });
}
function Yt(n, e) {
  document.querySelectorAll(`g.task.${n} rect`).forEach(function(f) {
    let b = parseFloat(f.getAttribute("y")) + e;
    f.setAttribute("y", b);
  }), document.querySelectorAll(`g.task.${n} text`).forEach(function(f) {
    let b = parseFloat(f.getAttribute("y")) + e;
    f.setAttribute("y", b);
  });
}
function J(n, e, u) {
  const f = l.select(n).attr("class"), d = [];
  let b = !1, M = !1;
  return e.selectAll("g.row").each(function(v) {
    const o = l.select(this).attr("class");
    o == f ? b = !0 : b && o.split(" ")[2] == "timelineheader" ? M = !0 : b && !M && d.push(o.split(" ")[1]);
  }), console.log(`Rows under ${f}:`, d), d.forEach(function(v) {
    document.querySelectorAll(`.${v}`).forEach(function(o) {
      o.style.display = u;
    });
  }), d.length * 38;
}
function K(n) {
  const e = document.querySelector('path[stroke-width="1.75"]');
  if (e) {
    let i = e.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/);
    if (i) {
      let f = parseFloat(i[1]), d = parseFloat(i[2]), M = parseFloat(i[3]) + n;
      e.setAttribute("d", `M${f},${d}V${M}`);
    }
  } else
    console.error('Path with stroke-width="1.75" not found.');
}
function Q(n) {
  const e = document.querySelector("g.x.axis.bottom-axis");
  if (e) {
    let i = e.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
    if (i) {
      let f = parseFloat(i[1]), b = parseFloat(i[2]) + n;
      e.setAttribute("transform", `translate(${f},${b})`);
    }
  } else
    console.error("x axis bottom-axis not found.");
}
function Dt() {
  let n = vt, e = 5, u = 2, i = !1, f = !1, d, b, M = 0, v = W(0), a = W(1), o = W(2), h = W(3);
  function Y(c, y) {
    const p = c.select("text"), A = c.select("rect"), s = A.attr("width") - 2 * e, r = a(y);
    p.text(r);
    let t = p.node().getComputedTextLength();
    if (t > s) {
      const g = s < 0 ? 0 : s / t, w = Math.floor(r.length * g);
      p.text(w > 2 ? r.slice(0, w - 2) + "…" : "");
    }
  }
  function j(c, y, p) {
    const A = c.select("text").node(), s = A.getBBox(), r = p.scale().domain().indexOf(v(y)), t = p.colorscale()(r), g = c.selectAll("rect.bckg").data([y]).join("rect").attr("class", "bckg").attr("fill", t).attr("x", s.x - e + u).attr("y", s.y - 2).attr("width", s.width + e - u).attr("height", s.height);
    c.node().insertBefore(g.node(), A);
  }
  function D(c, y) {
    c.each(function(p, A) {
      const s = l.select(this.parentNode);
      h(p) - o(p) ? Y(s, p) : j(s, p, y);
    });
  }
  function F(c) {
    return function(y, p) {
      l.active(this).tween("text", function() {
        return function(A) {
          D(l.select(this), c);
        };
      });
    };
  }
  function $(c) {
    const y = c.datum(), p = new Set(l.map(y, v)), A = new U(_), s = l.scaleOrdinal(n);
    d = d || [l.min(y, o), l.max(y, h)], f && (d = l.extent(d.concat(/* @__PURE__ */ new Date()))), c.each(function(r) {
      const t = b || this.getBoundingClientRect().width, g = p.size * (At(this) + 4 * e), w = l.scaleBand().domain(p).range([0, g]), m = l.scaleTime().domain(d), k = (i ? gt : pt)(w).width(t), S = l.select(this).selectAll("svg").data([1]).join("svg");
      S.attr("class", "timeline").attr("width", t).attr("height", g + 40);
      const T = S.append("g").attr("transform", "translate(0,20)"), C = T.append("g").attr("class", "y axis").call(k);
      C.selectAll("text").attr("text-anchor", function(x) {
        return x.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(x) {
        return x.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(x) {
        return x.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(x, E) {
        const q = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${E.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(q, "_blank");
      }), C.selectAll("g.row").each(function(x) {
        const E = l.select(this).datum();
        l.select(this).classed(l.select(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), E.startsWith(" •") && l.select(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), C.selectAll("g.row.timelineheader text").on("click", function(x, E) {
        const P = l.select(this).text();
        if (P === "+") {
          let O = J(this.parentNode, C, "block");
          I(this.parentNode, C, O), K(O), Q(O), l.select(this).text() === "+" ? l.select(this).text("-").style("font-size", "30px") : l.select(this).text("+");
        } else if (P === "-") {
          let O = J(this.parentNode, C, "none");
          I(this.parentNode, C, -O), K(-O), Q(-O), l.select(this).text() === "-" ? l.select(this).text("+").style("font-size", "20px") : l.select(this).text("-");
        }
      });
      let B = k.range();
      m.range([B[0] + e, B[1] - e]).clamp(!0);
      const N = l.axisBottom(m), R = T.append("g").attr("class", "x axis").attr("transform", V(0, 0)).call(N);
      R.selectAll(".tick text").attr("dy", "-1.5em"), R.selectAll(".tick line").attr("y2", "-5");
      const ot = l.axisBottom(m);
      S.append("g").attr("class", "x axis bottom-axis").attr("transform", V(0, g + 20)).call(ot).selectAll(".tick line").attr("y2", "5"), C.on("offset", () => {
        B = k.range(), m.range([B[0] + e, B[1] - e]).clamp(!0), N.ticks(Math.min((B[1] - B[0]) / 70, 10)), R.call(N), H.attr("transform", (x) => V(m(o(x)), w(v(x)))).selectAll("rect").attr("width", (x) => m(h(x)) - m(o(x)) || u).call((x) => D(x, k)), C.call(k.draw_ticks, m.ticks().map(m));
      }), R.select(".domain").remove(), R.selectAll(".tick line").attr("stroke", "#AAA");
      const at = m.ticks().map(m);
      C.call(k.draw_ticks, at);
      let H = T.selectAll("g.task").data(r);
      H.exit().remove();
      const G = H.enter().append("g").classed("task", !0);
      G.each(function(x) {
        const E = v(x).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        l.select(this).classed(E, !0);
      }).append("rect").style("opacity", 0.7).attr("y", e).style("cursor", "pointer").attr("height", w.bandwidth() - 2 * e).on("mouseover", A.show).on("mouseout", A.hide).on("click", function(x, E) {
        var P = String(E[1]), O = P.replace(" ", "%20"), q = E[2], it = Z(q), ct = E[3], lt = Z(ct), ut = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + O + "%22%20%2Bdate_when%3A%5B" + it + "%20TO%20" + lt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(ut, "_blank");
      }).style("fill", L(a, s)), G.append("text").attr("text-anchor", "start").attr("fill", (x) => h(x) - o(x) ? L(a, s, _t)(x) : "black").attr("pointer-events", "none").attr("dx", e).attr("y", w.bandwidth() / 2).attr("dy", "0.32em").text(a), H = H.merge(G), H.attr("transform", (x) => V(B[0], w(v(x)))).selectAll("rect").attr("width", 0), H.transition().duration(M).attr("transform", (x) => V(m(o(x)), w(v(x)))).selectAll("rect").attr("width", (x) => m(h(x)) - m(o(x)) || u).on("start", F(k)), f && T.append("path").attr("stroke", "red").attr("d", "M" + m(/* @__PURE__ */ new Date()) + ",0.5V" + g);
    });
  }
  return $.dates = function(c) {
    return arguments.length ? (d = c, $) : d;
  }, $.width = function(c) {
    return arguments.length ? (b = c, $) : b;
  }, $.today = function(c) {
    return arguments.length ? (f = c, $) : f;
  }, $.colors = function(c) {
    return arguments.length ? (n = c, $) : n;
  }, $.padding = function(c) {
    return arguments.length ? (e = c, $) : e;
  }, $.milestone_width = function(c) {
    return arguments.length ? (u = c, $) : u;
  }, $.reversed = function(c) {
    return arguments.length ? (i = c, $) : i;
  }, $.duration = function(c) {
    return arguments.length ? (M = c, $) : M;
  }, $;
  function _(c, y) {
    const p = L(l.isoParse, l.timeFormat("%Y-%m-%d")), A = `<b>${a(y)}</b><hr style="margin: 2px 0 2px 0">${p(o(y))}`, s = h(y) - o(y) ? ` - ${p(h(y))}<br>${bt(o(y), h(y))}` : "";
    return A + s;
  }
}
export {
  bt as durationFormat,
  Dt as timeline,
  pt as timelineAxisLeft,
  gt as timelineAxisRight,
  U as tooltip
};
