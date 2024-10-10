function un(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Qr(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Kn(t) {
  let n, e, r;
  t.length !== 2 ? (n = un, e = (s, c) => un(t(s), c), r = (s, c) => t(s) - c) : (n = t === un || t === Qr ? t : jr, e = t, r = t);
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
function jr() {
  return 0;
}
function Kr(t) {
  return t === null ? NaN : +t;
}
const ti = Kn(un), ni = ti.right;
Kn(Kr).center;
function ei(t, n) {
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
  constructor(n, e = oi) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(_e(this, n));
  }
  has(n) {
    return super.has(_e(this, n));
  }
  set(n, e) {
    return super.set(ri(this, n), e);
  }
  delete(n) {
    return super.delete(ii(this, n));
  }
}
function _e({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function ri({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ii({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function oi(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const ai = Math.sqrt(50), ui = Math.sqrt(10), si = Math.sqrt(2);
function hn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= ai ? 10 : o >= ui ? 5 : o >= si ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? hn(t, n, e * 2) : [s, c, u];
}
function ci(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? hn(n, t, e) : hn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * a;
  return c;
}
function Ln(t, n, e) {
  return n = +n, t = +t, e = +e, hn(t, n, e)[2];
}
function Pn(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Ln(n, t, e) : Ln(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ir(t, n) {
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
function li(t, n) {
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
function fi(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function hi(t, n) {
  if (typeof t[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  if (typeof n != "function") throw new TypeError("mapper is not a function");
  return Array.from(t, (e, r) => n(e, r, t));
}
function di(t) {
  return t;
}
var Dn = 1, sn = 2, Wn = 3, Vt = 4, Me = 1e-6;
function gi(t) {
  return "translate(" + t + ",0)";
}
function mi(t) {
  return "translate(0," + t + ")";
}
function pi(t) {
  return (n) => +t(n);
}
function yi(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function wi() {
  return !this.__axis;
}
function te(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === Dn || t === Vt ? -1 : 1, l = t === Vt || t === sn ? "x" : "y", f = t === Dn || t === Wn ? gi : mi;
  function h(g) {
    var k = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), H = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : di), Y = Math.max(o, 0) + s, W = n.range(), F = +W[0] + c, D = +W[W.length - 1] + c, m = (n.bandwidth ? yi : pi)(n.copy(), c), $ = g.selection ? g.selection() : g, d = $.selectAll(".domain").data([null]), w = $.selectAll(".tick").data(k, n).order(), x = w.exit(), E = w.enter().append("g").attr("class", "tick"), N = w.select("line"), p = w.select("text");
    d = d.merge(d.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), w = w.merge(E), N = N.merge(E.append("line").attr("stroke", "currentColor").attr(l + "2", u * o)), p = p.merge(E.append("text").attr("fill", "currentColor").attr(l, u * Y).attr("dy", t === Dn ? "0em" : t === Wn ? "0.71em" : "0.32em")), g !== $ && (d = d.transition(g), w = w.transition(g), N = N.transition(g), p = p.transition(g), x = x.transition(g).attr("opacity", Me).attr("transform", function(R) {
      return isFinite(R = m(R)) ? f(R + c) : this.getAttribute("transform");
    }), E.attr("opacity", Me).attr("transform", function(R) {
      var P = this.parentNode.__axis;
      return f((P && isFinite(P = P(R)) ? P : m(R)) + c);
    })), x.remove(), d.attr("d", t === Vt || t === sn ? a ? "M" + u * a + "," + F + "H" + c + "V" + D + "H" + u * a : "M" + c + "," + F + "V" + D : a ? "M" + F + "," + u * a + "V" + c + "H" + D + "V" + u * a : "M" + F + "," + c + "H" + D), w.attr("opacity", 1).attr("transform", function(R) {
      return f(m(R) + c);
    }), N.attr(l + "2", u * o), p.attr(l, u * Y).text(H), $.filter(wi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === sn ? "start" : t === Vt ? "end" : "middle"), $.each(function() {
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
function rl(t) {
  return te(sn, t);
}
function be(t) {
  return te(Wn, t);
}
function il(t) {
  return te(Vt, t);
}
function ne(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function or(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Qt() {
}
var Xt = 0.7, dn = 1 / Xt, Dt = "\\s*([+-]?\\d+)\\s*", Zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", xi = /^#([0-9a-f]{3,8})$/, vi = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), _i = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), Mi = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${Zt}\\)$`), bi = new RegExp(`^rgba\\(${lt},${lt},${lt},${Zt}\\)$`), $i = new RegExp(`^hsl\\(${Zt},${lt},${lt}\\)$`), Ti = new RegExp(`^hsla\\(${Zt},${lt},${lt},${Zt}\\)$`), $e = {
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
ne(Qt, xt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Te,
  // Deprecated! Use color.formatHex.
  formatHex: Te,
  formatHex8: Si,
  formatHsl: ki,
  formatRgb: Se,
  toString: Se
});
function Te() {
  return this.rgb().formatHex();
}
function Si() {
  return this.rgb().formatHex8();
}
function ki() {
  return ar(this).formatHsl();
}
function Se() {
  return this.rgb().formatRgb();
}
function xt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = xi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ke(n) : e === 3 ? new et(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? tn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? tn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = vi.exec(t)) ? new et(n[1], n[2], n[3], 1) : (n = _i.exec(t)) ? new et(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Mi.exec(t)) ? tn(n[1], n[2], n[3], n[4]) : (n = bi.exec(t)) ? tn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = $i.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ti.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, n[4]) : $e.hasOwnProperty(t) ? ke($e[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function ke(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function tn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new et(t, n, e, r);
}
function Ci(t) {
  return t instanceof Qt || (t = xt(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function zn(t, n, e, r) {
  return arguments.length === 1 ? Ci(t) : new et(t, n, e, r ?? 1);
}
function et(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ne(et, zn, or(Qt, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Xt : Math.pow(Xt, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new et(_t(this.r), _t(this.g), _t(this.b), gn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ce,
  // Deprecated! Use color.formatHex.
  formatHex: Ce,
  formatHex8: Ai,
  formatRgb: Ae,
  toString: Ae
}));
function Ce() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function Ai() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ae() {
  const t = gn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${_t(this.r)}, ${_t(this.g)}, ${_t(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function gn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function _t(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function vt(t) {
  return t = _t(t), (t < 16 ? "0" : "") + t.toString(16);
}
function De(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new ut(t, n, e, r);
}
function ar(t) {
  if (t instanceof ut) return new ut(t.h, t.s, t.l, t.opacity);
  if (t instanceof Qt || (t = xt(t)), !t) return new ut();
  if (t instanceof ut) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new ut(a, s, c, t.opacity);
}
function Di(t, n, e, r) {
  return arguments.length === 1 ? ar(t) : new ut(t, n, e, r ?? 1);
}
function ut(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ne(ut, Di, or(Qt, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Xt : Math.pow(Xt, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new et(
      Nn(t >= 240 ? t - 240 : t + 120, i, r),
      Nn(t, i, r),
      Nn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ut(Ne(this.h), nn(this.s), nn(this.l), gn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = gn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ne(this.h)}, ${nn(this.s) * 100}%, ${nn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ne(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function nn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Nn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var Ni = { value: () => {
} };
function ee() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new cn(e);
}
function cn(t) {
  this._ = t;
}
function Fi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
cn.prototype = ee.prototype = {
  constructor: cn,
  on: function(t, n) {
    var e = this._, r = Fi(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ui(e[i], t.name))) return i;
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
    return new cn(t);
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
function Ui(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Fe(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ni, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Vn = "http://www.w3.org/1999/xhtml";
const Ue = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Tn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ue.hasOwnProperty(n) ? { space: Ue[n], local: t } : t;
}
function Yi(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Vn && n.documentElement.namespaceURI === Vn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ei(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ur(t) {
  var n = Tn(t);
  return (n.local ? Ei : Yi)(n);
}
function Hi() {
}
function re(t) {
  return t == null ? Hi : function() {
    return this.querySelector(t);
  };
}
function Oi(t) {
  typeof t != "function" && (t = re(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), c, u, l = 0; l < a; ++l)
      (c = o[l]) && (u = t.call(c, c.__data__, l, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new rt(r, this._parents);
}
function Ri(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ii() {
  return [];
}
function sr(t) {
  return t == null ? Ii : function() {
    return this.querySelectorAll(t);
  };
}
function Li(t) {
  return function() {
    return Ri(t.apply(this, arguments));
  };
}
function Pi(t) {
  typeof t == "function" ? t = Li(t) : t = sr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new rt(r, i);
}
function cr(t) {
  return function() {
    return this.matches(t);
  };
}
function lr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Wi = Array.prototype.find;
function zi(t) {
  return function() {
    return Wi.call(this.children, t);
  };
}
function Vi() {
  return this.firstElementChild;
}
function qi(t) {
  return this.select(t == null ? Vi : zi(typeof t == "function" ? t : lr(t)));
}
var Bi = Array.prototype.filter;
function Xi() {
  return Array.from(this.children);
}
function Zi(t) {
  return function() {
    return Bi.call(this.children, t);
  };
}
function Gi(t) {
  return this.selectAll(t == null ? Xi : Zi(typeof t == "function" ? t : lr(t)));
}
function Ji(t) {
  typeof t != "function" && (t = cr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new rt(r, this._parents);
}
function fr(t) {
  return new Array(t.length);
}
function Qi() {
  return new rt(this._enter || this._groups.map(fr), this._parents);
}
function mn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
mn.prototype = {
  constructor: mn,
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
function ji(t) {
  return function() {
    return t;
  };
}
function Ki(t, n, e, r, i, o) {
  for (var a = 0, s, c = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new mn(t, o[a]);
  for (; a < c; ++a)
    (s = n[a]) && (i[a] = s);
}
function to(t, n, e, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), g;
  for (s = 0; s < l; ++s)
    (c = n[s]) && (h[s] = g = a.call(c, c.__data__, s, n) + "", u.has(g) ? i[s] = c : u.set(g, c));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (c = u.get(g)) ? (r[s] = c, c.__data__ = o[s], u.delete(g)) : e[s] = new mn(t, o[s]);
  for (s = 0; s < l; ++s)
    (c = n[s]) && u.get(h[s]) === c && (i[s] = c);
}
function no(t) {
  return t.__data__;
}
function eo(t, n) {
  if (!arguments.length) return Array.from(this, no);
  var e = n ? to : Ki, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ji(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], f = i[u], h = f.length, g = ro(t.call(l, l && l.__data__, u, r)), k = g.length, H = s[u] = new Array(k), Y = a[u] = new Array(k), W = c[u] = new Array(h);
    e(l, f, H, Y, W, g, n);
    for (var F = 0, D = 0, m, $; F < k; ++F)
      if (m = H[F]) {
        for (F >= D && (D = F + 1); !($ = Y[D]) && ++D < k; ) ;
        m._next = $ || null;
      }
  }
  return a = new rt(a, r), a._enter = s, a._exit = c, a;
}
function ro(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function io() {
  return new rt(this._exit || this._groups.map(fr), this._parents);
}
function oo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ao(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = e[c], l = r[c], f = u.length, h = s[c] = new Array(f), g, k = 0; k < f; ++k)
      (g = u[k] || l[k]) && (h[k] = g);
  for (; c < i; ++c)
    s[c] = e[c];
  return new rt(s, this._parents);
}
function uo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function so(t) {
  t || (t = co);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), u, l = 0; l < s; ++l)
      (u = a[l]) && (c[l] = u);
    c.sort(n);
  }
  return new rt(i, this._parents).order();
}
function co(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function lo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function fo() {
  return Array.from(this);
}
function ho() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function go() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function mo() {
  return !this.node();
}
function po(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function yo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function wo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function xo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function vo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function _o(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Mo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function bo(t, n) {
  var e = Tn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? wo : yo : typeof n == "function" ? e.local ? Mo : _o : e.local ? vo : xo)(e, n));
}
function hr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function $o(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function To(t, n, e) {
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
function ko(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? $o : typeof n == "function" ? So : To)(t, n, e ?? "")) : Ut(this.node(), t);
}
function Ut(t, n) {
  return t.style.getPropertyValue(n) || hr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Co(t) {
  return function() {
    delete this[t];
  };
}
function Ao(t, n) {
  return function() {
    this[t] = n;
  };
}
function Do(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function No(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Co : typeof n == "function" ? Do : Ao)(t, n)) : this.node()[t];
}
function dr(t) {
  return t.trim().split(/^|\s+/);
}
function ie(t) {
  return t.classList || new gr(t);
}
function gr(t) {
  this._node = t, this._names = dr(t.getAttribute("class") || "");
}
gr.prototype = {
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
function mr(t, n) {
  for (var e = ie(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function pr(t, n) {
  for (var e = ie(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Fo(t) {
  return function() {
    mr(this, t);
  };
}
function Uo(t) {
  return function() {
    pr(this, t);
  };
}
function Yo(t, n) {
  return function() {
    (n.apply(this, arguments) ? mr : pr)(this, t);
  };
}
function Eo(t, n) {
  var e = dr(t + "");
  if (arguments.length < 2) {
    for (var r = ie(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Yo : n ? Fo : Uo)(e, n));
}
function Ho() {
  this.textContent = "";
}
function Oo(t) {
  return function() {
    this.textContent = t;
  };
}
function Ro(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Io(t) {
  return arguments.length ? this.each(t == null ? Ho : (typeof t == "function" ? Ro : Oo)(t)) : this.node().textContent;
}
function Lo() {
  this.innerHTML = "";
}
function Po(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Wo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function zo(t) {
  return arguments.length ? this.each(t == null ? Lo : (typeof t == "function" ? Wo : Po)(t)) : this.node().innerHTML;
}
function Vo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qo() {
  return this.each(Vo);
}
function Bo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xo() {
  return this.each(Bo);
}
function Zo(t) {
  var n = typeof t == "function" ? t : ur(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Go() {
  return null;
}
function Jo(t, n) {
  var e = typeof t == "function" ? t : ur(t), r = n == null ? Go : typeof n == "function" ? n : re(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Qo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function jo() {
  return this.each(Qo);
}
function Ko() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ta() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function na(t) {
  return this.select(t ? ta : Ko);
}
function ea(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ra(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ia(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function oa(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function aa(t, n, e) {
  return function() {
    var r = this.__on, i, o = ra(n);
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
function ua(t, n, e) {
  var r = ia(t + ""), i, o = r.length, a;
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
  for (s = n ? aa : oa, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function yr(t, n, e) {
  var r = hr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function sa(t, n) {
  return function() {
    return yr(this, t, n);
  };
}
function ca(t, n) {
  return function() {
    return yr(this, t, n.apply(this, arguments));
  };
}
function la(t, n) {
  return this.each((typeof n == "function" ? ca : sa)(t, n));
}
function* fa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var wr = [null];
function rt(t, n) {
  this._groups = t, this._parents = n;
}
function jt() {
  return new rt([[document.documentElement]], wr);
}
function ha() {
  return this;
}
rt.prototype = jt.prototype = {
  constructor: rt,
  select: Oi,
  selectAll: Pi,
  selectChild: qi,
  selectChildren: Gi,
  filter: Ji,
  data: eo,
  enter: Qi,
  exit: io,
  join: oo,
  merge: ao,
  selection: ha,
  order: uo,
  sort: so,
  call: lo,
  nodes: fo,
  node: ho,
  size: go,
  empty: mo,
  each: po,
  attr: bo,
  style: ko,
  property: No,
  classed: Eo,
  text: Io,
  html: zo,
  raise: qo,
  lower: Xo,
  append: Zo,
  insert: Jo,
  remove: jo,
  clone: na,
  datum: ea,
  on: ua,
  dispatch: la,
  [Symbol.iterator]: fa
};
function Z(t) {
  return typeof t == "string" ? new rt([[document.querySelector(t)]], [document.documentElement]) : new rt([[t]], wr);
}
function da(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Ye(t, n) {
  if (t = da(t), n === void 0 && (n = t.currentTarget), n) {
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
const ga = { passive: !1 }, Gt = { capture: !0, passive: !1 };
function Fn(t) {
  t.stopImmediatePropagation();
}
function Nt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ma(t) {
  var n = t.document.documentElement, e = Z(t).on("dragstart.drag", Nt, Gt);
  "onselectstart" in n ? e.on("selectstart.drag", Nt, Gt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function pa(t, n) {
  var e = t.document.documentElement, r = Z(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Nt, Gt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const en = (t) => () => t;
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
function ya(t) {
  return !t.ctrlKey && !t.button;
}
function wa() {
  return this.parentNode;
}
function xa(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function va() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _a() {
  var t = ya, n = wa, e = xa, r = va, i = {}, o = ee("start", "drag", "end"), a = 0, s, c, u, l, f = 0;
  function h(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", Y).on("touchmove.drag", W, ga).on("touchend.drag touchcancel.drag", F).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, $) {
    if (!(l || !t.call(this, m, $))) {
      var d = D(this, n.call(this, m, $), m, $, "mouse");
      d && (Z(m.view).on("mousemove.drag", k, Gt).on("mouseup.drag", H, Gt), ma(m.view), Fn(m), u = !1, s = m.clientX, c = m.clientY, d("start", m));
    }
  }
  function k(m) {
    if (Nt(m), !u) {
      var $ = m.clientX - s, d = m.clientY - c;
      u = $ * $ + d * d > f;
    }
    i.mouse("drag", m);
  }
  function H(m) {
    Z(m.view).on("mousemove.drag mouseup.drag", null), pa(m.view, u), Nt(m), i.mouse("end", m);
  }
  function Y(m, $) {
    if (t.call(this, m, $)) {
      var d = m.changedTouches, w = n.call(this, m, $), x = d.length, E, N;
      for (E = 0; E < x; ++E)
        (N = D(this, w, m, $, d[E].identifier, d[E])) && (Fn(m), N("start", m, d[E]));
    }
  }
  function W(m) {
    var $ = m.changedTouches, d = $.length, w, x;
    for (w = 0; w < d; ++w)
      (x = i[$[w].identifier]) && (Nt(m), x("drag", m, $[w]));
  }
  function F(m) {
    var $ = m.changedTouches, d = $.length, w, x;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), w = 0; w < d; ++w)
      (x = i[$[w].identifier]) && (Fn(m), x("end", m, $[w]));
  }
  function D(m, $, d, w, x, E) {
    var N = o.copy(), p = Ye(E || d, $), R, P, T;
    if ((T = e.call(m, new qn("beforestart", {
      sourceEvent: d,
      target: h,
      identifier: x,
      active: a,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: N
    }), w)) != null)
      return R = T.x - p[0] || 0, P = T.y - p[1] || 0, function _(M, C, b) {
        var U = p, O;
        switch (M) {
          case "start":
            i[x] = _, O = a++;
            break;
          case "end":
            delete i[x], --a;
          case "drag":
            p = Ye(b || C, $), O = a;
            break;
        }
        N.call(
          M,
          m,
          new qn(M, {
            sourceEvent: C,
            subject: T,
            target: h,
            identifier: x,
            active: O,
            x: p[0] + R,
            y: p[1] + P,
            dx: p[0] - U[0],
            dy: p[1] - U[1],
            dispatch: N
          }),
          w
        );
      };
  }
  return h.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : en(!!m), h) : t;
  }, h.container = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : en(m), h) : n;
  }, h.subject = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : en(m), h) : e;
  }, h.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : en(!!m), h) : r;
  }, h.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? h : m;
  }, h.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, h) : Math.sqrt(f);
  }, h;
}
function Sn(t, n) {
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
function Ft() {
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
    return Ft(n, e).unknown(r);
  }, Sn.apply(i, arguments), i;
}
function xr() {
  var t = Ft().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, c = 0, u = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, g = i < r, k = g ? i : r, H = g ? r : i;
    o = (H - k) / Math.max(1, h - c + u * 2), s && (o = Math.floor(o)), k += (H - k - o * (h - c)) * l, a = o * (1 - c), s && (k = Math.round(k), a = Math.round(a));
    var Y = fi(h).map(function(W) {
      return k + o * W;
    });
    return e(g ? Y.reverse() : Y);
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
    return xr(n(), [r, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, Sn.apply(f(), arguments);
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
  return (t = +t) == 1 ? vr : function(n, e) {
    return e - n ? ba(n, e, t) : oe(isNaN(n) ? e : n);
  };
}
function vr(t, n) {
  var e = n - t;
  return e ? Ma(t, e) : oe(isNaN(t) ? n : t);
}
const pn = function t(n) {
  var e = $a(n);
  function r(i, o) {
    var a = e((i = zn(i)).r, (o = zn(o)).r), s = e(i.g, o.g), c = e(i.b, o.b), u = vr(i.opacity, o.opacity);
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
function Sa(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ka(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ae(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ca(t, n) {
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
function Aa(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ae(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Bn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Un = new RegExp(Bn.source, "g");
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
function _r(t, n) {
  var e = Bn.lastIndex = Un.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = Bn.exec(t)) && (i = Un.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: at(r, i) })), e = Un.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? Na(c[0].x) : Da(n) : (n = c.length, function(u) {
    for (var l = 0, f; l < n; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function ae(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? oe(n) : (e === "number" ? at : e === "string" ? (r = xt(n)) ? (n = r, pn) : _r : n instanceof xt ? pn : n instanceof Date ? Ca : Sa(n) ? Ta : Array.isArray(n) ? ka : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Aa : at)(t, n);
}
function Fa(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var He = 180 / Math.PI, Xn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Mr(t, n, e, r, i, o) {
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
var rn;
function Ua(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Xn : Mr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ya(t) {
  return t == null || (rn || (rn = document.createElementNS("http://www.w3.org/2000/svg", "g")), rn.setAttribute("transform", t), !(t = rn.transform.baseVal.consolidate())) ? Xn : (t = t.matrix, Mr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function br(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, f, h, g, k) {
    if (u !== f || l !== h) {
      var H = g.push("translate(", null, n, null, e);
      k.push({ i: H - 4, x: at(u, f) }, { i: H - 2, x: at(l, h) });
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
      var H = g.push(i(g) + "scale(", null, ",", null, ")");
      k.push({ i: H - 4, x: at(u, f) }, { i: H - 2, x: at(l, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, f, h), a(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(g) {
      for (var k = -1, H = h.length, Y; ++k < H; ) f[(Y = h[k]).i] = Y.x(g);
      return f.join("");
    };
  };
}
var Ea = br(Ua, "px, ", "px)", "deg)"), Ha = br(Ya, ", ", ")", ")");
function Oa(t) {
  return function() {
    return t;
  };
}
function Ra(t) {
  return +t;
}
var Oe = [0, 1];
function Ct(t) {
  return t;
}
function Zn(t, n) {
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
  return i < r ? (r = Zn(i, r), o = e(a, o)) : (r = Zn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Pa(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Zn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var c = ni(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function $r(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Wa() {
  var t = Oe, n = Oe, e = ae, r, i, o, a = Ct, s, c, u;
  function l() {
    var h = Math.min(t.length, n.length);
    return a !== Ct && (a = Ia(t[0], t[h - 1])), s = h > 2 ? Pa : La, c = u = null, f;
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
    return arguments.length ? (a = h ? !0 : Ct, l()) : a !== Ct;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, l();
  };
}
function Tr() {
  return Wa()(Ct, Ct);
}
function za(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function yn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Yt(t) {
  return t = yn(Math.abs(t)), t ? t[1] : NaN;
}
function Va(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function qa(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Ba = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wn(t) {
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
wn.prototype = ue.prototype;
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
var Sr;
function Za(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Sr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + yn(t, Math.max(0, n + o - 1))[0];
}
function Re(t, n) {
  var e = yn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ie = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: za,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Re(t * 100, n),
  r: Re,
  s: Za,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Le(t) {
  return t;
}
var Pe = Array.prototype.map, We = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ga(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Le : Va(Pe.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Le : qa(Pe.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = wn(f);
    var h = f.fill, g = f.align, k = f.sign, H = f.symbol, Y = f.zero, W = f.width, F = f.comma, D = f.precision, m = f.trim, $ = f.type;
    $ === "n" ? (F = !0, $ = "g") : Ie[$] || (D === void 0 && (D = 12), m = !0, $ = "g"), (Y || h === "0" && g === "=") && (Y = !0, h = "0", g = "=");
    var d = H === "$" ? e : H === "#" && /[boxX]/.test($) ? "0" + $.toLowerCase() : "", w = H === "$" ? r : /[%p]/.test($) ? a : "", x = Ie[$], E = /[defgprs%]/.test($);
    D = D === void 0 ? 6 : /[gprs]/.test($) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function N(p) {
      var R = d, P = w, T, _, M;
      if ($ === "c")
        P = x(p) + P, p = "";
      else {
        p = +p;
        var C = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? c : x(Math.abs(p), D), m && (p = Xa(p)), C && +p == 0 && k !== "+" && (C = !1), R = (C ? k === "(" ? k : s : k === "-" || k === "(" ? "" : k) + R, P = ($ === "s" ? We[8 + Sr / 3] : "") + P + (C && k === "(" ? ")" : ""), E) {
          for (T = -1, _ = p.length; ++T < _; )
            if (M = p.charCodeAt(T), 48 > M || M > 57) {
              P = (M === 46 ? i + p.slice(T + 1) : p.slice(T)) + P, p = p.slice(0, T);
              break;
            }
        }
      }
      F && !Y && (p = n(p, 1 / 0));
      var b = R.length + p.length + P.length, U = b < W ? new Array(W - b + 1).join(h) : "";
      switch (F && Y && (p = n(U + p, U.length ? W - P.length : 1 / 0), U = ""), g) {
        case "<":
          p = R + p + P + U;
          break;
        case "=":
          p = R + U + p + P;
          break;
        case "^":
          p = U.slice(0, b = U.length >> 1) + R + p + P + U.slice(b);
          break;
        default:
          p = U + R + p + P;
          break;
      }
      return o(p);
    }
    return N.toString = function() {
      return f + "";
    }, N;
  }
  function l(f, h) {
    var g = u((f = wn(f), f.type = "f", f)), k = Math.max(-8, Math.min(8, Math.floor(Yt(h) / 3))) * 3, H = Math.pow(10, -k), Y = We[8 + k / 3];
    return function(W) {
      return g(H * W) + Y;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var on, kr, Cr;
Ja({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ja(t) {
  return on = Ga(t), kr = on.format, Cr = on.formatPrefix, on;
}
function Qa(t) {
  return Math.max(0, -Yt(Math.abs(t)));
}
function ja(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Yt(n) / 3))) * 3 - Yt(Math.abs(t)));
}
function Ka(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Yt(n) - Yt(t)) + 1;
}
function tu(t, n, e, r) {
  var i = Pn(t, n, e), o;
  switch (r = wn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = ja(i, a)) && (r.precision = o), Cr(r, a);
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
  return kr(r);
}
function nu(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ci(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return tu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); l-- > 0; ) {
      if (u = Ln(a, s, e), u === c)
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
  var t = Tr();
  return t.copy = function() {
    return $r(t, eu());
  }, Sn.apply(t, arguments), nu(t);
}
function ru(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const Yn = /* @__PURE__ */ new Date(), En = /* @__PURE__ */ new Date();
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
  }), e && (i.count = (o, a) => (Yn.setTime(+o), En.setTime(+a), t(Yn), t(En), Math.floor(e(Yn, En))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const xn = Q(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
xn.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? Q((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : xn);
xn.range;
const mt = 1e3, it = mt * 60, pt = it * 60, yt = pt * 24, se = yt * 7, ze = yt * 30, Hn = yt * 365, At = Q((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * mt);
}, (t, n) => (n - t) / mt, (t) => t.getUTCSeconds());
At.range;
const ce = Q((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * mt);
}, (t, n) => {
  t.setTime(+t + n * it);
}, (t, n) => (n - t) / it, (t) => t.getMinutes());
ce.range;
const iu = Q((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * it);
}, (t, n) => (n - t) / it, (t) => t.getUTCMinutes());
iu.range;
const le = Q((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * mt - t.getMinutes() * it);
}, (t, n) => {
  t.setTime(+t + n * pt);
}, (t, n) => (n - t) / pt, (t) => t.getHours());
le.range;
const ou = Q((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * pt);
}, (t, n) => (n - t) / pt, (t) => t.getUTCHours());
ou.range;
const Kt = Q(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * it) / yt,
  (t) => t.getDate() - 1
);
Kt.range;
const fe = Q((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / yt, (t) => t.getUTCDate() - 1);
fe.range;
const au = Q((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / yt, (t) => Math.floor(t / yt));
au.range;
function $t(t) {
  return Q((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * it) / se);
}
const kn = $t(0), vn = $t(1), uu = $t(2), su = $t(3), Et = $t(4), cu = $t(5), lu = $t(6);
kn.range;
vn.range;
uu.range;
su.range;
Et.range;
cu.range;
lu.range;
function Tt(t) {
  return Q((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / se);
}
const Ar = Tt(0), _n = Tt(1), fu = Tt(2), hu = Tt(3), Ht = Tt(4), du = Tt(5), gu = Tt(6);
Ar.range;
_n.range;
fu.range;
hu.range;
Ht.range;
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
const wt = Q((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n);
}, (t, n) => n.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
wt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Q((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setFullYear(n.getFullYear() + e * t);
});
wt.range;
const Mt = Q((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
Mt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Q((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCFullYear(n.getUTCFullYear() + e * t);
});
Mt.range;
function pu(t, n, e, r, i, o) {
  const a = [
    [At, 1, mt],
    [At, 5, 5 * mt],
    [At, 15, 15 * mt],
    [At, 30, 30 * mt],
    [o, 1, it],
    [o, 5, 5 * it],
    [o, 15, 15 * it],
    [o, 30, 30 * it],
    [i, 1, pt],
    [i, 3, 3 * pt],
    [i, 6, 6 * pt],
    [i, 12, 12 * pt],
    [r, 1, yt],
    [r, 2, 2 * yt],
    [e, 1, se],
    [n, 1, ze],
    [n, 3, 3 * ze],
    [t, 1, Hn]
  ];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const g = f && typeof f.range == "function" ? f : c(u, l, f), k = g ? g.range(u, +l + 1) : [];
    return h ? k.reverse() : k;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, g = Kn(([, , Y]) => Y).right(a, h);
    if (g === a.length) return t.every(Pn(u / Hn, l / Hn, f));
    if (g === 0) return xn.every(Math.max(Pn(u, l, f), 1));
    const [k, H] = a[h / a[g - 1][2] < a[g][2] / h ? g - 1 : g];
    return k.every(H);
  }
  return [s, c];
}
const [yu, wu] = pu(wt, he, kn, Kt, le, ce);
function On(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Rn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function It(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function xu(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, c = t.shortMonths, u = Lt(i), l = Pt(i), f = Lt(o), h = Pt(o), g = Lt(a), k = Pt(a), H = Lt(s), Y = Pt(s), W = Lt(c), F = Pt(c), D = {
    a: C,
    A: b,
    b: U,
    B: O,
    c: null,
    d: Ge,
    e: Ge,
    f: Wu,
    g: ju,
    G: ts,
    H: Iu,
    I: Lu,
    j: Pu,
    L: Dr,
    m: zu,
    M: Vu,
    p: q,
    q: z,
    Q: je,
    s: Ke,
    S: qu,
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
    "%": Qe
  }, m = {
    a: G,
    A: J,
    b: K,
    B: dt,
    c: null,
    d: Je,
    e: Je,
    f: os,
    g: ms,
    G: ys,
    H: es,
    I: rs,
    j: is,
    L: Fr,
    m: as,
    M: us,
    p: ot,
    q: tt,
    Q: je,
    s: Ke,
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
    "%": Qe
  }, $ = {
    a: N,
    A: p,
    b: R,
    B: P,
    c: T,
    d: Xe,
    e: Xe,
    f: Eu,
    g: Be,
    G: qe,
    H: Ze,
    I: Ze,
    j: Nu,
    L: Yu,
    m: Du,
    M: Fu,
    p: E,
    q: Au,
    Q: Ou,
    s: Ru,
    S: Uu,
    u: $u,
    U: Tu,
    V: Su,
    w: bu,
    W: ku,
    x: _,
    X: M,
    y: Be,
    Y: qe,
    Z: Cu,
    "%": Hu
  };
  D.x = d(e, D), D.X = d(r, D), D.c = d(n, D), m.x = d(e, m), m.X = d(r, m), m.c = d(n, m);
  function d(S, v) {
    return function(A) {
      var y = [], L = -1, I = 0, B = S.length, X, nt, ct;
      for (A instanceof Date || (A = /* @__PURE__ */ new Date(+A)); ++L < B; )
        S.charCodeAt(L) === 37 && (y.push(S.slice(I, L)), (nt = Ve[X = S.charAt(++L)]) != null ? X = S.charAt(++L) : nt = X === "e" ? " " : "0", (ct = v[X]) && (X = ct(A, nt)), y.push(X), I = L + 1);
      return y.push(S.slice(I, L)), y.join("");
    };
  }
  function w(S, v) {
    return function(A) {
      var y = It(1900, void 0, 1), L = x(y, S, A += "", 0), I, B;
      if (L != A.length) return null;
      if ("Q" in y) return new Date(y.Q);
      if ("s" in y) return new Date(y.s * 1e3 + ("L" in y ? y.L : 0));
      if (v && !("Z" in y) && (y.Z = 0), "p" in y && (y.H = y.H % 12 + y.p * 12), y.m === void 0 && (y.m = "q" in y ? y.q : 0), "V" in y) {
        if (y.V < 1 || y.V > 53) return null;
        "w" in y || (y.w = 1), "Z" in y ? (I = Rn(It(y.y, 0, 1)), B = I.getUTCDay(), I = B > 4 || B === 0 ? _n.ceil(I) : _n(I), I = fe.offset(I, (y.V - 1) * 7), y.y = I.getUTCFullYear(), y.m = I.getUTCMonth(), y.d = I.getUTCDate() + (y.w + 6) % 7) : (I = On(It(y.y, 0, 1)), B = I.getDay(), I = B > 4 || B === 0 ? vn.ceil(I) : vn(I), I = Kt.offset(I, (y.V - 1) * 7), y.y = I.getFullYear(), y.m = I.getMonth(), y.d = I.getDate() + (y.w + 6) % 7);
      } else ("W" in y || "U" in y) && ("w" in y || (y.w = "u" in y ? y.u % 7 : "W" in y ? 1 : 0), B = "Z" in y ? Rn(It(y.y, 0, 1)).getUTCDay() : On(It(y.y, 0, 1)).getDay(), y.m = 0, y.d = "W" in y ? (y.w + 6) % 7 + y.W * 7 - (B + 5) % 7 : y.w + y.U * 7 - (B + 6) % 7);
      return "Z" in y ? (y.H += y.Z / 100 | 0, y.M += y.Z % 100, Rn(y)) : On(y);
    };
  }
  function x(S, v, A, y) {
    for (var L = 0, I = v.length, B = A.length, X, nt; L < I; ) {
      if (y >= B) return -1;
      if (X = v.charCodeAt(L++), X === 37) {
        if (X = v.charAt(L++), nt = $[X in Ve ? v.charAt(L++) : X], !nt || (y = nt(S, A, y)) < 0) return -1;
      } else if (X != A.charCodeAt(y++))
        return -1;
    }
    return y;
  }
  function E(S, v, A) {
    var y = u.exec(v.slice(A));
    return y ? (S.p = l.get(y[0].toLowerCase()), A + y[0].length) : -1;
  }
  function N(S, v, A) {
    var y = g.exec(v.slice(A));
    return y ? (S.w = k.get(y[0].toLowerCase()), A + y[0].length) : -1;
  }
  function p(S, v, A) {
    var y = f.exec(v.slice(A));
    return y ? (S.w = h.get(y[0].toLowerCase()), A + y[0].length) : -1;
  }
  function R(S, v, A) {
    var y = W.exec(v.slice(A));
    return y ? (S.m = F.get(y[0].toLowerCase()), A + y[0].length) : -1;
  }
  function P(S, v, A) {
    var y = H.exec(v.slice(A));
    return y ? (S.m = Y.get(y[0].toLowerCase()), A + y[0].length) : -1;
  }
  function T(S, v, A) {
    return x(S, n, v, A);
  }
  function _(S, v, A) {
    return x(S, e, v, A);
  }
  function M(S, v, A) {
    return x(S, r, v, A);
  }
  function C(S) {
    return a[S.getDay()];
  }
  function b(S) {
    return o[S.getDay()];
  }
  function U(S) {
    return c[S.getMonth()];
  }
  function O(S) {
    return s[S.getMonth()];
  }
  function q(S) {
    return i[+(S.getHours() >= 12)];
  }
  function z(S) {
    return 1 + ~~(S.getMonth() / 3);
  }
  function G(S) {
    return a[S.getUTCDay()];
  }
  function J(S) {
    return o[S.getUTCDay()];
  }
  function K(S) {
    return c[S.getUTCMonth()];
  }
  function dt(S) {
    return s[S.getUTCMonth()];
  }
  function ot(S) {
    return i[+(S.getUTCHours() >= 12)];
  }
  function tt(S) {
    return 1 + ~~(S.getUTCMonth() / 3);
  }
  return {
    format: function(S) {
      var v = d(S += "", D);
      return v.toString = function() {
        return S;
      }, v;
    },
    parse: function(S) {
      var v = w(S += "", !1);
      return v.toString = function() {
        return S;
      }, v;
    },
    utcFormat: function(S) {
      var v = d(S += "", m);
      return v.toString = function() {
        return S;
      }, v;
    },
    utcParse: function(S) {
      var v = w(S += "", !0);
      return v.toString = function() {
        return S;
      }, v;
    }
  };
}
var Ve = { "-": "", _: " ", 0: "0" }, j = /^\s*\d+/, vu = /^%/, _u = /[\\^$*+?|[\]().{}]/g;
function V(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function Mu(t) {
  return t.replace(_u, "\\$&");
}
function Lt(t) {
  return new RegExp("^(?:" + t.map(Mu).join("|") + ")", "i");
}
function Pt(t) {
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
function Su(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function ku(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function qe(t, n, e) {
  var r = j.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function Be(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function Cu(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function Au(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function Du(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function Xe(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function Nu(t, n, e) {
  var r = j.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Ze(t, n, e) {
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
function Ge(t, n) {
  return V(t.getDate(), n, 2);
}
function Iu(t, n) {
  return V(t.getHours(), n, 2);
}
function Lu(t, n) {
  return V(t.getHours() % 12 || 12, n, 2);
}
function Pu(t, n) {
  return V(1 + Kt.count(wt(t), t), n, 3);
}
function Dr(t, n) {
  return V(t.getMilliseconds(), n, 3);
}
function Wu(t, n) {
  return Dr(t, n) + "000";
}
function zu(t, n) {
  return V(t.getMonth() + 1, n, 2);
}
function Vu(t, n) {
  return V(t.getMinutes(), n, 2);
}
function qu(t, n) {
  return V(t.getSeconds(), n, 2);
}
function Bu(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function Xu(t, n) {
  return V(kn.count(wt(t) - 1, t), n, 2);
}
function Nr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Et(t) : Et.ceil(t);
}
function Zu(t, n) {
  return t = Nr(t), V(Et.count(wt(t), t) + (wt(t).getDay() === 4), n, 2);
}
function Gu(t) {
  return t.getDay();
}
function Ju(t, n) {
  return V(vn.count(wt(t) - 1, t), n, 2);
}
function Qu(t, n) {
  return V(t.getFullYear() % 100, n, 2);
}
function ju(t, n) {
  return t = Nr(t), V(t.getFullYear() % 100, n, 2);
}
function Ku(t, n) {
  return V(t.getFullYear() % 1e4, n, 4);
}
function ts(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Et(t) : Et.ceil(t), V(t.getFullYear() % 1e4, n, 4);
}
function ns(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + V(n / 60 | 0, "0", 2) + V(n % 60, "0", 2);
}
function Je(t, n) {
  return V(t.getUTCDate(), n, 2);
}
function es(t, n) {
  return V(t.getUTCHours(), n, 2);
}
function rs(t, n) {
  return V(t.getUTCHours() % 12 || 12, n, 2);
}
function is(t, n) {
  return V(1 + fe.count(Mt(t), t), n, 3);
}
function Fr(t, n) {
  return V(t.getUTCMilliseconds(), n, 3);
}
function os(t, n) {
  return Fr(t, n) + "000";
}
function as(t, n) {
  return V(t.getUTCMonth() + 1, n, 2);
}
function us(t, n) {
  return V(t.getUTCMinutes(), n, 2);
}
function ss(t, n) {
  return V(t.getUTCSeconds(), n, 2);
}
function cs(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function ls(t, n) {
  return V(Ar.count(Mt(t) - 1, t), n, 2);
}
function Ur(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Ht(t) : Ht.ceil(t);
}
function fs(t, n) {
  return t = Ur(t), V(Ht.count(Mt(t), t) + (Mt(t).getUTCDay() === 4), n, 2);
}
function hs(t) {
  return t.getUTCDay();
}
function ds(t, n) {
  return V(_n.count(Mt(t) - 1, t), n, 2);
}
function gs(t, n) {
  return V(t.getUTCFullYear() % 100, n, 2);
}
function ms(t, n) {
  return t = Ur(t), V(t.getUTCFullYear() % 100, n, 2);
}
function ps(t, n) {
  return V(t.getUTCFullYear() % 1e4, n, 4);
}
function ys(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Ht(t) : Ht.ceil(t), V(t.getUTCFullYear() % 1e4, n, 4);
}
function ws() {
  return "+0000";
}
function Qe() {
  return "%";
}
function je(t) {
  return +t;
}
function Ke(t) {
  return Math.floor(+t / 1e3);
}
var St, de, Yr, Er;
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
  return St = xu(t), de = St.format, St.parse, Yr = St.utcFormat, Er = St.utcParse, St;
}
var Hr = "%Y-%m-%dT%H:%M:%S.%LZ";
function vs(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Yr(Hr);
function _s(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var Ms = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? _s : Er(Hr);
function bs(t) {
  return new Date(t);
}
function $s(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Or(t, n, e, r, i, o, a, s, c, u) {
  var l = Tr(), f = l.invert, h = l.domain, g = u(".%L"), k = u(":%S"), H = u("%I:%M"), Y = u("%I %p"), W = u("%a %d"), F = u("%b %d"), D = u("%B"), m = u("%Y");
  function $(d) {
    return (c(d) < d ? g : s(d) < d ? k : a(d) < d ? H : o(d) < d ? Y : r(d) < d ? i(d) < d ? W : F : e(d) < d ? D : m)(d);
  }
  return l.invert = function(d) {
    return new Date(f(d));
  }, l.domain = function(d) {
    return arguments.length ? h(Array.from(d, $s)) : h().map(bs);
  }, l.ticks = function(d) {
    var w = h();
    return t(w[0], w[w.length - 1], d ?? 10);
  }, l.tickFormat = function(d, w) {
    return w == null ? $ : u(w);
  }, l.nice = function(d) {
    var w = h();
    return (!d || typeof d.range != "function") && (d = n(w[0], w[w.length - 1], d ?? 10)), d ? h(ru(w, d)) : l;
  }, l.copy = function() {
    return $r(l, Or(t, n, e, r, i, o, a, s, c, u));
  }, l;
}
function Ts() {
  return Sn.apply(Or(yu, wu, wt, he, kn, Kt, le, ce, At, de).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ot = 0, qt = 0, Wt = 0, Rr = 1e3, Mn, Bt, bn = 0, bt = 0, Cn = 0, Jt = typeof performance == "object" && performance.now ? performance : Date, Ir = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ge() {
  return bt || (Ir(Ss), bt = Jt.now() + Cn);
}
function Ss() {
  bt = 0;
}
function $n() {
  this._call = this._time = this._next = null;
}
$n.prototype = Lr.prototype = {
  constructor: $n,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? ge() : +e) + (n == null ? 0 : +n), !this._next && Bt !== this && (Bt ? Bt._next = this : Mn = this, Bt = this), this._call = t, this._time = e, Gn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Gn());
  }
};
function Lr(t, n, e) {
  var r = new $n();
  return r.restart(t, n, e), r;
}
function ks() {
  ge(), ++Ot;
  for (var t = Mn, n; t; )
    (n = bt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ot;
}
function tr() {
  bt = (bn = Jt.now()) + Cn, Ot = qt = 0;
  try {
    ks();
  } finally {
    Ot = 0, As(), bt = 0;
  }
}
function Cs() {
  var t = Jt.now(), n = t - bn;
  n > Rr && (Cn -= n, bn = t);
}
function As() {
  for (var t, n = Mn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Mn = e);
  Bt = t, Gn(r);
}
function Gn(t) {
  if (!Ot) {
    qt && (qt = clearTimeout(qt));
    var n = t - bt;
    n > 24 ? (t < 1 / 0 && (qt = setTimeout(tr, t - Jt.now() - Cn)), Wt && (Wt = clearInterval(Wt))) : (Wt || (bn = Jt.now(), Wt = setInterval(Cs, Rr)), Ot = 1, Ir(tr));
  }
}
function nr(t, n, e) {
  var r = new $n();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ds = ee("start", "end", "cancel", "interrupt"), Ns = [], Pr = 0, Jn = 1, Qn = 2, ln = 3, er = 4, jn = 5, fn = 6;
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
    state: Pr
  });
}
function me(t, n) {
  var e = st(t, n);
  if (e.state > Pr) throw new Error("too late; already scheduled");
  return e;
}
function ht(t, n) {
  var e = st(t, n);
  if (e.state > ln) throw new Error("too late; already running");
  return e;
}
function st(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Fs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Lr(o, 0, e.time);
  function o(u) {
    e.state = Jn, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var l, f, h, g;
    if (e.state !== Jn) return c();
    for (l in r)
      if (g = r[l], g.name === e.name) {
        if (g.state === ln) return nr(a);
        g.state === er ? (g.state = fn, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[l]) : +l < n && (g.state = fn, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[l]);
      }
    if (nr(function() {
      e.state === ln && (e.state = er, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Qn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Qn) {
      for (e.state = ln, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
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
    e.state = fn, e.timer.stop(), delete r[n];
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
      i = r.state > Qn && r.state < jn, r.state = fn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
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
    var i = ht(this, t), o = i.tween;
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
    var o = ht(this, t), a = o.tween;
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
    var i = ht(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[n];
  };
}
function Wr(t, n) {
  var e;
  return (typeof n == "number" ? at : n instanceof xt ? pn : (e = xt(n)) ? (n = e, pn) : _r)(t, n);
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
function zs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function Vs(t, n) {
  var e = Tn(t), r = e === "transform" ? Ha : Wr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? zs : Ws)(e, r, pe(this, "attr." + t, n)) : n == null ? (e.local ? Is : Rs)(e) : (e.local ? Ps : Ls)(e, r, n));
}
function qs(t, n) {
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
    return o !== r && (e = (r = o) && qs(t, o)), e;
  }
  return i._value = n, i;
}
function Gs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Tn(t);
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
    ht(this, t).duration = +n.apply(this, arguments);
  };
}
function tc(t, n) {
  return n = +n, function() {
    ht(this, t).duration = n;
  };
}
function nc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ks : tc)(n, t)) : st(this.node(), n).duration;
}
function ec(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ht(this, t).ease = n;
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
    ht(this, t).ease = e;
  };
}
function oc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ic(this._id, t));
}
function ac(t) {
  typeof t != "function" && (t = cr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new ft(r, this._parents, this._name, this._id);
}
function uc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = n[s], u = e[s], l = c.length, f = a[s] = new Array(l), h, g = 0; g < l; ++g)
      (h = c[g] || u[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new ft(a, this._parents, this._name, this._id);
}
function sc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function cc(t, n, e) {
  var r, i, o = sc(n) ? me : ht;
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
  typeof t != "function" && (t = re(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, An(u[h], n, e, h, u, st(l, e)));
  return new ft(o, this._parents, n, e);
}
function gc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = sr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), g, k = st(l, e), H = 0, Y = h.length; H < Y; ++H)
          (g = h[H]) && An(g, n, e, H, h, k);
        o.push(h), a.push(l);
      }
  return new ft(o, a, n, e);
}
var mc = jt.prototype.constructor;
function pc() {
  return new mc(this._groups, this._parents);
}
function yc(t, n) {
  var e, r, i;
  return function() {
    var o = Ut(this, t), a = (this.style.removeProperty(t), Ut(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function zr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Ut(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xc(t, n, e) {
  var r, i, o;
  return function() {
    var a = Ut(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Ut(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s));
  };
}
function vc(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var c = ht(this, t), u = c.on, l = c.value[o] == null ? s || (s = zr(n)) : void 0;
    (u !== e || i !== l) && (r = (e = u).copy()).on(a, i = l), c.on = r;
  };
}
function _c(t, n, e) {
  var r = (t += "") == "transform" ? Ea : Wr;
  return n == null ? this.styleTween(t, yc(t, r)).on("end.style." + t, zr(t)) : typeof n == "function" ? this.styleTween(t, xc(t, r, pe(this, "style." + t, n))).each(vc(this._id, t)) : this.styleTween(t, wc(t, r, n), e).on("end.style." + t, null);
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
function Sc(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function kc(t) {
  return this.tween("text", typeof t == "function" ? Sc(pe(this, "text", t)) : Tc(t == null ? "" : t + ""));
}
function Cc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ac(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Cc(i)), n;
  }
  return r._value = t, r;
}
function Dc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Ac(t));
}
function Nc() {
  for (var t = this._name, n = this._id, e = Vr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
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
  return new ft(r, this._parents, t, e);
}
function Fc() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = ht(this, r), l = u.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), u.on = n;
    }), i === 0 && o();
  });
}
var Uc = 0;
function ft(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Vr() {
  return ++Uc;
}
var gt = jt.prototype;
ft.prototype = {
  constructor: ft,
  select: dc,
  selectAll: gc,
  selectChild: gt.selectChild,
  selectChildren: gt.selectChildren,
  filter: ac,
  merge: uc,
  selection: pc,
  transition: Nc,
  call: gt.call,
  nodes: gt.nodes,
  node: gt.node,
  size: gt.size,
  empty: gt.empty,
  each: gt.each,
  on: lc,
  attr: Vs,
  attrTween: Gs,
  style: _c,
  styleTween: $c,
  text: kc,
  textTween: Dc,
  remove: hc,
  tween: Os,
  delay: js,
  duration: nc,
  ease: rc,
  easeVarying: oc,
  end: Fc,
  [Symbol.iterator]: gt[Symbol.iterator]
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
  t instanceof ft ? (n = t._id, t = t._name) : (n = Vr(), (e = Ec).time = ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && An(c, t, n, u, a, e || Hc(c, n));
  return new ft(r, this._parents, t, n);
}
jt.prototype.interrupt = Ys;
jt.prototype.transition = Oc;
var Rc = [null];
function Ic(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Jn && r.name === n)
        return new ft([[t]], Rc, n, +i);
  }
  return null;
}
const Lc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function qr(t) {
  Z("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Lc);
  const n = Z("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function Pc(t) {
  return ir(t.nodes().map((n) => n.getComputedTextLength()));
}
function Wc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const kt = 1, zc = 2;
function Br(t, n) {
  let e = ["#FFF", "#EEE"], r = Ft(e), i = 5, o, a = "#AAA", s = 40, c = 3e3, u;
  function l(f) {
    let h = n.domain(), g = qr((d) => d), k = Ft(e), H = Ft(e.reverse()), Y = Wc(s), W = f.selectAll(".row").data(h, n).order(), F = W.enter().append("g").attr("class", "row"), D = W.exit(), m = W.select("text");
    W = W.merge(F).attr("transform", (d) => "translate(0," + n(d) + ")"), D.remove(), F.append("rect").attr("y", 0.5).attr("width", c).attr("height", n.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", k), F.append("path").attr("stroke", H), m = m.merge(
      F.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(d, w) {
        Z(this).text() != w && g.show(w);
      }).on("mouseout", g.hide)
    ).text(Y), u === void 0 && (u = Pc(m) + 2 * i, u = t === kt ? c - u : u), o = t === kt ? [0, u] : [u, c], m.attr("text-anchor", t === kt ? "start" : "end").attr("dx", t === kt ? i : -i).attr("x", u);
    const $ = function(d, w) {
      u = Math.max(10, Math.min(c - 10, u + d.dx)), Z(this).attr("d", "M" + u + ",0.5V" + n.range()[1]), m.attr("x", u), o = t === kt ? [0, u] : [u, c], f.dispatch("offset", { detail: { offset: u } });
    };
    f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (u + 0.5) + ",0.5V" + n.range()[1]).style("cursor", "ew-resize").call(_a().on("drag", $));
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
function Vc(t) {
  return Br(zc, t);
}
function qc(t) {
  return Br(kt, t);
}
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function we(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ye, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", s = "minute", c = "hour", u = "day", l = "week", f = "month", h = "quarter", g = "year", k = "date", H = "Invalid Date", Y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, W = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var _ = ["th", "st", "nd", "rd"], M = T % 100;
      return "[" + T + (_[(M - 20) % 10] || _[M] || _[0]) + "]";
    } }, D = function(T, _, M) {
      var C = String(T);
      return !C || C.length >= _ ? T : "" + Array(_ + 1 - C.length).join(M) + T;
    }, m = { s: D, z: function(T) {
      var _ = -T.utcOffset(), M = Math.abs(_), C = Math.floor(M / 60), b = M % 60;
      return (_ <= 0 ? "+" : "-") + D(C, 2, "0") + ":" + D(b, 2, "0");
    }, m: function T(_, M) {
      if (_.date() < M.date()) return -T(M, _);
      var C = 12 * (M.year() - _.year()) + (M.month() - _.month()), b = _.clone().add(C, f), U = M - b < 0, O = _.clone().add(C + (U ? -1 : 1), f);
      return +(-(C + (M - b) / (U ? b - O : O - b)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: f, y: g, w: l, d: u, D: k, h: c, m: s, s: a, ms: o, Q: h }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, $ = "en", d = {};
    d[$] = F;
    var w = "$isDayjsObject", x = function(T) {
      return T instanceof R || !(!T || !T[w]);
    }, E = function T(_, M, C) {
      var b;
      if (!_) return $;
      if (typeof _ == "string") {
        var U = _.toLowerCase();
        d[U] && (b = U), M && (d[U] = M, b = U);
        var O = _.split("-");
        if (!b && O.length > 1) return T(O[0]);
      } else {
        var q = _.name;
        d[q] = _, b = q;
      }
      return !C && b && ($ = b), b || !C && $;
    }, N = function(T, _) {
      if (x(T)) return T.clone();
      var M = typeof _ == "object" ? _ : {};
      return M.date = T, M.args = arguments, new R(M);
    }, p = m;
    p.l = E, p.i = x, p.w = function(T, _) {
      return N(T, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var R = function() {
      function T(M) {
        this.$L = E(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[w] = !0;
      }
      var _ = T.prototype;
      return _.parse = function(M) {
        this.$d = function(C) {
          var b = C.date, U = C.utc;
          if (b === null) return /* @__PURE__ */ new Date(NaN);
          if (p.u(b)) return /* @__PURE__ */ new Date();
          if (b instanceof Date) return new Date(b);
          if (typeof b == "string" && !/Z$/i.test(b)) {
            var O = b.match(Y);
            if (O) {
              var q = O[2] - 1 || 0, z = (O[7] || "0").substring(0, 3);
              return U ? new Date(Date.UTC(O[1], q, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z)) : new Date(O[1], q, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z);
            }
          }
          return new Date(b);
        }(M), this.init();
      }, _.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, _.$utils = function() {
        return p;
      }, _.isValid = function() {
        return this.$d.toString() !== H;
      }, _.isSame = function(M, C) {
        var b = N(M);
        return this.startOf(C) <= b && b <= this.endOf(C);
      }, _.isAfter = function(M, C) {
        return N(M) < this.startOf(C);
      }, _.isBefore = function(M, C) {
        return this.endOf(C) < N(M);
      }, _.$g = function(M, C, b) {
        return p.u(M) ? this[C] : this.set(b, M);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(M, C) {
        var b = this, U = !!p.u(C) || C, O = p.p(M), q = function(S, v) {
          var A = p.w(b.$u ? Date.UTC(b.$y, v, S) : new Date(b.$y, v, S), b);
          return U ? A : A.endOf(u);
        }, z = function(S, v) {
          return p.w(b.toDate()[S].apply(b.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(v)), b);
        }, G = this.$W, J = this.$M, K = this.$D, dt = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case g:
            return U ? q(1, 0) : q(31, 11);
          case f:
            return U ? q(1, J) : q(0, J + 1);
          case l:
            var ot = this.$locale().weekStart || 0, tt = (G < ot ? G + 7 : G) - ot;
            return q(U ? K - tt : K + (6 - tt), J);
          case u:
          case k:
            return z(dt + "Hours", 0);
          case c:
            return z(dt + "Minutes", 1);
          case s:
            return z(dt + "Seconds", 2);
          case a:
            return z(dt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(M) {
        return this.startOf(M, !1);
      }, _.$set = function(M, C) {
        var b, U = p.p(M), O = "set" + (this.$u ? "UTC" : ""), q = (b = {}, b[u] = O + "Date", b[k] = O + "Date", b[f] = O + "Month", b[g] = O + "FullYear", b[c] = O + "Hours", b[s] = O + "Minutes", b[a] = O + "Seconds", b[o] = O + "Milliseconds", b)[U], z = U === u ? this.$D + (C - this.$W) : C;
        if (U === f || U === g) {
          var G = this.clone().set(k, 1);
          G.$d[q](z), G.init(), this.$d = G.set(k, Math.min(this.$D, G.daysInMonth())).$d;
        } else q && this.$d[q](z);
        return this.init(), this;
      }, _.set = function(M, C) {
        return this.clone().$set(M, C);
      }, _.get = function(M) {
        return this[p.p(M)]();
      }, _.add = function(M, C) {
        var b, U = this;
        M = Number(M);
        var O = p.p(C), q = function(J) {
          var K = N(U);
          return p.w(K.date(K.date() + Math.round(J * M)), U);
        };
        if (O === f) return this.set(f, this.$M + M);
        if (O === g) return this.set(g, this.$y + M);
        if (O === u) return q(1);
        if (O === l) return q(7);
        var z = (b = {}, b[s] = r, b[c] = i, b[a] = e, b)[O] || 1, G = this.$d.getTime() + M * z;
        return p.w(G, this);
      }, _.subtract = function(M, C) {
        return this.add(-1 * M, C);
      }, _.format = function(M) {
        var C = this, b = this.$locale();
        if (!this.isValid()) return b.invalidDate || H;
        var U = M || "YYYY-MM-DDTHH:mm:ssZ", O = p.z(this), q = this.$H, z = this.$m, G = this.$M, J = b.weekdays, K = b.months, dt = b.meridiem, ot = function(v, A, y, L) {
          return v && (v[A] || v(C, U)) || y[A].slice(0, L);
        }, tt = function(v) {
          return p.s(q % 12 || 12, v, "0");
        }, S = dt || function(v, A, y) {
          var L = v < 12 ? "AM" : "PM";
          return y ? L.toLowerCase() : L;
        };
        return U.replace(W, function(v, A) {
          return A || function(y) {
            switch (y) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return p.s(C.$y, 4, "0");
              case "M":
                return G + 1;
              case "MM":
                return p.s(G + 1, 2, "0");
              case "MMM":
                return ot(b.monthsShort, G, K, 3);
              case "MMMM":
                return ot(K, G);
              case "D":
                return C.$D;
              case "DD":
                return p.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return ot(b.weekdaysMin, C.$W, J, 2);
              case "ddd":
                return ot(b.weekdaysShort, C.$W, J, 3);
              case "dddd":
                return J[C.$W];
              case "H":
                return String(q);
              case "HH":
                return p.s(q, 2, "0");
              case "h":
                return tt(1);
              case "hh":
                return tt(2);
              case "a":
                return S(q, z, !0);
              case "A":
                return S(q, z, !1);
              case "m":
                return String(z);
              case "mm":
                return p.s(z, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return p.s(C.$s, 2, "0");
              case "SSS":
                return p.s(C.$ms, 3, "0");
              case "Z":
                return O;
            }
            return null;
          }(v) || O.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(M, C, b) {
        var U, O = this, q = p.p(C), z = N(M), G = (z.utcOffset() - this.utcOffset()) * r, J = this - z, K = function() {
          return p.m(O, z);
        };
        switch (q) {
          case g:
            U = K() / 12;
            break;
          case f:
            U = K();
            break;
          case h:
            U = K() / 3;
            break;
          case l:
            U = (J - G) / 6048e5;
            break;
          case u:
            U = (J - G) / 864e5;
            break;
          case c:
            U = J / i;
            break;
          case s:
            U = J / r;
            break;
          case a:
            U = J / e;
            break;
          default:
            U = J;
        }
        return b ? U : p.a(U);
      }, _.daysInMonth = function() {
        return this.endOf(f).$D;
      }, _.$locale = function() {
        return d[this.$L];
      }, _.locale = function(M, C) {
        if (!M) return this.$L;
        var b = this.clone(), U = E(M, C, !0);
        return U && (b.$L = U), b;
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
      }, T;
    }(), P = R.prototype;
    return N.prototype = P, [["$ms", o], ["$s", a], ["$m", s], ["$H", c], ["$W", u], ["$M", f], ["$y", g], ["$D", k]].forEach(function(T) {
      P[T[1]] = function(_) {
        return this.$g(_, T[0], T[1]);
      };
    }), N.extend = function(T, _) {
      return T.$i || (T(_, R, N), T.$i = !0), N;
    }, N.locale = E, N.isDayjs = x, N.unix = function(T) {
      return N(1e3 * T);
    }, N.en = d[$], N.Ls = d, N.p = {}, N;
  });
})(Xr);
var Bc = Xr.exports;
const xe = /* @__PURE__ */ we(Bc);
var Zr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ye, function() {
    var e, r, i = 1e3, o = 6e4, a = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, l = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u, months: l, days: s, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, g = function(d) {
      return d instanceof m;
    }, k = function(d, w, x) {
      return new m(d, x, w.$l);
    }, H = function(d) {
      return r.p(d) + "s";
    }, Y = function(d) {
      return d < 0;
    }, W = function(d) {
      return Y(d) ? Math.ceil(d) : Math.floor(d);
    }, F = function(d) {
      return Math.abs(d);
    }, D = function(d, w) {
      return d ? Y(d) ? { negative: !0, format: "" + F(d) + w } : { negative: !1, format: "" + d + w } : { negative: !1, format: "" };
    }, m = function() {
      function d(x, E, N) {
        var p = this;
        if (this.$d = {}, this.$l = N, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E) return k(x * h[H(E)], this);
        if (typeof x == "number") return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object") return Object.keys(x).forEach(function(T) {
          p.$d[H(T)] = x[T];
        }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var R = x.match(f);
          if (R) {
            var P = R.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = P[0], this.$d.months = P[1], this.$d.weeks = P[2], this.$d.days = P[3], this.$d.hours = P[4], this.$d.minutes = P[5], this.$d.seconds = P[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var w = d.prototype;
      return w.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, N) {
          return E + (x.$d[N] || 0) * h[N];
        }, 0);
      }, w.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = W(x / u), x %= u, this.$d.months = W(x / l), x %= l, this.$d.days = W(x / s), x %= s, this.$d.hours = W(x / a), x %= a, this.$d.minutes = W(x / o), x %= o, this.$d.seconds = W(x / i), x %= i, this.$d.milliseconds = x;
      }, w.toISOString = function() {
        var x = D(this.$d.years, "Y"), E = D(this.$d.months, "M"), N = +this.$d.days || 0;
        this.$d.weeks && (N += 7 * this.$d.weeks);
        var p = D(N, "D"), R = D(this.$d.hours, "H"), P = D(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3, T = Math.round(1e3 * T) / 1e3);
        var _ = D(T, "S"), M = x.negative || E.negative || p.negative || R.negative || P.negative || _.negative, C = R.format || P.format || _.format ? "T" : "", b = (M ? "-" : "") + "P" + x.format + E.format + p.format + C + R.format + P.format + _.format;
        return b === "P" || b === "-P" ? "P0D" : b;
      }, w.toJSON = function() {
        return this.toISOString();
      }, w.format = function(x) {
        var E = x || "YYYY-MM-DDTHH:mm:ss", N = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return E.replace(c, function(p, R) {
          return R || String(N[p]);
        });
      }, w.as = function(x) {
        return this.$ms / h[H(x)];
      }, w.get = function(x) {
        var E = this.$ms, N = H(x);
        return N === "milliseconds" ? E %= 1e3 : E = N === "weeks" ? W(E / h[N]) : this.$d[N], E || 0;
      }, w.add = function(x, E, N) {
        var p;
        return p = E ? x * h[H(E)] : g(x) ? x.$ms : k(x, this).$ms, k(this.$ms + p * (N ? -1 : 1), this);
      }, w.subtract = function(x, E) {
        return this.add(x, E, !0);
      }, w.locale = function(x) {
        var E = this.clone();
        return E.$l = x, E;
      }, w.clone = function() {
        return k(this.$ms, this);
      }, w.humanize = function(x) {
        return e().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, w.valueOf = function() {
        return this.asMilliseconds();
      }, w.milliseconds = function() {
        return this.get("milliseconds");
      }, w.asMilliseconds = function() {
        return this.as("milliseconds");
      }, w.seconds = function() {
        return this.get("seconds");
      }, w.asSeconds = function() {
        return this.as("seconds");
      }, w.minutes = function() {
        return this.get("minutes");
      }, w.asMinutes = function() {
        return this.as("minutes");
      }, w.hours = function() {
        return this.get("hours");
      }, w.asHours = function() {
        return this.as("hours");
      }, w.days = function() {
        return this.get("days");
      }, w.asDays = function() {
        return this.as("days");
      }, w.weeks = function() {
        return this.get("weeks");
      }, w.asWeeks = function() {
        return this.as("weeks");
      }, w.months = function() {
        return this.get("months");
      }, w.asMonths = function() {
        return this.as("months");
      }, w.years = function() {
        return this.get("years");
      }, w.asYears = function() {
        return this.as("years");
      }, d;
    }(), $ = function(d, w, x) {
      return d.add(w.years() * x, "y").add(w.months() * x, "M").add(w.days() * x, "d").add(w.hours() * x, "h").add(w.minutes() * x, "m").add(w.seconds() * x, "s").add(w.milliseconds() * x, "ms");
    };
    return function(d, w, x) {
      e = x, r = x().$utils(), x.duration = function(p, R) {
        var P = x.locale();
        return k(p, { $l: P }, R);
      }, x.isDuration = g;
      var E = w.prototype.add, N = w.prototype.subtract;
      w.prototype.add = function(p, R) {
        return g(p) ? $(this, p, 1) : E.bind(this)(p, R);
      }, w.prototype.subtract = function(p, R) {
        return g(p) ? $(this, p, -1) : N.bind(this)(p, R);
      };
    };
  });
})(Zr);
var Xc = Zr.exports;
const Zc = /* @__PURE__ */ we(Xc);
var Gr = { exports: {} };
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
      i.en.relativeTime = a, o.fromToBase = function(u, l, f, h, g) {
        for (var k, H, Y, W = f.$locale().relativeTime || a, F = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], D = F.length, m = 0; m < D; m += 1) {
          var $ = F[m];
          $.d && (k = h ? i(u).diff(f, $.d, !0) : f.diff(u, $.d, !0));
          var d = (e.rounding || Math.round)(Math.abs(k));
          if (Y = k > 0, d <= $.r || !$.r) {
            d <= 1 && m > 0 && ($ = F[m - 1]);
            var w = W[$.l];
            g && (d = g("" + d)), H = typeof w == "string" ? w.replace("%d", d) : w(d, l, $.l, Y);
            break;
          }
        }
        if (l) return H;
        var x = Y ? W.future : W.past;
        return typeof x == "function" ? x(H) : x.replace("%s", H);
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
})(Gr);
var Gc = Gr.exports;
const Jc = /* @__PURE__ */ we(Gc);
xe.extend(Zc);
xe.extend(Jc);
function Qc(t, n) {
  return xe.duration(n - t).humanize();
}
function In() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(n) {
    return t.reduce((e, r) => r(e), n);
  };
}
function an(t) {
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
  return nl(xt(t)) ? "black" : "white";
}
function rr(t) {
  const n = t.getFullYear(), e = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${n}${e}${r}`;
}
function zt(t, n) {
  return "translate(" + t + "," + n + ")";
}
function ol() {
  let t = jc, n = 5, e = 2, r = !1, i = !1, o, a, s = 0, c = an(0), u = an(1), l = an(2), f = an(3);
  function h(F, D) {
    const m = F.select("text"), $ = F.select("rect"), d = $.attr("width") - 2 * n, w = u(D);
    m.text(w);
    let x = m.node().getComputedTextLength();
    if (x > d) {
      const E = d < 0 ? 0 : d / x, N = Math.floor(w.length * E);
      m.text(N > 2 ? w.slice(0, N - 2) + "…" : "");
    }
  }
  function g(F, D, m) {
    const $ = F.select("text").node(), d = $.getBBox(), w = m.scale().domain().indexOf(c(D)), x = m.colorscale()(w), E = F.selectAll("rect.bckg").data([D]).join("rect").attr("class", "bckg").attr("fill", x).attr("x", d.x - n + e).attr("y", d.y - 2).attr("width", d.width + n - e).attr("height", d.height);
    F.node().insertBefore(E.node(), $);
  }
  function k(F, D) {
    F.each(function(m, $) {
      const d = Z(this.parentNode);
      f(m) - l(m) ? h(d, m) : g(d, m, D);
    });
  }
  function H(F) {
    return function(D, m) {
      Ic(this).tween("text", function() {
        return function($) {
          k(Z(this), F);
        };
      });
    };
  }
  function Y(F) {
    const D = F.datum(), m = new Set(hi(D, c)), $ = new qr(W), d = Ft(t);
    o = o || [li(D, l), ir(D, f)], i && (o = ei(o.concat(/* @__PURE__ */ new Date()))), F.each(function(w) {
      const x = a || this.getBoundingClientRect().width, E = m.size * (Kc(this) + 4 * n), N = xr().domain(m).range([0, E]), p = Ts().domain(o), R = (r ? qc : Vc)(N).width(x), P = Z(this).selectAll("svg").data([1]).join("svg");
      P.attr("class", "timeline").attr("width", x).attr("height", E + 40);
      const T = P.append("g").attr("transform", "translate(0,20)"), _ = T.append("g").attr("class", "y axis").call(R);
      _.selectAll("text").attr("text-anchor", function(v) {
        return v.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(v) {
        return v.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(v) {
        return v.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(v, A) {
        const I = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${A.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(I, "_blank");
      }), _.selectAll("g.row").each(function(v) {
        const y = Z(this).select("text").text();
        Z(this).classed(Z(this).select("text").text().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), y.startsWith(" •") && Z(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "20px").attr("fill", "black");
      });
      function M(v, A) {
        let L = v.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
        if (L) {
          let I = parseFloat(L[1]), B = parseFloat(L[2]);
          B += A, v.setAttribute("transform", `translate(${I},${B})`);
        }
      }
      function C(v, A, y) {
        const I = Z(v).attr("class");
        let B = !1;
        A.selectAll("g.row").each(function(X) {
          const ct = Z(this).attr("class");
          ct == I ? B = !0 : B && (M(this, y), b(ct.split(" ")[1], y));
        });
      }
      function b(v, A) {
        document.querySelectorAll(`g.task.${v} rect`).forEach(function(I) {
          let X = parseFloat(I.getAttribute("y")) + A;
          I.setAttribute("y", X);
        }), document.querySelectorAll(`g.task.${v} text`).forEach(function(I) {
          let X = parseFloat(I.getAttribute("y")) + A;
          I.setAttribute("y", X);
        });
      }
      function U(v, A, y) {
        const I = Z(v).attr("class"), B = [];
        let X = !1, nt = !1;
        return A.selectAll("g.row").each(function(ct) {
          const Rt = Z(this).attr("class");
          Rt == I ? X = !0 : X && Rt.split(" ")[2] == "timelineheader" ? nt = !0 : X && !nt && B.push(Rt.split(" ")[1]);
        }), console.log(`Rows under ${I}:`, B), B.forEach(function(ct) {
          document.querySelectorAll(`.${ct}`).forEach(function(Rt) {
            Rt.style.display = y;
          });
        }), B.length * 38;
      }
      _.selectAll("g.row.timelineheader text").on("click", function(v, A) {
        const y = Z(this).text();
        if (y === "+") {
          let L = U(this.parentNode, _, "block");
          C(this.parentNode, _, L), O(L), q(L), Z(this).text() === "+" ? Z(this).text("-") : Z(this).text("+");
        } else if (y === "-") {
          let L = U(this.parentNode, _, "none");
          C(this.parentNode, _, -L), O(-L), q(-L), Z(this).text() === "-" ? Z(this).text("+") : Z(this).text("-");
        }
      });
      function O(v) {
        const A = document.querySelector('path[stroke-width="1.75"]');
        if (A) {
          let L = A.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/);
          if (L) {
            let I = parseFloat(L[1]), B = parseFloat(L[2]), nt = parseFloat(L[3]) + v;
            A.setAttribute("d", `M${I},${B}V${nt}`);
          }
        } else
          console.error('Path with stroke-width="1.75" not found.');
      }
      function q(v) {
        const A = document.querySelector("g.x.axis.bottom-axis");
        if (A) {
          let L = A.getAttribute("transform").match(/translate\(([\d.-]+),([\d.-]+)\)/);
          if (L) {
            let I = parseFloat(L[1]), X = parseFloat(L[2]) + v;
            A.setAttribute("transform", `translate(${I},${X})`);
          }
        } else
          console.error("x axis bottom-axis not found.");
      }
      let z = R.range();
      p.range([z[0] + n, z[1] - n]).clamp(!0);
      const G = be(p), J = T.append("g").attr("class", "x axis").attr("transform", zt(0, 0)).call(G);
      J.selectAll(".tick text").attr("dy", "-1.5em"), J.selectAll(".tick line").attr("y2", "-5");
      const K = be(p);
      P.append("g").attr("class", "x axis bottom-axis").attr("transform", zt(0, E + 20)).call(K).selectAll(".tick line").attr("y2", "5"), _.on("offset", () => {
        z = R.range(), p.range([z[0] + n, z[1] - n]).clamp(!0), G.ticks(Math.min((z[1] - z[0]) / 70, 10)), J.call(G), tt.attr("transform", (v) => zt(p(l(v)), N(c(v)))).selectAll("rect").attr("width", (v) => p(f(v)) - p(l(v)) || e).call((v) => k(v, R)), _.call(R.draw_ticks, p.ticks().map(p));
      }), J.select(".domain").remove(), J.selectAll(".tick line").attr("stroke", "#AAA");
      const ot = p.ticks().map(p);
      _.call(R.draw_ticks, ot);
      let tt = T.selectAll("g.task").data(w);
      tt.exit().remove();
      const S = tt.enter().append("g").classed("task", !0);
      S.each(function(v) {
        const A = c(v).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        Z(this).classed(A, !0);
      }).append("rect").style("opacity", 0.7).attr("y", n).style("cursor", "pointer").attr("height", N.bandwidth() - 2 * n).on("mouseover", $.show).on("mouseout", $.hide).on("click", function(v, A) {
        var y = String(A[1]), L = y.replace(" ", "%20"), I = A[2], B = rr(I), X = A[3], nt = rr(X), ct = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + L + "%22%20%2Bdate_when%3A%5B" + B + "%20TO%20" + nt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(ct, "_blank");
      }).style("fill", In(u, d)), S.append("text").attr("text-anchor", "start").attr("fill", (v) => f(v) - l(v) ? In(u, d, el)(v) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", N.bandwidth() / 2).attr("dy", "0.32em").text(u), tt = tt.merge(S), tt.attr("transform", (v) => zt(z[0], N(c(v)))).selectAll("rect").attr("width", 0), tt.transition().duration(s).attr("transform", (v) => zt(p(l(v)), N(c(v)))).selectAll("rect").attr("width", (v) => p(f(v)) - p(l(v)) || e).on("start", H(R)), i && T.append("path").attr("stroke", "red").attr("d", "M" + p(/* @__PURE__ */ new Date()) + ",0.5V" + E);
    });
  }
  return Y.dates = function(F) {
    return arguments.length ? (o = F, Y) : o;
  }, Y.width = function(F) {
    return arguments.length ? (a = F, Y) : a;
  }, Y.today = function(F) {
    return arguments.length ? (i = F, Y) : i;
  }, Y.colors = function(F) {
    return arguments.length ? (t = F, Y) : t;
  }, Y.padding = function(F) {
    return arguments.length ? (n = F, Y) : n;
  }, Y.milestone_width = function(F) {
    return arguments.length ? (e = F, Y) : e;
  }, Y.reversed = function(F) {
    return arguments.length ? (r = F, Y) : r;
  }, Y.duration = function(F) {
    return arguments.length ? (s = F, Y) : s;
  }, Y;
  function W(F, D) {
    const m = In(Ms, de("%Y-%m-%d")), $ = `<b>${u(D)}</b><hr style="margin: 2px 0 2px 0">${m(l(D))}`, d = f(D) - l(D) ? ` - ${m(f(D))}<br>${Qc(l(D), f(D))}` : "";
    return $ + d;
  }
}
export {
  Ic as active,
  be as axisBottom,
  il as axisLeft,
  rl as axisRight,
  xt as color,
  _a as drag,
  Qc as durationFormat,
  ei as extent,
  Ms as isoParse,
  hi as map,
  ir as max,
  li as min,
  xr as scaleBand,
  eu as scaleLinear,
  Ft as scaleOrdinal,
  Ts as scaleTime,
  Z as select,
  de as timeFormat,
  ol as timeline,
  Vc as timelineAxisLeft,
  qc as timelineAxisRight,
  qr as tooltip
};
