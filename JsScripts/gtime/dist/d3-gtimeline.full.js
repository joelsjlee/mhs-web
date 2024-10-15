function an(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Kr(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function jn(t) {
  let n, e, r;
  t.length !== 2 ? (n = an, e = (s, c) => an(t(s), c), r = (s, c) => t(s) - c) : (n = t === an || t === Kr ? t : ti, e = t, r = t);
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
function ti() {
  return 0;
}
function ni(t) {
  return t === null ? NaN : +t;
}
const ei = jn(an), ri = ei.right;
jn(ni).center;
function ii(t, n) {
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
class _e extends Map {
  constructor(n, e = ui) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(Me(this, n));
  }
  has(n) {
    return super.has(Me(this, n));
  }
  set(n, e) {
    return super.set(oi(this, n), e);
  }
  delete(n) {
    return super.delete(ai(this, n));
  }
}
function Me({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function oi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ai({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ui(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const si = Math.sqrt(50), ci = Math.sqrt(10), li = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= si ? 10 : o >= ci ? 5 : o >= li ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [s, c, u];
}
function fi(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? fn(n, t, e) : fn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * a;
  return c;
}
function In(t, n, e) {
  return n = +n, t = +t, e = +e, fn(t, n, e)[2];
}
function Ln(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? In(n, t, e) : In(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ur(t, n) {
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
function hi(t, n) {
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
function di(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function gi(t, n) {
  if (typeof t[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  if (typeof n != "function") throw new TypeError("mapper is not a function");
  return Array.from(t, (e, r) => n(e, r, t));
}
function mi(t) {
  return t;
}
var Cn = 1, un = 2, Pn = 3, Pt = 4, be = 1e-6;
function pi(t) {
  return "translate(" + t + ",0)";
}
function yi(t) {
  return "translate(0," + t + ")";
}
function wi(t) {
  return (n) => +t(n);
}
function xi(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function vi() {
  return !this.__axis;
}
function Kn(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === Cn || t === Pt ? -1 : 1, l = t === Pt || t === un ? "x" : "y", f = t === Cn || t === Pn ? pi : yi;
  function h(d) {
    var T = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), Y = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : mi), N = Math.max(o, 0) + s, I = n.range(), D = +I[0] + c, A = +I[I.length - 1] + c, p = (n.bandwidth ? xi : wi)(n.copy(), c), M = d.selection ? d.selection() : d, g = M.selectAll(".domain").data([null]), y = M.selectAll(".tick").data(T, n).order(), w = y.exit(), U = y.enter().append("g").attr("class", "tick"), C = y.select("line"), m = y.select("text");
    g = g.merge(g.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), y = y.merge(U), C = C.merge(U.append("line").attr("stroke", "currentColor").attr(l + "2", u * o)), m = m.merge(U.append("text").attr("fill", "currentColor").attr(l, u * N).attr("dy", t === Cn ? "0em" : t === Pn ? "0.71em" : "0.32em")), d !== M && (g = g.transition(d), y = y.transition(d), C = C.transition(d), m = m.transition(d), w = w.transition(d).attr("opacity", be).attr("transform", function(O) {
      return isFinite(O = p(O)) ? f(O + c) : this.getAttribute("transform");
    }), U.attr("opacity", be).attr("transform", function(O) {
      var L = this.parentNode.__axis;
      return f((L && isFinite(L = L(O)) ? L : p(O)) + c);
    })), w.remove(), g.attr("d", t === Pt || t === un ? a ? "M" + u * a + "," + D + "H" + c + "V" + A + "H" + u * a : "M" + c + "," + D + "V" + A : a ? "M" + D + "," + u * a + "V" + c + "H" + A + "V" + u * a : "M" + D + "," + c + "H" + A), y.attr("opacity", 1).attr("transform", function(O) {
      return f(p(O) + c);
    }), C.attr(l + "2", u * o), m.attr(l, u * N).text(Y), M.filter(vi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === un ? "start" : t === Pt ? "end" : "middle"), M.each(function() {
      this.__axis = p;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (n = d, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), h) : e.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), h) : r && r.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (i = d, h) : i;
  }, h.tickSize = function(d) {
    return arguments.length ? (o = a = +d, h) : o;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.tickPadding = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h.offset = function(d) {
    return arguments.length ? (c = +d, h) : c;
  }, h;
}
function al(t) {
  return Kn(un, t);
}
function $e(t) {
  return Kn(Pn, t);
}
function ul(t) {
  return Kn(Pt, t);
}
function te(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function sr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Jt() {
}
var Bt = 0.7, hn = 1 / Bt, At = "\\s*([+-]?\\d+)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _i = /^#([0-9a-f]{3,8})$/, Mi = new RegExp(`^rgb\\(${At},${At},${At}\\)$`), bi = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), $i = new RegExp(`^rgba\\(${At},${At},${At},${Xt}\\)$`), Ti = new RegExp(`^rgba\\(${ct},${ct},${ct},${Xt}\\)$`), ki = new RegExp(`^hsl\\(${Xt},${ct},${ct}\\)$`), Si = new RegExp(`^hsla\\(${Xt},${ct},${ct},${Xt}\\)$`), Te = {
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
te(Jt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ke,
  // Deprecated! Use color.formatHex.
  formatHex: ke,
  formatHex8: Ai,
  formatHsl: Ci,
  formatRgb: Se,
  toString: Se
});
function ke() {
  return this.rgb().formatHex();
}
function Ai() {
  return this.rgb().formatHex8();
}
function Ci() {
  return cr(this).formatHsl();
}
function Se() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = _i.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ae(n) : e === 3 ? new et(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Kt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Kt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Mi.exec(t)) ? new et(n[1], n[2], n[3], 1) : (n = bi.exec(t)) ? new et(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = $i.exec(t)) ? Kt(n[1], n[2], n[3], n[4]) : (n = Ti.exec(t)) ? Kt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ki.exec(t)) ? Ne(n[1], n[2] / 100, n[3] / 100, 1) : (n = Si.exec(t)) ? Ne(n[1], n[2] / 100, n[3] / 100, n[4]) : Te.hasOwnProperty(t) ? Ae(Te[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function Ae(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new et(t, n, e, r);
}
function Di(t) {
  return t instanceof Jt || (t = yt(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function Wn(t, n, e, r) {
  return arguments.length === 1 ? Di(t) : new et(t, n, e, r ?? 1);
}
function et(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
te(et, Wn, sr(Jt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new et(vt(this.r), vt(this.g), vt(this.b), dn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ce,
  // Deprecated! Use color.formatHex.
  formatHex: Ce,
  formatHex8: Ni,
  formatRgb: De,
  toString: De
}));
function Ce() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}`;
}
function Ni() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}${xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function De() {
  const t = dn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${vt(this.r)}, ${vt(this.g)}, ${vt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function dn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function vt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xt(t) {
  return t = vt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ne(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new ut(t, n, e, r);
}
function cr(t) {
  if (t instanceof ut) return new ut(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = yt(t)), !t) return new ut();
  if (t instanceof ut) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new ut(a, s, c, t.opacity);
}
function Fi(t, n, e, r) {
  return arguments.length === 1 ? cr(t) : new ut(t, n, e, r ?? 1);
}
function ut(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
te(ut, Fi, sr(Jt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new et(
      Dn(t >= 240 ? t - 240 : t + 120, i, r),
      Dn(t, i, r),
      Dn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ut(Fe(this.h), tn(this.s), tn(this.l), dn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = dn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Fe(this.h)}, ${tn(this.s) * 100}%, ${tn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Fe(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function tn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Dn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var Ui = { value: () => {
} };
function ne() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new sn(e);
}
function sn(t) {
  this._ = t;
}
function Yi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
sn.prototype = ne.prototype = {
  constructor: sn,
  on: function(t, n) {
    var e = this._, r = Yi(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ei(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ue(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ue(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new sn(t);
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
function Ei(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ue(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ui, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var qn = "http://www.w3.org/1999/xhtml";
const Ye = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $n(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ye.hasOwnProperty(n) ? { space: Ye[n], local: t } : t;
}
function Hi(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === qn && n.documentElement.namespaceURI === qn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Oi(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function lr(t) {
  var n = $n(t);
  return (n.local ? Oi : Hi)(n);
}
function Ri() {
}
function ee(t) {
  return t == null ? Ri : function() {
    return this.querySelector(t);
  };
}
function Ii(t) {
  typeof t != "function" && (t = ee(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), c, u, l = 0; l < a; ++l)
      (c = o[l]) && (u = t.call(c, c.__data__, l, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new tt(r, this._parents);
}
function fr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Li() {
  return [];
}
function hr(t) {
  return t == null ? Li : function() {
    return this.querySelectorAll(t);
  };
}
function Pi(t) {
  return function() {
    return fr(t.apply(this, arguments));
  };
}
function Wi(t) {
  typeof t == "function" ? t = Pi(t) : t = hr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new tt(r, i);
}
function dr(t) {
  return function() {
    return this.matches(t);
  };
}
function gr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var qi = Array.prototype.find;
function zi(t) {
  return function() {
    return qi.call(this.children, t);
  };
}
function Vi() {
  return this.firstElementChild;
}
function Bi(t) {
  return this.select(t == null ? Vi : zi(typeof t == "function" ? t : gr(t)));
}
var Xi = Array.prototype.filter;
function Zi() {
  return Array.from(this.children);
}
function Gi(t) {
  return function() {
    return Xi.call(this.children, t);
  };
}
function Ji(t) {
  return this.selectAll(t == null ? Zi : Gi(typeof t == "function" ? t : gr(t)));
}
function Qi(t) {
  typeof t != "function" && (t = dr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new tt(r, this._parents);
}
function mr(t) {
  return new Array(t.length);
}
function ji() {
  return new tt(this._enter || this._groups.map(mr), this._parents);
}
function gn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
gn.prototype = {
  constructor: gn,
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
function Ki(t) {
  return function() {
    return t;
  };
}
function to(t, n, e, r, i, o) {
  for (var a = 0, s, c = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new gn(t, o[a]);
  for (; a < c; ++a)
    (s = n[a]) && (i[a] = s);
}
function no(t, n, e, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), d;
  for (s = 0; s < l; ++s)
    (c = n[s]) && (h[s] = d = a.call(c, c.__data__, s, n) + "", u.has(d) ? i[s] = c : u.set(d, c));
  for (s = 0; s < f; ++s)
    d = a.call(t, o[s], s, o) + "", (c = u.get(d)) ? (r[s] = c, c.__data__ = o[s], u.delete(d)) : e[s] = new gn(t, o[s]);
  for (s = 0; s < l; ++s)
    (c = n[s]) && u.get(h[s]) === c && (i[s] = c);
}
function eo(t) {
  return t.__data__;
}
function ro(t, n) {
  if (!arguments.length) return Array.from(this, eo);
  var e = n ? no : to, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ki(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], f = i[u], h = f.length, d = io(t.call(l, l && l.__data__, u, r)), T = d.length, Y = s[u] = new Array(T), N = a[u] = new Array(T), I = c[u] = new Array(h);
    e(l, f, Y, N, I, d, n);
    for (var D = 0, A = 0, p, M; D < T; ++D)
      if (p = Y[D]) {
        for (D >= A && (A = D + 1); !(M = N[A]) && ++A < T; ) ;
        p._next = M || null;
      }
  }
  return a = new tt(a, r), a._enter = s, a._exit = c, a;
}
function io(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function oo() {
  return new tt(this._exit || this._groups.map(mr), this._parents);
}
function ao(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function uo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = e[c], l = r[c], f = u.length, h = s[c] = new Array(f), d, T = 0; T < f; ++T)
      (d = u[T] || l[T]) && (h[T] = d);
  for (; c < i; ++c)
    s[c] = e[c];
  return new tt(s, this._parents);
}
function so() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function co(t) {
  t || (t = lo);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), u, l = 0; l < s; ++l)
      (u = a[l]) && (c[l] = u);
    c.sort(n);
  }
  return new tt(i, this._parents).order();
}
function lo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function fo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ho() {
  return Array.from(this);
}
function go() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function mo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function po() {
  return !this.node();
}
function yo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function wo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function xo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function vo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function _o(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Mo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function bo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function $o(t, n) {
  var e = $n(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? xo : wo : typeof n == "function" ? e.local ? bo : Mo : e.local ? _o : vo)(e, n));
}
function pr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function To(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ko(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function So(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ao(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? To : typeof n == "function" ? So : ko)(t, n, e ?? "")) : Nt(this.node(), t);
}
function Nt(t, n) {
  return t.style.getPropertyValue(n) || pr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Co(t) {
  return function() {
    delete this[t];
  };
}
function Do(t, n) {
  return function() {
    this[t] = n;
  };
}
function No(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Fo(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Co : typeof n == "function" ? No : Do)(t, n)) : this.node()[t];
}
function yr(t) {
  return t.trim().split(/^|\s+/);
}
function re(t) {
  return t.classList || new wr(t);
}
function wr(t) {
  this._node = t, this._names = yr(t.getAttribute("class") || "");
}
wr.prototype = {
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
function xr(t, n) {
  for (var e = re(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function vr(t, n) {
  for (var e = re(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Uo(t) {
  return function() {
    xr(this, t);
  };
}
function Yo(t) {
  return function() {
    vr(this, t);
  };
}
function Eo(t, n) {
  return function() {
    (n.apply(this, arguments) ? xr : vr)(this, t);
  };
}
function Ho(t, n) {
  var e = yr(t + "");
  if (arguments.length < 2) {
    for (var r = re(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Eo : n ? Uo : Yo)(e, n));
}
function Oo() {
  this.textContent = "";
}
function Ro(t) {
  return function() {
    this.textContent = t;
  };
}
function Io(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Lo(t) {
  return arguments.length ? this.each(t == null ? Oo : (typeof t == "function" ? Io : Ro)(t)) : this.node().textContent;
}
function Po() {
  this.innerHTML = "";
}
function Wo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function qo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function zo(t) {
  return arguments.length ? this.each(t == null ? Po : (typeof t == "function" ? qo : Wo)(t)) : this.node().innerHTML;
}
function Vo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Bo() {
  return this.each(Vo);
}
function Xo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Zo() {
  return this.each(Xo);
}
function Go(t) {
  var n = typeof t == "function" ? t : lr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Jo() {
  return null;
}
function Qo(t, n) {
  var e = typeof t == "function" ? t : lr(t), r = n == null ? Jo : typeof n == "function" ? n : ee(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function jo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ko() {
  return this.each(jo);
}
function ta() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function na() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ea(t) {
  return this.select(t ? na : ta);
}
function ra(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ia(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function oa(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function aa(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ua(t, n, e) {
  return function() {
    var r = this.__on, i, o = ia(n);
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
function sa(t, n, e) {
  var r = oa(t + ""), i, o = r.length, a;
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
  for (s = n ? ua : aa, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function _r(t, n, e) {
  var r = pr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ca(t, n) {
  return function() {
    return _r(this, t, n);
  };
}
function la(t, n) {
  return function() {
    return _r(this, t, n.apply(this, arguments));
  };
}
function fa(t, n) {
  return this.each((typeof n == "function" ? la : ca)(t, n));
}
function* ha() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ie = [null];
function tt(t, n) {
  this._groups = t, this._parents = n;
}
function Qt() {
  return new tt([[document.documentElement]], ie);
}
function da() {
  return this;
}
tt.prototype = Qt.prototype = {
  constructor: tt,
  select: Ii,
  selectAll: Wi,
  selectChild: Bi,
  selectChildren: Ji,
  filter: Qi,
  data: ro,
  enter: ji,
  exit: oo,
  join: ao,
  merge: uo,
  selection: da,
  order: so,
  sort: co,
  call: fo,
  nodes: ho,
  node: go,
  size: mo,
  empty: po,
  each: yo,
  attr: $o,
  style: Ao,
  property: Fo,
  classed: Ho,
  text: Lo,
  html: zo,
  raise: Bo,
  lower: Zo,
  append: Go,
  insert: Qo,
  remove: Ko,
  clone: ea,
  datum: ra,
  on: sa,
  dispatch: fa,
  [Symbol.iterator]: ha
};
function W(t) {
  return typeof t == "string" ? new tt([[document.querySelector(t)]], [document.documentElement]) : new tt([[t]], ie);
}
function ga(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Ee(t, n) {
  if (t = ga(t), n === void 0 && (n = t.currentTarget), n) {
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
function Vt(t) {
  return typeof t == "string" ? new tt([document.querySelectorAll(t)], [document.documentElement]) : new tt([fr(t)], ie);
}
const ma = { passive: !1 }, Zt = { capture: !0, passive: !1 };
function Nn(t) {
  t.stopImmediatePropagation();
}
function Ct(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function pa(t) {
  var n = t.document.documentElement, e = W(t).on("dragstart.drag", Ct, Zt);
  "onselectstart" in n ? e.on("selectstart.drag", Ct, Zt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function ya(t, n) {
  var e = t.document.documentElement, r = W(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Ct, Zt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const nn = (t) => () => t;
function zn(t, {
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
zn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function wa(t) {
  return !t.ctrlKey && !t.button;
}
function xa() {
  return this.parentNode;
}
function va(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function _a() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function sl() {
  var t = wa, n = xa, e = va, r = _a, i = {}, o = ne("start", "drag", "end"), a = 0, s, c, u, l, f = 0;
  function h(p) {
    p.on("mousedown.drag", d).filter(r).on("touchstart.drag", N).on("touchmove.drag", I, ma).on("touchend.drag touchcancel.drag", D).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(p, M) {
    if (!(l || !t.call(this, p, M))) {
      var g = A(this, n.call(this, p, M), p, M, "mouse");
      g && (W(p.view).on("mousemove.drag", T, Zt).on("mouseup.drag", Y, Zt), pa(p.view), Nn(p), u = !1, s = p.clientX, c = p.clientY, g("start", p));
    }
  }
  function T(p) {
    if (Ct(p), !u) {
      var M = p.clientX - s, g = p.clientY - c;
      u = M * M + g * g > f;
    }
    i.mouse("drag", p);
  }
  function Y(p) {
    W(p.view).on("mousemove.drag mouseup.drag", null), ya(p.view, u), Ct(p), i.mouse("end", p);
  }
  function N(p, M) {
    if (t.call(this, p, M)) {
      var g = p.changedTouches, y = n.call(this, p, M), w = g.length, U, C;
      for (U = 0; U < w; ++U)
        (C = A(this, y, p, M, g[U].identifier, g[U])) && (Nn(p), C("start", p, g[U]));
    }
  }
  function I(p) {
    var M = p.changedTouches, g = M.length, y, w;
    for (y = 0; y < g; ++y)
      (w = i[M[y].identifier]) && (Ct(p), w("drag", p, M[y]));
  }
  function D(p) {
    var M = p.changedTouches, g = M.length, y, w;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), y = 0; y < g; ++y)
      (w = i[M[y].identifier]) && (Nn(p), w("end", p, M[y]));
  }
  function A(p, M, g, y, w, U) {
    var C = o.copy(), m = Ee(U || g, M), O, L, k;
    if ((k = e.call(p, new zn("beforestart", {
      sourceEvent: g,
      target: h,
      identifier: w,
      active: a,
      x: m[0],
      y: m[1],
      dx: 0,
      dy: 0,
      dispatch: C
    }), y)) != null)
      return O = k.x - m[0] || 0, L = k.y - m[1] || 0, function _(v, S, b) {
        var F = m, R;
        switch (v) {
          case "start":
            i[w] = _, R = a++;
            break;
          case "end":
            delete i[w], --a;
          case "drag":
            m = Ee(b || S, M), R = a;
            break;
        }
        C.call(
          v,
          p,
          new zn(v, {
            sourceEvent: S,
            subject: k,
            target: h,
            identifier: w,
            active: R,
            x: m[0] + O,
            y: m[1] + L,
            dx: m[0] - F[0],
            dy: m[1] - F[1],
            dispatch: C
          }),
          y
        );
      };
  }
  return h.filter = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : nn(!!p), h) : t;
  }, h.container = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : nn(p), h) : n;
  }, h.subject = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : nn(p), h) : e;
  }, h.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : nn(!!p), h) : r;
  }, h.on = function() {
    var p = o.on.apply(o, arguments);
    return p === o ? h : p;
  }, h.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, h) : Math.sqrt(f);
  }, h;
}
function Tn(t, n) {
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
const He = Symbol("implicit");
function Dt() {
  var t = new _e(), n = [], e = [], r = He;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== He) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new _e();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Dt(n, e).unknown(r);
  }, Tn.apply(i, arguments), i;
}
function Mr() {
  var t = Dt().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, c = 0, u = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, d = i < r, T = d ? i : r, Y = d ? r : i;
    o = (Y - T) / Math.max(1, h - c + u * 2), s && (o = Math.floor(o)), T += (Y - T - o * (h - c)) * l, a = o * (1 - c), s && (T = Math.round(T), a = Math.round(a));
    var N = di(h).map(function(I) {
      return T + o * I;
    });
    return e(d ? N.reverse() : N);
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
    return Mr(n(), [r, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, Tn.apply(f(), arguments);
}
const oe = (t) => () => t;
function Ma(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ba(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function $a(t) {
  return (t = +t) == 1 ? br : function(n, e) {
    return e - n ? ba(n, e, t) : oe(isNaN(n) ? e : n);
  };
}
function br(t, n) {
  var e = n - t;
  return e ? Ma(t, e) : oe(isNaN(t) ? n : t);
}
const mn = function t(n) {
  var e = $a(n);
  function r(i, o) {
    var a = e((i = Wn(i)).r, (o = Wn(o)).r), s = e(i.g, o.g), c = e(i.b, o.b), u = br(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ta(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function ka(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Sa(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ae(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Aa(t, n) {
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
function Ca(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ae(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fn = new RegExp(Vn.source, "g");
function Da(t) {
  return function() {
    return t;
  };
}
function Na(t) {
  return function(n) {
    return t(n) + "";
  };
}
function $r(t, n) {
  var e = Vn.lastIndex = Fn.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = Vn.exec(t)) && (i = Fn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: at(r, i) })), e = Fn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? Na(c[0].x) : Da(n) : (n = c.length, function(u) {
    for (var l = 0, f; l < n; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function ae(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? oe(n) : (e === "number" ? at : e === "string" ? (r = yt(n)) ? (n = r, mn) : $r : n instanceof yt ? mn : n instanceof Date ? Aa : ka(n) ? Ta : Array.isArray(n) ? Sa : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ca : at)(t, n);
}
function Fa(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Oe = 180 / Math.PI, Bn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Tr(t, n, e, r, i, o) {
  var a, s, c;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Oe,
    skewX: Math.atan(c) * Oe,
    scaleX: a,
    scaleY: s
  };
}
var en;
function Ua(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Bn : Tr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ya(t) {
  return t == null || (en || (en = document.createElementNS("http://www.w3.org/2000/svg", "g")), en.setAttribute("transform", t), !(t = en.transform.baseVal.consolidate())) ? Bn : (t = t.matrix, Tr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function kr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, f, h, d, T) {
    if (u !== f || l !== h) {
      var Y = d.push("translate(", null, n, null, e);
      T.push({ i: Y - 4, x: at(u, f) }, { i: Y - 2, x: at(l, h) });
    } else (f || h) && d.push("translate(" + f + n + h + e);
  }
  function a(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: at(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: at(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, d, T) {
    if (u !== f || l !== h) {
      var Y = d.push(i(d) + "scale(", null, ",", null, ")");
      T.push({ i: Y - 4, x: at(u, f) }, { i: Y - 2, x: at(l, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, f, h), a(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(d) {
      for (var T = -1, Y = h.length, N; ++T < Y; ) f[(N = h[T]).i] = N.x(d);
      return f.join("");
    };
  };
}
var Ea = kr(Ua, "px, ", "px)", "deg)"), Ha = kr(Ya, ", ", ")", ")");
function Oa(t) {
  return function() {
    return t;
  };
}
function Ra(t) {
  return +t;
}
var Re = [0, 1];
function kt(t) {
  return t;
}
function Xn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Oa(isNaN(n) ? NaN : 0.5);
}
function Ia(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function La(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Xn(i, r), o = e(a, o)) : (r = Xn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Pa(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Xn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var c = ri(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function Sr(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Wa() {
  var t = Re, n = Re, e = ae, r, i, o, a = kt, s, c, u;
  function l() {
    var h = Math.min(t.length, n.length);
    return a !== kt && (a = Ia(t[0], t[h - 1])), s = h > 2 ? Pa : La, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((u || (u = s(n, t.map(r), at)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Ra), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), l()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Fa, l();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : kt, l()) : a !== kt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, l();
  };
}
function Ar() {
  return Wa()(kt, kt);
}
function qa(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function pn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ft(t) {
  return t = pn(Math.abs(t)), t ? t[1] : NaN;
}
function za(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Va(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Ba = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function yn(t) {
  if (!(n = Ba.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ue({
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
yn.prototype = ue.prototype;
function ue(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ue.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Xa(t) {
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
var Cr;
function Za(t, n) {
  var e = pn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Cr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + pn(t, Math.max(0, n + o - 1))[0];
}
function Ie(t, n) {
  var e = pn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Le = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: qa,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Ie(t * 100, n),
  r: Ie,
  s: Za,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Pe(t) {
  return t;
}
var We = Array.prototype.map, qe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ga(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Pe : za(We.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Pe : Va(We.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = yn(f);
    var h = f.fill, d = f.align, T = f.sign, Y = f.symbol, N = f.zero, I = f.width, D = f.comma, A = f.precision, p = f.trim, M = f.type;
    M === "n" ? (D = !0, M = "g") : Le[M] || (A === void 0 && (A = 12), p = !0, M = "g"), (N || h === "0" && d === "=") && (N = !0, h = "0", d = "=");
    var g = Y === "$" ? e : Y === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", y = Y === "$" ? r : /[%p]/.test(M) ? a : "", w = Le[M], U = /[defgprs%]/.test(M);
    A = A === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function C(m) {
      var O = g, L = y, k, _, v;
      if (M === "c")
        L = w(m) + L, m = "";
      else {
        m = +m;
        var S = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? c : w(Math.abs(m), A), p && (m = Xa(m)), S && +m == 0 && T !== "+" && (S = !1), O = (S ? T === "(" ? T : s : T === "-" || T === "(" ? "" : T) + O, L = (M === "s" ? qe[8 + Cr / 3] : "") + L + (S && T === "(" ? ")" : ""), U) {
          for (k = -1, _ = m.length; ++k < _; )
            if (v = m.charCodeAt(k), 48 > v || v > 57) {
              L = (v === 46 ? i + m.slice(k + 1) : m.slice(k)) + L, m = m.slice(0, k);
              break;
            }
        }
      }
      D && !N && (m = n(m, 1 / 0));
      var b = O.length + m.length + L.length, F = b < I ? new Array(I - b + 1).join(h) : "";
      switch (D && N && (m = n(F + m, F.length ? I - L.length : 1 / 0), F = ""), d) {
        case "<":
          m = O + m + L + F;
          break;
        case "=":
          m = O + F + m + L;
          break;
        case "^":
          m = F.slice(0, b = F.length >> 1) + O + m + L + F.slice(b);
          break;
        default:
          m = F + O + m + L;
          break;
      }
      return o(m);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function l(f, h) {
    var d = u((f = yn(f), f.type = "f", f)), T = Math.max(-8, Math.min(8, Math.floor(Ft(h) / 3))) * 3, Y = Math.pow(10, -T), N = qe[8 + T / 3];
    return function(I) {
      return d(Y * I) + N;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var rn, Dr, Nr;
Ja({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ja(t) {
  return rn = Ga(t), Dr = rn.format, Nr = rn.formatPrefix, rn;
}
function Qa(t) {
  return Math.max(0, -Ft(Math.abs(t)));
}
function ja(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ft(n) / 3))) * 3 - Ft(Math.abs(t)));
}
function Ka(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ft(n) - Ft(t)) + 1;
}
function tu(t, n, e, r) {
  var i = Ln(t, n, e), o;
  switch (r = yn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = ja(i, a)) && (r.precision = o), Nr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ka(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Qa(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Dr(r);
}
function nu(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return fi(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return tu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); l-- > 0; ) {
      if (u = In(a, s, e), u === c)
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
function eu() {
  var t = Ar();
  return t.copy = function() {
    return Sr(t, eu());
  }, Tn.apply(t, arguments), nu(t);
}
function ru(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const Un = /* @__PURE__ */ new Date(), Yn = /* @__PURE__ */ new Date();
function Q(t, n, e, r) {
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
  }, i.filter = (o) => Q((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; n(a, -1), !o(a); )
          ;
      else for (; --s >= 0; )
        for (; n(a, 1), !o(a); )
          ;
  }), e && (i.count = (o, a) => (Un.setTime(+o), Yn.setTime(+a), t(Un), t(Yn), Math.floor(e(Un, Yn))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const wn = Q(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
wn.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? Q((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : wn);
wn.range;
const dt = 1e3, ot = dt * 60, gt = ot * 60, mt = gt * 24, se = mt * 7, ze = mt * 30, En = mt * 365, St = Q((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * dt);
}, (t, n) => (n - t) / dt, (t) => t.getUTCSeconds());
St.range;
const ce = Q((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt);
}, (t, n) => {
  t.setTime(+t + n * ot);
}, (t, n) => (n - t) / ot, (t) => t.getMinutes());
ce.range;
const iu = Q((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * ot);
}, (t, n) => (n - t) / ot, (t) => t.getUTCMinutes());
iu.range;
const le = Q((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt - t.getMinutes() * ot);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getHours());
le.range;
const ou = Q((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getUTCHours());
ou.range;
const jt = Q(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / mt,
  (t) => t.getDate() - 1
);
jt.range;
const fe = Q((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => t.getUTCDate() - 1);
fe.range;
const au = Q((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => Math.floor(t / mt));
au.range;
function bt(t) {
  return Q((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * ot) / se);
}
const kn = bt(0), xn = bt(1), uu = bt(2), su = bt(3), Ut = bt(4), cu = bt(5), lu = bt(6);
kn.range;
xn.range;
uu.range;
su.range;
Ut.range;
cu.range;
lu.range;
function $t(t) {
  return Q((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / se);
}
const Fr = $t(0), vn = $t(1), fu = $t(2), hu = $t(3), Yt = $t(4), du = $t(5), gu = $t(6);
Fr.range;
vn.range;
fu.range;
hu.range;
Yt.range;
du.range;
gu.range;
const he = Q((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
he.range;
const mu = Q((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
mu.range;
const pt = Q((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n);
}, (t, n) => n.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
pt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Q((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setFullYear(n.getFullYear() + e * t);
});
pt.range;
const _t = Q((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
_t.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Q((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCFullYear(n.getUTCFullYear() + e * t);
});
_t.range;
function pu(t, n, e, r, i, o) {
  const a = [
    [St, 1, dt],
    [St, 5, 5 * dt],
    [St, 15, 15 * dt],
    [St, 30, 30 * dt],
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
    [e, 1, se],
    [n, 1, ze],
    [n, 3, 3 * ze],
    [t, 1, En]
  ];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const d = f && typeof f.range == "function" ? f : c(u, l, f), T = d ? d.range(u, +l + 1) : [];
    return h ? T.reverse() : T;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, d = jn(([, , N]) => N).right(a, h);
    if (d === a.length) return t.every(Ln(u / En, l / En, f));
    if (d === 0) return wn.every(Math.max(Ln(u, l, f), 1));
    const [T, Y] = a[h / a[d - 1][2] < a[d][2] / h ? d - 1 : d];
    return T.every(Y);
  }
  return [s, c];
}
const [yu, wu] = pu(pt, he, kn, jt, le, ce);
function Hn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function On(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ht(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function xu(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, c = t.shortMonths, u = Ot(i), l = Rt(i), f = Ot(o), h = Rt(o), d = Ot(a), T = Rt(a), Y = Ot(s), N = Rt(s), I = Ot(c), D = Rt(c), A = {
    a: S,
    A: b,
    b: F,
    B: R,
    c: null,
    d: Je,
    e: Je,
    f: Wu,
    g: ju,
    G: ts,
    H: Iu,
    I: Lu,
    j: Pu,
    L: Ur,
    m: qu,
    M: zu,
    p: V,
    q: z,
    Q: Ke,
    s: tr,
    S: Vu,
    u: Bu,
    U: Xu,
    V: Zu,
    w: Gu,
    W: Ju,
    x: null,
    X: null,
    y: Qu,
    Y: Ku,
    Z: ns,
    "%": je
  }, p = {
    a: Z,
    A: H,
    b: B,
    B: nt,
    c: null,
    d: Qe,
    e: Qe,
    f: os,
    g: ms,
    G: ys,
    H: es,
    I: rs,
    j: is,
    L: Er,
    m: as,
    M: us,
    p: G,
    q: K,
    Q: Ke,
    s: tr,
    S: ss,
    u: cs,
    U: ls,
    V: fs,
    w: hs,
    W: ds,
    x: null,
    X: null,
    y: gs,
    Y: ps,
    Z: ws,
    "%": je
  }, M = {
    a: C,
    A: m,
    b: O,
    B: L,
    c: k,
    d: Ze,
    e: Ze,
    f: Eu,
    g: Xe,
    G: Be,
    H: Ge,
    I: Ge,
    j: Nu,
    L: Yu,
    m: Du,
    M: Fu,
    p: U,
    q: Cu,
    Q: Ou,
    s: Ru,
    S: Uu,
    u: $u,
    U: Tu,
    V: ku,
    w: bu,
    W: Su,
    x: _,
    X: v,
    y: Xe,
    Y: Be,
    Z: Au,
    "%": Hu
  };
  A.x = g(e, A), A.X = g(r, A), A.c = g(n, A), p.x = g(e, p), p.X = g(r, p), p.c = g(n, p);
  function g($, E) {
    return function(P) {
      var x = [], J = -1, X = 0, rt = $.length, it, wt, ve;
      for (P instanceof Date || (P = /* @__PURE__ */ new Date(+P)); ++J < rt; )
        $.charCodeAt(J) === 37 && (x.push($.slice(X, J)), (wt = Ve[it = $.charAt(++J)]) != null ? it = $.charAt(++J) : wt = it === "e" ? " " : "0", (ve = E[it]) && (it = ve(P, wt)), x.push(it), X = J + 1);
      return x.push($.slice(X, J)), x.join("");
    };
  }
  function y($, E) {
    return function(P) {
      var x = Ht(1900, void 0, 1), J = w(x, $, P += "", 0), X, rt;
      if (J != P.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (E && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (X = On(Ht(x.y, 0, 1)), rt = X.getUTCDay(), X = rt > 4 || rt === 0 ? vn.ceil(X) : vn(X), X = fe.offset(X, (x.V - 1) * 7), x.y = X.getUTCFullYear(), x.m = X.getUTCMonth(), x.d = X.getUTCDate() + (x.w + 6) % 7) : (X = Hn(Ht(x.y, 0, 1)), rt = X.getDay(), X = rt > 4 || rt === 0 ? xn.ceil(X) : xn(X), X = jt.offset(X, (x.V - 1) * 7), x.y = X.getFullYear(), x.m = X.getMonth(), x.d = X.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), rt = "Z" in x ? On(Ht(x.y, 0, 1)).getUTCDay() : Hn(Ht(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (rt + 5) % 7 : x.w + x.U * 7 - (rt + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, On(x)) : Hn(x);
    };
  }
  function w($, E, P, x) {
    for (var J = 0, X = E.length, rt = P.length, it, wt; J < X; ) {
      if (x >= rt) return -1;
      if (it = E.charCodeAt(J++), it === 37) {
        if (it = E.charAt(J++), wt = M[it in Ve ? E.charAt(J++) : it], !wt || (x = wt($, P, x)) < 0) return -1;
      } else if (it != P.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function U($, E, P) {
    var x = u.exec(E.slice(P));
    return x ? ($.p = l.get(x[0].toLowerCase()), P + x[0].length) : -1;
  }
  function C($, E, P) {
    var x = d.exec(E.slice(P));
    return x ? ($.w = T.get(x[0].toLowerCase()), P + x[0].length) : -1;
  }
  function m($, E, P) {
    var x = f.exec(E.slice(P));
    return x ? ($.w = h.get(x[0].toLowerCase()), P + x[0].length) : -1;
  }
  function O($, E, P) {
    var x = I.exec(E.slice(P));
    return x ? ($.m = D.get(x[0].toLowerCase()), P + x[0].length) : -1;
  }
  function L($, E, P) {
    var x = Y.exec(E.slice(P));
    return x ? ($.m = N.get(x[0].toLowerCase()), P + x[0].length) : -1;
  }
  function k($, E, P) {
    return w($, n, E, P);
  }
  function _($, E, P) {
    return w($, e, E, P);
  }
  function v($, E, P) {
    return w($, r, E, P);
  }
  function S($) {
    return a[$.getDay()];
  }
  function b($) {
    return o[$.getDay()];
  }
  function F($) {
    return c[$.getMonth()];
  }
  function R($) {
    return s[$.getMonth()];
  }
  function V($) {
    return i[+($.getHours() >= 12)];
  }
  function z($) {
    return 1 + ~~($.getMonth() / 3);
  }
  function Z($) {
    return a[$.getUTCDay()];
  }
  function H($) {
    return o[$.getUTCDay()];
  }
  function B($) {
    return c[$.getUTCMonth()];
  }
  function nt($) {
    return s[$.getUTCMonth()];
  }
  function G($) {
    return i[+($.getUTCHours() >= 12)];
  }
  function K($) {
    return 1 + ~~($.getUTCMonth() / 3);
  }
  return {
    format: function($) {
      var E = g($ += "", A);
      return E.toString = function() {
        return $;
      }, E;
    },
    parse: function($) {
      var E = y($ += "", !1);
      return E.toString = function() {
        return $;
      }, E;
    },
    utcFormat: function($) {
      var E = g($ += "", p);
      return E.toString = function() {
        return $;
      }, E;
    },
    utcParse: function($) {
      var E = y($ += "", !0);
      return E.toString = function() {
        return $;
      }, E;
    }
  };
}
var Ve = { "-": "", _: " ", 0: "0" }, j = /^\s*\d+/, vu = /^%/, _u = /[\\^$*+?|[\]().{}]/g;
function q(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function Mu(t) {
  return t.replace(_u, "\\$&");
}
function Ot(t) {
  return new RegExp("^(?:" + t.map(Mu).join("|") + ")", "i");
}
function Rt(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function bu(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function $u(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function Tu(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function ku(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function Su(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function Be(t, n, e) {
  var r = j.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function Xe(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function Au(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function Cu(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function Du(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function Ze(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function Nu(t, n, e) {
  var r = j.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Ge(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function Fu(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function Uu(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function Yu(t, n, e) {
  var r = j.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function Eu(t, n, e) {
  var r = j.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function Hu(t, n, e) {
  var r = vu.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function Ou(t, n, e) {
  var r = j.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function Ru(t, n, e) {
  var r = j.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function Je(t, n) {
  return q(t.getDate(), n, 2);
}
function Iu(t, n) {
  return q(t.getHours(), n, 2);
}
function Lu(t, n) {
  return q(t.getHours() % 12 || 12, n, 2);
}
function Pu(t, n) {
  return q(1 + jt.count(pt(t), t), n, 3);
}
function Ur(t, n) {
  return q(t.getMilliseconds(), n, 3);
}
function Wu(t, n) {
  return Ur(t, n) + "000";
}
function qu(t, n) {
  return q(t.getMonth() + 1, n, 2);
}
function zu(t, n) {
  return q(t.getMinutes(), n, 2);
}
function Vu(t, n) {
  return q(t.getSeconds(), n, 2);
}
function Bu(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function Xu(t, n) {
  return q(kn.count(pt(t) - 1, t), n, 2);
}
function Yr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Ut(t) : Ut.ceil(t);
}
function Zu(t, n) {
  return t = Yr(t), q(Ut.count(pt(t), t) + (pt(t).getDay() === 4), n, 2);
}
function Gu(t) {
  return t.getDay();
}
function Ju(t, n) {
  return q(xn.count(pt(t) - 1, t), n, 2);
}
function Qu(t, n) {
  return q(t.getFullYear() % 100, n, 2);
}
function ju(t, n) {
  return t = Yr(t), q(t.getFullYear() % 100, n, 2);
}
function Ku(t, n) {
  return q(t.getFullYear() % 1e4, n, 4);
}
function ts(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Ut(t) : Ut.ceil(t), q(t.getFullYear() % 1e4, n, 4);
}
function ns(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + q(n / 60 | 0, "0", 2) + q(n % 60, "0", 2);
}
function Qe(t, n) {
  return q(t.getUTCDate(), n, 2);
}
function es(t, n) {
  return q(t.getUTCHours(), n, 2);
}
function rs(t, n) {
  return q(t.getUTCHours() % 12 || 12, n, 2);
}
function is(t, n) {
  return q(1 + fe.count(_t(t), t), n, 3);
}
function Er(t, n) {
  return q(t.getUTCMilliseconds(), n, 3);
}
function os(t, n) {
  return Er(t, n) + "000";
}
function as(t, n) {
  return q(t.getUTCMonth() + 1, n, 2);
}
function us(t, n) {
  return q(t.getUTCMinutes(), n, 2);
}
function ss(t, n) {
  return q(t.getUTCSeconds(), n, 2);
}
function cs(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function ls(t, n) {
  return q(Fr.count(_t(t) - 1, t), n, 2);
}
function Hr(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t);
}
function fs(t, n) {
  return t = Hr(t), q(Yt.count(_t(t), t) + (_t(t).getUTCDay() === 4), n, 2);
}
function hs(t) {
  return t.getUTCDay();
}
function ds(t, n) {
  return q(vn.count(_t(t) - 1, t), n, 2);
}
function gs(t, n) {
  return q(t.getUTCFullYear() % 100, n, 2);
}
function ms(t, n) {
  return t = Hr(t), q(t.getUTCFullYear() % 100, n, 2);
}
function ps(t, n) {
  return q(t.getUTCFullYear() % 1e4, n, 4);
}
function ys(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t), q(t.getUTCFullYear() % 1e4, n, 4);
}
function ws() {
  return "+0000";
}
function je() {
  return "%";
}
function Ke(t) {
  return +t;
}
function tr(t) {
  return Math.floor(+t / 1e3);
}
var Tt, de, Or, Rr;
xs({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function xs(t) {
  return Tt = xu(t), de = Tt.format, Tt.parse, Or = Tt.utcFormat, Rr = Tt.utcParse, Tt;
}
var Ir = "%Y-%m-%dT%H:%M:%S.%LZ";
function vs(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Or(Ir);
function _s(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var Ms = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? _s : Rr(Ir);
function bs(t) {
  return new Date(t);
}
function $s(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Lr(t, n, e, r, i, o, a, s, c, u) {
  var l = Ar(), f = l.invert, h = l.domain, d = u(".%L"), T = u(":%S"), Y = u("%I:%M"), N = u("%I %p"), I = u("%a %d"), D = u("%b %d"), A = u("%B"), p = u("%Y");
  function M(g) {
    return (c(g) < g ? d : s(g) < g ? T : a(g) < g ? Y : o(g) < g ? N : r(g) < g ? i(g) < g ? I : D : e(g) < g ? A : p)(g);
  }
  return l.invert = function(g) {
    return new Date(f(g));
  }, l.domain = function(g) {
    return arguments.length ? h(Array.from(g, $s)) : h().map(bs);
  }, l.ticks = function(g) {
    var y = h();
    return t(y[0], y[y.length - 1], g ?? 10);
  }, l.tickFormat = function(g, y) {
    return y == null ? M : u(y);
  }, l.nice = function(g) {
    var y = h();
    return (!g || typeof g.range != "function") && (g = n(y[0], y[y.length - 1], g ?? 10)), g ? h(ru(y, g)) : l;
  }, l.copy = function() {
    return Sr(l, Lr(t, n, e, r, i, o, a, s, c, u));
  }, l;
}
function Ts() {
  return Tn.apply(Lr(yu, wu, pt, he, kn, jt, le, ce, St, de).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Et = 0, Wt = 0, It = 0, Pr = 1e3, _n, qt, Mn = 0, Mt = 0, Sn = 0, Gt = typeof performance == "object" && performance.now ? performance : Date, Wr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ge() {
  return Mt || (Wr(ks), Mt = Gt.now() + Sn);
}
function ks() {
  Mt = 0;
}
function bn() {
  this._call = this._time = this._next = null;
}
bn.prototype = qr.prototype = {
  constructor: bn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? ge() : +e) + (n == null ? 0 : +n), !this._next && qt !== this && (qt ? qt._next = this : _n = this, qt = this), this._call = t, this._time = e, Zn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Zn());
  }
};
function qr(t, n, e) {
  var r = new bn();
  return r.restart(t, n, e), r;
}
function Ss() {
  ge(), ++Et;
  for (var t = _n, n; t; )
    (n = Mt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Et;
}
function nr() {
  Mt = (Mn = Gt.now()) + Sn, Et = Wt = 0;
  try {
    Ss();
  } finally {
    Et = 0, Cs(), Mt = 0;
  }
}
function As() {
  var t = Gt.now(), n = t - Mn;
  n > Pr && (Sn -= n, Mn = t);
}
function Cs() {
  for (var t, n = _n, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : _n = e);
  qt = t, Zn(r);
}
function Zn(t) {
  if (!Et) {
    Wt && (Wt = clearTimeout(Wt));
    var n = t - Mt;
    n > 24 ? (t < 1 / 0 && (Wt = setTimeout(nr, t - Gt.now() - Sn)), It && (It = clearInterval(It))) : (It || (Mn = Gt.now(), It = setInterval(As, Pr)), Et = 1, Wr(nr));
  }
}
function er(t, n, e) {
  var r = new bn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ds = ne("start", "end", "cancel", "interrupt"), Ns = [], zr = 0, Gn = 1, Jn = 2, cn = 3, rr = 4, Qn = 5, ln = 6;
function An(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Fs(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ds,
    tween: Ns,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: zr
  });
}
function me(t, n) {
  var e = st(t, n);
  if (e.state > zr) throw new Error("too late; already scheduled");
  return e;
}
function ft(t, n) {
  var e = st(t, n);
  if (e.state > cn) throw new Error("too late; already running");
  return e;
}
function st(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Fs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = qr(o, 0, e.time);
  function o(u) {
    e.state = Gn, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var l, f, h, d;
    if (e.state !== Gn) return c();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === cn) return er(a);
        d.state === rr ? (d.state = ln, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = ln, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (er(function() {
      e.state === cn && (e.state = rr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Jn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Jn) {
      for (e.state = cn, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var l = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(c), e.state = Qn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    e.state === Qn && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = ln, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Us(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Jn && r.state < Qn, r.state = ln, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Ys(t) {
  return this.each(function() {
    Us(this, t);
  });
}
function Es(t, n) {
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
function Hs(t, n, e) {
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
function Os(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = st(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Es : Hs)(e, t, n));
}
function pe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ft(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[n];
  };
}
function Vr(t, n) {
  var e;
  return (typeof n == "number" ? at : n instanceof yt ? mn : (e = yt(n)) ? (n = e, mn) : $r)(t, n);
}
function Rs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Is(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ps(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ws(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function qs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function zs(t, n) {
  var e = $n(t), r = e === "transform" ? Ha : Vr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? qs : Ws)(e, r, pe(this, "attr." + t, n)) : n == null ? (e.local ? Is : Rs)(e) : (e.local ? Ps : Ls)(e, r, n));
}
function Vs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Bs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Xs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Bs(t, o)), e;
  }
  return i._value = n, i;
}
function Zs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vs(t, o)), e;
  }
  return i._value = n, i;
}
function Gs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = $n(t);
  return this.tween(e, (r.local ? Xs : Zs)(r, n));
}
function Js(t, n) {
  return function() {
    me(this, t).delay = +n.apply(this, arguments);
  };
}
function Qs(t, n) {
  return n = +n, function() {
    me(this, t).delay = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Js : Qs)(n, t)) : st(this.node(), n).delay;
}
function Ks(t, n) {
  return function() {
    ft(this, t).duration = +n.apply(this, arguments);
  };
}
function tc(t, n) {
  return n = +n, function() {
    ft(this, t).duration = n;
  };
}
function nc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ks : tc)(n, t)) : st(this.node(), n).duration;
}
function ec(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ft(this, t).ease = n;
  };
}
function rc(t) {
  var n = this._id;
  return arguments.length ? this.each(ec(n, t)) : st(this.node(), n).ease;
}
function ic(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ft(this, t).ease = e;
  };
}
function oc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ic(this._id, t));
}
function ac(t) {
  typeof t != "function" && (t = dr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new lt(r, this._parents, this._name, this._id);
}
function uc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = n[s], u = e[s], l = c.length, f = a[s] = new Array(l), h, d = 0; d < l; ++d)
      (h = c[d] || u[d]) && (f[d] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new lt(a, this._parents, this._name, this._id);
}
function sc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function cc(t, n, e) {
  var r, i, o = sc(n) ? me : ft;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function lc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? st(this.node(), e).on.on(t) : this.each(cc(e, t, n));
}
function fc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function hc() {
  return this.on("end.remove", fc(this._id));
}
function dc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ee(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, An(u[h], n, e, h, u, st(l, e)));
  return new lt(o, this._parents, n, e);
}
function gc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = hr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), d, T = st(l, e), Y = 0, N = h.length; Y < N; ++Y)
          (d = h[Y]) && An(d, n, e, Y, h, T);
        o.push(h), a.push(l);
      }
  return new lt(o, a, n, e);
}
var mc = Qt.prototype.constructor;
function pc() {
  return new mc(this._groups, this._parents);
}
function yc(t, n) {
  var e, r, i;
  return function() {
    var o = Nt(this, t), a = (this.style.removeProperty(t), Nt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Br(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Nt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xc(t, n, e) {
  var r, i, o;
  return function() {
    var a = Nt(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Nt(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s));
  };
}
function vc(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var c = ft(this, t), u = c.on, l = c.value[o] == null ? s || (s = Br(n)) : void 0;
    (u !== e || i !== l) && (r = (e = u).copy()).on(a, i = l), c.on = r;
  };
}
function _c(t, n, e) {
  var r = (t += "") == "transform" ? Ea : Vr;
  return n == null ? this.styleTween(t, yc(t, r)).on("end.style." + t, Br(t)) : typeof n == "function" ? this.styleTween(t, xc(t, r, pe(this, "style." + t, n))).each(vc(this._id, t)) : this.styleTween(t, wc(t, r, n), e).on("end.style." + t, null);
}
function Mc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function bc(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Mc(t, a, e)), r;
  }
  return o._value = n, o;
}
function $c(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, bc(t, n, e ?? ""));
}
function Tc(t) {
  return function() {
    this.textContent = t;
  };
}
function kc(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Sc(t) {
  return this.tween("text", typeof t == "function" ? kc(pe(this, "text", t)) : Tc(t == null ? "" : t + ""));
}
function Ac(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Cc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Ac(i)), n;
  }
  return r._value = t, r;
}
function Dc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Cc(t));
}
function Nc() {
  for (var t = this._name, n = this._id, e = Xr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var l = st(c, n);
        An(c, t, e, u, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new lt(r, this._parents, t, e);
}
function Fc() {
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
var Uc = 0;
function lt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Xr() {
  return ++Uc;
}
var ht = Qt.prototype;
lt.prototype = {
  constructor: lt,
  select: dc,
  selectAll: gc,
  selectChild: ht.selectChild,
  selectChildren: ht.selectChildren,
  filter: ac,
  merge: uc,
  selection: pc,
  transition: Nc,
  call: ht.call,
  nodes: ht.nodes,
  node: ht.node,
  size: ht.size,
  empty: ht.empty,
  each: ht.each,
  on: lc,
  attr: zs,
  attrTween: Gs,
  style: _c,
  styleTween: $c,
  text: Sc,
  textTween: Dc,
  remove: hc,
  tween: Os,
  delay: js,
  duration: nc,
  ease: rc,
  easeVarying: oc,
  end: Fc,
  [Symbol.iterator]: ht[Symbol.iterator]
};
function Yc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ec = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Yc
};
function Hc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Oc(t) {
  var n, e;
  t instanceof lt ? (n = t._id, t = t._name) : (n = Xr(), (e = Ec).time = ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && An(c, t, n, u, a, e || Hc(c, n));
  return new lt(r, this._parents, t, n);
}
Qt.prototype.interrupt = Ys;
Qt.prototype.transition = Oc;
var Rc = [null];
function Ic(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Gn && r.name === n)
        return new lt([[t]], Rc, n, +i);
  }
  return null;
}
const Lc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function Zr(t) {
  W("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Lc);
  const n = W("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function Pc(t) {
  return ur(t.nodes().map((n) => n.getComputedTextLength()));
}
function Wc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const zt = 1, qc = 2;
function Gr(t, n) {
  let e = ["#FFF", "#FFF"], r = Dt(e), i = 5, o, a = "#AAA", s = 40, c = 3e3, u;
  function l(f) {
    let h = n.domain(), d = Zr((M) => M), T = Dt(e), Y = Dt(e.reverse()), N = Wc(s), I = f.selectAll(".row").data(h, n).order(), D = I.enter().append("g").attr("class", "row"), A = I.exit(), p = I.select("text");
    I = I.merge(D).attr("transform", (M) => "translate(0," + n(M) + ")"), A.remove(), D.append("rect").attr("y", 0.5).attr("width", c).attr("height", n.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", T), D.append("path").attr("stroke", Y), p = p.merge(
      D.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(M, g) {
        W(this).text() != g && d.show(g);
      }).on("mouseout", d.hide)
    ).text(N), u === void 0 && (u = Pc(p) + 2 * i, u = t === zt ? c - u : u), o = t === zt ? [0, u] : [u, c], p.attr("text-anchor", t === zt ? "start" : "end").attr("dx", t === zt ? i : -i).attr("x", u), f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (u + 0.5) + ",0.5V" + n.range()[1]);
  }
  return l.draw_ticks = function(f, h) {
    f.selectAll(".row").select("path").attr("d", h.map((d) => "M" + d + ",1v" + (n.bandwidth() - 1)).join(""));
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
function zc(t) {
  return Gr(qc, t);
}
function Vc(t) {
  return Gr(zt, t);
}
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function we(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ye, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", s = "minute", c = "hour", u = "day", l = "week", f = "month", h = "quarter", d = "year", T = "date", Y = "Invalid Date", N = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var _ = ["th", "st", "nd", "rd"], v = k % 100;
      return "[" + k + (_[(v - 20) % 10] || _[v] || _[0]) + "]";
    } }, A = function(k, _, v) {
      var S = String(k);
      return !S || S.length >= _ ? k : "" + Array(_ + 1 - S.length).join(v) + k;
    }, p = { s: A, z: function(k) {
      var _ = -k.utcOffset(), v = Math.abs(_), S = Math.floor(v / 60), b = v % 60;
      return (_ <= 0 ? "+" : "-") + A(S, 2, "0") + ":" + A(b, 2, "0");
    }, m: function k(_, v) {
      if (_.date() < v.date()) return -k(v, _);
      var S = 12 * (v.year() - _.year()) + (v.month() - _.month()), b = _.clone().add(S, f), F = v - b < 0, R = _.clone().add(S + (F ? -1 : 1), f);
      return +(-(S + (v - b) / (F ? b - R : R - b)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: d, w: l, d: u, D: T, h: c, m: s, s: a, ms: o, Q: h }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return k === void 0;
    } }, M = "en", g = {};
    g[M] = D;
    var y = "$isDayjsObject", w = function(k) {
      return k instanceof O || !(!k || !k[y]);
    }, U = function k(_, v, S) {
      var b;
      if (!_) return M;
      if (typeof _ == "string") {
        var F = _.toLowerCase();
        g[F] && (b = F), v && (g[F] = v, b = F);
        var R = _.split("-");
        if (!b && R.length > 1) return k(R[0]);
      } else {
        var V = _.name;
        g[V] = _, b = V;
      }
      return !S && b && (M = b), b || !S && M;
    }, C = function(k, _) {
      if (w(k)) return k.clone();
      var v = typeof _ == "object" ? _ : {};
      return v.date = k, v.args = arguments, new O(v);
    }, m = p;
    m.l = U, m.i = w, m.w = function(k, _) {
      return C(k, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var O = function() {
      function k(v) {
        this.$L = U(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[y] = !0;
      }
      var _ = k.prototype;
      return _.parse = function(v) {
        this.$d = function(S) {
          var b = S.date, F = S.utc;
          if (b === null) return /* @__PURE__ */ new Date(NaN);
          if (m.u(b)) return /* @__PURE__ */ new Date();
          if (b instanceof Date) return new Date(b);
          if (typeof b == "string" && !/Z$/i.test(b)) {
            var R = b.match(N);
            if (R) {
              var V = R[2] - 1 || 0, z = (R[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(R[1], V, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, z)) : new Date(R[1], V, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, z);
            }
          }
          return new Date(b);
        }(v), this.init();
      }, _.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, _.$utils = function() {
        return m;
      }, _.isValid = function() {
        return this.$d.toString() !== Y;
      }, _.isSame = function(v, S) {
        var b = C(v);
        return this.startOf(S) <= b && b <= this.endOf(S);
      }, _.isAfter = function(v, S) {
        return C(v) < this.startOf(S);
      }, _.isBefore = function(v, S) {
        return this.endOf(S) < C(v);
      }, _.$g = function(v, S, b) {
        return m.u(v) ? this[S] : this.set(b, v);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(v, S) {
        var b = this, F = !!m.u(S) || S, R = m.p(v), V = function($, E) {
          var P = m.w(b.$u ? Date.UTC(b.$y, E, $) : new Date(b.$y, E, $), b);
          return F ? P : P.endOf(u);
        }, z = function($, E) {
          return m.w(b.toDate()[$].apply(b.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(E)), b);
        }, Z = this.$W, H = this.$M, B = this.$D, nt = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case d:
            return F ? V(1, 0) : V(31, 11);
          case f:
            return F ? V(1, H) : V(0, H + 1);
          case l:
            var G = this.$locale().weekStart || 0, K = (Z < G ? Z + 7 : Z) - G;
            return V(F ? B - K : B + (6 - K), H);
          case u:
          case T:
            return z(nt + "Hours", 0);
          case c:
            return z(nt + "Minutes", 1);
          case s:
            return z(nt + "Seconds", 2);
          case a:
            return z(nt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(v) {
        return this.startOf(v, !1);
      }, _.$set = function(v, S) {
        var b, F = m.p(v), R = "set" + (this.$u ? "UTC" : ""), V = (b = {}, b[u] = R + "Date", b[T] = R + "Date", b[f] = R + "Month", b[d] = R + "FullYear", b[c] = R + "Hours", b[s] = R + "Minutes", b[a] = R + "Seconds", b[o] = R + "Milliseconds", b)[F], z = F === u ? this.$D + (S - this.$W) : S;
        if (F === f || F === d) {
          var Z = this.clone().set(T, 1);
          Z.$d[V](z), Z.init(), this.$d = Z.set(T, Math.min(this.$D, Z.daysInMonth())).$d;
        } else V && this.$d[V](z);
        return this.init(), this;
      }, _.set = function(v, S) {
        return this.clone().$set(v, S);
      }, _.get = function(v) {
        return this[m.p(v)]();
      }, _.add = function(v, S) {
        var b, F = this;
        v = Number(v);
        var R = m.p(S), V = function(H) {
          var B = C(F);
          return m.w(B.date(B.date() + Math.round(H * v)), F);
        };
        if (R === f) return this.set(f, this.$M + v);
        if (R === d) return this.set(d, this.$y + v);
        if (R === u) return V(1);
        if (R === l) return V(7);
        var z = (b = {}, b[s] = r, b[c] = i, b[a] = e, b)[R] || 1, Z = this.$d.getTime() + v * z;
        return m.w(Z, this);
      }, _.subtract = function(v, S) {
        return this.add(-1 * v, S);
      }, _.format = function(v) {
        var S = this, b = this.$locale();
        if (!this.isValid()) return b.invalidDate || Y;
        var F = v || "YYYY-MM-DDTHH:mm:ssZ", R = m.z(this), V = this.$H, z = this.$m, Z = this.$M, H = b.weekdays, B = b.months, nt = b.meridiem, G = function(E, P, x, J) {
          return E && (E[P] || E(S, F)) || x[P].slice(0, J);
        }, K = function(E) {
          return m.s(V % 12 || 12, E, "0");
        }, $ = nt || function(E, P, x) {
          var J = E < 12 ? "AM" : "PM";
          return x ? J.toLowerCase() : J;
        };
        return F.replace(I, function(E, P) {
          return P || function(x) {
            switch (x) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return m.s(S.$y, 4, "0");
              case "M":
                return Z + 1;
              case "MM":
                return m.s(Z + 1, 2, "0");
              case "MMM":
                return G(b.monthsShort, Z, B, 3);
              case "MMMM":
                return G(B, Z);
              case "D":
                return S.$D;
              case "DD":
                return m.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return G(b.weekdaysMin, S.$W, H, 2);
              case "ddd":
                return G(b.weekdaysShort, S.$W, H, 3);
              case "dddd":
                return H[S.$W];
              case "H":
                return String(V);
              case "HH":
                return m.s(V, 2, "0");
              case "h":
                return K(1);
              case "hh":
                return K(2);
              case "a":
                return $(V, z, !0);
              case "A":
                return $(V, z, !1);
              case "m":
                return String(z);
              case "mm":
                return m.s(z, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return m.s(S.$s, 2, "0");
              case "SSS":
                return m.s(S.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(E) || R.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(v, S, b) {
        var F, R = this, V = m.p(S), z = C(v), Z = (z.utcOffset() - this.utcOffset()) * r, H = this - z, B = function() {
          return m.m(R, z);
        };
        switch (V) {
          case d:
            F = B() / 12;
            break;
          case f:
            F = B();
            break;
          case h:
            F = B() / 3;
            break;
          case l:
            F = (H - Z) / 6048e5;
            break;
          case u:
            F = (H - Z) / 864e5;
            break;
          case c:
            F = H / i;
            break;
          case s:
            F = H / r;
            break;
          case a:
            F = H / e;
            break;
          default:
            F = H;
        }
        return b ? F : m.a(F);
      }, _.daysInMonth = function() {
        return this.endOf(f).$D;
      }, _.$locale = function() {
        return g[this.$L];
      }, _.locale = function(v, S) {
        if (!v) return this.$L;
        var b = this.clone(), F = U(v, S, !0);
        return F && (b.$L = F), b;
      }, _.clone = function() {
        return m.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), L = O.prototype;
    return C.prototype = L, [["$ms", o], ["$s", a], ["$m", s], ["$H", c], ["$W", u], ["$M", f], ["$y", d], ["$D", T]].forEach(function(k) {
      L[k[1]] = function(_) {
        return this.$g(_, k[0], k[1]);
      };
    }), C.extend = function(k, _) {
      return k.$i || (k(_, O, C), k.$i = !0), C;
    }, C.locale = U, C.isDayjs = w, C.unix = function(k) {
      return C(1e3 * k);
    }, C.en = g[M], C.Ls = g, C.p = {}, C;
  });
})(Jr);
var Bc = Jr.exports;
const xe = /* @__PURE__ */ we(Bc);
var Qr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ye, function() {
    var e, r, i = 1e3, o = 6e4, a = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, l = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u, months: l, days: s, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, d = function(g) {
      return g instanceof p;
    }, T = function(g, y, w) {
      return new p(g, w, y.$l);
    }, Y = function(g) {
      return r.p(g) + "s";
    }, N = function(g) {
      return g < 0;
    }, I = function(g) {
      return N(g) ? Math.ceil(g) : Math.floor(g);
    }, D = function(g) {
      return Math.abs(g);
    }, A = function(g, y) {
      return g ? N(g) ? { negative: !0, format: "" + D(g) + y } : { negative: !1, format: "" + g + y } : { negative: !1, format: "" };
    }, p = function() {
      function g(w, U, C) {
        var m = this;
        if (this.$d = {}, this.$l = C, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), U) return T(w * h[Y(U)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function(k) {
          m.$d[Y(k)] = w[k];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var O = w.match(f);
          if (O) {
            var L = O.slice(2).map(function(k) {
              return k != null ? Number(k) : 0;
            });
            return this.$d.years = L[0], this.$d.months = L[1], this.$d.weeks = L[2], this.$d.days = L[3], this.$d.hours = L[4], this.$d.minutes = L[5], this.$d.seconds = L[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = g.prototype;
      return y.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(U, C) {
          return U + (w.$d[C] || 0) * h[C];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = I(w / u), w %= u, this.$d.months = I(w / l), w %= l, this.$d.days = I(w / s), w %= s, this.$d.hours = I(w / a), w %= a, this.$d.minutes = I(w / o), w %= o, this.$d.seconds = I(w / i), w %= i, this.$d.milliseconds = w;
      }, y.toISOString = function() {
        var w = A(this.$d.years, "Y"), U = A(this.$d.months, "M"), C = +this.$d.days || 0;
        this.$d.weeks && (C += 7 * this.$d.weeks);
        var m = A(C, "D"), O = A(this.$d.hours, "H"), L = A(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3, k = Math.round(1e3 * k) / 1e3);
        var _ = A(k, "S"), v = w.negative || U.negative || m.negative || O.negative || L.negative || _.negative, S = O.format || L.format || _.format ? "T" : "", b = (v ? "-" : "") + "P" + w.format + U.format + m.format + S + O.format + L.format + _.format;
        return b === "P" || b === "-P" ? "P0D" : b;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(w) {
        var U = w || "YYYY-MM-DDTHH:mm:ss", C = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return U.replace(c, function(m, O) {
          return O || String(C[m]);
        });
      }, y.as = function(w) {
        return this.$ms / h[Y(w)];
      }, y.get = function(w) {
        var U = this.$ms, C = Y(w);
        return C === "milliseconds" ? U %= 1e3 : U = C === "weeks" ? I(U / h[C]) : this.$d[C], U || 0;
      }, y.add = function(w, U, C) {
        var m;
        return m = U ? w * h[Y(U)] : d(w) ? w.$ms : T(w, this).$ms, T(this.$ms + m * (C ? -1 : 1), this);
      }, y.subtract = function(w, U) {
        return this.add(w, U, !0);
      }, y.locale = function(w) {
        var U = this.clone();
        return U.$l = w, U;
      }, y.clone = function() {
        return T(this.$ms, this);
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
      }, g;
    }(), M = function(g, y, w) {
      return g.add(y.years() * w, "y").add(y.months() * w, "M").add(y.days() * w, "d").add(y.hours() * w, "h").add(y.minutes() * w, "m").add(y.seconds() * w, "s").add(y.milliseconds() * w, "ms");
    };
    return function(g, y, w) {
      e = w, r = w().$utils(), w.duration = function(m, O) {
        var L = w.locale();
        return T(m, { $l: L }, O);
      }, w.isDuration = d;
      var U = y.prototype.add, C = y.prototype.subtract;
      y.prototype.add = function(m, O) {
        return d(m) ? M(this, m, 1) : U.bind(this)(m, O);
      }, y.prototype.subtract = function(m, O) {
        return d(m) ? M(this, m, -1) : C.bind(this)(m, O);
      };
    };
  });
})(Qr);
var Xc = Qr.exports;
const Zc = /* @__PURE__ */ we(Xc);
var jr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ye, function() {
    return function(e, r, i) {
      e = e || {};
      var o = r.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function s(u, l, f, h) {
        return o.fromToBase(u, l, f, h);
      }
      i.en.relativeTime = a, o.fromToBase = function(u, l, f, h, d) {
        for (var T, Y, N, I = f.$locale().relativeTime || a, D = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], A = D.length, p = 0; p < A; p += 1) {
          var M = D[p];
          M.d && (T = h ? i(u).diff(f, M.d, !0) : f.diff(u, M.d, !0));
          var g = (e.rounding || Math.round)(Math.abs(T));
          if (N = T > 0, g <= M.r || !M.r) {
            g <= 1 && p > 0 && (M = D[p - 1]);
            var y = I[M.l];
            d && (g = d("" + g)), Y = typeof y == "string" ? y.replace("%d", g) : y(g, l, M.l, N);
            break;
          }
        }
        if (l) return Y;
        var w = N ? I.future : I.past;
        return typeof w == "function" ? w(Y) : w.replace("%s", Y);
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
})(jr);
var Gc = jr.exports;
const Jc = /* @__PURE__ */ we(Gc);
xe.extend(Zc);
xe.extend(Jc);
function Qc(t, n) {
  return xe.duration(n - t).humanize();
}
function Rn() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(n) {
    return t.reduce((e, r) => r(e), n);
  };
}
function on(t) {
  return function(n) {
    return t === void 0 ? n : n[t];
  };
}
const jc = [
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
function Kc(t) {
  const n = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(n);
}
function tl(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function nl(t) {
  return tl(t) > 165;
}
function el(t) {
  return nl(yt(t)) ? "black" : "white";
}
function ir(t) {
  const n = t.getFullYear(), e = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${n}${e}${r}`;
}
function Lt(t, n) {
  return "translate(" + t + "," + n + ")";
}
function rl() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(n) {
    n.style.display = "none";
  });
}
function or(t, n, e) {
  const i = W(t).attr("class");
  let o = !1;
  n.selectAll("g.row").each(function(D) {
    const p = W(this).attr("class");
    if (p == i)
      o = !0;
    else if (o) {
      let g = this.getAttribute("transform"), y = parseFloat(g.split("(")[1].split(",")[0].trim()), w = parseFloat(g.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${y},${w + e})`);
      var M = p.split(" ")[1];
      document.querySelectorAll(`g.task.${M} rect`).forEach(function(m) {
        m.setAttribute("y", parseFloat(m.getAttribute("y")) + e);
      }), document.querySelectorAll(`g.task.${M} text`).forEach(function(m) {
        m.setAttribute("y", parseFloat(m.getAttribute("y")) + e);
      });
    }
  });
  const a = document.querySelector('path[stroke-width="1.75"]');
  let c = a.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), u = parseFloat(c[1]), l = parseFloat(c[2]), h = parseFloat(c[3]) + e;
  a.setAttribute("d", `M${u},${l}V${h}`);
  const d = document.querySelector("g.x.axis.bottom-axis");
  let Y = d.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/), N = parseFloat(Y[1]), I = parseFloat(Y[2]);
  d.setAttribute("transform", `translate(${N},${I + e})`);
}
function il(t, n) {
  n.forEach(function(r) {
    document.querySelectorAll(`g.row.${r}`).forEach(function(o) {
      o.style.display = "block";
    });
  });
  const e = W(t).attr("class").split(" ")[1];
  Vt(`g.task.${e}`).each(function(r) {
    var i = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (i == e.replace(/--/g, ""))
      W(this).style("display", "none");
    else if (i != e.replace(/--/g, "")) {
      W(this).style("display", "block");
      var o = (n.indexOf(i) + 1) * 38;
      let a = W(this), s = a.attr("transform"), c = parseFloat(s.split("(")[1].split(",")[0].trim()), u = parseFloat(s.split(",")[1].split(")")[0].trim()), l = u + o;
      a.attr("transform", `translate(${c}, ${u})`).transition().duration(1e3).attr("transform", `translate(${c}, ${l})`).on("start", () => {
        Vt(`g.task.${i}`).style("display", "none");
      }).on("end", () => {
        a.style("display", "none"), a.attr("transform", `translate(${c}, ${u})`), Vt(`g.task.${i}`).style("display", "block");
      });
    }
  });
}
function ol(t, n) {
  return new Promise((e) => {
    const r = W(t).attr("class").split(" ")[1];
    Vt(`g.task:not(.${r})`).each(function(i) {
      var o = i[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (n.includes(o)) {
        W(this).style("display", "block");
        var a = (n.indexOf(o) + 1) * 38;
        let s = W(this), c = s.attr("transform"), u = parseFloat(c.split("(")[1].split(",")[0].trim()), l = parseFloat(c.split(",")[1].split(")")[0].trim()), f = l - a;
        s.transition().duration(1e3).attr("transform", `translate(${u}, ${f})`).on("end", () => {
          Vt(`g.${r}`).style("display", "block"), s.style("display", "none"), s.attr("transform", `translate(${u}, ${l})`), n.forEach(function(h) {
            document.querySelectorAll(`.${h}`).forEach(function(T) {
              T.style.display = "none";
            });
          }), e();
        });
      }
    });
  });
}
function ar(t, n) {
  const r = W(t).attr("class"), i = [];
  let o = !1, a = !1;
  return n.selectAll("g.row").each(function(s) {
    const u = W(this).attr("class");
    u == r ? o = !0 : o && u.split(" ")[2] == "timelineheader" ? a = !0 : o && !a && i.push(u.split(" ")[1]);
  }), i;
}
function cl() {
  let t = jc, n = 5, e = 2, r = !1, i = !1, o, a, s = 0, c = on(0), u = on(1), l = on(2), f = on(3);
  function h(D, A) {
    const p = D.select("text"), M = D.select("rect"), g = M.attr("width") - 2 * n, y = u(A);
    p.text(y);
    let w = p.node().getComputedTextLength();
    if (w > g) {
      const U = g < 0 ? 0 : g / w, C = Math.floor(y.length * U);
      p.text(C > 2 ? y.slice(0, C - 2) + "…" : "");
    }
  }
  function d(D, A, p) {
    const M = D.select("text").node(), g = M.getBBox(), y = p.scale().domain().indexOf(c(A)), w = p.colorscale()(y), U = D.selectAll("rect.bckg").data([A]).join("rect").attr("class", "bckg").attr("fill", w).attr("x", g.x - n + e).attr("y", g.y - 2).attr("width", g.width + n - e).attr("height", g.height);
    D.node().insertBefore(U.node(), M);
  }
  function T(D, A) {
    D.each(function(p, M) {
      const g = W(this.parentNode);
      f(p) - l(p) ? h(g, p) : d(g, p, A);
    });
  }
  function Y(D) {
    return function(A, p) {
      Ic(this).tween("text", function() {
        return function(M) {
          T(W(this), D);
        };
      });
    };
  }
  function N(D) {
    const A = D.datum(), p = new Set(gi(A, c)), M = new Zr(I), g = Dt(t);
    o = o || [hi(A, l), ur(A, f)], i && (o = ii(o.concat(/* @__PURE__ */ new Date()))), D.each(function(y) {
      const w = a || this.getBoundingClientRect().width, U = p.size * (Kc(this) + 4 * n), C = Mr().domain(p).range([0, U]), m = Ts().domain(o), O = (r ? Vc : zc)(C).width(w), L = W(this).selectAll("svg").data([1]).join("svg");
      L.attr("class", "timeline").attr("width", w).attr("height", U + 40);
      const k = L.append("g").attr("transform", "translate(0,20)"), _ = k.append("g").attr("class", "y axis").call(O);
      _.selectAll("text").attr("text-anchor", function(H) {
        return H.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(H) {
        return H.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(H) {
        return H.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(H, B) {
        const K = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(K, "_blank");
      }), _.selectAll("g.row").each(function(H) {
        const B = W(this).datum();
        W(this).classed(W(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), B.startsWith(" •") && W(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), _.selectAll("g.row.timelineheader text").on("click", function(H, B) {
        const nt = W(this).text();
        if (nt === "+") {
          let G = ar(this.parentNode, _), K = G.length * 38;
          il(this.parentNode, G), or(this.parentNode, _, K), W(this).text() === "+" ? W(this).text("-").style("font-size", "30px") : W(this).text("+");
        } else if (nt === "-") {
          let G = ar(this.parentNode, _), K = G.length * 38;
          ol(this.parentNode, G).then(() => {
            or(this.parentNode, _, -K);
          }), W(this).text() === "-" ? W(this).text("+").style("font-size", "20px") : W(this).text("-");
        } else {
          const $ = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${B.replace(/ • /g, "").replace(" ", "%20")}%22`;
          window.open($, "_blank");
        }
      });
      let v = O.range();
      m.range([v[0] + n, v[1] - n]).clamp(!0);
      const S = $e(m), b = k.append("g").attr("class", "x axis").attr("transform", Lt(0, 0)).call(S);
      b.selectAll(".tick text").attr("dy", "-1.5em"), b.selectAll(".tick line").attr("y2", "-5");
      const F = $e(m);
      L.append("g").attr("class", "x axis bottom-axis").attr("transform", Lt(0, U + 20)).call(F).selectAll(".tick line").attr("y2", "5"), _.on("offset", () => {
        v = O.range(), m.range([v[0] + n, v[1] - n]).clamp(!0), S.ticks(Math.min((v[1] - v[0]) / 70, 10)), b.call(S), z.attr("transform", (H) => Lt(m(l(H)), C(c(H)))).selectAll("rect").attr("width", (H) => m(f(H)) - m(l(H)) || e).call((H) => T(H, O)), _.call(O.draw_ticks, m.ticks().map(m));
      }), b.select(".domain").remove(), b.selectAll(".tick line").attr("stroke", "#AAA");
      const V = m.ticks().map(m);
      _.call(O.draw_ticks, V);
      let z = k.selectAll("g.task").data(y);
      z.exit().remove();
      const Z = z.enter().append("g").classed("task", !0);
      Z.each(function(H) {
        const B = c(H).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        W(this).classed(B, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", C.bandwidth() - 2 * n).on("mouseover", M.show).on("mouseout", M.hide).on("click", function(H, B) {
        var nt = String(B[1]), G = nt.replace(" ", "%20"), K = B[2], $ = ir(K), E = B[3], P = ir(E), x = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + G + "%22%20%2Bdate_when%3A%5B" + $ + "%20TO%20" + P + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(x, "_blank");
      }).style("fill", Rn(u, g)), Z.append("text").attr("text-anchor", "start").attr("fill", (H) => f(H) - l(H) ? Rn(u, g, el)(H) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", C.bandwidth() / 2).attr("dy", "0.32em").text(u), z = z.merge(Z), z.attr("transform", (H) => Lt(v[0], C(c(H)))).selectAll("rect").attr("width", 0), z.transition().duration(s).attr("transform", (H) => Lt(m(l(H)), C(c(H)))).selectAll("rect").attr("width", (H) => m(f(H)) - m(l(H)) || e).on("start", Y(O)), i && k.append("path").attr("stroke", "red").attr("d", "M" + m(/* @__PURE__ */ new Date()) + ",0.5V" + U);
    }), rl();
  }
  return N.dates = function(D) {
    return arguments.length ? (o = D, N) : o;
  }, N.width = function(D) {
    return arguments.length ? (a = D, N) : a;
  }, N.today = function(D) {
    return arguments.length ? (i = D, N) : i;
  }, N.colors = function(D) {
    return arguments.length ? (t = D, N) : t;
  }, N.padding = function(D) {
    return arguments.length ? (n = D, N) : n;
  }, N.milestone_width = function(D) {
    return arguments.length ? (e = D, N) : e;
  }, N.reversed = function(D) {
    return arguments.length ? (r = D, N) : r;
  }, N.duration = function(D) {
    return arguments.length ? (s = D, N) : s;
  }, N;
  function I(D, A) {
    const p = Rn(Ms, de("%Y-%m-%d")), M = `<b>${u(A)}</b><hr style="margin: 2px 0 2px 0">${p(l(A))}`, g = f(A) - l(A) ? ` - ${p(f(A))}<br>${Qc(l(A), f(A))}` : "";
    return M + g;
  }
}
export {
  Ic as active,
  $e as axisBottom,
  ul as axisLeft,
  al as axisRight,
  yt as color,
  sl as drag,
  Qc as durationFormat,
  ii as extent,
  Ms as isoParse,
  gi as map,
  ur as max,
  hi as min,
  Mr as scaleBand,
  eu as scaleLinear,
  Dt as scaleOrdinal,
  Ts as scaleTime,
  W as select,
  Vt as selectAll,
  de as timeFormat,
  cl as timeline,
  zc as timelineAxisLeft,
  Vc as timelineAxisRight,
  Zr as tooltip
};
