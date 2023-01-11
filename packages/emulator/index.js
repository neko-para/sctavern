"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../data/src/card.ts
var AllCard = [
  "\u5E1D\u56FD\u7CBE\u9510",
  "\u82F1\u96C4\u53C9",
  "\u673A\u68B0\u611F\u67D3",
  "\u6B7B\u4EA1\u4E4B\u63E1",
  "\u9EC4\u660F\u4E4B\u7FFC",
  "\u51C0\u5316\u4E4B\u5149",
  "\u5B88\u536B\u5DE2\u7A74",
  "\u6B7B\u4EA1\u8230\u961F",
  "\u827E\u5C14\u6E38\u9A91\u5175",
  "\u751F\u7269\u8D28\u53D1\u7535",
  "\u751F\u5316\u5371\u673A",
  "\u865A\u7A7A\u88C2\u75D5",
  "\u4EE5\u706B\u6CBB\u706B",
  "\u516D\u8109\u795E\u5251",
  "\u4F18\u8D28\u57FA\u56E0",
  "\u57C3\u8499\u4EC6\u4ECE",
  "\u6B7B\u4EA1\u4E4B\u7FFC",
  "\u865A\u7A7A\u63F4\u519B",
  "\u6DF1\u6E0A\u884C\u8005",
  "\u9ED1\u6697\u796D\u575B",
  "\u539F\u59CB\u87D1\u8782",
  "\u4E0D\u6B7B\u961F",
  "\u7D27\u6025\u90E8\u7F72",
  "\u539F\u59CB\u523A\u86C7",
  "\u539F\u59CB\u5F02\u9F99",
  "\u865A\u7A7A\u5927\u519B",
  "\u9C9C\u8840\u730E\u624B",
  "\u66B4\u63A0\u9F99",
  "\u9002\u8005\u751F\u5B58",
  "\u6BC1\u706D\u8005",
  "\u539F\u59CB\u70B9\u706B\u866B",
  "\u539F\u59CB\u96F7\u517D",
  "\u9A6C\u62C9\u4EC0",
  "\u9ED1\u6697\u9884\u5146",
  "\u963F\u62C9\u7EB3\u514B",
  "\u5929\u7F5A\u884C\u8005",
  "\u5FB7\u54C8\u5361",
  "\u6211\u53EB\u5C0F\u660E",
  "\u8C46\u6D46\u6CB9\u6761KT1",
  "\u8C46\u6D46\u6CB9\u6761",
  "\u6218\u6597\u53F7\u89D2",
  "\u51EF\u745E\u7518",
  "\u5200\u950B\u5973\u738B",
  "\u865A\u7A7A\u6784\u9020\u4F53",
  "\u9EC4\u91D1\u77FF\u5DE5",
  "\u6298\u8DC3\u63F4\u519B",
  "\u53D1\u7535\u7AD9",
  "\u4F9B\u80FD\u4E2D\u5FC3",
  "\u9F99\u9A91\u5175\u56E2",
  "\u4E07\u53C9\u5954\u817E",
  "\u6298\u8DC3\u4FE1\u6807",
  "\u827E\u5C14\u4E4B\u5203",
  "\u6298\u8DC3\u90E8\u7F72",
  "\u6697\u5F71\u536B\u961F",
  "\u91CD\u56DE\u6218\u573A",
  "\u6298\u8DC3\u653B\u52BF",
  "\u51C0\u5316\u8005\u519B\u56E2",
  "\u51EF\u62C9\u514B\u65AF",
  "\u865A\u7A7A\u8230\u961F",
  "\u52BF\u4E0D\u53EF\u6321",
  "\u9EC4\u91D1\u8230\u961F",
  "\u5C24\u5C14\u5170",
  "\u5149\u590D\u827E\u5C14",
  "\u83F2\u5C3C\u514B\u65AF",
  "\u9152\u9986\u540E\u52E4\u5904",
  "\u51C0\u5316\u4E00\u5207",
  "\u963F\u5C14\u8FBE\u745E\u65AF",
  "\u963F\u5854\u5C3C\u65AF",
  "\u6B7B\u795E\u706B\u8F66",
  "\u597D\u5144\u5F1F",
  "\u6316\u5B9D\u5947\u5175",
  "\u5B9E\u9A8C\u5BA4\u5B89\u4FDD",
  "\u5F81\u5175\u4EE4",
  "\u6076\u706B\u5C0F\u961F",
  "\u7A7A\u6295\u5730\u96F7",
  "\u6B65\u5175\u8FDE\u961F",
  "\u98D9\u8F66\u6D41",
  "\u79D1\u8003\u5C0F\u961F",
  "\u9646\u519B\u5B66\u9662",
  "\u7A7A\u519B\u5B66\u9662",
  "\u4EA4\u53C9\u706B\u529B",
  "\u67AA\u5175\u5766\u514B",
  "\u65AF\u53F0\u7279\u66FC",
  "\u62A4\u822A\u4E2D\u961F",
  "\u6CF0\u51EF\u65AF",
  "\u5916\u7C4D\u519B\u56E2",
  "\u94A2\u94C1\u6D2A\u6D41",
  "\u6E38\u9A91\u5175",
  "\u6C83\u83F2\u5C14\u5FB7",
  "\u5E1D\u56FD\u8230\u961F",
  "\u866B\u7FA4\u5148\u950B",
  "\u87D1\u8782\u5C0F\u961F",
  "\u5C60\u730E\u8005",
  "\u57CB\u5730\u523A\u86C7",
  "\u53D8\u5F02\u519B\u56E2",
  "\u5B75\u5316\u87D1\u8782",
  "\u7206\u866B\u6EDA\u6EDA",
  "\u98DE\u9F99\u9A91\u8138",
  "\u51F6\u6B8B\u5DE8\u517D",
  "\u6CE8\u5375\u866B\u540E",
  "\u5B75\u5316\u6240",
  "\u5730\u5E95\u4F0F\u51FB",
  "\u5B75\u5316\u523A\u86C7",
  "\u611F\u67D3\u6DF1\u6E0A",
  "\u8150\u5316\u5927\u9F99",
  "\u7A7A\u4E2D\u7BA1\u5236",
  "\u866B\u7FA4\u5927\u519B",
  "\u7EC8\u6781\u8FDB\u5316",
  "\u51F6\u731B\u5DE8\u517D",
  "\u624E\u52A0\u62C9",
  "\u65AF\u6258\u79D1\u592B",
  "\u866B\u5375",
  "\u590D\u5236\u4E2D\u5FC3",
  "\u664B\u5347\u4EEA\u5F0F",
  "\u57FA\u56E0\u7A81\u53D8",
  "\u98CE\u66B4\u82F1\u96C4",
  "\u5E1D\u56FD\u6562\u6B7B\u961F",
  "\u9ED1\u6697\u6559\u957F",
  "\u96F7\u517D\u7A9F",
  "\u6DF7\u5408\u4F53\u5DE8\u517D",
  "\u6BCD\u8230\u6838\u5FC3",
  "\u89C2\u5BDF\u6837\u672C",
  "\u6BD2\u6C14\u70AE\u5854",
  "\u51EF\u8FBE\u7433\u5DE8\u77F3",
  "\u5C97\u54E8\u673A\u67AA",
  "\u884C\u661F\u8981\u585E",
  "\u661F\u95E8",
  "\u81EA\u52A8\u673A\u70AE",
  "\u4F5C\u6218\u4E2D\u5FC3",
  "\u5BFC\u5F39\u57FA\u5730",
  "\u7C92\u5B50\u5149\u70AE",
  "\u518D\u751F\u94A2",
  "\u4E0D\u6CD5\u4E4B\u5F92",
  "\u751F\u5316\u5B9E\u9A8C\u5BA4",
  "\u7D27\u6025\u56DE\u6536",
  "\u661F\u7075\u79D1\u6280",
  "\u5C16\u7AEF\u79D1\u6280",
  "\u8D85\u8D1F\u8377",
  "\u673A\u68B0\u5DE5\u5382"
];
var CardData = {
  \u5E1D\u56FD\u7CBE\u9510: {
    name: "\u5E1D\u56FD\u7CBE\u9510",
    pinyin: "dgjr",
    race: "T",
    level: 4,
    pack: "\u519B\u5907\u7ADE\u8D5B",
    unit: {
      \u6076\u8760\u6E38\u9A91\u5175: 2,
      \u4FEE\u7406\u65E0\u4EBA\u673A: 2,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F97<1>\u6076\u8760\u6E38\u9A91\u5175", "\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F97<2>\u6076\u8760\u6E38\u9A91\u5175"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u62E5\u6709<3>\u53CD\u5E94\u5806\u83B7\u5F971\u6076\u8760\u6E38\u9A91\u5175",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u62E5\u6709<2>\u53CD\u5E94\u5806\u83B7\u5F971\u6076\u8760\u6E38\u9A91\u5175"
      ]
    ]
  },
  \u82F1\u96C4\u53C9: {
    name: "\u82F1\u96C4\u53C9",
    pinyin: "yxc",
    race: "P",
    level: 2,
    pack: "\u519B\u5907\u7ADE\u8D5B",
    unit: {
      \u5361\u5C14\u8FBE\u5229\u65AF: 1,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6298\u8DC3\u5355\u4F4D\u5230\u6B64\u5361\u724C\u65F6, \u5C06\u6240\u6709\u6298\u8DC3\u7684\u72C2\u70ED\u8005(\u7CBE\u82F1)\u53D8\u4E3A\u5361\u5C14\u8FBE\u5229\u65AF",
        "\u6298\u8DC3\u5355\u4F4D\u5230\u6B64\u5361\u724C\u65F6, \u5C06\u6240\u6709\u6298\u8DC3\u7684\u72C2\u70ED\u8005(\u7CBE\u82F1)\u53D8\u4E3A\u5361\u5C14\u8FBE\u5229\u65AF"
      ]
    ]
  },
  \u673A\u68B0\u611F\u67D3: {
    name: "\u673A\u68B0\u611F\u67D3",
    pinyin: "jxgr",
    race: "Z",
    level: 3,
    pack: "\u519B\u5907\u7ADE\u8D5B",
    unit: {
      \u88AB\u611F\u67D3\u7684\u5973\u5996: 4
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<1>\u88AB\u611F\u67D3\u7684\u5973\u5996",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<2>\u88AB\u611F\u67D3\u7684\u5973\u5996"
      ],
      [
        "\u552F\u4E00: \u4EFB\u610F\u4EF7\u503C\u8FBE\u52303600\u7684\u975E\u866B\u5375\u866B\u65CF\u5361\u724C\u51FA\u552E\u65F6, \u6B64\u5361\u724C\u83B7\u5F971\u672B\u65E5\u5DE8\u517D",
        "\u552F\u4E00: \u4EFB\u610F\u4EF7\u503C\u8FBE\u52303600\u7684\u975E\u866B\u5375\u866B\u65CF\u5361\u724C\u51FA\u552E\u65F6, \u6B64\u5361\u724C\u83B7\u5F971\u672B\u65E5\u5DE8\u517D"
      ]
    ]
  },
  \u6B7B\u4EA1\u4E4B\u63E1: {
    name: "\u6B7B\u4EA1\u4E4B\u63E1",
    pinyin: "swzw",
    race: "N",
    level: 6,
    pack: "\u519B\u5907\u7ADE\u8D5B",
    unit: {
      \u6B7B\u4EA1\u4E4B\u63E1\u6C34\u6676: 1
    },
    attr: {
      pool: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97\u6BCF\u5F20\u5F53\u524D\u672A\u8D2D\u4E70\u5361\u724C\u4E2D\u7684<1>\u975E\u82F1\u96C4\u5355\u4F4D",
        "\u552F\u4E00: \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97\u6BCF\u5F20\u5F53\u524D\u672A\u8D2D\u4E70\u5361\u724C\u4E2D\u7684<2>\u975E\u82F1\u96C4\u5355\u4F4D"
      ],
      [
        "\u552F\u4E00: \u5237\u65B0\u65F6, \u590D\u5236\u6B64\u5361\u724C<1>\u975E\u82F1\u96C4\u5355\u4F4D",
        "\u552F\u4E00: \u5237\u65B0\u65F6, \u590D\u5236\u6B64\u5361\u724C<2>\u975E\u82F1\u96C4\u5355\u4F4D"
      ]
    ]
  },
  \u9EC4\u660F\u4E4B\u7FFC: {
    name: "\u9EC4\u660F\u4E4B\u7FFC",
    pinyin: "hhzy",
    race: "T",
    level: 3,
    pack: "\u5929\u7A7A\u4E4B\u6012",
    unit: {
      \u9EC4\u660F\u4E4B\u7FFC: 2,
      \u5973\u5996: 1,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F97<1>\u9EC4\u660F\u4E4B\u7FFC", "\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F97<2>\u9EC4\u660F\u4E4B\u7FFC"],
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u5973\u5996", "\u53CD\u5E94\u5806\u751F\u4EA7\u5973\u5996"]
    ]
  },
  \u51C0\u5316\u4E4B\u5149: {
    name: "\u51C0\u5316\u4E4B\u5149",
    pinyin: "jhzg",
    race: "P",
    level: 5,
    pack: "\u5929\u7A7A\u4E4B\u6012",
    unit: {
      "\u865A\u7A7A\u8F89\u5149\u8230(\u7CBE\u82F1)": 2,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u865A\u7A7A\u8F89\u5149\u8230", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u865A\u7A7A\u8F89\u5149\u8230"],
      [
        "\u96C6\u7ED3(4): \u6240\u6709\u5361\u724C\u5C06<1>\u865A\u7A7A\u8F89\u5149\u8230\u7CBE\u82F1\u5316",
        "\u96C6\u7ED3(4): \u6240\u6709\u5361\u724C\u5C06<2>\u865A\u7A7A\u8F89\u5149\u8230\u7CBE\u82F1\u5316"
      ]
    ]
  },
  \u5B88\u536B\u5DE2\u7A74: {
    name: "\u5B88\u536B\u5DE2\u7A74",
    pinyin: "swcx",
    race: "Z",
    level: 4,
    pack: "\u5929\u7A7A\u4E4B\u6012",
    unit: {
      \u5B88\u536B: 2,
      \u5F02\u9F99: 4
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6CE8\u5375<1>\u5B88\u536B, \u5E76\u5C06\u6240\u6709\u5361\u724C\u7684\u5404<1>\u5F02\u9F99\u53D8\u4E3A\u5B88\u536B",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6CE8\u5375<2>\u5B88\u536B, \u5E76\u5C06\u6240\u6709\u5361\u724C\u7684\u5404<2>\u5F02\u9F99\u53D8\u4E3A\u5B88\u536B"
      ]
    ]
  },
  \u6B7B\u4EA1\u8230\u961F: {
    name: "\u6B7B\u4EA1\u8230\u961F",
    pinyin: "swjd",
    race: "N",
    level: 6,
    pack: "\u5929\u7A7A\u4E4B\u6012",
    unit: {
      \u5854\u8FBE\u6797\u6BCD\u8230: 1,
      \u6BC1\u706D\u8005: 2
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      ["\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<1>\u6BC1\u706D\u8005", "\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<2>\u6BC1\u706D\u8005"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C1D\u8BD5\u6D88\u8017<10>\u9ED1\u6697\u503C, \u83B7\u5F971\u5854\u8FBE\u6797\u6BCD\u8230",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C1D\u8BD5\u6D88\u8017<5>\u9ED1\u6697\u503C, \u83B7\u5F971\u5854\u8FBE\u6797\u6BCD\u8230"
      ]
    ]
  },
  \u827E\u5C14\u6E38\u9A91\u5175: {
    name: "\u827E\u5C14\u6E38\u9A91\u5175",
    pinyin: "aeyqb",
    race: "T",
    level: 2,
    pack: "\u5E76\u80A9\u4F5C\u6218",
    unit: {
      "\u9646\u6218\u961F\u5458(\u7CBE\u82F1)": 3,
      \u79C3\u9E6B: 1,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u5FEB\u901F\u751F\u4EA7: \u76F8\u90BB\u5DE6\u4FA7\u5361\u724C\u83B7\u5F97<1>\u6C34\u6676\u5854",
        "\u5FEB\u901F\u751F\u4EA7: \u76F8\u90BB\u5DE6\u4FA7\u5361\u724C\u83B7\u5F97<2>\u6C34\u6676\u5854"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5404\u6467\u6BC11\u6C34\u6676\u5854, \u6BCF\u6467\u6BC11\u6C34\u6676\u5854, \u6B64\u5361\u724C\u83B7\u5F97<4>\u9646\u6218\u961F\u5458",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5404\u6467\u6BC11\u6C34\u6676\u5854, \u6BCF\u6467\u6BC11\u6C34\u6676\u5854, \u6B64\u5361\u724C\u83B7\u5F97<8>\u9646\u6218\u961F\u5458"
      ]
    ]
  },
  \u751F\u7269\u8D28\u53D1\u7535: {
    name: "\u751F\u7269\u8D28\u53D1\u7535",
    pinyin: "swzfd",
    race: "P",
    level: 2,
    pack: "\u5E76\u80A9\u4F5C\u6218",
    unit: {
      "\u4F7F\u5F92(\u7CBE\u82F1)": 2,
      \u87D1\u8782: 2,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u51FA\u552E\u4EFB\u610F\u4E09\u661F\u53CA\u4EE5\u4E0A\u7684\u866B\u65CF\u724C\u65F6, \u6B64\u5361\u724C\u83B7\u5F97<1>\u6C34\u6676\u5854",
        "\u51FA\u552E\u4EFB\u610F\u4E09\u661F\u53CA\u4EE5\u4E0A\u7684\u866B\u65CF\u724C\u65F6, \u6B64\u5361\u724C\u83B7\u5F97<2>\u6C34\u6676\u5854"
      ]
    ]
  },
  \u751F\u5316\u5371\u673A: {
    name: "\u751F\u5316\u5371\u673A",
    pinyin: "shwj",
    race: "Z",
    level: 5,
    pack: "\u5E76\u80A9\u4F5C\u6218",
    unit: {
      \u725B\u5934\u4EBA\u9646\u6218\u961F\u5458: 1,
      "\u523A\u86C7(\u7CBE\u82F1)": 4
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C112\u79D1\u6280\u6302\u4EF6, \u5219\u6CE8\u5375<1>\u725B\u5934\u4EBA\u9646\u6218\u961F\u5458\u548C<2>\u79D1\u6280\u5B9E\u9A8C\u5BA4",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C112\u79D1\u6280\u6302\u4EF6, \u5219\u6CE8\u5375<2>\u725B\u5934\u4EBA\u9646\u6218\u961F\u5458\u548C<4>\u79D1\u6280\u5B9E\u9A8C\u5BA4"
      ]
    ]
  },
  \u865A\u7A7A\u88C2\u75D5: {
    name: "\u865A\u7A7A\u88C2\u75D5",
    pinyin: "xklh",
    race: "N",
    level: 5,
    pack: "\u5E76\u80A9\u4F5C\u6218",
    unit: {
      \u865A\u7A7A\u88C2\u9699: 1,
      \u767E\u592B\u957F: 2
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      ["\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<1>\u767E\u592B\u957F", "\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<2>\u767E\u592B\u957F"],
      ["5\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21", "5\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u6676\u4F53\u77FF\u6570\u91CF\u22651, \u5219\u83B7\u5F97<2>\u767E\u592B\u957F",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u6676\u4F53\u77FF\u6570\u91CF\u22651, \u5219\u83B7\u5F97<4>\u767E\u592B\u957F"
      ]
    ]
  },
  \u4EE5\u706B\u6CBB\u706B: {
    name: "\u4EE5\u706B\u6CBB\u706B",
    pinyin: "yhzh",
    race: "T",
    level: 3,
    pack: "\u5FEB\u901F\u542F\u52A8",
    unit: {
      \u706B\u8760: 6,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6240\u6709\u5177\u6709\u53CD\u5E94\u5806\u7684\u4EBA\u65CF\u5361\u724C\u83B7\u5F97<1>\u706B\u8760",
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6240\u6709\u5177\u6709\u53CD\u5E94\u5806\u7684\u4EBA\u65CF\u5361\u724C\u83B7\u5F97<2>\u706B\u8760"
      ],
      [
        "\u5FEB\u901F\u751F\u4EA7: \u6240\u6709\u4EBA\u65CF\u5361\u724C\u5C06<2>\u706B\u8760\u7CBE\u82F1\u5316",
        "\u5FEB\u901F\u751F\u4EA7: \u6240\u6709\u4EBA\u65CF\u5361\u724C\u5C06<3>\u706B\u8760\u7CBE\u82F1\u5316"
      ]
    ]
  },
  \u516D\u8109\u795E\u5251: {
    name: "\u516D\u8109\u795E\u5251",
    pinyin: "lmsj",
    race: "P",
    level: 3,
    pack: "\u5FEB\u901F\u542F\u52A8",
    unit: {
      \u5148\u77E5: 4,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u82E5\u5148\u77E5\u6570\u91CF\u5C0F\u4E8E\u80FD\u91CF\u5F3A\u5EA6, \u5219\u6298\u8DC3<1>\u5148\u77E5",
        "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u82E5\u5148\u77E5\u6570\u91CF\u5C0F\u4E8E\u80FD\u91CF\u5F3A\u5EA6, \u5219\u6298\u8DC3<2>\u5148\u77E5"
      ]
    ]
  },
  \u4F18\u8D28\u57FA\u56E0: {
    name: "\u4F18\u8D28\u57FA\u56E0",
    pinyin: "yzjy",
    race: "Z",
    level: 4,
    pack: "\u5FEB\u901F\u542F\u52A8",
    unit: {
      \u5DE2\u866B\u9886\u4E3B: 2,
      \u96F7\u517D: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6467\u6BC1\u6240\u6709\u866B\u5375\u724C\u5E76\u4E14\u6240\u6709\u866B\u65CF\u5361\u724C\u83B7\u5F971\u866B\u5375\u724C\u4E2D\u4EF7\u503C\u6700\u9AD8\u7684<\u975E\u82F1\u96C4>\u5355\u4F4D",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6467\u6BC1\u6240\u6709\u866B\u5375\u724C\u5E76\u4E14\u6240\u6709\u866B\u65CF\u5361\u724C\u83B7\u5F971\u866B\u5375\u724C\u4E2D\u4EF7\u503C\u6700\u9AD8\u7684\u5355\u4F4D"
      ]
    ]
  },
  \u57C3\u8499\u4EC6\u4ECE: {
    name: "\u57C3\u8499\u4EC6\u4ECE",
    pinyin: "ampc",
    race: "N",
    level: 4,
    pack: "\u5FEB\u901F\u542F\u52A8",
    unit: {
      "\u523A\u86C7(\u7CBE\u82F1)": 2,
      "\u65CB\u98CE\u72C2\u70ED\u8005(\u7CBE\u82F1)": 2
    },
    attr: {
      pool: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C1D\u8BD5\u540C\u65F6\u6467\u6BC11\u5F20\u866B\u65CF\u548C\u795E\u65CF\u5361\u724C, \u4F7F\u6240\u6709\u5177\u6709\u865A\u7A7A\u6295\u5F71\u7684\u5361\u724C\u83B7\u5F97<2>\u6DF7\u5408\u4F53\u6BC1\u706D\u8005",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C1D\u8BD5\u540C\u65F6\u6467\u6BC11\u5F20\u866B\u65CF\u548C\u795E\u65CF\u5361\u724C, \u4F7F\u6240\u6709\u5177\u6709\u865A\u7A7A\u6295\u5F71\u7684\u5361\u724C\u83B7\u5F97<3>\u6DF7\u5408\u4F53\u6BC1\u706D\u8005"
      ]
    ]
  },
  \u6B7B\u4EA1\u4E4B\u7FFC: {
    name: "\u6B7B\u4EA1\u4E4B\u7FFC",
    pinyin: "swzy",
    race: "N",
    level: 2,
    pack: "\u62C9\u514B\u5E0C\u5C14",
    unit: {
      \u51E4\u51F0: 4
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u88AB\u593A\u53D6\u65F6, \u83B7\u5F97<1>\u5929\u9738", "\u88AB\u593A\u53D6\u65F6, \u83B7\u5F97<2>\u5929\u9738"],
      [
        "\u4EFB\u610F\u5361\u724C\u4E09\u8FDE\u65F6, \u4E09\u8FDE\u5361\u724C\u593A\u53D6\u6B64\u5361\u724C",
        "\u4EFB\u610F\u5361\u724C\u4E09\u8FDE\u65F6, \u4E09\u8FDE\u5361\u724C\u593A\u53D6\u6B64\u5361\u724C"
      ]
    ]
  },
  \u865A\u7A7A\u63F4\u519B: {
    name: "\u865A\u7A7A\u63F4\u519B",
    pinyin: "xkyj",
    race: "N",
    level: 3,
    pack: "\u62C9\u514B\u5E0C\u5C14",
    unit: {
      \u653B\u57CE\u5766\u514B: 3
    },
    attr: {
      pool: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u6B64\u5361\u724C\u5C1D\u8BD5\u6D88\u80171\u74E6\u65AF\u83B7\u5F97\u968F\u673A\u5347\u7EA7",
        "\u8FDB\u573A\u65F6, \u6B64\u5361\u724C\u5C1D\u8BD5\u6D88\u80171\u74E6\u65AF\u83B7\u5F97\u968F\u673A\u5347\u7EA7"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u4EF7\u503C\u6700\u9AD8\u7684\u5361\u724C\u593A\u53D6\u6B64\u5361\u724C, \u4FDD\u7559\u5347\u7EA7",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u4EF7\u503C\u6700\u9AD8\u7684\u5361\u724C\u593A\u53D6\u6B64\u5361\u724C, \u4FDD\u7559\u5347\u7EA7"
      ]
    ]
  },
  \u6DF1\u6E0A\u884C\u8005: {
    name: "\u6DF1\u6E0A\u884C\u8005",
    pinyin: "syxz",
    race: "N",
    level: 4,
    pack: "\u62C9\u514B\u5E0C\u5C14",
    unit: {
      \u5148\u950B: 3,
      \u4E0D\u6B7B\u961F: 3
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      ["10\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21", "10\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21"],
      ["\u4EFB\u610F\u5361\u724C\u88AB\u593A\u53D6\u65F6, \u83B7\u5F97<1>\u5148\u950B", "\u4EFB\u610F\u5361\u724C\u88AB\u593A\u53D6\u65F6, \u83B7\u5F97<2>\u5148\u950B"]
    ]
  },
  \u9ED1\u6697\u796D\u575B: {
    name: "\u9ED1\u6697\u796D\u575B",
    pinyin: "hajt",
    race: "N",
    level: 4,
    pack: "\u62C9\u514B\u5E0C\u5C14",
    unit: {
      \u9ED1\u6697\u6267\u653F\u5B98: 2,
      \u51E4\u51F0: 2
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      ["\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<1>\u51E4\u51F0", "\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<2>\u51E4\u51F0"],
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u593A\u53D6\u4EF7\u503C\u6700\u4F4E\u7684\u5361\u724C", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u593A\u53D6\u4EF7\u503C\u6700\u4F4E\u7684\u5361\u724C"]
    ]
  },
  \u539F\u59CB\u87D1\u8782: {
    name: "\u539F\u59CB\u87D1\u8782",
    pinyin: "yszl",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u539F\u59CB\u87D1\u8782: 4,
      \u7CBE\u534E: 3
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [["\u4F9B\u517B(1): \u539F\u59CB\u87D1\u8782", "\u4F9B\u517B(1): \u539F\u59CB\u87D1\u8782"]]
  },
  \u4E0D\u6B7B\u961F: {
    name: "\u4E0D\u6B7B\u961F",
    pinyin: "bsd",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u4E0D\u6B7B\u961F: 4
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      ["\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<1>\u4E0D\u6B7B\u961F", "\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<2>\u4E0D\u6B7B\u961F"],
      ["8\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21", "8\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21"]
    ]
  },
  \u7D27\u6025\u90E8\u7F72: {
    name: "\u7D27\u6025\u90E8\u7F72",
    pinyin: "jjbs",
    race: "N",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 4,
      \u4FEE\u7406\u65E0\u4EBA\u673A: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: []
  },
  \u539F\u59CB\u523A\u86C7: {
    name: "\u539F\u59CB\u523A\u86C7",
    pinyin: "yscs",
    race: "N",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u539F\u59CB\u523A\u86C7: 7
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [
      ["\u4F9B\u517B(1): \u539F\u59CB\u523A\u86C7", "\u4F9B\u517B(1): \u539F\u59CB\u523A\u86C7"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u539F\u59CB\u523A\u86C7\u548C<2>\u7CBE\u534E",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u539F\u59CB\u523A\u86C7\u548C<4>\u7CBE\u534E"
      ]
    ]
  },
  \u539F\u59CB\u5F02\u9F99: {
    name: "\u539F\u59CB\u5F02\u9F99",
    pinyin: "ysyl",
    race: "N",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u539F\u59CB\u5F02\u9F99: 4
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u76F8\u90BB\u53F3\u4FA7\u5361\u724C\u83B7\u5F97<1>\u7CBE\u534E",
        "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u76F8\u90BB\u53F3\u4FA7\u5361\u724C\u83B7\u5F97<2>\u7CBE\u534E"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u6676\u4F53\u77FF\u6570\u91CF\u22651, \u5219\u6467\u6BC1\u6240\u6709\u5361\u724C\u4E2D\u7684\u7CBE\u534E, \u6BCF\u6467\u6BC12\u7CBE\u534E, \u83B7\u5F971\u539F\u59CB\u5F02\u9F99",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u6676\u4F53\u77FF\u6570\u91CF\u22651, \u5219\u6467\u6BC1\u6240\u6709\u5361\u724C\u4E2D\u7684\u7CBE\u534E, \u6BCF\u6467\u6BC12\u7CBE\u534E, \u83B7\u5F971\u539F\u59CB\u5F02\u9F99"
      ]
    ]
  },
  \u865A\u7A7A\u5927\u519B: {
    name: "\u865A\u7A7A\u5927\u519B",
    pinyin: "xkdj",
    race: "N",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u6B4C\u5229\u4E9A: 1,
      \u523A\u86C7: 1,
      \u9F99\u9A91\u58EB: 1
    },
    attr: {
      pool: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u4F60\u62E5\u6709\u4EBA\u65CF\u5361\u724C, \u5219\u83B7\u5F97<1>\u6B4C\u5229\u4E9A; \u82E5\u4F60\u62E5\u6709\u866B\u65CF\u5361\u724C, \u5219\u83B7\u5F97<1>\u523A\u86C7; \u82E5\u4F60\u62E5\u6709\u795E\u65CF\u5361\u724C, \u5219\u83B7\u5F97<1>\u9F99\u9A91\u58EB",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u4F60\u62E5\u6709\u4EBA\u65CF\u5361\u724C, \u5219\u83B7\u5F97<2>\u6B4C\u5229\u4E9A; \u82E5\u4F60\u62E5\u6709\u866B\u65CF\u5361\u724C, \u5219\u83B7\u5F97<2>\u523A\u86C7; \u82E5\u4F60\u62E5\u6709\u795E\u65CF\u5361\u724C, \u5219\u83B7\u5F97<2>\u9F99\u9A91\u58EB"
      ]
    ]
  },
  \u9C9C\u8840\u730E\u624B: {
    name: "\u9C9C\u8840\u730E\u624B",
    pinyin: "xxls",
    race: "N",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u9C9C\u8840\u730E\u624B: 6,
      \u6D69\u52AB: 1
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      ["\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<1>\u9C9C\u8840\u730E\u624B", "\u83B7\u5F97\u9ED1\u6697\u503C\u65F6, \u83B7\u5F97<2>\u9C9C\u8840\u730E\u624B"],
      ["5\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21", "5\u9ED1\u6697\u503C\u65F6\u5355\u4F4D\u590D\u6D3B1\u6B21"]
    ]
  },
  \u66B4\u63A0\u9F99: {
    name: "\u66B4\u63A0\u9F99",
    pinyin: "bll",
    race: "N",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u66B4\u63A0\u9F99: 2
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [
      ["\u4F9B\u517B(2): \u66B4\u63A0\u9F99", "\u4F9B\u517B(2): \u66B4\u63A0\u9F99"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u66B4\u63A0\u9F99\u548C<2>\u7CBE\u534E",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u66B4\u63A0\u9F99\u548C<4>\u7CBE\u534E"
      ]
    ]
  },
  \u9002\u8005\u751F\u5B58: {
    name: "\u9002\u8005\u751F\u5B58",
    pinyin: "szsc",
    race: "N",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u4E9A\u683C\u5353\u62C9: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u573A\u4E0A\u968F\u673A<5>\u4E2A\u751F\u7269\u5355\u4F4D\u7CBE\u82F1\u5316",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u573A\u4E0A\u968F\u673A<8>\u4E2A\u751F\u7269\u5355\u4F4D\u7CBE\u82F1\u5316"
      ]
    ]
  },
  \u6BC1\u706D\u8005: {
    name: "\u6BC1\u706D\u8005",
    pinyin: "hmz",
    race: "N",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u6BC1\u706D\u8005: 4
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      [
        "\u51FA\u552E\u65F6, \u76F8\u90BB\u5DE6\u4FA7\u5361\u724C\u83B7\u5F97\u7B49\u4E8E\u9ED1\u6697\u503C\u6570\u91CF\u7684\u6BC1\u706D\u8005(\u4E0D\u8D85\u8FC7<10>)",
        "\u51FA\u552E\u65F6, \u76F8\u90BB\u5DE6\u4FA7\u5361\u724C\u83B7\u5F97\u7B49\u4E8E\u9ED1\u6697\u503C\u6570\u91CF\u7684\u6BC1\u706D\u8005(\u4E0D\u8D85\u8FC7<30>)"
      ]
    ]
  },
  \u539F\u59CB\u70B9\u706B\u866B: {
    name: "\u539F\u59CB\u70B9\u706B\u866B",
    pinyin: "ysdhc",
    race: "N",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u539F\u59CB\u70B9\u706B\u866B: 4,
      \u7CBE\u534E: 2
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u8865\u5145\u539F\u59CB\u70B9\u706B\u866B\u81F3\u7CBE\u534E\u6570\u91CF\u7684\u4E24\u500D, \u6700\u591A\u8865\u5145\u523020",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u8865\u5145\u539F\u59CB\u70B9\u706B\u866B\u81F3\u7CBE\u534E\u6570\u91CF\u7684\u4E24\u500D, \u6700\u591A\u8865\u5145\u523020"
      ]
    ]
  },
  \u539F\u59CB\u96F7\u517D: {
    name: "\u539F\u59CB\u96F7\u517D",
    pinyin: "ysls",
    race: "N",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u539F\u59CB\u96F7\u517D: 3
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [
      ["\u4F9B\u517B(4): \u539F\u59CB\u66B4\u9F99\u517D", "\u4F9B\u517B(4): \u539F\u59CB\u66B4\u9F99\u517D"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u539F\u59CB\u96F7\u517D\u5E76\u6BCF\u67091\u5F20\u4E2D\u7ACB\u5361\u724C\u83B7\u5F971\u7CBE\u534E",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u539F\u59CB\u96F7\u517D\u5E76\u6BCF\u67091\u5F20\u4E2D\u7ACB\u5361\u724C\u83B7\u5F971\u7CBE\u534E"
      ]
    ]
  },
  \u9A6C\u62C9\u4EC0: {
    name: "\u9A6C\u62C9\u4EC0",
    pinyin: "mls",
    race: "N",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u9A6C\u62C9\u4EC0: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u83B7\u5F97\u865A\u7A7A\u6295\u5F71\u589E\u76CA",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u83B7\u5F97\u865A\u7A7A\u6295\u5F71\u589E\u76CA"
      ]
    ]
  },
  \u9ED1\u6697\u9884\u5146: {
    name: "\u9ED1\u6697\u9884\u5146",
    pinyin: "hayz",
    race: "N",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u6DF7\u5408\u4F53\u6BC1\u706D\u8005: 3
    },
    attr: {
      pool: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u573A\u4E0A\u67094\u4E2A\u79CD\u65CF\u7684\u5361\u724C, \u5219\u83B7\u5F97<2>\u6DF7\u5408\u4F53\u6BC1\u706D\u8005",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u573A\u4E0A\u67094\u4E2A\u79CD\u65CF\u7684\u5361\u724C, \u5219\u83B7\u5F97<4>\u6DF7\u5408\u4F53\u6BC1\u706D\u8005"
      ]
    ]
  },
  \u963F\u62C9\u7EB3\u514B: {
    name: "\u963F\u62C9\u7EB3\u514B",
    pinyin: "alnk",
    race: "N",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u963F\u62C9\u7EB3\u514B: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u593A\u53D6\u9664\u81EA\u8EAB\u968F\u673A\u4E24\u5F20\u5361\u724C, \u4FDD\u7559\u5347\u7EA7",
        "\u8FDB\u573A\u65F6, \u593A\u53D6\u9664\u81EA\u8EAB\u968F\u673A\u4E24\u5F20\u5361\u724C, \u4FDD\u7559\u5347\u7EA7"
      ]
    ]
  },
  \u5929\u7F5A\u884C\u8005: {
    name: "\u5929\u7F5A\u884C\u8005",
    pinyin: "tfxz",
    race: "N",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u5929\u7F5A\u884C\u8005: 2
    },
    attr: {
      pool: true
    },
    belong: "dark",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u593A\u53D64\u661F\u53CA\u4EE5\u4E0B\u6240\u6709\u5361\u724C\u7684\u9ED1\u6697\u503C, \u6BCF\u593A\u53D65\u70B9\u83B7\u5F971\u5929\u7F5A\u884C\u8005",
        "\u8FDB\u573A\u65F6, \u593A\u53D64\u661F\u53CA\u4EE5\u4E0B\u6240\u6709\u5361\u724C\u7684\u9ED1\u6697\u503C, \u6BCF\u593A\u53D65\u70B9\u83B7\u5F971\u5929\u7F5A\u884C\u8005"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u670910\u9ED1\u6697\u503C, \u83B7\u5F97<1>\u5929\u7F5A\u884C\u8005, \u6700\u591A\u83B7\u5F97<2>",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u670910\u9ED1\u6697\u503C, \u83B7\u5F97<2>\u5929\u7F5A\u884C\u8005, \u6700\u591A\u83B7\u5F97<4>"
      ]
    ]
  },
  \u5FB7\u54C8\u5361: {
    name: "\u5FB7\u54C8\u5361",
    pinyin: "dhk",
    race: "N",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u5FB7\u54C8\u5361: 1,
      \u5FB7\u54C8\u5361\u5206\u8EAB: 3
    },
    attr: {
      pool: true
    },
    belong: "primal",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u5361\u724C\u51FA\u552E\u65F6, \u82E5\u5176\u4E2D\u7CBE\u534E\u6570\u91CF\u22653, \u5219\u83B7\u5F97<2>\u5FB7\u54C8\u5361\u5206\u8EAB",
        "\u4EFB\u610F\u5361\u724C\u51FA\u552E\u65F6, \u82E5\u5176\u4E2D\u7CBE\u534E\u6570\u91CF\u22653, \u5219\u83B7\u5F97<4>\u5FB7\u54C8\u5361\u5206\u8EAB"
      ],
      [
        "\u552F\u4E00: \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u6676\u4F53\u77FF\u6570\u91CF\u22651, \u5219\u4E0B\u56DE\u5408\u53D1\u73B01\u5F20\u661F\u7EA7\u4F4E\u4E8E5\u661F\u7684\u539F\u59CB\u866B\u7FA4\u5361\u724C",
        "\u552F\u4E00: \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u6676\u4F53\u77FF\u6570\u91CF\u22651, \u5219\u4E0B\u56DE\u5408\u53D1\u73B01\u5F20\u661F\u7EA7\u4F4E\u4E8E5\u661F\u7684\u539F\u59CB\u866B\u7FA4\u5361\u724C"
      ]
    ]
  },
  \u6211\u53EB\u5C0F\u660E: {
    name: "\u6211\u53EB\u5C0F\u660E",
    pinyin: "wjxm",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u5F81\u53EC\u5175: 20
    },
    attr: {
      pool: true,
      rare: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u590D\u5236\u5DE6\u4FA7\u76F8\u90BB1-6\u661F\u7684\u5361\u724C\u5230\u6682\u5B58\u533A\u5E76\u88AB\u5176\u593A\u53D6, \u5E76\u4F7F\u5176\u83B7\u5F97\u661F\u7A7A\u52A0\u901F",
        "\u8FDB\u573A\u65F6, \u590D\u5236\u5DE6\u4FA7\u76F8\u90BB1-6\u661F\u7684\u5361\u724C\u5230\u6682\u5B58\u533A\u5E76\u88AB\u5176\u593A\u53D6, \u5E76\u4F7F\u5176\u83B7\u5F97\u661F\u7A7A\u52A0\u901F"
      ]
    ]
  },
  \u8C46\u6D46\u6CB9\u6761KT1: {
    name: "\u8C46\u6D46\u6CB9\u6761KT1",
    pinyin: "djytK",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u6B66\u88C5\u673A\u5668\u4EBA: 1
    },
    attr: {
      pool: true,
      rare: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u6B64\u5361\u724C\u548C\u76F8\u90BB\u5361\u724C\u83B7\u5F97\u968F\u673A\u5347\u7EA7",
        "\u8FDB\u573A\u65F6, \u6B64\u5361\u724C\u548C\u76F8\u90BB\u5361\u724C\u83B7\u5F97\u968F\u673A\u5347\u7EA7"
      ]
    ]
  },
  \u8C46\u6D46\u6CB9\u6761: {
    name: "\u8C46\u6D46\u6CB9\u6761",
    pinyin: "djyt",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u8D5B\u5170\u8FEA\u4E1D: 1
    },
    attr: {
      pool: true,
      rare: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u53F3\u4FA7\u6240\u6709\u5361\u724C\u83B7\u5F97\u865A\u7A7A\u6295\u5F71\u589E\u76CA",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u53F3\u4FA7\u6240\u6709\u5361\u724C\u83B7\u5F97\u865A\u7A7A\u6295\u5F71\u589E\u76CA"
      ]
    ]
  },
  \u6218\u6597\u53F7\u89D2: {
    name: "\u6218\u6597\u53F7\u89D2",
    pinyin: "zdhj",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      "\u865A\u7A7A\u8F89\u5149\u8230(\u7CBE\u82F1)": 4
    },
    attr: {
      pool: true,
      rare: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u516D\u661F\u4EE5\u4E0B\u5361\u724C\u51FA\u552E\u65F6, \u83B7\u5F97\u5176\u4E2D\u4EF7\u503C\u6700\u9AD8\u7684\u5355\u4F4D",
        "\u4EFB\u610F\u516D\u661F\u4EE5\u4E0B\u5361\u724C\u51FA\u552E\u65F6, \u83B7\u5F97\u5176\u4E2D\u4EF7\u503C\u6700\u9AD8\u7684\u5355\u4F4D"
      ]
    ]
  },
  \u51EF\u745E\u7518: {
    name: "\u51EF\u745E\u7518",
    pinyin: "krg",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      "\u838E\u62C9\xB7\u51EF\u745E\u7518": 1
    },
    attr: {
      pool: true,
      amber: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u541E\u566C\u5DE6\u4FA7\u5361\u724C\u6240\u6709\u5355\u4F4D, \u83B7\u5F97\u8FD9\u4E9B\u5355\u4F4D150%\u7684\u751F\u547D\u548C\u62A4\u76FE",
        "\u8FDB\u573A\u65F6, \u541E\u566C\u5DE6\u4FA7\u5361\u724C\u6240\u6709\u5355\u4F4D, \u83B7\u5F97\u8FD9\u4E9B\u5355\u4F4D150%\u7684\u751F\u547D\u548C\u62A4\u76FE"
      ],
      [
        "\u8FDB\u573A\u65F6, \u82E5\u4E24\u5F20\u51EF\u745E\u7518\u76F8\u90BB, \u5408\u5E76\u4E3A\u5200\u950B\u5973\u738B",
        "\u8FDB\u573A\u65F6, \u82E5\u4E24\u5F20\u51EF\u745E\u7518\u76F8\u90BB, \u5408\u5E76\u4E3A\u5200\u950B\u5973\u738B"
      ]
    ]
  },
  \u5200\u950B\u5973\u738B: {
    name: "\u5200\u950B\u5973\u738B",
    pinyin: "dfnw",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u5200\u950B\u5973\u738B: 1
    },
    attr: {
      amber: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u4E0E\u4F60\u6218\u6597\u7684\u73A9\u5BB6\u865A\u7A7A\u6295\u5F71\u52A0\u6210\u6548\u679C\u964D\u4F4E30%(\u6700\u4F4E\u4E3A0)",
        "\u552F\u4E00: \u4E0E\u4F60\u6218\u6597\u7684\u73A9\u5BB6\u865A\u7A7A\u6295\u5F71\u52A0\u6210\u6548\u679C\u964D\u4F4E30%(\u6700\u4F4E\u4E3A0)"
      ]
    ]
  },
  \u865A\u7A7A\u6784\u9020\u4F53: {
    name: "\u865A\u7A7A\u6784\u9020\u4F53",
    pinyin: "xkgzt",
    race: "N",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u865A\u7A7A\u6784\u9020\u4F53: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u5728\u573A\u65F6, \u865A\u7A7A\u6295\u5F71\u83B7\u5F97\u989D\u5916<20>%\u52A0\u6210",
        "\u552F\u4E00: \u5728\u573A\u65F6, \u865A\u7A7A\u6295\u5F71\u83B7\u5F97\u989D\u5916<40>%\u52A0\u6210"
      ]
    ]
  },
  \u9EC4\u91D1\u77FF\u5DE5: {
    name: "\u9EC4\u91D1\u77FF\u5DE5",
    pinyin: "hjkg",
    race: "N",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "normal",
    desc: [
      ["\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u83B7\u5F971\u6676\u4F53\u77FF", "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u83B7\u5F971\u6676\u4F53\u77FF"],
      ["\u51FA\u552E\u65F6, \u83B7\u5F973\u6676\u4F53\u77FF", "\u51FA\u552E\u65F6, \u83B7\u5F973\u6676\u4F53\u77FF"]
    ]
  },
  \u6298\u8DC3\u63F4\u519B: {
    name: "\u6298\u8DC3\u63F4\u519B",
    pinyin: "zyyj",
    race: "P",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u8FFD\u730E\u8005: 2,
      \u72C2\u70ED\u8005: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u51FA\u552E\u65F6, \u6298\u8DC3<1>\u72C2\u70ED\u8005\u548C<2>\u8FFD\u730E\u8005", "\u51FA\u552E\u65F6, \u6298\u8DC3<2>\u72C2\u70ED\u8005\u548C<4>\u8FFD\u730E\u8005"]
    ]
  },
  \u53D1\u7535\u7AD9: {
    name: "\u53D1\u7535\u7AD9",
    pinyin: "fdz",
    race: "P",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u4F7F\u5F92: 4,
      \u6C34\u6676\u5854: 1,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: []
  },
  \u4F9B\u80FD\u4E2D\u5FC3: {
    name: "\u4F9B\u80FD\u4E2D\u5FC3",
    pinyin: "gnzx",
    race: "P",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      "\u4F7F\u5F92(\u7CBE\u82F1)": 3,
      \u8FFD\u730E\u8005: 2,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u63D0\u5347\u9152\u9986\u7B49\u7EA7\u65F6, \u83B7\u5F97<1>\u6C34\u6676\u5854", "\u63D0\u5347\u9152\u9986\u7B49\u7EA7\u65F6, \u83B7\u5F97<2>\u6C34\u6676\u5854"]]
  },
  \u9F99\u9A91\u5175\u56E2: {
    name: "\u9F99\u9A91\u5175\u56E2",
    pinyin: "lqbt",
    race: "P",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u9F99\u9A91\u58EB: 5,
      \u96F6\u4EF6: 3,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u96F6\u4EF6", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<4>\u96F6\u4EF6"],
      ["\u51FA\u552E\u65F6, \u6298\u8DC3n\u9F99\u9A91\u58EB(n=\u96F6\u4EF6\u6570\u91CF)", "\u51FA\u552E\u65F6, \u6298\u8DC3n\u9F99\u9A91\u58EB(n=\u96F6\u4EF6\u6570\u91CF)"]
    ]
  },
  \u4E07\u53C9\u5954\u817E: {
    name: "\u4E07\u53C9\u5954\u817E",
    pinyin: "wcbt",
    race: "P",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u72C2\u70ED\u8005: 6,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u96C6\u7ED3(2): \u83B7\u5F97<1>\u72C2\u70ED\u8005", "\u96C6\u7ED3(2): \u83B7\u5F97<2>\u72C2\u70ED\u8005"]]
  },
  \u6298\u8DC3\u4FE1\u6807: {
    name: "\u6298\u8DC3\u4FE1\u6807",
    pinyin: "zyxb",
    race: "P",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u673A\u68B0\u54E8\u5175: 4,
      \u4E0D\u673D\u8005: 1,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u4F60\u7684\u6298\u8DC3\u6548\u679C\u603B\u662F\u6DFB\u52A0\u5230\u8FD9\u5F20\u724C\u4E0A",
        "\u552F\u4E00: \u4F60\u7684\u6298\u8DC3\u6548\u679C\u603B\u662F\u6DFB\u52A0\u5230\u8FD9\u5F20\u724C\u4E0A"
      ]
    ]
  },
  \u827E\u5C14\u4E4B\u5203: {
    name: "\u827E\u5C14\u4E4B\u5203",
    pinyin: "aezr",
    race: "P",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u72C2\u70ED\u8005: 6,
      \u9AD8\u9636\u5723\u5802\u6B66\u58EB: 2,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u795E\u65CF\u5361\u724C\u83B7\u5F97<1>\u6C34\u6676\u5854",
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u795E\u65CF\u5361\u724C\u83B7\u5F97<2>\u6C34\u6676\u5854"
      ]
    ]
  },
  \u6298\u8DC3\u90E8\u7F72: {
    name: "\u6298\u8DC3\u90E8\u7F72",
    pinyin: "zybs",
    race: "P",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u6298\u8DC3\u68F1\u955C: 1,
      \u4E0D\u673D\u8005: 1,
      \u72C2\u70ED\u8005: 4
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6298\u8DC3<2>\u8FFD\u730E\u8005", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6298\u8DC3<3>\u8FFD\u730E\u8005"],
      ["\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6298\u8DC3<1>\u72C2\u70ED\u8005", "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6298\u8DC3<2>\u72C2\u70ED\u8005"]
    ]
  },
  \u6697\u5F71\u536B\u961F: {
    name: "\u6697\u5F71\u536B\u961F",
    pinyin: "aywd",
    race: "P",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u9ED1\u6697\u5723\u5802\u6B66\u58EB: 5,
      \u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u8FDB\u573A\u65F6, \u83B7\u5F97\u6697\u5F71\u6218\u58EB\u5347\u7EA7", "\u8FDB\u573A\u65F6, \u83B7\u5F97\u6697\u5F71\u6218\u58EB\u5347\u7EA7"],
      ["\u96C6\u7ED3(3): \u83B7\u5F97<1>\u9ED1\u6697\u5723\u5802\u6B66\u58EB", "\u96C6\u7ED3(3): \u83B7\u5F97<2>\u9ED1\u6697\u5723\u5802\u6B66\u58EB"],
      [
        "\u80FD\u91CF\u5F3A\u5EA6\u22656\u65F6, \u989D\u5916\u83B7\u5F971\u9ED1\u6697\u5723\u5802\u6B66\u58EB",
        "\u80FD\u91CF\u5F3A\u5EA6\u22656\u65F6, \u989D\u5916\u83B7\u5F971\u9ED1\u6697\u5723\u5802\u6B66\u58EB"
      ]
    ]
  },
  \u91CD\u56DE\u6218\u573A: {
    name: "\u91CD\u56DE\u6218\u573A",
    pinyin: "chzc",
    race: "P",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u4E0D\u673D\u8005: 3,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u6240\u6709\u795E\u65CF\u5361\u724C\u5C06<1>\u751F\u7269\u5355\u4F4D\u53D8\u4E3A\u4E0D\u673D\u8005",
        "\u8FDB\u573A\u65F6, \u6240\u6709\u795E\u65CF\u5361\u724C\u5C06<2>\u751F\u7269\u5355\u4F4D\u53D8\u4E3A\u4E0D\u673D\u8005"
      ],
      ["\u51FA\u552E\u65F6, \u6298\u8DC3<1>\u4E0D\u673D\u8005", "\u51FA\u552E\u65F6, \u6298\u8DC3<2>\u4E0D\u673D\u8005"]
    ]
  },
  \u6298\u8DC3\u653B\u52BF: {
    name: "\u6298\u8DC3\u653B\u52BF",
    pinyin: "zygs",
    race: "P",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u6298\u8DC3\u68F1\u955C: 1,
      "\u8FFD\u730E\u8005(\u7CBE\u82F1)": 4,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u4EFB\u610F\u5361\u724C\u6298\u8DC3\u65F6, \u83B7\u5F97<1>\u8FFD\u730E\u8005", "\u4EFB\u610F\u5361\u724C\u6298\u8DC3\u65F6, \u83B7\u5F97<2>\u8FFD\u730E\u8005"]]
  },
  \u51C0\u5316\u8005\u519B\u56E2: {
    name: "\u51C0\u5316\u8005\u519B\u56E2",
    pinyin: "jhzjt",
    race: "P",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      "\u72C2\u70ED\u8005(\u7CBE\u82F1)": 3,
      \u63A0\u593A\u8005: 2,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u96C6\u7ED3(5): \u6240\u6709\u795E\u65CF\u5361\u724C\u5C06<1>\u5730\u9762\u975E\u91CD\u578B\u5355\u4F4D\u7CBE\u82F1\u5316, \u5E76\u4E00\u540C\u6298\u8DC3\u4ED6\u4EEC",
        "\u96C6\u7ED3(5): \u6240\u6709\u795E\u65CF\u5361\u724C\u5C06<2>\u5730\u9762\u975E\u91CD\u578B\u5355\u4F4D\u7CBE\u82F1\u5316, \u5E76\u4E00\u540C\u6298\u8DC3\u4ED6\u4EEC"
      ]
    ]
  },
  \u51EF\u62C9\u514B\u65AF: {
    name: "\u51EF\u62C9\u514B\u65AF",
    pinyin: "klks",
    race: "P",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u51EF\u62C9\u514B\u65AF: 1,
      \u5DE8\u50CF: 1,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u968F\u673A\u6298\u8DC3<1>\u4E2A\u4E0D\u673D\u8005/\u63A0\u593A\u8005/\u5DE8\u50CF",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u968F\u673A\u6298\u8DC3<2>\u4E2A\u4E0D\u673D\u8005/\u63A0\u593A\u8005/\u5DE8\u50CF"
      ]
    ]
  },
  \u865A\u7A7A\u8230\u961F: {
    name: "\u865A\u7A7A\u8230\u961F",
    pinyin: "xkjd",
    race: "P",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u865A\u7A7A\u8F89\u5149\u8230: 4,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u96C6\u7ED3(5): \u6298\u8DC3<1>\u865A\u7A7A\u8F89\u5149\u8230", "\u96C6\u7ED3(5): \u6298\u8DC3<2>\u865A\u7A7A\u8F89\u5149\u8230"]]
  },
  \u52BF\u4E0D\u53EF\u6321: {
    name: "\u52BF\u4E0D\u53EF\u6321",
    pinyin: "sbkd",
    race: "P",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u6267\u653F\u5B98: 4,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u8FDB\u573A\u65F6, \u6298\u8DC31\u6267\u653F\u5B98(\u7CBE\u82F1)", "\u8FDB\u573A\u65F6, \u6298\u8DC31\u6267\u653F\u5B98(\u7CBE\u82F1)"],
      ["\u96C6\u7ED3(5): \u6298\u8DC3<1>\u6267\u653F\u5B98", "\u96C6\u7ED3(5): \u6298\u8DC3<2>\u6267\u653F\u5B98"],
      [
        "\u82E5\u80FD\u91CF\u5F3A\u5EA6\u226515, \u989D\u5916\u6298\u8DC31\u6267\u653F\u5B98(\u7CBE\u82F1)",
        "\u82E5\u80FD\u91CF\u5F3A\u5EA6\u226515, \u989D\u5916\u6298\u8DC31\u6267\u653F\u5B98(\u7CBE\u82F1)"
      ]
    ]
  },
  \u9EC4\u91D1\u8230\u961F: {
    name: "\u9EC4\u91D1\u8230\u961F",
    pinyin: "hjjd",
    race: "P",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u822A\u6BCD: 2,
      \u98CE\u66B4\u6218\u8230: 1,
      \u6C34\u6676\u5854: 1,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u96C6\u7ED3(5): \u83B7\u5F97<1>\u4FA6\u5BDF\u673A", "\u96C6\u7ED3(5): \u83B7\u5F97<2>\u4FA6\u5BDF\u673A"],
      ["\u96C6\u7ED3(7): \u83B7\u5F97<1>\u98CE\u66B4\u6218\u8230", "\u96C6\u7ED3(7): \u83B7\u5F97<2>\u98CE\u66B4\u6218\u8230"]
    ]
  },
  \u5C24\u5C14\u5170: {
    name: "\u5C24\u5C14\u5170",
    pinyin: "yel",
    race: "P",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u5C24\u5C14\u5170: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u4E3A\u81EA\u8EAB\u548C\u76F8\u90BB\u5361\u724C\u63D0\u4F9B<5>\u80FD\u91CF\u5F3A\u5EA6", "\u4E3A\u81EA\u8EAB\u548C\u76F8\u90BB\u5361\u724C\u63D0\u4F9B<8>\u80FD\u91CF\u5F3A\u5EA6"],
      ["\u83B7\u5F97\u6C34\u6676\u5854\u65F6, \u83B7\u5F97<1>\u83AB\u6C57\u8FBE\u5C14", "\u83B7\u5F97\u6C34\u6676\u5854\u65F6, \u83B7\u5F97<2>\u83AB\u6C57\u8FBE\u5C14"],
      [
        "\u5C06\u6240\u6709\u6298\u8DC3\u5230\u6B64\u5361\u724C\u7684\u673A\u68B0\u5355\u4F4D\u53D8\u4E3A\u5C24\u5C14\u5170",
        "\u5C06\u6240\u6709\u6298\u8DC3\u5230\u6B64\u5361\u724C\u7684\u673A\u68B0\u5355\u4F4D\u53D8\u4E3A\u5C24\u5C14\u5170"
      ]
    ]
  },
  \u5149\u590D\u827E\u5C14: {
    name: "\u5149\u590D\u827E\u5C14",
    pinyin: "gfae",
    race: "P",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u6CF0\u5766\u68F1\u955C: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u83B7\u5F97\u5347\u7EA7\u65F6, \u5C55\u5F00\u6CF0\u5766\u68F1\u955C", "\u83B7\u5F97\u5347\u7EA7\u65F6, \u5C55\u5F00\u6CF0\u5766\u68F1\u955C"],
      [
        "\u6CF0\u5766\u68F1\u955C\u5C55\u5F00\u65F6, \u83B7\u5F97\u51FA\u552E\u7684\u795E\u65CF\u5361\u724C\u7684<\u975E\u82F1\u96C4>\u5355\u4F4D\u548C\u6C34\u6676\u5854(\u4E0D\u5305\u62EC\u865A\u7A7A\u6C34\u6676\u5854), \u540C\u65F6\u6536\u8D77",
        "\u6CF0\u5766\u68F1\u955C\u5C55\u5F00\u65F6, \u83B7\u5F97\u51FA\u552E\u7684\u795E\u65CF\u5361\u724C\u7684\u5355\u4F4D\u548C\u6C34\u6676\u5854(\u4E0D\u5305\u62EC\u865A\u7A7A\u6C34\u6676\u5854), \u540C\u65F6\u6536\u8D77"
      ]
    ]
  },
  \u83F2\u5C3C\u514B\u65AF: {
    name: "\u83F2\u5C3C\u514B\u65AF",
    pinyin: "fnks",
    race: "P",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u83F2\u5C3C\u514B\u65AF: 1,
      "\u65CB\u98CE\u72C2\u70ED\u8005(\u7CBE\u82F1)": 3,
      \u63A0\u593A\u8005: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u5C06\u4E24\u4FA7\u5361\u724C\u7684\u72C2\u70ED\u8005\u548C\u4F7F\u5F92\u53D8\u4E3A\u65CB\u98CE\u72C2\u70ED\u8005",
        "\u8FDB\u573A\u65F6, \u5C06\u4E24\u4FA7\u5361\u724C\u7684\u72C2\u70ED\u8005\u548C\u4F7F\u5F92\u53D8\u4E3A\u65CB\u98CE\u72C2\u70ED\u8005"
      ],
      ["\u96C6\u7ED3(5): \u83B7\u5F97<1>\u63A0\u593A\u8005", "\u96C6\u7ED3(5): \u83B7\u5F97<2>\u63A0\u593A\u8005"]
    ]
  },
  \u9152\u9986\u540E\u52E4\u5904: {
    name: "\u9152\u9986\u540E\u52E4\u5904",
    pinyin: "jghqc",
    race: "P",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u79D1\u7F57\u62C9\u91CC\u6602: 1,
      \u5361\u5C14\u8FBE\u5229\u65AF: 1
    },
    attr: {
      pool: true,
      rare: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u6211\u4EEC\u9700\u8981\u96C6\u7ED3\u66F4\u591A\u89C2\u4F17!", "\u6211\u4EEC\u9700\u8981\u96C6\u7ED3\u66F4\u591A\u89C2\u4F17!"],
      [
        "\u8FDB\u573A\u65F6, \u6240\u6709\u795E\u65CF\u5361\u724C\u65E0\u6761\u4EF6\u89E6\u53D12\u6B21\u96C6\u7ED3\u6548\u679C",
        "\u8FDB\u573A\u65F6, \u6240\u6709\u795E\u65CF\u5361\u724C\u65E0\u6761\u4EF6\u89E6\u53D12\u6B21\u96C6\u7ED3\u6548\u679C"
      ]
    ]
  },
  \u51C0\u5316\u4E00\u5207: {
    name: "\u51C0\u5316\u4E00\u5207",
    pinyin: "jhyq",
    race: "P",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      "\u5DE8\u50CF(\u7CBE\u82F1)": 2,
      \u6C34\u6676\u5854: 3
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u96C6\u7ED3(4): \u6298\u8DC3<1>\u72C2\u70ED\u8005(\u7CBE\u82F1)", "\u96C6\u7ED3(4): \u6298\u8DC3<2>\u72C2\u70ED\u8005(\u7CBE\u82F1)"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u67097\u80FD\u91CF\u5F3A\u5EA6\u6298\u8DC3<1>\u5DE8\u50CF(\u7CBE\u82F1), \u6700\u591A<2>",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u67097\u80FD\u91CF\u5F3A\u5EA6\u6298\u8DC3<2>\u5DE8\u50CF(\u7CBE\u82F1), \u6700\u591A<4>"
      ]
    ]
  },
  \u963F\u5C14\u8FBE\u745E\u65AF: {
    name: "\u963F\u5C14\u8FBE\u745E\u65AF",
    pinyin: "aedrs",
    race: "P",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u4EF2\u88C1\u8005: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C115\u5F20\u795E\u65CF\u5361\u724C, \u83B7\u5F97<1>\u82F1\u96C4\u4E0D\u673D\u8005",
        "\u552F\u4E00: \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C115\u5F20\u795E\u65CF\u5361\u724C, \u83B7\u5F97<2>\u82F1\u96C4\u4E0D\u673D\u8005"
      ]
    ]
  },
  \u963F\u5854\u5C3C\u65AF: {
    name: "\u963F\u5854\u5C3C\u65AF",
    pinyin: "atns",
    race: "P",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u963F\u5854\u5C3C\u65AF: 1,
      \u63A0\u593A\u8005: 2,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F972\u65CB\u98CE\u72C2\u70ED\u8005(\u7CBE\u82F1)",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F972\u65CB\u98CE\u72C2\u70ED\u8005(\u7CBE\u82F1)<\u548C2\u963F\u5854\u5C3C\u65AF>"
      ],
      [
        "\u552F\u4E00: \u4F60\u7684\u6240\u6709\u96C6\u7ED3\u5361\u724C\u6BCF\u56DE\u5408\u65E0\u6761\u4EF6\u989D\u5916\u96C6\u7ED3\u4E00\u6B21",
        "\u552F\u4E00: \u4F60\u7684\u6240\u6709\u96C6\u7ED3\u5361\u724C\u6BCF\u56DE\u5408\u65E0\u6761\u4EF6\u989D\u5916\u96C6\u7ED3\u4E00\u6B21"
      ]
    ]
  },
  \u6B7B\u795E\u706B\u8F66: {
    name: "\u6B7B\u795E\u706B\u8F66",
    pinyin: "sshc",
    race: "T",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u6536\u5272\u8005: 3,
      \u6076\u706B: 2,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u52A1: \u8BA9<1>\u5F20\u5361\u724C\u8FDB\u573A\n\u5956\u52B1: \u83B7\u5F97<1>\u6676\u4F53\u77FF",
        "\u4EFB\u52A1: \u8BA9<2>\u5F20\u5361\u724C\u8FDB\u573A\n\u5956\u52B1: \u83B7\u5F97<2>\u6676\u4F53\u77FF"
      ]
    ]
  },
  \u597D\u5144\u5F1F: {
    name: "\u597D\u5144\u5F1F",
    pinyin: "hxd",
    race: "T",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u9646\u6218\u961F\u5458: 6,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<4>\u9646\u6218\u961F\u5458", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<6>\u9646\u6218\u961F\u5458"],
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u9646\u6218\u961F\u5458", "\u53CD\u5E94\u5806\u751F\u4EA7\u9646\u6218\u961F\u5458"]
    ]
  },
  \u6316\u5B9D\u5947\u5175: {
    name: "\u6316\u5B9D\u5947\u5175",
    pinyin: "wbqb",
    race: "T",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u54CD\u5C3E\u86C7\u6218\u8F66: 3,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true,
      amber: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u52A1: \u5237\u65B05\u6B21\n\u5956\u52B1: \u53D1\u73B01\u5F20\u7B49\u540C\u4E8E\u4F60\u5F53\u524D\u9152\u9986\u661F\u7EA7\u7684\u5361\u724C",
        "\u4EFB\u52A1: \u5237\u65B05\u6B21\n\u5956\u52B1: \u53D1\u73B01\u5F20\u7B49\u540C\u4E8E\u4F60\u5F53\u524D\u9152\u9986\u661F\u7EA7\u7684\u5361\u724C"
      ]
    ]
  },
  \u5B9E\u9A8C\u5BA4\u5B89\u4FDD: {
    name: "\u5B9E\u9A8C\u5BA4\u5B89\u4FDD",
    pinyin: "sysab",
    race: "T",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u9646\u6218\u961F\u5458: 6,
      \u533B\u7597\u5175: 3,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u9646\u6218\u961F\u5458", "\u53CD\u5E94\u5806\u751F\u4EA7\u9646\u6218\u961F\u5458"],
      [
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u6539\u53D8",
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u6539\u53D8"
      ]
    ]
  },
  \u5F81\u5175\u4EE4: {
    name: "\u5F81\u5175\u4EE4",
    pinyin: "zbl",
    race: "T",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      "\u9646\u6218\u961F\u5458(\u7CBE\u82F1)": 4,
      \u9646\u6218\u961F\u5458: 3,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u62BD\u53D6\u4E24\u4FA7\u4EBA\u65CF\u5361\u724C\u4E09\u5206\u4E4B\u4E8C\u7684\u5355\u4F4D",
        "\u8FDB\u573A\u65F6, \u62BD\u53D6\u4E24\u4FA7\u4EBA\u65CF\u5361\u724C\u4E09\u5206\u4E4B\u4E8C\u7684\u5355\u4F4D"
      ]
    ]
  },
  \u6076\u706B\u5C0F\u961F: {
    name: "\u6076\u706B\u5C0F\u961F",
    pinyin: "ehxd",
    race: "T",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u6076\u706B: 6,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F971\u653B\u57CE\u5766\u514B", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F971\u653B\u57CE\u5766\u514B"],
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u6076\u706B", "\u53CD\u5E94\u5806\u751F\u4EA7\u6076\u706B"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C112\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<1>\u6B4C\u5229\u4E9A",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C112\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<2>\u6B4C\u5229\u4E9A"
      ]
    ]
  },
  \u7A7A\u6295\u5730\u96F7: {
    name: "\u7A7A\u6295\u5730\u96F7",
    pinyin: "ktdl",
    race: "T",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u5BE1\u5987\u96F7: 3,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u83B7\u5F97<1>\u5BE1\u5987\u96F7", "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u83B7\u5F97<2>\u5BE1\u5987\u96F7"],
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<2>\u5BE1\u5987\u96F7", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<3>\u5BE1\u5987\u96F7"]
    ]
  },
  \u6B65\u5175\u8FDE\u961F: {
    name: "\u6B65\u5175\u8FDE\u961F",
    pinyin: "bbld",
    race: "T",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u9646\u6218\u961F\u5458: 5,
      \u533B\u7597\u8FD0\u8F93\u673A: 2,
      \u52AB\u63A0\u8005: 3,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<3>\u52AB\u63A0\u8005", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<5>\u52AB\u63A0\u8005"],
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u52AB\u63A0\u8005", "\u53CD\u5E94\u5806\u751F\u4EA7\u52AB\u63A0\u8005"]
    ]
  },
  \u98D9\u8F66\u6D41: {
    name: "\u98D9\u8F66\u6D41",
    pinyin: "bcl",
    race: "T",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u79C3\u9E6B: 4,
      \u98D3\u98CE: 3,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<3>\u79C3\u9E6B", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<5>\u79C3\u9E6B"],
      [
        "\u4EFB\u52A1: \u8BA93\u5F20\u4EBA\u65CF\u5361\u724C\u8FDB\u573A\n\u5956\u52B1: \u76F8\u90BB\u5DE6\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u53D8\u4E3A\u9AD8\u7EA7\u79D1\u6280\u5B9E\u9A8C\u5BA4",
        "\u4EFB\u52A1: \u8BA93\u5F20\u4EBA\u65CF\u5361\u724C\u8FDB\u573A\n\u5956\u52B1: \u76F8\u90BB\u5DE6\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u53D8\u4E3A\u9AD8\u7EA7\u79D1\u6280\u5B9E\u9A8C\u5BA4"
      ]
    ]
  },
  \u79D1\u8003\u5C0F\u961F: {
    name: "\u79D1\u8003\u5C0F\u961F",
    pinyin: "kkxd",
    race: "T",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u6B4C\u5229\u4E9A: 4,
      \u94C1\u9E26: 2,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u6539\u53D8",
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u6539\u53D8"
      ],
      [
        "\u4EFB\u52A1: \u5237\u65B02\u6B21\n\u5956\u52B1: \u83B7\u5F97<1>\u6B4C\u5229\u4E9A\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u91CD\u7F6E\u6B64\u4EFB\u52A1",
        "\u4EFB\u52A1: \u5237\u65B02\u6B21\n\u5956\u52B1: \u83B7\u5F97<2>\u6B4C\u5229\u4E9A\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u91CD\u7F6E\u6B64\u4EFB\u52A1"
      ]
    ]
  },
  \u9646\u519B\u5B66\u9662: {
    name: "\u9646\u519B\u5B66\u9662",
    pinyin: "ljxy",
    race: "T",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u6218\u72FC: 3,
      "\u7EF4\u4EAC\u6218\u673A<\u673A\u7532>": 2,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<3>\u7EF4\u4EAC\u6218\u673A", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<5>\u7EF4\u4EAC\u6218\u673A"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C113\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<1>\u6218\u72FC",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C113\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<2>\u6218\u72FC"
      ]
    ]
  },
  \u7A7A\u519B\u5B66\u9662: {
    name: "\u7A7A\u519B\u5B66\u9662",
    pinyin: "kjxy",
    race: "T",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u89E3\u653E\u8005: 3,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<3>\u7EF4\u4EAC\u6218\u673A", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<5>\u7EF4\u4EAC\u6218\u673A"],
      ["\u4EFB\u610F\u4EFB\u52A1\u5B8C\u6210\u65F6, \u83B7\u5F97<1>\u89E3\u653E\u8005", "\u4EFB\u610F\u4EFB\u52A1\u5B8C\u6210\u65F6, \u83B7\u5F97<2>\u89E3\u653E\u8005"]
    ]
  },
  \u4EA4\u53C9\u706B\u529B: {
    name: "\u4EA4\u53C9\u706B\u529B",
    pinyin: "jchl",
    race: "T",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u653B\u57CE\u5766\u514B: 2,
      \u6B4C\u5229\u4E9A: 3,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<3>\u6B4C\u5229\u4E9A", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<5>\u6B4C\u5229\u4E9A"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C114\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<1>\u653B\u57CE\u5766\u514B",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C114\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<2>\u653B\u57CE\u5766\u514B"
      ]
    ]
  },
  \u67AA\u5175\u5766\u514B: {
    name: "\u67AA\u5175\u5766\u514B",
    pinyin: "qbtk",
    race: "T",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u9646\u6218\u961F\u5458: 8,
      \u653B\u57CE\u5766\u514B: 2,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u5177\u6709\u53CD\u5E94\u5806\u7684\u4EBA\u65CF\u5361\u724C\u83B7\u5F97<2>\u9646\u6218\u961F\u5458",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u5177\u6709\u53CD\u5E94\u5806\u7684\u4EBA\u65CF\u5361\u724C\u83B7\u5F97<4>\u9646\u6218\u961F\u5458"
      ]
    ]
  },
  \u65AF\u53F0\u7279\u66FC: {
    name: "\u65AF\u53F0\u7279\u66FC",
    pinyin: "sttm",
    race: "T",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u65AF\u53F0\u7279\u66FC: 1,
      \u601D\u65FA: 1,
      \u9AD8\u7EA7\u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u5FEB\u901F\u751F\u4EA7: \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5C06<1>\u6B4C\u5229\u4E9A\u548C<1>\u7EF4\u4EAC\u6218\u673A\u7CBE\u82F1\u5316",
        "\u5FEB\u901F\u751F\u4EA7: \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5C06<2>\u6B4C\u5229\u4E9A\u548C<2>\u7EF4\u4EAC\u6218\u673A\u7CBE\u82F1\u5316"
      ],
      [
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u5DE6\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u53D8\u4E3A\u9AD8\u7EA7\u79D1\u6280\u5B9E\u9A8C\u5BA4",
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u5DE6\u4FA7\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B\u53D8\u4E3A\u9AD8\u7EA7\u79D1\u6280\u5B9E\u9A8C\u5BA4"
      ]
    ]
  },
  \u62A4\u822A\u4E2D\u961F: {
    name: "\u62A4\u822A\u4E2D\u961F",
    pinyin: "hhzd",
    race: "T",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u6028\u7075\u6218\u673A: 3,
      \u9EC4\u660F\u4E4B\u7FFC: 1,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<1>\u9EC4\u660F\u4E4B\u7FFC", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<2>\u9EC4\u660F\u4E4B\u7FFC"],
      ["\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u83B7\u5F97<1>\u6028\u7075\u6218\u673A", "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u83B7\u5F97<2>\u6028\u7075\u6218\u673A"]
    ]
  },
  \u6CF0\u51EF\u65AF: {
    name: "\u6CF0\u51EF\u65AF",
    pinyin: "tks",
    race: "T",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u6CF0\u51EF\u65AF: 1,
      "\u9646\u6218\u961F\u5458(\u7CBE\u82F1)": 6,
      \u53CD\u5E94\u5806: 1,
      \u533B\u7597\u8FD0\u8F93\u673A: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u9646\u6218\u961F\u5458(\u7CBE\u82F1)", "\u53CD\u5E94\u5806\u751F\u4EA7\u9646\u6218\u961F\u5458(\u7CBE\u82F1)"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u4EBA\u65CF\u5361\u724C\u5C06<3>\u9646\u6218\u961F\u5458\u548C<3>\u52AB\u63A0\u8005\u7CBE\u82F1\u5316",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u4EBA\u65CF\u5361\u724C\u5C06<5>\u9646\u6218\u961F\u5458\u548C<5>\u52AB\u63A0\u8005\u7CBE\u82F1\u5316"
      ],
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u533B\u7597\u8FD0\u8F93\u673A", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u533B\u7597\u8FD0\u8F93\u673A"]
    ]
  },
  \u5916\u7C4D\u519B\u56E2: {
    name: "\u5916\u7C4D\u519B\u56E2",
    pinyin: "wjjt",
    race: "T",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u725B\u5934\u4EBA\u9646\u6218\u961F\u5458: 2,
      \u9C7C\u4EBA\u9646\u6218\u961F\u5458: 1,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u725B\u5934\u4EBA\u9646\u6218\u961F\u5458", "\u53CD\u5E94\u5806\u751F\u4EA7\u725B\u5934\u4EBA\u9646\u6218\u961F\u5458"],
      [
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5C06\u6BCF6\u4E2A\u9646\u6218\u961F\u5458\u53D8\u4E3A1\u725B\u5934\u4EBA\u9646\u6218\u961F\u5458(\u7CBE\u82F1\u5219\u53EA\u9700\u89813\u4E2A)",
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5C06\u6BCF6\u4E2A\u9646\u6218\u961F\u5458\u53D8\u4E3A1\u725B\u5934\u4EBA\u9646\u6218\u961F\u5458(\u7CBE\u82F1\u5219\u53EA\u9700\u89813\u4E2A)"
      ]
    ]
  },
  \u94A2\u94C1\u6D2A\u6D41: {
    name: "\u94A2\u94C1\u6D2A\u6D41",
    pinyin: "gthl",
    race: "T",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u96F7\u795E: 3,
      \u6218\u72FC: 2,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<1>\u96F7\u795E", "\u5FEB\u901F\u751F\u4EA7\uFF1A\u83B7\u5F97<2>\u96F7\u795E"],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u67095\u79D1\u6280\u6302\u4EF6, \u5219\u6240\u6709\u5361\u724C\u5C06<1>\u653B\u57CE\u5766\u514B\u548C<1>\u6218\u72FC\u7CBE\u82F1\u5316",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u67095\u79D1\u6280\u6302\u4EF6, \u5219\u6240\u6709\u5361\u724C\u5C06<2>\u653B\u57CE\u5766\u514B\u548C<2>\u6218\u72FC\u7CBE\u82F1\u5316"
      ]
    ]
  },
  \u6E38\u9A91\u5175: {
    name: "\u6E38\u9A91\u5175",
    pinyin: "yqb",
    race: "T",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      "\u96F7\u8BFA(\u6307\u6325\u5B98)": 1,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u5361\u724C\u6302\u4EF6\u53D8\u66F4\u65F6, \u76F8\u5E94\u5361\u724C\u83B7\u5F97<1>\u96F7\u8BFA(\u72D9\u51FB\u624B)",
        "\u4EFB\u610F\u5361\u724C\u6302\u4EF6\u53D8\u66F4\u65F6, \u76F8\u5E94\u5361\u724C\u83B7\u5F97<2>\u96F7\u8BFA(\u72D9\u51FB\u624B)"
      ],
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u96F7\u8BFA(\u72D9\u51FB\u624B)", "\u53CD\u5E94\u5806\u751F\u4EA7\u96F7\u8BFA(\u72D9\u51FB\u624B)"]
    ]
  },
  \u6C83\u83F2\u5C14\u5FB7: {
    name: "\u6C83\u83F2\u5C14\u5FB7",
    pinyin: "wfed",
    race: "T",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u6C83\u83F2\u5C14\u5FB7\u5C06\u519B: 1,
      \u5E1D\u76FE\u536B\u5175: 3,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u5361\u724C\u5C06<1>\u9646\u6218\u961F\u5458(\u7CBE\u82F1)\u53D8\u4E3A\u5E1D\u76FE\u536B\u5175",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u5361\u724C\u5C06<2>\u9646\u6218\u961F\u5458(\u7CBE\u82F1)\u53D8\u4E3A\u5E1D\u76FE\u536B\u5175"
      ],
      [
        "\u552F\u4E00: \u83B7\u5F97\u6BCF\u56DE\u5408\u51FA\u552E\u7684<\u7B2C\u4E00>\u5F20\u4EBA\u65CF\u5361\u724C\u7684\u5355\u4F4D",
        "\u552F\u4E00: \u83B7\u5F97\u6BCF\u56DE\u5408\u51FA\u552E\u7684<\u524D\u4E24>\u5F20\u4EBA\u65CF\u5361\u724C\u7684\u5355\u4F4D"
      ]
    ]
  },
  \u5E1D\u56FD\u8230\u961F: {
    name: "\u5E1D\u56FD\u8230\u961F",
    pinyin: "dgjd",
    race: "T",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u6218\u5217\u5DE1\u822A\u8230: 4,
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u52A1: \u51FA\u552E3\u5F20\u5361\u724C\n\u5956\u52B1: \u83B7\u5F97<1>\u6218\u5217\u5DE1\u822A\u8230\u5E76\u91CD\u7F6E\u6B64\u4EFB\u52A1",
        "\u4EFB\u52A1: \u51FA\u552E3\u5F20\u5361\u724C\n\u5956\u52B1: \u83B7\u5F97<2>\u6218\u5217\u5DE1\u822A\u8230\u5E76\u91CD\u7F6E\u6B64\u4EFB\u52A1"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C114\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<2>\u9EC4\u660F\u4E4B\u7FFC",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C114\u79D1\u6280\u6302\u4EF6, \u5219\u83B7\u5F97<4>\u9EC4\u660F\u4E4B\u7FFC"
      ]
    ]
  },
  \u866B\u7FA4\u5148\u950B: {
    name: "\u866B\u7FA4\u5148\u950B",
    pinyin: "cqxf",
    race: "Z",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u8DF3\u866B: 8,
      \u7206\u866B: 3
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u8DF3\u866B", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<4>\u8DF3\u866B"]]
  },
  \u87D1\u8782\u5C0F\u961F: {
    name: "\u87D1\u8782\u5C0F\u961F",
    pinyin: "zlxd",
    race: "Z",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u87D1\u8782: 3,
      \u7206\u866B: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u5C06<1>\u87D1\u8782\u53D8\u4E3A\u7834\u574F\u8005",
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u5C06<2>\u87D1\u8782\u53D8\u4E3A\u7834\u574F\u8005"
      ],
      ["\u51FA\u552E\u65F6, \u6CE8\u5375<2>\u87D1\u8782", "\u51FA\u552E\u65F6, \u6CE8\u5375<4>\u87D1\u8782"]
    ]
  },
  \u5C60\u730E\u8005: {
    name: "\u5C60\u730E\u8005",
    pinyin: "tlz",
    race: "Z",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u8DF3\u866B: 10,
      \u523A\u86C7: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6240\u6709\u523A\u86C7\u53D8\u4E3A\u523A\u86C7(\u7CBE\u82F1)",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6240\u6709\u523A\u86C7\u53D8\u4E3A\u523A\u86C7(\u7CBE\u82F1)"
      ],
      [
        "\u63D0\u5347\u9152\u9986\u7B49\u7EA7\u65F6, \u83B7\u5F97<1>\u523A\u86C7(\u7CBE\u82F1)",
        "\u63D0\u5347\u9152\u9986\u7B49\u7EA7\u65F6, \u83B7\u5F97<2>\u523A\u86C7(\u7CBE\u82F1)"
      ]
    ]
  },
  \u57CB\u5730\u523A\u86C7: {
    name: "\u57CB\u5730\u523A\u86C7",
    pinyin: "mdcs",
    race: "Z",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u523A\u86C7: 6
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u51FA\u552E\u65F6, \u6CE8\u5375<3>\u523A\u86C7", "\u51FA\u552E\u65F6, \u6CE8\u5375<6>\u523A\u86C7"]]
  },
  \u53D8\u5F02\u519B\u56E2: {
    name: "\u53D8\u5F02\u519B\u56E2",
    pinyin: "byjt",
    race: "Z",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458: 7
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u5361\u724C\u6CE8\u5375\u65F6, \u83B7\u5F97<1>\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458",
        "\u4EFB\u610F\u5361\u724C\u6CE8\u5375\u65F6, \u83B7\u5F97<2>\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458"
      ]
    ]
  },
  \u5B75\u5316\u87D1\u8782: {
    name: "\u5B75\u5316\u87D1\u8782",
    pinyin: "fhzl",
    race: "Z",
    level: 2,
    pack: "\u6838\u5FC3",
    unit: {
      \u87D1\u8782: 4,
      \u7834\u574F\u8005: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<1>\u87D1\u8782", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<2>\u87D1\u8782"]]
  },
  \u7206\u866B\u6EDA\u6EDA: {
    name: "\u7206\u866B\u6EDA\u6EDA",
    pinyin: "bcgg",
    race: "Z",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u7206\u866B: 10
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u6709<20>\u7206\u866B\u5B75\u53161\u7206\u866B",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u6709<15>\u7206\u866B\u5B75\u53161\u7206\u866B"
      ],
      [
        "\u552F\u4E00: \u83B7\u5F97\u4EFB\u610F\u51FA\u552E\u5361\u724C\u4E2D\u7684\u8DF3\u866B, \u5E76\u5C06\u5176\u53D8\u4E3A\u7206\u866B",
        "\u552F\u4E00: \u83B7\u5F97\u4EFB\u610F\u51FA\u552E\u5361\u724C\u4E2D\u7684\u8DF3\u866B, \u5E76\u5C06\u5176\u53D8\u4E3A\u7206\u866B"
      ]
    ]
  },
  \u98DE\u9F99\u9A91\u8138: {
    name: "\u98DE\u9F99\u9A91\u8138",
    pinyin: "flql",
    race: "Z",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u8DF3\u866B: 15,
      \u5F02\u9F99: 5
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u51FA\u552E\u65F6, \u5B75\u5316<2>\u5F02\u9F99", "\u51FA\u552E\u65F6, \u5B75\u5316<4>\u5F02\u9F99"]]
  },
  \u51F6\u6B8B\u5DE8\u517D: {
    name: "\u51F6\u6B8B\u5DE8\u517D",
    pinyin: "xcjs",
    race: "Z",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u96F7\u517D: 2
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u51FA\u552E\u65F6, \u6CE8\u5375<1>\u96F7\u517D", "\u51FA\u552E\u65F6, \u6CE8\u5375<2>\u96F7\u517D"]]
  },
  \u6CE8\u5375\u866B\u540E: {
    name: "\u6CE8\u5375\u866B\u540E",
    pinyin: "zlch",
    race: "Z",
    level: 3,
    pack: "\u6838\u5FC3",
    unit: {
      \u866B\u540E: 5
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6CE8\u5375<1>\u87D1\u8782\u548C<1>\u523A\u86C7",
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6CE8\u5375<2>\u87D1\u8782\u548C<2>\u523A\u86C7"
      ]
    ]
  },
  \u5B75\u5316\u6240: {
    name: "\u5B75\u5316\u6240",
    pinyin: "fhs",
    race: "Z",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u83CC\u6BEF\u80BF\u7624: 1,
      \u866B\u540E: 2,
      \u5B88\u536B: 2
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u4EFB\u610F\u5361\u724C\u5B75\u5316\u81F3\u6B64\u5361\u724C\u65F6, \u989D\u5916\u5B75\u5316<2>\u5355\u4F4D",
        "\u552F\u4E00: \u4EFB\u610F\u5361\u724C\u5B75\u5316\u81F3\u6B64\u5361\u724C\u65F6, \u989D\u5916\u5B75\u5316<3>\u5355\u4F4D"
      ]
    ]
  },
  \u5730\u5E95\u4F0F\u51FB: {
    name: "\u5730\u5E95\u4F0F\u51FB",
    pinyin: "ddfj",
    race: "Z",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u6F5C\u4F0F\u8005: 3
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [["\u8FDB\u573A\u65F6, \u5B75\u5316<1>\u6F5C\u4F0F\u8005", "\u8FDB\u573A\u65F6, \u5B75\u5316<2>\u6F5C\u4F0F\u8005"]]
  },
  \u5B75\u5316\u523A\u86C7: {
    name: "\u5B75\u5316\u523A\u86C7",
    pinyin: "fhcs",
    race: "Z",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u87D1\u8782: 4,
      "\u523A\u86C7(\u7CBE\u82F1)": 3
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<1>\u523A\u86C7(\u7CBE\u82F1)", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<2>\u523A\u86C7(\u7CBE\u82F1)"]
    ]
  },
  \u611F\u67D3\u6DF1\u6E0A: {
    name: "\u611F\u67D3\u6DF1\u6E0A",
    pinyin: "grsy",
    race: "Z",
    level: 4,
    pack: "\u6838\u5FC3",
    unit: {
      \u611F\u67D3\u8005: 2,
      \u9646\u6218\u961F\u5458: 3
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u5361\u724C\u5C06<2>\u9646\u6218\u961F\u5458\u53D8\u4E3A\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458, \u5E76\u5C06\u4ED6\u4EEC\u6CE8\u5375",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6240\u6709\u5361\u724C\u5C06<4>\u9646\u6218\u961F\u5458\u53D8\u4E3A\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458, \u5E76\u5C06\u4ED6\u4EEC\u6CE8\u5375"
      ],
      [
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6240\u6709\u5361\u724C\u5C06<1>\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458\u53D8\u4E3A\u7578\u53D8\u4F53",
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6240\u6709\u5361\u724C\u5C06<2>\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458\u53D8\u4E3A\u7578\u53D8\u4F53"
      ]
    ]
  },
  \u8150\u5316\u5927\u9F99: {
    name: "\u8150\u5316\u5927\u9F99",
    pinyin: "fhdl",
    race: "Z",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u8150\u5316\u8005: 6
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06<2>\u8150\u5316\u8005\u53D8\u4E3A\u5DE2\u866B\u9886\u4E3B",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06<4>\u8150\u5316\u8005\u53D8\u4E3A\u5DE2\u866B\u9886\u4E3B"
      ],
      ["\u51FA\u552E\u65F6, \u6CE8\u5375<2>\u5DE2\u866B\u9886\u4E3B", "\u51FA\u552E\u65F6, \u6CE8\u5375<4>\u5DE2\u866B\u9886\u4E3B"]
    ]
  },
  \u7A7A\u4E2D\u7BA1\u5236: {
    name: "\u7A7A\u4E2D\u7BA1\u5236",
    pinyin: "kzgz",
    race: "Z",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      "\u5F02\u9F99(\u7CBE\u82F1)": 4,
      \u98DE\u86C7: 1
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u8FDB\u573A\u65F6, \u5B75\u5316<3>\u7206\u868A", "\u8FDB\u573A\u65F6, \u5B75\u5316<6>\u7206\u868A"],
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<1>\u5F02\u9F99(\u7CBE\u82F1)", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<2>\u5F02\u9F99(\u7CBE\u82F1)"]
    ]
  },
  \u866B\u7FA4\u5927\u519B: {
    name: "\u866B\u7FA4\u5927\u519B",
    pinyin: "cqdj",
    race: "Z",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u96F7\u517D: 2,
      \u523A\u86C7: 8
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C114\u5F20\u866B\u65CF\u5361\u724C, \u5219\u6CE8\u5375<1>\u96F7\u517D",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u62E5\u6709\u81F3\u5C114\u5F20\u866B\u65CF\u5361\u724C, \u5219\u6CE8\u5375<2>\u96F7\u517D"
      ]
    ]
  },
  \u7EC8\u6781\u8FDB\u5316: {
    name: "\u7EC8\u6781\u8FDB\u5316",
    pinyin: "zjjh",
    race: "Z",
    level: 5,
    pack: "\u6838\u5FC3",
    unit: {
      \u83BD\u517D: 2
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5C06<1>\u87D1\u8782\u53D8\u4E3A\u83BD\u517D",
        "\u8FDB\u573A\u65F6, \u76F8\u90BB\u4E24\u4FA7\u5361\u724C\u5C06<2>\u87D1\u8782\u53D8\u4E3A\u83BD\u517D"
      ]
    ]
  },
  \u51F6\u731B\u5DE8\u517D: {
    name: "\u51F6\u731B\u5DE8\u517D",
    pinyin: "xmjs",
    race: "Z",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u5229\u7EF4\u5766: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u65F6, \u6240\u6709\u866B\u65CF\u5361\u724C\u83B7\u5F97<2>\u8150\u5316\u8005",
        "\u8FDB\u573A\u65F6, \u6240\u6709\u866B\u65CF\u5361\u724C\u83B7\u5F97<4>\u8150\u5316\u8005"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u76F8\u90BB\u4E24\u4FA7\u866B\u65CF\u5361\u724C\u83B7\u5F97<2>\u5B88\u536B",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u76F8\u90BB\u4E24\u4FA7\u866B\u65CF\u5361\u724C\u83B7\u5F97<4>\u5B88\u536B"
      ]
    ]
  },
  \u624E\u52A0\u62C9: {
    name: "\u624E\u52A0\u62C9",
    pinyin: "zjl",
    race: "Z",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u624E\u52A0\u62C9: 1,
      "\u523A\u86C7(\u7CBE\u82F1)": 6
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u4EFB\u610F\u5361\u724C\u8FDB\u884C\u5B75\u5316\u65F6, \u5355\u4F4D\u989D\u5916\u5B75\u5316\u5230\u6B64\u5361\u724C",
        "\u552F\u4E00: \u4EFB\u610F\u5361\u724C\u8FDB\u884C\u5B75\u5316\u65F6, \u5355\u4F4D\u989D\u5916\u5B75\u5316\u5230\u6B64\u5361\u724C<, \u5E76\u4E14\u6B64\u5361\u724C\u83B7\u5F971\u5DE2\u866B\u9886\u4E3B>"
      ]
    ]
  },
  \u65AF\u6258\u79D1\u592B: {
    name: "\u65AF\u6258\u79D1\u592B",
    pinyin: "stkf",
    race: "Z",
    level: 6,
    pack: "\u6838\u5FC3",
    unit: {
      \u65AF\u6258\u79D1\u592B: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u552F\u4E00: \u6BCF\u8FDB\u573A<\u4E24>\u5F20\u516D\u661F\u4EE5\u4E0B\u7684\u975E\u866B\u65CF\u5361\u724C, \u6CE8\u5375\u7B2C\u4E8C\u5F20\u5361\u724C\u7684\u975E\u82F1\u96C4\u5355\u4F4D\u5230\u6700\u5DE6\u4FA7\u866B\u5375\u724C",
        "\u552F\u4E00: \u6BCF\u8FDB\u573A<\u4E00>\u5F20\u516D\u661F\u4EE5\u4E0B\u7684\u975E\u866B\u65CF\u5361\u724C, \u6CE8\u5375\u7B2C\u4E8C\u5F20\u5361\u724C\u7684\u975E\u82F1\u96C4\u5355\u4F4D\u5230\u6700\u5DE6\u4FA7\u866B\u5375\u724C"
      ]
    ]
  },
  \u866B\u5375: {
    name: "\u866B\u5375",
    pinyin: "cl",
    race: "Z",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u5982\u679C\u76F8\u90BB\u4E24\u4FA7\u7684\u5361\u724C\u662F\u866B\u65CF\u5361\u724C, \u6467\u6BC1\u8FD9\u5F20\u724C, \u83B7\u5F971\u6676\u4F53\u77FF\u5E76\u5B75\u5316\u5176\u4E2D\u7684\u751F\u7269\u5355\u4F4D",
        "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u5982\u679C\u76F8\u90BB\u4E24\u4FA7\u7684\u5361\u724C\u662F\u866B\u65CF\u5361\u724C, \u6467\u6BC1\u8FD9\u5F20\u724C, \u83B7\u5F971\u6676\u4F53\u77FF\u5E76\u5B75\u5316\u5176\u4E2D\u7684\u751F\u7269\u5355\u4F4D"
      ]
    ]
  },
  \u590D\u5236\u4E2D\u5FC3: {
    name: "\u590D\u5236\u4E2D\u5FC3",
    pinyin: "fzzx",
    race: "T",
    level: 4,
    pack: "\u72EC\u8F9F\u8E4A\u5F84",
    unit: {
      \u5E7D\u9B42: 2,
      "\u6B4C\u5229\u4E9A(\u7CBE\u82F1)": 2,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F97\u6BCF\u5F20\u6682\u5B58\u5361\u724C\u7684<1>\u975E\u82F1\u96C4\u751F\u7269\u5355\u4F4D",
        "\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F97\u6BCF\u5F20\u6682\u5B58\u5361\u724C\u7684<2>\u975E\u82F1\u96C4\u751F\u7269\u5355\u4F4D"
      ]
    ]
  },
  \u664B\u5347\u4EEA\u5F0F: {
    name: "\u664B\u5347\u4EEA\u5F0F",
    pinyin: "jsys",
    race: "P",
    level: 4,
    pack: "\u72EC\u8F9F\u8E4A\u5F84",
    unit: {
      \u4E0D\u673D\u8005: 2,
      "\u72C2\u70ED\u8005(\u7CBE\u82F1)": 2,
      \u6C34\u6676\u5854: 2
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u96C6\u7ED3(4): \u5C06<1>\u4E0D\u673D\u8005\u53D8\u4E3A\u82F1\u96C4\u4E0D\u673D\u8005\u5E76\u5C06<1>\u751F\u7269\u5355\u4F4D\u53D8\u4E3A\u9AD8\u9636\u5723\u5802\u6B66\u58EB",
        "\u96C6\u7ED3(4): \u5C06<2>\u4E0D\u673D\u8005\u53D8\u4E3A\u82F1\u96C4\u4E0D\u673D\u8005\u5E76\u5C06<2>\u751F\u7269\u5355\u4F4D\u53D8\u4E3A\u9AD8\u9636\u5723\u5802\u6B66\u58EB"
      ]
    ]
  },
  \u57FA\u56E0\u7A81\u53D8: {
    name: "\u57FA\u56E0\u7A81\u53D8",
    pinyin: "jytb",
    race: "Z",
    level: 3,
    pack: "\u72EC\u8F9F\u8E4A\u5F84",
    unit: {
      "\u7834\u574F\u8005(\u7CBE\u82F1)": 1,
      \u7834\u574F\u8005: 2
    },
    attr: {
      pool: true,
      insert: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u8FDB\u573A\u548C\u51FA\u552E\u65F6, \u76F8\u90BB\u4E24\u4FA7\u866B\u65CF\u5361\u724C\u5C06\u4EF7\u503C\u6700\u4F4E\u7684<1>\u4E2A\u5355\u4F4D\u53D8\u4E3A\u4EF7\u503C\u6700\u9AD8\u7684\u975E\u82F1\u96C4\u5355\u4F4D",
        "\u8FDB\u573A\u548C\u51FA\u552E\u65F6, \u76F8\u90BB\u4E24\u4FA7\u866B\u65CF\u5361\u724C\u5C06\u4EF7\u503C\u6700\u4F4E\u7684<2>\u4E2A\u5355\u4F4D\u53D8\u4E3A\u4EF7\u503C\u6700\u9AD8\u7684\u975E\u82F1\u96C4\u5355\u4F4D"
      ]
    ]
  },
  \u98CE\u66B4\u82F1\u96C4: {
    name: "\u98CE\u66B4\u82F1\u96C4",
    pinyin: "fbyx",
    race: "N",
    level: 5,
    pack: "\u72EC\u8F9F\u8E4A\u5F84",
    unit: {
      \u6C83\u62C9\u5C0A: 1
    },
    attr: {
      pool: true,
      amber: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u83B7\u5F97\u5347\u7EA7\u65F6, \u968F\u673A\u83B7\u5F971\u82F1\u96C4(\u5305\u542B: \u9A6C\u62C9\u4EC0, \u963F\u62C9\u7EB3\u514B, \u5229\u7EF4\u5766, \u865A\u7A7A\u6784\u9020\u4F53, \u79D1\u7F57\u62C9\u91CC\u6602)",
        "\u83B7\u5F97\u5347\u7EA7\u65F6, \u968F\u673A\u83B7\u5F971\u82F1\u96C4(\u5305\u542B: \u9A6C\u62C9\u4EC0, \u963F\u62C9\u7EB3\u514B, \u5229\u7EF4\u5766, \u865A\u7A7A\u6784\u9020\u4F53, \u79D1\u7F57\u62C9\u91CC\u6602)"
      ]
    ]
  },
  \u5E1D\u56FD\u6562\u6B7B\u961F: {
    name: "\u5E1D\u56FD\u6562\u6B7B\u961F",
    pinyin: "dggsd",
    race: "T",
    level: 5,
    pack: "\u77ED\u5175\u76F8\u63A5",
    unit: {
      \u8BFA\u5A03: 3,
      \u53CD\u5E94\u5806: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F972\u8BFA\u5A03", "\u5FEB\u901F\u751F\u4EA7: \u83B7\u5F972\u8BFA\u5A03"],
      ["\u53CD\u5E94\u5806\u751F\u4EA7\u8BFA\u5A03", "\u53CD\u5E94\u5806\u751F\u4EA7\u8BFA\u5A03"],
      ["\u4EFB\u610F\u4EFB\u52A1\u5B8C\u6210\u65F6, \u83B7\u5F97<1>\u8BFA\u5A03", "\u4EFB\u610F\u4EFB\u52A1\u5B8C\u6210\u65F6, \u83B7\u5F97<2>\u8BFA\u5A03"]
    ]
  },
  \u9ED1\u6697\u6559\u957F: {
    name: "\u9ED1\u6697\u6559\u957F",
    pinyin: "hajc",
    race: "P",
    level: 5,
    pack: "\u77ED\u5175\u76F8\u63A5",
    unit: {
      \u6CFD\u62C9\u56FE: 1,
      \u865A\u7A7A\u6C34\u6676\u5854: 1
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      ["\u8FDB\u573A\u65F6, \u83B7\u5F97\u6697\u5F71\u6218\u58EB\u5347\u7EA7", "\u8FDB\u573A\u65F6, \u83B7\u5F97\u6697\u5F71\u6218\u58EB\u5347\u7EA7"],
      [
        "\u96C6\u7ED3(5): \u83B7\u5F97<1>\u9ED1\u6697\u5723\u5802\u6B66\u58EB(\u7CBE\u82F1)",
        "\u96C6\u7ED3(5): \u83B7\u5F97<2>\u9ED1\u6697\u5723\u5802\u6B66\u58EB(\u7CBE\u82F1)"
      ]
    ]
  },
  \u96F7\u517D\u7A9F: {
    name: "\u96F7\u517D\u7A9F",
    pinyin: "lsk",
    race: "Z",
    level: 3,
    pack: "\u77ED\u5175\u76F8\u63A5",
    unit: {
      \u5E7C\u96F7\u517D: 5
    },
    attr: {
      pool: true
    },
    belong: "none",
    type: "normal",
    desc: [
      [
        "\u4EFB\u610F\u5361\u724C\u6CE8\u5375\u65F6, \u6B64\u5361\u724C\u5C06<1>\u5E7C\u96F7\u517D\u53D8\u4E3A\u96F7\u517D",
        "\u4EFB\u610F\u5361\u724C\u6CE8\u5375\u65F6, \u6B64\u5361\u724C\u5C06<2>\u5E7C\u96F7\u517D\u53D8\u4E3A\u96F7\u517D"
      ],
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<1>\u5E7C\u96F7\u517D", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5B75\u5316<2>\u5E7C\u96F7\u517D"]
    ]
  },
  \u6DF7\u5408\u4F53\u5DE8\u517D: {
    name: "\u6DF7\u5408\u4F53\u5DE8\u517D",
    pinyin: "hhtjs",
    race: "N",
    level: 6,
    pack: "\u77ED\u5175\u76F8\u63A5",
    unit: {
      \u6DF7\u5408\u4F53\u5DE8\u517D: 2
    },
    attr: {
      pool: true
    },
    belong: "virtual",
    type: "normal",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u573A\u4E0A\u67094\u4E2A\u79CD\u65CF\u7684\u5361\u724C, \u5219\u83B7\u5F97<1>\u6DF7\u5408\u4F53\u5DE8\u517D",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u82E5\u573A\u4E0A\u67094\u4E2A\u79CD\u65CF\u7684\u5361\u724C, \u5219\u83B7\u5F97<2>\u6DF7\u5408\u4F53\u5DE8\u517D"
      ]
    ]
  },
  \u6BCD\u8230\u6838\u5FC3: {
    name: "\u6BCD\u8230\u6838\u5FC3",
    pinyin: "mjhx",
    race: "P",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u6BCD\u8230\u6838\u5FC3: 1,
      \u72C2\u70ED\u8005: 1,
      \u865A\u7A7A\u6C34\u6676\u5854: 2,
      \u8FFD\u730E\u8005: 2
    },
    attr: {},
    belong: "none",
    type: "normal",
    desc: [
      ["\u73A9\u5BB6\u8FDB\u884C\u4E24\u6B21\u4E09\u8FDE\u6B64\u5361\u724C\u53D8\u4E3A\u6BCD\u8230", "\u73A9\u5BB6\u8FDB\u884C\u4E24\u6B21\u4E09\u8FDE\u6B64\u5361\u724C\u53D8\u4E3A\u6BCD\u8230"],
      [
        "\u4E09\u8FDE\u65F6, \u83B7\u5F97\u6570\u91CF\u7B49\u4F60\u9152\u9986\u7B49\u7EA7\u7684\u865A\u7A7A\u8F89\u5149\u8230",
        "\u4E09\u8FDE\u65F6, \u83B7\u5F97\u6570\u91CF\u7B49\u4F60\u9152\u9986\u7B49\u7EA7\u7684\u865A\u7A7A\u8F89\u5149\u8230"
      ]
    ]
  },
  \u89C2\u5BDF\u6837\u672C: {
    name: "\u89C2\u5BDF\u6837\u672C",
    pinyin: "gcyb",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {
      amber: true
    },
    belong: "none",
    type: "normal",
    desc: []
  },
  \u6BD2\u6C14\u70AE\u5854: {
    name: "\u6BD2\u6C14\u70AE\u5854",
    pinyin: "dqpt",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF<3>\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A\u6BD2\u6C14\u70AE\u5854",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF<2>\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A\u6BD2\u6C14\u70AE\u5854"
      ],
      ["\u51FA\u552E\u65F6, \u83B7\u5F97<1>\u6676\u4F53\u77FF", "\u51FA\u552E\u65F6, \u83B7\u5F97<2>\u6676\u4F53\u77FF"]
    ]
  },
  \u51EF\u8FBE\u7433\u5DE8\u77F3: {
    name: "\u51EF\u8FBE\u7433\u5DE8\u77F3",
    pinyin: "kdljs",
    race: "P",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF<5>\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u51EF\u8FBE\u7433\u5DE8\u77F3",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF<4>\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u51EF\u8FBE\u7433\u5DE8\u77F3"
      ],
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u6709\u4E00\u5F20\u795E\u65CF\u5361\u724C, \u6B64\u5361\u724C\u83B7\u5F971\u81EA\u52A8\u673A\u70AE",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u6709\u4E00\u5F20\u795E\u65CF\u5361\u724C, \u6B64\u5361\u724C\u83B7\u5F971\u81EA\u52A8\u673A\u70AE"
      ]
    ]
  },
  \u5C97\u54E8\u673A\u67AA: {
    name: "\u5C97\u54E8\u673A\u67AA",
    pinyin: "gsjq",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF\u4E2A\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A2\u5C97\u54E8\u673A\u67AA",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF\u4E2A\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A2\u5C97\u54E8\u673A\u67AA"
      ],
      [
        "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u6B64\u5361\u724C\u83B7\u5F97<2>\u5C97\u54E8\u673A\u67AA",
        "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u6B64\u5361\u724C\u83B7\u5F97<3>\u5C97\u54E8\u673A\u67AA"
      ]
    ]
  },
  \u884C\u661F\u8981\u585E: {
    name: "\u884C\u661F\u8981\u585E",
    pinyin: "xxys",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF<5>\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u884C\u661F\u8981\u585E",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF<4>\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u884C\u661F\u8981\u585E"
      ],
      [
        "\u552F\u4E00: \u4EFB\u610F\u4E2D\u7ACB\u5361\u724C\u51FA\u552E\u65F6, \u83B7\u5F97\u5176\u4E2D\u6240\u6709\u7684\u975E\u7279\u6B8A\u5EFA\u7B51\u5355\u4F4D",
        "\u552F\u4E00: \u4EFB\u610F\u4E2D\u7ACB\u5361\u724C\u51FA\u552E\u65F6, \u83B7\u5F97\u5176\u4E2D\u6240\u6709\u7684\u975E\u7279\u6B8A\u5EFA\u7B51\u5355\u4F4D"
      ]
    ]
  },
  \u661F\u95E8: {
    name: "\u661F\u95E8",
    pinyin: "xm",
    race: "P",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u96F6\u4EF6\u5E76\u5C06\u6BCF1\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u96F6\u4EF6",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u96F6\u4EF6\u5E76\u5C06\u6BCF1\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u96F6\u4EF6"
      ],
      ["\u5236\u9020(6): \u83B7\u5F971\u661F\u95E8", "\u5236\u9020(6): \u83B7\u5F971\u661F\u95E8"]
    ]
  },
  \u81EA\u52A8\u673A\u70AE: {
    name: "\u81EA\u52A8\u673A\u70AE",
    pinyin: "zdjp",
    race: "Z",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      ["\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<1>\u81EA\u52A8\u673A\u70AE", "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u83B7\u5F97<2>\u81EA\u52A8\u673A\u70AE"],
      [
        "\u51FA\u552E\u65F6, \u76F8\u90BB(\u4F18\u5148\u5DE6\u4FA7)\u5361\u724C\u83B7\u5F97\u6B64\u5361\u724C\u7684\u6240\u6709\u81EA\u52A8\u673A\u70AE",
        "\u51FA\u552E\u65F6, \u76F8\u90BB(\u4F18\u5148\u5DE6\u4FA7)\u5361\u724C\u83B7\u5F97\u6B64\u5361\u724C\u7684\u6240\u6709\u81EA\u52A8\u673A\u70AE"
      ]
    ]
  },
  \u4F5C\u6218\u4E2D\u5FC3: {
    name: "\u4F5C\u6218\u4E2D\u5FC3",
    pinyin: "zzzx",
    race: "T",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      ["\u5236\u9020(6): \u83B7\u5F971\u4F5C\u6218\u6307\u6325\u4E2D\u5FC3", "\u5236\u9020(6): \u83B7\u5F971\u4F5C\u6218\u6307\u6325\u4E2D\u5FC3"],
      [
        "\u4EFB\u52A1: \u8FDB\u573A2\u5F20\u5361\u724C\n\u5956\u52B1: \u83B7\u5F97<1>\u96F6\u4EF6\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u91CD\u7F6E\u4EFB\u52A1",
        "\u4EFB\u52A1: \u8FDB\u573A2\u5F20\u5361\u724C\n\u5956\u52B1: \u83B7\u5F97<2>\u96F6\u4EF6\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u91CD\u7F6E\u4EFB\u52A1"
      ]
    ]
  },
  \u5BFC\u5F39\u57FA\u5730: {
    name: "\u5BFC\u5F39\u57FA\u5730",
    pinyin: "ddjd",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF\u4E2A\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A2\u98CE\u66B4\u5BF9\u5730\u5BFC\u5F39\u5854",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF\u4E2A\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A2\u98CE\u66B4\u5BF9\u5730\u5BFC\u5F39\u5854"
      ],
      [
        "\u4EFB\u610F\u4EFB\u52A1\u5B8C\u6210\u65F6, \u83B7\u5F97<2>\u98CE\u66B4\u5BF9\u5730\u5BFC\u5F39\u5854",
        "\u4EFB\u610F\u4EFB\u52A1\u5B8C\u6210\u65F6, \u83B7\u5F97<3>\u98CE\u66B4\u5BF9\u5730\u5BFC\u5F39\u5854"
      ]
    ]
  },
  \u7C92\u5B50\u5149\u70AE: {
    name: "\u7C92\u5B50\u5149\u70AE",
    pinyin: "lzgp",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u62BD\u53D6\u76F8\u90BB\u4E24\u4FA7\u5361\u724C<1>\u81EA\u52A8\u673A\u70AE\u5E76\u5C06\u6BCF1\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u96F6\u4EF6",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u62BD\u53D6\u76F8\u90BB\u4E24\u4FA7\u5361\u724C<2>\u81EA\u52A8\u673A\u70AE\u5E76\u5C06\u6BCF1\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u96F6\u4EF6"
      ],
      ["\u5236\u9020(9): \u83B7\u5F971\u7C92\u5B50\u5149\u70AE", "\u5236\u9020(9): \u83B7\u5F971\u7C92\u5B50\u5149\u70AE"]
    ]
  },
  \u518D\u751F\u94A2: {
    name: "\u518D\u751F\u94A2",
    pinyin: "zsg",
    race: "N",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u81EA\u52A8\u673A\u70AE: 1
    },
    attr: {},
    belong: "none",
    type: "structure",
    desc: [
      [
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF2\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u70ED\u8FA3\u8D1D\u8482",
        "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u5C06\u6BCF2\u81EA\u52A8\u673A\u70AE\u53D8\u4E3A1\u70ED\u8FA3\u8D1D\u8482"
      ],
      [
        "\u83B7\u5F97\u5347\u7EA7\u65F6, \u53D1\u73B01\u5F20\u5EFA\u7B51\u5361\u5E76\u83B7\u5F972\u70ED\u8FA3\u8D1D\u8482",
        "\u83B7\u5F97\u5347\u7EA7\u65F6, \u53D1\u73B01\u5F20\u5EFA\u7B51\u5361\u5E76\u83B7\u5F972\u70ED\u8FA3\u8D1D\u8482"
      ]
    ]
  },
  \u4E0D\u6CD5\u4E4B\u5F92: {
    name: "\u4E0D\u6CD5\u4E4B\u5F92",
    pinyin: "bfzt",
    race: "T",
    level: 1,
    pack: "\u6838\u5FC3",
    unit: {
      \u6CF0\u51EF\u65AF: 1
    },
    attr: {},
    belong: "none",
    type: "normal",
    desc: []
  },
  \u751F\u5316\u5B9E\u9A8C\u5BA4: {
    name: "\u751F\u5316\u5B9E\u9A8C\u5BA4",
    pinyin: "shsys",
    race: "N",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "support",
    desc: [
      [
        "\u90E8\u7F72\u65F6, \u5C06\u6307\u5B9A\u5361\u724C\u76845\u751F\u7269\u5355\u4F4D\u53D8\u4E3A5\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458\u5E76\u6CE8\u5375",
        "\u90E8\u7F72\u65F6, \u5C06\u6307\u5B9A\u5361\u724C\u76845\u751F\u7269\u5355\u4F4D\u53D8\u4E3A5\u88AB\u611F\u67D3\u7684\u9646\u6218\u961F\u5458\u5E76\u6CE8\u5375"
      ]
    ]
  },
  \u7D27\u6025\u56DE\u6536: {
    name: "\u7D27\u6025\u56DE\u6536",
    pinyin: "jjhs",
    race: "N",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "support",
    desc: [
      [
        "\u90E8\u7F72\u65F6, \u6467\u6BC1\u6307\u5B9A\u5361\u724C, \u5C06\u5176\u4E2D\u7684\u975E\u82F1\u96C4\u5355\u4F4D\u8F6C\u79FB\u5230\u76F8\u90BB\u975E\u866B\u5375\u724C\u4E2D(\u4F18\u5148\u5DE6\u4FA7\u5361\u724C)",
        "\u90E8\u7F72\u65F6, \u6467\u6BC1\u6307\u5B9A\u5361\u724C, \u5C06\u5176\u4E2D\u7684\u975E\u82F1\u96C4\u5355\u4F4D\u8F6C\u79FB\u5230\u76F8\u90BB\u975E\u866B\u5375\u724C\u4E2D(\u4F18\u5148\u5DE6\u4FA7\u5361\u724C)"
      ]
    ]
  },
  \u661F\u7075\u79D1\u6280: {
    name: "\u661F\u7075\u79D1\u6280",
    pinyin: "xlkj",
    race: "N",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "support",
    desc: [
      [
        "\u90E8\u7F72\u65F6, \u4E3A\u6307\u5B9A\u975E\u795E\u65CF\u5361\u724C\u6DFB\u52A0\u63CF\u8FF0:\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6298\u8DC31\u9646\u6218\u961F\u5458\n\u4E09\u8FDE\u540E\u8FD8\u539F",
        "\u90E8\u7F72\u65F6, \u4E3A\u6307\u5B9A\u975E\u795E\u65CF\u5361\u724C\u6DFB\u52A0\u63CF\u8FF0:\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6298\u8DC31\u9646\u6218\u961F\u5458\n\u4E09\u8FDE\u540E\u8FD8\u539F"
      ]
    ]
  },
  \u5C16\u7AEF\u79D1\u6280: {
    name: "\u5C16\u7AEF\u79D1\u6280",
    pinyin: "jdkj",
    race: "N",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "support",
    desc: [
      [
        "\u90E8\u7F72\u65F6, \u6307\u5B9A\u5361\u724C\u83B7\u5F97\u8F68\u9053\u7A7A\u964D\u5347\u7EA7\n\u5176\u80FD\u8BA9\u5355\u4F4D\u80FD\u7A7A\u964D\u5230\u654C\u4EBA\u540E\u65B9",
        "\u90E8\u7F72\u65F6, \u6307\u5B9A\u5361\u724C\u83B7\u5F97\u8F68\u9053\u7A7A\u964D\u5347\u7EA7\n\u5176\u80FD\u8BA9\u5355\u4F4D\u80FD\u7A7A\u964D\u5230\u654C\u4EBA\u540E\u65B9"
      ]
    ]
  },
  \u8D85\u8D1F\u8377: {
    name: "\u8D85\u8D1F\u8377",
    pinyin: "cfh",
    race: "N",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {},
    attr: {},
    belong: "none",
    type: "support",
    desc: [
      [
        "\u90E8\u7F72\u65F6, \u6467\u6BC1\u6307\u5B9A\u5361\u724C, \u5E76\u518D\u6B21\u89E6\u53D1\u5B83\u7684\u8FDB\u573A\u7279\u6548",
        "\u90E8\u7F72\u65F6, \u6467\u6BC1\u6307\u5B9A\u5361\u724C, \u5E76\u518D\u6B21\u89E6\u53D1\u5B83\u7684\u8FDB\u573A\u7279\u6548"
      ]
    ]
  },
  \u673A\u68B0\u5DE5\u5382: {
    name: "\u673A\u68B0\u5DE5\u5382",
    pinyin: "jxgc",
    race: "T",
    level: 0,
    pack: "\u6838\u5FC3",
    unit: {
      \u79D1\u6280\u5B9E\u9A8C\u5BA4: 1
    },
    attr: {},
    belong: "none",
    type: "normal",
    desc: [
      ["\u5236\u9020(70): \u83B7\u5F971\u4F11\u4F2F\u5229\u5B89\u53F7", "\u5236\u9020(70): \u83B7\u5F971\u4F11\u4F2F\u5229\u5B89\u53F7"],
      ["\u5236\u9020(45): \u83B7\u5F979\u6218\u5217\u5DE1\u822A\u8230", "\u5236\u9020(45): \u83B7\u5F979\u6218\u5217\u5DE1\u822A\u8230"],
      ["\u5236\u9020(30): \u83B7\u5F976\u96F7\u795E", "\u5236\u9020(30): \u83B7\u5F976\u96F7\u795E"],
      ["\u5236\u9020(16): \u83B7\u5F976\u653B\u57CE\u5766\u514B", "\u5236\u9020(16): \u83B7\u5F976\u653B\u57CE\u5766\u514B"]
    ]
  }
};

// ../data/src/role.ts
var RoleData = {
  \u767D\u677F: {
    name: "\u767D\u677F",
    pinyin: "bb",
    ability: "\u9B42\u59FF",
    desc: "\u6211\u4E43\u6C5F\u4E1C\u5C0F\u767D\u677F\u5B59\u7B28! \u5B59\u5BB6\u5929\u4E0B\u5B59\u5BB6\u5175, \u6210\u5C3154320!"
  },
  \u6267\u653F\u5B98: {
    name: "\u6267\u653F\u5B98",
    pinyin: "zzg",
    ability: "\u878D\u5408\u5B8C\u6210",
    desc: "\u6BCF\u56DE\u5408, \u9009\u62E9\u4E00\u5F20\u5361\u724C, \u8BA9\u5B83\u4E0E\u53F3\u4FA7\u5361\u724C\u5408\u6210\u4E3A\u4E00\u5F20\u5361\u724C, \u4E24\u5F20\u5361\u724C\u5FC5\u987B\u975E\u91D1\u8272\u4E14\u4E3A\u4E0D\u540C\u79CD\u65CF. \u5408\u5E76\u4F1A\u4FDD\u7559\u4E24\u5F20\u5361\u724C\u7684\u5355\u4F4D, \u63CF\u8FF0, \u5347\u7EA7\u5E76\u53D8\u4E3A\u91D1\u8272\u5361\u724C."
  },
  \u9646\u6218\u961F\u5458: {
    name: "\u9646\u6218\u961F\u5458",
    pinyin: "lzdy",
    ability: "50\u5757\u94B1\u597D\u5144\u5F1F",
    desc: "\u6BCF\u56DE\u5408, \u82B1\u8D392\u6676\u4F53\u77FF\u53D1\u73B0\u4E00\u5F20\u4F4E\u4E8E\u9152\u9986\u7B49\u7EA71\u7EA7\u7684\u5361\u724C, \u6700\u4F4E\u4E3A1\u661F\u5361\u724C"
  },
  \u6536\u5272\u8005: {
    name: "\u6536\u5272\u8005",
    pinyin: "sgz",
    ability: "\u7CBE\u51C6\u843D\u5730",
    desc: "\u4F60\u8FDB\u573A\u7684\u6240\u6709\u5361\u724C\u90FD\u5C06\u5B9A\u70B9\u90E8\u7F72, \u800C\u8D2D\u4E70\u81EA\u5E26\u5B9A\u70B9\u90E8\u7F72\u7684\u5361\u724C\u53EA\u9700\u89812\u6676\u4F53\u77FF"
  },
  \u611F\u67D3\u866B: {
    name: "\u611F\u67D3\u866B",
    pinyin: "grc",
    ability: "\u540C\u5316\u5B8C\u6210",
    desc: "\u6BCF\u56DE\u5408, \u611F\u67D3\u9009\u4E2D\u7684\u4EBA\u65CF\u5361\u724C. \u8BE5\u5361\u724C\u63CF\u8FF0\u53D8\u4E3A'\u65E0\u6CD5\u4E09\u8FDE, \u6BCF\u56DE\u5408\u7ED3\u675F\u65F6\u6CE8\u5375\u968F\u673A\u4E00\u4E2A\u5355\u4F4D'"
  },
  SCV: {
    name: "SCV",
    pinyin: "S",
    ability: "\u5FEB\u901F\u65BD\u5DE5",
    desc: "\u6BCF\u56DE\u5408, \u4FEE\u6539\u9009\u4E2D\u4EBA\u65CF\u5361\u724C\u7684\u6302\u4EF6\u7C7B\u578B"
  },
  \u963F\u5DF4\u745F: {
    name: "\u963F\u5DF4\u745F",
    pinyin: "abs",
    ability: "\u7A81\u53D8",
    desc: "\u6BCF\u56DE\u5408, \u82B1\u8D392\u6676\u4F53\u77FF, \u6467\u6BC1\u9009\u62E9\u7684\u5361\u724C, \u53D1\u73B0\u4E00\u5F20\u9AD8\u4E00\u661F\u7684\u5361\u724C"
  },
  \u5DE5\u8702: {
    name: "\u5DE5\u8702",
    pinyin: "gf",
    ability: "\u91C7\u96C6\u8403\u53D6",
    desc: "\u6280\u672F\u4F1A\u548C\u5F00\u59CB\u989D\u5916\u83B7\u5F971\u70B9\u74E6\u65AF, \u5076\u6570\u56DE\u5408\u5F00\u59CB\u989D\u5916\u83B7\u5F971\u6676\u4F53\u77FF"
  },
  \u526F\u5B98: {
    name: "\u526F\u5B98",
    pinyin: "fg",
    ability: "\u9884\u5907\u65B9\u6848",
    desc: "\u4F60\u6BCF\u56DE\u5408\u7684\u7B2C\u4E00\u6B21\u5237\u65B0\u514D\u8D39, \u4E14\u672C\u56DE\u5408\u53EA\u8981\u5269\u4F59\u6676\u4F53\u77FF, \u4E0B\u56DE\u5408\u83B7\u5F971\u6676\u4F53\u77FF"
  },
  \u8FFD\u730E\u8005: {
    name: "\u8FFD\u730E\u8005",
    pinyin: "zlz",
    ability: "\u95EA\u73B0",
    desc: "\u6BCF\u56DE\u5408\u7B2C\u4E00\u6B21\u8D2D\u4E70\u5361\u724C\u5237\u65B0\u9152\u9986, 1\u56DE\u5408\u5185\u5237\u65B05\u6B21\u540E\u5347\u7EA7\u6B21\u6280\u80FD, \u8D2D\u4E70\u6BCF\u5F20\u5361\u724C\u540E\u5237\u65B0\u9152\u9986"
  },
  \u4F7F\u5F92: {
    name: "\u4F7F\u5F92",
    pinyin: "st",
    ability: "\u767D\u8863\u6E21\u6C5F",
    desc: "\u6BCF\u56DE\u5408\u8D2D\u4E70\u7684\u7B2C\u4E09\u5F20\u5361\u724C\u8D39\u7528\u4E3A1(\u4E09\u8FDE\u4E0D\u8BA1\u5165\u5176\u4E2D)"
  },
  \u77FF\u9AA1: {
    name: "\u77FF\u9AA1",
    pinyin: "kl",
    ability: "\u77FF\u9AA1\u96E8",
    desc: "\u4F7F\u7528\u6280\u80FD\u91CD\u65B0\u8865\u6EE1\u6676\u4F53\u77FF\u4F46\u4E0B\u56DE\u5408\u6676\u4F53\u77FF\u5C06\u53EA\u67092\u70B9, \u8BE5\u6280\u80FD\u65E0\u6CD5\u8FDE\u7EED\u4F7F\u7528"
  },
  \u65AF\u53F0\u7279\u66FC: {
    name: "\u65AF\u53F0\u7279\u66FC",
    pinyin: "sttm",
    ability: "\u75AF\u5B50\u79D1\u5B66\u5BB6",
    desc: "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u90FD\u5C06\u53D1\u73B0\u968F\u673A\u4E09\u4E2A\u5347\u7EA7\u4E2D\u7684\u4E00\u4E2A, \u4F46\u6BCF\u56DE\u5408\u4E0D\u518D\u4F1A\u83B7\u5F97\u74E6\u65AF, \u800C\u662F\u5347\u7EA7\u9152\u9986\u7B49\u7EA7\u83B7\u5F971\u74E6\u65AF"
  },
  \u96F7\u8BFA: {
    name: "\u96F7\u8BFA",
    pinyin: "ln",
    ability: "\u6211\u4E5F\u662F\u96F7\u8BFA",
    desc: "\u4F7F\u4E00\u5F206\u661F\u4EE5\u4E0B\u666E\u901A\u5361\u724C\u53D8\u4E3A\u91D1\u8272\u83B7\u5F97\u4E09\u8FDE\u540E\u7684\u7279\u6548, \u540C\u65F6\u83B7\u5F97\u91D1\u5149\u95EA\u95EA\u5347\u7EA7, \u6574\u5C40\u6E38\u620F\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21"
  },
  \u963F\u5854\u5C3C\u65AF: {
    name: "\u963F\u5854\u5C3C\u65AF",
    pinyin: "atns",
    ability: "\u96C6\u7ED3\u90E8\u961F",
    desc: "\u672C\u5C40\u6E38\u620F\u4E2D\u4F60\u7684\u7B2C9\u5F20\u795E\u65CF\u5361\u724C\u8FDB\u573A\u540E, \u8BA9\u963F\u5854\u5C3C\u65AF\u4E0E\u8BE5\u5361\u724C\u5408\u6210"
  },
  \u79D1\u5B66\u7403: {
    name: "\u79D1\u5B66\u7403",
    pinyin: "kxq",
    ability: "\u79D1\u5B66\u89C2\u5BDF",
    desc: "\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u8BB0\u5F55\u5176\u4E2D\u4EF7\u503C\u6700\u9AD8\u7684\u5355\u4F4D\n\u6BCF\u56DE\u5408, \u82B1\u8D391\u74E6\u65AF, \u8FDB\u573A\u89C2\u5BDF\u6837\u672C\u5361\u724C, \u5176\u4E2D\u5305\u542B\u4F60\u6240\u8BB0\u5F55\u7684\u6240\u6709\u5355\u4F4D. \u6BCF\u5C40\u6E38\u620F\u9650\u4E24\u6B21"
  },
  \u6BCD\u8230\u6838\u5FC3: {
    name: "\u6BCD\u8230\u6838\u5FC3",
    pinyin: "mjhx",
    ability: "\u5BA1\u5224\u4ECE\u5929\u800C\u964D",
    desc: "\u7B2C\u4E00\u56DE\u5408\u81EA\u52A8\u82B1\u8D393\u6676\u4F53\u77FF\u83B7\u5F97\u5361\u724C\u6BCD\u8230\u6838\u5FC3, \u73A9\u5BB6\u8FDB\u884C\u4E24\u6B21\u4E09\u8FDE\u540E, \u6BCD\u8230\u6838\u5FC3\u5C06\u53D8\u4E3A\u6BCD\u8230, \u6BCF\u6B21\u4E09\u8FDE\u65F6, \u8BE5\u5361\u724C\u83B7\u5F97\u6570\u91CF\u7B49\u4E8E\u4F60\u9152\u9986\u7B49\u7EA7\u7684\u865A\u7A7A\u8F89\u5149\u8230"
  },
  \u884C\u661F\u8981\u585E: {
    name: "\u884C\u661F\u8981\u585E",
    pinyin: "xxys",
    ability: "\u57CE\u5E02\u5316",
    desc: "\u6BCF\u56DE\u5408\u82B1\u8D393\u6676\u4F53\u77FF, \u53D1\u73B0\u4E00\u5F20\u5EFA\u7B51\u5361\n\u6240\u6709\u5EFA\u7B51\u5361\u521D\u59CB\u62E5\u6709\u7684\u81EA\u52A8\u673A\u70AE\u6570\u91CF\u7B49\u4E8E\u5F53\u524D\u9152\u9986\u7B49\u7EA7+1"
  },
  \u62DF\u6001\u866B: {
    name: "\u62DF\u6001\u866B",
    pinyin: "ntc",
    ability: "\u5B8C\u5168\u62DF\u6001",
    desc: "\u6BCF\u56DE\u5408, \u82B1\u8D392\u6676\u4F53\u77FF\u4E3A\u9009\u4E2D\u7684\u5361\u724C\u6DFB\u52A0\u5355\u4F4D, \u4ECE\u5361\u6C60\u4E2D\u968F\u673A\u6311\u9009\u4E00\u5F20\u5F53\u524D\u9152\u9986\u7B49\u7EA7\u7684\u5361\u724C, \u5C06\u5176\u521D\u59CB\u5355\u4F4D\u6DFB\u52A0\u5230\u9009\u4E2D\u5361\u724C\n\u65E0\u6CD5\u8FDE\u7EED\u4E3A\u540C\u4E00\u4F4D\u7F6E\u7684\u5361\u724C\u6DFB\u52A0"
  },
  \u63A2\u673A: {
    name: "\u63A2\u673A",
    pinyin: "tj",
    ability: "\u91CE\u6C34\u6676",
    desc: "\u6BCF\u56DE\u5408, \u82B1\u8D391\u6676\u4F53\u77FF\u5C06\u9009\u4E2D\u5361\u724C\u76841\u6C34\u6676\u5854\u53D8\u4E3A\u865A\u7A7A\u6C34\u6676\u5854\n\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u83B7\u5F971\u6C34\u6676\u5854"
  },
  \u6CF0\u51EF\u65AF: {
    name: "\u6CF0\u51EF\u65AF",
    pinyin: "tks",
    ability: "\u5E55\u540E\u4EA4\u6613",
    desc: "\u7B2C\u4E00\u56DE\u5408\u5C06\u81EA\u52A8\u82B1\u8D393\u6676\u4F53\u77FF\u83B7\u5F97\u5361\u724C\u4E0D\u6CD5\u4E4B\u5F92, \u6B64\u5361\u724C\u4F1A\u6301\u7EED\u83B7\u5F97\u4EFB\u52A1, \u53EF\u4EE5\u83B7\u5F97\u5965\u4E01\u7B49\u5956\u52B1"
  },
  \u8BFA\u5A03: {
    name: "\u8BFA\u5A03",
    pinyin: "nw",
    ability: "\u5148\u8FDB\u88C5\u5907",
    desc: "\u6BCF\u56DE\u5408, \u53D1\u73B0\u4E00\u5F20\u8F85\u52A9\u5361, \u82E5\u6682\u5B58\u533A\u5DF2\u6EE1\u5219\u65E0\u6CD5\u83B7\u5F97"
  },
  \u601D\u65FA: {
    name: "\u601D\u65FA",
    pinyin: "sw",
    ability: "\u56DE\u6536",
    desc: "\u79FB\u9664\u9009\u4E2D\u5361\u724C\u4E0A\u7684\u6240\u6709\u673A\u68B0\u5355\u4F4D, \u6BCF\u79FB\u9664\u4E00\u4E2A, \u5361\u724C\u673A\u68B0\u5DE5\u5382\u83B7\u5F971\u96F6\u4EF6\n\u573A\u4E0A\u6CA1\u6709\u5DE5\u5382\u65F6, \u81EA\u52A8\u5C1D\u8BD5\u5728\u7A7A\u4F4D\u4E0A\u521B\u5EFA\u673A\u68B0\u5DE5\u5382"
  },
  \u8DF3\u866B: {
    name: "\u8DF3\u866B",
    pinyin: "tc",
    ability: "\u540C\u5375\u53CC\u72D7",
    desc: "\u4F60\u7684\u866B\u5375\u724C\u65E0\u6CD5\u7834\u5375\u5B75\u5316, \u4F46\u62E5\u6709\u5176\u4ED6\u6548\u679C\n\u5F53\u4F60\u7684\u9152\u9986\u7B49\u7EA7\u8FBE\u52304\u7EA7\u65F6, \u6CE8\u5375\u4F1A\u5C1D\u8BD5\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u866B\u5375\u724C"
  },
  \u8499\u65AF\u514B: {
    name: "\u8499\u65AF\u514B",
    pinyin: "msk",
    ability: "\u7687\u5BB6\u536B\u961F",
    desc: "\u82B1\u8D399\u6676\u4F53\u77FF, \u5C06\u6BCF\u5F20\u5361\u724C\u76841\u5355\u4F4D\u53D8\u4E3A\u7687\u5BB6\u5355\u4F4D\n\u53EF\u4EE5\u53D8\u4E3A\u7687\u5BB6\u7684\u5355\u4F4D\u4F18\u5148\u7EA7:\n\u6218\u5217\u5DE1\u822A\u8230->\u96F7\u795E->\u653B\u57CE\u5766\u514B->\u7EF4\u4EAC\u6218\u673A\n\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u964D\u4F4E3\u70B9\u6280\u80FD\u8D39\u7528, \u4F7F\u7528\u540E\u91CD\u7F6E\u8D39\u7528"
  },
  \u96F7\u795E: {
    name: "\u96F7\u795E",
    pinyin: "ls",
    ability: "\u5207\u6362\u6A21\u5F0F",
    desc: "\u6BCF\u7EA7\u9152\u9986\u9650\u4E00\u6B21: \u4E3A\u4E00\u5F206\u661F\u4EE5\u4E0B\u7684\u5361\u724C\u9009\u62E9\u65B0\u7684\u63CF\u8FF0, \u5E76\u5C1D\u8BD5\u4EE4\u5176\u89E6\u53D1\u8FDB\u573A\u7279\u6548\n(\u65B0\u63CF\u8FF0\u5FC5\u987B\u662F\u540C\u661F\u7EA7, \u540C\u79CD\u65CF\u5361\u724C\u7684\u63CF\u8FF0, \u4E14\u4E0D\u5305\u542B\u62D3\u5C55\u5305\u5361\u724C; \u5361\u724C\u4E09\u8FDE\u540E\u63CF\u8FF0\u8FD8\u539F)"
  },
  \u673A\u68B0\u54E8\u5175: {
    name: "\u673A\u68B0\u54E8\u5175",
    pinyin: "jxsb",
    ability: "\u5E7B\u8C61",
    desc: "\u6BCF\u56DE\u5408, \u82B1\u8D394\u6676\u4F53\u77FF, \u590D\u5236\u4E00\u5F20\u9009\u4E2D\u7684\u4F4E\u4E8E5\u661F\u7684\u5361\u724C\u5230\u6682\u5B58\u533A, \u6700\u591A\u4F7F\u75283\u6B21"
  },
  \u5F02\u9F99: {
    name: "\u5F02\u9F99",
    pinyin: "yl",
    ability: "\u7EC4\u7EC7\u518D\u751F",
    desc: "\u82B1\u8D392\u6676\u4F53\u77FF\u53D1\u73B0\u4E00\u5F20\u5C0F\u4E8E\u7B49\u4E8E\u5F53\u524D\u9152\u9986\u7B49\u7EA7\u7684\u866B\u65CF\u5361\u724C, \u6BCF\u7EA7\u9152\u9986\u53EA\u80FD\u53EA\u7528\u4E00\u6B21"
  },
  \u533B\u7597\u5175: {
    name: "\u533B\u7597\u5175",
    pinyin: "ylb",
    ability: "\u6218\u573A\u6025\u6551",
    desc: "\u6BCF\u56DE\u5408, \u6467\u6BC1\u9009\u4E2D\u7684\u4E00\u5F20\u5361\u724C, \u83B7\u5F971\u6676\u4F53\u77FF\u5E76\u5C06\u5176\u4E2D\u7684\u751F\u7269\u5355\u4F4D\u5E73\u5747\u5206\u914D\u7ED9\u5176\u4ED6\u5361\u724C\n\u5355\u4F4D\u4E0D\u5305\u62EC\u82F1\u96C4\u5355\u4F4D; \u83B7\u5F97\u5355\u4F4D\u7684\u5361\u724C\u4E0D\u5305\u62EC\u866B\u5375\u724C"
  },
  \u5206\u88C2\u6C60: {
    name: "\u5206\u88C2\u6C60",
    pinyin: "flc",
    ability: "\u5F3A\u5236\u5206\u88C2",
    desc: "\u5B75\u5316\u6548\u679C\u80FD\u4F5C\u7528\u4E8E\u975E\u866B\u65CF\u5361\u724C\n\u6BCF\u56DE\u5408, \u5C1D\u8BD5\u4EE4\u9009\u4E2D\u5361\u724C\u7ACB\u5373\u89E6\u53D1\u5B75\u5316\u6548\u679C"
  },
  \u54CD\u5C3E\u86C7: {
    name: "\u54CD\u5C3E\u86C7",
    pinyin: "xws",
    ability: "\u6316\u5B9D\u5947\u5175",
    desc: "\u5237\u65B03\u6B21\u53D1\u73B0\u4E00\u5F20\u5F53\u524D\u9152\u9986\u7B49\u7EA7\u7684\u5361\u724C, \u6BCF\u7EA7\u9152\u9986\u53EA\u80FD\u4F1A\u7528\u4E00\u6B21\n6\u661F\u4EE5\u4E0B\u80FD4\u90091, 6\u661F\u53EA\u80FD3\u90091"
  },
  \u6DF7\u5408\u4F53: {
    name: "\u6DF7\u5408\u4F53",
    pinyin: "hht",
    ability: "\u7A76\u6781\u751F\u7269",
    desc: "\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u4F60\u6BCF\u62E5\u6709\u4E24\u5F20\u661F\u7EA7\u76F8\u540C, \u79CD\u65CF\u5206\u522B\u4E3A\u795E\u65CF\u548C\u866B\u65CF\u7684\u5361\u724C\u65F6, \u5176\u4E2D\u4E00\u5F20\u5361\u83B7\u5F971\u5BF9\u5E94\u661F\u7EA7\u7684\u6DF7\u5408\u4F53\n\u5404\u661F\u7EA7\u5BF9\u5E94\u7684\u6DF7\u5408\u4F53: (1)\u6DF7\u5408\u4F53\u63A0\u593A\u8005 (2)\u6DF7\u5408\u4F53\u5929\u7F5A\u8005 (3)\u6DF7\u5408\u4F53\u6BC1\u706D\u8005 (4)\u6DF7\u5408\u4F53\u5DE8\u517D (5)\u6DF7\u5408\u4F53\u652F\u914D\u8005 (6)\u6DF7\u5408\u4F53\u5B9E\u9A8C\u4F53"
  },
  \u5FB7\u54C8\u5361: {
    name: "\u5FB7\u54C8\u5361",
    pinyin: "dhk",
    ability: "\u7CBE\u534E\u91C7\u96C6\u8005",
    desc: "\u9009\u62E9\u975E\u539F\u59CB\u866B\u7FA4\u5361\u724C\u65F6, \u82B1\u8D396\u7CBE\u534E, \u5C06\u5176\u53D8\u4E3A\u539F\u59CB\u523A\u86C7\n\u9009\u62E9\u539F\u59CB\u866B\u7FA4\u5361\u724C\u65F6, \u82B1\u8D391\u7CBE\u534E, \u4E3A\u9009\u62E9\u7684\u5361\u724C\u8FDB\u53161\u539F\u59CB\u5355\u4F4D\n\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u83B7\u5F97\u7B49\u4E8E\u4F60\u74E6\u65AF\u6570\u91CF\u7684\u7CBE\u534E"
  },
  \u661F\u6E2F: {
    name: "\u661F\u6E2F",
    pinyin: "xg",
    ability: "\u7EDD\u5BF9\u5236\u7A7A\u6743",
    desc: "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6BCF\u5F20\u5361\u724C\u5C06n\u4E2A\u5730\u9762\u5355\u4F4D\u53D8\u4E3A\u6028\u7075\u6218\u673A(n=\u9152\u9986\u7B49\u7EA7-1), \u5176\u4E2D\u82F1\u96C4\u5355\u4F4D\u53D8\u4E3A\u6218\u5217\u5DE1\u822A\u8230\n\u6BCF\u56DE\u5408\u7ED3\u675F\u65F6, \u6BCF\u5F20\u5361\u724C\u5C061\u6028\u7075\u6218\u673A\u53D8\u4E3A\u5361\u724C\u5185\u4EF7\u503C\u6700\u9AD8\u7684\u975E\u82F1\u96C4\u7A7A\u4E2D\u5355\u4F4D"
  },
  \u8FDB\u5316\u8154: {
    name: "\u8FDB\u5316\u8154",
    pinyin: "jhq",
    ability: "\u5347\u7EA7\u65B9\u6848",
    desc: "\u56DE\u5408\u5F00\u59CB\u65F6, \u53D1\u73B0\u4E00\u79CD\u7A81\u53D8\n\u7A81\u53D8(xA->xB): \u6BCF\u5F20\u866B\u65CF\u5361\u724C\u5C06x\u4E2A\u5355\u4F4DA\u53D8\u4E3A\u5355\u4F4DB"
  },
  \u953B\u7089: {
    name: "\u953B\u7089",
    pinyin: "dl",
    ability: "\u5347\u7EA7\u653B\u9632",
    desc: "\u6BCF\u67091\u70B9\u6570, \u6240\u6709\u5730\u9762\u5355\u4F4D\u83B7\u5F971%\u4F24\u5BB3\u548C\u751F\u547D\u503C\u52A0\u6210\n\u6BCF\u51FA\u552E\u4E00\u5F20\u975E\u866B\u5375\u724C, \u83B7\u5F972\u70B9\u6570\n(\u70B9\u6570\u4E0D\u8D85\u8FC750)"
  },
  \u624E\u52A0\u62C9: {
    name: "\u624E\u52A0\u62C9",
    pinyin: "zjl",
    ability: "\u751F\u751F\u4E0D\u606F",
    desc: "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u82E5\u4F60\u62E5\u6709\u81F3\u5C116\u5F20\u5361\u724C, \u5C1D\u8BD5\u6467\u6BC1\u4EF7\u503C\u6700\u9AD8\u548C\u6700\u4F4E\u7684\u5361\u724C. \u5982\u679C\u6467\u6BC1\u6210\u529F, \u5219\u83B7\u5F9711\u6676\u4F53\u77FF"
  },
  \u5927\u529B\u795E: {
    name: "\u5927\u529B\u795E",
    pinyin: "dls",
    ability: "\u5FEB\u901F\u90E8\u7F72",
    desc: "1. \u6E38\u620F\u5F00\u59CB\u65F6, \u6311\u9009\u4E00\u5F203\u661F\u548C5\u661F\u7684\u5361\u724C, \u5F53\u9152\u9986\u7B49\u7EA7\u63D0\u5347\u5230\u5BF9\u5E94\u661F\u7EA7, \u83B7\u5F97\u6311\u9009\u7684\u5361\u724C, \u4F60\u7684\u9152\u9986\u5728\u5347\u7EA73\u661F\u548C5\u661F\u65F6\u5347\u7EA7\u8D39\u7528+1.\n2. \u6BCF\u56DE\u5408, \u5C06\u9009\u4E2D\u5361\u724C\u4E0E\u6307\u5B9A\u5361\u724C\u6216\u7A7A\u4F4D\u4EA4\u6362\u4F4D\u7F6E."
  },
  \u51EF\u745E\u7518: {
    name: "\u51EF\u745E\u7518",
    pinyin: "krg",
    ability: "\u84C4\u52BF\u5F85\u53D1",
    desc: "\u5347\u7EA7\u9152\u9986\u540E\u672C\u56DE\u5408\u5185\u7B2C\u4E00\u6B21\u5237\u65B0\u514D\u8D39\n\u4E00\u56DE\u5408\u5185\u8D2D\u4E705\u5F20\u5361\u724C\u540E\u53D8\u4E3A\u5F02\u866B\u5F62\u6001"
  },
  "\u51EF\u745E\u7518(\u5F02\u866B\u5F62\u6001)": {
    name: "\u51EF\u745E\u7518(\u5F02\u866B\u5F62\u6001)",
    pinyin: "krg(ycxt)",
    ability: "\u8D76\u5C3D\u6740\u7EDD",
    desc: "\u53D8\u8EAB\u65F6\u74E6\u65AF\u4EE5\u53CA\u4E0A\u9650\u53D8\u4E3A0, \u540C\u65F6\u6BCF\u5F20\u5361\u724C\u83B7\u5F97\u81EA\u8EAB\u7684\u521D\u59CB\u5355\u4F4D\n\u4EFB\u610F\u5361\u724C\u8FDB\u573A\u65F6, \u53D1\u73B0\u4E00\u4E2A\u4E09\u8FDE\u5347\u7EA7",
    ext: true
  },
  \u7C73\u62C9: {
    name: "\u7C73\u62C9",
    pinyin: "ml",
    ability: "\u6211\u5168\u90FD\u8981",
    desc: "\u8FDB\u573A\u7684\u5361\u724C\u661F\u7EA7\u5927\u4E8E\u4E0A\u4E00\u5F20\u8FDB\u573A\u5361\u724C\u65F6, \u83B7\u5F971\u6676\u4F53\u77FF"
  },
  \u5148\u77E5: {
    name: "\u5148\u77E5",
    pinyin: "xz",
    ability: "\u7AA5\u63A2\u547D\u8FD0",
    desc: "\u4E3A\u9009\u4E2D\u5361\u724C\u53D1\u73B01\u4E2A\u4E09\u8FDE\u5347\u7EA7, \u6BCF\u5C40\u6E38\u620F\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\n\u6BCF\u56DE\u5408\u7B2C\u4E00\u6B21\u653E\u5F03\u5347\u7EA7\u65F6\u8FD4\u56DE\u5168\u90E8\u74E6\u65AF, \u4F60\u7684\u5361\u724C\u5347\u7EA7\u4E0A\u9650+1"
  },
  \u963F\u5C14\u8FBE\u745E\u65AF: {
    name: "\u963F\u5C14\u8FBE\u745E\u65AF",
    pinyin: "aedrs",
    ability: "\u9759\u6EDE\u7ACB\u573A",
    desc: "\u5F53\u5361\u724C\u88AB\u9501\u5B9A\u65F6, \u4E0B\u56DE\u5408\u8BE5\u5361\u724C\u7684\u4EF7\u683C\u964D\u4E3A2\u6676\u4F53\u77FF"
  },
  \u65AF\u6258\u79D1\u592B: {
    name: "\u65AF\u6258\u79D1\u592B",
    pinyin: "stkf",
    ability: "\u795E\u7ECF\u611F\u67D3",
    desc: "\u6BCF\u56DE\u5408, \u82B1\u8D390\u751F\u547D\u503C\u5237\u65B0\u9152\u9986, \u5237\u65B0\u51FA\u7684\u5361\u724C\u90FD\u662F\u5F53\u524D\u9152\u9986\u7B49\u7EA7\u7684\u5361\u724C\n\u6BCF\u5347\u7EA7\u4E00\u6B21\u9152\u9986, \u6280\u80FD\u6D88\u8017\u589E\u52A03\u70B9"
  },
  \u89E3\u653E\u8005: {
    name: "\u89E3\u653E\u8005",
    pinyin: "jfz",
    ability: "\u6218\u673A\u6A21\u5F0F",
    desc: "\u6BCF\u56DE\u5408, \u5947\u6570\u6B21\u5237\u65B0\u4E0D\u8017\u8D39\u6676\u4F53\u77FF, \u4F46\u662F\u8D2D\u4E70\u5361\u724C\u9700\u89814\u6676\u4F53\u77FF\n\u4F7F\u7528\u6280\u80FD, \u53D8\u5F62\u4E3A\u9632\u536B\u6A21\u5F0F, \u6BCF\u56DE\u5408\u53EA\u80FD\u53D8\u5F62\u4E00\u6B21"
  },
  "\u89E3\u653E\u8005(\u9632\u536B\u6A21\u5F0F)": {
    name: "\u89E3\u653E\u8005(\u9632\u536B\u6A21\u5F0F)",
    pinyin: "jfz(fwms)",
    ability: "\u9632\u536B\u6A21\u5F0F",
    desc: "\u5546\u5E97\u65E0\u6CD5\u5237\u65B0\u548C\u8865\u5145\u5361\u724C, \u4F46\u662F\u8D2D\u4E70\u5361\u724C\u53EA\u9700\u89812\u6676\u4F53\u77FF\n\u4F7F\u7528\u6280\u80FD, \u53D8\u5F62\u4E3A\u6218\u673A\u6A21\u5F0F, \u6BCF\u56DE\u5408\u53EA\u80FD\u53D8\u5F62\u4E00\u6B21",
    ext: true
  },
  \u5E72\u6270\u8005: {
    name: "\u5E72\u6270\u8005",
    pinyin: "grz",
    ability: "\u51C0\u5316\u65B0\u661F",
    desc: "\u6BCF\u56DE\u5408\u5F00\u59CB\u65F6, \u6682\u5B58\u533A\u6BCF\u67092\u5F20\u975E\u8F85\u52A9\u5361\u5361\u724C, \u9152\u9986\u7B49\u7EA7\u5347\u7EA7\u8D39\u7528\u989D\u5916\u964D\u4F4E1"
  }
};

// src/dispatch/index.js
function Dispatch(target, msg, self, extra) {
  var _a;
  (_a = target[msg.msg]) == null ? void 0 : _a.call(self, msg, extra);
}

// src/utils.ts
function rep(v, n) {
  return Array.from({ length: n }, () => v);
}
function dup(v) {
  if (typeof v === "object" && v) {
    if (v instanceof Array) {
      return v.map(dup);
    } else {
      const r = {};
      for (const k in v) {
        r[k] = dup(v[k]);
      }
      return r;
    }
  } else {
    return v;
  }
}

// src/descriptor/terran.ts
function terran_default() {
  return {
    \u597D\u5144\u5F1F1: {
      listener: {
        "fast-produce": function() {
          this.obtain_unit(rep("\u9646\u6218\u961F\u5458", this.isg() ? 6 : 4));
        }
      },
      text: CardData["\u597D\u5144\u5F1F"].desc[0]
    },
    \u597D\u5144\u5F1F2: {
      listener: {
        "round-end": function() {
          if (this.infr() === "\u53CD\u5E94\u5806") {
            this.obtain_unit(rep("\u9646\u6218\u961F\u5458", this.isg() ? 2 : 1));
          }
        }
      },
      text: CardData["\u597D\u5144\u5F1F"].desc[1]
    }
  };
}

// src/descriptor/index.ts
function CreateDescriptorTable() {
  return __spreadValues({}, terran_default());
}
var t = CreateDescriptorTable();
var descriptor_default = t;

// src/card.ts
var cardBind = {
  "round-end": function() {
  },
  "post-sell": function() {
  }
};
var CardInstance = class {
  constructor(player, card) {
    this.$ref$Player = player;
    this.config = {
      MaxUnit: player.config.MaxUnitPerCard,
      MaxUpgrade: player.config.MaxUpgradePerCard
    };
    this.attrib = {};
    const cardt = CardData[card];
    this.name = card;
    this.race = cardt.race;
    this.level = cardt.level;
    this.color = cardt.attr.amber ? "amber" : "normal";
    this.belong = cardt.belong;
    this.units = Object.keys(cardt.unit).map((u) => rep(u, cardt.unit[u])).flat();
    this.upgrades = [];
    this.descs = [];
  }
  index() {
    return this.$ref$Player.present.findIndex((x) => (x == null ? void 0 : x.card) === this);
  }
  post(msg) {
    const m = __spreadProps(__spreadValues({}, msg), {
      player: this.$ref$Player.index(),
      card: this.index()
    });
    this.$ref$Player.$ref$Game.post(m);
    return m;
  }
  answer(msg) {
    Dispatch(cardBind, msg, this);
    for (const d of this.descs) {
      Dispatch(descriptor_default[d].listener, msg, this, descriptor_default[d]);
    }
  }
  obtain_unit(units, way = "normal") {
    const msg = this.post({
      msg: "obtain-unit",
      units,
      way,
      time: "prev"
    });
    msg.units = msg.units.slice(0, this.config.MaxUnit - this.units.length);
    this.units = [...this.units, ...msg.units];
    if (msg.units.length > 0) {
      this.post({
        msg: "obtain-unit",
        units: msg.units,
        way,
        time: "post"
      });
    }
  }
  isg() {
    return this.color === "gold";
  }
  infr() {
    const infs = ["\u53CD\u5E94\u5806", "\u79D1\u6280\u5B9E\u9A8C\u5BA4", "\u9AD8\u7EA7\u79D1\u6280\u5B9E\u9A8C\u5BA4"];
    const idx = this.units.findIndex((u) => infs.includes(u));
    return idx === -1 ? false : this.units[idx];
  }
};

// src/role/index.ts
function CreateRoleTable() {
  return {
    \u767D\u677F: {
      listener: {}
    }
  };
}
var t2 = CreateRoleTable();
var role_default = t2;

// src/player.ts
var playerBind = {
  $upgrade: function() {
    if (this.level < 6 && this.mineral >= this.upgrade_cost) {
      this.mineral -= this.upgrade_cost;
      this.level += 1;
      this.upgrade_cost = this.config.TavernUpgrade[this.level];
      if (this.store.length < this.config.StoreCount[this.level]) {
        this.store.push(null);
      }
      this.post({
        msg: "tavern-upgraded",
        level: this.level
      });
    }
  },
  $refresh: function() {
    if (this.mineral < this.role_refresh_cost()) {
      return;
    }
    this.mineral -= this.role_refresh_cost();
    this.do_refresh();
    this.role_refreshed();
  },
  /*
    $finish: function () {
      this.doned = true
      this.game.add_done()
    },
    $ability: function () {
      if (!this.ability.enable) {
        return
      }
      this.role.ability()
    },
    $lock: function () {
      this.locked = true
    },
    $unlock: function () {
      this.locked = false
    },
    $select: function ({ area, choice }) {
      this.selected = {
        area,
        choice,
      }
      this.postClient({
        msg: 'selected',
        area,
        choice,
      })
    },
    $choice: function ({ category, choice }) {
      const r = this.resolves[category]
      if (r) {
        this.resolves[category] = null
        r(choice)
      }
    },
    $action: function ({ area, action, choice }) {
      switch (area) {
        case 'store': {
          const ck = this.store[choice]
          if (!ck || !this.can_buy(ck, action, choice)) {
            return
          }
          switch (action) {
            case 'enter':
              if (!this.can_enter(ck)) {
                return
              }
              break
            case 'combine':
              if (!this.can_combine(ck)) {
                return
              }
              break
            case 'stage':
              if (!this.can_stage()) {
                return
              }
              break
          }
          this.mineral -= this.role.buy_cost(ck, action, choice)
  
          switch (action) {
            case 'enter':
              this.enter(getCard(ck))
              break
            case 'combine':
              this.combine(getCard(ck))
              break
            case 'stage':
              this.hand[this.hand.findIndex(v => v === null)] = ck
              break
          }
  
          this.store[choice] = null
  
          if (action !== 'combine') {
            this.role.bought(choice)
          }
          break
        }
        case 'hand': {
          const ck = this.hand[choice]
          if (!ck) {
            return
          }
          switch (action) {
            case 'enter':
              if (!this.can_enter(ck)) {
                return
              }
              break
            case 'combine':
              if (!this.can_combine(ck)) {
                return
              }
              break
          }
  
          this.hand[choice] = null
  
          switch (action) {
            case 'enter':
              this.enter(getCard(ck))
              break
            case 'combine':
              this.combine(getCard(ck))
              break
            case 'sell':
              if (getCard(ck).attr.type !== 'support') {
                this.obtain_resource({
                  mineral: 1,
                })
              }
              break
          }
          break
        }
        case 'present': {
          const c = this.present[choice]
          if (!c) {
            return
          }
          switch (action) {
            case 'sell':
              this.sell(c)
              break
            case 'upgrade': {
              if (!this.can_pres_upgrade(c.data)) {
                return
              }
  
              if (c.data.upgrades.length >= this.config.MaxUpgradePerCard) {
                return
              }
              const comm: Upgrade[] = [],
                spec: Upgrade[] = []
              AllUpgrade.filter(u => !c.data.upgrades.includes(u))
                .map(getUpgrade)
                .forEach(u => {
                  switch (u.category) {
                    case 'O':
                      if (c.data.belong === 'origin') {
                        spec.push(u)
                      }
                      break
                    case 'V':
                      if (c.data.belong === 'void') {
                        spec.push(u)
                      }
                      break
                    case 'T':
                    case 'P':
                    case 'Z':
                      if (c.data.race === u.category) {
                        spec.push(u)
                      }
                      break
                    case 'C':
                      comm.push(u)
                      break
                  }
                })
              this.game.gen.shuffle(spec)
              const firstUpgrade = c.data.upgrades.length === 0
              const sp = spec.slice(
                0,
                firstUpgrade ? (c.data.belong === 'origin' ? 3 : 2) : 1
              )
              const item = this.game.gen
                .shuffle(comm)
                .slice(0, 4 - sp.length)
                .concat(sp)
              this.obtain_resource({
                gas: -2,
              })
              if (
                !this.discover(item, {
                  target: c,
                  extra: '放弃',
                })
              ) {
                this.obtain_resource({
                  gas: 1,
                })
                this.post({
                  msg: 'upgrade-cancelled',
                  target: c,
                })
              }
              break
            }
          }
          break
        }
      }
    },
    $cheat: async msg => {
      switch (msg.type) {
        case 'card':
          if (!this.can_stage()) {
            return
          }
          this.hand[this.hand.findIndex(v => v === null)] = msg.cardt
          break
        case 'unit':
          if (!this.present[msg.place]) {
            return
          }
          this.present[msg.place]?.obtain_unit(msg.units)
          break
        case 'resource':
          this.obtain_resource({
            mineral: 100,
            gas: 100,
          })
          break
      }
    },
    */
  "round-start": function() {
    if (this.status !== "middle") {
      return;
    }
    this.status = "normal";
    this.attrib = {};
    if (this.upgrade_cost > 0) {
      this.upgrade_cost -= 1;
    }
    if (this.mineral_max < this.config.MaxMineral) {
      this.mineral_max += 1;
    }
    this.mineral = this.mineral_max;
    if (this.gas < this.config.MaxGas) {
      this.gas += 1;
    }
    if (this.persisAttrib["R\u89E3\u653E\u8005_\u6A21\u5F0F"]) {
      return;
    }
    if (!this.locked) {
      this.$ref$Game.pool.drop(
        this.store.filter((x) => x !== null).map(
          (x) => CardData[x.card]
        )
      );
      this.store.fill(null);
    }
    this.locked = false;
    this.fill_store();
  }
  /*
  'card-selled': function ({ target }) {
    if (target.data.race === 'N') {
      for (const c of this.present.filter(isCardInstance)) {
        c.obtain_unit(
          us('原始异龙', c.data.upgrades.filter(u => u === '原始尖塔').length)
        )
      }
    }
  },
  */
};
var PlayerInstance = class {
  constructor(game, rolekey) {
    const role = RoleData[rolekey];
    this.$ref$Game = game;
    this.config = {
      MaxUnitPerCard: 200,
      MaxUpgradePerCard: 5,
      AlwaysInsert: false,
      StoreCount: [0, 3, 4, 4, 5, 5, 6],
      TavernUpgrade: [0, 5, 7, 8, 9, 11, 0],
      MaxMineral: 10,
      MaxGas: 6
    };
    this.attrib = {};
    this.persisAttrib = {};
    this.life = 100;
    this.level = 1;
    this.upgrade_cost = 5 + 1;
    this.status = "middle";
    this.mineral = 0;
    this.mineral_max = 3 - 1;
    this.gas = 0 - 1;
    this.gas_max = 6;
    this.selected = {
      area: "none",
      place: -1
    };
    this.locked = false;
    this.role = {
      attrib: {},
      name: rolekey,
      ability: role.ability,
      desc: role.desc,
      enable: false,
      progress: null,
      enhance: true
    };
    this.store = rep(null, 3);
    this.hand = rep(null, 6);
    this.present = rep(null, 7);
  }
  index() {
    return this.$ref$Game.player.indexOf(this);
  }
  post(msg) {
    const m = __spreadProps(__spreadValues({}, msg), {
      player: this.index()
    });
    this.$ref$Game.post(m);
    return m;
  }
  answer(msg) {
    var _a;
    Dispatch(playerBind, msg, this);
    if ("card" in msg) {
      (_a = this.present[msg.card]) == null ? void 0 : _a.card.answer(msg);
    } else {
      this.present.forEach((p) => {
        if (p) {
          p.card.answer(msg);
        }
      });
    }
  }
  fill_store() {
    var _a;
    const nf = this.store.filter((c) => !c).length;
    const nc = this.$ref$Game.pool.discover(
      (card) => card.level <= this.level,
      nf,
      false
    );
    for (let i = 0; i < this.store.length; i++) {
      if (!this.store[i]) {
        this.store[i] = {
          card: (_a = nc.shift()) == null ? void 0 : _a.name,
          special: false
        };
      }
    }
  }
  do_refresh() {
    this.$ref$Game.pool.drop(
      this.store.filter((x) => x !== null).map(
        (c) => CardData[c.card]
      )
    );
    this.store.fill(null);
    this.fill_store();
    this.post({
      msg: "store-refreshed"
    });
  }
  role_refresh_cost() {
    var _a;
    return ((_a = role_default[this.role.name].refresh_cost) == null ? void 0 : _a.call(this.role, this)) || 1;
  }
  role_refreshed() {
    var _a;
    (_a = role_default[this.role.name].refreshed) == null ? void 0 : _a.call(this.role, this);
  }
};

// src/pool.ts
var poolCount = {
  1: 18,
  2: 15,
  3: 13,
  4: 11,
  5: 9,
  6: 6
};
var Pool = class {
  constructor(pack, lcg) {
    this.$ref$lcg = lcg;
    this.heap = {};
    AllCard.forEach((c) => {
      const card = CardData[c];
      if (card.attr.pool && pack.includes(card.pack)) {
        if (!card.attr.rare) {
          this.heap[c] = poolCount[card.level];
        } else {
          if (this.$ref$lcg.float() <= 0.15) {
            this.heap[c] = 1;
          }
        }
      }
    });
  }
  discover(pred, count, unique = true) {
    const nh = {};
    const f = [];
    const mf = [];
    Object.keys(this.heap).forEach((k) => {
      const ck = k;
      const card = CardData[ck];
      if (pred(card)) {
        if (unique) {
          f.push(card);
          mf.push(...rep(card, (this.heap[ck] || 1) - 1));
        } else {
          f.push(...rep(card, this.heap[ck] || 0));
        }
      } else {
        nh[ck] = this.heap[ck];
      }
    });
    if (f.length + mf.length < count) {
      throw `Heap is not enough!`;
    }
    this.heap = nh;
    this.$ref$lcg.shuffle(f);
    if (f.length < count) {
      this.$ref$lcg.shuffle(mf);
      f.push(...mf.slice(0, count - f.length));
      this.drop(mf.slice(count - f.length));
    } else {
      this.drop(mf);
    }
    this.drop(f.slice(count));
    return f.slice(0, count);
  }
  drop(card) {
    card.forEach((c) => {
      let cnt = (this.heap[c.name] || 0) + 1;
      if (cnt > poolCount[c.level]) {
        cnt = poolCount[c.level];
      }
      this.heap[c.name] = cnt;
    });
  }
};

// src/game.ts
var LCG = class {
  constructor(begin) {
    this.seed = begin;
  }
  next() {
    this.seed = 25214903917 * this.seed & (1 << 48) - 1;
    return this.seed;
  }
  float() {
    return this.next() / (1 << 48);
  }
  int(max, min = 0) {
    return min + Math.floor(this.float() * (max - min + 1));
  }
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.int(0, i);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
};
var GameInstance = class {
  constructor(cfg) {
    this.config = dup(cfg);
    this.attrib = {};
    this.lcg = new LCG(this.config.Seed || 1);
    this.round = 0;
    this.pool = new Pool(this.config.Pack, this.lcg);
    this.player = rep(null, this.config.Role.length).map((v, i) => {
      return new PlayerInstance(this, this.config.Role[i]);
    });
  }
  post(msg) {
    var _a;
    if ("player" in msg) {
      (_a = this.player[msg.player]) == null ? void 0 : _a.answer(msg);
    } else {
      this.player.forEach((p) => {
        if (p) {
          p.answer(msg);
        }
      });
    }
    this.emit();
  }
  emit() {
    const state = {
      config: dup(this.config),
      round: this.round,
      player: this.player.map((p) => {
        return p ? {
          config: dup(p.config),
          life: p.life,
          level: p.level,
          upgrade_cost: p.upgrade_cost,
          status: p.status,
          mineral: p.mineral,
          mineral_max: p.mineral_max,
          gas: p.gas,
          gas_max: p.gas_max,
          selected: dup(p.selected),
          locked: p.locked,
          role: {
            name: p.role.name,
            ability: p.role.ability,
            desc: p.role.desc,
            enable: p.role.enable,
            progress: dup(p.role.progress),
            enhance: p.role.enhance
          },
          store: p.store.map((s2) => {
            return s2 ? {
              card: s2.card,
              special: s2.special,
              actions: []
            } : null;
          }),
          hand: p.hand.map((h) => {
            return h ? {
              card: h.card,
              actions: []
            } : null;
          }),
          present: p.present.map((p2) => {
            return p2 ? {
              card: {
                config: dup(p2.card.config),
                name: p2.card.name,
                race: p2.card.race,
                level: p2.card.level,
                color: p2.card.color,
                belong: p2.card.belong,
                units: dup(p2.card.units),
                upgrades: dup(p2.card.upgrades),
                descs: p2.card.descs.map(
                  (key) => descriptor_default[key].text[p2.card.isg() ? 1 : 0]
                ),
                notes: p2.card.descs.map((key) => {
                  var _a, _b;
                  return ((_b = (_a = descriptor_default[key]).note) == null ? void 0 : _b.call(_a, p2.card)) || [];
                }).flat()
              },
              actions: []
            } : null;
          })
        } : null;
      })
    };
    console.log(JSON.stringify(state, null, 2));
  }
  start() {
    this.round = 1;
    this.post({
      msg: "round-start",
      round: 1
    });
    this.post({
      msg: "round-enter",
      round: 1
    });
  }
};

// node_modules/uuid/dist/esm-node/rng.js
var import_crypto = __toESM(require("crypto"));
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

// node_modules/uuid/dist/esm-node/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist/esm-node/native.js
var import_crypto2 = __toESM(require("crypto"));
var native_default = {
  randomUUID: import_crypto2.default.randomUUID
};

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// src/serialize/utils.js
function setId(obj) {
  if (typeof obj === "object" && obj) {
    if (obj instanceof Array) {
      obj.forEach(setId);
    } else {
      if ("$id$" in obj) {
        return;
      }
      obj["$id$"] = v4_default();
      for (const k in obj) {
        setId(obj[k]);
      }
    }
  }
}
function cleanId(obj) {
  if (typeof obj === "object" && obj) {
    if (obj instanceof Array) {
      obj.forEach(cleanId);
    } else {
      if (!("$id$" in obj)) {
        return;
      }
      delete obj["$id$"];
      for (const k in obj) {
        cleanId(obj[k]);
      }
    }
  }
}
function remId(obj, st) {
  if (typeof obj === "object" && obj) {
    if (obj instanceof Array) {
      obj.forEach((v) => remId(v, st));
    } else {
      st[obj["$id$"]] = obj;
      delete obj["$id$"];
      for (const k in obj) {
        remId(obj[k], st);
      }
    }
  }
}
function setRef(obj, st) {
  if (typeof obj === "object" && obj) {
    if (obj instanceof Array) {
      obj.forEach((v) => setRef(v, st));
    } else {
      for (const k in obj) {
        if (k.startsWith("$ref$")) {
          obj[k] = st[obj[k]];
        } else {
          setRef(obj[k], st);
        }
      }
    }
  }
}
function prevSerialize(obj) {
  setId(obj);
}
function postSerialize(obj) {
  cleanId(obj);
}
function postDeserialize(obj) {
  const st = {};
  remId(obj, st);
  setRef(obj, st);
}

// src/serialize/index.ts
var ClassManager = class {
  constructor() {
    this.protos = {};
    this.indexs = /* @__PURE__ */ new Map();
  }
  register(name, proto) {
    if (name in this.protos) {
      throw `${name} is already registered!`;
    } else if (this.indexs.has(proto)) {
      throw `prototype of ${name} is already registered!`;
    }
    this.protos[name] = proto;
    this.indexs.set(proto, name);
  }
  autoRegister(classes) {
    for (const name in classes) {
      this.register(name, classes[name].prototype);
    }
  }
  serialize(object) {
    prevSerialize(object);
    const replacer = (key, value) => {
      if (key.startsWith("$ref$")) {
        return value["$id$"];
      }
      if (typeof value === "object" && value !== null) {
        const p = Object.getPrototypeOf(value);
        if (p === Object.prototype || p === Array.prototype) {
          return value;
        } else {
          const pname = this.indexs.get(p);
          if (pname) {
            return __spreadProps(__spreadValues({}, value), {
              $proto$: pname
            });
          } else {
            this.register(value.constructor.name, p);
            console.log(
              "[WARN] Auto register prototype for class",
              value.constructor.name
            );
            return __spreadProps(__spreadValues({}, value), {
              $proto$: value.constructor.name
            });
          }
        }
      } else {
        return value;
      }
    };
    const result = JSON.stringify(object, replacer, 2);
    postSerialize(object);
    return result;
  }
  deserialize(json) {
    const reviver = (key, value) => {
      if (typeof value === "object" && value !== null) {
        if ("$proto$" in value) {
          const pname = value.$proto$;
          if (pname in this.protos) {
            delete value.$proto$;
            return Object.setPrototypeOf(value, this.protos[pname]);
          } else {
            throw `prototype ${pname} not found`;
          }
        } else {
          return value;
        }
      } else {
        return value;
      }
    };
    const obj = JSON.parse(json, reviver);
    postDeserialize(obj);
    return obj;
  }
};
var defaultManager = new ClassManager();
defaultManager.autoRegister({
  GameInstance,
  PlayerInstance,
  CardInstance,
  Pool,
  LCG
});
var serialize_default = defaultManager;

// test/index.ts
var g = new GameInstance({
  Pack: ["\u6838\u5FC3"],
  Seed: 1,
  Role: ["\u767D\u677F"],
  Mutation: []
});
g.start();
g.post({
  msg: "$refresh",
  player: 0
});
var s = serialize_default.serialize(g);
g.post({
  msg: "$refresh",
  player: 0
});
console.log("---");
var ng = serialize_default.deserialize(s);
ng.post({
  msg: "$refresh",
  player: 0
});
