function oe(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ei(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function je(t) {
  let e, n, r;
  t.length !== 2 ? (e = oe, n = (u, c) => oe(t(u), c), r = (u, c) => t(u) - c) : (e = t === oe || t === ei ? t : ni, n = t, r = t);
  function i(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        n(u[f], c) < 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function o(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        n(u[f], c) <= 0 ? s = f + 1 : l = f;
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
function ni() {
  return 0;
}
function ri(t) {
  return t === null ? NaN : +t;
}
const ii = je(oe), oi = ii.right;
je(ri).center;
function ai(t, e) {
  let n, r;
  if (e === void 0)
    for (const i of t)
      i != null && (n === void 0 ? i >= i && (n = r = i) : (n > i && (n = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of t)
      (o = e(o, ++i, t)) != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
  }
  return [n, r];
}
class bn extends Map {
  constructor(e, n = ci) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get($n(this, e));
  }
  has(e) {
    return super.has($n(this, e));
  }
  set(e, n) {
    return super.set(si(this, e), n);
  }
  delete(e) {
    return super.delete(ui(this, e));
  }
}
function $n({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function si({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function ui({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function ci(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const li = Math.sqrt(50), fi = Math.sqrt(10), hi = Math.sqrt(2);
function le(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= li ? 10 : o >= fi ? 5 : o >= hi ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), c = Math.round(e * s), u / s < t && ++u, c / s > e && --c, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), c = Math.round(e / s), u * s < t && ++u, c * s > e && --c), c < u && 0.5 <= n && n < 2 ? le(t, e, n * 2) : [u, c, s];
}
function di(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? le(e, t, n) : le(t, e, n);
  if (!(o >= i)) return [];
  const u = o - i + 1, c = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) c[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) c[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * a;
  return c;
}
function Le(t, e, n) {
  return e = +e, t = +t, n = +n, le(t, e, n)[2];
}
function Pe(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Le(e, t, n) : Le(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function sr(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function gi(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function mi(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
function pi(t, e) {
  if (typeof t[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  if (typeof e != "function") throw new TypeError("mapper is not a function");
  return Array.from(t, (n, r) => e(n, r, t));
}
function yi(t) {
  return t;
}
var De = 1, ae = 2, We = 3, Wt = 4, Tn = 1e-6;
function wi(t) {
  return "translate(" + t + ",0)";
}
function xi(t) {
  return "translate(0," + t + ")";
}
function vi(t) {
  return (e) => +t(e);
}
function _i(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function Mi() {
  return !this.__axis;
}
function tn(t, e) {
  var n = [], r = null, i = null, o = 6, a = 6, u = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, s = t === De || t === Wt ? -1 : 1, l = t === Wt || t === ae ? "x" : "y", f = t === De || t === We ? wi : xi;
  function h(d) {
    var k = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), E = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : yi), L = Math.max(o, 0) + u, N = e.range(), W = +N[0] + c, T = +N[N.length - 1] + c, m = (e.bandwidth ? _i : vi)(e.copy(), c), M = d.selection ? d.selection() : d, g = M.selectAll(".domain").data([null]), p = M.selectAll(".tick").data(k, e).order(), x = p.exit(), Y = p.enter().append("g").attr("class", "tick"), C = p.select("line"), y = p.select("text");
    g = g.merge(g.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), p = p.merge(Y), C = C.merge(Y.append("line").attr("stroke", "currentColor").attr(l + "2", s * o)), y = y.merge(Y.append("text").attr("fill", "currentColor").attr(l, s * L).attr("dy", t === De ? "0em" : t === We ? "0.71em" : "0.32em")), d !== M && (g = g.transition(d), p = p.transition(d), C = C.transition(d), y = y.transition(d), x = x.transition(d).attr("opacity", Tn).attr("transform", function(U) {
      return isFinite(U = m(U)) ? f(U + c) : this.getAttribute("transform");
    }), Y.attr("opacity", Tn).attr("transform", function(U) {
      var O = this.parentNode.__axis;
      return f((O && isFinite(O = O(U)) ? O : m(U)) + c);
    })), x.remove(), g.attr("d", t === Wt || t === ae ? a ? "M" + s * a + "," + W + "H" + c + "V" + T + "H" + s * a : "M" + c + "," + W + "V" + T : a ? "M" + W + "," + s * a + "V" + c + "H" + T + "V" + s * a : "M" + W + "," + c + "H" + T), p.attr("opacity", 1).attr("transform", function(U) {
      return f(m(U) + c);
    }), C.attr(l + "2", s * o), y.attr(l, s * L).text(E), M.filter(Mi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ae ? "start" : t === Wt ? "end" : "middle"), M.each(function() {
      this.__axis = m;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (e = d, h) : e;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), h) : n.slice();
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
  return tn(ae, t);
}
function kn(t) {
  return tn(We, t);
}
function cl(t) {
  return tn(Wt, t);
}
function en(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function ur(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Jt() {
}
var Bt = 0.7, fe = 1 / Bt, Ct = "\\s*([+-]?\\d+)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bi = /^#([0-9a-f]{3,8})$/, $i = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), Ti = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), ki = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Xt}\\)$`), Si = new RegExp(`^rgba\\(${ct},${ct},${ct},${Xt}\\)$`), Ai = new RegExp(`^hsl\\(${Xt},${ct},${ct}\\)$`), Ci = new RegExp(`^hsla\\(${Xt},${ct},${ct},${Xt}\\)$`), Sn = {
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
en(Jt, wt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: An,
  // Deprecated! Use color.formatHex.
  formatHex: An,
  formatHex8: Di,
  formatHsl: Ni,
  formatRgb: Cn,
  toString: Cn
});
function An() {
  return this.rgb().formatHex();
}
function Di() {
  return this.rgb().formatHex8();
}
function Ni() {
  return cr(this).formatHsl();
}
function Cn() {
  return this.rgb().formatRgb();
}
function wt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = bi.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Dn(e) : n === 3 ? new nt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? jt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? jt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = $i.exec(t)) ? new nt(e[1], e[2], e[3], 1) : (e = Ti.exec(t)) ? new nt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ki.exec(t)) ? jt(e[1], e[2], e[3], e[4]) : (e = Si.exec(t)) ? jt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Ai.exec(t)) ? Un(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ci.exec(t)) ? Un(e[1], e[2] / 100, e[3] / 100, e[4]) : Sn.hasOwnProperty(t) ? Dn(Sn[t]) : t === "transparent" ? new nt(NaN, NaN, NaN, 0) : null;
}
function Dn(t) {
  return new nt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function jt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new nt(t, e, n, r);
}
function Fi(t) {
  return t instanceof Jt || (t = wt(t)), t ? (t = t.rgb(), new nt(t.r, t.g, t.b, t.opacity)) : new nt();
}
function ze(t, e, n, r) {
  return arguments.length === 1 ? Fi(t) : new nt(t, e, n, r ?? 1);
}
function nt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
en(nt, ze, ur(Jt, {
  brighter(t) {
    return t = t == null ? fe : Math.pow(fe, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new nt(vt(this.r), vt(this.g), vt(this.b), he(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Nn,
  // Deprecated! Use color.formatHex.
  formatHex: Nn,
  formatHex8: Ui,
  formatRgb: Fn,
  toString: Fn
}));
function Nn() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}`;
}
function Ui() {
  return `#${xt(this.r)}${xt(this.g)}${xt(this.b)}${xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fn() {
  const t = he(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${vt(this.r)}, ${vt(this.g)}, ${vt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function he(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function vt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xt(t) {
  return t = vt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Un(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new at(t, e, n, r);
}
function cr(t) {
  if (t instanceof at) return new at(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = wt(t)), !t) return new at();
  if (t instanceof at) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, u = o - i, c = (o + i) / 2;
  return u ? (e === o ? a = (n - r) / u + (n < r) * 6 : n === o ? a = (r - e) / u + 2 : a = (e - n) / u + 4, u /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new at(a, u, c, t.opacity);
}
function Yi(t, e, n, r) {
  return arguments.length === 1 ? cr(t) : new at(t, e, n, r ?? 1);
}
function at(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
en(at, Yi, ur(Jt, {
  brighter(t) {
    return t = t == null ? fe : Math.pow(fe, t), new at(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new at(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new nt(
      Ne(t >= 240 ? t - 240 : t + 120, i, r),
      Ne(t, i, r),
      Ne(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new at(Yn(this.h), te(this.s), te(this.l), he(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = he(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Yn(this.h)}, ${te(this.s) * 100}%, ${te(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Yn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function te(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ne(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
var Ei = { value: () => {
} };
function nn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new se(n);
}
function se(t) {
  this._ = t;
}
function Hi(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
se.prototype = nn.prototype = {
  constructor: se,
  on: function(t, e) {
    var n = this._, r = Hi(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Oi(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = En(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = En(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new se(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function Oi(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function En(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Ei, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var qe = "http://www.w3.org/1999/xhtml";
const Hn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Te(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Hn.hasOwnProperty(e) ? { space: Hn[e], local: t } : t;
}
function Ii(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === qe && e.documentElement.namespaceURI === qe ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ri(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function lr(t) {
  var e = Te(t);
  return (e.local ? Ri : Ii)(e);
}
function Li() {
}
function rn(t) {
  return t == null ? Li : function() {
    return this.querySelector(t);
  };
}
function Pi(t) {
  typeof t != "function" && (t = rn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, u = r[i] = new Array(a), c, s, l = 0; l < a; ++l)
      (c = o[l]) && (s = t.call(c, c.__data__, l, o)) && ("__data__" in c && (s.__data__ = c.__data__), u[l] = s);
  return new et(r, this._parents);
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
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], u = a.length, c, s = 0; s < u; ++s)
      (c = a[s]) && (r.push(t.call(c, c.__data__, s, a)), i.push(c));
  return new et(r, i);
}
function dr(t) {
  return function() {
    return this.matches(t);
  };
}
function gr(t) {
  return function(e) {
    return e.matches(t);
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
  return this.select(t == null ? Xi : Bi(typeof t == "function" ? t : gr(t)));
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
function Ki(t) {
  return this.selectAll(t == null ? Ji : Qi(typeof t == "function" ? t : gr(t)));
}
function ji(t) {
  typeof t != "function" && (t = dr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, u = r[i] = [], c, s = 0; s < a; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
  return new et(r, this._parents);
}
function mr(t) {
  return new Array(t.length);
}
function to() {
  return new et(this._enter || this._groups.map(mr), this._parents);
}
function de(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
de.prototype = {
  constructor: de,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function eo(t) {
  return function() {
    return t;
  };
}
function no(t, e, n, r, i, o) {
  for (var a = 0, u, c = e.length, s = o.length; a < s; ++a)
    (u = e[a]) ? (u.__data__ = o[a], r[a] = u) : n[a] = new de(t, o[a]);
  for (; a < c; ++a)
    (u = e[a]) && (i[a] = u);
}
function ro(t, e, n, r, i, o, a) {
  var u, c, s = /* @__PURE__ */ new Map(), l = e.length, f = o.length, h = new Array(l), d;
  for (u = 0; u < l; ++u)
    (c = e[u]) && (h[u] = d = a.call(c, c.__data__, u, e) + "", s.has(d) ? i[u] = c : s.set(d, c));
  for (u = 0; u < f; ++u)
    d = a.call(t, o[u], u, o) + "", (c = s.get(d)) ? (r[u] = c, c.__data__ = o[u], s.delete(d)) : n[u] = new de(t, o[u]);
  for (u = 0; u < l; ++u)
    (c = e[u]) && s.get(h[u]) === c && (i[u] = c);
}
function io(t) {
  return t.__data__;
}
function oo(t, e) {
  if (!arguments.length) return Array.from(this, io);
  var n = e ? ro : no, r = this._parents, i = this._groups;
  typeof t != "function" && (t = eo(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
    var l = r[s], f = i[s], h = f.length, d = ao(t.call(l, l && l.__data__, s, r)), k = d.length, E = u[s] = new Array(k), L = a[s] = new Array(k), N = c[s] = new Array(h);
    n(l, f, E, L, N, d, e);
    for (var W = 0, T = 0, m, M; W < k; ++W)
      if (m = E[W]) {
        for (W >= T && (T = W + 1); !(M = L[T]) && ++T < k; ) ;
        m._next = M || null;
      }
  }
  return a = new et(a, r), a._enter = u, a._exit = c, a;
}
function ao(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function so() {
  return new et(this._exit || this._groups.map(mr), this._parents);
}
function uo(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function co(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c)
    for (var s = n[c], l = r[c], f = s.length, h = u[c] = new Array(f), d, k = 0; k < f; ++k)
      (d = s[k] || l[k]) && (h[k] = d);
  for (; c < i; ++c)
    u[c] = n[c];
  return new et(u, this._parents);
}
function lo() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function fo(t) {
  t || (t = ho);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], u = a.length, c = i[o] = new Array(u), s, l = 0; l < u; ++l)
      (s = a[l]) && (c[l] = s);
    c.sort(e);
  }
  return new et(i, this._parents).order();
}
function ho(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function go() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function mo() {
  return Array.from(this);
}
function po() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function yo() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function wo() {
  return !this.node();
}
function xo(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, u; o < a; ++o)
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
function Mo(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function bo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function $o(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function To(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ko(t, e) {
  var n = Te(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? _o : vo : typeof e == "function" ? n.local ? To : $o : n.local ? bo : Mo)(n, e));
}
function pr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function So(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ao(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Co(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Do(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? So : typeof e == "function" ? Co : Ao)(t, e, n ?? "")) : Ft(this.node(), t);
}
function Ft(t, e) {
  return t.style.getPropertyValue(e) || pr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function No(t) {
  return function() {
    delete this[t];
  };
}
function Fo(t, e) {
  return function() {
    this[t] = e;
  };
}
function Uo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Yo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? No : typeof e == "function" ? Uo : Fo)(t, e)) : this.node()[t];
}
function yr(t) {
  return t.trim().split(/^|\s+/);
}
function on(t) {
  return t.classList || new wr(t);
}
function wr(t) {
  this._node = t, this._names = yr(t.getAttribute("class") || "");
}
wr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function xr(t, e) {
  for (var n = on(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function vr(t, e) {
  for (var n = on(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
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
function Oo(t, e) {
  return function() {
    (e.apply(this, arguments) ? xr : vr)(this, t);
  };
}
function Io(t, e) {
  var n = yr(t + "");
  if (arguments.length < 2) {
    for (var r = on(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Oo : e ? Eo : Ho)(n, e));
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
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
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
function Vo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Bo(t) {
  return arguments.length ? this.each(t == null ? zo : (typeof t == "function" ? Vo : qo)(t)) : this.node().innerHTML;
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
  var e = typeof t == "function" ? t : lr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ko() {
  return null;
}
function jo(t, e) {
  var n = typeof t == "function" ? t : lr(t), r = e == null ? Ko : typeof e == "function" ? e : rn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ta() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ea() {
  return this.each(ta);
}
function na() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ra() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ia(t) {
  return this.select(t ? ra : na);
}
function oa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function aa(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function sa(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function ua(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function ca(t, e, n) {
  return function() {
    var r = this.__on, i, o = aa(e);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function la(t, e, n) {
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
  for (u = e ? ca : ua, i = 0; i < o; ++i) this.each(u(r[i], e, n));
  return this;
}
function _r(t, e, n) {
  var r = pr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function fa(t, e) {
  return function() {
    return _r(this, t, e);
  };
}
function ha(t, e) {
  return function() {
    return _r(this, t, e.apply(this, arguments));
  };
}
function da(t, e) {
  return this.each((typeof e == "function" ? ha : fa)(t, e));
}
function* ga() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var an = [null];
function et(t, e) {
  this._groups = t, this._parents = e;
}
function Qt() {
  return new et([[document.documentElement]], an);
}
function ma() {
  return this;
}
et.prototype = Qt.prototype = {
  constructor: et,
  select: Pi,
  selectAll: qi,
  selectChild: Zi,
  selectChildren: Ki,
  filter: ji,
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
  html: Bo,
  raise: Zo,
  lower: Jo,
  append: Qo,
  insert: jo,
  remove: ea,
  clone: ia,
  datum: oa,
  on: la,
  dispatch: da,
  [Symbol.iterator]: ga
};
function R(t) {
  return typeof t == "string" ? new et([[document.querySelector(t)]], [document.documentElement]) : new et([[t]], an);
}
function pa(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function On(t, e) {
  if (t = pa(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
function _t(t) {
  return typeof t == "string" ? new et([document.querySelectorAll(t)], [document.documentElement]) : new et([fr(t)], an);
}
const ya = { passive: !1 }, Zt = { capture: !0, passive: !1 };
function Fe(t) {
  t.stopImmediatePropagation();
}
function Dt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function wa(t) {
  var e = t.document.documentElement, n = R(t).on("dragstart.drag", Dt, Zt);
  "onselectstart" in e ? n.on("selectstart.drag", Dt, Zt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function xa(t, e) {
  var n = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Dt, Zt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ee = (t) => () => t;
function Ve(t, {
  sourceEvent: e,
  subject: n,
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
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
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
Ve.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function va(t) {
  return !t.ctrlKey && !t.button;
}
function _a() {
  return this.parentNode;
}
function Ma(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ba() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ll() {
  var t = va, e = _a, n = Ma, r = ba, i = {}, o = nn("start", "drag", "end"), a = 0, u, c, s, l, f = 0;
  function h(m) {
    m.on("mousedown.drag", d).filter(r).on("touchstart.drag", L).on("touchmove.drag", N, ya).on("touchend.drag touchcancel.drag", W).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(m, M) {
    if (!(l || !t.call(this, m, M))) {
      var g = T(this, e.call(this, m, M), m, M, "mouse");
      g && (R(m.view).on("mousemove.drag", k, Zt).on("mouseup.drag", E, Zt), wa(m.view), Fe(m), s = !1, u = m.clientX, c = m.clientY, g("start", m));
    }
  }
  function k(m) {
    if (Dt(m), !s) {
      var M = m.clientX - u, g = m.clientY - c;
      s = M * M + g * g > f;
    }
    i.mouse("drag", m);
  }
  function E(m) {
    R(m.view).on("mousemove.drag mouseup.drag", null), xa(m.view, s), Dt(m), i.mouse("end", m);
  }
  function L(m, M) {
    if (t.call(this, m, M)) {
      var g = m.changedTouches, p = e.call(this, m, M), x = g.length, Y, C;
      for (Y = 0; Y < x; ++Y)
        (C = T(this, p, m, M, g[Y].identifier, g[Y])) && (Fe(m), C("start", m, g[Y]));
    }
  }
  function N(m) {
    var M = m.changedTouches, g = M.length, p, x;
    for (p = 0; p < g; ++p)
      (x = i[M[p].identifier]) && (Dt(m), x("drag", m, M[p]));
  }
  function W(m) {
    var M = m.changedTouches, g = M.length, p, x;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), p = 0; p < g; ++p)
      (x = i[M[p].identifier]) && (Fe(m), x("end", m, M[p]));
  }
  function T(m, M, g, p, x, Y) {
    var C = o.copy(), y = On(Y || g, M), U, O, S;
    if ((S = n.call(m, new Ve("beforestart", {
      sourceEvent: g,
      target: h,
      identifier: x,
      active: a,
      x: y[0],
      y: y[1],
      dx: 0,
      dy: 0,
      dispatch: C
    }), p)) != null)
      return U = S.x - y[0] || 0, O = S.y - y[1] || 0, function b(_, A, $) {
        var F = y, H;
        switch (_) {
          case "start":
            i[x] = b, H = a++;
            break;
          case "end":
            delete i[x], --a;
          case "drag":
            y = On($ || A, M), H = a;
            break;
        }
        C.call(
          _,
          m,
          new Ve(_, {
            sourceEvent: A,
            subject: S,
            target: h,
            identifier: x,
            active: H,
            x: y[0] + U,
            y: y[1] + O,
            dx: y[0] - F[0],
            dy: y[1] - F[1],
            dispatch: C
          }),
          p
        );
      };
  }
  return h.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : ee(!!m), h) : t;
  }, h.container = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : ee(m), h) : e;
  }, h.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : ee(m), h) : n;
  }, h.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : ee(!!m), h) : r;
  }, h.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? h : m;
  }, h.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, h) : Math.sqrt(f);
  }, h;
}
function ke(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const In = Symbol("implicit");
function Nt() {
  var t = new bn(), e = [], n = [], r = In;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== In) return r;
      t.set(o, a = e.push(o) - 1);
    }
    return n[a % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [], t = new bn();
    for (const a of o)
      t.has(a) || t.set(a, e.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Nt(e, n).unknown(r);
  }, ke.apply(i, arguments), i;
}
function Mr() {
  var t = Nt().unknown(void 0), e = t.domain, n = t.range, r = 0, i = 1, o, a, u = !1, c = 0, s = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = e().length, d = i < r, k = d ? i : r, E = d ? r : i;
    o = (E - k) / Math.max(1, h - c + s * 2), u && (o = Math.floor(o)), k += (E - k - o * (h - c)) * l, a = o * (1 - c), u && (k = Math.round(k), a = Math.round(a));
    var L = mi(h).map(function(N) {
      return k + o * N;
    });
    return n(d ? L.reverse() : L);
  }
  return t.domain = function(h) {
    return arguments.length ? (e(h), f()) : e();
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
    return Mr(e(), [r, i]).round(u).paddingInner(c).paddingOuter(s).align(l);
  }, ke.apply(f(), arguments);
}
const sn = (t) => () => t;
function $a(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ta(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ka(t) {
  return (t = +t) == 1 ? br : function(e, n) {
    return n - e ? Ta(e, n, t) : sn(isNaN(e) ? n : e);
  };
}
function br(t, e) {
  var n = e - t;
  return n ? $a(t, n) : sn(isNaN(t) ? e : t);
}
const ge = function t(e) {
  var n = ka(e);
  function r(i, o) {
    var a = n((i = ze(i)).r, (o = ze(o)).r), u = n(i.g, o.g), c = n(i.b, o.b), s = br(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = u(l), i.b = c(l), i.opacity = s(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Sa(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Aa(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ca(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = un(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Da(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function ot(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Na(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = un(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Be = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ue = new RegExp(Be.source, "g");
function Fa(t) {
  return function() {
    return t;
  };
}
function Ua(t) {
  return function(e) {
    return t(e) + "";
  };
}
function $r(t, e) {
  var n = Be.lastIndex = Ue.lastIndex = 0, r, i, o, a = -1, u = [], c = [];
  for (t = t + "", e = e + ""; (r = Be.exec(t)) && (i = Ue.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, c.push({ i: a, x: ot(r, i) })), n = Ue.lastIndex;
  return n < e.length && (o = e.slice(n), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? c[0] ? Ua(c[0].x) : Fa(e) : (e = c.length, function(s) {
    for (var l = 0, f; l < e; ++l) u[(f = c[l]).i] = f.x(s);
    return u.join("");
  });
}
function un(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? sn(e) : (n === "number" ? ot : n === "string" ? (r = wt(e)) ? (e = r, ge) : $r : e instanceof wt ? ge : e instanceof Date ? Da : Aa(e) ? Sa : Array.isArray(e) ? Ca : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Na : ot)(t, e);
}
function Ya(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Rn = 180 / Math.PI, Xe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Tr(t, e, n, r, i, o) {
  var a, u, c;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, c /= u), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Rn,
    skewX: Math.atan(c) * Rn,
    scaleX: a,
    scaleY: u
  };
}
var ne;
function Ea(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Xe : Tr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ha(t) {
  return t == null || (ne || (ne = document.createElementNS("http://www.w3.org/2000/svg", "g")), ne.setAttribute("transform", t), !(t = ne.transform.baseVal.consolidate())) ? Xe : (t = t.matrix, Tr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function kr(t, e, n, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, l, f, h, d, k) {
    if (s !== f || l !== h) {
      var E = d.push("translate(", null, e, null, n);
      k.push({ i: E - 4, x: ot(s, f) }, { i: E - 2, x: ot(l, h) });
    } else (f || h) && d.push("translate(" + f + e + h + n);
  }
  function a(s, l, f, h) {
    s !== l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: ot(s, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function u(s, l, f, h) {
    s !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: ot(s, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(s, l, f, h, d, k) {
    if (s !== f || l !== h) {
      var E = d.push(i(d) + "scale(", null, ",", null, ")");
      k.push({ i: E - 4, x: ot(s, f) }, { i: E - 2, x: ot(l, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(s, l) {
    var f = [], h = [];
    return s = t(s), l = t(l), o(s.translateX, s.translateY, l.translateX, l.translateY, f, h), a(s.rotate, l.rotate, f, h), u(s.skewX, l.skewX, f, h), c(s.scaleX, s.scaleY, l.scaleX, l.scaleY, f, h), s = l = null, function(d) {
      for (var k = -1, E = h.length, L; ++k < E; ) f[(L = h[k]).i] = L.x(d);
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
var Ln = [0, 1];
function St(t) {
  return t;
}
function Ze(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Ra(isNaN(e) ? NaN : 0.5);
}
function Pa(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Wa(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Ze(i, r), o = n(a, o)) : (r = Ze(r, i), o = n(o, a)), function(u) {
    return o(r(u));
  };
}
function za(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Ze(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(u) {
    var c = oi(t, u, 1, r) - 1;
    return o[c](i[c](u));
  };
}
function Sr(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function qa() {
  var t = Ln, e = Ln, n = un, r, i, o, a = St, u, c, s;
  function l() {
    var h = Math.min(t.length, e.length);
    return a !== St && (a = Pa(t[0], t[h - 1])), u = h > 2 ? za : Wa, c = s = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = u(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((s || (s = u(e, t.map(r), ot)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, La), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), l()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = Ya, l();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : St, l()) : a !== St;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, l()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, l();
  };
}
function Ar() {
  return qa()(St, St);
}
function Va(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function me(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Ut(t) {
  return t = me(Math.abs(t)), t ? t[1] : NaN;
}
function Ba(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(n.substring(i -= u, i + u)), !((c += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Xa(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Za = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pe(t) {
  if (!(e = Za.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new cn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
pe.prototype = cn.prototype;
function cn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
cn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ga(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Cr;
function Ja(t, e) {
  var n = me(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (Cr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + me(t, Math.max(0, e + o - 1))[0];
}
function Pn(t, e) {
  var n = me(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Wn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Va,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Pn(t * 100, e),
  r: Pn,
  s: Ja,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function zn(t) {
  return t;
}
var qn = Array.prototype.map, Vn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Qa(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? zn : Ba(qn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? zn : Xa(qn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(f) {
    f = pe(f);
    var h = f.fill, d = f.align, k = f.sign, E = f.symbol, L = f.zero, N = f.width, W = f.comma, T = f.precision, m = f.trim, M = f.type;
    M === "n" ? (W = !0, M = "g") : Wn[M] || (T === void 0 && (T = 12), m = !0, M = "g"), (L || h === "0" && d === "=") && (L = !0, h = "0", d = "=");
    var g = E === "$" ? n : E === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", p = E === "$" ? r : /[%p]/.test(M) ? a : "", x = Wn[M], Y = /[defgprs%]/.test(M);
    T = T === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function C(y) {
      var U = g, O = p, S, b, _;
      if (M === "c")
        O = x(y) + O, y = "";
      else {
        y = +y;
        var A = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? c : x(Math.abs(y), T), m && (y = Ga(y)), A && +y == 0 && k !== "+" && (A = !1), U = (A ? k === "(" ? k : u : k === "-" || k === "(" ? "" : k) + U, O = (M === "s" ? Vn[8 + Cr / 3] : "") + O + (A && k === "(" ? ")" : ""), Y) {
          for (S = -1, b = y.length; ++S < b; )
            if (_ = y.charCodeAt(S), 48 > _ || _ > 57) {
              O = (_ === 46 ? i + y.slice(S + 1) : y.slice(S)) + O, y = y.slice(0, S);
              break;
            }
        }
      }
      W && !L && (y = e(y, 1 / 0));
      var $ = U.length + y.length + O.length, F = $ < N ? new Array(N - $ + 1).join(h) : "";
      switch (W && L && (y = e(F + y, F.length ? N - O.length : 1 / 0), F = ""), d) {
        case "<":
          y = U + y + O + F;
          break;
        case "=":
          y = U + F + y + O;
          break;
        case "^":
          y = F.slice(0, $ = F.length >> 1) + U + y + O + F.slice($);
          break;
        default:
          y = F + U + y + O;
          break;
      }
      return o(y);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function l(f, h) {
    var d = s((f = pe(f), f.type = "f", f)), k = Math.max(-8, Math.min(8, Math.floor(Ut(h) / 3))) * 3, E = Math.pow(10, -k), L = Vn[8 + k / 3];
    return function(N) {
      return d(E * N) + L;
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var re, Dr, Nr;
Ka({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ka(t) {
  return re = Qa(t), Dr = re.format, Nr = re.formatPrefix, re;
}
function ja(t) {
  return Math.max(0, -Ut(Math.abs(t)));
}
function ts(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ut(e) / 3))) * 3 - Ut(Math.abs(t)));
}
function es(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ut(e) - Ut(t)) + 1;
}
function ns(t, e, n, r) {
  var i = Pe(t, e, n), o;
  switch (r = pe(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = ts(i, a)) && (r.precision = o), Nr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = es(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ja(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Dr(r);
}
function rs(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return di(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return ns(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], u = r[o], c, s, l = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); l-- > 0; ) {
      if (s = Le(a, u, n), s === c)
        return r[i] = a, r[o] = u, e(r);
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
  }, ke.apply(t, arguments), rs(t);
}
function os(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], o = t[r], a;
  return o < i && (a = n, n = r, r = a, a = i, i = o, o = a), t[n] = e.floor(i), t[r] = e.ceil(o), t;
}
const Ye = /* @__PURE__ */ new Date(), Ee = /* @__PURE__ */ new Date();
function G(t, e, n, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), e(o, 1), t(o), o), i.round = (o) => {
    const a = i(o), u = i.ceil(o);
    return o - a < u - o ? a : u;
  }, i.offset = (o, a) => (e(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, u) => {
    const c = [];
    if (o = i.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < a) || !(u > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+o)), e(o, u), t(o);
    while (s < o && o < a);
    return c;
  }, i.filter = (o) => G((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, u) => {
    if (a >= a)
      if (u < 0) for (; ++u <= 0; )
        for (; e(a, -1), !o(a); )
          ;
      else for (; --u >= 0; )
        for (; e(a, 1), !o(a); )
          ;
  }), n && (i.count = (o, a) => (Ye.setTime(+o), Ee.setTime(+a), t(Ye), t(Ee), Math.floor(n(Ye, Ee))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const ye = G(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
ye.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? G((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : ye);
ye.range;
const gt = 1e3, rt = gt * 60, mt = rt * 60, pt = mt * 24, ln = pt * 7, Bn = pt * 30, He = pt * 365, At = G((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * gt);
}, (t, e) => (e - t) / gt, (t) => t.getUTCSeconds());
At.range;
const fn = G((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * gt);
}, (t, e) => {
  t.setTime(+t + e * rt);
}, (t, e) => (e - t) / rt, (t) => t.getMinutes());
fn.range;
const as = G((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * rt);
}, (t, e) => (e - t) / rt, (t) => t.getUTCMinutes());
as.range;
const hn = G((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * gt - t.getMinutes() * rt);
}, (t, e) => {
  t.setTime(+t + e * mt);
}, (t, e) => (e - t) / mt, (t) => t.getHours());
hn.range;
const ss = G((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * mt);
}, (t, e) => (e - t) / mt, (t) => t.getUTCHours());
ss.range;
const Kt = G(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * rt) / pt,
  (t) => t.getDate() - 1
);
Kt.range;
const dn = G((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / pt, (t) => t.getUTCDate() - 1);
dn.range;
const us = G((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / pt, (t) => Math.floor(t / pt));
us.range;
function $t(t) {
  return G((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / ln);
}
const Se = $t(0), we = $t(1), cs = $t(2), ls = $t(3), Yt = $t(4), fs = $t(5), hs = $t(6);
Se.range;
we.range;
cs.range;
ls.range;
Yt.range;
fs.range;
hs.range;
function Tt(t) {
  return G((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / ln);
}
const Fr = Tt(0), xe = Tt(1), ds = Tt(2), gs = Tt(3), Et = Tt(4), ms = Tt(5), ps = Tt(6);
Fr.range;
xe.range;
ds.range;
gs.range;
Et.range;
ms.range;
ps.range;
const gn = G((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
gn.range;
const ys = G((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
ys.range;
const yt = G((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
yt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : G((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
yt.range;
const Mt = G((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
Mt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : G((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
Mt.range;
function ws(t, e, n, r, i, o) {
  const a = [
    [At, 1, gt],
    [At, 5, 5 * gt],
    [At, 15, 15 * gt],
    [At, 30, 30 * gt],
    [o, 1, rt],
    [o, 5, 5 * rt],
    [o, 15, 15 * rt],
    [o, 30, 30 * rt],
    [i, 1, mt],
    [i, 3, 3 * mt],
    [i, 6, 6 * mt],
    [i, 12, 12 * mt],
    [r, 1, pt],
    [r, 2, 2 * pt],
    [n, 1, ln],
    [e, 1, Bn],
    [e, 3, 3 * Bn],
    [t, 1, He]
  ];
  function u(s, l, f) {
    const h = l < s;
    h && ([s, l] = [l, s]);
    const d = f && typeof f.range == "function" ? f : c(s, l, f), k = d ? d.range(s, +l + 1) : [];
    return h ? k.reverse() : k;
  }
  function c(s, l, f) {
    const h = Math.abs(l - s) / f, d = je(([, , L]) => L).right(a, h);
    if (d === a.length) return t.every(Pe(s / He, l / He, f));
    if (d === 0) return ye.every(Math.max(Pe(s, l, f), 1));
    const [k, E] = a[h / a[d - 1][2] < a[d][2] / h ? d - 1 : d];
    return k.every(E);
  }
  return [u, c];
}
const [xs, vs] = ws(yt, gn, Se, Kt, hn, fn);
function Oe(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Ie(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ot(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function _s(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, u = t.months, c = t.shortMonths, s = It(i), l = Rt(i), f = It(o), h = Rt(o), d = It(a), k = Rt(a), E = It(u), L = Rt(u), N = It(c), W = Rt(c), T = {
    a: A,
    A: $,
    b: F,
    B: H,
    c: null,
    d: Kn,
    e: Kn,
    f: qs,
    g: tu,
    G: nu,
    H: Ps,
    I: Ws,
    j: zs,
    L: Ur,
    m: Vs,
    M: Bs,
    p: P,
    q: B,
    Q: er,
    s: nr,
    S: Xs,
    u: Zs,
    U: Gs,
    V: Js,
    w: Qs,
    W: Ks,
    x: null,
    X: null,
    y: js,
    Y: eu,
    Z: ru,
    "%": tr
  }, m = {
    a: X,
    A: Z,
    b: K,
    B: ut,
    c: null,
    d: jn,
    e: jn,
    f: su,
    g: yu,
    G: xu,
    H: iu,
    I: ou,
    j: au,
    L: Er,
    m: uu,
    M: cu,
    p: Q,
    q: it,
    Q: er,
    s: nr,
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
    A: y,
    b: U,
    B: O,
    c: S,
    d: Jn,
    e: Jn,
    f: Os,
    g: Gn,
    G: Zn,
    H: Qn,
    I: Qn,
    j: Us,
    L: Hs,
    m: Fs,
    M: Ys,
    p: Y,
    q: Ns,
    Q: Rs,
    s: Ls,
    S: Es,
    u: ks,
    U: Ss,
    V: As,
    w: Ts,
    W: Cs,
    x: b,
    X: _,
    y: Gn,
    Y: Zn,
    Z: Ds,
    "%": Is
  };
  T.x = g(n, T), T.X = g(r, T), T.c = g(e, T), m.x = g(n, m), m.X = g(r, m), m.c = g(e, m);
  function g(v, D) {
    return function(I) {
      var w = [], V = -1, z = 0, j = v.length, tt, ht, Mn;
      for (I instanceof Date || (I = /* @__PURE__ */ new Date(+I)); ++V < j; )
        v.charCodeAt(V) === 37 && (w.push(v.slice(z, V)), (ht = Xn[tt = v.charAt(++V)]) != null ? tt = v.charAt(++V) : ht = tt === "e" ? " " : "0", (Mn = D[tt]) && (tt = Mn(I, ht)), w.push(tt), z = V + 1);
      return w.push(v.slice(z, V)), w.join("");
    };
  }
  function p(v, D) {
    return function(I) {
      var w = Ot(1900, void 0, 1), V = x(w, v, I += "", 0), z, j;
      if (V != I.length) return null;
      if ("Q" in w) return new Date(w.Q);
      if ("s" in w) return new Date(w.s * 1e3 + ("L" in w ? w.L : 0));
      if (D && !("Z" in w) && (w.Z = 0), "p" in w && (w.H = w.H % 12 + w.p * 12), w.m === void 0 && (w.m = "q" in w ? w.q : 0), "V" in w) {
        if (w.V < 1 || w.V > 53) return null;
        "w" in w || (w.w = 1), "Z" in w ? (z = Ie(Ot(w.y, 0, 1)), j = z.getUTCDay(), z = j > 4 || j === 0 ? xe.ceil(z) : xe(z), z = dn.offset(z, (w.V - 1) * 7), w.y = z.getUTCFullYear(), w.m = z.getUTCMonth(), w.d = z.getUTCDate() + (w.w + 6) % 7) : (z = Oe(Ot(w.y, 0, 1)), j = z.getDay(), z = j > 4 || j === 0 ? we.ceil(z) : we(z), z = Kt.offset(z, (w.V - 1) * 7), w.y = z.getFullYear(), w.m = z.getMonth(), w.d = z.getDate() + (w.w + 6) % 7);
      } else ("W" in w || "U" in w) && ("w" in w || (w.w = "u" in w ? w.u % 7 : "W" in w ? 1 : 0), j = "Z" in w ? Ie(Ot(w.y, 0, 1)).getUTCDay() : Oe(Ot(w.y, 0, 1)).getDay(), w.m = 0, w.d = "W" in w ? (w.w + 6) % 7 + w.W * 7 - (j + 5) % 7 : w.w + w.U * 7 - (j + 6) % 7);
      return "Z" in w ? (w.H += w.Z / 100 | 0, w.M += w.Z % 100, Ie(w)) : Oe(w);
    };
  }
  function x(v, D, I, w) {
    for (var V = 0, z = D.length, j = I.length, tt, ht; V < z; ) {
      if (w >= j) return -1;
      if (tt = D.charCodeAt(V++), tt === 37) {
        if (tt = D.charAt(V++), ht = M[tt in Xn ? D.charAt(V++) : tt], !ht || (w = ht(v, I, w)) < 0) return -1;
      } else if (tt != I.charCodeAt(w++))
        return -1;
    }
    return w;
  }
  function Y(v, D, I) {
    var w = s.exec(D.slice(I));
    return w ? (v.p = l.get(w[0].toLowerCase()), I + w[0].length) : -1;
  }
  function C(v, D, I) {
    var w = d.exec(D.slice(I));
    return w ? (v.w = k.get(w[0].toLowerCase()), I + w[0].length) : -1;
  }
  function y(v, D, I) {
    var w = f.exec(D.slice(I));
    return w ? (v.w = h.get(w[0].toLowerCase()), I + w[0].length) : -1;
  }
  function U(v, D, I) {
    var w = N.exec(D.slice(I));
    return w ? (v.m = W.get(w[0].toLowerCase()), I + w[0].length) : -1;
  }
  function O(v, D, I) {
    var w = E.exec(D.slice(I));
    return w ? (v.m = L.get(w[0].toLowerCase()), I + w[0].length) : -1;
  }
  function S(v, D, I) {
    return x(v, e, D, I);
  }
  function b(v, D, I) {
    return x(v, n, D, I);
  }
  function _(v, D, I) {
    return x(v, r, D, I);
  }
  function A(v) {
    return a[v.getDay()];
  }
  function $(v) {
    return o[v.getDay()];
  }
  function F(v) {
    return c[v.getMonth()];
  }
  function H(v) {
    return u[v.getMonth()];
  }
  function P(v) {
    return i[+(v.getHours() >= 12)];
  }
  function B(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  function X(v) {
    return a[v.getUTCDay()];
  }
  function Z(v) {
    return o[v.getUTCDay()];
  }
  function K(v) {
    return c[v.getUTCMonth()];
  }
  function ut(v) {
    return u[v.getUTCMonth()];
  }
  function Q(v) {
    return i[+(v.getUTCHours() >= 12)];
  }
  function it(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return {
    format: function(v) {
      var D = g(v += "", T);
      return D.toString = function() {
        return v;
      }, D;
    },
    parse: function(v) {
      var D = p(v += "", !1);
      return D.toString = function() {
        return v;
      }, D;
    },
    utcFormat: function(v) {
      var D = g(v += "", m);
      return D.toString = function() {
        return v;
      }, D;
    },
    utcParse: function(v) {
      var D = p(v += "", !0);
      return D.toString = function() {
        return v;
      }, D;
    }
  };
}
var Xn = { "-": "", _: " ", 0: "0" }, J = /^\s*\d+/, Ms = /^%/, bs = /[\\^$*+?|[\]().{}]/g;
function q(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
}
function $s(t) {
  return t.replace(bs, "\\$&");
}
function It(t) {
  return new RegExp("^(?:" + t.map($s).join("|") + ")", "i");
}
function Rt(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function Ts(t, e, n) {
  var r = J.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function ks(t, e, n) {
  var r = J.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Ss(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function As(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Cs(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function Zn(t, e, n) {
  var r = J.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Gn(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Ds(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ns(t, e, n) {
  var r = J.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Fs(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function Jn(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Us(t, e, n) {
  var r = J.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function Qn(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Ys(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Es(t, e, n) {
  var r = J.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Hs(t, e, n) {
  var r = J.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Os(t, e, n) {
  var r = J.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Is(t, e, n) {
  var r = Ms.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Rs(t, e, n) {
  var r = J.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Ls(t, e, n) {
  var r = J.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function Kn(t, e) {
  return q(t.getDate(), e, 2);
}
function Ps(t, e) {
  return q(t.getHours(), e, 2);
}
function Ws(t, e) {
  return q(t.getHours() % 12 || 12, e, 2);
}
function zs(t, e) {
  return q(1 + Kt.count(yt(t), t), e, 3);
}
function Ur(t, e) {
  return q(t.getMilliseconds(), e, 3);
}
function qs(t, e) {
  return Ur(t, e) + "000";
}
function Vs(t, e) {
  return q(t.getMonth() + 1, e, 2);
}
function Bs(t, e) {
  return q(t.getMinutes(), e, 2);
}
function Xs(t, e) {
  return q(t.getSeconds(), e, 2);
}
function Zs(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Gs(t, e) {
  return q(Se.count(yt(t) - 1, t), e, 2);
}
function Yr(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t);
}
function Js(t, e) {
  return t = Yr(t), q(Yt.count(yt(t), t) + (yt(t).getDay() === 4), e, 2);
}
function Qs(t) {
  return t.getDay();
}
function Ks(t, e) {
  return q(we.count(yt(t) - 1, t), e, 2);
}
function js(t, e) {
  return q(t.getFullYear() % 100, e, 2);
}
function tu(t, e) {
  return t = Yr(t), q(t.getFullYear() % 100, e, 2);
}
function eu(t, e) {
  return q(t.getFullYear() % 1e4, e, 4);
}
function nu(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t), q(t.getFullYear() % 1e4, e, 4);
}
function ru(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + q(e / 60 | 0, "0", 2) + q(e % 60, "0", 2);
}
function jn(t, e) {
  return q(t.getUTCDate(), e, 2);
}
function iu(t, e) {
  return q(t.getUTCHours(), e, 2);
}
function ou(t, e) {
  return q(t.getUTCHours() % 12 || 12, e, 2);
}
function au(t, e) {
  return q(1 + dn.count(Mt(t), t), e, 3);
}
function Er(t, e) {
  return q(t.getUTCMilliseconds(), e, 3);
}
function su(t, e) {
  return Er(t, e) + "000";
}
function uu(t, e) {
  return q(t.getUTCMonth() + 1, e, 2);
}
function cu(t, e) {
  return q(t.getUTCMinutes(), e, 2);
}
function lu(t, e) {
  return q(t.getUTCSeconds(), e, 2);
}
function fu(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function hu(t, e) {
  return q(Fr.count(Mt(t) - 1, t), e, 2);
}
function Hr(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Et(t) : Et.ceil(t);
}
function du(t, e) {
  return t = Hr(t), q(Et.count(Mt(t), t) + (Mt(t).getUTCDay() === 4), e, 2);
}
function gu(t) {
  return t.getUTCDay();
}
function mu(t, e) {
  return q(xe.count(Mt(t) - 1, t), e, 2);
}
function pu(t, e) {
  return q(t.getUTCFullYear() % 100, e, 2);
}
function yu(t, e) {
  return t = Hr(t), q(t.getUTCFullYear() % 100, e, 2);
}
function wu(t, e) {
  return q(t.getUTCFullYear() % 1e4, e, 4);
}
function xu(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Et(t) : Et.ceil(t), q(t.getUTCFullYear() % 1e4, e, 4);
}
function vu() {
  return "+0000";
}
function tr() {
  return "%";
}
function er(t) {
  return +t;
}
function nr(t) {
  return Math.floor(+t / 1e3);
}
var kt, mn, Or, Ir;
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
  return kt = _s(t), mn = kt.format, kt.parse, Or = kt.utcFormat, Ir = kt.utcParse, kt;
}
var Rr = "%Y-%m-%dT%H:%M:%S.%LZ";
function Mu(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Or(Rr);
function bu(t) {
  var e = new Date(t);
  return isNaN(e) ? null : e;
}
var $u = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? bu : Ir(Rr);
function Tu(t) {
  return new Date(t);
}
function ku(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Lr(t, e, n, r, i, o, a, u, c, s) {
  var l = Ar(), f = l.invert, h = l.domain, d = s(".%L"), k = s(":%S"), E = s("%I:%M"), L = s("%I %p"), N = s("%a %d"), W = s("%b %d"), T = s("%B"), m = s("%Y");
  function M(g) {
    return (c(g) < g ? d : u(g) < g ? k : a(g) < g ? E : o(g) < g ? L : r(g) < g ? i(g) < g ? N : W : n(g) < g ? T : m)(g);
  }
  return l.invert = function(g) {
    return new Date(f(g));
  }, l.domain = function(g) {
    return arguments.length ? h(Array.from(g, ku)) : h().map(Tu);
  }, l.ticks = function(g) {
    var p = h();
    return t(p[0], p[p.length - 1], g ?? 10);
  }, l.tickFormat = function(g, p) {
    return p == null ? M : s(p);
  }, l.nice = function(g) {
    var p = h();
    return (!g || typeof g.range != "function") && (g = e(p[0], p[p.length - 1], g ?? 10)), g ? h(os(p, g)) : l;
  }, l.copy = function() {
    return Sr(l, Lr(t, e, n, r, i, o, a, u, c, s));
  }, l;
}
function Su() {
  return ke.apply(Lr(xs, vs, yt, gn, Se, Kt, hn, fn, At, mn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ht = 0, zt = 0, Lt = 0, Pr = 1e3, ve, qt, _e = 0, bt = 0, Ae = 0, Gt = typeof performance == "object" && performance.now ? performance : Date, Wr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pn() {
  return bt || (Wr(Au), bt = Gt.now() + Ae);
}
function Au() {
  bt = 0;
}
function Me() {
  this._call = this._time = this._next = null;
}
Me.prototype = zr.prototype = {
  constructor: Me,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? pn() : +n) + (e == null ? 0 : +e), !this._next && qt !== this && (qt ? qt._next = this : ve = this, qt = this), this._call = t, this._time = n, Ge();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ge());
  }
};
function zr(t, e, n) {
  var r = new Me();
  return r.restart(t, e, n), r;
}
function Cu() {
  pn(), ++Ht;
  for (var t = ve, e; t; )
    (e = bt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ht;
}
function rr() {
  bt = (_e = Gt.now()) + Ae, Ht = zt = 0;
  try {
    Cu();
  } finally {
    Ht = 0, Nu(), bt = 0;
  }
}
function Du() {
  var t = Gt.now(), e = t - _e;
  e > Pr && (Ae -= e, _e = t);
}
function Nu() {
  for (var t, e = ve, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ve = n);
  qt = t, Ge(r);
}
function Ge(t) {
  if (!Ht) {
    zt && (zt = clearTimeout(zt));
    var e = t - bt;
    e > 24 ? (t < 1 / 0 && (zt = setTimeout(rr, t - Gt.now() - Ae)), Lt && (Lt = clearInterval(Lt))) : (Lt || (_e = Gt.now(), Lt = setInterval(Du, Pr)), Ht = 1, Wr(rr));
  }
}
function ir(t, e, n) {
  var r = new Me();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Fu = nn("start", "end", "cancel", "interrupt"), Uu = [], qr = 0, Je = 1, Qe = 2, ue = 3, or = 4, Ke = 5, ce = 6;
function Ce(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Yu(t, n, {
    name: e,
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
function yn(t, e) {
  var n = st(t, e);
  if (n.state > qr) throw new Error("too late; already scheduled");
  return n;
}
function ft(t, e) {
  var n = st(t, e);
  if (n.state > ue) throw new Error("too late; already running");
  return n;
}
function st(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Yu(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = zr(o, 0, n.time);
  function o(s) {
    n.state = Je, n.timer.restart(a, n.delay, n.time), n.delay <= s && a(s - n.delay);
  }
  function a(s) {
    var l, f, h, d;
    if (n.state !== Je) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === ue) return ir(a);
        d.state === or ? (d.state = ce, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = ce, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (ir(function() {
      n.state === ue && (n.state = or, n.timer.restart(u, n.delay, n.time), u(s));
    }), n.state = Qe, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Qe) {
      for (n.state = ue, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function u(s) {
    for (var l = s < n.duration ? n.ease.call(null, s / n.duration) : (n.timer.restart(c), n.state = Ke, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    n.state === Ke && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = ce, n.timer.stop(), delete r[e];
    for (var s in r) return;
    delete t.__transition;
  }
}
function Eu(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Qe && r.state < Ke, r.state = ce, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Hu(t) {
  return this.each(function() {
    Eu(this, t);
  });
}
function Ou(t, e) {
  var n, r;
  return function() {
    var i = ft(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Iu(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = ft(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: e, value: n }, c = 0, s = i.length; c < s; ++c)
        if (i[c].name === e) {
          i[c] = u;
          break;
        }
      c === s && i.push(u);
    }
    o.tween = i;
  };
}
function Ru(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = st(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ou : Iu)(n, t, e));
}
function wn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ft(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[e];
  };
}
function Vr(t, e) {
  var n;
  return (typeof e == "number" ? ot : e instanceof wt ? ge : (n = wt(e)) ? (e = n, ge) : $r)(t, e);
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
function Wu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function zu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function qu(t, e, n) {
  var r, i, o;
  return function() {
    var a, u = n(this), c;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = u + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, u)));
  };
}
function Vu(t, e, n) {
  var r, i, o;
  return function() {
    var a, u = n(this), c;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = u + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, u)));
  };
}
function Bu(t, e) {
  var n = Te(t), r = n === "transform" ? Ia : Vr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Vu : qu)(n, r, wn(this, "attr." + t, e)) : e == null ? (n.local ? Pu : Lu)(n) : (n.local ? zu : Wu)(n, r, e));
}
function Xu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Zu(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Gu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Zu(t, o)), n;
  }
  return i._value = e, i;
}
function Ju(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Xu(t, o)), n;
  }
  return i._value = e, i;
}
function Qu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Te(t);
  return this.tween(n, (r.local ? Gu : Ju)(r, e));
}
function Ku(t, e) {
  return function() {
    yn(this, t).delay = +e.apply(this, arguments);
  };
}
function ju(t, e) {
  return e = +e, function() {
    yn(this, t).delay = e;
  };
}
function tc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ku : ju)(e, t)) : st(this.node(), e).delay;
}
function ec(t, e) {
  return function() {
    ft(this, t).duration = +e.apply(this, arguments);
  };
}
function nc(t, e) {
  return e = +e, function() {
    ft(this, t).duration = e;
  };
}
function rc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ec : nc)(e, t)) : st(this.node(), e).duration;
}
function ic(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ft(this, t).ease = e;
  };
}
function oc(t) {
  var e = this._id;
  return arguments.length ? this.each(ic(e, t)) : st(this.node(), e).ease;
}
function ac(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ft(this, t).ease = n;
  };
}
function sc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ac(this._id, t));
}
function uc(t) {
  typeof t != "function" && (t = dr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, u = r[i] = [], c, s = 0; s < a; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
  return new lt(r, this._parents, this._name, this._id);
}
function cc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var c = e[u], s = n[u], l = c.length, f = a[u] = new Array(l), h, d = 0; d < l; ++d)
      (h = c[d] || s[d]) && (f[d] = h);
  for (; u < r; ++u)
    a[u] = e[u];
  return new lt(a, this._parents, this._name, this._id);
}
function lc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function fc(t, e, n) {
  var r, i, o = lc(e) ? yn : ft;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(e, n), a.on = i;
  };
}
function hc(t, e) {
  var n = this._id;
  return arguments.length < 2 ? st(this.node(), n).on.on(t) : this.each(fc(n, t, e));
}
function dc(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function gc() {
  return this.on("end.remove", dc(this._id));
}
function mc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = rn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], c = u.length, s = o[a] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = u[h]) && (f = t.call(l, l.__data__, h, u)) && ("__data__" in l && (f.__data__ = l.__data__), s[h] = f, Ce(s[h], e, n, h, s, st(l, n)));
  return new lt(o, this._parents, e, n);
}
function pc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = hr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var c = r[u], s = c.length, l, f = 0; f < s; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), d, k = st(l, n), E = 0, L = h.length; E < L; ++E)
          (d = h[E]) && Ce(d, e, n, E, h, k);
        o.push(h), a.push(l);
      }
  return new lt(o, a, e, n);
}
var yc = Qt.prototype.constructor;
function wc() {
  return new yc(this._groups, this._parents);
}
function xc(t, e) {
  var n, r, i;
  return function() {
    var o = Ft(this, t), a = (this.style.removeProperty(t), Ft(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function Br(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vc(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Ft(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function _c(t, e, n) {
  var r, i, o;
  return function() {
    var a = Ft(this, t), u = n(this), c = u + "";
    return u == null && (c = u = (this.style.removeProperty(t), Ft(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, u));
  };
}
function Mc(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, u;
  return function() {
    var c = ft(this, t), s = c.on, l = c.value[o] == null ? u || (u = Br(e)) : void 0;
    (s !== n || i !== l) && (r = (n = s).copy()).on(a, i = l), c.on = r;
  };
}
function bc(t, e, n) {
  var r = (t += "") == "transform" ? Oa : Vr;
  return e == null ? this.styleTween(t, xc(t, r)).on("end.style." + t, Br(t)) : typeof e == "function" ? this.styleTween(t, _c(t, r, wn(this, "style." + t, e))).each(Mc(this._id, t)) : this.styleTween(t, vc(t, r, e), n).on("end.style." + t, null);
}
function $c(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Tc(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && $c(t, a, n)), r;
  }
  return o._value = e, o;
}
function kc(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Tc(t, e, n ?? ""));
}
function Sc(t) {
  return function() {
    this.textContent = t;
  };
}
function Ac(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Cc(t) {
  return this.tween("text", typeof t == "function" ? Ac(wn(this, "text", t)) : Sc(t == null ? "" : t + ""));
}
function Dc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Nc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Dc(i)), e;
  }
  return r._value = t, r;
}
function Fc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Nc(t));
}
function Uc() {
  for (var t = this._name, e = this._id, n = Xr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
      if (c = a[s]) {
        var l = st(c, e);
        Ce(c, t, n, s, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new lt(r, this._parents, t, n);
}
function Yc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var u = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var s = ft(this, r), l = s.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(u), e._.interrupt.push(u), e._.end.push(c)), s.on = e;
    }), i === 0 && o();
  });
}
var Ec = 0;
function lt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Xr() {
  return ++Ec;
}
var dt = Qt.prototype;
lt.prototype = {
  constructor: lt,
  select: mc,
  selectAll: pc,
  selectChild: dt.selectChild,
  selectChildren: dt.selectChildren,
  filter: uc,
  merge: cc,
  selection: wc,
  transition: Uc,
  call: dt.call,
  nodes: dt.nodes,
  node: dt.node,
  size: dt.size,
  empty: dt.empty,
  each: dt.each,
  on: hc,
  attr: Bu,
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
  [Symbol.iterator]: dt[Symbol.iterator]
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
function Ic(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Rc(t) {
  var e, n;
  t instanceof lt ? (e = t._id, t = t._name) : (e = Xr(), (n = Oc).time = pn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
      (c = a[s]) && Ce(c, t, e, s, a, n || Ic(c, e));
  return new lt(r, this._parents, t, e);
}
Qt.prototype.interrupt = Hu;
Qt.prototype.transition = Rc;
var Lc = [null];
function Pc(t, e) {
  var n = t.__transition, r, i;
  if (n) {
    e = e == null ? null : e + "";
    for (i in n)
      if ((r = n[i]).state > Je && r.name === e)
        return new lt([[t]], Lc, e, +i);
  }
  return null;
}
const Wc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function Zr(t) {
  R("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Wc);
  const e = R("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function zc(t) {
  return sr(t.nodes().map((e) => e.getComputedTextLength()));
}
function qc(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const Vt = 1, Vc = 2;
function Gr(t, e) {
  let n = ["#FFF", "#FFF"], r = Nt(n), i = 5, o, a = "#AAA", u = 40, c = 3e3, s;
  function l(f) {
    let h = e.domain(), d = Zr((M) => M), k = Nt(n), E = Nt(n.reverse()), L = qc(u), N = f.selectAll(".row").data(h, e).order(), W = N.enter().append("g").attr("class", "row"), T = N.exit(), m = N.select("text");
    N = N.merge(W).attr("transform", (M) => "translate(0," + e(M) + ")"), T.remove(), W.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", k), W.append("path").attr("stroke", E), m = m.merge(
      W.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(M, g) {
        R(this).text() != g && d.show(g);
      }).on("mouseout", d.hide)
    ).text(L), s === void 0 && (s = zc(m) + 2 * i, s = t === Vt ? c - s : s), o = t === Vt ? [0, s] : [s, c], m.attr("text-anchor", t === Vt ? "start" : "end").attr("dx", t === Vt ? i : -i).attr("x", s), f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (s + 0.5) + ",0.5V" + e.range()[1]);
  }
  return l.draw_ticks = function(f, h) {
    f.selectAll(".row").select("path").attr("d", h.map((d) => "M" + d + ",1v" + (e.bandwidth() - 1)).join(""));
  }, l.scale = function(f) {
    return arguments.length ? (e = f, l) : e;
  }, l.width = function(f) {
    return arguments.length ? (c = f, l) : c;
  }, l.colors = function(f) {
    return arguments.length ? (n = f, l) : n;
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
function Bc(t) {
  return Gr(Vc, t);
}
function Xc(t) {
  return Gr(Vt, t);
}
var xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jr = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(xn, function() {
    var n = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", u = "minute", c = "hour", s = "day", l = "week", f = "month", h = "quarter", d = "year", k = "date", E = "Invalid Date", L = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, W = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
      var b = ["th", "st", "nd", "rd"], _ = S % 100;
      return "[" + S + (b[(_ - 20) % 10] || b[_] || b[0]) + "]";
    } }, T = function(S, b, _) {
      var A = String(S);
      return !A || A.length >= b ? S : "" + Array(b + 1 - A.length).join(_) + S;
    }, m = { s: T, z: function(S) {
      var b = -S.utcOffset(), _ = Math.abs(b), A = Math.floor(_ / 60), $ = _ % 60;
      return (b <= 0 ? "+" : "-") + T(A, 2, "0") + ":" + T($, 2, "0");
    }, m: function S(b, _) {
      if (b.date() < _.date()) return -S(_, b);
      var A = 12 * (_.year() - b.year()) + (_.month() - b.month()), $ = b.clone().add(A, f), F = _ - $ < 0, H = b.clone().add(A + (F ? -1 : 1), f);
      return +(-(A + (_ - $) / (F ? $ - H : H - $)) || 0);
    }, a: function(S) {
      return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
    }, p: function(S) {
      return { M: f, y: d, w: l, d: s, D: k, h: c, m: u, s: a, ms: o, Q: h }[S] || String(S || "").toLowerCase().replace(/s$/, "");
    }, u: function(S) {
      return S === void 0;
    } }, M = "en", g = {};
    g[M] = W;
    var p = "$isDayjsObject", x = function(S) {
      return S instanceof U || !(!S || !S[p]);
    }, Y = function S(b, _, A) {
      var $;
      if (!b) return M;
      if (typeof b == "string") {
        var F = b.toLowerCase();
        g[F] && ($ = F), _ && (g[F] = _, $ = F);
        var H = b.split("-");
        if (!$ && H.length > 1) return S(H[0]);
      } else {
        var P = b.name;
        g[P] = b, $ = P;
      }
      return !A && $ && (M = $), $ || !A && M;
    }, C = function(S, b) {
      if (x(S)) return S.clone();
      var _ = typeof b == "object" ? b : {};
      return _.date = S, _.args = arguments, new U(_);
    }, y = m;
    y.l = Y, y.i = x, y.w = function(S, b) {
      return C(S, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var U = function() {
      function S(_) {
        this.$L = Y(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[p] = !0;
      }
      var b = S.prototype;
      return b.parse = function(_) {
        this.$d = function(A) {
          var $ = A.date, F = A.utc;
          if ($ === null) return /* @__PURE__ */ new Date(NaN);
          if (y.u($)) return /* @__PURE__ */ new Date();
          if ($ instanceof Date) return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var H = $.match(L);
            if (H) {
              var P = H[2] - 1 || 0, B = (H[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(H[1], P, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, B)) : new Date(H[1], P, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, B);
            }
          }
          return new Date($);
        }(_), this.init();
      }, b.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, b.$utils = function() {
        return y;
      }, b.isValid = function() {
        return this.$d.toString() !== E;
      }, b.isSame = function(_, A) {
        var $ = C(_);
        return this.startOf(A) <= $ && $ <= this.endOf(A);
      }, b.isAfter = function(_, A) {
        return C(_) < this.startOf(A);
      }, b.isBefore = function(_, A) {
        return this.endOf(A) < C(_);
      }, b.$g = function(_, A, $) {
        return y.u(_) ? this[A] : this.set($, _);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(_, A) {
        var $ = this, F = !!y.u(A) || A, H = y.p(_), P = function(v, D) {
          var I = y.w($.$u ? Date.UTC($.$y, D, v) : new Date($.$y, D, v), $);
          return F ? I : I.endOf(s);
        }, B = function(v, D) {
          return y.w($.toDate()[v].apply($.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)), $);
        }, X = this.$W, Z = this.$M, K = this.$D, ut = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case d:
            return F ? P(1, 0) : P(31, 11);
          case f:
            return F ? P(1, Z) : P(0, Z + 1);
          case l:
            var Q = this.$locale().weekStart || 0, it = (X < Q ? X + 7 : X) - Q;
            return P(F ? K - it : K + (6 - it), Z);
          case s:
          case k:
            return B(ut + "Hours", 0);
          case c:
            return B(ut + "Minutes", 1);
          case u:
            return B(ut + "Seconds", 2);
          case a:
            return B(ut + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(_) {
        return this.startOf(_, !1);
      }, b.$set = function(_, A) {
        var $, F = y.p(_), H = "set" + (this.$u ? "UTC" : ""), P = ($ = {}, $[s] = H + "Date", $[k] = H + "Date", $[f] = H + "Month", $[d] = H + "FullYear", $[c] = H + "Hours", $[u] = H + "Minutes", $[a] = H + "Seconds", $[o] = H + "Milliseconds", $)[F], B = F === s ? this.$D + (A - this.$W) : A;
        if (F === f || F === d) {
          var X = this.clone().set(k, 1);
          X.$d[P](B), X.init(), this.$d = X.set(k, Math.min(this.$D, X.daysInMonth())).$d;
        } else P && this.$d[P](B);
        return this.init(), this;
      }, b.set = function(_, A) {
        return this.clone().$set(_, A);
      }, b.get = function(_) {
        return this[y.p(_)]();
      }, b.add = function(_, A) {
        var $, F = this;
        _ = Number(_);
        var H = y.p(A), P = function(Z) {
          var K = C(F);
          return y.w(K.date(K.date() + Math.round(Z * _)), F);
        };
        if (H === f) return this.set(f, this.$M + _);
        if (H === d) return this.set(d, this.$y + _);
        if (H === s) return P(1);
        if (H === l) return P(7);
        var B = ($ = {}, $[u] = r, $[c] = i, $[a] = n, $)[H] || 1, X = this.$d.getTime() + _ * B;
        return y.w(X, this);
      }, b.subtract = function(_, A) {
        return this.add(-1 * _, A);
      }, b.format = function(_) {
        var A = this, $ = this.$locale();
        if (!this.isValid()) return $.invalidDate || E;
        var F = _ || "YYYY-MM-DDTHH:mm:ssZ", H = y.z(this), P = this.$H, B = this.$m, X = this.$M, Z = $.weekdays, K = $.months, ut = $.meridiem, Q = function(D, I, w, V) {
          return D && (D[I] || D(A, F)) || w[I].slice(0, V);
        }, it = function(D) {
          return y.s(P % 12 || 12, D, "0");
        }, v = ut || function(D, I, w) {
          var V = D < 12 ? "AM" : "PM";
          return w ? V.toLowerCase() : V;
        };
        return F.replace(N, function(D, I) {
          return I || function(w) {
            switch (w) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return y.s(A.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return y.s(X + 1, 2, "0");
              case "MMM":
                return Q($.monthsShort, X, K, 3);
              case "MMMM":
                return Q(K, X);
              case "D":
                return A.$D;
              case "DD":
                return y.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return Q($.weekdaysMin, A.$W, Z, 2);
              case "ddd":
                return Q($.weekdaysShort, A.$W, Z, 3);
              case "dddd":
                return Z[A.$W];
              case "H":
                return String(P);
              case "HH":
                return y.s(P, 2, "0");
              case "h":
                return it(1);
              case "hh":
                return it(2);
              case "a":
                return v(P, B, !0);
              case "A":
                return v(P, B, !1);
              case "m":
                return String(B);
              case "mm":
                return y.s(B, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return y.s(A.$s, 2, "0");
              case "SSS":
                return y.s(A.$ms, 3, "0");
              case "Z":
                return H;
            }
            return null;
          }(D) || H.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(_, A, $) {
        var F, H = this, P = y.p(A), B = C(_), X = (B.utcOffset() - this.utcOffset()) * r, Z = this - B, K = function() {
          return y.m(H, B);
        };
        switch (P) {
          case d:
            F = K() / 12;
            break;
          case f:
            F = K();
            break;
          case h:
            F = K() / 3;
            break;
          case l:
            F = (Z - X) / 6048e5;
            break;
          case s:
            F = (Z - X) / 864e5;
            break;
          case c:
            F = Z / i;
            break;
          case u:
            F = Z / r;
            break;
          case a:
            F = Z / n;
            break;
          default:
            F = Z;
        }
        return $ ? F : y.a(F);
      }, b.daysInMonth = function() {
        return this.endOf(f).$D;
      }, b.$locale = function() {
        return g[this.$L];
      }, b.locale = function(_, A) {
        if (!_) return this.$L;
        var $ = this.clone(), F = Y(_, A, !0);
        return F && ($.$L = F), $;
      }, b.clone = function() {
        return y.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, S;
    }(), O = U.prototype;
    return C.prototype = O, [["$ms", o], ["$s", a], ["$m", u], ["$H", c], ["$W", s], ["$M", f], ["$y", d], ["$D", k]].forEach(function(S) {
      O[S[1]] = function(b) {
        return this.$g(b, S[0], S[1]);
      };
    }), C.extend = function(S, b) {
      return S.$i || (S(b, U, C), S.$i = !0), C;
    }, C.locale = Y, C.isDayjs = x, C.unix = function(S) {
      return C(1e3 * S);
    }, C.en = g[M], C.Ls = g, C.p = {}, C;
  });
})(Jr);
var Zc = Jr.exports;
const _n = /* @__PURE__ */ vn(Zc);
var Qr = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(xn, function() {
    var n, r, i = 1e3, o = 6e4, a = 36e5, u = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, s = 31536e6, l = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: s, months: l, days: u, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, d = function(g) {
      return g instanceof m;
    }, k = function(g, p, x) {
      return new m(g, x, p.$l);
    }, E = function(g) {
      return r.p(g) + "s";
    }, L = function(g) {
      return g < 0;
    }, N = function(g) {
      return L(g) ? Math.ceil(g) : Math.floor(g);
    }, W = function(g) {
      return Math.abs(g);
    }, T = function(g, p) {
      return g ? L(g) ? { negative: !0, format: "" + W(g) + p } : { negative: !1, format: "" + g + p } : { negative: !1, format: "" };
    }, m = function() {
      function g(x, Y, C) {
        var y = this;
        if (this.$d = {}, this.$l = C, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Y) return k(x * h[E(Y)], this);
        if (typeof x == "number") return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object") return Object.keys(x).forEach(function(S) {
          y.$d[E(S)] = x[S];
        }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var U = x.match(f);
          if (U) {
            var O = U.slice(2).map(function(S) {
              return S != null ? Number(S) : 0;
            });
            return this.$d.years = O[0], this.$d.months = O[1], this.$d.weeks = O[2], this.$d.days = O[3], this.$d.hours = O[4], this.$d.minutes = O[5], this.$d.seconds = O[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = g.prototype;
      return p.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(Y, C) {
          return Y + (x.$d[C] || 0) * h[C];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = N(x / s), x %= s, this.$d.months = N(x / l), x %= l, this.$d.days = N(x / u), x %= u, this.$d.hours = N(x / a), x %= a, this.$d.minutes = N(x / o), x %= o, this.$d.seconds = N(x / i), x %= i, this.$d.milliseconds = x;
      }, p.toISOString = function() {
        var x = T(this.$d.years, "Y"), Y = T(this.$d.months, "M"), C = +this.$d.days || 0;
        this.$d.weeks && (C += 7 * this.$d.weeks);
        var y = T(C, "D"), U = T(this.$d.hours, "H"), O = T(this.$d.minutes, "M"), S = this.$d.seconds || 0;
        this.$d.milliseconds && (S += this.$d.milliseconds / 1e3, S = Math.round(1e3 * S) / 1e3);
        var b = T(S, "S"), _ = x.negative || Y.negative || y.negative || U.negative || O.negative || b.negative, A = U.format || O.format || b.format ? "T" : "", $ = (_ ? "-" : "") + "P" + x.format + Y.format + y.format + A + U.format + O.format + b.format;
        return $ === "P" || $ === "-P" ? "P0D" : $;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(x) {
        var Y = x || "YYYY-MM-DDTHH:mm:ss", C = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return Y.replace(c, function(y, U) {
          return U || String(C[y]);
        });
      }, p.as = function(x) {
        return this.$ms / h[E(x)];
      }, p.get = function(x) {
        var Y = this.$ms, C = E(x);
        return C === "milliseconds" ? Y %= 1e3 : Y = C === "weeks" ? N(Y / h[C]) : this.$d[C], Y || 0;
      }, p.add = function(x, Y, C) {
        var y;
        return y = Y ? x * h[E(Y)] : d(x) ? x.$ms : k(x, this).$ms, k(this.$ms + y * (C ? -1 : 1), this);
      }, p.subtract = function(x, Y) {
        return this.add(x, Y, !0);
      }, p.locale = function(x) {
        var Y = this.clone();
        return Y.$l = x, Y;
      }, p.clone = function() {
        return k(this.$ms, this);
      }, p.humanize = function(x) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, p.valueOf = function() {
        return this.asMilliseconds();
      }, p.milliseconds = function() {
        return this.get("milliseconds");
      }, p.asMilliseconds = function() {
        return this.as("milliseconds");
      }, p.seconds = function() {
        return this.get("seconds");
      }, p.asSeconds = function() {
        return this.as("seconds");
      }, p.minutes = function() {
        return this.get("minutes");
      }, p.asMinutes = function() {
        return this.as("minutes");
      }, p.hours = function() {
        return this.get("hours");
      }, p.asHours = function() {
        return this.as("hours");
      }, p.days = function() {
        return this.get("days");
      }, p.asDays = function() {
        return this.as("days");
      }, p.weeks = function() {
        return this.get("weeks");
      }, p.asWeeks = function() {
        return this.as("weeks");
      }, p.months = function() {
        return this.get("months");
      }, p.asMonths = function() {
        return this.as("months");
      }, p.years = function() {
        return this.get("years");
      }, p.asYears = function() {
        return this.as("years");
      }, g;
    }(), M = function(g, p, x) {
      return g.add(p.years() * x, "y").add(p.months() * x, "M").add(p.days() * x, "d").add(p.hours() * x, "h").add(p.minutes() * x, "m").add(p.seconds() * x, "s").add(p.milliseconds() * x, "ms");
    };
    return function(g, p, x) {
      n = x, r = x().$utils(), x.duration = function(y, U) {
        var O = x.locale();
        return k(y, { $l: O }, U);
      }, x.isDuration = d;
      var Y = p.prototype.add, C = p.prototype.subtract;
      p.prototype.add = function(y, U) {
        return d(y) ? M(this, y, 1) : Y.bind(this)(y, U);
      }, p.prototype.subtract = function(y, U) {
        return d(y) ? M(this, y, -1) : C.bind(this)(y, U);
      };
    };
  });
})(Qr);
var Gc = Qr.exports;
const Jc = /* @__PURE__ */ vn(Gc);
var Kr = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(xn, function() {
    return function(n, r, i) {
      n = n || {};
      var o = r.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function u(s, l, f, h) {
        return o.fromToBase(s, l, f, h);
      }
      i.en.relativeTime = a, o.fromToBase = function(s, l, f, h, d) {
        for (var k, E, L, N = f.$locale().relativeTime || a, W = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], T = W.length, m = 0; m < T; m += 1) {
          var M = W[m];
          M.d && (k = h ? i(s).diff(f, M.d, !0) : f.diff(s, M.d, !0));
          var g = (n.rounding || Math.round)(Math.abs(k));
          if (L = k > 0, g <= M.r || !M.r) {
            g <= 1 && m > 0 && (M = W[m - 1]);
            var p = N[M.l];
            d && (g = d("" + g)), E = typeof p == "string" ? p.replace("%d", g) : p(g, l, M.l, L);
            break;
          }
        }
        if (l) return E;
        var x = L ? N.future : N.past;
        return typeof x == "function" ? x(E) : x.replace("%s", E);
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
})(Kr);
var Qc = Kr.exports;
const Kc = /* @__PURE__ */ vn(Qc);
_n.extend(Jc);
_n.extend(Kc);
function jc(t, e) {
  return _n.duration(e - t).humanize();
}
function Re() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return t.reduce((n, r) => r(n), e);
  };
}
function ie(t) {
  return function(e) {
    return t === void 0 ? e : e[t];
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
function el(t) {
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function nl(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function rl(t) {
  return nl(t) > 165;
}
function il(t) {
  return rl(wt(t)) ? "black" : "white";
}
function ar(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${r}`;
}
function Pt(t, e) {
  return "translate(" + t + "," + e + ")";
}
function ol() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function be(t, e, n) {
  const i = R(t).attr("class");
  let o = !1;
  e.selectAll("g.row").each(function(W) {
    const m = R(this).attr("class");
    if (m == i)
      o = !0;
    else if (o) {
      let g = this.getAttribute("transform"), p = parseFloat(g.split("(")[1].split(",")[0].trim()), x = parseFloat(g.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${p},${x + n})`);
      var M = m.split(" ")[1];
      document.querySelectorAll(`g.task.${M} rect`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      }), document.querySelectorAll(`g.task.${M} text`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      });
    }
  });
  const a = document.querySelector('path[stroke-width="1.75"]');
  let c = a.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), s = parseFloat(c[1]), l = parseFloat(c[2]), h = parseFloat(c[3]) + n;
  a.setAttribute("d", `M${s},${l}V${h}`);
  const d = R("g.x.axis.bottom-axis");
  let k = d.attr("transform"), E = parseFloat(k.split("(")[1].split(",")[0].trim()), N = parseFloat(k.split(",")[1].split(")")[0].trim()) + n;
  d.attr("transform", `translate(${E}, ${N})`);
}
function jr(t, e) {
  e.forEach(function(r) {
    document.querySelectorAll(`g.row.${r}`).forEach(function(o) {
      o.style.display = "block";
    });
  });
  const n = R(t).attr("class").split(" ")[1];
  _t(`g.task.${n}`).each(function(r) {
    var i = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (i == n.replace(/--/g, ""))
      R(this).style("display", "none");
    else if (i != n.replace(/--/g, "")) {
      R(this).style("display", "block");
      var o = (e.indexOf(i) + 1) * 38;
      let a = R(this), u = a.attr("transform"), c = parseFloat(u.split("(")[1].split(",")[0].trim()), s = parseFloat(u.split(",")[1].split(")")[0].trim()), l = s + o;
      a.attr("transform", `translate(${c}, ${s})`).transition().duration(1e3).attr("transform", `translate(${c}, ${l})`).on("start", () => {
        _t(`g.task.${i}`).style("display", "none");
      }).on("end", () => {
        a.style("display", "none"), a.attr("transform", `translate(${c}, ${s})`), _t(`g.task.${i}`).style("display", "block");
      });
    }
  });
}
function ti(t, e) {
  return new Promise((n) => {
    const r = R(t).attr("class").split(" ")[1];
    _t(`g.task:not(.${r})`).each(function(i) {
      var o = i[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(o)) {
        R(this).style("display", "block");
        var a = (e.indexOf(o) + 1) * 38;
        let u = R(this), c = u.attr("transform"), s = parseFloat(c.split("(")[1].split(",")[0].trim()), l = parseFloat(c.split(",")[1].split(")")[0].trim()), f = l - a;
        u.transition().duration(1e3).attr("transform", `translate(${s}, ${f})`).on("end", () => {
          _t(`g.${r}`).style("display", "block"), u.style("display", "none"), u.attr("transform", `translate(${s}, ${l})`), e.forEach(function(h) {
            document.querySelectorAll(`.${h}`).forEach(function(k) {
              k.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function $e(t, e) {
  const r = R(t).attr("class"), i = [];
  let o = !1, a = !1;
  return e.selectAll("g.row").each(function(u) {
    const s = R(this).attr("class");
    s == r ? o = !0 : o && s.split(" ")[2] == "timelineheader" ? a = !0 : o && !a && i.push(s.split(" ")[1]);
  }), i;
}
function al() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let e = [];
  _t("g.row.timelineheader text").each(function() {
    if (R(this).text() === "-") {
      const r = this.parentNode, i = $e(r, R(r.parentNode)), o = i.length * 38;
      let a = ti(r, i).then(() => {
        be(r, R(r.parentNode), -o), R(this).text("+").style("font-size", "20px");
      });
      e.push(a);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = al;
function sl() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let e = [];
  _t("g.row.timelineheader text").each(function() {
    if (R(this).text() === "+") {
      const r = this.parentNode, i = $e(r, R(r.parentNode)), o = i.length * 38;
      let a = new Promise((u) => {
        jr(r, i), be(r, R(r.parentNode), o), u();
      }).then(() => {
        R(this).text("-").style("font-size", "30px");
      });
      e.push(a);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = sl;
function fl(t) {
  let e = tl, n = 5, r = 2, i = !1, o = !1, a, u, c = 0, s = ie(0), l = ie(1), f = ie(2), h = ie(3);
  console.log(t);
  function d(T, m) {
    const M = T.select("text"), g = T.select("rect"), p = g.attr("width") - 2 * n, x = l(m);
    M.text(x);
    let Y = M.node().getComputedTextLength();
    if (Y > p) {
      const C = p < 0 ? 0 : p / Y, y = Math.floor(x.length * C);
      M.text(y > 2 ? x.slice(0, y - 2) + "…" : "");
    }
  }
  function k(T, m, M) {
    const g = T.select("text").node(), p = g.getBBox(), x = M.scale().domain().indexOf(s(m)), Y = M.colorscale()(x), C = T.selectAll("rect.bckg").data([m]).join("rect").attr("class", "bckg").attr("fill", Y).attr("x", p.x - n + r).attr("y", p.y - 2).attr("width", p.width + n - r).attr("height", p.height);
    T.node().insertBefore(C.node(), g);
  }
  function E(T, m) {
    T.each(function(M, g) {
      const p = R(this.parentNode);
      h(M) - f(M) ? d(p, M) : k(p, M, m);
    });
  }
  function L(T) {
    return function(m, M) {
      Pc(this).tween("text", function() {
        return function(g) {
          E(R(this), T);
        };
      });
    };
  }
  function N(T) {
    const m = T.datum(), M = new Set(pi(m, s)), g = new Zr(W), p = Nt(e);
    a = a || [gi(m, f), sr(m, h)], o && (a = ai(a.concat(/* @__PURE__ */ new Date()))), T.each(function(x) {
      const Y = u || this.getBoundingClientRect().width, C = M.size * (el(this) + 4 * n), y = Mr().domain(M).range([0, C]), U = Su().domain(a), O = (i ? Xc : Bc)(y).width(Y), S = R(this).selectAll("svg").data([1]).join("svg");
      S.attr("class", "timeline").attr("width", Y).attr("height", C + 40);
      const b = S.append("g").attr("transform", "translate(0,20)"), _ = b.append("g").attr("class", "y axis").call(O);
      let F = document.querySelector('path[stroke-width="1.75"]').getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), H = parseFloat(F[1]);
      _.selectAll("text").on("mouseover", function() {
        R(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        R(this).style("text-decoration", "none");
      }).attr("text-anchor", function(v) {
        return v.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(v) {
        return v.startsWith(" •") ? H / 2 : H - 0.5;
      }).style("cursor", "pointer").style("font-weight", function(v) {
        return v.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(v, D) {
        const w = D.replace(/ • /g, "").replace(" ", "%20"), V = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${w}%22`;
        window.open(V, "_blank");
      }), _.selectAll("g.row").each(function(v) {
        const D = R(this).datum();
        R(this).classed(R(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), D.startsWith(" •") && R(this).classed("timelineheader", !0).append("text").attr("x", H - 10).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), _.selectAll("g.row.timelineheader text").on("click", function(v, D) {
        const I = R(this).text();
        if (I === "+") {
          let w = $e(this.parentNode, _), V = w.length * 38;
          jr(this.parentNode, w), be(this.parentNode, _, V), R(this).text() === "+" ? R(this).text("-").style("font-size", "30px") : R(this).text("+");
        } else if (I === "-") {
          let w = $e(this.parentNode, _), V = w.length * 38;
          ti(this.parentNode, w).then(() => {
            be(this.parentNode, _, -V);
          }), R(this).text() === "-" ? R(this).text("+").style("font-size", "20px") : R(this).text("-");
        } else {
          const V = D.replace(/ • /g, "").replace(" ", "%20"), z = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${V}%22`;
          window.open(z, "_blank");
        }
      });
      let P = O.range();
      U.range([P[0] + n, P[1] - n]).clamp(!0);
      const B = kn(U), X = b.append("g").attr("class", "x axis").attr("transform", Pt(0, 0)).call(B);
      X.selectAll(".tick text").attr("dy", "-1.5em"), X.selectAll(".tick line").attr("y2", "-5");
      const Z = kn(U);
      S.append("g").attr("class", "x axis bottom-axis").attr("transform", Pt(0, C + 20)).call(Z).selectAll(".tick line").attr("y2", "5"), _.on("offset", () => {
        P = O.range(), U.range([P[0] + n, P[1] - n]).clamp(!0), B.ticks(Math.min((P[1] - P[0]) / 70, 10)), X.call(B), Q.attr("transform", (v) => Pt(U(f(v)), y(s(v)))).selectAll("rect").attr("width", (v) => U(h(v)) - U(f(v)) || r).call((v) => E(v, O)), _.call(O.draw_ticks, U.ticks().map(U));
      }), X.select(".domain").remove(), X.selectAll(".tick line").attr("stroke", "#AAA");
      const ut = U.ticks().map(U);
      _.call(O.draw_ticks, ut);
      let Q = b.selectAll("g.task").data(x);
      Q.exit().remove();
      const it = Q.enter().append("g").classed("task", !0);
      it.each(function(v) {
        const D = s(v).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        R(this).classed(D, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", y.bandwidth() - 2 * n).on("mouseover", g.show).on("mouseout", g.hide).on("click", function(v, D) {
        var I = String(D[1]), w = I.replace(" ", "%20"), V = D[2], z = ar(V), j = D[3], tt = ar(j), ht = "https://www.primarysourcecoop.org/publications/" + t + "/search#q%3D%2Bsubject%3A%22" + w + "%22%20%2Bdate_when%3A%5B" + z + "%20TO%20" + tt + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(ht, "_blank");
      }).style("fill", Re(l, p)), it.append("text").attr("text-anchor", "start").attr("fill", (v) => h(v) - f(v) ? Re(l, p, il)(v) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", y.bandwidth() / 2).attr("dy", "0.32em").text(l), Q = Q.merge(it), Q.attr("transform", (v) => Pt(P[0], y(s(v)))).selectAll("rect").attr("width", 0), Q.transition().duration(c).attr("transform", (v) => Pt(U(f(v)), y(s(v)))).selectAll("rect").attr("width", (v) => U(h(v)) - U(f(v)) || r).on("start", L(O)), o && b.append("path").attr("stroke", "red").attr("d", "M" + U(/* @__PURE__ */ new Date()) + ",0.5V" + C);
    }), ol();
  }
  return N.dates = function(T) {
    return arguments.length ? (a = T, N) : a;
  }, N.width = function(T) {
    return arguments.length ? (u = T, N) : u;
  }, N.today = function(T) {
    return arguments.length ? (o = T, N) : o;
  }, N.colors = function(T) {
    return arguments.length ? (e = T, N) : e;
  }, N.padding = function(T) {
    return arguments.length ? (n = T, N) : n;
  }, N.milestone_width = function(T) {
    return arguments.length ? (r = T, N) : r;
  }, N.reversed = function(T) {
    return arguments.length ? (i = T, N) : i;
  }, N.duration = function(T) {
    return arguments.length ? (c = T, N) : c;
  }, N;
  function W(T, m) {
    const M = Re($u, mn("%Y-%m-%d")), g = `<b>${l(m)}</b><hr style="margin: 2px 0 2px 0">${M(f(m))}`, p = h(m) - f(m) ? ` - ${M(h(m))}<br>${jc(f(m), h(m))}` : "";
    return g + p;
  }
}
export {
  Pc as active,
  kn as axisBottom,
  cl as axisLeft,
  ul as axisRight,
  wt as color,
  ll as drag,
  jc as durationFormat,
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
  mn as timeFormat,
  fl as timeline,
  Bc as timelineAxisLeft,
  Xc as timelineAxisRight,
  Zr as tooltip
};
