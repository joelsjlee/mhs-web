function on(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Gr(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Qn(t) {
  let n, e, r;
  t.length !== 2 ? (n = on, e = (s, c) => on(t(s), c), r = (s, c) => t(s) - c) : (n = t === on || t === Gr ? t : Jr, e = t, r = t);
  function i(s, c, u = 0, f = s.length) {
    if (u < f) {
      if (n(c, c) !== 0) return f;
      do {
        const l = u + f >>> 1;
        e(s[l], c) < 0 ? u = l + 1 : f = l;
      } while (u < f);
    }
    return u;
  }
  function o(s, c, u = 0, f = s.length) {
    if (u < f) {
      if (n(c, c) !== 0) return f;
      do {
        const l = u + f >>> 1;
        e(s[l], c) <= 0 ? u = l + 1 : f = l;
      } while (u < f);
    }
    return u;
  }
  function a(s, c, u = 0, f = s.length) {
    const l = i(s, c, u, f - 1);
    return l > u && r(s[l - 1], c) > -r(s[l], c) ? l - 1 : l;
  }
  return { left: i, center: a, right: o };
}
function Jr() {
  return 0;
}
function Qr(t) {
  return t === null ? NaN : +t;
}
const jr = Qn(on), Kr = jr.right;
Qn(Qr).center;
function ti(t, n) {
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
class xe extends Map {
  constructor(n, e = ri) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(ve(this, n));
  }
  has(n) {
    return super.has(ve(this, n));
  }
  set(n, e) {
    return super.set(ni(this, n), e);
  }
  delete(n) {
    return super.delete(ei(this, n));
  }
}
function ve({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function ni({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ei({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ri(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const ii = Math.sqrt(50), oi = Math.sqrt(10), ai = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= ii ? 10 : o >= oi ? 5 : o >= ai ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(n * u), s / u < t && ++s, c / u > n && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(n / u), s * u < t && ++s, c * u > n && --c), c < s && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [s, c, u];
}
function ui(t, n, e) {
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
function rr(t, n) {
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
function si(t, n) {
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
function ci(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function fi(t, n) {
  if (typeof t[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  if (typeof n != "function") throw new TypeError("mapper is not a function");
  return Array.from(t, (e, r) => n(e, r, t));
}
function li(t) {
  return t;
}
var Cn = 1, an = 2, Rn = 3, Wt = 4, _e = 1e-6;
function hi(t) {
  return "translate(" + t + ",0)";
}
function di(t) {
  return "translate(0," + t + ")";
}
function gi(t) {
  return (n) => +t(n);
}
function mi(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function pi() {
  return !this.__axis;
}
function jn(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === Cn || t === Wt ? -1 : 1, f = t === Wt || t === an ? "x" : "y", l = t === Cn || t === Rn ? hi : di;
  function h(g) {
    var T = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), E = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : li), U = Math.max(o, 0) + s, P = n.range(), A = +P[0] + c, C = +P[P.length - 1] + c, m = (n.bandwidth ? mi : gi)(n.copy(), c), b = g.selection ? g.selection() : g, d = b.selectAll(".domain").data([null]), y = b.selectAll(".tick").data(T, n).order(), w = y.exit(), F = y.enter().append("g").attr("class", "tick"), D = y.select("line"), p = y.select("text");
    d = d.merge(d.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), y = y.merge(F), D = D.merge(F.append("line").attr("stroke", "currentColor").attr(f + "2", u * o)), p = p.merge(F.append("text").attr("fill", "currentColor").attr(f, u * U).attr("dy", t === Cn ? "0em" : t === Rn ? "0.71em" : "0.32em")), g !== b && (d = d.transition(g), y = y.transition(g), D = D.transition(g), p = p.transition(g), w = w.transition(g).attr("opacity", _e).attr("transform", function(H) {
      return isFinite(H = m(H)) ? l(H + c) : this.getAttribute("transform");
    }), F.attr("opacity", _e).attr("transform", function(H) {
      var L = this.parentNode.__axis;
      return l((L && isFinite(L = L(H)) ? L : m(H)) + c);
    })), w.remove(), d.attr("d", t === Wt || t === an ? a ? "M" + u * a + "," + A + "H" + c + "V" + C + "H" + u * a : "M" + c + "," + A + "V" + C : a ? "M" + A + "," + u * a + "V" + c + "H" + C + "V" + u * a : "M" + A + "," + c + "H" + C), y.attr("opacity", 1).attr("transform", function(H) {
      return l(m(H) + c);
    }), D.attr(f + "2", u * o), p.attr(f, u * U).text(E), b.filter(pi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === an ? "start" : t === Wt ? "end" : "middle"), b.each(function() {
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
function nf(t) {
  return jn(an, t);
}
function Me(t) {
  return jn(Rn, t);
}
function ef(t) {
  return jn(Wt, t);
}
function Kn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ir(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gt() {
}
var qt = 0.7, ln = 1 / qt, Dt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", yi = /^#([0-9a-f]{3,8})$/, wi = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), xi = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), vi = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${Bt}\\)$`), _i = new RegExp(`^rgba\\(${ct},${ct},${ct},${Bt}\\)$`), Mi = new RegExp(`^hsl\\(${Bt},${ct},${ct}\\)$`), bi = new RegExp(`^hsla\\(${Bt},${ct},${ct},${Bt}\\)$`), be = {
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
  hex: $e,
  // Deprecated! Use color.formatHex.
  formatHex: $e,
  formatHex8: $i,
  formatHsl: Ti,
  formatRgb: Te,
  toString: Te
});
function $e() {
  return this.rgb().formatHex();
}
function $i() {
  return this.rgb().formatHex8();
}
function Ti() {
  return or(this).formatHsl();
}
function Te() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = yi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Se(n) : e === 3 ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = wi.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = xi.exec(t)) ? new j(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = vi.exec(t)) ? jt(n[1], n[2], n[3], n[4]) : (n = _i.exec(t)) ? jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Mi.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, 1) : (n = bi.exec(t)) ? De(n[1], n[2] / 100, n[3] / 100, n[4]) : be.hasOwnProperty(t) ? Se(be[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function Se(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new j(t, n, e, r);
}
function Si(t) {
  return t instanceof Gt || (t = yt(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function Pn(t, n, e, r) {
  return arguments.length === 1 ? Si(t) : new j(t, n, e, r ?? 1);
}
function j(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Kn(j, Pn, ir(Gt, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(vt(this.r), vt(this.g), vt(this.b), hn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ke,
  // Deprecated! Use color.formatHex.
  formatHex: ke,
  formatHex8: ki,
  formatRgb: Ce,
  toString: Ce
}));
function ke() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}`;
}
function ki() {
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
function or(t) {
  if (t instanceof ut) return new ut(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gt || (t = yt(t)), !t) return new ut();
  if (t instanceof ut) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new ut(a, s, c, t.opacity);
}
function Ci(t, n, e, r) {
  return arguments.length === 1 ? or(t) : new ut(t, n, e, r ?? 1);
}
function ut(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Kn(ut, Ci, ir(Gt, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new ut(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new j(
      Dn(t >= 240 ? t - 240 : t + 120, i, r),
      Dn(t, i, r),
      Dn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ut(Ae(this.h), Kt(this.s), Kt(this.l), hn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = hn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ae(this.h)}, ${Kt(this.s) * 100}%, ${Kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ae(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Dn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var Di = { value: () => {
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
function Ai(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
un.prototype = te.prototype = {
  constructor: un,
  on: function(t, n) {
    var e = this._, r = Ai(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ni(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ne(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ne(e[i], t.name, null);
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
function Ni(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ne(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Di, t = t.slice(0, r).concat(t.slice(r + 1));
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
function Ui(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Wn && n.documentElement.namespaceURI === Wn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Fi(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ar(t) {
  var n = bn(t);
  return (n.local ? Fi : Ui)(n);
}
function Yi() {
}
function ne(t) {
  return t == null ? Yi : function() {
    return this.querySelector(t);
  };
}
function Ei(t) {
  typeof t != "function" && (t = ne(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), c, u, f = 0; f < a; ++f)
      (c = o[f]) && (u = t.call(c, c.__data__, f, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[f] = u);
  return new et(r, this._parents);
}
function Hi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Oi() {
  return [];
}
function ur(t) {
  return t == null ? Oi : function() {
    return this.querySelectorAll(t);
  };
}
function Ii(t) {
  return function() {
    return Hi(t.apply(this, arguments));
  };
}
function Li(t) {
  typeof t == "function" ? t = Ii(t) : t = ur(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new et(r, i);
}
function sr(t) {
  return function() {
    return this.matches(t);
  };
}
function cr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Ri = Array.prototype.find;
function Pi(t) {
  return function() {
    return Ri.call(this.children, t);
  };
}
function Wi() {
  return this.firstElementChild;
}
function zi(t) {
  return this.select(t == null ? Wi : Pi(typeof t == "function" ? t : cr(t)));
}
var Vi = Array.prototype.filter;
function qi() {
  return Array.from(this.children);
}
function Bi(t) {
  return function() {
    return Vi.call(this.children, t);
  };
}
function Xi(t) {
  return this.selectAll(t == null ? qi : Bi(typeof t == "function" ? t : cr(t)));
}
function Zi(t) {
  typeof t != "function" && (t = sr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new et(r, this._parents);
}
function fr(t) {
  return new Array(t.length);
}
function Gi() {
  return new et(this._enter || this._groups.map(fr), this._parents);
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
function Ji(t) {
  return function() {
    return t;
  };
}
function Qi(t, n, e, r, i, o) {
  for (var a = 0, s, c = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new dn(t, o[a]);
  for (; a < c; ++a)
    (s = n[a]) && (i[a] = s);
}
function ji(t, n, e, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), f = n.length, l = o.length, h = new Array(f), g;
  for (s = 0; s < f; ++s)
    (c = n[s]) && (h[s] = g = a.call(c, c.__data__, s, n) + "", u.has(g) ? i[s] = c : u.set(g, c));
  for (s = 0; s < l; ++s)
    g = a.call(t, o[s], s, o) + "", (c = u.get(g)) ? (r[s] = c, c.__data__ = o[s], u.delete(g)) : e[s] = new dn(t, o[s]);
  for (s = 0; s < f; ++s)
    (c = n[s]) && u.get(h[s]) === c && (i[s] = c);
}
function Ki(t) {
  return t.__data__;
}
function to(t, n) {
  if (!arguments.length) return Array.from(this, Ki);
  var e = n ? ji : Qi, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ji(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], l = i[u], h = l.length, g = no(t.call(f, f && f.__data__, u, r)), T = g.length, E = s[u] = new Array(T), U = a[u] = new Array(T), P = c[u] = new Array(h);
    e(f, l, E, U, P, g, n);
    for (var A = 0, C = 0, m, b; A < T; ++A)
      if (m = E[A]) {
        for (A >= C && (C = A + 1); !(b = U[C]) && ++C < T; ) ;
        m._next = b || null;
      }
  }
  return a = new et(a, r), a._enter = s, a._exit = c, a;
}
function no(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function eo() {
  return new et(this._exit || this._groups.map(fr), this._parents);
}
function ro(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function io(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = e[c], f = r[c], l = u.length, h = s[c] = new Array(l), g, T = 0; T < l; ++T)
      (g = u[T] || f[T]) && (h[T] = g);
  for (; c < i; ++c)
    s[c] = e[c];
  return new et(s, this._parents);
}
function oo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ao(t) {
  t || (t = uo);
  function n(l, h) {
    return l && h ? t(l.__data__, h.__data__) : !l - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), u, f = 0; f < s; ++f)
      (u = a[f]) && (c[f] = u);
    c.sort(n);
  }
  return new et(i, this._parents).order();
}
function uo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function so() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function co() {
  return Array.from(this);
}
function fo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function lo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function ho() {
  return !this.node();
}
function go(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function mo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function po(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function yo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function wo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function xo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function vo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function _o(t, n) {
  var e = bn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? po : mo : typeof n == "function" ? e.local ? vo : xo : e.local ? wo : yo)(e, n));
}
function lr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Mo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function bo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function $o(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function To(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Mo : typeof n == "function" ? $o : bo)(t, n, e ?? "")) : Ut(this.node(), t);
}
function Ut(t, n) {
  return t.style.getPropertyValue(n) || lr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function So(t) {
  return function() {
    delete this[t];
  };
}
function ko(t, n) {
  return function() {
    this[t] = n;
  };
}
function Co(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Do(t, n) {
  return arguments.length > 1 ? this.each((n == null ? So : typeof n == "function" ? Co : ko)(t, n)) : this.node()[t];
}
function hr(t) {
  return t.trim().split(/^|\s+/);
}
function ee(t) {
  return t.classList || new dr(t);
}
function dr(t) {
  this._node = t, this._names = hr(t.getAttribute("class") || "");
}
dr.prototype = {
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
function gr(t, n) {
  for (var e = ee(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function mr(t, n) {
  for (var e = ee(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ao(t) {
  return function() {
    gr(this, t);
  };
}
function No(t) {
  return function() {
    mr(this, t);
  };
}
function Uo(t, n) {
  return function() {
    (n.apply(this, arguments) ? gr : mr)(this, t);
  };
}
function Fo(t, n) {
  var e = hr(t + "");
  if (arguments.length < 2) {
    for (var r = ee(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Uo : n ? Ao : No)(e, n));
}
function Yo() {
  this.textContent = "";
}
function Eo(t) {
  return function() {
    this.textContent = t;
  };
}
function Ho(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Oo(t) {
  return arguments.length ? this.each(t == null ? Yo : (typeof t == "function" ? Ho : Eo)(t)) : this.node().textContent;
}
function Io() {
  this.innerHTML = "";
}
function Lo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ro(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Po(t) {
  return arguments.length ? this.each(t == null ? Io : (typeof t == "function" ? Ro : Lo)(t)) : this.node().innerHTML;
}
function Wo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zo() {
  return this.each(Wo);
}
function Vo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function qo() {
  return this.each(Vo);
}
function Bo(t) {
  var n = typeof t == "function" ? t : ar(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Xo() {
  return null;
}
function Zo(t, n) {
  var e = typeof t == "function" ? t : ar(t), r = n == null ? Xo : typeof n == "function" ? n : ne(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Go() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Jo() {
  return this.each(Go);
}
function Qo() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function jo() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ko(t) {
  return this.select(t ? jo : Qo);
}
function ta(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function na(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ea(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ra(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ia(t, n, e) {
  return function() {
    var r = this.__on, i, o = na(n);
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
function oa(t, n, e) {
  var r = ea(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, f; c < u; ++c)
        for (i = 0, f = s[c]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? ia : ra, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function pr(t, n, e) {
  var r = lr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function aa(t, n) {
  return function() {
    return pr(this, t, n);
  };
}
function ua(t, n) {
  return function() {
    return pr(this, t, n.apply(this, arguments));
  };
}
function sa(t, n) {
  return this.each((typeof n == "function" ? ua : aa)(t, n));
}
function* ca() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var yr = [null];
function et(t, n) {
  this._groups = t, this._parents = n;
}
function Jt() {
  return new et([[document.documentElement]], yr);
}
function fa() {
  return this;
}
et.prototype = Jt.prototype = {
  constructor: et,
  select: Ei,
  selectAll: Li,
  selectChild: zi,
  selectChildren: Xi,
  filter: Zi,
  data: to,
  enter: Gi,
  exit: eo,
  join: ro,
  merge: io,
  selection: fa,
  order: oo,
  sort: ao,
  call: so,
  nodes: co,
  node: fo,
  size: lo,
  empty: ho,
  each: go,
  attr: _o,
  style: To,
  property: Do,
  classed: Fo,
  text: Oo,
  html: Po,
  raise: zo,
  lower: qo,
  append: Bo,
  insert: Zo,
  remove: Jo,
  clone: Ko,
  datum: ta,
  on: oa,
  dispatch: sa,
  [Symbol.iterator]: ca
};
function nt(t) {
  return typeof t == "string" ? new et([[document.querySelector(t)]], [document.documentElement]) : new et([[t]], yr);
}
function la(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Fe(t, n) {
  if (t = la(t), n === void 0 && (n = t.currentTarget), n) {
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
const ha = { passive: !1 }, Xt = { capture: !0, passive: !1 };
function An(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function da(t) {
  var n = t.document.documentElement, e = nt(t).on("dragstart.drag", At, Xt);
  "onselectstart" in n ? e.on("selectstart.drag", At, Xt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function ga(t, n) {
  var e = t.document.documentElement, r = nt(t).on("dragstart.drag", null);
  n && (r.on("click.drag", At, Xt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const tn = (t) => () => t;
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
  dispatch: f
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
    _: { value: f }
  });
}
zn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ma(t) {
  return !t.ctrlKey && !t.button;
}
function pa() {
  return this.parentNode;
}
function ya(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function wa() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function xa() {
  var t = ma, n = pa, e = ya, r = wa, i = {}, o = te("start", "drag", "end"), a = 0, s, c, u, f, l = 0;
  function h(m) {
    m.on("mousedown.drag", g).filter(r).on("touchstart.drag", U).on("touchmove.drag", P, ha).on("touchend.drag touchcancel.drag", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(m, b) {
    if (!(f || !t.call(this, m, b))) {
      var d = C(this, n.call(this, m, b), m, b, "mouse");
      d && (nt(m.view).on("mousemove.drag", T, Xt).on("mouseup.drag", E, Xt), da(m.view), An(m), u = !1, s = m.clientX, c = m.clientY, d("start", m));
    }
  }
  function T(m) {
    if (At(m), !u) {
      var b = m.clientX - s, d = m.clientY - c;
      u = b * b + d * d > l;
    }
    i.mouse("drag", m);
  }
  function E(m) {
    nt(m.view).on("mousemove.drag mouseup.drag", null), ga(m.view, u), At(m), i.mouse("end", m);
  }
  function U(m, b) {
    if (t.call(this, m, b)) {
      var d = m.changedTouches, y = n.call(this, m, b), w = d.length, F, D;
      for (F = 0; F < w; ++F)
        (D = C(this, y, m, b, d[F].identifier, d[F])) && (An(m), D("start", m, d[F]));
    }
  }
  function P(m) {
    var b = m.changedTouches, d = b.length, y, w;
    for (y = 0; y < d; ++y)
      (w = i[b[y].identifier]) && (At(m), w("drag", m, b[y]));
  }
  function A(m) {
    var b = m.changedTouches, d = b.length, y, w;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), y = 0; y < d; ++y)
      (w = i[b[y].identifier]) && (An(m), w("end", m, b[y]));
  }
  function C(m, b, d, y, w, F) {
    var D = o.copy(), p = Fe(F || d, b), H, L, $;
    if (($ = e.call(m, new zn("beforestart", {
      sourceEvent: d,
      target: h,
      identifier: w,
      active: a,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), y)) != null)
      return H = $.x - p[0] || 0, L = $.y - p[1] || 0, function M(v, k, _) {
        var N = p, O;
        switch (v) {
          case "start":
            i[w] = M, O = a++;
            break;
          case "end":
            delete i[w], --a;
          case "drag":
            p = Fe(_ || k, b), O = a;
            break;
        }
        D.call(
          v,
          m,
          new zn(v, {
            sourceEvent: k,
            subject: $,
            target: h,
            identifier: w,
            active: O,
            x: p[0] + H,
            y: p[1] + L,
            dx: p[0] - N[0],
            dy: p[1] - N[1],
            dispatch: D
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
    return arguments.length ? (l = (m = +m) * m, h) : Math.sqrt(l);
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
const Ye = Symbol("implicit");
function Nt() {
  var t = new xe(), n = [], e = [], r = Ye;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== Ye) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new xe();
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
function wr() {
  var t = Nt().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, c = 0, u = 0, f = 0.5;
  delete t.unknown;
  function l() {
    var h = n().length, g = i < r, T = g ? i : r, E = g ? r : i;
    o = (E - T) / Math.max(1, h - c + u * 2), s && (o = Math.floor(o)), T += (E - T - o * (h - c)) * f, a = o * (1 - c), s && (T = Math.round(T), a = Math.round(a));
    var U = ci(h).map(function(P) {
      return T + o * P;
    });
    return e(g ? U.reverse() : U);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), l()) : n();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, l()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, s = !0, l();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(h) {
    return arguments.length ? (s = !!h, l()) : s;
  }, t.padding = function(h) {
    return arguments.length ? (c = Math.min(1, u = +h), l()) : c;
  }, t.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), l()) : c;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (u = +h, l()) : u;
  }, t.align = function(h) {
    return arguments.length ? (f = Math.max(0, Math.min(1, h)), l()) : f;
  }, t.copy = function() {
    return wr(n(), [r, i]).round(s).paddingInner(c).paddingOuter(u).align(f);
  }, $n.apply(l(), arguments);
}
const re = (t) => () => t;
function va(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function _a(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Ma(t) {
  return (t = +t) == 1 ? xr : function(n, e) {
    return e - n ? _a(n, e, t) : re(isNaN(n) ? e : n);
  };
}
function xr(t, n) {
  var e = n - t;
  return e ? va(t, e) : re(isNaN(t) ? n : t);
}
const gn = function t(n) {
  var e = Ma(n);
  function r(i, o) {
    var a = e((i = Pn(i)).r, (o = Pn(o)).r), s = e(i.g, o.g), c = e(i.b, o.b), u = xr(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = c(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ba(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function $a(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ta(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ie(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Sa(t, n) {
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
function ka(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ie(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nn = new RegExp(Vn.source, "g");
function Ca(t) {
  return function() {
    return t;
  };
}
function Da(t) {
  return function(n) {
    return t(n) + "";
  };
}
function vr(t, n) {
  var e = Vn.lastIndex = Nn.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = Vn.exec(t)) && (i = Nn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: at(r, i) })), e = Nn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? Da(c[0].x) : Ca(n) : (n = c.length, function(u) {
    for (var f = 0, l; f < n; ++f) s[(l = c[f]).i] = l.x(u);
    return s.join("");
  });
}
function ie(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? re(n) : (e === "number" ? at : e === "string" ? (r = yt(n)) ? (n = r, gn) : vr : n instanceof yt ? gn : n instanceof Date ? Sa : $a(n) ? ba : Array.isArray(n) ? Ta : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ka : at)(t, n);
}
function Aa(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ee = 180 / Math.PI, qn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function _r(t, n, e, r, i, o) {
  var a, s, c;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ee,
    skewX: Math.atan(c) * Ee,
    scaleX: a,
    scaleY: s
  };
}
var nn;
function Na(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? qn : _r(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ua(t) {
  return t == null || (nn || (nn = document.createElementNS("http://www.w3.org/2000/svg", "g")), nn.setAttribute("transform", t), !(t = nn.transform.baseVal.consolidate())) ? qn : (t = t.matrix, _r(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Mr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, l, h, g, T) {
    if (u !== l || f !== h) {
      var E = g.push("translate(", null, n, null, e);
      T.push({ i: E - 4, x: at(u, l) }, { i: E - 2, x: at(f, h) });
    } else (l || h) && g.push("translate(" + l + n + h + e);
  }
  function a(u, f, l, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: l.push(i(l) + "rotate(", null, r) - 2, x: at(u, f) })) : f && l.push(i(l) + "rotate(" + f + r);
  }
  function s(u, f, l, h) {
    u !== f ? h.push({ i: l.push(i(l) + "skewX(", null, r) - 2, x: at(u, f) }) : f && l.push(i(l) + "skewX(" + f + r);
  }
  function c(u, f, l, h, g, T) {
    if (u !== l || f !== h) {
      var E = g.push(i(g) + "scale(", null, ",", null, ")");
      T.push({ i: E - 4, x: at(u, l) }, { i: E - 2, x: at(f, h) });
    } else (l !== 1 || h !== 1) && g.push(i(g) + "scale(" + l + "," + h + ")");
  }
  return function(u, f) {
    var l = [], h = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, l, h), a(u.rotate, f.rotate, l, h), s(u.skewX, f.skewX, l, h), c(u.scaleX, u.scaleY, f.scaleX, f.scaleY, l, h), u = f = null, function(g) {
      for (var T = -1, E = h.length, U; ++T < E; ) l[(U = h[T]).i] = U.x(g);
      return l.join("");
    };
  };
}
var Fa = Mr(Na, "px, ", "px)", "deg)"), Ya = Mr(Ua, ", ", ")", ")");
function Ea(t) {
  return function() {
    return t;
  };
}
function Ha(t) {
  return +t;
}
var He = [0, 1];
function kt(t) {
  return t;
}
function Bn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ea(isNaN(n) ? NaN : 0.5);
}
function Oa(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ia(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Bn(i, r), o = e(a, o)) : (r = Bn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function La(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Bn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var c = Kr(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function br(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ra() {
  var t = He, n = He, e = ie, r, i, o, a = kt, s, c, u;
  function f() {
    var h = Math.min(t.length, n.length);
    return a !== kt && (a = Oa(t[0], t[h - 1])), s = h > 2 ? La : Ia, c = u = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = s(t.map(r), n, e)))(r(a(h)));
  }
  return l.invert = function(h) {
    return a(i((u || (u = s(n, t.map(r), at)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Ha), f()) : t.slice();
  }, l.range = function(h) {
    return arguments.length ? (n = Array.from(h), f()) : n.slice();
  }, l.rangeRound = function(h) {
    return n = Array.from(h), e = Aa, f();
  }, l.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : kt, f()) : a !== kt;
  }, l.interpolate = function(h) {
    return arguments.length ? (e = h, f()) : e;
  }, l.unknown = function(h) {
    return arguments.length ? (o = h, l) : o;
  }, function(h, g) {
    return r = h, i = g, f();
  };
}
function $r() {
  return Ra()(kt, kt);
}
function Pa(t) {
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
function Ft(t) {
  return t = mn(Math.abs(t)), t ? t[1] : NaN;
}
function Wa(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function za(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Va = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pn(t) {
  if (!(n = Va.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new oe({
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
pn.prototype = oe.prototype;
function oe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
oe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function qa(t) {
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
var Tr;
function Ba(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Tr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + mn(t, Math.max(0, n + o - 1))[0];
}
function Oe(t, n) {
  var e = mn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ie = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Pa,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Oe(t * 100, n),
  r: Oe,
  s: Ba,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Le(t) {
  return t;
}
var Re = Array.prototype.map, Pe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Xa(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Le : Wa(Re.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Le : za(Re.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(l) {
    l = pn(l);
    var h = l.fill, g = l.align, T = l.sign, E = l.symbol, U = l.zero, P = l.width, A = l.comma, C = l.precision, m = l.trim, b = l.type;
    b === "n" ? (A = !0, b = "g") : Ie[b] || (C === void 0 && (C = 12), m = !0, b = "g"), (U || h === "0" && g === "=") && (U = !0, h = "0", g = "=");
    var d = E === "$" ? e : E === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", y = E === "$" ? r : /[%p]/.test(b) ? a : "", w = Ie[b], F = /[defgprs%]/.test(b);
    C = C === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function D(p) {
      var H = d, L = y, $, M, v;
      if (b === "c")
        L = w(p) + L, p = "";
      else {
        p = +p;
        var k = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? c : w(Math.abs(p), C), m && (p = qa(p)), k && +p == 0 && T !== "+" && (k = !1), H = (k ? T === "(" ? T : s : T === "-" || T === "(" ? "" : T) + H, L = (b === "s" ? Pe[8 + Tr / 3] : "") + L + (k && T === "(" ? ")" : ""), F) {
          for ($ = -1, M = p.length; ++$ < M; )
            if (v = p.charCodeAt($), 48 > v || v > 57) {
              L = (v === 46 ? i + p.slice($ + 1) : p.slice($)) + L, p = p.slice(0, $);
              break;
            }
        }
      }
      A && !U && (p = n(p, 1 / 0));
      var _ = H.length + p.length + L.length, N = _ < P ? new Array(P - _ + 1).join(h) : "";
      switch (A && U && (p = n(N + p, N.length ? P - L.length : 1 / 0), N = ""), g) {
        case "<":
          p = H + p + L + N;
          break;
        case "=":
          p = H + N + p + L;
          break;
        case "^":
          p = N.slice(0, _ = N.length >> 1) + H + p + L + N.slice(_);
          break;
        default:
          p = N + H + p + L;
          break;
      }
      return o(p);
    }
    return D.toString = function() {
      return l + "";
    }, D;
  }
  function f(l, h) {
    var g = u((l = pn(l), l.type = "f", l)), T = Math.max(-8, Math.min(8, Math.floor(Ft(h) / 3))) * 3, E = Math.pow(10, -T), U = Pe[8 + T / 3];
    return function(P) {
      return g(E * P) + U;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var en, Sr, kr;
Za({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Za(t) {
  return en = Xa(t), Sr = en.format, kr = en.formatPrefix, en;
}
function Ga(t) {
  return Math.max(0, -Ft(Math.abs(t)));
}
function Ja(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ft(n) / 3))) * 3 - Ft(Math.abs(t)));
}
function Qa(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ft(n) - Ft(t)) + 1;
}
function ja(t, n, e, r) {
  var i = Ln(t, n, e), o;
  switch (r = pn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Ja(i, a)) && (r.precision = o), kr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Qa(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ga(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Sr(r);
}
function Ka(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ui(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ja(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, f = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); f-- > 0; ) {
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
function tu() {
  var t = $r();
  return t.copy = function() {
    return br(t, tu());
  }, $n.apply(t, arguments), Ka(t);
}
function nu(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const Un = /* @__PURE__ */ new Date(), Fn = /* @__PURE__ */ new Date();
function G(t, n, e, r) {
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
  }, i.filter = (o) => G((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; n(a, -1), !o(a); )
          ;
      else for (; --s >= 0; )
        for (; n(a, 1), !o(a); )
          ;
  }), e && (i.count = (o, a) => (Un.setTime(+o), Fn.setTime(+a), t(Un), t(Fn), Math.floor(e(Un, Fn))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const yn = G(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
yn.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? G((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : yn);
yn.range;
const dt = 1e3, it = dt * 60, gt = it * 60, mt = gt * 24, ae = mt * 7, We = mt * 30, Yn = mt * 365, Ct = G((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * dt);
}, (t, n) => (n - t) / dt, (t) => t.getUTCSeconds());
Ct.range;
const ue = G((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt);
}, (t, n) => {
  t.setTime(+t + n * it);
}, (t, n) => (n - t) / it, (t) => t.getMinutes());
ue.range;
const eu = G((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * it);
}, (t, n) => (n - t) / it, (t) => t.getUTCMinutes());
eu.range;
const se = G((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt - t.getMinutes() * it);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getHours());
se.range;
const ru = G((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getUTCHours());
ru.range;
const Qt = G(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * it) / mt,
  (t) => t.getDate() - 1
);
Qt.range;
const ce = G((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => t.getUTCDate() - 1);
ce.range;
const iu = G((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => Math.floor(t / mt));
iu.range;
function bt(t) {
  return G((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * it) / ae);
}
const Tn = bt(0), wn = bt(1), ou = bt(2), au = bt(3), Yt = bt(4), uu = bt(5), su = bt(6);
Tn.range;
wn.range;
ou.range;
au.range;
Yt.range;
uu.range;
su.range;
function $t(t) {
  return G((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / ae);
}
const Cr = $t(0), xn = $t(1), cu = $t(2), fu = $t(3), Et = $t(4), lu = $t(5), hu = $t(6);
Cr.range;
xn.range;
cu.range;
fu.range;
Et.range;
lu.range;
hu.range;
const fe = G((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
fe.range;
const du = G((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
du.range;
const pt = G((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n);
}, (t, n) => n.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
pt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : G((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setFullYear(n.getFullYear() + e * t);
});
pt.range;
const _t = G((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
_t.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : G((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCFullYear(n.getUTCFullYear() + e * t);
});
_t.range;
function gu(t, n, e, r, i, o) {
  const a = [
    [Ct, 1, dt],
    [Ct, 5, 5 * dt],
    [Ct, 15, 15 * dt],
    [Ct, 30, 30 * dt],
    [o, 1, it],
    [o, 5, 5 * it],
    [o, 15, 15 * it],
    [o, 30, 30 * it],
    [i, 1, gt],
    [i, 3, 3 * gt],
    [i, 6, 6 * gt],
    [i, 12, 12 * gt],
    [r, 1, mt],
    [r, 2, 2 * mt],
    [e, 1, ae],
    [n, 1, We],
    [n, 3, 3 * We],
    [t, 1, Yn]
  ];
  function s(u, f, l) {
    const h = f < u;
    h && ([u, f] = [f, u]);
    const g = l && typeof l.range == "function" ? l : c(u, f, l), T = g ? g.range(u, +f + 1) : [];
    return h ? T.reverse() : T;
  }
  function c(u, f, l) {
    const h = Math.abs(f - u) / l, g = Qn(([, , U]) => U).right(a, h);
    if (g === a.length) return t.every(Ln(u / Yn, f / Yn, l));
    if (g === 0) return yn.every(Math.max(Ln(u, f, l), 1));
    const [T, E] = a[h / a[g - 1][2] < a[g][2] / h ? g - 1 : g];
    return T.every(E);
  }
  return [s, c];
}
const [mu, pu] = gu(pt, fe, Tn, Qt, se, ue);
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
function yu(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, c = t.shortMonths, u = It(i), f = Lt(i), l = It(o), h = Lt(o), g = It(a), T = Lt(a), E = It(s), U = Lt(s), P = It(c), A = Lt(c), C = {
    a: k,
    A: _,
    b: N,
    B: O,
    c: null,
    d: Ze,
    e: Ze,
    f: Ru,
    g: Ju,
    G: ju,
    H: Ou,
    I: Iu,
    j: Lu,
    L: Dr,
    m: Pu,
    M: Wu,
    p: V,
    q: z,
    Q: Qe,
    s: je,
    S: zu,
    u: Vu,
    U: qu,
    V: Bu,
    w: Xu,
    W: Zu,
    x: null,
    X: null,
    y: Gu,
    Y: Qu,
    Z: Ku,
    "%": Je
  }, m = {
    a: B,
    A: I,
    b: X,
    B: Q,
    c: null,
    d: Ge,
    e: Ge,
    f: rs,
    g: ds,
    G: ms,
    H: ts,
    I: ns,
    j: es,
    L: Nr,
    m: is,
    M: os,
    p: rt,
    q: ot,
    Q: Qe,
    s: je,
    S: as,
    u: us,
    U: ss,
    V: cs,
    w: fs,
    W: ls,
    x: null,
    X: null,
    y: hs,
    Y: gs,
    Z: ps,
    "%": Je
  }, b = {
    a: D,
    A: p,
    b: H,
    B: L,
    c: $,
    d: Be,
    e: Be,
    f: Fu,
    g: qe,
    G: Ve,
    H: Xe,
    I: Xe,
    j: Du,
    L: Uu,
    m: Cu,
    M: Au,
    p: F,
    q: ku,
    Q: Eu,
    s: Hu,
    S: Nu,
    u: Mu,
    U: bu,
    V: $u,
    w: _u,
    W: Tu,
    x: M,
    X: v,
    y: qe,
    Y: Ve,
    Z: Su,
    "%": Yu
  };
  C.x = d(e, C), C.X = d(r, C), C.c = d(n, C), m.x = d(e, m), m.X = d(r, m), m.c = d(n, m);
  function d(S, Y) {
    return function(R) {
      var x = [], Z = -1, q = 0, K = S.length, tt, wt, we;
      for (R instanceof Date || (R = /* @__PURE__ */ new Date(+R)); ++Z < K; )
        S.charCodeAt(Z) === 37 && (x.push(S.slice(q, Z)), (wt = ze[tt = S.charAt(++Z)]) != null ? tt = S.charAt(++Z) : wt = tt === "e" ? " " : "0", (we = Y[tt]) && (tt = we(R, wt)), x.push(tt), q = Z + 1);
      return x.push(S.slice(q, Z)), x.join("");
    };
  }
  function y(S, Y) {
    return function(R) {
      var x = Ot(1900, void 0, 1), Z = w(x, S, R += "", 0), q, K;
      if (Z != R.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (Y && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (q = Hn(Ot(x.y, 0, 1)), K = q.getUTCDay(), q = K > 4 || K === 0 ? xn.ceil(q) : xn(q), q = ce.offset(q, (x.V - 1) * 7), x.y = q.getUTCFullYear(), x.m = q.getUTCMonth(), x.d = q.getUTCDate() + (x.w + 6) % 7) : (q = En(Ot(x.y, 0, 1)), K = q.getDay(), q = K > 4 || K === 0 ? wn.ceil(q) : wn(q), q = Qt.offset(q, (x.V - 1) * 7), x.y = q.getFullYear(), x.m = q.getMonth(), x.d = q.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), K = "Z" in x ? Hn(Ot(x.y, 0, 1)).getUTCDay() : En(Ot(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (K + 5) % 7 : x.w + x.U * 7 - (K + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, Hn(x)) : En(x);
    };
  }
  function w(S, Y, R, x) {
    for (var Z = 0, q = Y.length, K = R.length, tt, wt; Z < q; ) {
      if (x >= K) return -1;
      if (tt = Y.charCodeAt(Z++), tt === 37) {
        if (tt = Y.charAt(Z++), wt = b[tt in ze ? Y.charAt(Z++) : tt], !wt || (x = wt(S, R, x)) < 0) return -1;
      } else if (tt != R.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function F(S, Y, R) {
    var x = u.exec(Y.slice(R));
    return x ? (S.p = f.get(x[0].toLowerCase()), R + x[0].length) : -1;
  }
  function D(S, Y, R) {
    var x = g.exec(Y.slice(R));
    return x ? (S.w = T.get(x[0].toLowerCase()), R + x[0].length) : -1;
  }
  function p(S, Y, R) {
    var x = l.exec(Y.slice(R));
    return x ? (S.w = h.get(x[0].toLowerCase()), R + x[0].length) : -1;
  }
  function H(S, Y, R) {
    var x = P.exec(Y.slice(R));
    return x ? (S.m = A.get(x[0].toLowerCase()), R + x[0].length) : -1;
  }
  function L(S, Y, R) {
    var x = E.exec(Y.slice(R));
    return x ? (S.m = U.get(x[0].toLowerCase()), R + x[0].length) : -1;
  }
  function $(S, Y, R) {
    return w(S, n, Y, R);
  }
  function M(S, Y, R) {
    return w(S, e, Y, R);
  }
  function v(S, Y, R) {
    return w(S, r, Y, R);
  }
  function k(S) {
    return a[S.getDay()];
  }
  function _(S) {
    return o[S.getDay()];
  }
  function N(S) {
    return c[S.getMonth()];
  }
  function O(S) {
    return s[S.getMonth()];
  }
  function V(S) {
    return i[+(S.getHours() >= 12)];
  }
  function z(S) {
    return 1 + ~~(S.getMonth() / 3);
  }
  function B(S) {
    return a[S.getUTCDay()];
  }
  function I(S) {
    return o[S.getUTCDay()];
  }
  function X(S) {
    return c[S.getUTCMonth()];
  }
  function Q(S) {
    return s[S.getUTCMonth()];
  }
  function rt(S) {
    return i[+(S.getUTCHours() >= 12)];
  }
  function ot(S) {
    return 1 + ~~(S.getUTCMonth() / 3);
  }
  return {
    format: function(S) {
      var Y = d(S += "", C);
      return Y.toString = function() {
        return S;
      }, Y;
    },
    parse: function(S) {
      var Y = y(S += "", !1);
      return Y.toString = function() {
        return S;
      }, Y;
    },
    utcFormat: function(S) {
      var Y = d(S += "", m);
      return Y.toString = function() {
        return S;
      }, Y;
    },
    utcParse: function(S) {
      var Y = y(S += "", !0);
      return Y.toString = function() {
        return S;
      }, Y;
    }
  };
}
var ze = { "-": "", _: " ", 0: "0" }, J = /^\s*\d+/, wu = /^%/, xu = /[\\^$*+?|[\]().{}]/g;
function W(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function vu(t) {
  return t.replace(xu, "\\$&");
}
function It(t) {
  return new RegExp("^(?:" + t.map(vu).join("|") + ")", "i");
}
function Lt(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function _u(t, n, e) {
  var r = J.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function Mu(t, n, e) {
  var r = J.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function bu(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function $u(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function Tu(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function Ve(t, n, e) {
  var r = J.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function qe(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function Su(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function ku(t, n, e) {
  var r = J.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function Cu(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function Be(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function Du(t, n, e) {
  var r = J.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Xe(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function Au(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function Nu(t, n, e) {
  var r = J.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function Uu(t, n, e) {
  var r = J.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function Fu(t, n, e) {
  var r = J.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function Yu(t, n, e) {
  var r = wu.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function Eu(t, n, e) {
  var r = J.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function Hu(t, n, e) {
  var r = J.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function Ze(t, n) {
  return W(t.getDate(), n, 2);
}
function Ou(t, n) {
  return W(t.getHours(), n, 2);
}
function Iu(t, n) {
  return W(t.getHours() % 12 || 12, n, 2);
}
function Lu(t, n) {
  return W(1 + Qt.count(pt(t), t), n, 3);
}
function Dr(t, n) {
  return W(t.getMilliseconds(), n, 3);
}
function Ru(t, n) {
  return Dr(t, n) + "000";
}
function Pu(t, n) {
  return W(t.getMonth() + 1, n, 2);
}
function Wu(t, n) {
  return W(t.getMinutes(), n, 2);
}
function zu(t, n) {
  return W(t.getSeconds(), n, 2);
}
function Vu(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function qu(t, n) {
  return W(Tn.count(pt(t) - 1, t), n, 2);
}
function Ar(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t);
}
function Bu(t, n) {
  return t = Ar(t), W(Yt.count(pt(t), t) + (pt(t).getDay() === 4), n, 2);
}
function Xu(t) {
  return t.getDay();
}
function Zu(t, n) {
  return W(wn.count(pt(t) - 1, t), n, 2);
}
function Gu(t, n) {
  return W(t.getFullYear() % 100, n, 2);
}
function Ju(t, n) {
  return t = Ar(t), W(t.getFullYear() % 100, n, 2);
}
function Qu(t, n) {
  return W(t.getFullYear() % 1e4, n, 4);
}
function ju(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t), W(t.getFullYear() % 1e4, n, 4);
}
function Ku(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + W(n / 60 | 0, "0", 2) + W(n % 60, "0", 2);
}
function Ge(t, n) {
  return W(t.getUTCDate(), n, 2);
}
function ts(t, n) {
  return W(t.getUTCHours(), n, 2);
}
function ns(t, n) {
  return W(t.getUTCHours() % 12 || 12, n, 2);
}
function es(t, n) {
  return W(1 + ce.count(_t(t), t), n, 3);
}
function Nr(t, n) {
  return W(t.getUTCMilliseconds(), n, 3);
}
function rs(t, n) {
  return Nr(t, n) + "000";
}
function is(t, n) {
  return W(t.getUTCMonth() + 1, n, 2);
}
function os(t, n) {
  return W(t.getUTCMinutes(), n, 2);
}
function as(t, n) {
  return W(t.getUTCSeconds(), n, 2);
}
function us(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function ss(t, n) {
  return W(Cr.count(_t(t) - 1, t), n, 2);
}
function Ur(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Et(t) : Et.ceil(t);
}
function cs(t, n) {
  return t = Ur(t), W(Et.count(_t(t), t) + (_t(t).getUTCDay() === 4), n, 2);
}
function fs(t) {
  return t.getUTCDay();
}
function ls(t, n) {
  return W(xn.count(_t(t) - 1, t), n, 2);
}
function hs(t, n) {
  return W(t.getUTCFullYear() % 100, n, 2);
}
function ds(t, n) {
  return t = Ur(t), W(t.getUTCFullYear() % 100, n, 2);
}
function gs(t, n) {
  return W(t.getUTCFullYear() % 1e4, n, 4);
}
function ms(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Et(t) : Et.ceil(t), W(t.getUTCFullYear() % 1e4, n, 4);
}
function ps() {
  return "+0000";
}
function Je() {
  return "%";
}
function Qe(t) {
  return +t;
}
function je(t) {
  return Math.floor(+t / 1e3);
}
var Tt, le, Fr, Yr;
ys({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ys(t) {
  return Tt = yu(t), le = Tt.format, Tt.parse, Fr = Tt.utcFormat, Yr = Tt.utcParse, Tt;
}
var Er = "%Y-%m-%dT%H:%M:%S.%LZ";
function ws(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Fr(Er);
function xs(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var vs = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? xs : Yr(Er);
function _s(t) {
  return new Date(t);
}
function Ms(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Hr(t, n, e, r, i, o, a, s, c, u) {
  var f = $r(), l = f.invert, h = f.domain, g = u(".%L"), T = u(":%S"), E = u("%I:%M"), U = u("%I %p"), P = u("%a %d"), A = u("%b %d"), C = u("%B"), m = u("%Y");
  function b(d) {
    return (c(d) < d ? g : s(d) < d ? T : a(d) < d ? E : o(d) < d ? U : r(d) < d ? i(d) < d ? P : A : e(d) < d ? C : m)(d);
  }
  return f.invert = function(d) {
    return new Date(l(d));
  }, f.domain = function(d) {
    return arguments.length ? h(Array.from(d, Ms)) : h().map(_s);
  }, f.ticks = function(d) {
    var y = h();
    return t(y[0], y[y.length - 1], d ?? 10);
  }, f.tickFormat = function(d, y) {
    return y == null ? b : u(y);
  }, f.nice = function(d) {
    var y = h();
    return (!d || typeof d.range != "function") && (d = n(y[0], y[y.length - 1], d ?? 10)), d ? h(nu(y, d)) : f;
  }, f.copy = function() {
    return br(f, Hr(t, n, e, r, i, o, a, s, c, u));
  }, f;
}
function bs() {
  return $n.apply(Hr(mu, pu, pt, fe, Tn, Qt, se, ue, Ct, le).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ht = 0, zt = 0, Rt = 0, Or = 1e3, vn, Vt, _n = 0, Mt = 0, Sn = 0, Zt = typeof performance == "object" && performance.now ? performance : Date, Ir = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function he() {
  return Mt || (Ir($s), Mt = Zt.now() + Sn);
}
function $s() {
  Mt = 0;
}
function Mn() {
  this._call = this._time = this._next = null;
}
Mn.prototype = Lr.prototype = {
  constructor: Mn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? he() : +e) + (n == null ? 0 : +n), !this._next && Vt !== this && (Vt ? Vt._next = this : vn = this, Vt = this), this._call = t, this._time = e, Xn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xn());
  }
};
function Lr(t, n, e) {
  var r = new Mn();
  return r.restart(t, n, e), r;
}
function Ts() {
  he(), ++Ht;
  for (var t = vn, n; t; )
    (n = Mt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ht;
}
function Ke() {
  Mt = (_n = Zt.now()) + Sn, Ht = zt = 0;
  try {
    Ts();
  } finally {
    Ht = 0, ks(), Mt = 0;
  }
}
function Ss() {
  var t = Zt.now(), n = t - _n;
  n > Or && (Sn -= n, _n = t);
}
function ks() {
  for (var t, n = vn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : vn = e);
  Vt = t, Xn(r);
}
function Xn(t) {
  if (!Ht) {
    zt && (zt = clearTimeout(zt));
    var n = t - Mt;
    n > 24 ? (t < 1 / 0 && (zt = setTimeout(Ke, t - Zt.now() - Sn)), Rt && (Rt = clearInterval(Rt))) : (Rt || (_n = Zt.now(), Rt = setInterval(Ss, Or)), Ht = 1, Ir(Ke));
  }
}
function tr(t, n, e) {
  var r = new Mn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Cs = te("start", "end", "cancel", "interrupt"), Ds = [], Rr = 0, Zn = 1, Gn = 2, sn = 3, nr = 4, Jn = 5, cn = 6;
function kn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  As(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Cs,
    tween: Ds,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Rr
  });
}
function de(t, n) {
  var e = st(t, n);
  if (e.state > Rr) throw new Error("too late; already scheduled");
  return e;
}
function lt(t, n) {
  var e = st(t, n);
  if (e.state > sn) throw new Error("too late; already running");
  return e;
}
function st(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function As(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Lr(o, 0, e.time);
  function o(u) {
    e.state = Zn, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, l, h, g;
    if (e.state !== Zn) return c();
    for (f in r)
      if (g = r[f], g.name === e.name) {
        if (g.state === sn) return tr(a);
        g.state === nr ? (g.state = cn, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[f]) : +f < n && (g.state = cn, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[f]);
      }
    if (tr(function() {
      e.state === sn && (e.state = nr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Gn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Gn) {
      for (e.state = sn, i = new Array(h = e.tween.length), f = 0, l = -1; f < h; ++f)
        (g = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++l] = g);
      i.length = l + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(c), e.state = Jn, 1), l = -1, h = i.length; ++l < h; )
      i[l].call(t, f);
    e.state === Jn && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = cn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Ns(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Gn && r.state < Jn, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Us(t) {
  return this.each(function() {
    Ns(this, t);
  });
}
function Fs(t, n) {
  var e, r;
  return function() {
    var i = lt(this, t), o = i.tween;
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
function Ys(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = lt(this, t), a = o.tween;
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
function Es(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = st(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Fs : Ys)(e, t, n));
}
function ge(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = lt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[n];
  };
}
function Pr(t, n) {
  var e;
  return (typeof n == "number" ? at : n instanceof yt ? gn : (e = yt(n)) ? (n = e, gn) : vr)(t, n);
}
function Hs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Os(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Is(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Rs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function Ps(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s)));
  };
}
function Ws(t, n) {
  var e = bn(t), r = e === "transform" ? Ya : Pr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ps : Rs)(e, r, ge(this, "attr." + t, n)) : n == null ? (e.local ? Os : Hs)(e) : (e.local ? Ls : Is)(e, r, n));
}
function zs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Vs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function qs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vs(t, o)), e;
  }
  return i._value = n, i;
}
function Bs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && zs(t, o)), e;
  }
  return i._value = n, i;
}
function Xs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = bn(t);
  return this.tween(e, (r.local ? qs : Bs)(r, n));
}
function Zs(t, n) {
  return function() {
    de(this, t).delay = +n.apply(this, arguments);
  };
}
function Gs(t, n) {
  return n = +n, function() {
    de(this, t).delay = n;
  };
}
function Js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zs : Gs)(n, t)) : st(this.node(), n).delay;
}
function Qs(t, n) {
  return function() {
    lt(this, t).duration = +n.apply(this, arguments);
  };
}
function js(t, n) {
  return n = +n, function() {
    lt(this, t).duration = n;
  };
}
function Ks(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qs : js)(n, t)) : st(this.node(), n).duration;
}
function tc(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    lt(this, t).ease = n;
  };
}
function nc(t) {
  var n = this._id;
  return arguments.length ? this.each(tc(n, t)) : st(this.node(), n).ease;
}
function ec(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    lt(this, t).ease = e;
  };
}
function rc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ec(this._id, t));
}
function ic(t) {
  typeof t != "function" && (t = sr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new ft(r, this._parents, this._name, this._id);
}
function oc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = n[s], u = e[s], f = c.length, l = a[s] = new Array(f), h, g = 0; g < f; ++g)
      (h = c[g] || u[g]) && (l[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new ft(a, this._parents, this._name, this._id);
}
function ac(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function uc(t, n, e) {
  var r, i, o = ac(n) ? de : lt;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function sc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? st(this.node(), e).on.on(t) : this.each(uc(e, t, n));
}
function cc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function fc() {
  return this.on("end.remove", cc(this._id));
}
function lc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ne(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), f, l, h = 0; h < c; ++h)
      (f = s[h]) && (l = t.call(f, f.__data__, h, s)) && ("__data__" in f && (l.__data__ = f.__data__), u[h] = l, kn(u[h], n, e, h, u, st(f, e)));
  return new ft(o, this._parents, n, e);
}
function hc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ur(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, f, l = 0; l < u; ++l)
      if (f = c[l]) {
        for (var h = t.call(f, f.__data__, l, c), g, T = st(f, e), E = 0, U = h.length; E < U; ++E)
          (g = h[E]) && kn(g, n, e, E, h, T);
        o.push(h), a.push(f);
      }
  return new ft(o, a, n, e);
}
var dc = Jt.prototype.constructor;
function gc() {
  return new dc(this._groups, this._parents);
}
function mc(t, n) {
  var e, r, i;
  return function() {
    var o = Ut(this, t), a = (this.style.removeProperty(t), Ut(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Wr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function pc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Ut(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function yc(t, n, e) {
  var r, i, o;
  return function() {
    var a = Ut(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Ut(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, s));
  };
}
function wc(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var c = lt(this, t), u = c.on, f = c.value[o] == null ? s || (s = Wr(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), c.on = r;
  };
}
function xc(t, n, e) {
  var r = (t += "") == "transform" ? Fa : Pr;
  return n == null ? this.styleTween(t, mc(t, r)).on("end.style." + t, Wr(t)) : typeof n == "function" ? this.styleTween(t, yc(t, r, ge(this, "style." + t, n))).each(wc(this._id, t)) : this.styleTween(t, pc(t, r, n), e).on("end.style." + t, null);
}
function vc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function _c(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && vc(t, a, e)), r;
  }
  return o._value = n, o;
}
function Mc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, _c(t, n, e ?? ""));
}
function bc(t) {
  return function() {
    this.textContent = t;
  };
}
function $c(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Tc(t) {
  return this.tween("text", typeof t == "function" ? $c(ge(this, "text", t)) : bc(t == null ? "" : t + ""));
}
function Sc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function kc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Sc(i)), n;
  }
  return r._value = t, r;
}
function Cc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, kc(t));
}
function Dc() {
  for (var t = this._name, n = this._id, e = zr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var f = st(c, n);
        kn(c, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new ft(r, this._parents, t, e);
}
function Ac() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = lt(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), u.on = n;
    }), i === 0 && o();
  });
}
var Nc = 0;
function ft(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function zr() {
  return ++Nc;
}
var ht = Jt.prototype;
ft.prototype = {
  constructor: ft,
  select: lc,
  selectAll: hc,
  selectChild: ht.selectChild,
  selectChildren: ht.selectChildren,
  filter: ic,
  merge: oc,
  selection: gc,
  transition: Dc,
  call: ht.call,
  nodes: ht.nodes,
  node: ht.node,
  size: ht.size,
  empty: ht.empty,
  each: ht.each,
  on: sc,
  attr: Ws,
  attrTween: Xs,
  style: xc,
  styleTween: Mc,
  text: Tc,
  textTween: Cc,
  remove: fc,
  tween: Es,
  delay: Js,
  duration: Ks,
  ease: nc,
  easeVarying: rc,
  end: Ac,
  [Symbol.iterator]: ht[Symbol.iterator]
};
function Uc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Fc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Uc
};
function Yc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ec(t) {
  var n, e;
  t instanceof ft ? (n = t._id, t = t._name) : (n = zr(), (e = Fc).time = he(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && kn(c, t, n, u, a, e || Yc(c, n));
  return new ft(r, this._parents, t, n);
}
Jt.prototype.interrupt = Us;
Jt.prototype.transition = Ec;
var Hc = [null];
function Oc(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Zn && r.name === n)
        return new ft([[t]], Hc, n, +i);
  }
  return null;
}
const Ic = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function Vr(t) {
  nt("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Ic);
  const n = nt("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function Lc(t) {
  return rr(t.nodes().map((n) => n.getComputedTextLength()));
}
function Rc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const St = 1, Pc = 2;
function qr(t, n) {
  let e = ["#FFF", "#EEE"], r = Nt(e), i = 5, o, a = "#AAA", s = 40, c = 3e3, u;
  function f(l) {
    let h = n.domain(), g = Vr((d) => d), T = Nt(e), E = Nt(e.reverse()), U = Rc(s), P = l.selectAll(".row").data(h, n).order(), A = P.enter().append("g").attr("class", "row"), C = P.exit(), m = P.select("text");
    P = P.merge(A).attr("transform", (d) => "translate(0," + n(d) + ")"), C.remove(), A.append("rect").attr("y", 0.5).attr("width", c).attr("height", n.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", T), A.append("path").attr("stroke", E), m = m.merge(
      A.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(d, y) {
        nt(this).text() != y && g.show(y);
      }).on("mouseout", g.hide)
    ).text(U), u === void 0 && (u = Lc(m) + 2 * i, u = t === St ? c - u : u), o = t === St ? [0, u] : [u, c], m.attr("text-anchor", t === St ? "start" : "end").attr("dx", t === St ? i : -i).attr("x", u);
    const b = function(d, y) {
      u = Math.max(10, Math.min(c - 10, u + d.dx)), nt(this).attr("d", "M" + u + ",0.5V" + n.range()[1]), m.attr("x", u), o = t === St ? [0, u] : [u, c], l.dispatch("offset", { detail: { offset: u } });
    };
    l.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (u + 0.5) + ",0.5V" + n.range()[1]).style("cursor", "ew-resize").call(xa().on("drag", b));
  }
  return f.draw_ticks = function(l, h) {
    l.selectAll(".row").select("path").attr("d", h.map((g) => "M" + g + ",1v" + (n.bandwidth() - 1)).join(""));
  }, f.scale = function(l) {
    return arguments.length ? (n = l, f) : n;
  }, f.width = function(l) {
    return arguments.length ? (c = l, f) : c;
  }, f.colors = function(l) {
    return arguments.length ? (e = l, f) : e;
  }, f.padding = function(l) {
    return arguments.length ? (i = l, f) : i;
  }, f.range = function(l) {
    return arguments.length ? (o = l, f) : o;
  }, f.trim = function(l) {
    return arguments.length ? (s = l, f) : s;
  }, f.offset = function(l) {
    return arguments.length ? (u = l, f) : u;
  }, f.colorscale = function(l) {
    return arguments.length ? (r = l, f) : r;
  }, f;
}
function Wc(t) {
  return qr(Pc, t);
}
function zc(t) {
  return qr(St, t);
}
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Br = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(me, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", s = "minute", c = "hour", u = "day", f = "week", l = "month", h = "quarter", g = "year", T = "date", E = "Invalid Date", U = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, A = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var M = ["th", "st", "nd", "rd"], v = $ % 100;
      return "[" + $ + (M[(v - 20) % 10] || M[v] || M[0]) + "]";
    } }, C = function($, M, v) {
      var k = String($);
      return !k || k.length >= M ? $ : "" + Array(M + 1 - k.length).join(v) + $;
    }, m = { s: C, z: function($) {
      var M = -$.utcOffset(), v = Math.abs(M), k = Math.floor(v / 60), _ = v % 60;
      return (M <= 0 ? "+" : "-") + C(k, 2, "0") + ":" + C(_, 2, "0");
    }, m: function $(M, v) {
      if (M.date() < v.date()) return -$(v, M);
      var k = 12 * (v.year() - M.year()) + (v.month() - M.month()), _ = M.clone().add(k, l), N = v - _ < 0, O = M.clone().add(k + (N ? -1 : 1), l);
      return +(-(k + (v - _) / (N ? _ - O : O - _)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: l, y: g, w: f, d: u, D: T, h: c, m: s, s: a, ms: o, Q: h }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, b = "en", d = {};
    d[b] = A;
    var y = "$isDayjsObject", w = function($) {
      return $ instanceof H || !(!$ || !$[y]);
    }, F = function $(M, v, k) {
      var _;
      if (!M) return b;
      if (typeof M == "string") {
        var N = M.toLowerCase();
        d[N] && (_ = N), v && (d[N] = v, _ = N);
        var O = M.split("-");
        if (!_ && O.length > 1) return $(O[0]);
      } else {
        var V = M.name;
        d[V] = M, _ = V;
      }
      return !k && _ && (b = _), _ || !k && b;
    }, D = function($, M) {
      if (w($)) return $.clone();
      var v = typeof M == "object" ? M : {};
      return v.date = $, v.args = arguments, new H(v);
    }, p = m;
    p.l = F, p.i = w, p.w = function($, M) {
      return D($, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var H = function() {
      function $(v) {
        this.$L = F(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[y] = !0;
      }
      var M = $.prototype;
      return M.parse = function(v) {
        this.$d = function(k) {
          var _ = k.date, N = k.utc;
          if (_ === null) return /* @__PURE__ */ new Date(NaN);
          if (p.u(_)) return /* @__PURE__ */ new Date();
          if (_ instanceof Date) return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var O = _.match(U);
            if (O) {
              var V = O[2] - 1 || 0, z = (O[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(O[1], V, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z)) : new Date(O[1], V, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z);
            }
          }
          return new Date(_);
        }(v), this.init();
      }, M.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, M.$utils = function() {
        return p;
      }, M.isValid = function() {
        return this.$d.toString() !== E;
      }, M.isSame = function(v, k) {
        var _ = D(v);
        return this.startOf(k) <= _ && _ <= this.endOf(k);
      }, M.isAfter = function(v, k) {
        return D(v) < this.startOf(k);
      }, M.isBefore = function(v, k) {
        return this.endOf(k) < D(v);
      }, M.$g = function(v, k, _) {
        return p.u(v) ? this[k] : this.set(_, v);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(v, k) {
        var _ = this, N = !!p.u(k) || k, O = p.p(v), V = function(S, Y) {
          var R = p.w(_.$u ? Date.UTC(_.$y, Y, S) : new Date(_.$y, Y, S), _);
          return N ? R : R.endOf(u);
        }, z = function(S, Y) {
          return p.w(_.toDate()[S].apply(_.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), _);
        }, B = this.$W, I = this.$M, X = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case g:
            return N ? V(1, 0) : V(31, 11);
          case l:
            return N ? V(1, I) : V(0, I + 1);
          case f:
            var rt = this.$locale().weekStart || 0, ot = (B < rt ? B + 7 : B) - rt;
            return V(N ? X - ot : X + (6 - ot), I);
          case u:
          case T:
            return z(Q + "Hours", 0);
          case c:
            return z(Q + "Minutes", 1);
          case s:
            return z(Q + "Seconds", 2);
          case a:
            return z(Q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(v) {
        return this.startOf(v, !1);
      }, M.$set = function(v, k) {
        var _, N = p.p(v), O = "set" + (this.$u ? "UTC" : ""), V = (_ = {}, _[u] = O + "Date", _[T] = O + "Date", _[l] = O + "Month", _[g] = O + "FullYear", _[c] = O + "Hours", _[s] = O + "Minutes", _[a] = O + "Seconds", _[o] = O + "Milliseconds", _)[N], z = N === u ? this.$D + (k - this.$W) : k;
        if (N === l || N === g) {
          var B = this.clone().set(T, 1);
          B.$d[V](z), B.init(), this.$d = B.set(T, Math.min(this.$D, B.daysInMonth())).$d;
        } else V && this.$d[V](z);
        return this.init(), this;
      }, M.set = function(v, k) {
        return this.clone().$set(v, k);
      }, M.get = function(v) {
        return this[p.p(v)]();
      }, M.add = function(v, k) {
        var _, N = this;
        v = Number(v);
        var O = p.p(k), V = function(I) {
          var X = D(N);
          return p.w(X.date(X.date() + Math.round(I * v)), N);
        };
        if (O === l) return this.set(l, this.$M + v);
        if (O === g) return this.set(g, this.$y + v);
        if (O === u) return V(1);
        if (O === f) return V(7);
        var z = (_ = {}, _[s] = r, _[c] = i, _[a] = e, _)[O] || 1, B = this.$d.getTime() + v * z;
        return p.w(B, this);
      }, M.subtract = function(v, k) {
        return this.add(-1 * v, k);
      }, M.format = function(v) {
        var k = this, _ = this.$locale();
        if (!this.isValid()) return _.invalidDate || E;
        var N = v || "YYYY-MM-DDTHH:mm:ssZ", O = p.z(this), V = this.$H, z = this.$m, B = this.$M, I = _.weekdays, X = _.months, Q = _.meridiem, rt = function(Y, R, x, Z) {
          return Y && (Y[R] || Y(k, N)) || x[R].slice(0, Z);
        }, ot = function(Y) {
          return p.s(V % 12 || 12, Y, "0");
        }, S = Q || function(Y, R, x) {
          var Z = Y < 12 ? "AM" : "PM";
          return x ? Z.toLowerCase() : Z;
        };
        return N.replace(P, function(Y, R) {
          return R || function(x) {
            switch (x) {
              case "YY":
                return String(k.$y).slice(-2);
              case "YYYY":
                return p.s(k.$y, 4, "0");
              case "M":
                return B + 1;
              case "MM":
                return p.s(B + 1, 2, "0");
              case "MMM":
                return rt(_.monthsShort, B, X, 3);
              case "MMMM":
                return rt(X, B);
              case "D":
                return k.$D;
              case "DD":
                return p.s(k.$D, 2, "0");
              case "d":
                return String(k.$W);
              case "dd":
                return rt(_.weekdaysMin, k.$W, I, 2);
              case "ddd":
                return rt(_.weekdaysShort, k.$W, I, 3);
              case "dddd":
                return I[k.$W];
              case "H":
                return String(V);
              case "HH":
                return p.s(V, 2, "0");
              case "h":
                return ot(1);
              case "hh":
                return ot(2);
              case "a":
                return S(V, z, !0);
              case "A":
                return S(V, z, !1);
              case "m":
                return String(z);
              case "mm":
                return p.s(z, 2, "0");
              case "s":
                return String(k.$s);
              case "ss":
                return p.s(k.$s, 2, "0");
              case "SSS":
                return p.s(k.$ms, 3, "0");
              case "Z":
                return O;
            }
            return null;
          }(Y) || O.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(v, k, _) {
        var N, O = this, V = p.p(k), z = D(v), B = (z.utcOffset() - this.utcOffset()) * r, I = this - z, X = function() {
          return p.m(O, z);
        };
        switch (V) {
          case g:
            N = X() / 12;
            break;
          case l:
            N = X();
            break;
          case h:
            N = X() / 3;
            break;
          case f:
            N = (I - B) / 6048e5;
            break;
          case u:
            N = (I - B) / 864e5;
            break;
          case c:
            N = I / i;
            break;
          case s:
            N = I / r;
            break;
          case a:
            N = I / e;
            break;
          default:
            N = I;
        }
        return _ ? N : p.a(N);
      }, M.daysInMonth = function() {
        return this.endOf(l).$D;
      }, M.$locale = function() {
        return d[this.$L];
      }, M.locale = function(v, k) {
        if (!v) return this.$L;
        var _ = this.clone(), N = F(v, k, !0);
        return N && (_.$L = N), _;
      }, M.clone = function() {
        return p.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), L = H.prototype;
    return D.prototype = L, [["$ms", o], ["$s", a], ["$m", s], ["$H", c], ["$W", u], ["$M", l], ["$y", g], ["$D", T]].forEach(function($) {
      L[$[1]] = function(M) {
        return this.$g(M, $[0], $[1]);
      };
    }), D.extend = function($, M) {
      return $.$i || ($(M, H, D), $.$i = !0), D;
    }, D.locale = F, D.isDayjs = w, D.unix = function($) {
      return D(1e3 * $);
    }, D.en = d[b], D.Ls = d, D.p = {}, D;
  });
})(Br);
var Vc = Br.exports;
const ye = /* @__PURE__ */ pe(Vc);
var Xr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(me, function() {
    var e, r, i = 1e3, o = 6e4, a = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, f = 2628e6, l = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u, months: f, days: s, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, g = function(d) {
      return d instanceof m;
    }, T = function(d, y, w) {
      return new m(d, w, y.$l);
    }, E = function(d) {
      return r.p(d) + "s";
    }, U = function(d) {
      return d < 0;
    }, P = function(d) {
      return U(d) ? Math.ceil(d) : Math.floor(d);
    }, A = function(d) {
      return Math.abs(d);
    }, C = function(d, y) {
      return d ? U(d) ? { negative: !0, format: "" + A(d) + y } : { negative: !1, format: "" + d + y } : { negative: !1, format: "" };
    }, m = function() {
      function d(w, F, D) {
        var p = this;
        if (this.$d = {}, this.$l = D, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), F) return T(w * h[E(F)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function($) {
          p.$d[E($)] = w[$];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var H = w.match(l);
          if (H) {
            var L = H.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = L[0], this.$d.months = L[1], this.$d.weeks = L[2], this.$d.days = L[3], this.$d.hours = L[4], this.$d.minutes = L[5], this.$d.seconds = L[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y = d.prototype;
      return y.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(F, D) {
          return F + (w.$d[D] || 0) * h[D];
        }, 0);
      }, y.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = P(w / u), w %= u, this.$d.months = P(w / f), w %= f, this.$d.days = P(w / s), w %= s, this.$d.hours = P(w / a), w %= a, this.$d.minutes = P(w / o), w %= o, this.$d.seconds = P(w / i), w %= i, this.$d.milliseconds = w;
      }, y.toISOString = function() {
        var w = C(this.$d.years, "Y"), F = C(this.$d.months, "M"), D = +this.$d.days || 0;
        this.$d.weeks && (D += 7 * this.$d.weeks);
        var p = C(D, "D"), H = C(this.$d.hours, "H"), L = C(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var M = C($, "S"), v = w.negative || F.negative || p.negative || H.negative || L.negative || M.negative, k = H.format || L.format || M.format ? "T" : "", _ = (v ? "-" : "") + "P" + w.format + F.format + p.format + k + H.format + L.format + M.format;
        return _ === "P" || _ === "-P" ? "P0D" : _;
      }, y.toJSON = function() {
        return this.toISOString();
      }, y.format = function(w) {
        var F = w || "YYYY-MM-DDTHH:mm:ss", D = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return F.replace(c, function(p, H) {
          return H || String(D[p]);
        });
      }, y.as = function(w) {
        return this.$ms / h[E(w)];
      }, y.get = function(w) {
        var F = this.$ms, D = E(w);
        return D === "milliseconds" ? F %= 1e3 : F = D === "weeks" ? P(F / h[D]) : this.$d[D], F || 0;
      }, y.add = function(w, F, D) {
        var p;
        return p = F ? w * h[E(F)] : g(w) ? w.$ms : T(w, this).$ms, T(this.$ms + p * (D ? -1 : 1), this);
      }, y.subtract = function(w, F) {
        return this.add(w, F, !0);
      }, y.locale = function(w) {
        var F = this.clone();
        return F.$l = w, F;
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
      }, d;
    }(), b = function(d, y, w) {
      return d.add(y.years() * w, "y").add(y.months() * w, "M").add(y.days() * w, "d").add(y.hours() * w, "h").add(y.minutes() * w, "m").add(y.seconds() * w, "s").add(y.milliseconds() * w, "ms");
    };
    return function(d, y, w) {
      e = w, r = w().$utils(), w.duration = function(p, H) {
        var L = w.locale();
        return T(p, { $l: L }, H);
      }, w.isDuration = g;
      var F = y.prototype.add, D = y.prototype.subtract;
      y.prototype.add = function(p, H) {
        return g(p) ? b(this, p, 1) : F.bind(this)(p, H);
      }, y.prototype.subtract = function(p, H) {
        return g(p) ? b(this, p, -1) : D.bind(this)(p, H);
      };
    };
  });
})(Xr);
var qc = Xr.exports;
const Bc = /* @__PURE__ */ pe(qc);
var Zr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(me, function() {
    return function(e, r, i) {
      e = e || {};
      var o = r.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function s(u, f, l, h) {
        return o.fromToBase(u, f, l, h);
      }
      i.en.relativeTime = a, o.fromToBase = function(u, f, l, h, g) {
        for (var T, E, U, P = l.$locale().relativeTime || a, A = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], C = A.length, m = 0; m < C; m += 1) {
          var b = A[m];
          b.d && (T = h ? i(u).diff(l, b.d, !0) : l.diff(u, b.d, !0));
          var d = (e.rounding || Math.round)(Math.abs(T));
          if (U = T > 0, d <= b.r || !b.r) {
            d <= 1 && m > 0 && (b = A[m - 1]);
            var y = P[b.l];
            g && (d = g("" + d)), E = typeof y == "string" ? y.replace("%d", d) : y(d, f, b.l, U);
            break;
          }
        }
        if (f) return E;
        var w = U ? P.future : P.past;
        return typeof w == "function" ? w(E) : w.replace("%s", E);
      }, o.to = function(u, f) {
        return s(u, f, this, !0);
      }, o.from = function(u, f) {
        return s(u, f, this);
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
})(Zr);
var Xc = Zr.exports;
const Zc = /* @__PURE__ */ pe(Xc);
ye.extend(Bc);
ye.extend(Zc);
function Gc(t, n) {
  return ye.duration(n - t).humanize();
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
const Jc = [
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
function Qc(t) {
  const n = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(n);
}
function jc(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function Kc(t) {
  return jc(t) > 165;
}
function tf(t) {
  return Kc(yt(t)) ? "black" : "white";
}
function er(t) {
  const n = t.getFullYear(), e = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${n}${e}${r}`;
}
function Pt(t, n) {
  return "translate(" + t + "," + n + ")";
}
function rf() {
  let t = Jc, n = 5, e = 2, r = !1, i = !1, o, a, s = 0, c = rn(0), u = rn(1), f = rn(2), l = rn(3);
  function h(A, C) {
    const m = A.select("text"), b = A.select("rect"), d = b.attr("width") - 2 * n, y = u(C);
    m.text(y);
    let w = m.node().getComputedTextLength();
    if (w > d) {
      const F = d < 0 ? 0 : d / w, D = Math.floor(y.length * F);
      m.text(D > 2 ? y.slice(0, D - 2) + "…" : "");
    }
  }
  function g(A, C, m) {
    const b = A.select("text").node(), d = b.getBBox(), y = m.scale().domain().indexOf(c(C)), w = m.colorscale()(y), F = A.selectAll("rect.bckg").data([C]).join("rect").attr("class", "bckg").attr("fill", w).attr("x", d.x - n + e).attr("y", d.y - 2).attr("width", d.width + n - e).attr("height", d.height);
    A.node().insertBefore(F.node(), b);
  }
  function T(A, C) {
    A.each(function(m, b) {
      const d = nt(this.parentNode);
      l(m) - f(m) ? h(d, m) : g(d, m, C);
    });
  }
  function E(A) {
    return function(C, m) {
      Oc(this).tween("text", function() {
        return function(b) {
          T(nt(this), A);
        };
      });
    };
  }
  function U(A) {
    const C = A.datum(), m = new Set(fi(C, c)), b = new Vr(P), d = Nt(t);
    o = o || [si(C, f), rr(C, l)], i && (o = ti(o.concat(/* @__PURE__ */ new Date()))), A.each(function(y) {
      const w = a || this.getBoundingClientRect().width, F = m.size * (Qc(this) + 4 * n), D = wr().domain(m).range([0, F]), p = bs().domain(o), H = (r ? zc : Wc)(D).width(w), L = nt(this).selectAll("svg").data([1]).join("svg");
      L.attr("class", "timeline").attr("width", w).attr("height", F + 40);
      const $ = L.append("g").attr("transform", "translate(0,20)"), M = $.append("g").attr("class", "y axis").call(H);
      M.selectAll("text").attr("text-anchor", function(I) {
        return I.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(I) {
        return I.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(I) {
        return I.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(I, X) {
        const ot = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${X.replace(/--/g, "").replace(" ", "%20")}%22`;
        window.open(ot, "_blank");
      }), M.selectAll("g.row").each(function(I) {
        const Q = nt(this).select("text").text();
        Q.startsWith(" •") && nt(this).classed("timelineheader", !0).classed(Q.replace(/^ • /, "").replace("  ", "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0).append("text").attr("x", 320.5).attr("y", 25).text("+").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "20px").attr("fill", "black");
      });
      let v = H.range();
      p.range([v[0] + n, v[1] - n]).clamp(!0);
      const k = Me(p), _ = $.append("g").attr("class", "x axis").attr("transform", Pt(0, 0)).call(k);
      _.selectAll(".tick text").attr("dy", "-1.5em"), _.selectAll(".tick line").attr("y2", "-5");
      const N = Me(p);
      L.append("g").attr("class", "x axis bottom-axis").attr("transform", Pt(0, F + 20)).call(N).selectAll(".tick line").attr("y2", "5"), M.on("offset", () => {
        v = H.range(), p.range([v[0] + n, v[1] - n]).clamp(!0), k.ticks(Math.min((v[1] - v[0]) / 70, 10)), _.call(k), z.attr("transform", (I) => Pt(p(f(I)), D(c(I)))).selectAll("rect").attr("width", (I) => p(l(I)) - p(f(I)) || e).call((I) => T(I, H)), M.call(H.draw_ticks, p.ticks().map(p));
      }), _.select(".domain").remove(), _.selectAll(".tick line").attr("stroke", "#AAA");
      const V = p.ticks().map(p);
      M.call(H.draw_ticks, V);
      let z = $.selectAll("g.task").data(y);
      z.exit().remove();
      const B = z.enter().append("g").classed("task", !0);
      B.append("rect").style("opacity", 0.7).attr("y", n).style("cursor", "pointer").attr("height", D.bandwidth() - 2 * n).on("mouseover", b.show).on("mouseout", b.hide).on("click", function(I, X) {
        var Q = String(X[1]), rt = Q.replace(" ", "%20"), ot = X[2], S = er(ot), Y = X[3], R = er(Y), x = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + rt + "%22%20%2Bdate_when%3A%5B" + S + "%20TO%20" + R + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(x, "_blank");
      }).style("fill", On(u, d)), B.append("text").attr("text-anchor", "start").attr("fill", (I) => l(I) - f(I) ? On(u, d, tf)(I) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", D.bandwidth() / 2).attr("dy", "0.32em").text(u), z = z.merge(B), z.attr("transform", (I) => Pt(v[0], D(c(I)))).selectAll("rect").attr("width", 0), z.transition().duration(s).attr("transform", (I) => Pt(p(f(I)), D(c(I)))).selectAll("rect").attr("width", (I) => p(l(I)) - p(f(I)) || e).on("start", E(H)), i && $.append("path").attr("stroke", "red").attr("d", "M" + p(/* @__PURE__ */ new Date()) + ",0.5V" + F);
    });
  }
  return U.dates = function(A) {
    return arguments.length ? (o = A, U) : o;
  }, U.width = function(A) {
    return arguments.length ? (a = A, U) : a;
  }, U.today = function(A) {
    return arguments.length ? (i = A, U) : i;
  }, U.colors = function(A) {
    return arguments.length ? (t = A, U) : t;
  }, U.padding = function(A) {
    return arguments.length ? (n = A, U) : n;
  }, U.milestone_width = function(A) {
    return arguments.length ? (e = A, U) : e;
  }, U.reversed = function(A) {
    return arguments.length ? (r = A, U) : r;
  }, U.duration = function(A) {
    return arguments.length ? (s = A, U) : s;
  }, U;
  function P(A, C) {
    const m = On(vs, le("%Y-%m-%d")), b = `<b>${u(C)}</b><hr style="margin: 2px 0 2px 0">${m(f(C))}`, d = l(C) - f(C) ? ` - ${m(l(C))}<br>${Gc(f(C), l(C))}` : "";
    return b + d;
  }
}
export {
  Oc as active,
  Me as axisBottom,
  ef as axisLeft,
  nf as axisRight,
  yt as color,
  xa as drag,
  Gc as durationFormat,
  ti as extent,
  vs as isoParse,
  fi as map,
  rr as max,
  si as min,
  wr as scaleBand,
  tu as scaleLinear,
  Nt as scaleOrdinal,
  bs as scaleTime,
  nt as select,
  le as timeFormat,
  rf as timeline,
  Wc as timelineAxisLeft,
  zc as timelineAxisRight,
  Vr as tooltip
};
