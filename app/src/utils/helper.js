import _0x2f34cb from 'moment-timezone';
import _0x27d982 from 'fs';
import _0x669fa8 from 'path';
import { parse } from 'querystring';
import _0x3dea0e from './twist.js';
export class Helper {
  static ['display'] = Config.DISPLAY;
  static ["myCode"] = "frenID9n0lRMY";
  static ["myCode2"] = "Yua2i";
  static ["twist"] = this.display == 'TWIST' ? new Twist() : new Bless();
  static ["spinnerContent"] = _0x2898b7 => "\nName          : " + _0x2898b7.name + "\nVirt Money          : " + _0x2898b7.id + "\nPoint  : " + _0x2898b7 + " | " + _0x2898b7.pointsTotal + "\nInviter Code          : " + _0x2898b7.inviter + "\n";
  static ['delay'] = (_0x4e8007, _0x1e97de, _0x379775, _0x4b965c) => {
    return new Promise(_0x4393b4 => {
      let _0x46075b = _0x4e8007;
      if (_0x1e97de != undefined) {
        _0x3dea0e.log(_0x379775, _0x1e97de, _0x4b965c, "Delaying for " + this.msToTime(_0x4e8007));
      } else {
        _0x3dea0e.info((_0x379775 ?? '') + " - Delaying for " + this.msToTime(_0x4e8007));
      }
      const _0x50be05 = setInterval(() => {
        _0x46075b -= 0x3e8;
        if (_0x1e97de != undefined) {
          _0x3dea0e.log(_0x379775, _0x1e97de, _0x4b965c, "Delaying for " + this.msToTime(_0x46075b));
        } else {
          _0x3dea0e.info((_0x379775 ?? '') + " - Delaying for " + this.msToTime(_0x46075b));
        }
        if (_0x46075b <= 0x0) {
          clearInterval(_0x50be05);
          _0x4393b4();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x50be05);
        await _0x3dea0e.clearInfo();
        if (_0x1e97de) {
          _0x3dea0e.log(_0x379775, _0x1e97de, _0x4b965c);
        }
        _0x4393b4();
      }, _0x4e8007);
    });
  };
  static ["randomUserAgent"]() {
    const _0x4fdba6 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x4fdba6[Math.floor(Math.random() * _0x4fdba6.length)];
  }
  static ["readTime"](_0x35dbac) {
    const _0x2cb55f = _0x2f34cb.unix(_0x35dbac);
    return _0x2cb55f.format("YYYY-MM-DD HH:mm:ss");
  }
  static ["getCurrentTimestamp"]() {
    const _0x38d2ee = _0x2f34cb().tz("Asia/Singapore").unix();
    return _0x38d2ee.toString();
  }
  static ["getSession"](_0x2e26ec) {
    try {
      if (!_0x27d982.existsSync("accounts")) {
        _0x27d982.mkdirSync('accounts');
      }
      const _0x7e77f4 = _0x27d982.readdirSync(_0x669fa8.resolve(_0x2e26ec));
      const _0x170689 = [];
      _0x7e77f4.forEach(_0x5a89a2 => {
        _0x170689.push(_0x5a89a2);
      });
      return _0x170689;
    } catch (_0x4f5e34) {
      throw Error("Error reading sessions directory: " + _0x4f5e34 + ',');
    }
  }
  static ['resetAccounts']() {
    try {
      const _0x23b02b = _0x669fa8.resolve('accounts');
      const _0x468cc9 = _0x27d982.readdirSync(_0x23b02b);
      console.log("Deleting Accounts...");
      _0x468cc9.forEach(_0x135bb5 => {
        const _0x854caa = _0x669fa8.join(_0x23b02b, _0x135bb5);
        console.log(_0x854caa);
        _0x27d982.rm(_0x854caa, {
          'recursive': true,
          'force': true
        }, _0x60b9bc => {
          if (_0x60b9bc) {
            console.error("Error deleting file " + _0x854caa + ':', _0x60b9bc);
          }
        });
      });
      console.info("Account reset successfully. Please restart the bot.");
    } catch (_0x245021) {
      console.error("Error deleting accounts: " + _0x245021);
      throw _0x245021;
    }
  }
  static ["getTelegramQuery"](_0x233885, _0x270745) {
    const _0xee8248 = _0x233885.indexOf('#');
    if (_0xee8248 === -0x1) {
      throw new Error("No query string found in the URL.");
    }
    const _0x135228 = _0x233885.substring(_0xee8248 + 0x1);
    const _0x158bd5 = _0x135228.split('&');
    const _0x1d50c1 = _0x158bd5[0x0].split('&')[0x0].replace("tgWebAppData=", '');
    if (!_0x1d50c1) {
      throw new Error("Param not found in the query string.");
    }
    if (_0x270745 == '1') {
      return _0x1d50c1;
    } else {
      if (_0x270745 == '2') {
        return this.decodeQueryString(_0x1d50c1);
      } else {
        const _0x5e0aef = this.decodeQueryString(_0x1d50c1);
        return this.jsonToInitParam(_0x5e0aef);
      }
    }
  }
  static ["getQueryFromUrl"](_0x357246) {
    var _0x50524a = decodeURIComponent(iframeElement.src);
    var _0x4a8d0c = _0x50524a.split('#')[0x1] || '';
    var _0xe509c8 = _0x4a8d0c.split("tgWebAppData=")[0x1] || '';
    var _0xf43a01 = _0xe509c8.split('&');
    var _0x1053ba = {};
    _0xf43a01.forEach(_0x11a58b => {
      var [_0x57522c, _0x116f27] = _0x11a58b.split('=');
      if (_0x57522c && _0x116f27) {
        _0x1053ba[_0x57522c] = _0x116f27;
      }
    });
    var _0xaf20cc = Object.keys(_0x1053ba).filter(_0x4050ce => !_0x4050ce.includes('tgWebApp')).map(_0x1cd9dd => _0x1cd9dd + '=' + _0x1053ba[_0x1cd9dd]).join('&');
    return _0xaf20cc;
  }
  static ["jsonToInitParam"](_0x37bd36) {
    const _0x3a4231 = parse(_0x37bd36);
    if (_0x3a4231.user) {
      const _0x5cccc1 = JSON.parse(_0x3a4231.user);
      _0x3a4231.user = encodeURIComponent(JSON.stringify(_0x5cccc1));
    }
    const _0x10b936 = [];
    for (const [_0x4dc6bb, _0x4821ca] of Object.entries(_0x3a4231)) {
      _0x10b936.push(_0x4dc6bb + '=' + _0x4821ca);
    }
    const _0x2216ab = _0x10b936.join('&');
    return _0x2216ab;
  }
  static ["decodeQueryString"](_0x377774) {
    const _0x2b8553 = decodeURIComponent(_0x377774);
    const _0x3e7830 = _0x2b8553.split('&');
    const _0x1d5ace = {};
    _0x3e7830.forEach(_0xaf0163 => {
      const [_0x50ddbf, _0x2f0f70] = _0xaf0163.split('=');
      if (_0x50ddbf === 'user') {
        _0x1d5ace[_0x50ddbf] = JSON.parse(decodeURIComponent(_0x2f0f70));
      } else {
        _0x1d5ace[_0x50ddbf] = _0x2f0f70;
      }
    });
    const _0x523c8f = [];
    for (const [_0x367765, _0x2d4689] of Object.entries(_0x1d5ace)) {
      if (_0x367765 === "user") {
        _0x523c8f.push(_0x367765 + '=' + JSON.stringify(_0x2d4689));
      } else {
        _0x523c8f.push(_0x367765 + '=' + _0x2d4689);
      }
    }
    return _0x523c8f.join('&');
  }
  static ["createDir"](_0x314529) {
    try {
      const _0x151ccb = _0x669fa8.join("accounts", _0x314529);
      if (!_0x27d982.existsSync("accounts")) {
        _0x27d982.mkdirSync("accounts");
      }
      _0x27d982.mkdirSync(_0x151ccb, {
        'recursive': true
      });
      console.log(_0x151ccb);
      return _0x151ccb;
    } catch (_0x368051) {
      throw new Error("Error creating directory: " + _0x368051);
    }
  }
  static ["saveQueryFile"](_0x41193b, _0x1a36f2) {
    const _0x5d1bfb = _0x669fa8.resolve(_0x41193b, "query.txt");
    _0x27d982.writeFile(_0x5d1bfb, _0x1a36f2, "utf8", _0x3d6513 => {
      if (_0x3d6513) {
        console.error("Error writing file:", _0x3d6513);
      } else {
        console.log("Query File Created/Modified Successfully.");
      }
    });
  }
  static ["random"](_0x46eaa5, _0x5a6302) {
    const _0x4f2de7 = Math.floor(Math.random() * (_0x5a6302 - _0x46eaa5 + 0x1)) + _0x46eaa5;
    return _0x4f2de7;
  }
  static ["randomArr"](_0x24169f) {
    return _0x24169f[Math.floor(Math.random() * _0x24169f.length)];
  }
  static ["msToTime"](_0x4e1c5d) {
    const _0x213a75 = Math.floor(_0x4e1c5d / 0x36ee80);
    const _0x1c4776 = _0x4e1c5d % 0x36ee80;
    const _0x244031 = Math.floor(_0x1c4776 / 0xea60);
    const _0x5cad7e = _0x1c4776 % 0xea60;
    const _0x4a9e58 = Math.round(_0x5cad7e / 0x3e8);
    return _0x213a75 + " Hours " + _0x244031 + " Minutes " + _0x4a9e58 + " Seconds";
  }
  static ["queryToJSON"](_0x66111e) {
    try {
      const _0xca1a2f = {};
      const _0x36e8fe = _0x66111e.split('&');
      _0x36e8fe.forEach(_0x38ac25 => {
        const [_0x36eb49, _0x3d0935] = _0x38ac25.split('=');
        if (_0x36eb49 === 'user') {
          _0xca1a2f[_0x36eb49] = JSON.parse(decodeURIComponent(_0x3d0935));
        } else {
          _0xca1a2f[_0x36eb49] = decodeURIComponent(_0x3d0935);
        }
      });
      return _0xca1a2f;
    } catch (_0x4f653d) {
      throw Error("Invalid Query");
    }
  }
  static ["generateRandomString"](_0x442f85) {
    let _0x583f10 = '';
    const _0x35f51a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
    for (let _0xf6bbca = 0x0; _0xf6bbca < _0x442f85; _0xf6bbca++) {
      _0x583f10 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x35f51a));
    }
    return _0x583f10;
  }
  static ["readQueryFile"](_0x1855b3) {
    try {
      const _0x22cb7d = _0x669fa8.resolve(_0x1855b3);
      const _0x4fe407 = _0x27d982.readFileSync(_0x22cb7d, "utf8");
      return _0x4fe407;
    } catch (_0x3b0a70) {
      console.log("No query.txt Files Found");
    }
  }
  static ['launchParamToQuery'](_0x412970) {
    const _0x5ec77d = new URLSearchParams(_0x412970);
    let _0x1a0f3e = decodeURIComponent(_0x5ec77d.get("tgWebAppData"));
    const _0x5cf15e = new URLSearchParams(_0x1a0f3e);
    let _0x7c4e9a = decodeURIComponent(_0x5cf15e.get('user'));
    let _0x148f2b = JSON.parse(_0x7c4e9a);
    const _0x2ea4b7 = {
      'query_id': _0x5cf15e.get("query_id"),
      'user': _0x148f2b,
      'auth_date': _0x5cf15e.get("auth_date"),
      'hash': _0x5cf15e.get('hash')
    };
    const _0x39bf9f = JSON.stringify(_0x2ea4b7.user);
    const _0x30f61c = encodeURIComponent(_0x39bf9f);
    let _0x31393d = '';
    if (_0x2ea4b7.query_id) {
      _0x31393d += "query_id=" + encodeURIComponent(_0x2ea4b7.query_id) + '&';
    }
    _0x31393d += 'user=' + _0x30f61c + "&auth_date=" + encodeURIComponent(_0x2ea4b7.auth_date) + "&hash=" + encodeURIComponent(_0x2ea4b7.hash);
    return _0x31393d;
  }
  static ["refCheck"](_0x390e98, _0x3220c6) {
    if (_0x390e98 !== this.myCode && _0x390e98 !== this.myCode2 && !_0x3220c6.includes(this.myCode) && !_0x3220c6.includes(this.myCode2)) {
      throw Error("Sorry, You Cannot Use This Bot, Please Join With Creator Referral Code");
    }
  }
  static ['']() {
    console.log('');
  }
}
