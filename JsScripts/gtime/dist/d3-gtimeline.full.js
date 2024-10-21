function an(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ni(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function te(t) {
  let n, e, r;
  t.length !== 2 ? (n = an, e = (u, c) => an(t(u), c), r = (u, c) => t(u) - c) : (n = t === an || t === ni ? t : ei, e = t, r = t);
  function i(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (n(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        e(u[f], c) < 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function o(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (n(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        e(u[f], c) <= 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function a(u, c, s = 0, l = u.length) {
    const f = i(u, c, s, l - 1);
    return f > s && r(u[f - 1], c) > -r(u[f], c) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function ei() {
  return 0;
}
function ri(t) {
  return t === null ? NaN : +t;
}
const ii = te(an), oi = ii.right;
te(ri).center;
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
class be extends Map {
  constructor(n, e = ci) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get($e(this, n));
  }
  has(n) {
    return super.has($e(this, n));
  }
  set(n, e) {
    return super.set(si(this, n), e);
  }
  delete(n) {
    return super.delete(ui(this, n));
  }
}
function $e({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function si({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ui({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ci(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const li = Math.sqrt(50), fi = Math.sqrt(10), hi = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= li ? 10 : o >= fi ? 5 : o >= hi ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), c = Math.round(n * s), u / s < t && ++u, c / s > n && --c, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), c = Math.round(n / s), u * s < t && ++u, c * s > n && --c), c < u && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [u, c, s];
}
function di(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? fn(n, t, e) : fn(t, n, e);
  if (!(o >= i)) return [];
  const u = o - i + 1, c = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) c[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) c[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * a;
  return c;
}
function Pn(t, n, e) {
  return n = +n, t = +t, e = +e, fn(t, n, e)[2];
}
function Wn(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Pn(n, t, e) : Pn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function sr(t, n) {
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
var Nn = 1, sn = 2, zn = 3, Wt = 4, Te = 1e-6;
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
function ne(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, u = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, s = t === Nn || t === Wt ? -1 : 1, l = t === Wt || t === sn ? "x" : "y", f = t === Nn || t === zn ? wi : xi;
  function h(d) {
    var $ = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), Y = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : yi), N = Math.max(o, 0) + u, L = n.range(), D = +L[0] + c, A = +L[L.length - 1] + c, p = (n.bandwidth ? _i : vi)(n.copy(), c), M = d.selection ? d.selection() : d, g = M.selectAll(".domain").data([null]), y = M.selectAll(".tick").data($, n).order(), w = y.exit(), U = y.enter().append("g").attr("class", "tick"), C = y.select("line"), m = y.select("text");
    g = g.merge(g.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), y = y.merge(U), C = C.merge(U.append("line").attr("stroke", "currentColor").attr(l + "2", s * o)), m = m.merge(U.append("text").attr("fill", "currentColor").attr(l, s * N).attr("dy", t === Nn ? "0em" : t === zn ? "0.71em" : "0.32em")), d !== M && (g = g.transition(d), y = y.transition(d), C = C.transition(d), m = m.transition(d), w = w.transition(d).attr("opacity", Te).attr("transform", function(O) {
      return isFinite(O = p(O)) ? f(O + c) : this.getAttribute("transform");
    }), U.attr("opacity", Te).attr("transform", function(O) {
      var P = this.parentNode.__axis;
      return f((P && isFinite(P = P(O)) ? P : p(O)) + c);
    })), w.remove(), g.attr("d", t === Wt || t === sn ? a ? "M" + s * a + "," + D + "H" + c + "V" + A + "H" + s * a : "M" + c + "," + D + "V" + A : a ? "M" + D + "," + s * a + "V" + c + "H" + A + "V" + s * a : "M" + D + "," + c + "H" + A), y.attr("opacity", 1).attr("transform", function(O) {
      return f(p(O) + c);
    }), C.attr(l + "2", s * o), m.attr(l, s * N).text(Y), M.filter(Mi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === sn ? "start" : t === Wt ? "end" : "middle"), M.each(function() {
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
    return arguments.length ? (u = +d, h) : u;
  }, h.offset = function(d) {
    return arguments.length ? (c = +d, h) : c;
  }, h;
}
function ul(t) {
  return ne(sn, t);
}
function ke(t) {
  return ne(zn, t);
}
function cl(t) {
  return ne(Wt, t);
}
function ee(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ur(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Jt() {
}
var Vt = 0.7, hn = 1 / Vt, Ct = "\\s*([+-]?\\d+)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bi = /^#([0-9a-f]{3,8})$/, $i = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), Ti = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), ki = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Xt}\\)$`), Si = new RegExp(`^rgba\\(${ct},${ct},${ct},${Xt}\\)$`), Ai = new RegExp(`^hsl\\(${Xt},${ct},${ct}\\)$`), Ci = new RegExp(`^hsla\\(${Xt},${ct},${ct},${Xt}\\)$`), Se = {
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
ee(Jt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ae,
  // Deprecated! Use color.formatHex.
  formatHex: Ae,
  formatHex8: Di,
  formatHsl: Ni,
  formatRgb: Ce,
  toString: Ce
});
function Ae() {
  return this.rgb().formatHex();
}
function Di() {
  return this.rgb().formatHex8();
}
function Ni() {
  return cr(this).formatHsl();
}
function Ce() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = bi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? De(n) : e === 3 ? new et(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Kt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Kt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = $i.exec(t)) ? new et(n[1], n[2], n[3], 1) : (n = Ti.exec(t)) ? new et(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ki.exec(t)) ? Kt(n[1], n[2], n[3], n[4]) : (n = Si.exec(t)) ? Kt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ai.exec(t)) ? Ue(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ci.exec(t)) ? Ue(n[1], n[2] / 100, n[3] / 100, n[4]) : Se.hasOwnProperty(t) ? De(Se[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function De(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new et(t, n, e, r);
}
function Fi(t) {
  return t instanceof Jt || (t = yt(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function qn(t, n, e, r) {
  return arguments.length === 1 ? Fi(t) : new et(t, n, e, r ?? 1);
}
function et(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ee(et, qn, ur(Jt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Vt : Math.pow(Vt, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
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
  hex: Ne,
  // Deprecated! Use color.formatHex.
  formatHex: Ne,
  formatHex8: Ui,
  formatRgb: Fe,
  toString: Fe
}));
function Ne() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}`;
}
function Ui() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}${xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fe() {
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
function Ue(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new st(t, n, e, r);
}
function cr(t) {
  if (t instanceof st) return new st(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = yt(t)), !t) return new st();
  if (t instanceof st) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, c = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new st(a, u, c, t.opacity);
}
function Yi(t, n, e, r) {
  return arguments.length === 1 ? cr(t) : new st(t, n, e, r ?? 1);
}
function st(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ee(st, Yi, ur(Jt, {
  brighter(t) {
    return t = t == null ? hn : Math.pow(hn, t), new st(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Vt : Math.pow(Vt, t), new st(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new et(
      Fn(t >= 240 ? t - 240 : t + 120, i, r),
      Fn(t, i, r),
      Fn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new st(Ye(this.h), tn(this.s), tn(this.l), dn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = dn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ye(this.h)}, ${tn(this.s) * 100}%, ${tn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ye(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function tn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Fn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var Ei = { value: () => {
} };
function re() {
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
un.prototype = re.prototype = {
  constructor: un,
  on: function(t, n) {
    var e = this._, r = Hi(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Oi(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ee(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ee(e[i], t.name, null);
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
function Ee(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ei, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Bn = "http://www.w3.org/1999/xhtml";
const He = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function kn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), He.hasOwnProperty(n) ? { space: He[n], local: t } : t;
}
function Ii(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Bn && n.documentElement.namespaceURI === Bn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ri(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function lr(t) {
  var n = kn(t);
  return (n.local ? Ri : Ii)(n);
}
function Li() {
}
function ie(t) {
  return t == null ? Li : function() {
    return this.querySelector(t);
  };
}
function Pi(t) {
  typeof t != "function" && (t = ie(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), c, s, l = 0; l < a; ++l)
      (c = o[l]) && (s = t.call(c, c.__data__, l, o)) && ("__data__" in c && (s.__data__ = c.__data__), u[l] = s);
  return new tt(r, this._parents);
}
function fr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Wi() {
  return [];
}
function hr(t) {
  return t == null ? Wi : function() {
    return this.querySelectorAll(t);
  };
}
function zi(t) {
  return function() {
    return fr(t.apply(this, arguments));
  };
}
function qi(t) {
  typeof t == "function" ? t = zi(t) : t = hr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, c, s = 0; s < u; ++s)
      (c = a[s]) && (r.push(t.call(c, c.__data__, s, a)), i.push(c));
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
var Bi = Array.prototype.find;
function Vi(t) {
  return function() {
    return Bi.call(this.children, t);
  };
}
function Xi() {
  return this.firstElementChild;
}
function Zi(t) {
  return this.select(t == null ? Xi : Vi(typeof t == "function" ? t : gr(t)));
}
var Gi = Array.prototype.filter;
function Ji() {
  return Array.from(this.children);
}
function Qi(t) {
  return function() {
    return Gi.call(this.children, t);
  };
}
function ji(t) {
  return this.selectAll(t == null ? Ji : Qi(typeof t == "function" ? t : gr(t)));
}
function Ki(t) {
  typeof t != "function" && (t = dr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], c, s = 0; s < a; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
  return new tt(r, this._parents);
}
function mr(t) {
  return new Array(t.length);
}
function to() {
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
function no(t) {
  return function() {
    return t;
  };
}
function eo(t, n, e, r, i, o) {
  for (var a = 0, u, c = n.length, s = o.length; a < s; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new gn(t, o[a]);
  for (; a < c; ++a)
    (u = n[a]) && (i[a] = u);
}
function ro(t, n, e, r, i, o, a) {
  var u, c, s = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), d;
  for (u = 0; u < l; ++u)
    (c = n[u]) && (h[u] = d = a.call(c, c.__data__, u, n) + "", s.has(d) ? i[u] = c : s.set(d, c));
  for (u = 0; u < f; ++u)
    d = a.call(t, o[u], u, o) + "", (c = s.get(d)) ? (r[u] = c, c.__data__ = o[u], s.delete(d)) : e[u] = new gn(t, o[u]);
  for (u = 0; u < l; ++u)
    (c = n[u]) && s.get(h[u]) === c && (i[u] = c);
}
function io(t) {
  return t.__data__;
}
function oo(t, n) {
  if (!arguments.length) return Array.from(this, io);
  var e = n ? ro : eo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = no(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
    var l = r[s], f = i[s], h = f.length, d = ao(t.call(l, l && l.__data__, s, r)), $ = d.length, Y = u[s] = new Array($), N = a[s] = new Array($), L = c[s] = new Array(h);
    e(l, f, Y, N, L, d, n);
    for (var D = 0, A = 0, p, M; D < $; ++D)
      if (p = Y[D]) {
        for (D >= A && (A = D + 1); !(M = N[A]) && ++A < $; ) ;
        p._next = M || null;
      }
  }
  return a = new tt(a, r), a._enter = u, a._exit = c, a;
}
function ao(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function so() {
  return new tt(this._exit || this._groups.map(mr), this._parents);
}
function uo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function co(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c)
    for (var s = e[c], l = r[c], f = s.length, h = u[c] = new Array(f), d, $ = 0; $ < f; ++$)
      (d = s[$] || l[$]) && (h[$] = d);
  for (; c < i; ++c)
    u[c] = e[c];
  return new tt(u, this._parents);
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
    for (var a = e[o], u = a.length, c = i[o] = new Array(u), s, l = 0; l < u; ++l)
      (s = a[l]) && (c[l] = s);
    c.sort(n);
  }
  return new tt(i, this._parents).order();
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
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
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
  var e = kn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? _o : vo : typeof n == "function" ? e.local ? To : $o : e.local ? bo : Mo)(e, n));
}
function pr(t) {
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
  return t.style.getPropertyValue(n) || pr(t).getComputedStyle(t, null).getPropertyValue(n);
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
function yr(t) {
  return t.trim().split(/^|\s+/);
}
function oe(t) {
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
  for (var e = oe(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function vr(t, n) {
  for (var e = oe(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Eo(t) {
  return function() {
    xr(this, t);
  };
}
function Ho(t) {
  return function() {
    vr(this, t);
  };
}
function Oo(t, n) {
  return function() {
    (n.apply(this, arguments) ? xr : vr)(this, t);
  };
}
function Io(t, n) {
  var e = yr(t + "");
  if (arguments.length < 2) {
    for (var r = oe(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Oo : n ? Eo : Ho)(e, n));
}
function Ro() {
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
  return arguments.length ? this.each(t == null ? Ro : (typeof t == "function" ? Po : Lo)(t)) : this.node().textContent;
}
function zo() {
  this.innerHTML = "";
}
function qo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Bo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Vo(t) {
  return arguments.length ? this.each(t == null ? zo : (typeof t == "function" ? Bo : qo)(t)) : this.node().innerHTML;
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
function Jo() {
  return this.each(Go);
}
function Qo(t) {
  var n = typeof t == "function" ? t : lr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function jo() {
  return null;
}
function Ko(t, n) {
  var e = typeof t == "function" ? t : lr(t), r = n == null ? jo : typeof n == "function" ? n : ie(n);
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
function sa(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ua(t) {
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
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function la(t, n, e) {
  var r = sa(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var c = 0, s = u.length, l; c < s; ++c)
        for (i = 0, l = u[c]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (u = n ? ca : ua, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function _r(t, n, e) {
  var r = pr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function fa(t, n) {
  return function() {
    return _r(this, t, n);
  };
}
function ha(t, n) {
  return function() {
    return _r(this, t, n.apply(this, arguments));
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
var ae = [null];
function tt(t, n) {
  this._groups = t, this._parents = n;
}
function Qt() {
  return new tt([[document.documentElement]], ae);
}
function ma() {
  return this;
}
tt.prototype = Qt.prototype = {
  constructor: tt,
  select: Pi,
  selectAll: qi,
  selectChild: Zi,
  selectChildren: ji,
  filter: Ki,
  data: oo,
  enter: to,
  exit: so,
  join: uo,
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
  classed: Io,
  text: Wo,
  html: Vo,
  raise: Zo,
  lower: Jo,
  append: Qo,
  insert: Ko,
  remove: na,
  clone: ia,
  datum: oa,
  on: la,
  dispatch: da,
  [Symbol.iterator]: ga
};
function R(t) {
  return typeof t == "string" ? new tt([[document.querySelector(t)]], [document.documentElement]) : new tt([[t]], ae);
}
function pa(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Oe(t, n) {
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
function _t(t) {
  return typeof t == "string" ? new tt([document.querySelectorAll(t)], [document.documentElement]) : new tt([fr(t)], ae);
}
const ya = { passive: !1 }, Zt = { capture: !0, passive: !1 };
function Un(t) {
  t.stopImmediatePropagation();
}
function Dt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function wa(t) {
  var n = t.document.documentElement, e = R(t).on("dragstart.drag", Dt, Zt);
  "onselectstart" in n ? e.on("selectstart.drag", Dt, Zt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function xa(t, n) {
  var e = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Dt, Zt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const nn = (t) => () => t;
function Vn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: u,
  dx: c,
  dy: s,
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
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: s, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Vn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function va(t) {
  return !t.ctrlKey && !t.button;
}
function _a() {
  return this.parentNode;
}
function Ma(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function ba() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ll() {
  var t = va, n = _a, e = Ma, r = ba, i = {}, o = re("start", "drag", "end"), a = 0, u, c, s, l, f = 0;
  function h(p) {
    p.on("mousedown.drag", d).filter(r).on("touchstart.drag", N).on("touchmove.drag", L, ya).on("touchend.drag touchcancel.drag", D).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(p, M) {
    if (!(l || !t.call(this, p, M))) {
      var g = A(this, n.call(this, p, M), p, M, "mouse");
      g && (R(p.view).on("mousemove.drag", $, Zt).on("mouseup.drag", Y, Zt), wa(p.view), Un(p), s = !1, u = p.clientX, c = p.clientY, g("start", p));
    }
  }
  function $(p) {
    if (Dt(p), !s) {
      var M = p.clientX - u, g = p.clientY - c;
      s = M * M + g * g > f;
    }
    i.mouse("drag", p);
  }
  function Y(p) {
    R(p.view).on("mousemove.drag mouseup.drag", null), xa(p.view, s), Dt(p), i.mouse("end", p);
  }
  function N(p, M) {
    if (t.call(this, p, M)) {
      var g = p.changedTouches, y = n.call(this, p, M), w = g.length, U, C;
      for (U = 0; U < w; ++U)
        (C = A(this, y, p, M, g[U].identifier, g[U])) && (Un(p), C("start", p, g[U]));
    }
  }
  function L(p) {
    var M = p.changedTouches, g = M.length, y, w;
    for (y = 0; y < g; ++y)
      (w = i[M[y].identifier]) && (Dt(p), w("drag", p, M[y]));
  }
  function D(p) {
    var M = p.changedTouches, g = M.length, y, w;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), y = 0; y < g; ++y)
      (w = i[M[y].identifier]) && (Un(p), w("end", p, M[y]));
  }
  function A(p, M, g, y, w, U) {
    var C = o.copy(), m = Oe(U || g, M), O, P, k;
    if ((k = e.call(p, new Vn("beforestart", {
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
      return O = k.x - m[0] || 0, P = k.y - m[1] || 0, function _(v, S, b) {
        var F = m, I;
        switch (v) {
          case "start":
            i[w] = _, I = a++;
            break;
          case "end":
            delete i[w], --a;
          case "drag":
            m = Oe(b || S, M), I = a;
            break;
        }
        C.call(
          v,
          p,
          new Vn(v, {
            sourceEvent: S,
            subject: k,
            target: h,
            identifier: w,
            active: I,
            x: m[0] + O,
            y: m[1] + P,
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
const Ie = Symbol("implicit");
function Nt() {
  var t = new be(), n = [], e = [], r = Ie;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== Ie) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new be();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Nt(n, e).unknown(r);
  }, Sn.apply(i, arguments), i;
}
function Mr() {
  var t = Nt().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, u = !1, c = 0, s = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, d = i < r, $ = d ? i : r, Y = d ? r : i;
    o = (Y - $) / Math.max(1, h - c + s * 2), u && (o = Math.floor(o)), $ += (Y - $ - o * (h - c)) * l, a = o * (1 - c), u && ($ = Math.round($), a = Math.round(a));
    var N = mi(h).map(function(L) {
      return $ + o * L;
    });
    return e(d ? N.reverse() : N);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), f()) : n();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, f()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, u = !0, f();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(h) {
    return arguments.length ? (u = !!h, f()) : u;
  }, t.padding = function(h) {
    return arguments.length ? (c = Math.min(1, s = +h), f()) : c;
  }, t.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (s = +h, f()) : s;
  }, t.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, t.copy = function() {
    return Mr(n(), [r, i]).round(u).paddingInner(c).paddingOuter(s).align(l);
  }, Sn.apply(f(), arguments);
}
const se = (t) => () => t;
function $a(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ta(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ka(t) {
  return (t = +t) == 1 ? br : function(n, e) {
    return e - n ? Ta(n, e, t) : se(isNaN(n) ? e : n);
  };
}
function br(t, n) {
  var e = n - t;
  return e ? $a(t, e) : se(isNaN(t) ? n : t);
}
const mn = function t(n) {
  var e = ka(n);
  function r(i, o) {
    var a = e((i = qn(i)).r, (o = qn(o)).r), u = e(i.g, o.g), c = e(i.b, o.b), s = br(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = u(l), i.b = c(l), i.opacity = s(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Sa(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Aa(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ca(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ue(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Da(t, n) {
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
function Na(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ue(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Xn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yn = new RegExp(Xn.source, "g");
function Fa(t) {
  return function() {
    return t;
  };
}
function Ua(t) {
  return function(n) {
    return t(n) + "";
  };
}
function $r(t, n) {
  var e = Xn.lastIndex = Yn.lastIndex = 0, r, i, o, a = -1, u = [], c = [];
  for (t = t + "", n = n + ""; (r = Xn.exec(t)) && (i = Yn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, c.push({ i: a, x: at(r, i) })), e = Yn.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? c[0] ? Ua(c[0].x) : Fa(n) : (n = c.length, function(s) {
    for (var l = 0, f; l < n; ++l) u[(f = c[l]).i] = f.x(s);
    return u.join("");
  });
}
function ue(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? se(n) : (e === "number" ? at : e === "string" ? (r = yt(n)) ? (n = r, mn) : $r : n instanceof yt ? mn : n instanceof Date ? Da : Aa(n) ? Sa : Array.isArray(n) ? Ca : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Na : at)(t, n);
}
function Ya(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Re = 180 / Math.PI, Zn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Tr(t, n, e, r, i, o) {
  var a, u, c;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Re,
    skewX: Math.atan(c) * Re,
    scaleX: a,
    scaleY: u
  };
}
var en;
function Ea(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Zn : Tr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ha(t) {
  return t == null || (en || (en = document.createElementNS("http://www.w3.org/2000/svg", "g")), en.setAttribute("transform", t), !(t = en.transform.baseVal.consolidate())) ? Zn : (t = t.matrix, Tr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function kr(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, l, f, h, d, $) {
    if (s !== f || l !== h) {
      var Y = d.push("translate(", null, n, null, e);
      $.push({ i: Y - 4, x: at(s, f) }, { i: Y - 2, x: at(l, h) });
    } else (f || h) && d.push("translate(" + f + n + h + e);
  }
  function a(s, l, f, h) {
    s !== l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: at(s, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function u(s, l, f, h) {
    s !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: at(s, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(s, l, f, h, d, $) {
    if (s !== f || l !== h) {
      var Y = d.push(i(d) + "scale(", null, ",", null, ")");
      $.push({ i: Y - 4, x: at(s, f) }, { i: Y - 2, x: at(l, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(s, l) {
    var f = [], h = [];
    return s = t(s), l = t(l), o(s.translateX, s.translateY, l.translateX, l.translateY, f, h), a(s.rotate, l.rotate, f, h), u(s.skewX, l.skewX, f, h), c(s.scaleX, s.scaleY, l.scaleX, l.scaleY, f, h), s = l = null, function(d) {
      for (var $ = -1, Y = h.length, N; ++$ < Y; ) f[(N = h[$]).i] = N.x(d);
      return f.join("");
    };
  };
}
var Oa = kr(Ea, "px, ", "px)", "deg)"), Ia = kr(Ha, ", ", ")", ")");
function Ra(t) {
  return function() {
    return t;
  };
}
function La(t) {
  return +t;
}
var Le = [0, 1];
function St(t) {
  return t;
}
function Gn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ra(isNaN(n) ? NaN : 0.5);
}
function Pa(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Wa(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Gn(i, r), o = e(a, o)) : (r = Gn(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function za(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Gn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var c = oi(t, u, 1, r) - 1;
    return o[c](i[c](u));
  };
}
function Sr(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function qa() {
  var t = Le, n = Le, e = ue, r, i, o, a = St, u, c, s;
  function l() {
    var h = Math.min(t.length, n.length);
    return a !== St && (a = Pa(t[0], t[h - 1])), u = h > 2 ? za : Wa, c = s = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = u(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((s || (s = u(n, t.map(r), at)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, La), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), l()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Ya, l();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : St, l()) : a !== St;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, l();
  };
}
function Ar() {
  return qa()(St, St);
}
function Ba(t) {
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
function Ut(t) {
  return t = pn(Math.abs(t)), t ? t[1] : NaN;
}
function Va(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(e.substring(i -= u, i + u)), !((c += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Xa(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Za = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function yn(t) {
  if (!(n = Za.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ce({
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
yn.prototype = ce.prototype;
function ce(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ce.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ga(t) {
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
function Ja(t, n) {
  var e = pn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Cr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + pn(t, Math.max(0, n + o - 1))[0];
}
function Pe(t, n) {
  var e = pn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const We = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ba,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Pe(t * 100, n),
  r: Pe,
  s: Ja,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ze(t) {
  return t;
}
var qe = Array.prototype.map, Be = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Qa(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ze : Va(qe.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? ze : Xa(qe.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(f) {
    f = yn(f);
    var h = f.fill, d = f.align, $ = f.sign, Y = f.symbol, N = f.zero, L = f.width, D = f.comma, A = f.precision, p = f.trim, M = f.type;
    M === "n" ? (D = !0, M = "g") : We[M] || (A === void 0 && (A = 12), p = !0, M = "g"), (N || h === "0" && d === "=") && (N = !0, h = "0", d = "=");
    var g = Y === "$" ? e : Y === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", y = Y === "$" ? r : /[%p]/.test(M) ? a : "", w = We[M], U = /[defgprs%]/.test(M);
    A = A === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function C(m) {
      var O = g, P = y, k, _, v;
      if (M === "c")
        P = w(m) + P, m = "";
      else {
        m = +m;
        var S = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? c : w(Math.abs(m), A), p && (m = Ga(m)), S && +m == 0 && $ !== "+" && (S = !1), O = (S ? $ === "(" ? $ : u : $ === "-" || $ === "(" ? "" : $) + O, P = (M === "s" ? Be[8 + Cr / 3] : "") + P + (S && $ === "(" ? ")" : ""), U) {
          for (k = -1, _ = m.length; ++k < _; )
            if (v = m.charCodeAt(k), 48 > v || v > 57) {
              P = (v === 46 ? i + m.slice(k + 1) : m.slice(k)) + P, m = m.slice(0, k);
              break;
            }
        }
      }
      D && !N && (m = n(m, 1 / 0));
      var b = O.length + m.length + P.length, F = b < L ? new Array(L - b + 1).join(h) : "";
      switch (D && N && (m = n(F + m, F.length ? L - P.length : 1 / 0), F = ""), d) {
        case "<":
          m = O + m + P + F;
          break;
        case "=":
          m = O + F + m + P;
          break;
        case "^":
          m = F.slice(0, b = F.length >> 1) + O + m + P + F.slice(b);
          break;
        default:
          m = F + O + m + P;
          break;
      }
      return o(m);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function l(f, h) {
    var d = s((f = yn(f), f.type = "f", f)), $ = Math.max(-8, Math.min(8, Math.floor(Ut(h) / 3))) * 3, Y = Math.pow(10, -$), N = Be[8 + $ / 3];
    return function(L) {
      return d(Y * L) + N;
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var rn, Dr, Nr;
ja({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ja(t) {
  return rn = Qa(t), Dr = rn.format, Nr = rn.formatPrefix, rn;
}
function Ka(t) {
  return Math.max(0, -Ut(Math.abs(t)));
}
function ts(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ut(n) / 3))) * 3 - Ut(Math.abs(t)));
}
function ns(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ut(n) - Ut(t)) + 1;
}
function es(t, n, e, r) {
  var i = Wn(t, n, e), o;
  switch (r = yn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = ts(i, a)) && (r.precision = o), Nr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = ns(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ka(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Dr(r);
}
function rs(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return di(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return es(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], c, s, l = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); l-- > 0; ) {
      if (s = Pn(a, u, e), s === c)
        return r[i] = a, r[o] = u, n(r);
      if (s > 0)
        a = Math.floor(a / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      c = s;
    }
    return t;
  }, t;
}
function is() {
  var t = Ar();
  return t.copy = function() {
    return Sr(t, is());
  }, Sn.apply(t, arguments), rs(t);
}
function os(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const En = /* @__PURE__ */ new Date(), Hn = /* @__PURE__ */ new Date();
function Q(t, n, e, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), n(o, 1), t(o), o), i.round = (o) => {
    const a = i(o), u = i.ceil(o);
    return o - a < u - o ? a : u;
  }, i.offset = (o, a) => (n(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, u) => {
    const c = [];
    if (o = i.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < a) || !(u > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+o)), n(o, u), t(o);
    while (s < o && o < a);
    return c;
  }, i.filter = (o) => Q((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, u) => {
    if (a >= a)
      if (u < 0) for (; ++u <= 0; )
        for (; n(a, -1), !o(a); )
          ;
      else for (; --u >= 0; )
        for (; n(a, 1), !o(a); )
          ;
  }), e && (i.count = (o, a) => (En.setTime(+o), Hn.setTime(+a), t(En), t(Hn), Math.floor(e(En, Hn))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
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
const dt = 1e3, ot = dt * 60, gt = ot * 60, mt = gt * 24, le = mt * 7, Ve = mt * 30, On = mt * 365, At = Q((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * dt);
}, (t, n) => (n - t) / dt, (t) => t.getUTCSeconds());
At.range;
const fe = Q((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt);
}, (t, n) => {
  t.setTime(+t + n * ot);
}, (t, n) => (n - t) / ot, (t) => t.getMinutes());
fe.range;
const as = Q((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * ot);
}, (t, n) => (n - t) / ot, (t) => t.getUTCMinutes());
as.range;
const he = Q((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt - t.getMinutes() * ot);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getHours());
he.range;
const ss = Q((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * gt);
}, (t, n) => (n - t) / gt, (t) => t.getUTCHours());
ss.range;
const jt = Q(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / mt,
  (t) => t.getDate() - 1
);
jt.range;
const de = Q((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => t.getUTCDate() - 1);
de.range;
const us = Q((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / mt, (t) => Math.floor(t / mt));
us.range;
function $t(t) {
  return Q((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * ot) / le);
}
const An = $t(0), xn = $t(1), cs = $t(2), ls = $t(3), Yt = $t(4), fs = $t(5), hs = $t(6);
An.range;
xn.range;
cs.range;
ls.range;
Yt.range;
fs.range;
hs.range;
function Tt(t) {
  return Q((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / le);
}
const Fr = Tt(0), vn = Tt(1), ds = Tt(2), gs = Tt(3), Et = Tt(4), ms = Tt(5), ps = Tt(6);
Fr.range;
vn.range;
ds.range;
gs.range;
Et.range;
ms.range;
ps.range;
const ge = Q((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
ge.range;
const ys = Q((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
ys.range;
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
function ws(t, n, e, r, i, o) {
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
    [e, 1, le],
    [n, 1, Ve],
    [n, 3, 3 * Ve],
    [t, 1, On]
  ];
  function u(s, l, f) {
    const h = l < s;
    h && ([s, l] = [l, s]);
    const d = f && typeof f.range == "function" ? f : c(s, l, f), $ = d ? d.range(s, +l + 1) : [];
    return h ? $.reverse() : $;
  }
  function c(s, l, f) {
    const h = Math.abs(l - s) / f, d = te(([, , N]) => N).right(a, h);
    if (d === a.length) return t.every(Wn(s / On, l / On, f));
    if (d === 0) return wn.every(Math.max(Wn(s, l, f), 1));
    const [$, Y] = a[h / a[d - 1][2] < a[d][2] / h ? d - 1 : d];
    return $.every(Y);
  }
  return [u, c];
}
const [xs, vs] = ws(pt, ge, An, jt, he, fe);
function In(t) {
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
function Ot(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function _s(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, u = t.months, c = t.shortMonths, s = It(i), l = Rt(i), f = It(o), h = Rt(o), d = It(a), $ = Rt(a), Y = It(u), N = Rt(u), L = It(c), D = Rt(c), A = {
    a: S,
    A: b,
    b: F,
    B: I,
    c: null,
    d: je,
    e: je,
    f: qs,
    g: tu,
    G: eu,
    H: Ps,
    I: Ws,
    j: zs,
    L: Ur,
    m: Bs,
    M: Vs,
    p: B,
    q,
    Q: nr,
    s: er,
    S: Xs,
    u: Zs,
    U: Gs,
    V: Js,
    w: Qs,
    W: js,
    x: null,
    X: null,
    y: Ks,
    Y: nu,
    Z: ru,
    "%": tr
  }, p = {
    a: Z,
    A: H,
    b: V,
    B: nt,
    c: null,
    d: Ke,
    e: Ke,
    f: su,
    g: yu,
    G: xu,
    H: iu,
    I: ou,
    j: au,
    L: Er,
    m: uu,
    M: cu,
    p: G,
    q: K,
    Q: nr,
    s: er,
    S: lu,
    u: fu,
    U: hu,
    V: du,
    w: gu,
    W: mu,
    x: null,
    X: null,
    y: pu,
    Y: wu,
    Z: vu,
    "%": tr
  }, M = {
    a: C,
    A: m,
    b: O,
    B: P,
    c: k,
    d: Je,
    e: Je,
    f: Os,
    g: Ge,
    G: Ze,
    H: Qe,
    I: Qe,
    j: Us,
    L: Hs,
    m: Fs,
    M: Ys,
    p: U,
    q: Ns,
    Q: Rs,
    s: Ls,
    S: Es,
    u: ks,
    U: Ss,
    V: As,
    w: Ts,
    W: Cs,
    x: _,
    X: v,
    y: Ge,
    Y: Ze,
    Z: Ds,
    "%": Is
  };
  A.x = g(e, A), A.X = g(r, A), A.c = g(n, A), p.x = g(e, p), p.X = g(r, p), p.c = g(n, p);
  function g(T, E) {
    return function(W) {
      var x = [], J = -1, X = 0, rt = T.length, it, wt, Me;
      for (W instanceof Date || (W = /* @__PURE__ */ new Date(+W)); ++J < rt; )
        T.charCodeAt(J) === 37 && (x.push(T.slice(X, J)), (wt = Xe[it = T.charAt(++J)]) != null ? it = T.charAt(++J) : wt = it === "e" ? " " : "0", (Me = E[it]) && (it = Me(W, wt)), x.push(it), X = J + 1);
      return x.push(T.slice(X, J)), x.join("");
    };
  }
  function y(T, E) {
    return function(W) {
      var x = Ot(1900, void 0, 1), J = w(x, T, W += "", 0), X, rt;
      if (J != W.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (E && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (X = Rn(Ot(x.y, 0, 1)), rt = X.getUTCDay(), X = rt > 4 || rt === 0 ? vn.ceil(X) : vn(X), X = de.offset(X, (x.V - 1) * 7), x.y = X.getUTCFullYear(), x.m = X.getUTCMonth(), x.d = X.getUTCDate() + (x.w + 6) % 7) : (X = In(Ot(x.y, 0, 1)), rt = X.getDay(), X = rt > 4 || rt === 0 ? xn.ceil(X) : xn(X), X = jt.offset(X, (x.V - 1) * 7), x.y = X.getFullYear(), x.m = X.getMonth(), x.d = X.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), rt = "Z" in x ? Rn(Ot(x.y, 0, 1)).getUTCDay() : In(Ot(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (rt + 5) % 7 : x.w + x.U * 7 - (rt + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, Rn(x)) : In(x);
    };
  }
  function w(T, E, W, x) {
    for (var J = 0, X = E.length, rt = W.length, it, wt; J < X; ) {
      if (x >= rt) return -1;
      if (it = E.charCodeAt(J++), it === 37) {
        if (it = E.charAt(J++), wt = M[it in Xe ? E.charAt(J++) : it], !wt || (x = wt(T, W, x)) < 0) return -1;
      } else if (it != W.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function U(T, E, W) {
    var x = s.exec(E.slice(W));
    return x ? (T.p = l.get(x[0].toLowerCase()), W + x[0].length) : -1;
  }
  function C(T, E, W) {
    var x = d.exec(E.slice(W));
    return x ? (T.w = $.get(x[0].toLowerCase()), W + x[0].length) : -1;
  }
  function m(T, E, W) {
    var x = f.exec(E.slice(W));
    return x ? (T.w = h.get(x[0].toLowerCase()), W + x[0].length) : -1;
  }
  function O(T, E, W) {
    var x = L.exec(E.slice(W));
    return x ? (T.m = D.get(x[0].toLowerCase()), W + x[0].length) : -1;
  }
  function P(T, E, W) {
    var x = Y.exec(E.slice(W));
    return x ? (T.m = N.get(x[0].toLowerCase()), W + x[0].length) : -1;
  }
  function k(T, E, W) {
    return w(T, n, E, W);
  }
  function _(T, E, W) {
    return w(T, e, E, W);
  }
  function v(T, E, W) {
    return w(T, r, E, W);
  }
  function S(T) {
    return a[T.getDay()];
  }
  function b(T) {
    return o[T.getDay()];
  }
  function F(T) {
    return c[T.getMonth()];
  }
  function I(T) {
    return u[T.getMonth()];
  }
  function B(T) {
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
  function V(T) {
    return c[T.getUTCMonth()];
  }
  function nt(T) {
    return u[T.getUTCMonth()];
  }
  function G(T) {
    return i[+(T.getUTCHours() >= 12)];
  }
  function K(T) {
    return 1 + ~~(T.getUTCMonth() / 3);
  }
  return {
    format: function(T) {
      var E = g(T += "", A);
      return E.toString = function() {
        return T;
      }, E;
    },
    parse: function(T) {
      var E = y(T += "", !1);
      return E.toString = function() {
        return T;
      }, E;
    },
    utcFormat: function(T) {
      var E = g(T += "", p);
      return E.toString = function() {
        return T;
      }, E;
    },
    utcParse: function(T) {
      var E = y(T += "", !0);
      return E.toString = function() {
        return T;
      }, E;
    }
  };
}
var Xe = { "-": "", _: " ", 0: "0" }, j = /^\s*\d+/, Ms = /^%/, bs = /[\\^$*+?|[\]().{}]/g;
function z(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function $s(t) {
  return t.replace(bs, "\\$&");
}
function It(t) {
  return new RegExp("^(?:" + t.map($s).join("|") + ")", "i");
}
function Rt(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function Ts(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function ks(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function Ss(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function As(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function Cs(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function Ze(t, n, e) {
  var r = j.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function Ge(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function Ds(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function Ns(t, n, e) {
  var r = j.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function Fs(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function Je(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function Us(t, n, e) {
  var r = j.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Qe(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function Ys(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function Es(t, n, e) {
  var r = j.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function Hs(t, n, e) {
  var r = j.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function Os(t, n, e) {
  var r = j.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function Is(t, n, e) {
  var r = Ms.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function Rs(t, n, e) {
  var r = j.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function Ls(t, n, e) {
  var r = j.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function je(t, n) {
  return z(t.getDate(), n, 2);
}
function Ps(t, n) {
  return z(t.getHours(), n, 2);
}
function Ws(t, n) {
  return z(t.getHours() % 12 || 12, n, 2);
}
function zs(t, n) {
  return z(1 + jt.count(pt(t), t), n, 3);
}
function Ur(t, n) {
  return z(t.getMilliseconds(), n, 3);
}
function qs(t, n) {
  return Ur(t, n) + "000";
}
function Bs(t, n) {
  return z(t.getMonth() + 1, n, 2);
}
function Vs(t, n) {
  return z(t.getMinutes(), n, 2);
}
function Xs(t, n) {
  return z(t.getSeconds(), n, 2);
}
function Zs(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function Gs(t, n) {
  return z(An.count(pt(t) - 1, t), n, 2);
}
function Yr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t);
}
function Js(t, n) {
  return t = Yr(t), z(Yt.count(pt(t), t) + (pt(t).getDay() === 4), n, 2);
}
function Qs(t) {
  return t.getDay();
}
function js(t, n) {
  return z(xn.count(pt(t) - 1, t), n, 2);
}
function Ks(t, n) {
  return z(t.getFullYear() % 100, n, 2);
}
function tu(t, n) {
  return t = Yr(t), z(t.getFullYear() % 100, n, 2);
}
function nu(t, n) {
  return z(t.getFullYear() % 1e4, n, 4);
}
function eu(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t), z(t.getFullYear() % 1e4, n, 4);
}
function ru(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + z(n / 60 | 0, "0", 2) + z(n % 60, "0", 2);
}
function Ke(t, n) {
  return z(t.getUTCDate(), n, 2);
}
function iu(t, n) {
  return z(t.getUTCHours(), n, 2);
}
function ou(t, n) {
  return z(t.getUTCHours() % 12 || 12, n, 2);
}
function au(t, n) {
  return z(1 + de.count(Mt(t), t), n, 3);
}
function Er(t, n) {
  return z(t.getUTCMilliseconds(), n, 3);
}
function su(t, n) {
  return Er(t, n) + "000";
}
function uu(t, n) {
  return z(t.getUTCMonth() + 1, n, 2);
}
function cu(t, n) {
  return z(t.getUTCMinutes(), n, 2);
}
function lu(t, n) {
  return z(t.getUTCSeconds(), n, 2);
}
function fu(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function hu(t, n) {
  return z(Fr.count(Mt(t) - 1, t), n, 2);
}
function Hr(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Et(t) : Et.ceil(t);
}
function du(t, n) {
  return t = Hr(t), z(Et.count(Mt(t), t) + (Mt(t).getUTCDay() === 4), n, 2);
}
function gu(t) {
  return t.getUTCDay();
}
function mu(t, n) {
  return z(vn.count(Mt(t) - 1, t), n, 2);
}
function pu(t, n) {
  return z(t.getUTCFullYear() % 100, n, 2);
}
function yu(t, n) {
  return t = Hr(t), z(t.getUTCFullYear() % 100, n, 2);
}
function wu(t, n) {
  return z(t.getUTCFullYear() % 1e4, n, 4);
}
function xu(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Et(t) : Et.ceil(t), z(t.getUTCFullYear() % 1e4, n, 4);
}
function vu() {
  return "+0000";
}
function tr() {
  return "%";
}
function nr(t) {
  return +t;
}
function er(t) {
  return Math.floor(+t / 1e3);
}
var kt, me, Or, Ir;
_u({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function _u(t) {
  return kt = _s(t), me = kt.format, kt.parse, Or = kt.utcFormat, Ir = kt.utcParse, kt;
}
var Rr = "%Y-%m-%dT%H:%M:%S.%LZ";
function Mu(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Or(Rr);
function bu(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var $u = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? bu : Ir(Rr);
function Tu(t) {
  return new Date(t);
}
function ku(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Lr(t, n, e, r, i, o, a, u, c, s) {
  var l = Ar(), f = l.invert, h = l.domain, d = s(".%L"), $ = s(":%S"), Y = s("%I:%M"), N = s("%I %p"), L = s("%a %d"), D = s("%b %d"), A = s("%B"), p = s("%Y");
  function M(g) {
    return (c(g) < g ? d : u(g) < g ? $ : a(g) < g ? Y : o(g) < g ? N : r(g) < g ? i(g) < g ? L : D : e(g) < g ? A : p)(g);
  }
  return l.invert = function(g) {
    return new Date(f(g));
  }, l.domain = function(g) {
    return arguments.length ? h(Array.from(g, ku)) : h().map(Tu);
  }, l.ticks = function(g) {
    var y = h();
    return t(y[0], y[y.length - 1], g ?? 10);
  }, l.tickFormat = function(g, y) {
    return y == null ? M : s(y);
  }, l.nice = function(g) {
    var y = h();
    return (!g || typeof g.range != "function") && (g = n(y[0], y[y.length - 1], g ?? 10)), g ? h(os(y, g)) : l;
  }, l.copy = function() {
    return Sr(l, Lr(t, n, e, r, i, o, a, u, c, s));
  }, l;
}
function Su() {
  return Sn.apply(Lr(xs, vs, pt, ge, An, jt, he, fe, At, me).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ht = 0, zt = 0, Lt = 0, Pr = 1e3, _n, qt, Mn = 0, bt = 0, Cn = 0, Gt = typeof performance == "object" && performance.now ? performance : Date, Wr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pe() {
  return bt || (Wr(Au), bt = Gt.now() + Cn);
}
function Au() {
  bt = 0;
}
function bn() {
  this._call = this._time = this._next = null;
}
bn.prototype = zr.prototype = {
  constructor: bn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? pe() : +e) + (n == null ? 0 : +n), !this._next && qt !== this && (qt ? qt._next = this : _n = this, qt = this), this._call = t, this._time = e, Jn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Jn());
  }
};
function zr(t, n, e) {
  var r = new bn();
  return r.restart(t, n, e), r;
}
function Cu() {
  pe(), ++Ht;
  for (var t = _n, n; t; )
    (n = bt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ht;
}
function rr() {
  bt = (Mn = Gt.now()) + Cn, Ht = zt = 0;
  try {
    Cu();
  } finally {
    Ht = 0, Nu(), bt = 0;
  }
}
function Du() {
  var t = Gt.now(), n = t - Mn;
  n > Pr && (Cn -= n, Mn = t);
}
function Nu() {
  for (var t, n = _n, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : _n = e);
  qt = t, Jn(r);
}
function Jn(t) {
  if (!Ht) {
    zt && (zt = clearTimeout(zt));
    var n = t - bt;
    n > 24 ? (t < 1 / 0 && (zt = setTimeout(rr, t - Gt.now() - Cn)), Lt && (Lt = clearInterval(Lt))) : (Lt || (Mn = Gt.now(), Lt = setInterval(Du, Pr)), Ht = 1, Wr(rr));
  }
}
function ir(t, n, e) {
  var r = new bn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Fu = re("start", "end", "cancel", "interrupt"), Uu = [], qr = 0, Qn = 1, jn = 2, cn = 3, or = 4, Kn = 5, ln = 6;
function Dn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Yu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Fu,
    tween: Uu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: qr
  });
}
function ye(t, n) {
  var e = ut(t, n);
  if (e.state > qr) throw new Error("too late; already scheduled");
  return e;
}
function ft(t, n) {
  var e = ut(t, n);
  if (e.state > cn) throw new Error("too late; already running");
  return e;
}
function ut(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Yu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = zr(o, 0, e.time);
  function o(s) {
    e.state = Qn, e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
  }
  function a(s) {
    var l, f, h, d;
    if (e.state !== Qn) return c();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === cn) return ir(a);
        d.state === or ? (d.state = ln, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = ln, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (ir(function() {
      e.state === cn && (e.state = or, e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = jn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === jn) {
      for (e.state = cn, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function u(s) {
    for (var l = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(c), e.state = Kn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    e.state === Kn && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = ln, e.timer.stop(), delete r[n];
    for (var s in r) return;
    delete t.__transition;
  }
}
function Eu(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > jn && r.state < Kn, r.state = ln, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Hu(t) {
  return this.each(function() {
    Eu(this, t);
  });
}
function Ou(t, n) {
  var e, r;
  return function() {
    var i = ft(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Iu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = ft(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, c = 0, s = i.length; c < s; ++c)
        if (i[c].name === n) {
          i[c] = u;
          break;
        }
      c === s && i.push(u);
    }
    o.tween = i;
  };
}
function Ru(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ut(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Ou : Iu)(e, t, n));
}
function we(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ft(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return ut(i, r).value[n];
  };
}
function Br(t, n) {
  var e;
  return (typeof n == "number" ? at : n instanceof yt ? mn : (e = yt(n)) ? (n = e, mn) : $r)(t, n);
}
function Lu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function zu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function qu(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), c;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = u + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u)));
  };
}
function Bu(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), c;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = u + "", a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u)));
  };
}
function Vu(t, n) {
  var e = kn(t), r = e === "transform" ? Ia : Br;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Bu : qu)(e, r, we(this, "attr." + t, n)) : n == null ? (e.local ? Pu : Lu)(e) : (e.local ? zu : Wu)(e, r, n));
}
function Xu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Zu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Gu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Zu(t, o)), e;
  }
  return i._value = n, i;
}
function Ju(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Xu(t, o)), e;
  }
  return i._value = n, i;
}
function Qu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = kn(t);
  return this.tween(e, (r.local ? Gu : Ju)(r, n));
}
function ju(t, n) {
  return function() {
    ye(this, t).delay = +n.apply(this, arguments);
  };
}
function Ku(t, n) {
  return n = +n, function() {
    ye(this, t).delay = n;
  };
}
function tc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ju : Ku)(n, t)) : ut(this.node(), n).delay;
}
function nc(t, n) {
  return function() {
    ft(this, t).duration = +n.apply(this, arguments);
  };
}
function ec(t, n) {
  return n = +n, function() {
    ft(this, t).duration = n;
  };
}
function rc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? nc : ec)(n, t)) : ut(this.node(), n).duration;
}
function ic(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ft(this, t).ease = n;
  };
}
function oc(t) {
  var n = this._id;
  return arguments.length ? this.each(ic(n, t)) : ut(this.node(), n).ease;
}
function ac(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ft(this, t).ease = e;
  };
}
function sc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ac(this._id, t));
}
function uc(t) {
  typeof t != "function" && (t = dr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], c, s = 0; s < a; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
  return new lt(r, this._parents, this._name, this._id);
}
function cc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var c = n[u], s = e[u], l = c.length, f = a[u] = new Array(l), h, d = 0; d < l; ++d)
      (h = c[d] || s[d]) && (f[d] = h);
  for (; u < r; ++u)
    a[u] = n[u];
  return new lt(a, this._parents, this._name, this._id);
}
function lc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function fc(t, n, e) {
  var r, i, o = lc(n) ? ye : ft;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function hc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? ut(this.node(), e).on.on(t) : this.each(fc(e, t, n));
}
function dc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function gc() {
  return this.on("end.remove", dc(this._id));
}
function mc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ie(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], c = u.length, s = o[a] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = u[h]) && (f = t.call(l, l.__data__, h, u)) && ("__data__" in l && (f.__data__ = l.__data__), s[h] = f, Dn(s[h], n, e, h, s, ut(l, e)));
  return new lt(o, this._parents, n, e);
}
function pc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = hr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var c = r[u], s = c.length, l, f = 0; f < s; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), d, $ = ut(l, e), Y = 0, N = h.length; Y < N; ++Y)
          (d = h[Y]) && Dn(d, n, e, Y, h, $);
        o.push(h), a.push(l);
      }
  return new lt(o, a, n, e);
}
var yc = Qt.prototype.constructor;
function wc() {
  return new yc(this._groups, this._parents);
}
function xc(t, n) {
  var e, r, i;
  return function() {
    var o = Ft(this, t), a = (this.style.removeProperty(t), Ft(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Vr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Ft(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function _c(t, n, e) {
  var r, i, o;
  return function() {
    var a = Ft(this, t), u = e(this), c = u + "";
    return u == null && (c = u = (this.style.removeProperty(t), Ft(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u));
  };
}
function Mc(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var c = ft(this, t), s = c.on, l = c.value[o] == null ? u || (u = Vr(n)) : void 0;
    (s !== e || i !== l) && (r = (e = s).copy()).on(a, i = l), c.on = r;
  };
}
function bc(t, n, e) {
  var r = (t += "") == "transform" ? Oa : Br;
  return n == null ? this.styleTween(t, xc(t, r)).on("end.style." + t, Vr(t)) : typeof n == "function" ? this.styleTween(t, _c(t, r, we(this, "style." + t, n))).each(Mc(this._id, t)) : this.styleTween(t, vc(t, r, n), e).on("end.style." + t, null);
}
function $c(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Tc(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && $c(t, a, e)), r;
  }
  return o._value = n, o;
}
function kc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Tc(t, n, e ?? ""));
}
function Sc(t) {
  return function() {
    this.textContent = t;
  };
}
function Ac(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Cc(t) {
  return this.tween("text", typeof t == "function" ? Ac(we(this, "text", t)) : Sc(t == null ? "" : t + ""));
}
function Dc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Nc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Dc(i)), n;
  }
  return r._value = t, r;
}
function Fc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Nc(t));
}
function Uc() {
  for (var t = this._name, n = this._id, e = Xr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
      if (c = a[s]) {
        var l = ut(c, n);
        Dn(c, t, e, s, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new lt(r, this._parents, t, e);
}
function Yc() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = ft(this, r), l = s.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), s.on = n;
    }), i === 0 && o();
  });
}
var Ec = 0;
function lt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Xr() {
  return ++Ec;
}
var ht = Qt.prototype;
lt.prototype = {
  constructor: lt,
  select: mc,
  selectAll: pc,
  selectChild: ht.selectChild,
  selectChildren: ht.selectChildren,
  filter: uc,
  merge: cc,
  selection: wc,
  transition: Uc,
  call: ht.call,
  nodes: ht.nodes,
  node: ht.node,
  size: ht.size,
  empty: ht.empty,
  each: ht.each,
  on: hc,
  attr: Vu,
  attrTween: Qu,
  style: bc,
  styleTween: kc,
  text: Cc,
  textTween: Fc,
  remove: gc,
  tween: Ru,
  delay: tc,
  duration: rc,
  ease: oc,
  easeVarying: sc,
  end: Yc,
  [Symbol.iterator]: ht[Symbol.iterator]
};
function Hc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Oc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Hc
};
function Ic(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Rc(t) {
  var n, e;
  t instanceof lt ? (n = t._id, t = t._name) : (n = Xr(), (e = Oc).time = pe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
      (c = a[s]) && Dn(c, t, n, s, a, e || Ic(c, n));
  return new lt(r, this._parents, t, n);
}
Qt.prototype.interrupt = Hu;
Qt.prototype.transition = Rc;
var Lc = [null];
function Pc(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Qn && r.name === n)
        return new lt([[t]], Lc, n, +i);
  }
  return null;
}
const Wc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function Zr(t) {
  R("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Wc);
  const n = R("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function zc(t) {
  return sr(t.nodes().map((n) => n.getComputedTextLength()));
}
function qc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const Bt = 1, Bc = 2;
function Gr(t, n) {
  let e = ["#FFF", "#FFF"], r = Nt(e), i = 5, o, a = "#AAA", u = 40, c = 3e3, s;
  function l(f) {
    let h = n.domain(), d = Zr((M) => M), $ = Nt(e), Y = Nt(e.reverse()), N = qc(u), L = f.selectAll(".row").data(h, n).order(), D = L.enter().append("g").attr("class", "row"), A = L.exit(), p = L.select("text");
    L = L.merge(D).attr("transform", (M) => "translate(0," + n(M) + ")"), A.remove(), D.append("rect").attr("y", 0.5).attr("width", c).attr("height", n.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", $), D.append("path").attr("stroke", Y), p = p.merge(
      D.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(M, g) {
        R(this).text() != g && d.show(g);
      }).on("mouseout", d.hide)
    ).text(N), s === void 0 && (s = zc(p) + 2 * i, s = t === Bt ? c - s : s), o = t === Bt ? [0, s] : [s, c], p.attr("text-anchor", t === Bt ? "start" : "end").attr("dx", t === Bt ? i : -i).attr("x", s), f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (s + 0.5) + ",0.5V" + n.range()[1]);
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
    return arguments.length ? (u = f, l) : u;
  }, l.offset = function(f) {
    return arguments.length ? (s = f, l) : s;
  }, l.colorscale = function(f) {
    return arguments.length ? (r = f, l) : r;
  }, l;
}
function Vc(t) {
  return Gr(Bc, t);
}
function Xc(t) {
  return Gr(Bt, t);
}
var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ve(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(xe, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", u = "minute", c = "hour", s = "day", l = "week", f = "month", h = "quarter", d = "year", $ = "date", Y = "Invalid Date", N = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
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
      var S = 12 * (v.year() - _.year()) + (v.month() - _.month()), b = _.clone().add(S, f), F = v - b < 0, I = _.clone().add(S + (F ? -1 : 1), f);
      return +(-(S + (v - b) / (F ? b - I : I - b)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: f, y: d, w: l, d: s, D: $, h: c, m: u, s: a, ms: o, Q: h }[k] || String(k || "").toLowerCase().replace(/s$/, "");
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
        var I = _.split("-");
        if (!b && I.length > 1) return k(I[0]);
      } else {
        var B = _.name;
        g[B] = _, b = B;
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
            var I = b.match(N);
            if (I) {
              var B = I[2] - 1 || 0, q = (I[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(I[1], B, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, q)) : new Date(I[1], B, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, q);
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
        var b = this, F = !!m.u(S) || S, I = m.p(v), B = function(T, E) {
          var W = m.w(b.$u ? Date.UTC(b.$y, E, T) : new Date(b.$y, E, T), b);
          return F ? W : W.endOf(s);
        }, q = function(T, E) {
          return m.w(b.toDate()[T].apply(b.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(E)), b);
        }, Z = this.$W, H = this.$M, V = this.$D, nt = "set" + (this.$u ? "UTC" : "");
        switch (I) {
          case d:
            return F ? B(1, 0) : B(31, 11);
          case f:
            return F ? B(1, H) : B(0, H + 1);
          case l:
            var G = this.$locale().weekStart || 0, K = (Z < G ? Z + 7 : Z) - G;
            return B(F ? V - K : V + (6 - K), H);
          case s:
          case $:
            return q(nt + "Hours", 0);
          case c:
            return q(nt + "Minutes", 1);
          case u:
            return q(nt + "Seconds", 2);
          case a:
            return q(nt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(v) {
        return this.startOf(v, !1);
      }, _.$set = function(v, S) {
        var b, F = m.p(v), I = "set" + (this.$u ? "UTC" : ""), B = (b = {}, b[s] = I + "Date", b[$] = I + "Date", b[f] = I + "Month", b[d] = I + "FullYear", b[c] = I + "Hours", b[u] = I + "Minutes", b[a] = I + "Seconds", b[o] = I + "Milliseconds", b)[F], q = F === s ? this.$D + (S - this.$W) : S;
        if (F === f || F === d) {
          var Z = this.clone().set($, 1);
          Z.$d[B](q), Z.init(), this.$d = Z.set($, Math.min(this.$D, Z.daysInMonth())).$d;
        } else B && this.$d[B](q);
        return this.init(), this;
      }, _.set = function(v, S) {
        return this.clone().$set(v, S);
      }, _.get = function(v) {
        return this[m.p(v)]();
      }, _.add = function(v, S) {
        var b, F = this;
        v = Number(v);
        var I = m.p(S), B = function(H) {
          var V = C(F);
          return m.w(V.date(V.date() + Math.round(H * v)), F);
        };
        if (I === f) return this.set(f, this.$M + v);
        if (I === d) return this.set(d, this.$y + v);
        if (I === s) return B(1);
        if (I === l) return B(7);
        var q = (b = {}, b[u] = r, b[c] = i, b[a] = e, b)[I] || 1, Z = this.$d.getTime() + v * q;
        return m.w(Z, this);
      }, _.subtract = function(v, S) {
        return this.add(-1 * v, S);
      }, _.format = function(v) {
        var S = this, b = this.$locale();
        if (!this.isValid()) return b.invalidDate || Y;
        var F = v || "YYYY-MM-DDTHH:mm:ssZ", I = m.z(this), B = this.$H, q = this.$m, Z = this.$M, H = b.weekdays, V = b.months, nt = b.meridiem, G = function(E, W, x, J) {
          return E && (E[W] || E(S, F)) || x[W].slice(0, J);
        }, K = function(E) {
          return m.s(B % 12 || 12, E, "0");
        }, T = nt || function(E, W, x) {
          var J = E < 12 ? "AM" : "PM";
          return x ? J.toLowerCase() : J;
        };
        return F.replace(L, function(E, W) {
          return W || function(x) {
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
                return G(b.monthsShort, Z, V, 3);
              case "MMMM":
                return G(V, Z);
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
                return String(B);
              case "HH":
                return m.s(B, 2, "0");
              case "h":
                return K(1);
              case "hh":
                return K(2);
              case "a":
                return T(B, q, !0);
              case "A":
                return T(B, q, !1);
              case "m":
                return String(q);
              case "mm":
                return m.s(q, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return m.s(S.$s, 2, "0");
              case "SSS":
                return m.s(S.$ms, 3, "0");
              case "Z":
                return I;
            }
            return null;
          }(E) || I.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(v, S, b) {
        var F, I = this, B = m.p(S), q = C(v), Z = (q.utcOffset() - this.utcOffset()) * r, H = this - q, V = function() {
          return m.m(I, q);
        };
        switch (B) {
          case d:
            F = V() / 12;
            break;
          case f:
            F = V();
            break;
          case h:
            F = V() / 3;
            break;
          case l:
            F = (H - Z) / 6048e5;
            break;
          case s:
            F = (H - Z) / 864e5;
            break;
          case c:
            F = H / i;
            break;
          case u:
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
    }(), P = O.prototype;
    return C.prototype = P, [["$ms", o], ["$s", a], ["$m", u], ["$H", c], ["$W", s], ["$M", f], ["$y", d], ["$D", $]].forEach(function(k) {
      P[k[1]] = function(_) {
        return this.$g(_, k[0], k[1]);
      };
    }), C.extend = function(k, _) {
      return k.$i || (k(_, O, C), k.$i = !0), C;
    }, C.locale = U, C.isDayjs = w, C.unix = function(k) {
      return C(1e3 * k);
    }, C.en = g[M], C.Ls = g, C.p = {}, C;
  });
})(Jr);
var Zc = Jr.exports;
const _e = /* @__PURE__ */ ve(Zc);
var Qr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(xe, function() {
    var e, r, i = 1e3, o = 6e4, a = 36e5, u = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, s = 31536e6, l = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: s, months: l, days: u, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, d = function(g) {
      return g instanceof p;
    }, $ = function(g, y, w) {
      return new p(g, w, y.$l);
    }, Y = function(g) {
      return r.p(g) + "s";
    }, N = function(g) {
      return g < 0;
    }, L = function(g) {
      return N(g) ? Math.ceil(g) : Math.floor(g);
    }, D = function(g) {
      return Math.abs(g);
    }, A = function(g, y) {
      return g ? N(g) ? { negative: !0, format: "" + D(g) + y } : { negative: !1, format: "" + g + y } : { negative: !1, format: "" };
    }, p = function() {
      function g(w, U, C) {
        var m = this;
        if (this.$d = {}, this.$l = C, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), U) return $(w * h[Y(U)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function(k) {
          m.$d[Y(k)] = w[k];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var O = w.match(f);
          if (O) {
            var P = O.slice(2).map(function(k) {
              return k != null ? Number(k) : 0;
            });
            return this.$d.years = P[0], this.$d.months = P[1], this.$d.weeks = P[2], this.$d.days = P[3], this.$d.hours = P[4], this.$d.minutes = P[5], this.$d.seconds = P[6], this.calMilliseconds(), this;
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
        this.$d.years = L(w / s), w %= s, this.$d.months = L(w / l), w %= l, this.$d.days = L(w / u), w %= u, this.$d.hours = L(w / a), w %= a, this.$d.minutes = L(w / o), w %= o, this.$d.seconds = L(w / i), w %= i, this.$d.milliseconds = w;
      }, y.toISOString = function() {
        var w = A(this.$d.years, "Y"), U = A(this.$d.months, "M"), C = +this.$d.days || 0;
        this.$d.weeks && (C += 7 * this.$d.weeks);
        var m = A(C, "D"), O = A(this.$d.hours, "H"), P = A(this.$d.minutes, "M"), k = this.$d.seconds || 0;
        this.$d.milliseconds && (k += this.$d.milliseconds / 1e3, k = Math.round(1e3 * k) / 1e3);
        var _ = A(k, "S"), v = w.negative || U.negative || m.negative || O.negative || P.negative || _.negative, S = O.format || P.format || _.format ? "T" : "", b = (v ? "-" : "") + "P" + w.format + U.format + m.format + S + O.format + P.format + _.format;
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
        return C === "milliseconds" ? U %= 1e3 : U = C === "weeks" ? L(U / h[C]) : this.$d[C], U || 0;
      }, y.add = function(w, U, C) {
        var m;
        return m = U ? w * h[Y(U)] : d(w) ? w.$ms : $(w, this).$ms, $(this.$ms + m * (C ? -1 : 1), this);
      }, y.subtract = function(w, U) {
        return this.add(w, U, !0);
      }, y.locale = function(w) {
        var U = this.clone();
        return U.$l = w, U;
      }, y.clone = function() {
        return $(this.$ms, this);
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
        var P = w.locale();
        return $(m, { $l: P }, O);
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
var Gc = Qr.exports;
const Jc = /* @__PURE__ */ ve(Gc);
var jr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(xe, function() {
    return function(e, r, i) {
      e = e || {};
      var o = r.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function u(s, l, f, h) {
        return o.fromToBase(s, l, f, h);
      }
      i.en.relativeTime = a, o.fromToBase = function(s, l, f, h, d) {
        for (var $, Y, N, L = f.$locale().relativeTime || a, D = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], A = D.length, p = 0; p < A; p += 1) {
          var M = D[p];
          M.d && ($ = h ? i(s).diff(f, M.d, !0) : f.diff(s, M.d, !0));
          var g = (e.rounding || Math.round)(Math.abs($));
          if (N = $ > 0, g <= M.r || !M.r) {
            g <= 1 && p > 0 && (M = D[p - 1]);
            var y = L[M.l];
            d && (g = d("" + g)), Y = typeof y == "string" ? y.replace("%d", g) : y(g, l, M.l, N);
            break;
          }
        }
        if (l) return Y;
        var w = N ? L.future : L.past;
        return typeof w == "function" ? w(Y) : w.replace("%s", Y);
      }, o.to = function(s, l) {
        return u(s, l, this, !0);
      }, o.from = function(s, l) {
        return u(s, l, this);
      };
      var c = function(s) {
        return s.$u ? i.utc() : i();
      };
      o.toNow = function(s) {
        return this.to(c(this), s);
      }, o.fromNow = function(s) {
        return this.from(c(this), s);
      };
    };
  });
})(jr);
var Qc = jr.exports;
const jc = /* @__PURE__ */ ve(Qc);
_e.extend(Jc);
_e.extend(jc);
function Kc(t, n) {
  return _e.duration(n - t).humanize();
}
function Ln() {
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
const tl = [
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
function nl(t) {
  const n = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(n);
}
function el(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function rl(t) {
  return el(t) > 165;
}
function il(t) {
  return rl(yt(t)) ? "black" : "white";
}
function ar(t) {
  const n = t.getFullYear(), e = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${n}${e}${r}`;
}
function Pt(t, n) {
  return "translate(" + t + "," + n + ")";
}
function ol() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(n) {
    n.style.display = "none";
  });
}
function $n(t, n, e) {
  const i = R(t).attr("class");
  let o = !1;
  n.selectAll("g.row").each(function(D) {
    const p = R(this).attr("class");
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
  let c = a.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), s = parseFloat(c[1]), l = parseFloat(c[2]), h = parseFloat(c[3]) + e;
  a.setAttribute("d", `M${s},${l}V${h}`);
  const d = R("g.x.axis.bottom-axis");
  let $ = d.attr("transform"), Y = parseFloat($.split("(")[1].split(",")[0].trim()), L = parseFloat($.split(",")[1].split(")")[0].trim()) + e;
  d.attr("transform", `translate(${Y}, ${L})`);
}
function Kr(t, n) {
  n.forEach(function(r) {
    document.querySelectorAll(`g.row.${r}`).forEach(function(o) {
      o.style.display = "block";
    });
  });
  const e = R(t).attr("class").split(" ")[1];
  _t(`g.task.${e}`).each(function(r) {
    var i = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (i == e.replace(/--/g, ""))
      R(this).style("display", "none");
    else if (i != e.replace(/--/g, "")) {
      R(this).style("display", "block");
      var o = (n.indexOf(i) + 1) * 38;
      let a = R(this), u = a.attr("transform"), c = parseFloat(u.split("(")[1].split(",")[0].trim()), s = parseFloat(u.split(",")[1].split(")")[0].trim()), l = s + o;
      a.attr("transform", `translate(${c}, ${s})`).transition().duration(1e3).attr("transform", `translate(${c}, ${l})`).on("start", () => {
        _t(`g.task.${i}`).style("display", "none");
      }).on("end", () => {
        a.style("display", "none"), a.attr("transform", `translate(${c}, ${s})`), _t(`g.task.${i}`).style("display", "block");
      });
    }
  });
}
function ti(t, n) {
  return new Promise((e) => {
    const r = R(t).attr("class").split(" ")[1];
    _t(`g.task:not(.${r})`).each(function(i) {
      var o = i[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (n.includes(o)) {
        R(this).style("display", "block");
        var a = (n.indexOf(o) + 1) * 38;
        let u = R(this), c = u.attr("transform"), s = parseFloat(c.split("(")[1].split(",")[0].trim()), l = parseFloat(c.split(",")[1].split(")")[0].trim()), f = l - a;
        u.transition().duration(1e3).attr("transform", `translate(${s}, ${f})`).on("end", () => {
          _t(`g.${r}`).style("display", "block"), u.style("display", "none"), u.attr("transform", `translate(${s}, ${l})`), n.forEach(function(h) {
            document.querySelectorAll(`.${h}`).forEach(function($) {
              $.style.display = "none";
            });
          }), e();
        });
      }
    });
  });
}
function Tn(t, n) {
  const r = R(t).attr("class"), i = [];
  let o = !1, a = !1;
  return n.selectAll("g.row").each(function(u) {
    const s = R(this).attr("class");
    s == r ? o = !0 : o && s.split(" ")[2] == "timelineheader" ? a = !0 : o && !a && i.push(s.split(" ")[1]);
  }), i;
}
function al() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let n = [];
  _t("g.row.timelineheader text").each(function() {
    if (R(this).text() === "-") {
      const r = this.parentNode, i = Tn(r, R(r.parentNode)), o = i.length * 38;
      let a = ti(r, i).then(() => {
        $n(r, R(r.parentNode), -o), R(this).text("+").style("font-size", "20px");
      });
      n.push(a);
    }
  }), Promise.all(n).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = al;
function sl() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let n = [];
  _t("g.row.timelineheader text").each(function() {
    if (R(this).text() === "+") {
      const r = this.parentNode, i = Tn(r, R(r.parentNode)), o = i.length * 38;
      let a = new Promise((u) => {
        Kr(r, i), $n(r, R(r.parentNode), o), u();
      }).then(() => {
        R(this).text("-").style("font-size", "30px");
      });
      n.push(a);
    }
  }), Promise.all(n).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = sl;
function fl() {
  let t = tl, n = 5, e = 2, r = !1, i = !1, o, a, u = 0, c = on(0), s = on(1), l = on(2), f = on(3);
  function h(D, A) {
    const p = D.select("text"), M = D.select("rect"), g = M.attr("width") - 2 * n, y = s(A);
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
  function $(D, A) {
    D.each(function(p, M) {
      const g = R(this.parentNode);
      f(p) - l(p) ? h(g, p) : d(g, p, A);
    });
  }
  function Y(D) {
    return function(A, p) {
      Pc(this).tween("text", function() {
        return function(M) {
          $(R(this), D);
        };
      });
    };
  }
  function N(D) {
    const A = D.datum(), p = new Set(pi(A, c)), M = new Zr(L), g = Nt(t);
    o = o || [gi(A, l), sr(A, f)], i && (o = ai(o.concat(/* @__PURE__ */ new Date()))), D.each(function(y) {
      const w = a || this.getBoundingClientRect().width, U = p.size * (nl(this) + 4 * n), C = Mr().domain(p).range([0, U]), m = Su().domain(o), O = (r ? Xc : Vc)(C).width(w), P = R(this).selectAll("svg").data([1]).join("svg");
      P.attr("class", "timeline").attr("width", w).attr("height", U + 40);
      const k = P.append("g").attr("transform", "translate(0,20)"), _ = k.append("g").attr("class", "y axis").call(O);
      _.selectAll("text").on("mouseover", function() {
        R(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        R(this).style("text-decoration", "none");
      }).attr("text-anchor", function(H) {
        return H.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(H) {
        return H.startsWith(" •") ? 167 : 332.5;
      }).style("cursor", "pointer").style("font-weight", function(H) {
        return H.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(H, V) {
        const K = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${V.replace(/ • /g, "").replace(" ", "%20")}%22`;
        window.open(K, "_blank");
      }), _.selectAll("g.row").each(function(H) {
        const V = R(this).datum();
        R(this).classed(R(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), V.startsWith(" •") && R(this).classed("timelineheader", !0).append("text").attr("x", 320.5).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), _.selectAll("g.row.timelineheader text").on("click", function(H, V) {
        const nt = R(this).text();
        if (nt === "+") {
          let G = Tn(this.parentNode, _), K = G.length * 38;
          Kr(this.parentNode, G), $n(this.parentNode, _, K), R(this).text() === "+" ? R(this).text("-").style("font-size", "30px") : R(this).text("+");
        } else if (nt === "-") {
          let G = Tn(this.parentNode, _), K = G.length * 38;
          ti(this.parentNode, G).then(() => {
            $n(this.parentNode, _, -K);
          }), R(this).text() === "-" ? R(this).text("+").style("font-size", "20px") : R(this).text("-");
        } else {
          const T = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${V.replace(/ • /g, "").replace(" ", "%20")}%22`;
          window.open(T, "_blank");
        }
      });
      let v = O.range();
      m.range([v[0] + n, v[1] - n]).clamp(!0);
      const S = ke(m), b = k.append("g").attr("class", "x axis").attr("transform", Pt(0, 0)).call(S);
      b.selectAll(".tick text").attr("dy", "-1.5em"), b.selectAll(".tick line").attr("y2", "-5");
      const F = ke(m);
      P.append("g").attr("class", "x axis bottom-axis").attr("transform", Pt(0, U + 20)).call(F).selectAll(".tick line").attr("y2", "5"), _.on("offset", () => {
        v = O.range(), m.range([v[0] + n, v[1] - n]).clamp(!0), S.ticks(Math.min((v[1] - v[0]) / 70, 10)), b.call(S), q.attr("transform", (H) => Pt(m(l(H)), C(c(H)))).selectAll("rect").attr("width", (H) => m(f(H)) - m(l(H)) || e).call((H) => $(H, O)), _.call(O.draw_ticks, m.ticks().map(m));
      }), b.select(".domain").remove(), b.selectAll(".tick line").attr("stroke", "#AAA");
      const B = m.ticks().map(m);
      _.call(O.draw_ticks, B);
      let q = k.selectAll("g.task").data(y);
      q.exit().remove();
      const Z = q.enter().append("g").classed("task", !0);
      Z.each(function(H) {
        const V = c(H).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        R(this).classed(V, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", C.bandwidth() - 2 * n).on("mouseover", M.show).on("mouseout", M.hide).on("click", function(H, V) {
        var nt = String(V[1]), G = nt.replace(" ", "%20"), K = V[2], T = ar(K), E = V[3], W = ar(E), x = "https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22" + G + "%22%20%2Bdate_when%3A%5B" + T + "%20TO%20" + W + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(x, "_blank");
      }).style("fill", Ln(s, g)), Z.append("text").attr("text-anchor", "start").attr("fill", (H) => f(H) - l(H) ? Ln(s, g, il)(H) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", C.bandwidth() / 2).attr("dy", "0.32em").text(s), q = q.merge(Z), q.attr("transform", (H) => Pt(v[0], C(c(H)))).selectAll("rect").attr("width", 0), q.transition().duration(u).attr("transform", (H) => Pt(m(l(H)), C(c(H)))).selectAll("rect").attr("width", (H) => m(f(H)) - m(l(H)) || e).on("start", Y(O)), i && k.append("path").attr("stroke", "red").attr("d", "M" + m(/* @__PURE__ */ new Date()) + ",0.5V" + U);
    }), ol();
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
    return arguments.length ? (u = D, N) : u;
  }, N;
  function L(D, A) {
    const p = Ln($u, me("%Y-%m-%d")), M = `<b>${s(A)}</b><hr style="margin: 2px 0 2px 0">${p(l(A))}`, g = f(A) - l(A) ? ` - ${p(f(A))}<br>${Kc(l(A), f(A))}` : "";
    return M + g;
  }
}
export {
  Pc as active,
  ke as axisBottom,
  cl as axisLeft,
  ul as axisRight,
  yt as color,
  ll as drag,
  Kc as durationFormat,
  ai as extent,
  $u as isoParse,
  pi as map,
  sr as max,
  gi as min,
  Mr as scaleBand,
  is as scaleLinear,
  Nt as scaleOrdinal,
  Su as scaleTime,
  R as select,
  _t as selectAll,
  me as timeFormat,
  fl as timeline,
  Vc as timelineAxisLeft,
  Xc as timelineAxisRight,
  Zr as tooltip
};
