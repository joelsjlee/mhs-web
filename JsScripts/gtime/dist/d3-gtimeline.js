import * as l from "d3";
export * from "d3";
import et from "dayjs";
const pt = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function at(r) {
  l.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(pt);
  const s = l.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return s.show = function(m) {
    s.transition().duration(100).style("opacity", 0.95), s.html(r.apply(null, arguments)).style("left", m.pageX + "px").style("top", m.pageY - 28 + "px");
  }, s.hide = function(m) {
    s.transition().duration(100).style("opacity", 0);
  }, s;
}
function gt(r) {
  return l.max(r.nodes().map((s) => s.getComputedTextLength()));
}
function xt(r) {
  return function(s) {
    return s.length > r ? s.slice(0, r - 1) + "…" : s;
  };
}
const W = 1, yt = 2;
function it(r, s) {
  let m = ["#FFF", "#EEE"], x = l.scaleOrdinal(m), M = 5, v, H = "#AAA", C = 40, _ = 3e3, a;
  function i(u) {
    let D = s.domain(), E = at((n) => n), B = l.scaleOrdinal(m), O = l.scaleOrdinal(m.reverse()), y = xt(C), S = u.selectAll(".row").data(D, s).order(), c = S.enter().append("g").attr("class", "row"), p = S.exit(), h = S.select("text");
    S = S.merge(c).attr("transform", (n) => "translate(0," + s(n) + ")"), p.remove(), c.append("rect").attr("y", 0.5).attr("width", _).attr("height", s.bandwidth()).attr("stroke", H).attr("stroke-width", 0.75).attr("fill", B), c.append("path").attr("stroke", O), h = h.merge(
      c.append("text").attr("y", s.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(n, e) {
        l.select(this).text() != e && E.show(e);
      }).on("mouseout", E.hide)
    ).text(y), a === void 0 && (a = gt(h) + 2 * M, a = r === W ? _ - a : a), v = r === W ? [0, a] : [a, _], h.attr("text-anchor", r === W ? "start" : "end").attr("dx", r === W ? M : -M).attr("x", a);
    const b = function(n, e) {
      a = Math.max(10, Math.min(_ - 10, a + n.dx)), l.select(this).attr("d", "M" + a + ",0.5V" + s.range()[1]), h.attr("x", a), v = r === W ? [0, a] : [a, _], u.dispatch("offset", { detail: { offset: a } });
    };
    u.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", H).attr("stroke-width", 1.75).attr("d", "M" + (a + 0.5) + ",0.5V" + s.range()[1]).style("cursor", "ew-resize").call(l.drag().on("drag", b));
  }
  return i.draw_ticks = function(u, D) {
    u.selectAll(".row").select("path").attr("d", D.map((E) => "M" + E + ",1v" + (s.bandwidth() - 1)).join(""));
  }, i.scale = function(u) {
    return arguments.length ? (s = u, i) : s;
  }, i.width = function(u) {
    return arguments.length ? (_ = u, i) : _;
  }, i.colors = function(u) {
    return arguments.length ? (m = u, i) : m;
  }, i.padding = function(u) {
    return arguments.length ? (M = u, i) : M;
  }, i.range = function(u) {
    return arguments.length ? (v = u, i) : v;
  }, i.trim = function(u) {
    return arguments.length ? (C = u, i) : C;
  }, i.offset = function(u) {
    return arguments.length ? (a = u, i) : a;
  }, i.colorscale = function(u) {
    return arguments.length ? (x = u, i) : x;
  }, i;
}
function wt(r) {
  return it(yt, r);
}
function $t(r) {
  return it(W, r);
}
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ut = { exports: {} };
(function(r, s) {
  (function(m, x) {
    r.exports = x();
  })(ct, function() {
    var m, x, M = 1e3, v = 6e4, H = 36e5, C = 864e5, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, i = 2628e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, D = { years: a, months: i, days: C, hours: H, minutes: v, seconds: M, milliseconds: 1, weeks: 6048e5 }, E = function(n) {
      return n instanceof h;
    }, B = function(n, e, t) {
      return new h(n, t, e.$l);
    }, O = function(n) {
      return x.p(n) + "s";
    }, y = function(n) {
      return n < 0;
    }, S = function(n) {
      return y(n) ? Math.ceil(n) : Math.floor(n);
    }, c = function(n) {
      return Math.abs(n);
    }, p = function(n, e) {
      return n ? y(n) ? { negative: !0, format: "" + c(n) + e } : { negative: !1, format: "" + n + e } : { negative: !1, format: "" };
    }, h = function() {
      function n(t, f, g) {
        var d = this;
        if (this.$d = {}, this.$l = g, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), f) return B(t * D[O(f)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(F) {
          d.$d[O(F)] = t[F];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var A = t.match(u);
          if (A) {
            var Y = A.slice(2).map(function(F) {
              return F != null ? Number(F) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var e = n.prototype;
      return e.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(f, g) {
          return f + (t.$d[g] || 0) * D[g];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = S(t / a), t %= a, this.$d.months = S(t / i), t %= i, this.$d.days = S(t / C), t %= C, this.$d.hours = S(t / H), t %= H, this.$d.minutes = S(t / v), t %= v, this.$d.seconds = S(t / M), t %= M, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = p(this.$d.years, "Y"), f = p(this.$d.months, "M"), g = +this.$d.days || 0;
        this.$d.weeks && (g += 7 * this.$d.weeks);
        var d = p(g, "D"), A = p(this.$d.hours, "H"), Y = p(this.$d.minutes, "M"), F = this.$d.seconds || 0;
        this.$d.milliseconds && (F += this.$d.milliseconds / 1e3, F = Math.round(1e3 * F) / 1e3);
        var R = p(F, "S"), K = t.negative || f.negative || d.negative || A.negative || Y.negative || R.negative, I = A.format || Y.format || R.format ? "T" : "", G = (K ? "-" : "") + "P" + t.format + f.format + d.format + I + A.format + Y.format + R.format;
        return G === "P" || G === "-P" ? "P0D" : G;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var f = t || "YYYY-MM-DDTHH:mm:ss", g = { Y: this.$d.years, YY: x.s(this.$d.years, 2, "0"), YYYY: x.s(this.$d.years, 4, "0"), M: this.$d.months, MM: x.s(this.$d.months, 2, "0"), D: this.$d.days, DD: x.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: x.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: x.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: x.s(this.$d.seconds, 2, "0"), SSS: x.s(this.$d.milliseconds, 3, "0") };
        return f.replace(_, function(d, A) {
          return A || String(g[d]);
        });
      }, e.as = function(t) {
        return this.$ms / D[O(t)];
      }, e.get = function(t) {
        var f = this.$ms, g = O(t);
        return g === "milliseconds" ? f %= 1e3 : f = g === "weeks" ? S(f / D[g]) : this.$d[g], f || 0;
      }, e.add = function(t, f, g) {
        var d;
        return d = f ? t * D[O(f)] : E(t) ? t.$ms : B(t, this).$ms, B(this.$ms + d * (g ? -1 : 1), this);
      }, e.subtract = function(t, f) {
        return this.add(t, f, !0);
      }, e.locale = function(t) {
        var f = this.clone();
        return f.$l = t, f;
      }, e.clone = function() {
        return B(this.$ms, this);
      }, e.humanize = function(t) {
        return m().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
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
    }(), b = function(n, e, t) {
      return n.add(e.years() * t, "y").add(e.months() * t, "M").add(e.days() * t, "d").add(e.hours() * t, "h").add(e.minutes() * t, "m").add(e.seconds() * t, "s").add(e.milliseconds() * t, "ms");
    };
    return function(n, e, t) {
      m = t, x = t().$utils(), t.duration = function(d, A) {
        var Y = t.locale();
        return B(d, { $l: Y }, A);
      }, t.isDuration = E;
      var f = e.prototype.add, g = e.prototype.subtract;
      e.prototype.add = function(d, A) {
        return E(d) ? b(this, d, 1) : f.bind(this)(d, A);
      }, e.prototype.subtract = function(d, A) {
        return E(d) ? b(this, d, -1) : g.bind(this)(d, A);
      };
    };
  });
})(ut);
var bt = ut.exports;
const vt = /* @__PURE__ */ lt(bt);
var dt = { exports: {} };
(function(r, s) {
  (function(m, x) {
    r.exports = x();
  })(ct, function() {
    return function(m, x, M) {
      m = m || {};
      var v = x.prototype, H = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function C(a, i, u, D) {
        return v.fromToBase(a, i, u, D);
      }
      M.en.relativeTime = H, v.fromToBase = function(a, i, u, D, E) {
        for (var B, O, y, S = u.$locale().relativeTime || H, c = m.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], p = c.length, h = 0; h < p; h += 1) {
          var b = c[h];
          b.d && (B = D ? M(a).diff(u, b.d, !0) : u.diff(a, b.d, !0));
          var n = (m.rounding || Math.round)(Math.abs(B));
          if (y = B > 0, n <= b.r || !b.r) {
            n <= 1 && h > 0 && (b = c[h - 1]);
            var e = S[b.l];
            E && (n = E("" + n)), O = typeof e == "string" ? e.replace("%d", n) : e(n, i, b.l, y);
            break;
          }
        }
        if (i) return O;
        var t = y ? S.future : S.past;
        return typeof t == "function" ? t(O) : t.replace("%s", O);
      }, v.to = function(a, i) {
        return C(a, i, this, !0);
      }, v.from = function(a, i) {
        return C(a, i, this);
      };
      var _ = function(a) {
        return a.$u ? M.utc() : M();
      };
      v.toNow = function(a) {
        return this.to(_(this), a);
      }, v.fromNow = function(a) {
        return this.from(_(this), a);
      };
    };
  });
})(dt);
var At = dt.exports;
const kt = /* @__PURE__ */ lt(At);
et.extend(vt);
et.extend(kt);
function Mt(r, s) {
  return et.duration(s - r).humanize();
}
function tt() {
  const r = Array.prototype.slice.call(arguments, 0);
  return function(s) {
    return r.reduce((m, x) => x(m), s);
  };
}
function J(r) {
  return function(s) {
    return r === void 0 ? s : s[r];
  };
}
const _t = [
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
function St(r) {
  const s = window.getComputedStyle(r, null).getPropertyValue("font-size");
  return parseFloat(s);
}
function Yt(r) {
  return r.r * 0.299 + r.g * 0.587 + r.b * 0.114;
}
function Tt(r) {
  return Yt(r) > 165;
}
function jt(r) {
  return Tt(l.color(r)) ? "black" : "white";
}
function ot(r) {
  const s = r.getFullYear(), m = String(r.getMonth() + 1).padStart(2, "0"), x = String(r.getDate()).padStart(2, "0");
  return `${s}${m}${x}`;
}
function Z(r, s) {
  return "translate(" + r + "," + s + ")";
}
function Ct() {
  let r = _t, s = 5, m = 2, x = !1, M = !1, v, H, C = 0, _ = J(0), a = J(1), i = J(2), u = J(3);
  function D(c, p) {
    const h = c.select("text"), b = c.select("rect"), n = b.attr("width") - 2 * s, e = a(p);
    h.text(e);
    let t = h.node().getComputedTextLength();
    if (t > n) {
      const f = n < 0 ? 0 : n / t, g = Math.floor(e.length * f);
      h.text(g > 2 ? e.slice(0, g - 2) + "…" : "");
    }
  }
  function E(c, p, h) {
    const b = c.select("text").node(), n = b.getBBox(), e = h.scale().domain().indexOf(_(p)), t = h.colorscale()(e), f = c.selectAll("rect.bckg").data([p]).join("rect").attr("class", "bckg").attr("fill", t).attr("x", n.x - s + m).attr("y", n.y - 2).attr("width", n.width + s - m).attr("height", n.height);
    c.node().insertBefore(f.node(), b);
  }
  function B(c, p) {
    c.each(function(h, b) {
      const n = l.select(this.parentNode);
      u(h) - i(h) ? D(n, h) : E(n, h, p);
    });
  }
  function O(c) {
    return function(p, h) {
      l.active(this).tween("text", function() {
        return function(b) {
          B(l.select(this), c);
        };
      });
    };
  }
  function y(c) {
    const p = c.datum(), h = new Set(l.map(p, _)), b = new at(S), n = l.scaleOrdinal(r);
    v = v || [l.min(p, i), l.max(p, u)], M && (v = l.extent(v.concat(/* @__PURE__ */ new Date()))), c.each(function(e) {
      const t = H || this.getBoundingClientRect().width, f = h.size * (St(this) + 4 * s), g = l.scaleBand().domain(h).range([0, f]), d = l.scaleTime().domain(v), A = (x ? $t : wt)(g).width(t), Y = l.select(this).selectAll("svg").data([1]).join("svg");
      Y.attr("class", "timeline").attr("width", t).attr("height", f + 40);
      const F = Y.append("g").attr("transform", "translate(0,20)"), R = F.append("g").attr("class", "y axis").call(A);
      R.selectAll("text").attr("text-anchor", function(o) {
        return o.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(o) {
        return o.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(o) {
        return o.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(o, w) {
        const k = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${w.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(k, "_blank");
      }), R.selectAll("g.row").each(function(o) {
        const j = l.select(this).select("text").text();
        l.select(this).classed(l.select(this).select("text").text().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), j.startsWith(" •") && l.select(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "20px").attr("fill", "black");
      });
      function K(o, w) {
        let $ = o.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
        if ($) {
          let k = parseFloat($[1]), T = parseFloat($[2]);
          T += w, o.setAttribute("transform", `translate(${k},${T})`);
        }
      }
      function I(o, w, j) {
        const k = l.select(o).attr("class");
        let T = !1;
        w.selectAll("g.row").each(function(N) {
          const V = l.select(this).attr("class");
          V == k ? T = !0 : T && (K(this, j), G(V.split(" ")[1], j));
        });
      }
      function G(o, w) {
        document.querySelectorAll(`g.task.${o} rect`).forEach(function(k) {
          let N = parseFloat(k.getAttribute("y")) + w;
          k.setAttribute("y", N);
        }), document.querySelectorAll(`g.task.${o} text`).forEach(function(k) {
          let N = parseFloat(k.getAttribute("y")) + w;
          k.setAttribute("y", N);
        });
      }
      function nt(o, w, j) {
        const k = l.select(o).attr("class"), T = [];
        let N = !1, z = !1;
        return w.selectAll("g.row").each(function(V) {
          const X = l.select(this).attr("class");
          X == k ? N = !0 : N && X.split(" ")[2] == "timelineheader" ? z = !0 : N && !z && T.push(X.split(" ")[1]);
        }), console.log(`Rows under ${k}:`, T), T.forEach(function(V) {
          document.querySelectorAll(`.${V}`).forEach(function(X) {
            X.style.display = j;
          });
        }), T.length * 38;
      }
      R.selectAll("g.row.timelineheader text").on("click", function(o, w) {
        const j = l.select(this).text();
        if (j === "+") {
          let $ = nt(this.parentNode, R, "block");
          I(this.parentNode, R, $), rt($), st($), l.select(this).text() === "+" ? l.select(this).text("-") : l.select(this).text("+");
        } else if (j === "-") {
          let $ = nt(this.parentNode, R, "none");
          I(this.parentNode, R, -$), rt(-$), st(-$), l.select(this).text() === "-" ? l.select(this).text("+") : l.select(this).text("-");
        }
      });
      function rt(o) {
        const w = document.querySelector('path[stroke-width="1.75"]');
        if (w) {
          let $ = w.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/);
          if ($) {
            let k = parseFloat($[1]), T = parseFloat($[2]), z = parseFloat($[3]) + o;
            w.setAttribute("d", `M${k},${T}V${z}`);
          }
        } else
          console.error('Path with stroke-width="1.75" not found.');
      }
      function st(o) {
        const w = document.querySelector("g.x.axis.bottom-axis");
        if (w) {
          let $ = w.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
          if ($) {
            let k = parseFloat($[1]), N = parseFloat($[2]) + o;
            w.setAttribute("transform", `translate(${k},${N})`);
          }
        } else
          console.error("x axis bottom-axis not found.");
      }
      let P = A.range();
      d.range([P[0] + s, P[1] - s]).clamp(!0);
      const Q = l.axisBottom(d), L = F.append("g").attr("class", "x axis").attr("transform", Z(0, 0)).call(Q);
      L.selectAll(".tick text").attr("dy", "-1.5em"), L.selectAll(".tick line").attr("y2", "-5");
      const ht = l.axisBottom(d);
      Y.append("g").attr("class", "x axis bottom-axis").attr("transform", Z(0, f + 20)).call(ht).selectAll(".tick line").attr("y2", "5"), R.on("offset", () => {
        P = A.range(), d.range([P[0] + s, P[1] - s]).clamp(!0), Q.ticks(Math.min((P[1] - P[0]) / 70, 10)), L.call(Q), q.attr("transform", (o) => Z(d(i(o)), g(_(o)))).selectAll("rect").attr("width", (o) => d(u(o)) - d(i(o)) || m).call((o) => B(o, A)), R.call(A.draw_ticks, d.ticks().map(d));
      }), L.select(".domain").remove(), L.selectAll(".tick line").attr("stroke", "#AAA");
      const ft = d.ticks().map(d);
      R.call(A.draw_ticks, ft);
      let q = F.selectAll("g.task").data(e);
      q.exit().remove();
      const U = q.enter().append("g").classed("task", !0);
      U.each(function(o) {
        const w = _(o).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        l.select(this).classed(w, !0);
      }).append("rect").style("opacity", 0.7).attr("y", s).style("cursor", "pointer").attr("height", g.bandwidth() - 2 * s).on("mouseover", b.show).on("mouseout", b.hide).on("click", function(o, w) {
        var j = String(w[1]), $ = j.replace(" ", "%20"), k = w[2], T = ot(k), N = w[3], z = ot(N), V = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + $ + "%22%20%2Bdate_when%3A%5B" + T + "%20TO%20" + z + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(V, "_blank");
      }).style("fill", tt(a, n)), U.append("text").attr("text-anchor", "start").attr("fill", (o) => u(o) - i(o) ? tt(a, n, jt)(o) : "black").attr("pointer-events", "none").attr("dx", s).attr("y", g.bandwidth() / 2).attr("dy", "0.32em").text(a), q = q.merge(U), q.attr("transform", (o) => Z(P[0], g(_(o)))).selectAll("rect").attr("width", 0), q.transition().duration(C).attr("transform", (o) => Z(d(i(o)), g(_(o)))).selectAll("rect").attr("width", (o) => d(u(o)) - d(i(o)) || m).on("start", O(A)), M && F.append("path").attr("stroke", "red").attr("d", "M" + d(/* @__PURE__ */ new Date()) + ",0.5V" + f);
    });
  }
  return y.dates = function(c) {
    return arguments.length ? (v = c, y) : v;
  }, y.width = function(c) {
    return arguments.length ? (H = c, y) : H;
  }, y.today = function(c) {
    return arguments.length ? (M = c, y) : M;
  }, y.colors = function(c) {
    return arguments.length ? (r = c, y) : r;
  }, y.padding = function(c) {
    return arguments.length ? (s = c, y) : s;
  }, y.milestone_width = function(c) {
    return arguments.length ? (m = c, y) : m;
  }, y.reversed = function(c) {
    return arguments.length ? (x = c, y) : x;
  }, y.duration = function(c) {
    return arguments.length ? (C = c, y) : C;
  }, y;
  function S(c, p) {
    const h = tt(l.isoParse, l.timeFormat("%Y-%m-%d")), b = `<b>${a(p)}</b><hr style="margin: 2px 0 2px 0">${h(i(p))}`, n = u(p) - i(p) ? ` - ${h(u(p))}<br>${Mt(i(p), u(p))}` : "";
    return b + n;
  }
}
export {
  Mt as durationFormat,
  Ct as timeline,
  wt as timelineAxisLeft,
  $t as timelineAxisRight,
  at as tooltip
};
