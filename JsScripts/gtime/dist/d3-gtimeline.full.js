function ue(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ri(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function nn(t) {
  let e, n, r;
  t.length !== 2 ? (e = ue, n = (u, c) => ue(t(u), c), r = (u, c) => t(u) - c) : (e = t === ue || t === ri ? t : ii, n = t, r = t);
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
function ii() {
  return 0;
}
function oi(t) {
  return t === null ? NaN : +t;
}
const ai = nn(ue), si = ai.right;
nn(oi).center;
function ui(t, e) {
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
class Tn extends Map {
  constructor(e, n = fi) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get(kn(this, e));
  }
  has(e) {
    return super.has(kn(this, e));
  }
  set(e, n) {
    return super.set(ci(this, e), n);
  }
  delete(e) {
    return super.delete(li(this, e));
  }
}
function kn({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function ci({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function li({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function fi(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const hi = Math.sqrt(50), di = Math.sqrt(10), gi = Math.sqrt(2);
function de(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= hi ? 10 : o >= di ? 5 : o >= gi ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), c = Math.round(e * s), u / s < t && ++u, c / s > e && --c, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), c = Math.round(e / s), u * s < t && ++u, c * s > e && --c), c < u && 0.5 <= n && n < 2 ? de(t, e, n * 2) : [u, c, s];
}
function mi(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? de(e, t, n) : de(t, e, n);
  if (!(o >= i)) return [];
  const u = o - i + 1, c = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) c[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) c[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * a;
  return c;
}
function ze(t, e, n) {
  return e = +e, t = +t, n = +n, de(t, e, n)[2];
}
function qe(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? ze(e, t, n) : ze(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function cr(t, e) {
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
function pi(t, e) {
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
function yi(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
function wi(t, e) {
  if (typeof t[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  if (typeof e != "function") throw new TypeError("mapper is not a function");
  return Array.from(t, (n, r) => e(n, r, t));
}
function xi(t) {
  return t;
}
var Ue = 1, ce = 2, Ve = 3, zt = 4, Sn = 1e-6;
function vi(t) {
  return "translate(" + t + ",0)";
}
function _i(t) {
  return "translate(0," + t + ")";
}
function Mi(t) {
  return (e) => +t(e);
}
function bi(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function $i() {
  return !this.__axis;
}
function rn(t, e) {
  var n = [], r = null, i = null, o = 6, a = 6, u = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, s = t === Ue || t === zt ? -1 : 1, l = t === zt || t === ce ? "x" : "y", f = t === Ue || t === Ve ? vi : _i;
  function h(d) {
    var k = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), E = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : xi), L = Math.max(o, 0) + u, N = e.range(), P = +N[0] + c, T = +N[N.length - 1] + c, m = (e.bandwidth ? bi : Mi)(e.copy(), c), _ = d.selection ? d.selection() : d, g = _.selectAll(".domain").data([null]), p = _.selectAll(".tick").data(k, e).order(), w = p.exit(), Y = p.enter().append("g").attr("class", "tick"), D = p.select("line"), y = p.select("text");
    g = g.merge(g.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), p = p.merge(Y), D = D.merge(Y.append("line").attr("stroke", "currentColor").attr(l + "2", s * o)), y = y.merge(Y.append("text").attr("fill", "currentColor").attr(l, s * L).attr("dy", t === Ue ? "0em" : t === Ve ? "0.71em" : "0.32em")), d !== _ && (g = g.transition(d), p = p.transition(d), D = D.transition(d), y = y.transition(d), w = w.transition(d).attr("opacity", Sn).attr("transform", function(U) {
      return isFinite(U = m(U)) ? f(U + c) : this.getAttribute("transform");
    }), Y.attr("opacity", Sn).attr("transform", function(U) {
      var I = this.parentNode.__axis;
      return f((I && isFinite(I = I(U)) ? I : m(U)) + c);
    })), w.remove(), g.attr("d", t === zt || t === ce ? a ? "M" + s * a + "," + P + "H" + c + "V" + T + "H" + s * a : "M" + c + "," + P + "V" + T : a ? "M" + P + "," + s * a + "V" + c + "H" + T + "V" + s * a : "M" + P + "," + c + "H" + T), p.attr("opacity", 1).attr("transform", function(U) {
      return f(m(U) + c);
    }), D.attr(l + "2", s * o), y.attr(l, s * L).text(E), _.filter($i).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ce ? "start" : t === zt ? "end" : "middle"), _.each(function() {
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
function ll(t) {
  return rn(ce, t);
}
function An(t) {
  return rn(Ve, t);
}
function fl(t) {
  return rn(zt, t);
}
function on(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function lr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Qt() {
}
var Xt = 0.7, ge = 1 / Xt, Ct = "\\s*([+-]?\\d+)\\s*", Zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ut = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ti = /^#([0-9a-f]{3,8})$/, ki = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), Si = new RegExp(`^rgb\\(${ut},${ut},${ut}\\)$`), Ai = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Zt}\\)$`), Ci = new RegExp(`^rgba\\(${ut},${ut},${ut},${Zt}\\)$`), Di = new RegExp(`^hsl\\(${Zt},${ut},${ut}\\)$`), Ni = new RegExp(`^hsla\\(${Zt},${ut},${ut},${Zt}\\)$`), Cn = {
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
on(Qt, xt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Dn,
  // Deprecated! Use color.formatHex.
  formatHex: Dn,
  formatHex8: Fi,
  formatHsl: Ui,
  formatRgb: Nn,
  toString: Nn
});
function Dn() {
  return this.rgb().formatHex();
}
function Fi() {
  return this.rgb().formatHex8();
}
function Ui() {
  return fr(this).formatHsl();
}
function Nn() {
  return this.rgb().formatRgb();
}
function xt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ti.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Fn(e) : n === 3 ? new nt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ee(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ee(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ki.exec(t)) ? new nt(e[1], e[2], e[3], 1) : (e = Si.exec(t)) ? new nt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Ai.exec(t)) ? ee(e[1], e[2], e[3], e[4]) : (e = Ci.exec(t)) ? ee(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Di.exec(t)) ? En(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ni.exec(t)) ? En(e[1], e[2] / 100, e[3] / 100, e[4]) : Cn.hasOwnProperty(t) ? Fn(Cn[t]) : t === "transparent" ? new nt(NaN, NaN, NaN, 0) : null;
}
function Fn(t) {
  return new nt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ee(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new nt(t, e, n, r);
}
function Yi(t) {
  return t instanceof Qt || (t = xt(t)), t ? (t = t.rgb(), new nt(t.r, t.g, t.b, t.opacity)) : new nt();
}
function Be(t, e, n, r) {
  return arguments.length === 1 ? Yi(t) : new nt(t, e, n, r ?? 1);
}
function nt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
on(nt, Be, lr(Qt, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Xt : Math.pow(Xt, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new nt(_t(this.r), _t(this.g), _t(this.b), me(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Un,
  // Deprecated! Use color.formatHex.
  formatHex: Un,
  formatHex8: Ei,
  formatRgb: Yn,
  toString: Yn
}));
function Un() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function Ei() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Yn() {
  const t = me(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${_t(this.r)}, ${_t(this.g)}, ${_t(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function me(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function _t(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function vt(t) {
  return t = _t(t), (t < 16 ? "0" : "") + t.toString(16);
}
function En(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new at(t, e, n, r);
}
function fr(t) {
  if (t instanceof at) return new at(t.h, t.s, t.l, t.opacity);
  if (t instanceof Qt || (t = xt(t)), !t) return new at();
  if (t instanceof at) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, u = o - i, c = (o + i) / 2;
  return u ? (e === o ? a = (n - r) / u + (n < r) * 6 : n === o ? a = (r - e) / u + 2 : a = (e - n) / u + 4, u /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new at(a, u, c, t.opacity);
}
function Hi(t, e, n, r) {
  return arguments.length === 1 ? fr(t) : new at(t, e, n, r ?? 1);
}
function at(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
on(at, Hi, lr(Qt, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new at(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Xt : Math.pow(Xt, t), new at(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new nt(
      Ye(t >= 240 ? t - 240 : t + 120, i, r),
      Ye(t, i, r),
      Ye(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new at(Hn(this.h), ne(this.s), ne(this.l), me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = me(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Hn(this.h)}, ${ne(this.s) * 100}%, ${ne(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Hn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ne(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ye(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
var Oi = { value: () => {
} };
function an() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new le(n);
}
function le(t) {
  this._ = t;
}
function Ii(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
le.prototype = an.prototype = {
  constructor: le,
  on: function(t, e) {
    var n = this._, r = Ii(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ri(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = On(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = On(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new le(t);
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
function Ri(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function On(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Oi, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Xe = "http://www.w3.org/1999/xhtml";
const In = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Xe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ae(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), In.hasOwnProperty(e) ? { space: In[e], local: t } : t;
}
function Li(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Xe && e.documentElement.namespaceURI === Xe ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Pi(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function hr(t) {
  var e = Ae(t);
  return (e.local ? Pi : Li)(e);
}
function Wi() {
}
function sn(t) {
  return t == null ? Wi : function() {
    return this.querySelector(t);
  };
}
function zi(t) {
  typeof t != "function" && (t = sn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, u = r[i] = new Array(a), c, s, l = 0; l < a; ++l)
      (c = o[l]) && (s = t.call(c, c.__data__, l, o)) && ("__data__" in c && (s.__data__ = c.__data__), u[l] = s);
  return new et(r, this._parents);
}
function dr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function qi() {
  return [];
}
function gr(t) {
  return t == null ? qi : function() {
    return this.querySelectorAll(t);
  };
}
function Vi(t) {
  return function() {
    return dr(t.apply(this, arguments));
  };
}
function Bi(t) {
  typeof t == "function" ? t = Vi(t) : t = gr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], u = a.length, c, s = 0; s < u; ++s)
      (c = a[s]) && (r.push(t.call(c, c.__data__, s, a)), i.push(c));
  return new et(r, i);
}
function mr(t) {
  return function() {
    return this.matches(t);
  };
}
function pr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Xi = Array.prototype.find;
function Zi(t) {
  return function() {
    return Xi.call(this.children, t);
  };
}
function Gi() {
  return this.firstElementChild;
}
function Ji(t) {
  return this.select(t == null ? Gi : Zi(typeof t == "function" ? t : pr(t)));
}
var Qi = Array.prototype.filter;
function Ki() {
  return Array.from(this.children);
}
function ji(t) {
  return function() {
    return Qi.call(this.children, t);
  };
}
function to(t) {
  return this.selectAll(t == null ? Ki : ji(typeof t == "function" ? t : pr(t)));
}
function eo(t) {
  typeof t != "function" && (t = mr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, u = r[i] = [], c, s = 0; s < a; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
  return new et(r, this._parents);
}
function yr(t) {
  return new Array(t.length);
}
function no() {
  return new et(this._enter || this._groups.map(yr), this._parents);
}
function pe(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
pe.prototype = {
  constructor: pe,
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
function ro(t) {
  return function() {
    return t;
  };
}
function io(t, e, n, r, i, o) {
  for (var a = 0, u, c = e.length, s = o.length; a < s; ++a)
    (u = e[a]) ? (u.__data__ = o[a], r[a] = u) : n[a] = new pe(t, o[a]);
  for (; a < c; ++a)
    (u = e[a]) && (i[a] = u);
}
function oo(t, e, n, r, i, o, a) {
  var u, c, s = /* @__PURE__ */ new Map(), l = e.length, f = o.length, h = new Array(l), d;
  for (u = 0; u < l; ++u)
    (c = e[u]) && (h[u] = d = a.call(c, c.__data__, u, e) + "", s.has(d) ? i[u] = c : s.set(d, c));
  for (u = 0; u < f; ++u)
    d = a.call(t, o[u], u, o) + "", (c = s.get(d)) ? (r[u] = c, c.__data__ = o[u], s.delete(d)) : n[u] = new pe(t, o[u]);
  for (u = 0; u < l; ++u)
    (c = e[u]) && s.get(h[u]) === c && (i[u] = c);
}
function ao(t) {
  return t.__data__;
}
function so(t, e) {
  if (!arguments.length) return Array.from(this, ao);
  var n = e ? oo : io, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ro(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
    var l = r[s], f = i[s], h = f.length, d = uo(t.call(l, l && l.__data__, s, r)), k = d.length, E = u[s] = new Array(k), L = a[s] = new Array(k), N = c[s] = new Array(h);
    n(l, f, E, L, N, d, e);
    for (var P = 0, T = 0, m, _; P < k; ++P)
      if (m = E[P]) {
        for (P >= T && (T = P + 1); !(_ = L[T]) && ++T < k; ) ;
        m._next = _ || null;
      }
  }
  return a = new et(a, r), a._enter = u, a._exit = c, a;
}
function uo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function co() {
  return new et(this._exit || this._groups.map(yr), this._parents);
}
function lo(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function fo(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c)
    for (var s = n[c], l = r[c], f = s.length, h = u[c] = new Array(f), d, k = 0; k < f; ++k)
      (d = s[k] || l[k]) && (h[k] = d);
  for (; c < i; ++c)
    u[c] = n[c];
  return new et(u, this._parents);
}
function ho() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function go(t) {
  t || (t = mo);
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
function mo(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function po() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function yo() {
  return Array.from(this);
}
function wo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function xo() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function vo() {
  return !this.node();
}
function _o(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function Mo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function $o(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function To(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ko(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function So(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Ao(t, e) {
  var n = Ae(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? bo : Mo : typeof e == "function" ? n.local ? So : ko : n.local ? To : $o)(n, e));
}
function wr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Co(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Do(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function No(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Fo(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Co : typeof e == "function" ? No : Do)(t, e, n ?? "")) : Ft(this.node(), t);
}
function Ft(t, e) {
  return t.style.getPropertyValue(e) || wr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Uo(t) {
  return function() {
    delete this[t];
  };
}
function Yo(t, e) {
  return function() {
    this[t] = e;
  };
}
function Eo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ho(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Uo : typeof e == "function" ? Eo : Yo)(t, e)) : this.node()[t];
}
function xr(t) {
  return t.trim().split(/^|\s+/);
}
function un(t) {
  return t.classList || new vr(t);
}
function vr(t) {
  this._node = t, this._names = xr(t.getAttribute("class") || "");
}
vr.prototype = {
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
function _r(t, e) {
  for (var n = un(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Mr(t, e) {
  for (var n = un(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Oo(t) {
  return function() {
    _r(this, t);
  };
}
function Io(t) {
  return function() {
    Mr(this, t);
  };
}
function Ro(t, e) {
  return function() {
    (e.apply(this, arguments) ? _r : Mr)(this, t);
  };
}
function Lo(t, e) {
  var n = xr(t + "");
  if (arguments.length < 2) {
    for (var r = un(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ro : e ? Oo : Io)(n, e));
}
function Po() {
  this.textContent = "";
}
function Wo(t) {
  return function() {
    this.textContent = t;
  };
}
function zo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function qo(t) {
  return arguments.length ? this.each(t == null ? Po : (typeof t == "function" ? zo : Wo)(t)) : this.node().textContent;
}
function Vo() {
  this.innerHTML = "";
}
function Bo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Xo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Zo(t) {
  return arguments.length ? this.each(t == null ? Vo : (typeof t == "function" ? Xo : Bo)(t)) : this.node().innerHTML;
}
function Go() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Jo() {
  return this.each(Go);
}
function Qo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ko() {
  return this.each(Qo);
}
function jo(t) {
  var e = typeof t == "function" ? t : hr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ta() {
  return null;
}
function ea(t, e) {
  var n = typeof t == "function" ? t : hr(t), r = e == null ? ta : typeof e == "function" ? e : sn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function na() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ra() {
  return this.each(na);
}
function ia() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function oa() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function aa(t) {
  return this.select(t ? oa : ia);
}
function sa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ua(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ca(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function la(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function fa(t, e, n) {
  return function() {
    var r = this.__on, i, o = ua(e);
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
function ha(t, e, n) {
  var r = ca(t + ""), i, o = r.length, a;
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
  for (u = e ? fa : la, i = 0; i < o; ++i) this.each(u(r[i], e, n));
  return this;
}
function br(t, e, n) {
  var r = wr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function da(t, e) {
  return function() {
    return br(this, t, e);
  };
}
function ga(t, e) {
  return function() {
    return br(this, t, e.apply(this, arguments));
  };
}
function ma(t, e) {
  return this.each((typeof e == "function" ? ga : da)(t, e));
}
function* pa() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var cn = [null];
function et(t, e) {
  this._groups = t, this._parents = e;
}
function Kt() {
  return new et([[document.documentElement]], cn);
}
function ya() {
  return this;
}
et.prototype = Kt.prototype = {
  constructor: et,
  select: zi,
  selectAll: Bi,
  selectChild: Ji,
  selectChildren: to,
  filter: eo,
  data: so,
  enter: no,
  exit: co,
  join: lo,
  merge: fo,
  selection: ya,
  order: ho,
  sort: go,
  call: po,
  nodes: yo,
  node: wo,
  size: xo,
  empty: vo,
  each: _o,
  attr: Ao,
  style: Fo,
  property: Ho,
  classed: Lo,
  text: qo,
  html: Zo,
  raise: Jo,
  lower: Ko,
  append: jo,
  insert: ea,
  remove: ra,
  clone: aa,
  datum: sa,
  on: ha,
  dispatch: ma,
  [Symbol.iterator]: pa
};
function R(t) {
  return typeof t == "string" ? new et([[document.querySelector(t)]], [document.documentElement]) : new et([[t]], cn);
}
function wa(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Rn(t, e) {
  if (t = wa(t), e === void 0 && (e = t.currentTarget), e) {
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
function wt(t) {
  return typeof t == "string" ? new et([document.querySelectorAll(t)], [document.documentElement]) : new et([dr(t)], cn);
}
const xa = { passive: !1 }, Gt = { capture: !0, passive: !1 };
function Ee(t) {
  t.stopImmediatePropagation();
}
function Dt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function va(t) {
  var e = t.document.documentElement, n = R(t).on("dragstart.drag", Dt, Gt);
  "onselectstart" in e ? n.on("selectstart.drag", Dt, Gt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function _a(t, e) {
  var n = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Dt, Gt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const re = (t) => () => t;
function Ze(t, {
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
Ze.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ma(t) {
  return !t.ctrlKey && !t.button;
}
function ba() {
  return this.parentNode;
}
function $a(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function Ta() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function hl() {
  var t = Ma, e = ba, n = $a, r = Ta, i = {}, o = an("start", "drag", "end"), a = 0, u, c, s, l, f = 0;
  function h(m) {
    m.on("mousedown.drag", d).filter(r).on("touchstart.drag", L).on("touchmove.drag", N, xa).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(m, _) {
    if (!(l || !t.call(this, m, _))) {
      var g = T(this, e.call(this, m, _), m, _, "mouse");
      g && (R(m.view).on("mousemove.drag", k, Gt).on("mouseup.drag", E, Gt), va(m.view), Ee(m), s = !1, u = m.clientX, c = m.clientY, g("start", m));
    }
  }
  function k(m) {
    if (Dt(m), !s) {
      var _ = m.clientX - u, g = m.clientY - c;
      s = _ * _ + g * g > f;
    }
    i.mouse("drag", m);
  }
  function E(m) {
    R(m.view).on("mousemove.drag mouseup.drag", null), _a(m.view, s), Dt(m), i.mouse("end", m);
  }
  function L(m, _) {
    if (t.call(this, m, _)) {
      var g = m.changedTouches, p = e.call(this, m, _), w = g.length, Y, D;
      for (Y = 0; Y < w; ++Y)
        (D = T(this, p, m, _, g[Y].identifier, g[Y])) && (Ee(m), D("start", m, g[Y]));
    }
  }
  function N(m) {
    var _ = m.changedTouches, g = _.length, p, w;
    for (p = 0; p < g; ++p)
      (w = i[_[p].identifier]) && (Dt(m), w("drag", m, _[p]));
  }
  function P(m) {
    var _ = m.changedTouches, g = _.length, p, w;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), p = 0; p < g; ++p)
      (w = i[_[p].identifier]) && (Ee(m), w("end", m, _[p]));
  }
  function T(m, _, g, p, w, Y) {
    var D = o.copy(), y = Rn(Y || g, _), U, I, A;
    if ((A = n.call(m, new Ze("beforestart", {
      sourceEvent: g,
      target: h,
      identifier: w,
      active: a,
      x: y[0],
      y: y[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), p)) != null)
      return U = A.x - y[0] || 0, I = A.y - y[1] || 0, function b(v, C, $) {
        var F = y, O;
        switch (v) {
          case "start":
            i[w] = b, O = a++;
            break;
          case "end":
            delete i[w], --a;
          case "drag":
            y = Rn($ || C, _), O = a;
            break;
        }
        D.call(
          v,
          m,
          new Ze(v, {
            sourceEvent: C,
            subject: A,
            target: h,
            identifier: w,
            active: O,
            x: y[0] + U,
            y: y[1] + I,
            dx: y[0] - F[0],
            dy: y[1] - F[1],
            dispatch: D
          }),
          p
        );
      };
  }
  return h.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : re(!!m), h) : t;
  }, h.container = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : re(m), h) : e;
  }, h.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : re(m), h) : n;
  }, h.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : re(!!m), h) : r;
  }, h.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? h : m;
  }, h.clickDistance = function(m) {
    return arguments.length ? (f = (m = +m) * m, h) : Math.sqrt(f);
  }, h;
}
function Ce(t, e) {
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
const Ln = Symbol("implicit");
function Nt() {
  var t = new Tn(), e = [], n = [], r = Ln;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== Ln) return r;
      t.set(o, a = e.push(o) - 1);
    }
    return n[a % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [], t = new Tn();
    for (const a of o)
      t.has(a) || t.set(a, e.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Nt(e, n).unknown(r);
  }, Ce.apply(i, arguments), i;
}
function $r() {
  var t = Nt().unknown(void 0), e = t.domain, n = t.range, r = 0, i = 1, o, a, u = !1, c = 0, s = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = e().length, d = i < r, k = d ? i : r, E = d ? r : i;
    o = (E - k) / Math.max(1, h - c + s * 2), u && (o = Math.floor(o)), k += (E - k - o * (h - c)) * l, a = o * (1 - c), u && (k = Math.round(k), a = Math.round(a));
    var L = yi(h).map(function(N) {
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
    return $r(e(), [r, i]).round(u).paddingInner(c).paddingOuter(s).align(l);
  }, Ce.apply(f(), arguments);
}
const ln = (t) => () => t;
function ka(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Sa(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Aa(t) {
  return (t = +t) == 1 ? Tr : function(e, n) {
    return n - e ? Sa(e, n, t) : ln(isNaN(e) ? n : e);
  };
}
function Tr(t, e) {
  var n = e - t;
  return n ? ka(t, n) : ln(isNaN(t) ? e : t);
}
const ye = function t(e) {
  var n = Aa(e);
  function r(i, o) {
    var a = n((i = Be(i)).r, (o = Be(o)).r), u = n(i.g, o.g), c = n(i.b, o.b), s = Tr(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = u(l), i.b = c(l), i.opacity = s(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ca(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Da(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Na(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = fn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Fa(t, e) {
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
function Ua(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = fn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, He = new RegExp(Ge.source, "g");
function Ya(t) {
  return function() {
    return t;
  };
}
function Ea(t) {
  return function(e) {
    return t(e) + "";
  };
}
function kr(t, e) {
  var n = Ge.lastIndex = He.lastIndex = 0, r, i, o, a = -1, u = [], c = [];
  for (t = t + "", e = e + ""; (r = Ge.exec(t)) && (i = He.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, c.push({ i: a, x: ot(r, i) })), n = He.lastIndex;
  return n < e.length && (o = e.slice(n), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? c[0] ? Ea(c[0].x) : Ya(e) : (e = c.length, function(s) {
    for (var l = 0, f; l < e; ++l) u[(f = c[l]).i] = f.x(s);
    return u.join("");
  });
}
function fn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ln(e) : (n === "number" ? ot : n === "string" ? (r = xt(e)) ? (e = r, ye) : kr : e instanceof xt ? ye : e instanceof Date ? Fa : Da(e) ? Ca : Array.isArray(e) ? Na : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ua : ot)(t, e);
}
function Ha(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Pn = 180 / Math.PI, Je = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sr(t, e, n, r, i, o) {
  var a, u, c;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, c /= u), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Pn,
    skewX: Math.atan(c) * Pn,
    scaleX: a,
    scaleY: u
  };
}
var ie;
function Oa(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Je : Sr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ia(t) {
  return t == null || (ie || (ie = document.createElementNS("http://www.w3.org/2000/svg", "g")), ie.setAttribute("transform", t), !(t = ie.transform.baseVal.consolidate())) ? Je : (t = t.matrix, Sr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ar(t, e, n, r) {
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
var Ra = Ar(Oa, "px, ", "px)", "deg)"), La = Ar(Ia, ", ", ")", ")");
function Pa(t) {
  return function() {
    return t;
  };
}
function Wa(t) {
  return +t;
}
var Wn = [0, 1];
function St(t) {
  return t;
}
function Qe(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Pa(isNaN(e) ? NaN : 0.5);
}
function za(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function qa(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Qe(i, r), o = n(a, o)) : (r = Qe(r, i), o = n(o, a)), function(u) {
    return o(r(u));
  };
}
function Va(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Qe(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(u) {
    var c = si(t, u, 1, r) - 1;
    return o[c](i[c](u));
  };
}
function Cr(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ba() {
  var t = Wn, e = Wn, n = fn, r, i, o, a = St, u, c, s;
  function l() {
    var h = Math.min(t.length, e.length);
    return a !== St && (a = za(t[0], t[h - 1])), u = h > 2 ? Va : qa, c = s = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = u(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((s || (s = u(e, t.map(r), ot)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Wa), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), l()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = Ha, l();
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
function Dr() {
  return Ba()(St, St);
}
function Xa(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function we(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Ut(t) {
  return t = we(Math.abs(t)), t ? t[1] : NaN;
}
function Za(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(n.substring(i -= u, i + u)), !((c += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Ga(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Ja = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xe(t) {
  if (!(e = Ja.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new hn({
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
xe.prototype = hn.prototype;
function hn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
hn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Qa(t) {
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
var Nr;
function Ka(t, e) {
  var n = we(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (Nr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + we(t, Math.max(0, e + o - 1))[0];
}
function zn(t, e) {
  var n = we(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const qn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Xa,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => zn(t * 100, e),
  r: zn,
  s: Ka,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Vn(t) {
  return t;
}
var Bn = Array.prototype.map, Xn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ja(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Vn : Za(Bn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Vn : Ga(Bn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(f) {
    f = xe(f);
    var h = f.fill, d = f.align, k = f.sign, E = f.symbol, L = f.zero, N = f.width, P = f.comma, T = f.precision, m = f.trim, _ = f.type;
    _ === "n" ? (P = !0, _ = "g") : qn[_] || (T === void 0 && (T = 12), m = !0, _ = "g"), (L || h === "0" && d === "=") && (L = !0, h = "0", d = "=");
    var g = E === "$" ? n : E === "#" && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "", p = E === "$" ? r : /[%p]/.test(_) ? a : "", w = qn[_], Y = /[defgprs%]/.test(_);
    T = T === void 0 ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function D(y) {
      var U = g, I = p, A, b, v;
      if (_ === "c")
        I = w(y) + I, y = "";
      else {
        y = +y;
        var C = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? c : w(Math.abs(y), T), m && (y = Qa(y)), C && +y == 0 && k !== "+" && (C = !1), U = (C ? k === "(" ? k : u : k === "-" || k === "(" ? "" : k) + U, I = (_ === "s" ? Xn[8 + Nr / 3] : "") + I + (C && k === "(" ? ")" : ""), Y) {
          for (A = -1, b = y.length; ++A < b; )
            if (v = y.charCodeAt(A), 48 > v || v > 57) {
              I = (v === 46 ? i + y.slice(A + 1) : y.slice(A)) + I, y = y.slice(0, A);
              break;
            }
        }
      }
      P && !L && (y = e(y, 1 / 0));
      var $ = U.length + y.length + I.length, F = $ < N ? new Array(N - $ + 1).join(h) : "";
      switch (P && L && (y = e(F + y, F.length ? N - I.length : 1 / 0), F = ""), d) {
        case "<":
          y = U + y + I + F;
          break;
        case "=":
          y = U + F + y + I;
          break;
        case "^":
          y = F.slice(0, $ = F.length >> 1) + U + y + I + F.slice($);
          break;
        default:
          y = F + U + y + I;
          break;
      }
      return o(y);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function l(f, h) {
    var d = s((f = xe(f), f.type = "f", f)), k = Math.max(-8, Math.min(8, Math.floor(Ut(h) / 3))) * 3, E = Math.pow(10, -k), L = Xn[8 + k / 3];
    return function(N) {
      return d(E * N) + L;
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var oe, Fr, Ur;
ts({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ts(t) {
  return oe = ja(t), Fr = oe.format, Ur = oe.formatPrefix, oe;
}
function es(t) {
  return Math.max(0, -Ut(Math.abs(t)));
}
function ns(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ut(e) / 3))) * 3 - Ut(Math.abs(t)));
}
function rs(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ut(e) - Ut(t)) + 1;
}
function is(t, e, n, r) {
  var i = qe(t, e, n), o;
  switch (r = xe(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = ns(i, a)) && (r.precision = o), Ur(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = rs(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = es(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Fr(r);
}
function os(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return mi(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return is(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], u = r[o], c, s, l = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); l-- > 0; ) {
      if (s = ze(a, u, n), s === c)
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
function as() {
  var t = Dr();
  return t.copy = function() {
    return Cr(t, as());
  }, Ce.apply(t, arguments), os(t);
}
function ss(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], o = t[r], a;
  return o < i && (a = n, n = r, r = a, a = i, i = o, o = a), t[n] = e.floor(i), t[r] = e.ceil(o), t;
}
const Oe = /* @__PURE__ */ new Date(), Ie = /* @__PURE__ */ new Date();
function J(t, e, n, r) {
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
  }, i.filter = (o) => J((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, u) => {
    if (a >= a)
      if (u < 0) for (; ++u <= 0; )
        for (; e(a, -1), !o(a); )
          ;
      else for (; --u >= 0; )
        for (; e(a, 1), !o(a); )
          ;
  }), n && (i.count = (o, a) => (Oe.setTime(+o), Ie.setTime(+a), t(Oe), t(Ie), Math.floor(n(Oe, Ie))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const ve = J(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
ve.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? J((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : ve);
ve.range;
const gt = 1e3, rt = gt * 60, mt = rt * 60, pt = mt * 24, dn = pt * 7, Zn = pt * 30, Re = pt * 365, At = J((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * gt);
}, (t, e) => (e - t) / gt, (t) => t.getUTCSeconds());
At.range;
const gn = J((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * gt);
}, (t, e) => {
  t.setTime(+t + e * rt);
}, (t, e) => (e - t) / rt, (t) => t.getMinutes());
gn.range;
const us = J((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * rt);
}, (t, e) => (e - t) / rt, (t) => t.getUTCMinutes());
us.range;
const mn = J((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * gt - t.getMinutes() * rt);
}, (t, e) => {
  t.setTime(+t + e * mt);
}, (t, e) => (e - t) / mt, (t) => t.getHours());
mn.range;
const cs = J((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * mt);
}, (t, e) => (e - t) / mt, (t) => t.getUTCHours());
cs.range;
const jt = J(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * rt) / pt,
  (t) => t.getDate() - 1
);
jt.range;
const pn = J((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / pt, (t) => t.getUTCDate() - 1);
pn.range;
const ls = J((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / pt, (t) => Math.floor(t / pt));
ls.range;
function $t(t) {
  return J((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / dn);
}
const De = $t(0), _e = $t(1), fs = $t(2), hs = $t(3), Yt = $t(4), ds = $t(5), gs = $t(6);
De.range;
_e.range;
fs.range;
hs.range;
Yt.range;
ds.range;
gs.range;
function Tt(t) {
  return J((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / dn);
}
const Yr = Tt(0), Me = Tt(1), ms = Tt(2), ps = Tt(3), Et = Tt(4), ys = Tt(5), ws = Tt(6);
Yr.range;
Me.range;
ms.range;
ps.range;
Et.range;
ys.range;
ws.range;
const yn = J((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
yn.range;
const xs = J((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
xs.range;
const yt = J((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
yt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : J((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
yt.range;
const Mt = J((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
Mt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : J((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
Mt.range;
function vs(t, e, n, r, i, o) {
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
    [n, 1, dn],
    [e, 1, Zn],
    [e, 3, 3 * Zn],
    [t, 1, Re]
  ];
  function u(s, l, f) {
    const h = l < s;
    h && ([s, l] = [l, s]);
    const d = f && typeof f.range == "function" ? f : c(s, l, f), k = d ? d.range(s, +l + 1) : [];
    return h ? k.reverse() : k;
  }
  function c(s, l, f) {
    const h = Math.abs(l - s) / f, d = nn(([, , L]) => L).right(a, h);
    if (d === a.length) return t.every(qe(s / Re, l / Re, f));
    if (d === 0) return ve.every(Math.max(qe(s, l, f), 1));
    const [k, E] = a[h / a[d - 1][2] < a[d][2] / h ? d - 1 : d];
    return k.every(E);
  }
  return [u, c];
}
const [_s, Ms] = vs(yt, yn, De, jt, mn, gn);
function Le(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Pe(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ot(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function bs(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, u = t.months, c = t.shortMonths, s = It(i), l = Rt(i), f = It(o), h = Rt(o), d = It(a), k = Rt(a), E = It(u), L = Rt(u), N = It(c), P = Rt(c), T = {
    a: C,
    A: $,
    b: F,
    B: O,
    c: null,
    d: tr,
    e: tr,
    f: Bs,
    g: nu,
    G: iu,
    H: zs,
    I: qs,
    j: Vs,
    L: Er,
    m: Xs,
    M: Zs,
    p: B,
    q: z,
    Q: rr,
    s: ir,
    S: Gs,
    u: Js,
    U: Qs,
    V: Ks,
    w: js,
    W: tu,
    x: null,
    X: null,
    y: eu,
    Y: ru,
    Z: ou,
    "%": nr
  }, m = {
    a: X,
    A: Z,
    b: K,
    B: ft,
    c: null,
    d: er,
    e: er,
    f: cu,
    g: xu,
    G: _u,
    H: au,
    I: su,
    j: uu,
    L: Or,
    m: lu,
    M: fu,
    p: it,
    q: j,
    Q: rr,
    s: ir,
    S: hu,
    u: du,
    U: gu,
    V: mu,
    w: pu,
    W: yu,
    x: null,
    X: null,
    y: wu,
    Y: vu,
    Z: Mu,
    "%": nr
  }, _ = {
    a: D,
    A: y,
    b: U,
    B: I,
    c: A,
    d: Kn,
    e: Kn,
    f: Rs,
    g: Qn,
    G: Jn,
    H: jn,
    I: jn,
    j: Es,
    L: Is,
    m: Ys,
    M: Hs,
    p: Y,
    q: Us,
    Q: Ps,
    s: Ws,
    S: Os,
    u: As,
    U: Cs,
    V: Ds,
    w: Ss,
    W: Ns,
    x: b,
    X: v,
    y: Qn,
    Y: Jn,
    Z: Fs,
    "%": Ls
  };
  T.x = g(n, T), T.X = g(r, T), T.c = g(e, T), m.x = g(n, m), m.X = g(r, m), m.c = g(e, m);
  function g(S, M) {
    return function(H) {
      var x = [], V = -1, W = 0, G = S.length, tt, ht, te;
      for (H instanceof Date || (H = /* @__PURE__ */ new Date(+H)); ++V < G; )
        S.charCodeAt(V) === 37 && (x.push(S.slice(W, V)), (ht = Gn[tt = S.charAt(++V)]) != null ? tt = S.charAt(++V) : ht = tt === "e" ? " " : "0", (te = M[tt]) && (tt = te(H, ht)), x.push(tt), W = V + 1);
      return x.push(S.slice(W, V)), x.join("");
    };
  }
  function p(S, M) {
    return function(H) {
      var x = Ot(1900, void 0, 1), V = w(x, S, H += "", 0), W, G;
      if (V != H.length) return null;
      if ("Q" in x) return new Date(x.Q);
      if ("s" in x) return new Date(x.s * 1e3 + ("L" in x ? x.L : 0));
      if (M && !("Z" in x) && (x.Z = 0), "p" in x && (x.H = x.H % 12 + x.p * 12), x.m === void 0 && (x.m = "q" in x ? x.q : 0), "V" in x) {
        if (x.V < 1 || x.V > 53) return null;
        "w" in x || (x.w = 1), "Z" in x ? (W = Pe(Ot(x.y, 0, 1)), G = W.getUTCDay(), W = G > 4 || G === 0 ? Me.ceil(W) : Me(W), W = pn.offset(W, (x.V - 1) * 7), x.y = W.getUTCFullYear(), x.m = W.getUTCMonth(), x.d = W.getUTCDate() + (x.w + 6) % 7) : (W = Le(Ot(x.y, 0, 1)), G = W.getDay(), W = G > 4 || G === 0 ? _e.ceil(W) : _e(W), W = jt.offset(W, (x.V - 1) * 7), x.y = W.getFullYear(), x.m = W.getMonth(), x.d = W.getDate() + (x.w + 6) % 7);
      } else ("W" in x || "U" in x) && ("w" in x || (x.w = "u" in x ? x.u % 7 : "W" in x ? 1 : 0), G = "Z" in x ? Pe(Ot(x.y, 0, 1)).getUTCDay() : Le(Ot(x.y, 0, 1)).getDay(), x.m = 0, x.d = "W" in x ? (x.w + 6) % 7 + x.W * 7 - (G + 5) % 7 : x.w + x.U * 7 - (G + 6) % 7);
      return "Z" in x ? (x.H += x.Z / 100 | 0, x.M += x.Z % 100, Pe(x)) : Le(x);
    };
  }
  function w(S, M, H, x) {
    for (var V = 0, W = M.length, G = H.length, tt, ht; V < W; ) {
      if (x >= G) return -1;
      if (tt = M.charCodeAt(V++), tt === 37) {
        if (tt = M.charAt(V++), ht = _[tt in Gn ? M.charAt(V++) : tt], !ht || (x = ht(S, H, x)) < 0) return -1;
      } else if (tt != H.charCodeAt(x++))
        return -1;
    }
    return x;
  }
  function Y(S, M, H) {
    var x = s.exec(M.slice(H));
    return x ? (S.p = l.get(x[0].toLowerCase()), H + x[0].length) : -1;
  }
  function D(S, M, H) {
    var x = d.exec(M.slice(H));
    return x ? (S.w = k.get(x[0].toLowerCase()), H + x[0].length) : -1;
  }
  function y(S, M, H) {
    var x = f.exec(M.slice(H));
    return x ? (S.w = h.get(x[0].toLowerCase()), H + x[0].length) : -1;
  }
  function U(S, M, H) {
    var x = N.exec(M.slice(H));
    return x ? (S.m = P.get(x[0].toLowerCase()), H + x[0].length) : -1;
  }
  function I(S, M, H) {
    var x = E.exec(M.slice(H));
    return x ? (S.m = L.get(x[0].toLowerCase()), H + x[0].length) : -1;
  }
  function A(S, M, H) {
    return w(S, e, M, H);
  }
  function b(S, M, H) {
    return w(S, n, M, H);
  }
  function v(S, M, H) {
    return w(S, r, M, H);
  }
  function C(S) {
    return a[S.getDay()];
  }
  function $(S) {
    return o[S.getDay()];
  }
  function F(S) {
    return c[S.getMonth()];
  }
  function O(S) {
    return u[S.getMonth()];
  }
  function B(S) {
    return i[+(S.getHours() >= 12)];
  }
  function z(S) {
    return 1 + ~~(S.getMonth() / 3);
  }
  function X(S) {
    return a[S.getUTCDay()];
  }
  function Z(S) {
    return o[S.getUTCDay()];
  }
  function K(S) {
    return c[S.getUTCMonth()];
  }
  function ft(S) {
    return u[S.getUTCMonth()];
  }
  function it(S) {
    return i[+(S.getUTCHours() >= 12)];
  }
  function j(S) {
    return 1 + ~~(S.getUTCMonth() / 3);
  }
  return {
    format: function(S) {
      var M = g(S += "", T);
      return M.toString = function() {
        return S;
      }, M;
    },
    parse: function(S) {
      var M = p(S += "", !1);
      return M.toString = function() {
        return S;
      }, M;
    },
    utcFormat: function(S) {
      var M = g(S += "", m);
      return M.toString = function() {
        return S;
      }, M;
    },
    utcParse: function(S) {
      var M = p(S += "", !0);
      return M.toString = function() {
        return S;
      }, M;
    }
  };
}
var Gn = { "-": "", _: " ", 0: "0" }, Q = /^\s*\d+/, $s = /^%/, Ts = /[\\^$*+?|[\]().{}]/g;
function q(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
}
function ks(t) {
  return t.replace(Ts, "\\$&");
}
function It(t) {
  return new RegExp("^(?:" + t.map(ks).join("|") + ")", "i");
}
function Rt(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function Ss(t, e, n) {
  var r = Q.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function As(t, e, n) {
  var r = Q.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Cs(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Ds(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Ns(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function Jn(t, e, n) {
  var r = Q.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Qn(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Fs(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Us(t, e, n) {
  var r = Q.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ys(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function Kn(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Es(t, e, n) {
  var r = Q.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function jn(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Hs(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Os(t, e, n) {
  var r = Q.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Is(t, e, n) {
  var r = Q.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Rs(t, e, n) {
  var r = Q.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ls(t, e, n) {
  var r = $s.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Ps(t, e, n) {
  var r = Q.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Ws(t, e, n) {
  var r = Q.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function tr(t, e) {
  return q(t.getDate(), e, 2);
}
function zs(t, e) {
  return q(t.getHours(), e, 2);
}
function qs(t, e) {
  return q(t.getHours() % 12 || 12, e, 2);
}
function Vs(t, e) {
  return q(1 + jt.count(yt(t), t), e, 3);
}
function Er(t, e) {
  return q(t.getMilliseconds(), e, 3);
}
function Bs(t, e) {
  return Er(t, e) + "000";
}
function Xs(t, e) {
  return q(t.getMonth() + 1, e, 2);
}
function Zs(t, e) {
  return q(t.getMinutes(), e, 2);
}
function Gs(t, e) {
  return q(t.getSeconds(), e, 2);
}
function Js(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Qs(t, e) {
  return q(De.count(yt(t) - 1, t), e, 2);
}
function Hr(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t);
}
function Ks(t, e) {
  return t = Hr(t), q(Yt.count(yt(t), t) + (yt(t).getDay() === 4), e, 2);
}
function js(t) {
  return t.getDay();
}
function tu(t, e) {
  return q(_e.count(yt(t) - 1, t), e, 2);
}
function eu(t, e) {
  return q(t.getFullYear() % 100, e, 2);
}
function nu(t, e) {
  return t = Hr(t), q(t.getFullYear() % 100, e, 2);
}
function ru(t, e) {
  return q(t.getFullYear() % 1e4, e, 4);
}
function iu(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t), q(t.getFullYear() % 1e4, e, 4);
}
function ou(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + q(e / 60 | 0, "0", 2) + q(e % 60, "0", 2);
}
function er(t, e) {
  return q(t.getUTCDate(), e, 2);
}
function au(t, e) {
  return q(t.getUTCHours(), e, 2);
}
function su(t, e) {
  return q(t.getUTCHours() % 12 || 12, e, 2);
}
function uu(t, e) {
  return q(1 + pn.count(Mt(t), t), e, 3);
}
function Or(t, e) {
  return q(t.getUTCMilliseconds(), e, 3);
}
function cu(t, e) {
  return Or(t, e) + "000";
}
function lu(t, e) {
  return q(t.getUTCMonth() + 1, e, 2);
}
function fu(t, e) {
  return q(t.getUTCMinutes(), e, 2);
}
function hu(t, e) {
  return q(t.getUTCSeconds(), e, 2);
}
function du(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function gu(t, e) {
  return q(Yr.count(Mt(t) - 1, t), e, 2);
}
function Ir(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Et(t) : Et.ceil(t);
}
function mu(t, e) {
  return t = Ir(t), q(Et.count(Mt(t), t) + (Mt(t).getUTCDay() === 4), e, 2);
}
function pu(t) {
  return t.getUTCDay();
}
function yu(t, e) {
  return q(Me.count(Mt(t) - 1, t), e, 2);
}
function wu(t, e) {
  return q(t.getUTCFullYear() % 100, e, 2);
}
function xu(t, e) {
  return t = Ir(t), q(t.getUTCFullYear() % 100, e, 2);
}
function vu(t, e) {
  return q(t.getUTCFullYear() % 1e4, e, 4);
}
function _u(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Et(t) : Et.ceil(t), q(t.getUTCFullYear() % 1e4, e, 4);
}
function Mu() {
  return "+0000";
}
function nr() {
  return "%";
}
function rr(t) {
  return +t;
}
function ir(t) {
  return Math.floor(+t / 1e3);
}
var kt, wn, Rr, Lr;
bu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function bu(t) {
  return kt = bs(t), wn = kt.format, kt.parse, Rr = kt.utcFormat, Lr = kt.utcParse, kt;
}
var Pr = "%Y-%m-%dT%H:%M:%S.%LZ";
function $u(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Rr(Pr);
function Tu(t) {
  var e = new Date(t);
  return isNaN(e) ? null : e;
}
var ku = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? Tu : Lr(Pr);
function Su(t) {
  return new Date(t);
}
function Au(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Wr(t, e, n, r, i, o, a, u, c, s) {
  var l = Dr(), f = l.invert, h = l.domain, d = s(".%L"), k = s(":%S"), E = s("%I:%M"), L = s("%I %p"), N = s("%a %d"), P = s("%b %d"), T = s("%B"), m = s("%Y");
  function _(g) {
    return (c(g) < g ? d : u(g) < g ? k : a(g) < g ? E : o(g) < g ? L : r(g) < g ? i(g) < g ? N : P : n(g) < g ? T : m)(g);
  }
  return l.invert = function(g) {
    return new Date(f(g));
  }, l.domain = function(g) {
    return arguments.length ? h(Array.from(g, Au)) : h().map(Su);
  }, l.ticks = function(g) {
    var p = h();
    return t(p[0], p[p.length - 1], g ?? 10);
  }, l.tickFormat = function(g, p) {
    return p == null ? _ : s(p);
  }, l.nice = function(g) {
    var p = h();
    return (!g || typeof g.range != "function") && (g = e(p[0], p[p.length - 1], g ?? 10)), g ? h(ss(p, g)) : l;
  }, l.copy = function() {
    return Cr(l, Wr(t, e, n, r, i, o, a, u, c, s));
  }, l;
}
function Cu() {
  return Ce.apply(Wr(_s, Ms, yt, yn, De, jt, mn, gn, At, wn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ht = 0, qt = 0, Lt = 0, zr = 1e3, be, Vt, $e = 0, bt = 0, Ne = 0, Jt = typeof performance == "object" && performance.now ? performance : Date, qr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function xn() {
  return bt || (qr(Du), bt = Jt.now() + Ne);
}
function Du() {
  bt = 0;
}
function Te() {
  this._call = this._time = this._next = null;
}
Te.prototype = Vr.prototype = {
  constructor: Te,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? xn() : +n) + (e == null ? 0 : +e), !this._next && Vt !== this && (Vt ? Vt._next = this : be = this, Vt = this), this._call = t, this._time = n, Ke();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ke());
  }
};
function Vr(t, e, n) {
  var r = new Te();
  return r.restart(t, e, n), r;
}
function Nu() {
  xn(), ++Ht;
  for (var t = be, e; t; )
    (e = bt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ht;
}
function or() {
  bt = ($e = Jt.now()) + Ne, Ht = qt = 0;
  try {
    Nu();
  } finally {
    Ht = 0, Uu(), bt = 0;
  }
}
function Fu() {
  var t = Jt.now(), e = t - $e;
  e > zr && (Ne -= e, $e = t);
}
function Uu() {
  for (var t, e = be, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : be = n);
  Vt = t, Ke(r);
}
function Ke(t) {
  if (!Ht) {
    qt && (qt = clearTimeout(qt));
    var e = t - bt;
    e > 24 ? (t < 1 / 0 && (qt = setTimeout(or, t - Jt.now() - Ne)), Lt && (Lt = clearInterval(Lt))) : (Lt || ($e = Jt.now(), Lt = setInterval(Fu, zr)), Ht = 1, qr(or));
  }
}
function ar(t, e, n) {
  var r = new Te();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Yu = an("start", "end", "cancel", "interrupt"), Eu = [], Br = 0, je = 1, tn = 2, fe = 3, sr = 4, en = 5, he = 6;
function Fe(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Hu(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Yu,
    tween: Eu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Br
  });
}
function vn(t, e) {
  var n = st(t, e);
  if (n.state > Br) throw new Error("too late; already scheduled");
  return n;
}
function lt(t, e) {
  var n = st(t, e);
  if (n.state > fe) throw new Error("too late; already running");
  return n;
}
function st(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Hu(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Vr(o, 0, n.time);
  function o(s) {
    n.state = je, n.timer.restart(a, n.delay, n.time), n.delay <= s && a(s - n.delay);
  }
  function a(s) {
    var l, f, h, d;
    if (n.state !== je) return c();
    for (l in r)
      if (d = r[l], d.name === n.name) {
        if (d.state === fe) return ar(a);
        d.state === sr ? (d.state = he, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = he, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (ar(function() {
      n.state === fe && (n.state = sr, n.timer.restart(u, n.delay, n.time), u(s));
    }), n.state = tn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === tn) {
      for (n.state = fe, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l)
        (d = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function u(s) {
    for (var l = s < n.duration ? n.ease.call(null, s / n.duration) : (n.timer.restart(c), n.state = en, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    n.state === en && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = he, n.timer.stop(), delete r[e];
    for (var s in r) return;
    delete t.__transition;
  }
}
function Ou(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > tn && r.state < en, r.state = he, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Iu(t) {
  return this.each(function() {
    Ou(this, t);
  });
}
function Ru(t, e) {
  var n, r;
  return function() {
    var i = lt(this, t), o = i.tween;
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
function Lu(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = lt(this, t), a = o.tween;
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
function Pu(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = st(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ru : Lu)(n, t, e));
}
function _n(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = lt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return st(i, r).value[e];
  };
}
function Xr(t, e) {
  var n;
  return (typeof e == "number" ? ot : e instanceof xt ? ye : (n = xt(e)) ? (e = n, ye) : kr)(t, e);
}
function Wu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function zu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Vu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Bu(t, e, n) {
  var r, i, o;
  return function() {
    var a, u = n(this), c;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = u + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, u)));
  };
}
function Xu(t, e, n) {
  var r, i, o;
  return function() {
    var a, u = n(this), c;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = u + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, u)));
  };
}
function Zu(t, e) {
  var n = Ae(t), r = n === "transform" ? La : Xr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Xu : Bu)(n, r, _n(this, "attr." + t, e)) : e == null ? (n.local ? zu : Wu)(n) : (n.local ? Vu : qu)(n, r, e));
}
function Gu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Ju(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Qu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Ju(t, o)), n;
  }
  return i._value = e, i;
}
function Ku(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Gu(t, o)), n;
  }
  return i._value = e, i;
}
function ju(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ae(t);
  return this.tween(n, (r.local ? Qu : Ku)(r, e));
}
function tc(t, e) {
  return function() {
    vn(this, t).delay = +e.apply(this, arguments);
  };
}
function ec(t, e) {
  return e = +e, function() {
    vn(this, t).delay = e;
  };
}
function nc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tc : ec)(e, t)) : st(this.node(), e).delay;
}
function rc(t, e) {
  return function() {
    lt(this, t).duration = +e.apply(this, arguments);
  };
}
function ic(t, e) {
  return e = +e, function() {
    lt(this, t).duration = e;
  };
}
function oc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rc : ic)(e, t)) : st(this.node(), e).duration;
}
function ac(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    lt(this, t).ease = e;
  };
}
function sc(t) {
  var e = this._id;
  return arguments.length ? this.each(ac(e, t)) : st(this.node(), e).ease;
}
function uc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    lt(this, t).ease = n;
  };
}
function cc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(uc(this._id, t));
}
function lc(t) {
  typeof t != "function" && (t = mr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, u = r[i] = [], c, s = 0; s < a; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && u.push(c);
  return new ct(r, this._parents, this._name, this._id);
}
function fc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var c = e[u], s = n[u], l = c.length, f = a[u] = new Array(l), h, d = 0; d < l; ++d)
      (h = c[d] || s[d]) && (f[d] = h);
  for (; u < r; ++u)
    a[u] = e[u];
  return new ct(a, this._parents, this._name, this._id);
}
function hc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function dc(t, e, n) {
  var r, i, o = hc(e) ? vn : lt;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(e, n), a.on = i;
  };
}
function gc(t, e) {
  var n = this._id;
  return arguments.length < 2 ? st(this.node(), n).on.on(t) : this.each(dc(n, t, e));
}
function mc(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function pc() {
  return this.on("end.remove", mc(this._id));
}
function yc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = sn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], c = u.length, s = o[a] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = u[h]) && (f = t.call(l, l.__data__, h, u)) && ("__data__" in l && (f.__data__ = l.__data__), s[h] = f, Fe(s[h], e, n, h, s, st(l, n)));
  return new ct(o, this._parents, e, n);
}
function wc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = gr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var c = r[u], s = c.length, l, f = 0; f < s; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), d, k = st(l, n), E = 0, L = h.length; E < L; ++E)
          (d = h[E]) && Fe(d, e, n, E, h, k);
        o.push(h), a.push(l);
      }
  return new ct(o, a, e, n);
}
var xc = Kt.prototype.constructor;
function vc() {
  return new xc(this._groups, this._parents);
}
function _c(t, e) {
  var n, r, i;
  return function() {
    var o = Ft(this, t), a = (this.style.removeProperty(t), Ft(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function Zr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mc(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Ft(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function bc(t, e, n) {
  var r, i, o;
  return function() {
    var a = Ft(this, t), u = n(this), c = u + "";
    return u == null && (c = u = (this.style.removeProperty(t), Ft(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, u));
  };
}
function $c(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, u;
  return function() {
    var c = lt(this, t), s = c.on, l = c.value[o] == null ? u || (u = Zr(e)) : void 0;
    (s !== n || i !== l) && (r = (n = s).copy()).on(a, i = l), c.on = r;
  };
}
function Tc(t, e, n) {
  var r = (t += "") == "transform" ? Ra : Xr;
  return e == null ? this.styleTween(t, _c(t, r)).on("end.style." + t, Zr(t)) : typeof e == "function" ? this.styleTween(t, bc(t, r, _n(this, "style." + t, e))).each($c(this._id, t)) : this.styleTween(t, Mc(t, r, e), n).on("end.style." + t, null);
}
function kc(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Sc(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && kc(t, a, n)), r;
  }
  return o._value = e, o;
}
function Ac(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Sc(t, e, n ?? ""));
}
function Cc(t) {
  return function() {
    this.textContent = t;
  };
}
function Dc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Nc(t) {
  return this.tween("text", typeof t == "function" ? Dc(_n(this, "text", t)) : Cc(t == null ? "" : t + ""));
}
function Fc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Uc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Fc(i)), e;
  }
  return r._value = t, r;
}
function Yc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Uc(t));
}
function Ec() {
  for (var t = this._name, e = this._id, n = Gr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
      if (c = a[s]) {
        var l = st(c, e);
        Fe(c, t, n, s, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new ct(r, this._parents, t, n);
}
function Hc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var u = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var s = lt(this, r), l = s.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(u), e._.interrupt.push(u), e._.end.push(c)), s.on = e;
    }), i === 0 && o();
  });
}
var Oc = 0;
function ct(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Gr() {
  return ++Oc;
}
var dt = Kt.prototype;
ct.prototype = {
  constructor: ct,
  select: yc,
  selectAll: wc,
  selectChild: dt.selectChild,
  selectChildren: dt.selectChildren,
  filter: lc,
  merge: fc,
  selection: vc,
  transition: Ec,
  call: dt.call,
  nodes: dt.nodes,
  node: dt.node,
  size: dt.size,
  empty: dt.empty,
  each: dt.each,
  on: gc,
  attr: Zu,
  attrTween: ju,
  style: Tc,
  styleTween: Ac,
  text: Nc,
  textTween: Yc,
  remove: pc,
  tween: Pu,
  delay: nc,
  duration: oc,
  ease: sc,
  easeVarying: cc,
  end: Hc,
  [Symbol.iterator]: dt[Symbol.iterator]
};
function Ic(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Rc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ic
};
function Lc(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Pc(t) {
  var e, n;
  t instanceof ct ? (e = t._id, t = t._name) : (e = Gr(), (n = Rc).time = xn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, c, s = 0; s < u; ++s)
      (c = a[s]) && Fe(c, t, e, s, a, n || Lc(c, e));
  return new ct(r, this._parents, t, e);
}
Kt.prototype.interrupt = Iu;
Kt.prototype.transition = Pc;
var Wc = [null];
function zc(t, e) {
  var n = t.__transition, r, i;
  if (n) {
    e = e == null ? null : e + "";
    for (i in n)
      if ((r = n[i]).state > je && r.name === e)
        return new ct([[t]], Wc, e, +i);
  }
  return null;
}
const qc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function Jr(t) {
  R("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(qc);
  const e = R("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return e.show = function(n) {
    e.transition().duration(100).style("opacity", 0.95), e.html(t.apply(null, arguments)).style("left", n.pageX + "px").style("top", n.pageY - 28 + "px");
  }, e.hide = function(n) {
    e.transition().duration(100).style("opacity", 0);
  }, e;
}
function Vc(t) {
  return cr(t.nodes().map((e) => e.getComputedTextLength()));
}
function Bc(t) {
  return function(e) {
    return e.length > t ? e.slice(0, t - 1) + "…" : e;
  };
}
const Bt = 1, Xc = 2;
function Qr(t, e) {
  let n = ["#FFF", "#FFF"], r = Nt(n), i = 5, o, a = "#AAA", u = 40, c = 3e3, s;
  function l(f) {
    let h = e.domain(), d = Jr((_) => _), k = Nt(n), E = Nt(n.reverse()), L = Bc(u), N = f.selectAll(".row").data(h, e).order(), P = N.enter().append("g").attr("class", "row"), T = N.exit(), m = N.select("text");
    N = N.merge(P).attr("transform", (_) => "translate(0," + e(_) + ")"), T.remove(), P.append("rect").attr("y", 0.5).attr("width", c).attr("height", e.bandwidth()).attr("stroke", a).attr("stroke-width", 0.75).attr("fill", k), P.append("path").attr("stroke", E), m = m.merge(
      P.append("text").attr("y", e.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(_, g) {
        R(this).text() != g && d.show(g);
      }).on("mouseout", d.hide)
    ).text(L), s === void 0 && (s = Vc(m) + 2 * i, s = t === Bt ? c - s : s), o = t === Bt ? [0, s] : [s, c], m.attr("text-anchor", t === Bt ? "start" : "end").attr("dx", t === Bt ? i : -i).attr("x", s), f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", a).attr("stroke-width", 1.75).attr("d", "M" + (s + 0.5) + ",0.5V" + e.range()[1]);
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
function Zc(t) {
  return Qr(Xc, t);
}
function Gc(t) {
  return Qr(Bt, t);
}
var Mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Kr = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Mn, function() {
    var n = 1e3, r = 6e4, i = 36e5, o = "millisecond", a = "second", u = "minute", c = "hour", s = "day", l = "week", f = "month", h = "quarter", d = "year", k = "date", E = "Invalid Date", L = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, P = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var b = ["th", "st", "nd", "rd"], v = A % 100;
      return "[" + A + (b[(v - 20) % 10] || b[v] || b[0]) + "]";
    } }, T = function(A, b, v) {
      var C = String(A);
      return !C || C.length >= b ? A : "" + Array(b + 1 - C.length).join(v) + A;
    }, m = { s: T, z: function(A) {
      var b = -A.utcOffset(), v = Math.abs(b), C = Math.floor(v / 60), $ = v % 60;
      return (b <= 0 ? "+" : "-") + T(C, 2, "0") + ":" + T($, 2, "0");
    }, m: function A(b, v) {
      if (b.date() < v.date()) return -A(v, b);
      var C = 12 * (v.year() - b.year()) + (v.month() - b.month()), $ = b.clone().add(C, f), F = v - $ < 0, O = b.clone().add(C + (F ? -1 : 1), f);
      return +(-(C + (v - $) / (F ? $ - O : O - $)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: f, y: d, w: l, d: s, D: k, h: c, m: u, s: a, ms: o, Q: h }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, _ = "en", g = {};
    g[_] = P;
    var p = "$isDayjsObject", w = function(A) {
      return A instanceof U || !(!A || !A[p]);
    }, Y = function A(b, v, C) {
      var $;
      if (!b) return _;
      if (typeof b == "string") {
        var F = b.toLowerCase();
        g[F] && ($ = F), v && (g[F] = v, $ = F);
        var O = b.split("-");
        if (!$ && O.length > 1) return A(O[0]);
      } else {
        var B = b.name;
        g[B] = b, $ = B;
      }
      return !C && $ && (_ = $), $ || !C && _;
    }, D = function(A, b) {
      if (w(A)) return A.clone();
      var v = typeof b == "object" ? b : {};
      return v.date = A, v.args = arguments, new U(v);
    }, y = m;
    y.l = Y, y.i = w, y.w = function(A, b) {
      return D(A, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var U = function() {
      function A(v) {
        this.$L = Y(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[p] = !0;
      }
      var b = A.prototype;
      return b.parse = function(v) {
        this.$d = function(C) {
          var $ = C.date, F = C.utc;
          if ($ === null) return /* @__PURE__ */ new Date(NaN);
          if (y.u($)) return /* @__PURE__ */ new Date();
          if ($ instanceof Date) return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var O = $.match(L);
            if (O) {
              var B = O[2] - 1 || 0, z = (O[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(O[1], B, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z)) : new Date(O[1], B, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z);
            }
          }
          return new Date($);
        }(v), this.init();
      }, b.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, b.$utils = function() {
        return y;
      }, b.isValid = function() {
        return this.$d.toString() !== E;
      }, b.isSame = function(v, C) {
        var $ = D(v);
        return this.startOf(C) <= $ && $ <= this.endOf(C);
      }, b.isAfter = function(v, C) {
        return D(v) < this.startOf(C);
      }, b.isBefore = function(v, C) {
        return this.endOf(C) < D(v);
      }, b.$g = function(v, C, $) {
        return y.u(v) ? this[C] : this.set($, v);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(v, C) {
        var $ = this, F = !!y.u(C) || C, O = y.p(v), B = function(S, M) {
          var H = y.w($.$u ? Date.UTC($.$y, M, S) : new Date($.$y, M, S), $);
          return F ? H : H.endOf(s);
        }, z = function(S, M) {
          return y.w($.toDate()[S].apply($.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)), $);
        }, X = this.$W, Z = this.$M, K = this.$D, ft = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case d:
            return F ? B(1, 0) : B(31, 11);
          case f:
            return F ? B(1, Z) : B(0, Z + 1);
          case l:
            var it = this.$locale().weekStart || 0, j = (X < it ? X + 7 : X) - it;
            return B(F ? K - j : K + (6 - j), Z);
          case s:
          case k:
            return z(ft + "Hours", 0);
          case c:
            return z(ft + "Minutes", 1);
          case u:
            return z(ft + "Seconds", 2);
          case a:
            return z(ft + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(v) {
        return this.startOf(v, !1);
      }, b.$set = function(v, C) {
        var $, F = y.p(v), O = "set" + (this.$u ? "UTC" : ""), B = ($ = {}, $[s] = O + "Date", $[k] = O + "Date", $[f] = O + "Month", $[d] = O + "FullYear", $[c] = O + "Hours", $[u] = O + "Minutes", $[a] = O + "Seconds", $[o] = O + "Milliseconds", $)[F], z = F === s ? this.$D + (C - this.$W) : C;
        if (F === f || F === d) {
          var X = this.clone().set(k, 1);
          X.$d[B](z), X.init(), this.$d = X.set(k, Math.min(this.$D, X.daysInMonth())).$d;
        } else B && this.$d[B](z);
        return this.init(), this;
      }, b.set = function(v, C) {
        return this.clone().$set(v, C);
      }, b.get = function(v) {
        return this[y.p(v)]();
      }, b.add = function(v, C) {
        var $, F = this;
        v = Number(v);
        var O = y.p(C), B = function(Z) {
          var K = D(F);
          return y.w(K.date(K.date() + Math.round(Z * v)), F);
        };
        if (O === f) return this.set(f, this.$M + v);
        if (O === d) return this.set(d, this.$y + v);
        if (O === s) return B(1);
        if (O === l) return B(7);
        var z = ($ = {}, $[u] = r, $[c] = i, $[a] = n, $)[O] || 1, X = this.$d.getTime() + v * z;
        return y.w(X, this);
      }, b.subtract = function(v, C) {
        return this.add(-1 * v, C);
      }, b.format = function(v) {
        var C = this, $ = this.$locale();
        if (!this.isValid()) return $.invalidDate || E;
        var F = v || "YYYY-MM-DDTHH:mm:ssZ", O = y.z(this), B = this.$H, z = this.$m, X = this.$M, Z = $.weekdays, K = $.months, ft = $.meridiem, it = function(M, H, x, V) {
          return M && (M[H] || M(C, F)) || x[H].slice(0, V);
        }, j = function(M) {
          return y.s(B % 12 || 12, M, "0");
        }, S = ft || function(M, H, x) {
          var V = M < 12 ? "AM" : "PM";
          return x ? V.toLowerCase() : V;
        };
        return F.replace(N, function(M, H) {
          return H || function(x) {
            switch (x) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return y.s(C.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return y.s(X + 1, 2, "0");
              case "MMM":
                return it($.monthsShort, X, K, 3);
              case "MMMM":
                return it(K, X);
              case "D":
                return C.$D;
              case "DD":
                return y.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return it($.weekdaysMin, C.$W, Z, 2);
              case "ddd":
                return it($.weekdaysShort, C.$W, Z, 3);
              case "dddd":
                return Z[C.$W];
              case "H":
                return String(B);
              case "HH":
                return y.s(B, 2, "0");
              case "h":
                return j(1);
              case "hh":
                return j(2);
              case "a":
                return S(B, z, !0);
              case "A":
                return S(B, z, !1);
              case "m":
                return String(z);
              case "mm":
                return y.s(z, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return y.s(C.$s, 2, "0");
              case "SSS":
                return y.s(C.$ms, 3, "0");
              case "Z":
                return O;
            }
            return null;
          }(M) || O.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(v, C, $) {
        var F, O = this, B = y.p(C), z = D(v), X = (z.utcOffset() - this.utcOffset()) * r, Z = this - z, K = function() {
          return y.m(O, z);
        };
        switch (B) {
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
      }, b.locale = function(v, C) {
        if (!v) return this.$L;
        var $ = this.clone(), F = Y(v, C, !0);
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
      }, A;
    }(), I = U.prototype;
    return D.prototype = I, [["$ms", o], ["$s", a], ["$m", u], ["$H", c], ["$W", s], ["$M", f], ["$y", d], ["$D", k]].forEach(function(A) {
      I[A[1]] = function(b) {
        return this.$g(b, A[0], A[1]);
      };
    }), D.extend = function(A, b) {
      return A.$i || (A(b, U, D), A.$i = !0), D;
    }, D.locale = Y, D.isDayjs = w, D.unix = function(A) {
      return D(1e3 * A);
    }, D.en = g[_], D.Ls = g, D.p = {}, D;
  });
})(Kr);
var Jc = Kr.exports;
const $n = /* @__PURE__ */ bn(Jc);
var jr = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Mn, function() {
    var n, r, i = 1e3, o = 6e4, a = 36e5, u = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, s = 31536e6, l = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: s, months: l, days: u, hours: a, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, d = function(g) {
      return g instanceof m;
    }, k = function(g, p, w) {
      return new m(g, w, p.$l);
    }, E = function(g) {
      return r.p(g) + "s";
    }, L = function(g) {
      return g < 0;
    }, N = function(g) {
      return L(g) ? Math.ceil(g) : Math.floor(g);
    }, P = function(g) {
      return Math.abs(g);
    }, T = function(g, p) {
      return g ? L(g) ? { negative: !0, format: "" + P(g) + p } : { negative: !1, format: "" + g + p } : { negative: !1, format: "" };
    }, m = function() {
      function g(w, Y, D) {
        var y = this;
        if (this.$d = {}, this.$l = D, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Y) return k(w * h[E(Y)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function(A) {
          y.$d[E(A)] = w[A];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var U = w.match(f);
          if (U) {
            var I = U.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = I[0], this.$d.months = I[1], this.$d.weeks = I[2], this.$d.days = I[3], this.$d.hours = I[4], this.$d.minutes = I[5], this.$d.seconds = I[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = g.prototype;
      return p.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(Y, D) {
          return Y + (w.$d[D] || 0) * h[D];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = N(w / s), w %= s, this.$d.months = N(w / l), w %= l, this.$d.days = N(w / u), w %= u, this.$d.hours = N(w / a), w %= a, this.$d.minutes = N(w / o), w %= o, this.$d.seconds = N(w / i), w %= i, this.$d.milliseconds = w;
      }, p.toISOString = function() {
        var w = T(this.$d.years, "Y"), Y = T(this.$d.months, "M"), D = +this.$d.days || 0;
        this.$d.weeks && (D += 7 * this.$d.weeks);
        var y = T(D, "D"), U = T(this.$d.hours, "H"), I = T(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3, A = Math.round(1e3 * A) / 1e3);
        var b = T(A, "S"), v = w.negative || Y.negative || y.negative || U.negative || I.negative || b.negative, C = U.format || I.format || b.format ? "T" : "", $ = (v ? "-" : "") + "P" + w.format + Y.format + y.format + C + U.format + I.format + b.format;
        return $ === "P" || $ === "-P" ? "P0D" : $;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(w) {
        var Y = w || "YYYY-MM-DDTHH:mm:ss", D = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return Y.replace(c, function(y, U) {
          return U || String(D[y]);
        });
      }, p.as = function(w) {
        return this.$ms / h[E(w)];
      }, p.get = function(w) {
        var Y = this.$ms, D = E(w);
        return D === "milliseconds" ? Y %= 1e3 : Y = D === "weeks" ? N(Y / h[D]) : this.$d[D], Y || 0;
      }, p.add = function(w, Y, D) {
        var y;
        return y = Y ? w * h[E(Y)] : d(w) ? w.$ms : k(w, this).$ms, k(this.$ms + y * (D ? -1 : 1), this);
      }, p.subtract = function(w, Y) {
        return this.add(w, Y, !0);
      }, p.locale = function(w) {
        var Y = this.clone();
        return Y.$l = w, Y;
      }, p.clone = function() {
        return k(this.$ms, this);
      }, p.humanize = function(w) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
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
    }(), _ = function(g, p, w) {
      return g.add(p.years() * w, "y").add(p.months() * w, "M").add(p.days() * w, "d").add(p.hours() * w, "h").add(p.minutes() * w, "m").add(p.seconds() * w, "s").add(p.milliseconds() * w, "ms");
    };
    return function(g, p, w) {
      n = w, r = w().$utils(), w.duration = function(y, U) {
        var I = w.locale();
        return k(y, { $l: I }, U);
      }, w.isDuration = d;
      var Y = p.prototype.add, D = p.prototype.subtract;
      p.prototype.add = function(y, U) {
        return d(y) ? _(this, y, 1) : Y.bind(this)(y, U);
      }, p.prototype.subtract = function(y, U) {
        return d(y) ? _(this, y, -1) : D.bind(this)(y, U);
      };
    };
  });
})(jr);
var Qc = jr.exports;
const Kc = /* @__PURE__ */ bn(Qc);
var ti = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Mn, function() {
    return function(n, r, i) {
      n = n || {};
      var o = r.prototype, a = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function u(s, l, f, h) {
        return o.fromToBase(s, l, f, h);
      }
      i.en.relativeTime = a, o.fromToBase = function(s, l, f, h, d) {
        for (var k, E, L, N = f.$locale().relativeTime || a, P = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], T = P.length, m = 0; m < T; m += 1) {
          var _ = P[m];
          _.d && (k = h ? i(s).diff(f, _.d, !0) : f.diff(s, _.d, !0));
          var g = (n.rounding || Math.round)(Math.abs(k));
          if (L = k > 0, g <= _.r || !_.r) {
            g <= 1 && m > 0 && (_ = P[m - 1]);
            var p = N[_.l];
            d && (g = d("" + g)), E = typeof p == "string" ? p.replace("%d", g) : p(g, l, _.l, L);
            break;
          }
        }
        if (l) return E;
        var w = L ? N.future : N.past;
        return typeof w == "function" ? w(E) : w.replace("%s", E);
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
})(ti);
var jc = ti.exports;
const tl = /* @__PURE__ */ bn(jc);
$n.extend(Kc);
$n.extend(tl);
function el(t, e) {
  return $n.duration(e - t).humanize();
}
function We() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(e) {
    return t.reduce((n, r) => r(n), e);
  };
}
function ae(t) {
  return function(e) {
    return t === void 0 ? e : e[t];
  };
}
var se = 0, Pt = 0;
const nl = [
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
  const e = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(e);
}
function il(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function ol(t) {
  return il(t) > 165;
}
function al(t) {
  return ol(xt(t)) ? "black" : "white";
}
function ur(t) {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${e}${n}${r}`;
}
function Wt(t, e) {
  return "translate(" + t + "," + e + ")";
}
function sl() {
  document.querySelectorAll('g.task[class*=" --"]').forEach(function(e) {
    e.style.display = "none";
  });
}
function ke(t, e, n) {
  const i = R(t).attr("class");
  let o = !1;
  e.selectAll("g.row").each(function(P) {
    const m = R(this).attr("class");
    if (m == i)
      o = !0;
    else if (o) {
      let g = this.getAttribute("transform"), p = parseFloat(g.split("(")[1].split(",")[0].trim()), w = parseFloat(g.split(",")[1].split(")")[0].trim());
      this.setAttribute("transform", `translate(${p},${w + n})`);
      var _ = m.split(" ")[1];
      document.querySelectorAll(`g.task.${_} rect`).forEach(function(y) {
        y.setAttribute("y", parseFloat(y.getAttribute("y")) + n);
      }), document.querySelectorAll(`g.task.${_} text`).forEach(function(y) {
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
function ei(t, e) {
  e.forEach(function(r) {
    document.querySelectorAll(`g.row.${r}`).forEach(function(o) {
      o.style.display = "block";
    });
  });
  const n = R(t).attr("class").split(" ")[1];
  wt(`g.task.${n}`).each(function(r) {
    var i = r[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    if (i == n.replace(/--/g, ""))
      R(this).style("display", "none");
    else if (i != n.replace(/--/g, "")) {
      R(this).style("display", "block");
      var o = (e.indexOf(i) + 1) * 38;
      let a = R(this), u = a.attr("transform"), c = parseFloat(u.split("(")[1].split(",")[0].trim()), s = parseFloat(u.split(",")[1].split(")")[0].trim()), l = s + o;
      a.attr("transform", `translate(${c}, ${s})`).transition().duration(1e3).attr("transform", `translate(${c}, ${l})`).on("start", () => {
        wt(`g.task.${i}`).style("display", "none");
      }).on("end", () => {
        a.style("display", "none"), a.attr("transform", `translate(${c}, ${s})`), wt(`g.task.${i}`).style("display", "block");
      });
    }
  });
}
function ni(t, e) {
  return new Promise((n) => {
    const r = R(t).attr("class").split(" ")[1];
    wt(`g.task:not(.${r})`).each(function(i) {
      var o = i[1].replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      if (e.includes(o)) {
        R(this).style("display", "block");
        var a = (e.indexOf(o) + 1) * 38;
        let u = R(this), c = u.attr("transform"), s = parseFloat(c.split("(")[1].split(",")[0].trim()), l = parseFloat(c.split(",")[1].split(")")[0].trim()), f = l - a;
        u.transition().duration(1e3).attr("transform", `translate(${s}, ${f})`).on("end", () => {
          wt(`g.${r}`).style("display", "block"), u.style("display", "none"), u.attr("transform", `translate(${s}, ${l})`), e.forEach(function(h) {
            document.querySelectorAll(`.${h}`).forEach(function(k) {
              k.style.display = "none";
            });
          }), n();
        });
      }
    });
  });
}
function Se(t, e) {
  const r = R(t).attr("class"), i = [];
  let o = !1, a = !1;
  return e.selectAll("g.row").each(function(u) {
    const s = R(this).attr("class");
    s == r ? o = !0 : o && s.split(" ")[2] == "timelineheader" ? a = !0 : o && !a && i.push(s.split(" ")[1]);
  }), i;
}
function ul() {
  const t = document.getElementById("collapseAllButton");
  t.disabled = !0;
  let e = [];
  wt("g.row.timelineheader text").each(function() {
    if (R(this).text() === "-") {
      const r = this.parentNode, i = Se(r, R(r.parentNode)), o = i.length * 38;
      let a = ni(r, i).then(() => {
        ke(r, R(r.parentNode), -o), R(this).text("+").style("font-size", "20px");
      });
      e.push(a);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.collapseAll = ul;
function cl() {
  const t = document.getElementById("expandAllButton");
  t.disabled = !0;
  let e = [];
  wt("g.row.timelineheader text").each(function() {
    if (R(this).text() === "+") {
      const r = this.parentNode, i = Se(r, R(r.parentNode)), o = i.length * 38;
      let a = new Promise((u) => {
        ei(r, i), ke(r, R(r.parentNode), o), u();
      }).then(() => {
        R(this).text("-").style("font-size", "30px");
      });
      e.push(a);
    }
  }), Promise.all(e).then(() => {
    t.disabled = !1;
  });
}
window.expandAll = cl;
function dl(t) {
  let e = nl, n = 5, r = 2, i = !1, o = !1, a, u, c = 0, s = ae(0), l = ae(1), f = ae(2), h = ae(3);
  console.log(t);
  function d(T, m) {
    const _ = T.select("text"), g = T.select("rect"), p = g.attr("width") - 2 * n, w = l(m);
    _.text(w);
    let Y = _.node().getComputedTextLength();
    if (Y > p) {
      const D = p < 0 ? 0 : p / Y, y = Math.floor(w.length * D);
      _.text(y > 2 ? w.slice(0, y - 2) + "…" : "");
    }
  }
  function k(T, m, _) {
    const g = T.select("text").node(), p = g.getBBox(), w = _.scale().domain().indexOf(s(m)), Y = _.colorscale()(w), D = T.selectAll("rect.bckg").data([m]).join("rect").attr("class", "bckg").attr("fill", Y).attr("x", p.x - n + r).attr("y", p.y - 2).attr("width", p.width + n - r).attr("height", p.height);
    T.node().insertBefore(D.node(), g);
  }
  function E(T, m) {
    T.each(function(_, g) {
      const p = R(this.parentNode);
      h(_) - f(_) ? d(p, _) : k(p, _, m);
    });
  }
  function L(T) {
    return function(m, _) {
      zc(this).tween("text", function() {
        return function(g) {
          E(R(this), T);
        };
      });
    };
  }
  function N(T) {
    const m = T.datum(), _ = new Set(wi(m, s)), g = new Jr(P), p = Nt(e);
    a = a || [pi(m, f), cr(m, h)], o && (a = ui(a.concat(/* @__PURE__ */ new Date()))), T.each(function(w) {
      const Y = u || this.getBoundingClientRect().width, D = _.size * (rl(this) + 4 * n), y = $r().domain(_).range([0, D]), U = Cu().domain(a), I = (i ? Gc : Zc)(y).width(Y), A = R(this).selectAll("svg").data([1]).join("svg");
      A.attr("class", "timeline").attr("width", Y).attr("height", D + 40);
      const b = A.append("g").attr("transform", "translate(0,20)"), v = b.append("g").attr("class", "y axis").call(I);
      let F = document.querySelector('path[stroke-width="1.75"]').getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/), O = parseFloat(F[1]);
      v.selectAll("text").on("mouseover", function() {
        R(this).style("text-decoration", "underline");
      }).on("mouseout", function() {
        R(this).style("text-decoration", "none");
      }).attr("text-anchor", function(M) {
        return M.startsWith(" •") ? "middle" : "end";
      }).attr("x", function(M) {
        return M.startsWith(" •") ? O / 2 : O - 0.5;
      }).style("cursor", "pointer").style("font-weight", function(M) {
        return M.startsWith(" •") ? "bold" : "normal";
      }).style("background", "none").on("click", function(M, H) {
        const V = H.replace(/ • /g, "").replace(" ", "%20"), W = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${V}%22`;
        window.open(W, "_blank");
      }), v.selectAll("g.row").each(function(M) {
        const H = R(this).datum();
        R(this).classed(R(this).datum().replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, ""), !0), H.startsWith(" •") && R(this).classed("timelineheader", !0).append("text").attr("x", O - 10).attr("y", 25).text("-").style("text-anchor", "end").style("cursor", "pointer").style("font-size", "30px").attr("fill", "black").style("-ms-user-select", "none").style("-webkit-user-select", "none").style("user-select", "none");
      }), v.selectAll("g.row.timelineheader text").on("click", function(M, H) {
        const x = R(this).text();
        if (x === "+") {
          se -= 1, Pt += 1, console.log("Collapsed: ", se), console.log("Expanded: ", Pt);
          let V = Se(this.parentNode, v), W = V.length * 38;
          ei(this.parentNode, V), ke(this.parentNode, v, W), R(this).text() === "+" ? R(this).text("-").style("font-size", "30px") : R(this).text("+");
        } else if (x === "-") {
          se += 1, Pt -= 1, console.log("Collapsed: ", se), console.log("Expanded: ", Pt);
          let V = Se(this.parentNode, v), W = V.length * 38;
          ni(this.parentNode, V).then(() => {
            ke(this.parentNode, v, -W);
          }), R(this).text() === "-" ? R(this).text("+").style("font-size", "20px") : R(this).text("-");
        } else {
          const W = H.replace(/ • /g, "").replace(" ", "%20"), G = `https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${W}%22`;
          window.open(G, "_blank");
        }
      }), Pt = wt("text").filter(function() {
        return this.textContent.startsWith(" •");
      }).size();
      let z = I.range();
      U.range([z[0] + n, z[1] - n]).clamp(!0);
      const X = An(U), Z = b.append("g").attr("class", "x axis").attr("transform", Wt(0, 0)).call(X);
      Z.selectAll(".tick text").attr("dy", "-1.5em"), Z.selectAll(".tick line").attr("y2", "-5");
      const K = An(U);
      A.append("g").attr("class", "x axis bottom-axis").attr("transform", Wt(0, D + 20)).call(K).selectAll(".tick line").attr("y2", "5"), v.on("offset", () => {
        z = I.range(), U.range([z[0] + n, z[1] - n]).clamp(!0), X.ticks(Math.min((z[1] - z[0]) / 70, 10)), Z.call(X), j.attr("transform", (M) => Wt(U(f(M)), y(s(M)))).selectAll("rect").attr("width", (M) => U(h(M)) - U(f(M)) || r).call((M) => E(M, I)), v.call(I.draw_ticks, U.ticks().map(U));
      }), Z.select(".domain").remove(), Z.selectAll(".tick line").attr("stroke", "#AAA");
      const it = U.ticks().map(U);
      v.call(I.draw_ticks, it);
      let j = b.selectAll("g.task").data(w);
      j.exit().remove();
      const S = j.enter().append("g").classed("task", !0);
      S.each(function(M) {
        const H = s(M).replace(/•/g, "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");
        R(this).classed(H, !0);
      }).append("rect").style("opacity", 1).attr("y", n).style("cursor", "pointer").attr("height", y.bandwidth() - 2 * n).on("mouseover", g.show).on("mouseout", g.hide).on("click", function(M, H) {
        var x = String(H[1]), V = x.replace(" ", "%20"), W = H[2], G = ur(W), tt = H[3], ht = ur(tt), te = "https://www.primarysourcecoop.org/publications/" + t + "/search#q%3D%2Bsubject%3A%22" + V + "%22%20%2Bdate_when%3A%5B" + G + "%20TO%20" + ht + "%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning";
        window.open(te, "_blank");
      }).style("fill", We(l, p)), S.append("text").attr("text-anchor", "start").attr("fill", (M) => h(M) - f(M) ? We(l, p, al)(M) : "black").attr("pointer-events", "none").attr("dx", n).attr("y", y.bandwidth() / 2).attr("dy", "0.32em").text(l), j = j.merge(S), j.attr("transform", (M) => Wt(z[0], y(s(M)))).selectAll("rect").attr("width", 0), j.transition().duration(c).attr("transform", (M) => Wt(U(f(M)), y(s(M)))).selectAll("rect").attr("width", (M) => U(h(M)) - U(f(M)) || r).on("start", L(I)), o && b.append("path").attr("stroke", "red").attr("d", "M" + U(/* @__PURE__ */ new Date()) + ",0.5V" + D);
    }), sl();
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
  function P(T, m) {
    const _ = We(ku, wn("%Y-%m-%d")), g = `<b>${l(m)}</b><hr style="margin: 2px 0 2px 0">${_(f(m))}`, p = h(m) - f(m) ? ` - ${_(h(m))}<br>${el(f(m), h(m))}` : "";
    return g + p;
  }
}
export {
  zc as active,
  An as axisBottom,
  fl as axisLeft,
  ll as axisRight,
  xt as color,
  hl as drag,
  el as durationFormat,
  ui as extent,
  ku as isoParse,
  wi as map,
  cr as max,
  pi as min,
  $r as scaleBand,
  as as scaleLinear,
  Nt as scaleOrdinal,
  Cu as scaleTime,
  R as select,
  wt as selectAll,
  wn as timeFormat,
  dl as timeline,
  Zc as timelineAxisLeft,
  Gc as timelineAxisRight,
  Jr as tooltip
};
