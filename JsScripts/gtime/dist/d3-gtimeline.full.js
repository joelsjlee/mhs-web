function on(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ni(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Jn(t) {
  let n, e, r;
  t.length !== 2 ? (n = on, e = (s, c) => on(t(s), c), r = (s, c) => t(s) - c) : (n = t === on || t === ni ? t : ei, e = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (n(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        e(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (n(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        e(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && r(s[f - 1], c) > -r(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function ei() {
  return 0;
}
function ri(t) {
  return t === null ? NaN : +t;
}
const ii = Jn(on), oi = ii.right;
Jn(ri).center;
function ai(t, n) {
  let e, r;
  if (n === void 0)
    for (const i of t)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of t)
      (o = n(o, ++i, t)) != null && (e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
  }
  return [e, r];
}
class ve extends Map {
  constructor(n, e = ci) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(_e(this, n));
  }
  has(n) {
    return super.has(_e(this, n));
  }
  set(n, e) {
    return super.set(ui(this, n), e);
  }
  delete(n) {
    return super.delete(si(this, n));
  }
}
function _e({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function ui({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function si({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ci(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const li = Math.sqrt(50), fi = Math.sqrt(10), hi = Math.sqrt(2);
function ln(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= li ? 10 : o >= fi ? 5 : o >= hi ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? ln(t, n, e * 2) : [s, c, u];
}
function di(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? ln(n, t, e) : ln(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * a;
  return c;
}
function Rn(t, n, e) {
  return n = +n, t = +t, e = +e, ln(t, n, e)[2];
}
function In(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Rn(n, t, e) : Rn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function cr(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function gi(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e > r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e > i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function mi(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function pi(t, n) {
  if (typeof t[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  if (typeof n != "function") throw new TypeError("mapper is not a function");
  return Array.from(t, (e, r) => n(e, r, t));
}
function yi(t) {
  return t;
}
var An = 1, an = 2, Ln = 3, Wt = 4, Me = 1e-6;
function wi(t) {
  return "translate(" + t + ",0)";
}
function xi(t) {
  return "translate(0," + t + ")";
}
function vi(t) {
  return (n) => +t(n);
}
function _i(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Mi() {
  return !this.__axis;
}
function Qn(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === An || t === Wt ? -1 : 1, l = t === Wt || t === an ? "x" : "y", f = t === An || t === Ln ? wi : xi;
  function h(g) {
    var k = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), E = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : yi), F = Math.max(o, 0) + s, P = n.range(), D = +P[0] + c, A = +P[P.length - 1] + c, m = (n.bandwidth ? _i : vi)(n.copy(), c), b = g.selection ? g.selection() : g, d = b.selectAll(".domain").data([null]), y = b.selectAll(".tick").data(k, n).order(), w = y.exit(), U = y.enter().append("g").attr("class", "tick"), C = y.select("line"), p = y.select("text");
    d = d.merge(d.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), y = y.merge(U), C = C.merge(U.append("line").attr("stroke", "currentColor").attr(l + "2", u * o)), p = p.merge(U.append("text").attr("fill", "currentColor").attr(l, u * F).attr("dy", t === An ? "0em" : t === Ln ? "0.71em" : "0.32em")), g !== b && (d = d.transition(g), y = y.transition(g), C = C.transition(g), p = p.transition(g), w = w.transition(g).attr("opacity", Me).attr("transform", function(O) {
      return isFinite(O = m(O)) ? f(O + c) : this.getAttribute("transform");
    }), U.attr("opacity", Me).attr("transform", function(O) {
      var I = this.parentNode.__axis;
      return f((I && isFinite(I = I(O)) ? I : m(O)) + c);
    })), w.remove(), d.attr("d", t === Wt || t === an ? a ? "M" + u * a + "," + D + "H" + c + "V" + A + "H" + u * a : "M" + c + "," + D + "V" + A : a ? "M" + D + "," + u * a + "V" + c + "H" + A + "V" + u * a : "M" + D + "," + c + "H" + A), y.attr("opacity", 1).attr("transform", function(O) {
      return f(m(O) + c);
    }), C.attr(l + "2", u * o), p.attr(l, u * F).text(E), b.filter(Mi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === an ? "start" : t === Wt ? "end" : "middle"), b.each(function() {
      this.__axis = m;
    });
  }
  return h.scale = function(g) {
    return arguments.length ? (n = g, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(g) {
    return arguments.length ? (e = g == null ? [] : Array.from(g), h) : e.slice();
  }, h.tickValues = function(g) {
    return arguments.length ? (r = g == null ? null : Array.from(g), h) : r && r.slice();
  }, h.tickFormat = function(g) {
    return arguments.length ? (i = g, h) : i;
  }, h.tickSize = function(g) {
    return arguments.length ? (o = a = +g, h) : o;
  }, h.tickSizeInner = function(g) {
    return arguments.length ? (o = +g, h) : o;
  }, h.tickSizeOuter = function(g) {
    return arguments.length ? (a = +g, h) : a;
  }, h.tickPadding = function(g) {
    return arguments.length ? (s = +g, h) : s;
  }, h.offset = function(g) {
    return arguments.length ? (c = +g, h) : c;
  }, h;
}
function ll(t) {
  return Qn(an, t);
}
function be(t) {
  return Qn(Ln, t);
}
function fl(t) {
  return Qn(Wt, t);
}
function Kn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function lr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gt() {
}
var Vt = 0.7, fn = 1 / Vt, Ct = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bi = /^#([0-9a-f]{3,8})$/, $i = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), Ti = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), ki = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Bt}\\)$`), Si = new RegExp(`^rgba\\(${ct},${ct},${ct},${Bt}\\)$`), Ai = new RegExp(`^hsl\\(${Bt},${ct},${ct}\\)$`), Ci = new RegExp(`^hsla\\(${Bt},${ct},${ct},${Bt}\\)$`), $e = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Kn(Gt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Te,
  // Deprecated! Use color.formatHex.
  formatHex: Te,
  formatHex8: Di,
  formatHsl: Ni,
  formatRgb: ke,
  toString: ke
});
function Te() {
  return this.rgb().formatHex();
}
function Di() {
  return this.rgb().formatHex8();
}
function Ni() {
  return fr(this).formatHsl();
}
function ke() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = bi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Se(n) : e === 3 ? new et(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = $i.exec(t)) ? new et(n[1], n[2], n[3], 1) : (n = Ti.exec(t)) ? new et(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ki.exec(t)) ? Qt(n[1], n[2], n[3], n[4]) : (n = Si.exec(t)) ? Qt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ai.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ci.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, n[4]) : $e.hasOwnProperty(t) ? Se($e[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function Se(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new et(t, n, e, r);
}
function Fi(t) {
  return t instanceof Gt || (t = yt(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function Pn(t, n, e, r) {
  return arguments.length === 1 ? Fi(t) : new et(t, n, e, r ?? 1);
}
function et(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Kn(et, Pn, lr(Gt, {
  brighter(t) {
    return t = t == null ? fn : Math.pow(fn, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Vt : Math.pow(Vt, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new et(vt(this.r), vt(this.g), vt(this.b), hn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ae,
  // Deprecated! Use color.formatHex.
  formatHex: Ae,
  formatHex8: Ui,
  formatRgb: Ce,
  toString: Ce
}));
function Ae() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}`;
}
function Ui() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}${xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ce() {
  const t = hn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${vt(this.r)}, ${vt(this.g)}, ${vt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function hn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function vt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xt(t) {
  return t = vt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function De(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new ut(t, n, e, r);
}
function fr(t) {
  if (t instanceof ut) return new ut(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gt || (t = yt(t)), !t) return new ut();
  if (t instanceof ut) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new ut(a, s, c, t.opacity);
}
function Yi(t, n, e, r) {
  return arguments.length === 1 ? fr(t) : new ut(t, n, e, r ?? 1);
}
function ut(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Kn(ut, Yi, lr(Gt, {
  brighter(t) {
    return t = t == null ? fn : Math.pow(fn, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Vt : Math.pow(Vt, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new et(
      Cn(t >= 240 ? t - 240 : t + 120, i, r),
      Cn(t, i, r),
      Cn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ut(Ne(this.h), Kt(this.s), Kt(this.l), hn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = hn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ne(this.h)}, ${Kt(this.s) * 100}%, ${Kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ne(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Cn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var Ei = { value: () => {
} };
function te() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new un(e);
}
function un(t) {
  this._ = t;
}
function Hi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
un.prototype = te.prototype = {
  constructor: un,
  on: function(t, n) {
    var e = this._, r = Hi(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Oi(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Fe(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Fe(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new un(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Oi(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Fe(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ei, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Wn = "http://www.w3.org/1999/xhtml";
const Ue = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function bn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ue.hasOwnProperty(n) ? { space: Ue[n], local: t } : t;
}
function Ri(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Wn && n.documentElement.namespaceURI === Wn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ii(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function hr(t) {
  var n = bn(t);
  return (n.local ? Ii : Ri)(n);
}
function Li() {
}
function ne(t) {
  return t == null ? Li : function() {
    return this.querySelector(t);
  };
}
function Pi(t) {
  typeof t != "function" && (t = ne(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), c, u, l = 0; l < a; ++l)
      (c = o[l]) && (u = t.call(c, c.__data__, l, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new K(r, this._parents);
}
function dr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Wi() {
  return [];
}
function gr(t) {
  return t == null ? Wi : function() {
    return this.querySelectorAll(t);
  };
}
function qi(t) {
  return function() {
    return dr(t.apply(this, arguments));
  };
}
function zi(t) {
  typeof t == "function" ? t = qi(t) : t = gr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new K(r, i);
}
function mr(t) {
  return function() {
    return this.matches(t);
  };
}
function pr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Vi = Array.prototype.find;
function Bi(t) {
  return function() {
    return Vi.call(this.children, t);
  };
}
function Xi() {
  return this.firstElementChild;
}
function Zi(t) {
  return this.select(t == null ? Xi : Bi(typeof t == "function" ? t : pr(t)));
}
var Gi = Array.prototype.filter;
function ji() {
  return Array.from(this.children);
}
function Ji(t) {
  return function() {
    return Gi.call(this.children, t);
  };
}
function Qi(t) {
  return this.selectAll(t == null ? ji : Ji(typeof t == "function" ? t : pr(t)));
}
function Ki(t) {
  typeof t != "function" && (t = mr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new K(r, this._parents);
}
function yr(t) {
  return new Array(t.length);
}
function to() {
  return new K(this._enter || this._groups.map(yr), this._parents);
}
function dn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
dn.prototype = {
  constructor: dn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function no(t) {
  return function() {
    return t;
  };
}
function eo(t, n, e, r, i, o) {
  for (var a = 0, s, c = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new dn(t, o[a]);
  for (; a < c; ++a)
    (s = n[a]) && (i[a] = s);
}
function ro(t, n, e, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), g;
  for (s = 0; s < l; ++s)
    (c = n[s]) && (h[s] = g = a.call(c, c.__data__, s, n) + "", u.has(g) ? i[s] = c : u.set(g, c));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (c = u.get(g)) ? (r[s] = c, c.__data__ = o[s], u.delete(g)) : e[s] = new dn(t, o[s]);
  for (s = 0; s < l; ++s)
    (c = n[s]) && u.get(h[s]) === c && (i[s] = c);
}
function io(t) {
  return t.__data__;
}
function oo(t, n) {
  if (!arguments.length) return Array.from(this, io);
  var e = n ? ro : eo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = no(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], f = i[u], h = f.length, g = ao(t.call(l, l && l.__data__, u, r)), k = g.length, E = s[u] = new Array(k), F = a[u] = new Array(k), P = c[u] = new Array(h);
    e(l, f, E, F, P, g, n);
    for (var D = 0, A = 0, m, b; D < k; ++D)
      if (m = E[D]) {
        for (D >= A && (A = D + 1); !(b = F[A]) && ++A < k; ) ;
        m._next = b || null;
      }
  }
  return a = new K(a, r), a._enter = s, a._exit = c, a;
}
function ao(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function uo() {
  return new K(this._exit || this._groups.map(yr), this._parents);
}
function so(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function co(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = e[c], l = r[c], f = u.length, h = s[c] = new Array(f), g, k = 0; k < f; ++k)
      (g = u[k] || l[k]) && (h[k] = g);
  for (; c < i; ++c)
    s[c] = e[c];
  return new K(s, this._parents);
}
function lo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function fo(t) {
  t || (t = ho);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), u, l = 0; l < s; ++l)
      (u = a[l]) && (c[l] = u);
    c.sort(n);
  }
  return new K(i, this._parents).order();
}
function ho(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function go() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function mo() {
  return Array.from(this);
}
function po() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function yo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function wo() {
  return !this.node();
}
function xo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function vo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function _o(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Mo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function bo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function $o(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function To(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ko(t, n) {
  var e = bn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? _o : vo : typeof n == "function" ? e.local ? To : $o : e.local ? bo : Mo)(e, n));
}
function wr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function So(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ao(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Co(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Do(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? So : typeof n == "function" ? Co : Ao)(t, n, e ?? "")) : Ft(this.node(), t);
}
function Ft(t, n) {
  return t.style.getPropertyValue(n) || wr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function No(t) {
  return function() {
    delete this[t];
  };
}
function Fo(t, n) {
  return function() {
    this[t] = n;
  };
}
function Uo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Yo(t, n) {
  return arguments.length > 1 ? this.each((n == null ? No : typeof n == "function" ? Uo : Fo)(t, n)) : this.node()[t];
}
function xr(t) {
  return t.trim().split(/^|\s+/);
}
function ee(t) {
  return t.classList || new vr(t);
}
function vr(t) {
  this._node = t, this._names = xr(t.getAttribute("class") || "");
}
vr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function _r(t, n) {
  for (var e = ee(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Mr(t, n) {
  for (var e = ee(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Eo(t) {
  return function() {
    _r(this, t);
  };
}
function Ho(t) {
  return function() {
    Mr(this, t);
  };
}
function Oo(t, n) {
  return function() {
    (n.apply(this, arguments) ? _r : Mr)(this, t);
  };
}
function Ro(t, n) {
  var e = xr(t + "");
  if (arguments.length < 2) {
    for (var r = ee(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Oo : n ? Eo : Ho)(e, n));
}
function Io() {
  this.textContent = "";
}
function Lo(t) {
  return function() {
    this.textContent = t;
  };
}
function Po(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Wo(t) {
  return arguments.length ? this.each(t == null ? Io : (typeof t == "function" ? Po : Lo)(t)) : this.node().textContent;
}
function qo() {
  this.innerHTML = "";
}
function zo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Vo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Bo(t) {
  return arguments.length ? this.each(t == null ? qo : (typeof t == "function" ? Vo : zo)(t)) : this.node().innerHTML;
}
function Xo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Zo() {
  return this.each(Xo);
}
function Go() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function jo() {
  return this.each(Go);
}
function Jo(t) {
  var n = typeof t == "function" ? t : hr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Qo() {
  return null;
}
function Ko(t, n) {
  var e = typeof t == "function" ? t : hr(t), r = n == null ? Qo : typeof n == "function" ? n : ne(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ta() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function na() {
  return this.each(ta);
}
function ea() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ra() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ia(t) {
  return this.select(t ? ra : ea);
}
function oa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function aa(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ua(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function sa(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ca(t, n, e) {
  return function() {
    var r = this.__on, i, o = aa(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function la(t, n, e) {
  var r = ua(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = n ? ca : sa, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function br(t, n, e) {
  var r = wr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function fa(t, n) {
  return function() {
    return br(this, t, n);
  };
}
function ha(t, n) {
  return function() {
    return br(this, t, n.apply(this, arguments));
  };
}
function da(t, n) {
  return this.each((typeof n == "function" ? ha : fa)(t, n));
}
function* ga() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var re = [null];
function K(t, n) {
  this._groups = t, this._parents = n;
}
function jt() {
  return new K([[document.documentElement]], re);
}
function ma() {
  return this;
}
K.prototype = jt.prototype = {
  constructor: K,
  select: Pi,
  selectAll: zi,
  selectChild: Zi,
  selectChildren: Qi,
  filter: Ki,
  data: oo,
  enter: to,
  exit: uo,
  join: so,
  merge: co,
  selection: ma,
  order: lo,
  sort: fo,
  call: go,
  nodes: mo,
  node: po,
  size: yo,
  empty: wo,
  each: xo,
  attr: ko,
  style: Do,
  property: Yo,
  classed: Ro,
  text: Wo,
  html: Bo,
  raise: Zo,
  lower: jo,
  append: Jo,
  insert: Ko,
  remove: na,
  clone: ia,
  datum: oa,
  on: la,
  dispatch: da,
  [Symbol.iterator]: ga
};
function V(t) {
  return typeof t == "string" ? new K([[document.querySelector(t)]], [document.documentElement]) : new K([[t]], re);
}
function pa(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Ye(t, n) {
  if (t = pa(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
function ya(t) {
  return typeof t == "string" ? new K([document.querySelectorAll(t)], [document.documentElement]) : new K([dr(t)], re);
}
const wa = { passive: !1 }, Xt = { capture: !0, passive: !1 };
function Dn(t) {
  t.stopImmediatePropagation();
}
function Dt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function xa(t) {
  var n = t.document.documentElement, e = V(t).on("dragstart.drag", Dt, Xt);
  "onselectstart" in n ? e.on("selectstart.drag", Dt, Xt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function va(t, n) {
  var e = t.document.documentElement, r = V(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Dt, Xt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const tn = (t) => () => t;
function qn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
qn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function _a(t) {
  return !t.ctrlKey && !t.button;
}
function Ma() {
  return this.parentNode;
}
function ba(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function $a() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ta() {
  var t = _a, n = Ma, e = ba, r = $a, i = {}, o = te("start", "drag", "end"), a = 0, s, c, u, l, f = 0;
  function h(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", F).on("touchmove.drag", P, wa).on("touchend.drag touchcancel.drag", D).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, b) {
    if (!(l || !t.call(this, m, b))) {
      var d = A(this, n.call(this, m, b), m, b, "mouse");
      d && (V(m.view).on("mousemove.drag", k, Xt).on("mouseup.drag", E, Xt), xa(m.view), Dn(m), u = !1, s = m.clientX, c = m.clientY, d("start", m));
    }
  }
  function k(m) {
    if (Dt(m), !u) {
      var b = m.clientX - s, d = m.clientY - c;
      u = b * b + d * d > f;
    }
    i.mouse("drag", m);
  }
  function E(m) {
    V(m.view).on("mousemove.drag mouseup.drag", null), va(m.view, u), Dt(m), i.mouse("end", m);
  }
  function F(m, b) {
    if (t.call(this, m, b)) {
      var d = m.changedTouches, y = n.call(this, m, b), w = d.length, U, C;
      for (U = 0; U < w; ++U)
        (C = A(this, y, m, b, d[U].identifier, d[U])) && (Dn(m), C("start", m, d[U]));
    }
  }
  function P(m) {
    var b = m.changedTouches, d = b.length, y, w;
    for (y = 0; y < d; ++y)
      (w = i[b[y].identifier]) && (Dt(m), w("drag", m, b[y]));
  }
  function D(m) {
    var b = m.changedTouches, d = b.length, y, w;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), y = 0; y < d; ++y)
      (w = i[b[y].identifier]) && (Dn(m), w("end", m, b[y]));
  }
  function A(m, b, d, y, w, U) {
    var C = o.copy(), p = Ye(U || d, b), O, I, $;
    if (($ = e.call(m, new qn("beforestart", {
      sourceEvent: d,
      target: h,
      identifier: w,
      active: a,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: C
    }), y)) != null)
      return O = $.x - p[0] || 0, I = $.y - p[1] || 0, function _(v, S, M) {
        var N = p, R;
        switch (v) {
          case "start":
            i[w] = _, R = a++;
            break;
          case "end":
            delete i[w], --a;
          case "drag":
            p = Ye(M || S, b), R = a;
            break;
        }
        C.call(
          v,
          m,
          new qn(v, {
            sourceEvent: S,
            subject: $,
            target: h,
            identifier: w,
            active: R,
            x: p[0] + O,
            y: p[1] + I,
            dx: p[0] - N[0],
            dy: p[1] - N[1],
            dispatch: C
          }),
          y
        );
      };
  }
  return h.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : tn(!!m), h) : t;
  }, h.container = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : tn(m), h) : n;
  }, h.subject = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : tn(m), h) : e;
  }, h.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : tn(!!m), h) : r;
  }, h.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? h : m;
  }, h.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, h) : Math.sqrt(f);
  }, h;
}
function $n(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const Ee = Symbol("implicit");
function Nt() {
  var t = new ve(), n = [], e = [], r = Ee;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== Ee) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new ve();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Nt(n, e).unknown(r);
  }, $n.apply(i, arguments), i;
}
function $r() {
  var t = Nt().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, c = 0, u = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, g = i < r, k = g ? i : r, E = g ? r : i;
    o = (E - k) / Math.max(1, h - c + u * 2), s && (o = Math.floor(o)), k += (E - k - o * (h - c)) * l, a = o * (1 - c), s && (k = Math.round(k), a = Math.round(a));
    var F = mi(h).map(function(P) {
      return k + o * P;
    });
    return e(g ? F.reverse() : F);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), f()) : n();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, f()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, s = !0, f();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(h) {
    return arguments.length ? (s = !!h, f()) : s;
  }, t.padding = function(h) {
    return arguments.length ? (c = Math.min(1, u = +h), f()) : c;
  }, t.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (u = +h, f()) : u;
  }, t.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, t.copy = function() {
    return $r(n(), [r, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, $n.apply(f(), arguments);
}
const ie = (t) => () => t;
function ka(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Sa(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Aa(t) {
  return (t = +t) == 1 ? Tr : function(n, e) {
    return e - n ? Sa(n, e, t) : ie(isNaN(n) ? e : n);
  };
}
function Tr(t, n) {
  var e = n - t;
  return e ? ka(t, e) : ie(isNaN(t) ? n : t);
}
const gn = function t(n) {
  var e = Aa(n);
  function r(i, o) {
    var a = e((i = Pn(i)).r, (o = Pn(o)).r), s = e(i.g, o.g), c = e(i.b, o.b), u = Tr(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ca(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Da(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Na(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = oe(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Fa(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function at(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ua(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = oe(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var zn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nn = new RegExp(zn.source, "g");
function Ya(t) {
  return function() {
    return t;
  };
}
function Ea(t) {
  return function(n) {
    return t(n) + "";
  };
}
function kr(t, n) {
  var e = zn.lastIndex = Nn.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = zn.exec(t)) && (i = Nn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: at(r, i) })), e = Nn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? Ea(c[0].x) : Ya(n) : (n = c.length, function(u) {
    for (var l = 0, f; l < n; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function oe(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ie(n) : (e === "number" ? at : e === "string" ? (r = yt(n)) ? (n = r, gn) : kr : n instanceof yt ? gn : n instanceof Date ? Fa : Da(n) ? Ca : Array.isArray(n) ? Na : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ua : at)(t, n);
}
function Ha(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var He = 180 / Math.PI, Vn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sr(t, n, e, r, i, o) {
  var a, s, c;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * He,
    skewX: Math.atan(c) * He,
    scaleX: a,
    scaleY: s
  };
}
var nn;
function Oa(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Vn : Sr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ra(t) {
  return t == null || (nn || (nn = document.createElementNS("http://www.w3.org/2000/svg", "g")), nn.setAttribute("transform", t), !(t = nn.transform.baseVal.consolidate())) ? Vn : (t = t.matrix, Sr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ar(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, f, h, g, k) {
    if (u !== f || l !== h) {
      var E = g.push("translate(", null, n, null, e);
      k.push({ i: E - 4, x: at(u, f) }, { i: E - 2, x: at(l, h) });
    } else (f || h) && g.push("translate(" + f + n + h + e);
  }
  function a(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: at(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: at(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, g, k) {
    if (u !== f || l !== h) {
      var E = g.push(i(g) + "scale(", null, ",", null, ")");
      k.push({ i: E - 4, x: at(u, f) }, { i: E - 2, x: at(l, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, f, h), a(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(g) {
      for (var k = -1, E = h.length, F; ++k < E; ) f[(F = h[k]).i] = F.x(g);
      return f.join("");
    };
  };
}
var Ia = Ar(Oa, "px, ", "px)", "deg)"), La = Ar(Ra, ", ", ")", ")");
function Pa(t) {
  return function() {
    return t;
  };
}
function Wa(t) {
  return +t;
}
var Oe = [0, 1];
function St(t) {
  return t;
}
function Bn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Pa(isNaN(n) ? NaN : 0.5);
}
function qa(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function za(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Bn(i, r), o = e(a, o)) : (r = Bn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Va(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Bn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var c = oi(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function Cr(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ba() {
  var t = Oe, n = Oe, e = oe, r, i, o, a = St, s, c, u;
  function l() {
    var h = Math.min(t.length, n.length);
    return a !== St && (a = qa(t[0], t[h - 1])), s = h > 2 ? Va : za, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((u || (u = s(n, t.map(r), at)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Wa), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), l()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Ha, l();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : St, l()) : a !== St;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, l();
  };
}
function Dr() {
  return Ba()(St, St);
}
function Xa(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function mn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ut(t) {
  return t = mn(Math.abs(t)), t ? t[1] : NaN;
}
function Za(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Ga(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ja = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pn(t) {
  if (!(n = ja.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ae({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
pn.prototype = ae.prototype;
function ae(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ae.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ja(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Nr;
function Qa(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Nr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + mn(t, Math.max(0, n + o - 1))[0];
}
function Re(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ie = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Xa,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Re(t * 100, n),
  r: Re,
  s: Qa,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Le(t) {
  return t;
}
var Pe = Array.prototype.map, We = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ka(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Le : Za(Pe.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Le : Ga(Pe.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = pn(f);
    var h = f.fill, g = f.align, k = f.sign, E = f.symbol, F = f.zero, P = f.width, D = f.comma, A = f.precision, m = f.trim, b = f.type;
    b === "n" ? (D = !0, b = "g") : Ie[b] || (A === void 0 && (A = 12), m = !0, b = "g"), (F || h === "0" && g === "=") && (F = !0, h = "0", g = "=");
    var d = E === "$" ? e : E === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", y = E === "$" ? r : /[%p]/.test(b) ? a : "", w = Ie[b], U = /[defgprs%]/.test(b);
    A = A === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function C(p) {
      var O = d, I = y, $, _, v;
      if (b === "c")
        I = w(p) + I, p = "";
      else {
        p = +p;
        var S = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? c : w(Math.abs(p), A), m && (p = Ja(p)), S && +p == 0 && k !== "+" && (S = !1), O = (S ? k === "(" ? k : s : k === "-" || k === "(" ? "" : k) + O, I = (b === "s" ? We[8 + Nr / 3] : "") + I + (S && k === "(" ? ")" : ""), U) {
          for ($ = -1, _ = p.length; ++$ < _; )
            if (v = p.charCodeAt($), 48 > v || v > 57) {
              I = (v === 46 ? i + p.slice($ + 1) : p.slice($)) + I, p = p.slice(0, $);
              break;
            }
        }
      }
      D && !F && (p = n(p, 1 / 0));
      var M = O.length + p.length + I.length, N = M < P ? new Array(P - M + 1).join(h) : "";
      switch (D && F && (p = n(N + p, N.length ? P - I.length : 1 / 0), N = ""), g) {
        case "<":
          p = O + p + I + N;
          break;
        case "=":
          p = O + N + p + I;
          break;
        case "^":
          p = N.slice(0, M = N.length >> 1) + O + p + I + N.slice(M);
          break;
        default:
          p = N + O + p + I;
          break;
      }
      return o(p);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function l(f, h) {
    var g = u((f = pn(f), f.type = "f", f)), k = Math.max(-8, Math.min(8, Math.floor(Ut(h) / 3))) * 3, E = Math.pow(10, -k), F = We[8 + k / 3];
    return function(P) {
      return g(E * P) + F;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var en, Fr, Ur;
tu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function tu(t) {
  return en = Ka(t), Fr = en.format, Ur = en.formatPrefix, en;
}
function nu(t) {
  return Math.max(0, -Ut(Math.abs(t)));
}
function eu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ut(n) / 3))) * 3 - Ut(Math.abs(t)));
}
function ru(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ut(n) - Ut(t)) + 1;
}
function iu(t, n, e, r) {
  var i = In(t, n, e), o;
  switch (r = pn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = eu(i, a)) && (r.precision = o), Ur(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = ru(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = nu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Fr(r);
}
function ou(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return di(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return iu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); l-- > 0; ) {
      if (u = Rn(a, s, e), u === c)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function au() {
  var t = Dr();
  return t.copy = function() {
    return Cr(t, au());
  }, $n.apply(t, arguments), ou(t);
}
function uu(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const Fn = /* @__PURE__ */ new Date(), Un = /* @__PURE__ */ new Date();
function J(t, n, e, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), n(o, 1), t(o), o), i.round = (o) => {
    const a = i(o), s = i.ceil(o);
    return o - a < s - o ? a : s;
  }, i.offset = (o, a) => (n(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, s) => {
    const c = [];
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < a) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), n(o, s), t(o);
    while (u < o && o < a);
    return c;
  }, i.filter = (o) => J((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; n(a, -1), !o(a); )
          ;
      else for (; --s >= 0; )
        for (; n(a, 1), !o(a); )
          ;
  }), e && (i.count = (o, a) => (Fn.setTime(+o), Un.setTime(+a), t(Fn), t(Un), Math.floor(e(Fn, Un))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const yn = J(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
yn.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? J((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : yn);
yn.range;
const dt = 1e3, ot = dt * 60, gt = ot * 60, mt = gt * 24, ue = mt * 7, qe = mt * 30, Yn = mt * 365, At = J((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * dt);
}, (t, n) => (n - t) / dt, (t) => t.getUTCSeconds());
At.range;
const se = J((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt);
}, (t, n) => {
  t.setTime(+t + n * ot);
}, (t, n) => (n - t) / ot, (t) => t.getMinutes());
se.range;
const su = J((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * ot);
}, (t, n) => (n - t) / ot, (t) => t.getUTCMinutes());
su.range;
const ce = J((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt - t.getMinutes() * ot);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getHours());
ce.range;
const cu = J((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getUTCHours());
cu.range;
const Jt = J(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / mt,
  (t) => t.getDate() - 1
);
Jt.range;
const le = J((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => t.getUTCDate() - 1);
le.range;
const lu = J((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => Math.floor(t / mt));
lu.range;
function bt(t) {
  return J((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * ot) / ue);
}
const Tn = bt(0), wn = bt(1), fu = bt(2), hu = bt(3), Yt = bt(4), du = bt(5), gu = bt(6);
Tn.range;
wn.range;
fu.range;
hu.range;
Yt.range;
du.range;
gu.range;
function $t(t) {
  return J((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / ue);
}
const Yr = $t(0), xn = $t(1), mu = $t(2), pu = $t(3), Et = $t(4), yu = $t(5), wu = $t(6);
Yr.range;
xn.range;
mu.range;
pu.range;
Et.range;
yu.range;
wu.range;
const fe = J((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
fe.range;
const xu = J((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
xu.range;
const pt = J((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n);
}, (t, n) => n.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
pt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : J((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setFullYear(n.getFullYear() + e * t);
});
pt.range;
const _t = J((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
_t.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : J((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCFullYear(n.getUTCFullYear() + e * t);
});
_t.range;
function vu(t, n, e, r, i, o) {
  const a = [
    [At, 1, dt],
    [At, 5, 5 * dt],
    [At, 15, 15 * dt],
    [At, 30, 30 * dt],
    [o, 1, ot],
    [o, 5, 5 * ot],
    [o, 15, 15 * ot],
    [o, 30, 30 * ot],
    [i, 1, gt],
    [i, 3, 3 * gt],
    [i, 6, 6 * gt],
    [i, 12, 12 * gt],
    [r, 1, mt],
    [r, 2, 2 * mt],
    [e, 1, ue],
    [n, 1, qe],
    [n, 3, 3 * qe],
    [t, 1, Yn]
  ];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const g = f && typeof f.range == "function" ? f : c(u, l, f), k = g ? g.range(u, +l + 1) : [];
    return h ? k.reverse() : k;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, g = Jn(([, , F]) => F).right(a, h);
    if (g === a.length) return t.every(In(u / Yn, l / Yn, f));
    if (g === 0) return yn.every(Math.max(In(u, l, f), 1));
    const [k, E] = a[h / a[g - 1][2] < a[g][2] / h ? g - 1 : g];
    return k.every(E);
  }
  return [s, c];
}
const [_u, Mu] = vu(pt, fe, Tn, Jt, ce, se);
function En(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Hn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ot(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function bu(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, c = t.shortMonths, u = Rt(i), l = It(i), f = Rt(o), h = It(o), g = Rt(a), k = It(a), E = Rt(s), F = It(s), P = Rt(c), D = It(c), A = {
    a: S,
    A: M,
    b: N,
    B: R,
    c: null,
    d: Ge,
    e: Ge,
    f: Bu,
    g: es,
    G: is,
    H: qu,
    I: zu,
    j: Vu,
    L: Er,
    m: Xu,
    M: Zu,
    p: z,
    q,
    Q: Qe,
    s: Ke,
    S: Gu,
    u: ju,
    U: Ju,
    V: Qu,
    w: Ku,
    W: ts,
    x: null,
    X: null,
    y: ns,
    Y: rs,
    Z: os,
    "%": Je
  }, m = {
    a: Z,
    A: H,
    b: B,
    B: tt,
    c: null,
    d: je,
    e: je,
    f: cs,
    g: xs,
    G: _s,
    H: as,
    I: us,
    j: ss,
    L: Or,
    m: ls,
    M: fs,
    p: G,
    q: nt,
    Q: Qe,
    s: Ke,
    S: hs,
    u: ds,
    U: gs,
    V: ms,
    w: ps,
    W: ys,
    x: null,
    X: null,
    y: ws,
    Y: vs,
    Z: Ms,
    "%": Je
  }, b = {
    a: C,
    A: p,
    b: O,
    B: I,
    c: $,
    d: Xe,
    e: Xe,
    f: Iu,
    g: Be,
    G: Ve,
    H: Ze,
    I: Ze,
    j: Eu,
    L: Ru,
    m: Yu,
    M: Hu,
    p: U,
    q: Uu,
    Q: Pu,
    s: Wu,
    S: Ou,
    u: Au,
    U: Cu,
    V: Du,
    w: Su,
    W: Nu,
    x: _,
    X: v,
    y: Be,
    Y: Ve,
    Z: Fu,
    "%": Lu
  };
  A.x = d(e, A), A.X = d(r, A), A.c = d(n, A), m.x = d(e, m), m.X = d(r, m), m.c = d(n, m);
  function d(T, Y) {
    return function(L) {
      var x = [], j = -1, X = 0, rt = T.length, it, wt, xe;
      for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++j < rt; )
        T.charCodeAt(j) === 37 && (x.push(T.slice(X, j)), (wt = ze[it = T.charAt(++j)]) != null ? it = T.charAt(++j) : wt = it === "e" ? " " : "0", (xe = Y[it]) && (it = xe(L, wt)), x.push(it), X = j + 1);
      return x.push(T.slice(X, j)), x.join("");
    };
  }
  function y(T, Y) {
    return function(L) {
      var x = Ot(1900, void 0, 1), j = w(x, T, L += "", 0), X, rt;
      if (j != L.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (Y && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (X = Hn(Ot(x.y, 0, 1)), rt = X.getUTCDay(), X = rt > 4 || rt === 0 ? xn.ceil(X) : xn(X), X = le.offset(X, (x.V - 1) * 7), x.y = X.getUTCFullYear(), x.m = X.getUTCMonth(), x.d = X.getUTCDate() + (x.w + 6) % 7) : (X = En(Ot(x.y, 0, 1)), rt = X.getDay(), X = rt > 4 || rt === 0 ? wn.ceil(X) : wn(X), X = Jt.offset(X, (x.V - 1) * 7), x.y = X.getFullYear(), x.m = X.getMonth(), x.d = X.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), rt = "Z" in x ? Hn(Ot(x.y, 0, 1)).getUTCDay() : En(Ot(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (rt + 5) % 7 : x.w + x.U * 7 - (rt + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, Hn(x)) : En(x);
    };
  }
  function w(T, Y, L, x) {
    for (var j = 0, X = Y.length, rt = L.length, it, wt; j < X; ) {
      if (x >= rt) return -1;
      if (it = Y.charCodeAt(j++), it === 37) {
        if (it = Y.charAt(j++), wt = b[it in ze ? Y.charAt(j++) : it], !wt || (x = wt(T, L, x)) < 0) return -1;
      } else if (it != L.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function U(T, Y, L) {
    var x = u.exec(Y.slice(L));
    return x ? (T.p = l.get(x[0].toLowerCase()), L + x[0].length) : -1;
  }
  function C(T, Y, L) {
    var x = g.exec(Y.slice(L));
    return x ? (T.w = k.get(x[0].toLowerCase()), L + x[0].length) : -1;
  }
  function p(T, Y, L) {
    var x = f.exec(Y.slice(L));
    return x ? (T.w = h.get(x[0].toLowerCase()), L + x[0].length) : -1;
  }
  function O(T, Y, L) {
    var x = P.exec(Y.slice(L));
    return x ? (T.m = D.get(x[0].toLowerCase()), L + x[0].length) : -1;
  }
  function I(T, Y, L) {
    var x = E.exec(Y.slice(L));
    return x ? (T.m = F.get(x[0].toLowerCase()), L + x[0].length) : -1;
  }
  function $(T, Y, L) {
    return w(T, n, Y, L);
  }
  function _(T, Y, L) {
    return w(T, e, Y, L);
  }
  function v(T, Y, L) {
    return w(T, r, Y, L);
  }
  function S(T) {
    return a[T.getDay()];
  }
  function M(T) {
    return o[T.getDay()];
  }
  function N(T) {
    return c[T.getMonth()];
  }
  function R(T) {
    return s[T.getMonth()];
  }
  function z(T) {
    return i[+(T.getHours() >= 12)];
  }
  function q(T) {
    return 1 + ~~(T.getMonth() / 3);
  }
  function Z(T) {
    return a[T.getUTCDay()];
  }
  function H(T) {
    return o[T.getUTCDay()];
  }
  function B(T) {
    return c[T.getUTCMonth()];
  }
  function tt(T) {
    return s[T.getUTCMonth()];
  }
  function G(T) {
    return i[+(T.getUTCHours() >= 12)];
  }
  function nt(T) {
    return 1 + ~~(T.getUTCMonth() / 3);
  }
  return {
    format: function(T) {
      var Y = d(T += "", A);
      return Y.toString = function() {
        return T;
      }, Y;
    },
    parse: function(T) {
      var Y = y(T += "", !1);
      return Y.toString = function() {
        return T;
      }, Y;
    },
    utcFormat: function(T) {
      var Y = d(T += "", m);
      return Y.toString = function() {
        return T;
      }, Y;
    },
    utcParse: function(T) {
      var Y = y(T += "", !0);
      return Y.toString = function() {
        return T;
      }, Y;
    }
  };
}
var ze = { "-": "", _: " ", 0: "0" }, Q = /^\s*\d+/, $u = /^%/, Tu = /[\\^$*+?|[\]().{}]/g;
function W(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function ku(t) {
  return t.replace(Tu, "\\$&");
}
function Rt(t) {
  return new RegExp("^(?:" + t.map(ku).join("|") + ")", "i");
}
function It(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function Su(t, n, e) {
  var r = Q.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function Au(t, n, e) {
  var r = Q.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function Cu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function Du(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function Nu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function Ve(t, n, e) {
  var r = Q.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function Be(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function Fu(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function Uu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function Yu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function Xe(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function Eu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Ze(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function Hu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function Ou(t, n, e) {
  var r = Q.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function Ru(t, n, e) {
  var r = Q.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function Iu(t, n, e) {
  var r = Q.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function Lu(t, n, e) {
  var r = $u.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function Pu(t, n, e) {
  var r = Q.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function Wu(t, n, e) {
  var r = Q.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function Ge(t, n) {
  return W(t.getDate(), n, 2);
}
function qu(t, n) {
  return W(t.getHours(), n, 2);
}
function zu(t, n) {
  return W(t.getHours() % 12 || 12, n, 2);
}
function Vu(t, n) {
  return W(1 + Jt.count(pt(t), t), n, 3);
}
function Er(t, n) {
  return W(t.getMilliseconds(), n, 3);
}
function Bu(t, n) {
  return Er(t, n) + "000";
}
function Xu(t, n) {
  return W(t.getMonth() + 1, n, 2);
}
function Zu(t, n) {
  return W(t.getMinutes(), n, 2);
}
function Gu(t, n) {
  return W(t.getSeconds(), n, 2);
}
function ju(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function Ju(t, n) {
  return W(Tn.count(pt(t) - 1, t), n, 2);
}
function Hr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t);
}
function Qu(t, n) {
  return t = Hr(t), W(Yt.count(pt(t), t) + (pt(t).getDay() === 4), n, 2);
}
function Ku(t) {
  return t.getDay();
}
function ts(t, n) {
  return W(wn.count(pt(t) - 1, t), n, 2);
}
function ns(t, n) {
  return W(t.getFullYear() % 100, n, 2);
}
function es(t, n) {
  return t = Hr(t), W(t.getFullYear() % 100, n, 2);
}
function rs(t, n) {
  return W(t.getFullYear() % 1e4, n, 4);
}
function is(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t), W(t.getFullYear() % 1e4, n, 4);
}
function os(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + W(n / 60 | 0, "0", 2) + W(n % 60, "0", 2);
}
function je(t, n) {
  return W(t.getUTCDate(), n, 2);
}
function as(t, n) {
  return W(t.getUTCHours(), n, 2);
}
function us(t, n) {
  return W(t.getUTCHours() % 12 || 12, n, 2);
}
function ss(t, n) {
  return W(1 + le.count(_t(t), t), n, 3);
}
function Or(t, n) {
  return W(t.getUTCMilliseconds(), n, 3);
}
function cs(t, n) {
  return Or(t, n) + "000";
}
function ls(t, n) {
  return W(t.getUTCMonth() + 1, n, 2);
}
function fs(t, n) {
  return W(t.getUTCMinutes(), n, 2);
}
function hs(t, n) {
  return W(t.getUTCSeconds(), n, 2);
}
function ds(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function gs(t, n) {
  return W(Yr.count(_t(t) - 1, t), n, 2);
}
function Rr(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Et(t) : Et.ceil(t);
}
function ms(t, n) {
  return t = Rr(t), W(Et.count(_t(t), t) + (_t(t).getUTCDay() === 4), n, 2);
}
function ps(t) {
  return t.getUTCDay();
}
function ys(t, n) {
  return W(xn.count(_t(t) - 1, t), n, 2);
}
function ws(t, n) {
  return W(t.getUTCFullYear() % 100, n, 2);
}
function xs(t, n) {
  return t = Rr(t), W(t.getUTCFullYear() % 100, n, 2);
}
function vs(t, n) {
  return W(t.getUTCFullYear() % 1e4, n, 4);
}
function _s(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Et(t) : Et.ceil(t), W(t.getUTCFullYear() % 1e4, n, 4);
}
function Ms() {
  return "+0000";
}
function Je() {
  return "%";
}
function Qe(t) {
  return +t;
}
function Ke(t) {
  return Math.floor(+t / 1e3);
}
var Tt, he, Ir, Lr;
bs({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function bs(t) {
  return Tt = bu(t), he = Tt.format, Tt.parse, Ir = Tt.utcFormat, Lr = Tt.utcParse, Tt;
}
var Pr = "%Y-%m-%dT%H:%M:%S.%LZ";
function $s(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Ir(Pr);
function Ts(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var ks = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? Ts : Lr(Pr);
function Ss(t) {
  return new Date(t);
}
function As(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Wr(t, n, e, r, i, o, a, s, c, u) {
  var l = Dr(), f = l.invert, h = l.domain, g = u(".%L"), k = u(":%S"), E = u("%I:%M"), F = u("%I %p"), P = u("%a %d"), D = u("%b %d"), A = u("%B"), m = u("%Y");
  function b(d) {
    return (c(d) < d ? g : s(d) < d ? k : a(d) < d ? E : o(d) < d ? F : r(d) < d ? i(d) < d ? P : D : e(d) < d ? A : m)(d);
  }
  return l.invert = function(d) {
    return new Date(f(d));
  }, l.domain = function(d) {
    return arguments.length ? h(Array.from(d, As)) : h().map(Ss);
  }, l.ticks = function(d) {
    var y = h();
    return t(y[0], y[y.length - 1], d ?? 10);
  }, l.tickFormat = function(d, y) {
    return y == null ? b : u(y);
  }, l.nice = function(d) {
    var y = h();
    return (!d || typeof d.range != "function") && (d = n(y[0], y[y.length - 1], d ?? 10)), d ? h(uu(y, d)) : l;
  }, l.copy = function() {
    return Cr(l, Wr(t, n, e, r, i, o, a, s, c, u));
  }, l;
}
function Cs() {
  return $n.apply(Wr(_u, Mu, pt, fe, Tn, Jt, ce, se, At, he).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ht = 0, qt = 0, Lt = 0, qr = 1e3, vn, zt, _n = 0, Mt = 0, kn = 0, Zt = typeof performance == "object" && performance.now ? performance : Date, zr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function de() {
  return Mt || (zr(Ds), Mt = Zt.now() + kn);
}
function Ds() {
  Mt = 0;
}
function Mn() {
  this._call = this._time = this._next = null;
}
Mn.prototype = Vr.prototype = {
  constructor: Mn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? de() : +e) + (n == null ? 0 : +n), !this._next && zt !== this && (zt ? zt._next = this : vn = this, zt = this), this._call = t, this._time = e, Xn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xn());
  }
};
function Vr(t, n, e) {
  var r = new Mn();
  return r.restart(t, n, e), r;
}
function Ns() {
  de(), ++Ht;
  for (var t = vn, n; t; )
    (n = Mt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ht;
}
function tr() {
  Mt = (_n = Zt.now()) + kn, Ht = qt = 0;
  try {
    Ns();
  } finally {
    Ht = 0, Us(), Mt = 0;
  }
}
function Fs() {
  var t = Zt.now(), n = t - _n;
  n > qr && (kn -= n, _n = t);
}
function Us() {
  for (var t, n = vn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : vn = e);
  zt = t, Xn(r);
}
function Xn(t) {
  if (!Ht) {
    qt && (qt = clearTimeout(qt));
    var n = t - Mt;
    n > 24 ? (t < 1 / 0 && (qt = setTimeout(tr, t - Zt.now() - kn)), Lt && (Lt = clearInterval(Lt))) : (Lt || (_n = Zt.now(), Lt = setInterval(Fs, qr)), Ht = 1, zr(tr));
  }
}
function nr(t, n, e) {
  var r = new Mn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ys = te("start", "end", "cancel", "interrupt"), Es = [], Br = 0, Zn = 1, Gn = 2, sn = 3, er = 4, jn = 5, cn = 6;
function Sn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Hs(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ys,
    tween: Es,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Br
  });
}
function ge(t, n) {
  var e = st(t, n);
  if (e.state > Br) throw new Error("too late; already scheduled");
  return e;
}
function ft(t, n) {
  var e = st(t, n);
  if (e.state > sn) throw new Error("too late; already running");
  return e;
}
function st(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Hs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Vr(o, 0, e.time);
  function o(u) {
    e.state = Zn, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var l, f, h, g;
    if (e.state !== Zn) return c();
    for (l in r)
      if (g = r[l], g.name === e.name) {
        if (g.state === sn) return nr(a);
        g.state === er ? (g.state = cn, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[l]) : +l < n && (g.state = cn, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[l]);
      }
    if (nr(function() {
      e.state === sn && (e.state = er, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Gn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Gn) {
      for (e.state = sn, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (g = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var l = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(c), e.state = jn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    e.state === jn && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = cn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Os(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Gn && r.state < jn, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Rs(t) {
  return this.each(function() {
    Os(this, t);
  });
}
function Is(t, n) {
  var e, r;
  return function() {
    var i = ft(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ls(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = ft(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === n) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    o.tween = i;
  };
}
function Ps(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = st(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Is : Ls)(e, t, n));
}
function me(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ft(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[n];
  };
}
function Xr(t, n) {
  var e;
  return (typeof n == "number" ? at : n instanceof yt ? gn : (e = yt(n)) ? (n = e, gn) : kr)(t, n);
}
function Ws(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function zs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Vs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Bs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function Xs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function Zs(t, n) {
  var e = bn(t), r = e === "transform" ? La : Xr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Xs : Bs)(e, r, me(this, "attr." + t, n)) : n == null ? (e.local ? qs : Ws)(e) : (e.local ? Vs : zs)(e, r, n));
}
function Gs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function js(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Js(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && js(t, o)), e;
  }
  return i._value = n, i;
}
function Qs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Gs(t, o)), e;
  }
  return i._value = n, i;
}
function Ks(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = bn(t);
  return this.tween(e, (r.local ? Js : Qs)(r, n));
}
function tc(t, n) {
  return function() {
    ge(this, t).delay = +n.apply(this, arguments);
  };
}
function nc(t, n) {
  return n = +n, function() {
    ge(this, t).delay = n;
  };
}
function ec(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tc : nc)(n, t)) : st(this.node(), n).delay;
}
function rc(t, n) {
  return function() {
    ft(this, t).duration = +n.apply(this, arguments);
  };
}
function ic(t, n) {
  return n = +n, function() {
    ft(this, t).duration = n;
  };
}
function oc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rc : ic)(n, t)) : st(this.node(), n).duration;
}
function ac(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ft(this, t).ease = n;
  };
}
function uc(t) {
  var n = this._id;
  return arguments.length ? this.each(ac(n, t)) : st(this.node(), n).ease;
}
function sc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ft(this, t).ease = e;
  };
}
function cc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(sc(this._id, t));
}
function lc(t) {
  typeof t != "function" && (t = mr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new lt(r, this._parents, this._name, this._id);
}
function fc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = n[s], u = e[s], l = c.length, f = a[s] = new Array(l), h, g = 0; g < l; ++g)
      (h = c[g] || u[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new lt(a, this._parents, this._name, this._id);
}
function hc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function dc(t, n, e) {
  var r, i, o = hc(n) ? ge : ft;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function gc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? st(this.node(), e).on.on(t) : this.each(dc(e, t, n));
}
function mc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function pc() {
  return this.on("end.remove", mc(this._id));
}
function yc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ne(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, Sn(u[h], n, e, h, u, st(l, e)));
  return new lt(o, this._parents, n, e);
}
function wc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = gr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), g, k = st(l, e), E = 0, F = h.length; E < F; ++E)
          (g = h[E]) && Sn(g, n, e, E, h, k);
        o.push(h), a.push(l);
      }
  return new lt(o, a, n, e);
}
var xc = jt.prototype.constructor;
function vc() {
  return new xc(this._groups, this._parents);
}
function _c(t, n) {
  var e, r, i;
  return function() {
    var o = Ft(this, t), a = (this.style.removeProperty(t), Ft(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Zr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Ft(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function bc(t, n, e) {
  var r, i, o;
  return function() {
    var a = Ft(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Ft(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s));
  };
}
function $c(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var c = ft(this, t), u = c.on, l = c.value[o] == null ? s || (s = Zr(n)) : void 0;
    (u !== e || i !== l) && (r = (e = u).copy()).on(a, i = l), c.on = r;
  };
}
function Tc(t, n, e) {
  var r = (t += "") == "transform" ? Ia : Xr;
  return n == null ? this.styleTween(t, _c(t, r)).on("end.style." + t, Zr(t)) : typeof n == "function" ? this.styleTween(t, bc(t, r, me(this, "style." + t, n))).each($c(this._id, t)) : this.styleTween(t, Mc(t, r, n), e).on("end.style." + t, null);
}
function kc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Sc(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && kc(t, a, e)), r;
  }
  return o._value = n, o;
}
function Ac(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Sc(t, n, e ?? ""));
}
function Cc(t) {
  return function() {
    this.textContent = t;
  };
}
function Dc(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Nc(t) {
  return this.tween("text", typeof t == "function" ? Dc(me(this, "text", t)) : Cc(t == null ? "" : t + ""));
}
function Fc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Uc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Fc(i)), n;
  }
  return r._value = t, r;
}
function Yc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Uc(t));
}
function Ec() {
  for (var t = this._name, n = this._id, e = Gr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var l = st(c, n);
        Sn(c, t, e, u, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new lt(r, this._parents, t, e);
}
function Hc() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = ft(this, r), l = u.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), u.on = n;
    }), i === 0 && o();
  });
}
var Oc = 0;
function lt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Gr() {
  return ++Oc;
}
var ht = jt.prototype;
lt.prototype = {
  constructor: lt,
  select: yc,
  selectAll: wc,
  selectChild: ht.selectChild,
  selectChildren: ht.selectChildren,
  filter: lc,
  merge: fc,
  selection: vc,
  transition: Ec,
  call: ht.call,
  nodes: ht.nodes,
  node: ht.node,
  size: ht.size,
  empty: ht.empty,
  each: ht.each,
  on: gc,
  attr: Zs,
  attrTween: Ks,
  style: Tc,
  styleTween: Ac,
  text: Nc,
  textTween: Yc,
  remove: pc,
  tween: Ps,
  delay: ec,
  duration: oc,
  ease: uc,
  easeVarying: cc,
  end: Hc,
  [Symbol.iterator]: ht[Symbol.iterator]
};
function Rc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ic = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Rc
};
function Lc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Pc(t) {
  var n, e;
  t instanceof lt ? (n = t._id, t = t._name) : (n = Gr(), (e = Ic).time = de(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && Sn(c, t, n, u, a, e || Lc(c, n));
  return new lt(r, this._parents, t, n);
}
jt.prototype.interrupt = Rs;
jt.prototype.transition = Pc;
var Wc = [null];
function qc(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Zn && r.name === n)
        return new lt([[t]], Wc, n, +i);
  }
  return null;
}
const zc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function jr(t) {
  V("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(zc);
  const n = V("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function Vc(t) {
  return cr(t.nodes().map((n) => n.getComputedTextLength()));
}
function Bc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const kt = 1, Xc = 2;
function Jr(t, n) {
  let e = ["#FFF", "#EEE"], r = Nt(e), i = 5, o, a = "#AAA", s = 40, c = 3e3, u;
  function l(f) {
    let h = n.domain(), g = jr((d) => d), k = Nt(e), E = Nt(e.reverse()), F = Bc(s), P = f.selectAll(".row").data(h, n).order(), D = P.enter().append("g").attr("class", "row"), A = P.exit(), m = P.select("text");
    P = P.merge(D).attr("transform", (d) => "translate(0," + n(d) + ")"), A.remove(), D.append("rect").attr("y", 0.5).attr("width", c).attr("height", n.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", k), D.append("path").attr("stroke", E), m = m.merge(
      D.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(d, y) {
        V(this).text() != y && g.show(y);
      }).on("mouseout", g.hide)
    ).text(F), u === void 0 && (u = Vc(m) + 2 * i, u = t === kt ? c - u : u), o = t === kt ? [0, u] : [u, c], m.attr("text-anchor", t === kt ? "start" : "end").attr("dx", t === kt ? i : -i).attr("x", u);
    const b = function(d, y) {
      u = Math.max(10, Math.min(c - 10, u + d.dx)), V(this).attr("d", "M" + u + ",0.5V" + n.range()[1]), m.attr("x", u), o = t === kt ? [0, u] : [u, c], f.dispatch("offset", { detail: { offset: u } });
    };
    f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (u + 0.5) + ",0.5V" + n.range()[1]).style("cursor", "ew-resize").call(Ta().on("drag", b));
  }
  return l.draw_ticks = function(f, h) {
    f.selectAll(".row").select("path").attr("d", h.map((g) => "M" + g + ",1v" + (n.bandwidth() - 1)).join(""));
  }, l.scale = function(f) {
    return arguments.length ? (n = f, l) : n;
  }, l.width = function(f) {
    return arguments.length ? (c = f, l) : c;
  }, l.colors = function(f) {
    return arguments.length ? (e = f, l) : e;
  }, l.padding = function(f) {
    return arguments.length ? (i = f, l) : i;
  }, l.range = function(f) {
    return arguments.length ? (o = f, l) : o;
  }, l.trim = function(f) {
    return arguments.length ? (s = f, l) : s;
  }, l.offset = function(f) {
    return arguments.length ? (u = f, l) : u;
  }, l.colorscale = function(f) {
    return arguments.length ? (r = f, l) : r;
  }, l;
}
function Zc(t) {
  return Jr(Xc, t);
}
function Gc(t) {
  return Jr(kt, t);
}
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ye(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(pe, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", s = "minute", c = "hour", u = "day", l = "week", f = "month", h = "quarter", g = "year", k = "date", E = "Invalid Date", F = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var _ = ["th", "st", "nd", "rd"], v = $ % 100;
      return "[" + $ + (_[(v - 20) % 10] || _[v] || _[0]) + "]";
    } }, A = function($, _, v) {
      var S = String($);
      return !S || S.length >= _ ? $ : "" + Array(_ + 1 - S.length).join(v) + $;
    }, m = { s: A, z: function($) {
      var _ = -$.utcOffset(), v = Math.abs(_), S = Math.floor(v / 60), M = v % 60;
      return (_ <= 0 ? "+" : "-") + A(S, 2, "0") + ":" + A(M, 2, "0");
    }, m: function $(_, v) {
      if (_.date() < v.date()) return -$(v, _);
      var S = 12 * (v.year() - _.year()) + (v.month() - _.month()), M = _.clone().add(S, f), N = v - M < 0, R = _.clone().add(S + (N ? -1 : 1), f);
      return +(-(S + (v - M) / (N ? M - R : R - M)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: g, w: l, d: u, D: k, h: c, m: s, s: a, ms: o, Q: h }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, b = "en", d = {};
    d[b] = D;
    var y = "$isDayjsObject", w = function($) {
      return $ instanceof O || !(!$ || !$[y]);
    }, U = function $(_, v, S) {
      var M;
      if (!_) return b;
      if (typeof _ == "string") {
        var N = _.toLowerCase();
        d[N] && (M = N), v && (d[N] = v, M = N);
        var R = _.split("-");
        if (!M && R.length > 1) return $(R[0]);
      } else {
        var z = _.name;
        d[z] = _, M = z;
      }
      return !S && M && (b = M), M || !S && b;
    }, C = function($, _) {
      if (w($)) return $.clone();
      var v = typeof _ == "object" ? _ : {};
      return v.date = $, v.args = arguments, new O(v);
    }, p = m;
    p.l = U, p.i = w, p.w = function($, _) {
      return C($, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var O = function() {
      function $(v) {
        this.$L = U(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[y] = !0;
      }
      var _ = $.prototype;
      return _.parse = function(v) {
        this.$d = function(S) {
          var M = S.date, N = S.utc;
          if (M === null) return /* @__PURE__ */ new Date(NaN);
          if (p.u(M)) return /* @__PURE__ */ new Date();
          if (M instanceof Date) return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var R = M.match(F);
            if (R) {
              var z = R[2] - 1 || 0, q = (R[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(R[1], z, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, q)) : new Date(R[1], z, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, q);
            }
          }
          return new Date(M);
        }(v), this.init();
      }, _.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, _.$utils = function() {
        return p;
      }, _.isValid = function() {
        return this.$d.toString() !== E;
      }, _.isSame = function(v, S) {
        var M = C(v);
        return this.startOf(S) <= M && M <= this.endOf(S);
      }, _.isAfter = function(v, S) {
        return C(v) < this.startOf(S);
      }, _.isBefore = function(v, S) {
        return this.endOf(S) < C(v);
      }, _.$g = function(v, S, M) {
        return p.u(v) ? this[S] : this.set(M, v);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(v, S) {
        var M = this, N = !!p.u(S) || S, R = p.p(v), z = function(T, Y) {
          var L = p.w(M.$u ? Date.UTC(M.$y, Y, T) : new Date(M.$y, Y, T), M);
          return N ? L : L.endOf(u);
        }, q = function(T, Y) {
          return p.w(M.toDate()[T].apply(M.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), M);
        }, Z = this.$W, H = this.$M, B = this.$D, tt = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case g:
            return N ? z(1, 0) : z(31, 11);
          case f:
            return N ? z(1, H) : z(0, H + 1);
          case l:
            var G = this.$locale().weekStart || 0, nt = (Z < G ? Z + 7 : Z) - G;
            return z(N ? B - nt : B + (6 - nt), H);
          case u:
          case k:
            return q(tt + "Hours", 0);
          case c:
            return q(tt + "Minutes", 1);
          case s:
            return q(tt + "Seconds", 2);
          case a:
            return q(tt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(v) {
        return this.startOf(v, !1);
      }, _.$set = function(v, S) {
        var M, N = p.p(v), R = "set" + (this.$u ? "UTC" : ""), z = (M = {}, M[u] = R + "Date", M[k] = R + "Date", M[f] = R + "Month", M[g] = R + "FullYear", M[c] = R + "Hours", M[s] = R + "Minutes", M[a] = R + "Seconds", M[o] = R + "Milliseconds", M)[N], q = N === u ? this.$D + (S - this.$W) : S;
        if (N === f || N === g) {
          var Z = this.clone().set(k, 1);
          Z.$d[z](q), Z.init(), this.$d = Z.set(k, Math.min(this.$D, Z.daysInMonth())).$d;
        } else z && this.$d[z](q);
        return this.init(), this;
      }, _.set = function(v, S) {
        return this.clone().$set(v, S);
      }, _.get = function(v) {
        return this[p.p(v)]();
      }, _.add = function(v, S) {
        var M, N = this;
        v = Number(v);
        var R = p.p(S), z = function(H) {
          var B = C(N);
          return p.w(B.date(B.date() + Math.round(H * v)), N);
        };
        if (R === f) return this.set(f, this.$M + v);
        if (R === g) return this.set(g, this.$y + v);
        if (R === u) return z(1);
        if (R === l) return z(7);
        var q = (M = {}, M[s] = r, M[c] = i, M[a] = e, M)[R] || 1, Z = this.$d.getTime() + v * q;
        return p.w(Z, this);
      }, _.subtract = function(v, S) {
        return this.add(-1 * v, S);
      }, _.format = function(v) {
        var S = this, M = this.$locale();
        if (!this.isValid()) return M.invalidDate || E;
        var N = v || "YYYY-MM-DDTHH:mm:ssZ", R = p.z(this), z = this.$H, q = this.$m, Z = this.$M, H = M.weekdays, B = M.months, tt = M.meridiem, G = function(Y, L, x, j) {
          return Y && (Y[L] || Y(S, N)) || x[L].slice(0, j);
        }, nt = function(Y) {
          return p.s(z % 12 || 12, Y, "0");
        }, T = tt || function(Y, L, x) {
          var j = Y < 12 ? "AM" : "PM";
          return x ? j.toLowerCase() : j;
        };
        return N.replace(P, function(Y, L) {
          return L || function(x) {
            switch (x) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return p.s(S.$y, 4, "0");
              case "M":
                return Z + 1;
              case "MM":
                return p.s(Z + 1, 2, "0");
              case "MMM":
                return G(M.monthsShort, Z, B, 3);
              case "MMMM":
                return G(B, Z);
              case "D":
                return S.$D;
              case "DD":
                return p.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return G(M.weekdaysMin, S.$W, H, 2);
              case "ddd":
                return G(M.weekdaysShort, S.$W, H, 3);
              case "dddd":
                return H[S.$W];
              case "H":
                return String(z);
              case "HH":
                return p.s(z, 2, "0");
              case "h":
                return nt(1);
              case "hh":
                return nt(2);
              case "a":
                return T(z, q, !0);
              case "A":
                return T(z, q, !1);
              case "m":
                return String(q);
              case "mm":
                return p.s(q, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return p.s(S.$s, 2, "0");
              case "SSS":
                return p.s(S.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(Y) || R.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(v, S, M) {
        var N, R = this, z = p.p(S), q = C(v), Z = (q.utcOffset() - this.utcOffset()) * r, H = this - q, B = function() {
          return p.m(R, q);
        };
        switch (z) {
          case g:
            N = B() / 12;
            break;
          case f:
            N = B();
            break;
          case h:
            N = B() / 3;
            break;
          case l:
            N = (H - Z) / 6048e5;
            break;
          case u:
            N = (H - Z) / 864e5;
            break;
          case c:
            N = H / i;
            break;
          case s:
            N = H / r;
            break;
          case a:
            N = H / e;
            break;
          default:
            N = H;
        }
        return M ? N : p.a(N);
      }, _.daysInMonth = function() {
        return this.endOf(f).$D;
      }, _.$locale = function() {
        return d[this.$L];
      }, _.locale = function(v, S) {
        if (!v) return this.$L;
        var M = this.clone(), N = U(v, S, !0);
        return N && (M.$L = N), M;
      }, _.clone = function() {
        return p.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), I = O.prototype;
    return C.prototype = I, [["$ms", o], ["$s", a], ["$m", s], ["$H", c], ["$W", u], ["$M", f], ["$y", g], ["$D", k]].forEach(function($) {
      I[$[1]] = function(_) {
        return this.$g(_, $[0], $[1]);
      };
    }), C.extend = function($, _) {
      return $.$i || ($(_, O, C), $.$i = !0), C;
    }, C.locale = U, C.isDayjs = w, C.unix = function($) {
      return C(1e3 * $);
    }, C.en = d[b], C.Ls = d, C.p = {}, C;
  });
})(Qr);
var jc = Qr.exports;
const we = /* @__PURE__ */ ye(jc);
var Kr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(pe, function() {
    var e, r, i = 1e3, o = 6e4, a = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, l = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u, months: l, days: s, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, g = function(d) {
      return d instanceof m;
    }, k = function(d, y, w) {
      return new m(d, w, y.$l);
    }, E = function(d) {
      return r.p(d) + "s";
    }, F = function(d) {
      return d < 0;
    }, P = function(d) {
      return F(d) ? Math.ceil(d) : Math.floor(d);
    }, D = function(d) {
      return Math.abs(d);
    }, A = function(d, y) {
      return d ? F(d) ? { negative: !0, format: "" + D(d) + y } : { negative: !1, format: "" + d + y } : { negative: !1, format: "" };
    }, m = function() {
      function d(w, U, C) {
        var p = this;
        if (this.$d = {}, this.$l = C, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), U) return k(w * h[E(U)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function($) {
          p.$d[E($)] = w[$];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var O = w.match(f);
          if (O) {
            var I = O.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = I[0], this.$d.months = I[1], this.$d.weeks = I[2], this.$d.days = I[3], this.$d.hours = I[4], this.$d.minutes = I[5], this.$d.seconds = I[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = d.prototype;
      return y.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(U, C) {
          return U + (w.$d[C] || 0) * h[C];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = P(w / u), w %= u, this.$d.months = P(w / l), w %= l, this.$d.days = P(w / s), w %= s, this.$d.hours = P(w / a), w %= a, this.$d.minutes = P(w / o), w %= o, this.$d.seconds = P(w / i), w %= i, this.$d.milliseconds = w;
      }, y.toISOString = function() {
        var w = A(this.$d.years, "Y"), U = A(this.$d.months, "M"), C = +this.$d.days || 0;
        this.$d.weeks && (C += 7 * this.$d.weeks);
        var p = A(C, "D"), O = A(this.$d.hours, "H"), I = A(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var _ = A($, "S"), v = w.negative || U.negative || p.negative || O.negative || I.negative || _.negative, S = O.format || I.format || _.format ? "T" : "", M = (v ? "-" : "") + "P" + w.format + U.format + p.format + S + O.format + I.format + _.format;
        return M === "P" || M === "-P" ? "P0D" : M;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(w) {
        var U = w || "YYYY-MM-DDTHH:mm:ss", C = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return U.replace(c, function(p, O) {
          return O || String(C[p]);
        });
      }, y.as = function(w) {
        return this.$ms / h[E(w)];
      }, y.get = function(w) {
        var U = this.$ms, C = E(w);
        return C === "milliseconds" ? U %= 1e3 : U = C === "weeks" ? P(U / h[C]) : this.$d[C], U || 0;
      }, y.add = function(w, U, C) {
        var p;
        return p = U ? w * h[E(U)] : g(w) ? w.$ms : k(w, this).$ms, k(this.$ms + p * (C ? -1 : 1), this);
      }, y.subtract = function(w, U) {
        return this.add(w, U, !0);
      }, y.locale = function(w) {
        var U = this.clone();
        return U.$l = w, U;
      }, y.clone = function() {
        return k(this.$ms, this);
      }, y.humanize = function(w) {
        return e().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, y.valueOf = function() {
        return this.asMilliseconds();
      }, y.milliseconds = function() {
        return this.get("milliseconds");
      }, y.asMilliseconds = function() {
        return this.as("milliseconds");
      }, y.seconds = function() {
        return this.get("seconds");
      }, y.asSeconds = function() {
        return this.as("seconds");
      }, y.minutes = function() {
        return this.get("minutes");
      }, y.asMinutes = function() {
        return this.as("minutes");
      }, y.hours = function() {
        return this.get("hours");
      }, y.asHours = function() {
        return this.as("hours");
      }, y.days = function() {
        return this.get("days");
      }, y.asDays = function() {
        return this.as("days");
      }, y.weeks = function() {
        return this.get("weeks");
      }, y.asWeeks = function() {
        return this.as("weeks");
      }, y.months = function() {
        return this.get("months");
      }, y.asMonths = function() {
        return this.as("months");
      }, y.years = function() {
        return this.get("years");
      }, y.asYears = function() {
        return this.as("years");
      }, d;
    }(), b = function(d, y, w) {
      return d.add(y.years() * w, "y").add(y.months() * w, "M").add(y.days() * w, "d").add(y.hours() * w, "h").add(y.minutes() * w, "m").add(y.seconds() * w, "s").add(y.milliseconds() * w, "ms");
    };
    return function(d, y, w) {
      e = w, r = w().$utils(), w.duration = function(p, O) {
        var I = w.locale();
        return k(p, { $l: I }, O);
      }, w.isDuration = g;
      var U = y.prototype.add, C = y.prototype.subtract;
      y.prototype.add = function(p, O) {
        return g(p) ? b(this, p, 1) : U.bind(this)(p, O);
      }, y.prototype.subtract = function(p, O) {
        return g(p) ? b(this, p, -1) : C.bind(this)(p, O);
      };
    };
  });
})(Kr);
var Jc = Kr.exports;
const Qc = /* @__PURE__ */ ye(Jc);
var ti = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(pe, function() {
    return function(e, r, i) {
      e = e || {};
      var o = r.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function s(u, l, f, h) {
        return o.fromToBase(u, l, f, h);
      }
      i.en.relativeTime = a, o.fromToBase = function(u, l, f, h, g) {
        for (var k, E, F, P = f.$locale().relativeTime || a, D = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], A = D.length, m = 0; m < A; m += 1) {
          var b = D[m];
          b.d && (k = h ? i(u).diff(f, b.d, !0) : f.diff(u, b.d, !0));
          var d = (e.rounding || Math.round)(Math.abs(k));
          if (F = k > 0, d <= b.r || !b.r) {
            d <= 1 && m > 0 && (b = D[m - 1]);
            var y = P[b.l];
            g && (d = g("" + d)), E = typeof y == "string" ? y.replace("%d", d) : y(d, l, b.l, F);
            break;
          }
        }
        if (l) return E;
        var w = F ? P.future : P.past;
        return typeof w == "function" ? w(E) : w.replace("%s", E);
      }, o.to = function(u, l) {
        return s(u, l, this, !0);
      }, o.from = function(u, l) {
        return s(u, l, this);
      };
      var c = function(u) {
        return u.$u ? i.utc() : i();
      };
      o.toNow = function(u) {
        return this.to(c(this), u);
      }, o.fromNow = function(u) {
        return this.from(c(this), u);
      };
    };
  });
})(ti);
var Kc = ti.exports;
const tl = /* @__PURE__ */ ye(Kc);
we.extend(Qc);
we.extend(tl);
function nl(t, n) {
  return we.duration(n - t).humanize();
}
function On() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(n) {
    return t.reduce((e, r) => r(e), n);
  };
}
function rn(t) {
  return function(n) {
    return t === void 0 ? n : n[t];
  };
}
const el = [
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
function rl(t) {
  const n = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(n);
}
function il(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function ol(t) {
  return il(t) > 165;
}
function al(t) {
  return ol(yt(t)) ? "black" : "white";
}
function rr(t) {
  const n = t.getFullYear(), e = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${n}${e}${r}`;
}
function Pt(t, n) {
  return "translate(" + t + "," + n + ")";
}
function ir(t, n) {
  ya(`g.task.${t}`).each(function(e) {
    V(this).style("display", n);
  });
}
function ul() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(n) {
    n.style.display = "none";
  });
}
function sl(t, n) {
  let r = t.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
  if (r) {
    let i = parseFloat(r[1]), o = parseFloat(r[2]);
    o += n, t.setAttribute("transform", `translate(${i},${o})`);
  }
}
function or(t, n, e) {
  const i = V(t).attr("class");
  let o = !1;
  n.selectAll("g.row").each(function(a) {
    const c = V(this).attr("class");
    c == i ? o = !0 : o && (sl(this, e), cl(c.split(" ")[1], e));
  });
}
function cl(t, n) {
  document.querySelectorAll(`g.task.${t} rect`).forEach(function(i) {
    let a = parseFloat(i.getAttribute("y")) + n;
    i.setAttribute("y", a);
  }), document.querySelectorAll(`g.task.${t} text`).forEach(function(i) {
    let a = parseFloat(i.getAttribute("y")) + n;
    i.setAttribute("y", a);
  });
}
function ar(t, n, e) {
  const i = V(t).attr("class"), o = [];
  let a = !1, s = !1;
  return n.selectAll("g.row").each(function(c) {
    const l = V(this).attr("class");
    l == i ? a = !0 : a && l.split(" ")[2] == "timelineheader" ? s = !0 : a && !s && o.push(l.split(" ")[1]);
  }), console.log(i.split(" ")[1]), e == "block" ? (ir(i.split(" ")[1], "none"), console.log("You pressed plus")) : (console.log("You pressed minus"), ir(i.split(" ")[1], "block")), o.forEach(function(c) {
    document.querySelectorAll(`.${c}`).forEach(function(l) {
      l.style.display = e;
    });
  }), o.length * 38;
}
function ur(t) {
  const n = document.querySelector('path[stroke-width="1.75"]');
  if (n) {
    let r = n.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/);
    if (r) {
      let i = parseFloat(r[1]), o = parseFloat(r[2]), s = parseFloat(r[3]) + t;
      n.setAttribute("d", `M${i},${o}V${s}`);
    }
  } else
    console.error('Path with stroke-width="1.75" not found.');
}
function sr(t) {
  const n = document.querySelector("g.x.axis.bottom-axis");
  if (n) {
    let r = n.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
    if (r) {
      let i = parseFloat(r[1]), a = parseFloat(r[2]) + t;
      n.setAttribute("transform", `translate(${i},${a})`);
    }
  } else
    console.error("x axis bottom-axis not found.");
}
function hl() {
  let t = el, n = 5, e = 2, r = !1, i = !1, o, a, s = 0, c = rn(0), u = rn(1), l = rn(2), f = rn(3);
  function h(D, A) {
    const m = D.select("text"), b = D.select("rect"), d = b.attr("width") - 2 * n, y = u(A);
    m.text(y);
    let w = m.node().getComputedTextLength();
    if (w > d) {
      const U = d < 0 ? 0 : d / w, C = Math.floor(y.length * U);
      m.text(C > 2 ? y.slice(0, C - 2) + "…" : "");
    }
  }
  function g(D, A, m) {
    const b = D.select("text").node(), d = b.getBBox(), y = m.scale().domain().indexOf(c(A)), w = m.colorscale()(y), U = D.selectAll("rect.bckg").data([A]).join("rect").attr("class", "bckg").attr("fill", w).attr("x", d.x - n + e).attr("y", d.y - 2).attr("width", d.width + n - e).attr("height", d.height);
    D.node().insertBefore(U.node(), b);
  }
  function k(D, A) {
    D.each(function(m, b) {
      const d = V(this.parentNode);
      f(m) - l(m) ? h(d, m) : g(d, m, A);
    });
  }
  function E(D) {
    return function(A, m) {
      qc(this).tween("text", function() {
        return function(b) {
          k(V(this), D);
        };
      });
    };
  }
  function F(D) {
    const A = D.datum(), m = new Set(pi(A, c)), b = new jr(P), d = Nt(t);
    o = o || [gi(A, l), cr(A, f)], i && (o = ai(o.concat(/* @__PURE__ */ new Date()))), D.each(function(y) {
      const w = a || this.getBoundingClientRect().width, U = m.size * (rl(this) + 4 * n), C = $r().domain(m).range([0, U]), p = Cs().domain(o), O = (r ? Gc : Zc)(C).width(w), I = V(this).selectAll("svg").data([1]).join("svg");
      I.attr("class", "timeline").attr("width", w).attr("height", U + 40);
      const $ = I.append("g").attr("transform", "translate(0,20)"), _ = $.append("g").attr("class", "y axis").call(O);
      _.selectAll("text").attr("text-anchor", function(H) {
        return H.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(H) {
        return H.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(H) {
        return H.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(H, B) {
        const nt = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(nt, "_blank");
      }), _.selectAll("g.row").each(function(H) {
        const B = V(this).datum();
        V(this).classed(V(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), B.startsWith(" •") && V(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), _.selectAll("g.row.timelineheader text").on("click", function(H, B) {
        const tt = V(this).text();
        if (tt === "+") {
          let G = ar(this.parentNode, _, "block");
          or(this.parentNode, _, G), ur(G), sr(G), V(this).text() === "+" ? V(this).text("-").style("font-size", "30px") : V(this).text("+");
        } else if (tt === "-") {
          let G = ar(this.parentNode, _, "none");
          or(this.parentNode, _, -G), ur(-G), sr(-G), V(this).text() === "-" ? V(this).text("+").style("font-size", "20px") : V(this).text("-");
        } else {
          const T = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
          window.open(T, "_blank");
        }
      });
      let v = O.range();
      p.range([v[0] + n, v[1] - n]).clamp(!0);
      const S = be(p), M = $.append("g").attr("class", "x axis").attr("transform", Pt(0, 0)).call(S);
      M.selectAll(".tick text").attr("dy", "-1.5em"), M.selectAll(".tick line").attr("y2", "-5");
      const N = be(p);
      I.append("g").attr("class", "x axis bottom-axis").attr("transform", Pt(0, U + 20)).call(N).selectAll(".tick line").attr("y2", "5"), _.on("offset", () => {
        v = O.range(), p.range([v[0] + n, v[1] - n]).clamp(!0), S.ticks(Math.min((v[1] - v[0]) / 70, 10)), M.call(S), q.attr("transform", (H) => Pt(p(l(H)), C(c(H)))).selectAll("rect").attr("width", (H) => p(f(H)) - p(l(H)) || e).call((H) => k(H, O)), _.call(O.draw_ticks, p.ticks().map(p));
      }), M.select(".domain").remove(), M.selectAll(".tick line").attr("stroke", "#AAA");
      const z = p.ticks().map(p);
      _.call(O.draw_ticks, z);
      let q = $.selectAll("g.task").data(y);
      q.exit().remove();
      const Z = q.enter().append("g").classed("task", !0);
      Z.each(function(H) {
        const B = c(H).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        V(this).classed(B, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", C.bandwidth() - 2 * n).on("mouseover", b.show).on("mouseout", b.hide).on("click", function(H, B) {
        var tt = String(B[1]), G = tt.replace(" ", "%20"), nt = B[2], T = rr(nt), Y = B[3], L = rr(Y), x = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + G + "%22%20%2Bdate_when%3A%5B" + T + "%20TO%20" + L + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(x, "_blank");
      }).style("fill", On(u, d)), Z.append("text").attr("text-anchor", "start").attr("fill", (H) => f(H) - l(H) ? On(u, d, al)(H) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", C.bandwidth() / 2).attr("dy", "0.32em").text(u), q = q.merge(Z), q.attr("transform", (H) => Pt(v[0], C(c(H)))).selectAll("rect").attr("width", 0), q.transition().duration(s).attr("transform", (H) => Pt(p(l(H)), C(c(H)))).selectAll("rect").attr("width", (H) => p(f(H)) - p(l(H)) || e).on("start", E(O)), i && $.append("path").attr("stroke", "red").attr("d", "M" + p(/* @__PURE__ */ new Date()) + ",0.5V" + U);
    }), ul();
  }
  return F.dates = function(D) {
    return arguments.length ? (o = D, F) : o;
  }, F.width = function(D) {
    return arguments.length ? (a = D, F) : a;
  }, F.today = function(D) {
    return arguments.length ? (i = D, F) : i;
  }, F.colors = function(D) {
    return arguments.length ? (t = D, F) : t;
  }, F.padding = function(D) {
    return arguments.length ? (n = D, F) : n;
  }, F.milestone_width = function(D) {
    return arguments.length ? (e = D, F) : e;
  }, F.reversed = function(D) {
    return arguments.length ? (r = D, F) : r;
  }, F.duration = function(D) {
    return arguments.length ? (s = D, F) : s;
  }, F;
  function P(D, A) {
    const m = On(ks, he("%Y-%m-%d")), b = `<b>${u(A)}</b><hr style="margin: 2px 0 2px 0">${m(l(A))}`, d = f(A) - l(A) ? ` - ${m(f(A))}<br>${nl(l(A), f(A))}` : "";
    return b + d;
  }
}
export {
  qc as active,
  be as axisBottom,
  fl as axisLeft,
  ll as axisRight,
  yt as color,
  Ta as drag,
  nl as durationFormat,
  ai as extent,
  ks as isoParse,
  pi as map,
  cr as max,
  gi as min,
  $r as scaleBand,
  au as scaleLinear,
  Nt as scaleOrdinal,
  Cs as scaleTime,
  V as select,
  he as timeFormat,
  hl as timeline,
  Zc as timelineAxisLeft,
  Gc as timelineAxisRight,
  jr as tooltip
};
