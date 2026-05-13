export type OS = "mac" | "windows";

export interface KeyCombo {
  keys: string[];       // e.g. ["⌥", "G"] or ["Alt", "0169"]
  followUp?: string;    // dead-key continuation, e.g. "→ A"
  result: string;       // character produced
  label: string;
  os: OS;
  category: string;
  note?: string;
}

// ─── MAC — Option (⌥) ────────────────────────────────────────────────────────
const macOption: KeyCombo[] = [
  // Symbols
  { os:"mac", category:"symbols",    keys:["⌥","G"],       result:"©",  label:"Copyright"         },
  { os:"mac", category:"symbols",    keys:["⌥","R"],       result:"®",  label:"Registered"        },
  { os:"mac", category:"symbols",    keys:["⌥","8"],       result:"•",  label:"Bullet"            },
  { os:"mac", category:"symbols",    keys:["⌥","T"],       result:"†",  label:"Dagger"            },
  { os:"mac", category:"symbols",    keys:["⌥","⇧","7"],   result:"‡",  label:"Double Dagger"     },
  { os:"mac", category:"symbols",    keys:["⌥","6"],       result:"§",  label:"Section"           },
  { os:"mac", category:"symbols",    keys:["⌥","7"],       result:"¶",  label:"Pilcrow"           },
  { os:"mac", category:"symbols",    keys:["⌥","⇧","8"],   result:"°",  label:"Degree"            },
  { os:"mac", category:"symbols",    keys:["⌥","⇧","R"],   result:"‰",  label:"Per Mille"         },
  // Math
  { os:"mac", category:"math",       keys:["⌥","="],       result:"≠",  label:"Not Equal"         },
  { os:"mac", category:"math",       keys:["⌥","X"],       result:"≈",  label:"Almost Equal"      },
  { os:"mac", category:"math",       keys:["⌥",","],       result:"≤",  label:"Less or Equal"     },
  { os:"mac", category:"math",       keys:["⌥","."],       result:"≥",  label:"Greater or Equal"  },
  { os:"mac", category:"math",       keys:["⌥","V"],       result:"√",  label:"Square Root"       },
  { os:"mac", category:"math",       keys:["⌥","W"],       result:"∑",  label:"Sum (Sigma)"       },
  { os:"mac", category:"math",       keys:["⌥","⇧","P"],   result:"∏",  label:"Product (Pi)"      },
  { os:"mac", category:"math",       keys:["⌥","P"],       result:"π",  label:"Pi"                },
  { os:"mac", category:"math",       keys:["⌥","D"],       result:"∂",  label:"Partial Deriv."    },
  { os:"mac", category:"math",       keys:["⌥","B"],       result:"∫",  label:"Integral"          },
  { os:"mac", category:"math",       keys:["⌥","Z"],       result:"Ω",  label:"Omega"             },
  { os:"mac", category:"math",       keys:["⌥","M"],       result:"µ",  label:"Mu / Micro"        },
  { os:"mac", category:"math",       keys:["⌥","J"],       result:"∆",  label:"Delta (upper)"     },
  { os:"mac", category:"math",       keys:["⌥","5"],       result:"∞",  label:"Infinity"          },
  { os:"mac", category:"math",       keys:["⌥","L"],       result:"¬",  label:"Not"               },
  { os:"mac", category:"math",       keys:["⌥","⇧","="],   result:"±",  label:"Plus-Minus"        },
  { os:"mac", category:"math",       keys:["⌥","⇧",";"],   result:"∇",  label:"Nabla"             },
  { os:"mac", category:"math",       keys:["⌥","⇧","9"],   result:"∈",  label:"Element Of"        },
  // Currency
  { os:"mac", category:"currency",   keys:["⌥","⇧","2"],   result:"€",  label:"Euro"              },
  { os:"mac", category:"currency",   keys:["⌥","3"],       result:"£",  label:"Pound"             },
  { os:"mac", category:"currency",   keys:["⌥","Y"],       result:"¥",  label:"Yen / Yuan"        },
  { os:"mac", category:"currency",   keys:["⌥","4"],       result:"¢",  label:"Cent"              },
  // Punctuation
  { os:"mac", category:"punctuation",keys:["⌥","-"],       result:"–",  label:"En Dash"           },
  { os:"mac", category:"punctuation",keys:["⌥","⇧","-"],   result:"—",  label:"Em Dash"           },
  { os:"mac", category:"punctuation",keys:["⌥",";"],       result:"…",  label:"Ellipsis"          },
  { os:"mac", category:"punctuation",keys:["⌥","["],       result:"\u201C", label:"Left Dbl Quote"  },
  { os:"mac", category:"punctuation",keys:["⌥","]"],       result:"\u2018", label:"Left Sng Quote"  },
  { os:"mac", category:"punctuation",keys:["⌥","⇧","["],   result:"\u201D", label:"Right Dbl Quote" },
  { os:"mac", category:"punctuation",keys:["⌥","⇧","]"],   result:"\u2019", label:"Right Sng Quote" },
  { os:"mac", category:"punctuation",keys:["⌥","\\"],      result:"«",  label:"Left Guillemet"    },
  { os:"mac", category:"punctuation",keys:["⌥","⇧","\\"],  result:"»",  label:"Right Guillemet"   },
  { os:"mac", category:"punctuation",keys:["⌥","2"],       result:"™",  label:"Trademark"         },
  { os:"mac", category:"punctuation",keys:["⌥","1"],       result:"¡",  label:"Inverted Excl."    },
  { os:"mac", category:"punctuation",keys:["⌥","/"],       result:"÷",  label:"Division"          },
  // Accents (direct)
  { os:"mac", category:"accents",    keys:["⌥","A"],       result:"å",  label:"a ring"            },
  { os:"mac", category:"accents",    keys:["⌥","O"],       result:"ø",  label:"o stroke"          },
  { os:"mac", category:"accents",    keys:["⌥","S"],       result:"ß",  label:"Sharp S (Eszett)"  },
  { os:"mac", category:"accents",    keys:["⌥","C"],       result:"ç",  label:"c cedilla"         },
  { os:"mac", category:"accents",    keys:["⌥","Q"],       result:"œ",  label:"oe ligature"       },
  { os:"mac", category:"accents",    keys:["⌥","'"],       result:"æ",  label:"ae ligature"       },
  { os:"mac", category:"accents",    keys:["⌥","⇧","A"],   result:"Å",  label:"A ring (upper)"    },
  { os:"mac", category:"accents",    keys:["⌥","⇧","O"],   result:"Ø",  label:"O stroke (upper)"  },
  { os:"mac", category:"accents",    keys:["⌥","⇧","C"],   result:"Ç",  label:"C cedilla (upper)" },
  { os:"mac", category:"accents",    keys:["⌥","⇧","Q"],   result:"Œ",  label:"OE ligature (upper)"},
  // Dead keys
  { os:"mac", category:"dead-keys",  keys:["⌥","E"], followUp:"→ vowel", result:"´", label:"Acute accent (dead)", note:"Then A→á  E→é  I→í  O→ó  U→ú" },
  { os:"mac", category:"dead-keys",  keys:["⌥","U"], followUp:"→ vowel", result:"¨", label:"Umlaut / Diaeresis", note:"Then A→ä  E→ë  I→ï  O→ö  U→ü  Y→ÿ" },
  { os:"mac", category:"dead-keys",  keys:["⌥","I"], followUp:"→ vowel", result:"ˆ", label:"Circumflex (dead)",   note:"Then A→â  E→ê  I→î  O→ô  U→û" },
  { os:"mac", category:"dead-keys",  keys:["⌥","`"], followUp:"→ vowel", result:"`", label:"Grave accent (dead)", note:"Then A→à  E→è  I→ì  O→ò  U→ù" },
  { os:"mac", category:"dead-keys",  keys:["⌥","N"], followUp:"→ A/N/O", result:"˜", label:"Tilde (dead)",        note:"Then A→ã  N→ñ  O→õ" },
];

// ─── WINDOWS — Alt codes ──────────────────────────────────────────────────────
const winAlt: KeyCombo[] = [
  // Symbols
  { os:"windows", category:"symbols",    keys:["Alt","0169"],  result:"©",  label:"Copyright"         },
  { os:"windows", category:"symbols",    keys:["Alt","0174"],  result:"®",  label:"Registered"        },
  { os:"windows", category:"symbols",    keys:["Alt","0153"],  result:"™",  label:"Trademark"         },
  { os:"windows", category:"symbols",    keys:["Alt","0149"],  result:"•",  label:"Bullet"            },
  { os:"windows", category:"symbols",    keys:["Alt","0167"],  result:"§",  label:"Section"           },
  { os:"windows", category:"symbols",    keys:["Alt","0182"],  result:"¶",  label:"Pilcrow"           },
  { os:"windows", category:"symbols",    keys:["Alt","0176"],  result:"°",  label:"Degree"            },
  { os:"windows", category:"symbols",    keys:["Alt","0137"],  result:"‰",  label:"Per Mille"         },
  { os:"windows", category:"symbols",    keys:["Alt","0134"],  result:"†",  label:"Dagger"            },
  { os:"windows", category:"symbols",    keys:["Alt","0135"],  result:"‡",  label:"Double Dagger"     },
  { os:"windows", category:"symbols",    keys:["Alt","0161"],  result:"¡",  label:"Inverted Excl."    },
  { os:"windows", category:"symbols",    keys:["Alt","0191"],  result:"¿",  label:"Inverted Quest."   },
  { os:"windows", category:"math",       keys:["Alt","0177"],  result:"±",  label:"Plus-Minus"        },
  { os:"windows", category:"math",       keys:["Alt","0215"],  result:"×",  label:"Multiply"          },
  { os:"windows", category:"math",       keys:["Alt","0247"],  result:"÷",  label:"Division"          },
  { os:"windows", category:"math",       keys:["Alt","8800"],  result:"≠",  label:"Not Equal"         },
  { os:"windows", category:"math",       keys:["Alt","8776"],  result:"≈",  label:"Almost Equal"      },
  { os:"windows", category:"math",       keys:["Alt","8804"],  result:"≤",  label:"Less or Equal"     },
  { os:"windows", category:"math",       keys:["Alt","8805"],  result:"≥",  label:"Greater or Equal"  },
  { os:"windows", category:"math",       keys:["Alt","8734"],  result:"∞",  label:"Infinity"          },
  { os:"windows", category:"math",       keys:["Alt","8730"],  result:"√",  label:"Square Root"       },
  { os:"windows", category:"math",       keys:["Alt","8721"],  result:"∑",  label:"Sum (Sigma)"       },
  { os:"windows", category:"math",       keys:["Alt","8706"],  result:"∂",  label:"Partial Deriv."    },
  { os:"windows", category:"math",       keys:["Alt","8747"],  result:"∫",  label:"Integral"          },
  { os:"windows", category:"math",       keys:["Alt","8711"],  result:"∇",  label:"Nabla"             },
  { os:"windows", category:"math",       keys:["Alt","8712"],  result:"∈",  label:"Element Of"        },
  { os:"windows", category:"math",       keys:["Alt","8719"],  result:"∏",  label:"Product (Pi)"      },
  { os:"windows", category:"math",       keys:["Alt","8713"],  result:"∉",  label:"Not Element"       },
  { os:"windows", category:"math",       keys:["Alt","8834"],  result:"⊂",  label:"Subset"            },
  { os:"windows", category:"math",       keys:["Alt","8835"],  result:"⊃",  label:"Superset"          },
  { os:"windows", category:"math",       keys:["Alt","8745"],  result:"∩",  label:"Intersection"      },
  { os:"windows", category:"math",       keys:["Alt","8746"],  result:"∪",  label:"Union"             },
  { os:"windows", category:"math",       keys:["Alt","8704"],  result:"∀",  label:"For All"           },
  { os:"windows", category:"math",       keys:["Alt","8707"],  result:"∃",  label:"There Exists"      },
  { os:"windows", category:"math",       keys:["Alt","8743"],  result:"∧",  label:"Logical AND"       },
  { os:"windows", category:"math",       keys:["Alt","8744"],  result:"∨",  label:"Logical OR"        },
  // Currency
  { os:"windows", category:"currency",   keys:["Alt","0128"],  result:"€",  label:"Euro"              },
  { os:"windows", category:"currency",   keys:["Alt","0163"],  result:"£",  label:"Pound"             },
  { os:"windows", category:"currency",   keys:["Alt","0165"],  result:"¥",  label:"Yen / Yuan"        },
  { os:"windows", category:"currency",   keys:["Alt","0162"],  result:"¢",  label:"Cent"              },
  { os:"windows", category:"currency",   keys:["Alt","8383"],  result:"₿",  label:"Bitcoin"           },
  // Punctuation
  { os:"windows", category:"punctuation",keys:["Alt","0150"],  result:"–",  label:"En Dash"           },
  { os:"windows", category:"punctuation",keys:["Alt","0151"],  result:"—",  label:"Em Dash"           },
  { os:"windows", category:"punctuation",keys:["Alt","0133"],  result:"…",  label:"Ellipsis"          },
  { os:"windows", category:"punctuation",keys:["Alt","0171"],  result:"«",  label:"Left Guillemet"    },
  { os:"windows", category:"punctuation",keys:["Alt","0187"],  result:"»",  label:"Right Guillemet"   },
  { os:"windows", category:"punctuation",keys:["Alt","0145"],  result:"\u2018", label:"Left Sng Quote"  },
  { os:"windows", category:"punctuation",keys:["Alt","0146"],  result:"\u2019", label:"Right Sng Quote" },
  { os:"windows", category:"punctuation",keys:["Alt","0147"],  result:"\u201C", label:"Left Dbl Quote"  },
  { os:"windows", category:"punctuation",keys:["Alt","0148"],  result:"\u201D", label:"Right Dbl Quote" },
  // Accents
  { os:"windows", category:"accents",    keys:["Alt","0225"],  result:"á",  label:"a acute"           },
  { os:"windows", category:"accents",    keys:["Alt","0233"],  result:"é",  label:"e acute"           },
  { os:"windows", category:"accents",    keys:["Alt","0237"],  result:"í",  label:"i acute"           },
  { os:"windows", category:"accents",    keys:["Alt","0243"],  result:"ó",  label:"o acute"           },
  { os:"windows", category:"accents",    keys:["Alt","0250"],  result:"ú",  label:"u acute"           },
  { os:"windows", category:"accents",    keys:["Alt","0228"],  result:"ä",  label:"a umlaut"          },
  { os:"windows", category:"accents",    keys:["Alt","0235"],  result:"ë",  label:"e umlaut"          },
  { os:"windows", category:"accents",    keys:["Alt","0239"],  result:"ï",  label:"i umlaut"          },
  { os:"windows", category:"accents",    keys:["Alt","0246"],  result:"ö",  label:"o umlaut"          },
  { os:"windows", category:"accents",    keys:["Alt","0252"],  result:"ü",  label:"u umlaut"          },
  { os:"windows", category:"accents",    keys:["Alt","0241"],  result:"ñ",  label:"n tilde"           },
  { os:"windows", category:"accents",    keys:["Alt","0231"],  result:"ç",  label:"c cedilla"         },
  { os:"windows", category:"accents",    keys:["Alt","0224"],  result:"à",  label:"a grave"           },
  { os:"windows", category:"accents",    keys:["Alt","0232"],  result:"è",  label:"e grave"           },
  { os:"windows", category:"accents",    keys:["Alt","0226"],  result:"â",  label:"a circumflex"      },
  { os:"windows", category:"accents",    keys:["Alt","0234"],  result:"ê",  label:"e circumflex"      },
  { os:"windows", category:"accents",    keys:["Alt","0238"],  result:"î",  label:"i circumflex"      },
  { os:"windows", category:"accents",    keys:["Alt","0244"],  result:"ô",  label:"o circumflex"      },
  { os:"windows", category:"accents",    keys:["Alt","0251"],  result:"û",  label:"u circumflex"      },
  { os:"windows", category:"accents",    keys:["Alt","0229"],  result:"å",  label:"a ring"            },
  { os:"windows", category:"accents",    keys:["Alt","0230"],  result:"æ",  label:"ae ligature"       },
  { os:"windows", category:"accents",    keys:["Alt","0223"],  result:"ß",  label:"Sharp S"           },
  { os:"windows", category:"accents",    keys:["Alt","0248"],  result:"ø",  label:"o stroke"          },
  { os:"windows", category:"accents",    keys:["Alt","0227"],  result:"ã",  label:"a tilde"           },
  { os:"windows", category:"accents",    keys:["Alt","0245"],  result:"õ",  label:"o tilde"           },
  { os:"windows", category:"accents",    keys:["Alt","0255"],  result:"ÿ",  label:"y umlaut"          },
  { os:"windows", category:"accents",    keys:["Alt","0193"],  result:"Á",  label:"A acute (upper)"   },
  { os:"windows", category:"accents",    keys:["Alt","0201"],  result:"É",  label:"E acute (upper)"   },
  { os:"windows", category:"accents",    keys:["Alt","0205"],  result:"Í",  label:"I acute (upper)"   },
  { os:"windows", category:"accents",    keys:["Alt","0211"],  result:"Ó",  label:"O acute (upper)"   },
  { os:"windows", category:"accents",    keys:["Alt","0218"],  result:"Ú",  label:"U acute (upper)"   },
  { os:"windows", category:"accents",    keys:["Alt","0220"],  result:"Ü",  label:"U umlaut (upper)"  },
  { os:"windows", category:"accents",    keys:["Alt","0209"],  result:"Ñ",  label:"N tilde (upper)"   },
  { os:"windows", category:"accents",    keys:["Alt","0196"],  result:"Ä",  label:"A umlaut (upper)"  },
  { os:"windows", category:"accents",    keys:["Alt","0214"],  result:"Ö",  label:"O umlaut (upper)"  },
  { os:"windows", category:"accents",    keys:["Alt","0199"],  result:"Ç",  label:"C cedilla (upper)" },
  // Greek letters (Windows char map)
  { os:"windows", category:"greek",      keys:["Alt","945"],   result:"α",  label:"Alpha"             },
  { os:"windows", category:"greek",      keys:["Alt","946"],   result:"β",  label:"Beta"              },
  { os:"windows", category:"greek",      keys:["Alt","947"],   result:"γ",  label:"Gamma"             },
  { os:"windows", category:"greek",      keys:["Alt","948"],   result:"δ",  label:"Delta"             },
  { os:"windows", category:"greek",      keys:["Alt","956"],   result:"μ",  label:"Mu / Micro"        },
  { os:"windows", category:"greek",      keys:["Alt","960"],   result:"π",  label:"Pi"                },
  { os:"windows", category:"greek",      keys:["Alt","963"],   result:"σ",  label:"Sigma"             },
  { os:"windows", category:"greek",      keys:["Alt","969"],   result:"ω",  label:"Omega"             },
];

// ─── WINDOWS — Ctrl+Alt (AltGr equivalents — International keyboard) ─────────
const winCtrlAlt: KeyCombo[] = [
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","E"],  result:"€",  label:"Euro (Intl kbd)", note:"Works on many European layouts" },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","A"],  result:"ä",  label:"a umlaut (DE)",   note:"German QWERTZ layout"           },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","O"],  result:"ö",  label:"o umlaut (DE)",   note:"German QWERTZ layout"           },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","U"],  result:"ü",  label:"u umlaut (DE)",   note:"German QWERTZ layout"           },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","N"],  result:"ñ",  label:"n tilde (ES)",    note:"Spanish layout"                 },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","2"],  result:"@",  label:"At sign (EU kbd)",note:"Many European layouts"          },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","Q"],  result:"@",  label:"At sign (DE)",    note:"German QWERTZ layout"           },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","<"],  result:"\\", label:"Backslash (DE)",  note:"German QWERTZ layout"           },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","7"],  result:"{",  label:"Lft brace (DE)",  note:"German QWERTZ layout"           },
  { os:"windows", category:"ctrl-alt",   keys:["Ctrl","Alt","0"],  result:"}",  label:"Rgt brace (DE)",  note:"German QWERTZ layout"           },
];

export const osShortcutsData: KeyCombo[] = [...macOption, ...winAlt, ...winCtrlAlt];

// Derived unique categories per OS
export const macCategories = [
  { id: "symbols",     label: "Symbols",     icon: "©" },
  { id: "math",        label: "Math",        icon: "∑" },
  { id: "currency",    label: "Currency",    icon: "€" },
  { id: "punctuation", label: "Punctuation", icon: "—" },
  { id: "accents",     label: "Accents",     icon: "é" },
  { id: "dead-keys",   label: "Dead Keys",   icon: "˜" },
];

export const windowsCategories = [
  { id: "symbols",     label: "Symbols",     icon: "©" },
  { id: "math",        label: "Math",        icon: "∑" },
  { id: "currency",    label: "Currency",    icon: "€" },
  { id: "punctuation", label: "Punctuation", icon: "—" },
  { id: "accents",     label: "Accents",     icon: "é" },
  { id: "greek",       label: "Greek",       icon: "α" },
  { id: "ctrl-alt",    label: "Ctrl+Alt",    icon: "⌃" },
];
