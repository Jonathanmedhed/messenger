const smileysAndEmotionEmojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "😗",
  "😙",
  "😚",
  "☺️",
  "🙂",
  "🤗",
  "🤩",
  "🤔",
  "🤨",
  "😐",
  "😑",
  "😶",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "🤐",
  "😯",
  "😪",
  "😫",
  "😴",
  "😌",
  "😛",
  "😜",
  "😝",
  "🤤",
  "😒",
  "😓",
  "😔",
  "😕",
  "🙃",
  "🤑",
  "😲",
  "☹️",
  "🙁",
  "😖",
  "😞",
  "😟",
  "😤",
  "😢",
  "😭",
  "😦",
  "😧",
  "😨",
  "😩",
  "🤯",
  "😬",
  "😰",
  "😱",
  "😳",
  "🤪",
  "😵",
  "😡",
  "😠",
  "🤬",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "😇",
  "🥳",
  "🥺",
  "🤠",
  "🤡",
  "🤥",
  "🤫",
  "🤭",
  "🧐",
  "🤓",
  "😈",
  "👿",
  "👹",
  "👺",
  "💀",
  "☠️",
  "👻",
  "👽",
  "👾",
  "🤖",
  "💩",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
];

const peopleAndBodyEmojis = [
  "👶",
  "👧",
  "🧒",
  "👦",
  "👩",
  "🧑",
  "👨",
  "👩‍🦱",
  "👨‍🦱",
  "👩‍🦰",
  "👨‍🦰",
  "👱‍♀️",
  "👱‍♂️",
  "👩‍🦳",
  "👨‍🦳",
  "👩‍🦲",
  "👨‍🦲",
  "🧔",
  "👵",
  "👴",
  "👲",
  "👳‍♀️",
  "👳‍♂️",
  "🧕",
  "👮‍♀️",
  "👮‍♂️",
  "👷‍♀️",
  "👷‍♂️",
  "💂‍♀️",
  "💂‍♂️",
  "🕵️‍♀️",
  "🕵️‍♂️",
  "👩‍⚕️",
  "👨‍⚕️",
  "👩‍🌾",
  "👨‍🌾",
  "👩‍🍳",
  "👨‍🍳",
  "👩‍🎓",
  "👨‍🎓",
  "👩‍🎤",
  "👨‍🎤",
  "👩‍🏫",
  "👨‍🏫",
  "👩‍🏭",
  "👨‍🏭",
  "👩‍💻",
  "👨‍💻",
  "👩‍💼",
  "👨‍💼",
  "👩‍🔧",
  "👨‍🔧",
  "👩‍🔬",
  "👨‍🔬",
  "👩‍🎨",
  "👨‍🎨",
  "👩‍🚒",
  "👨‍🚒",
  "👩‍✈️",
  "👨‍✈️",
  "👩‍🚀",
  "👨‍🚀",
  "👩‍⚖️",
  "👨‍⚖️",
  "👰",
  "🤵",
  "👸",
  "🤴",
  "🤶",
  "🎅",
  "🧙‍♀️",
  "🧙‍♂️",
  "🧝‍♀️",
  "🧝‍♂️",
  "🧛‍♀️",
  "🧛‍♂️",
  "🧟‍♀️",
  "🧟‍♂️",
  "🧞‍♀️",
  "🧞‍♂️",
  "🧜‍♀️",
  "🧜‍♂️",
  "🧚‍♀️",
  "🧚‍♂️",
  "👼",
  "🤰",
  "🤱",
  "🙇‍♀️",
  "🙇‍♂️",
  "💁‍♀️",
  "💁‍♂️",
  "🙅‍♀️",
  "🙅‍♂️",
  "🙆‍♀️",
  "🙆‍♂️",
  "🙋‍♀️",
  "🙋‍♂️",
  "🤦‍♀️",
  "🤦‍♂️",
  "🤷‍♀️",
  "🤷‍♂️",
  "🙎‍♀️",
  "🙎‍♂️",
  "🙍‍♀️",
  "🙍‍♂️",
  "💇‍♀️",
  "💇‍♂️",
  "💆‍♀️",
  "💆‍♂️",
  "🧖‍♀️",
  "🧖‍♂️",
  "💅",
  "🤳",
  "💃",
  "🕺",
  "👯‍♀️",
  "👯‍♂️",
  "🕴",
  "👩‍🦽",
  "👨‍🦽",
  "👩‍🦼",
  "👨‍🦼",
  "🚶‍♀️",
  "🚶‍♂️",
  "🏃‍♀️",
  "🏃‍♂️",
  "👫",
  "👭",
  "👬",
  "💑",
  "👩‍❤️‍👨",
  "👩‍❤️‍👩",
  "👨‍❤️‍👨",
  "💏",
  "👩‍❤️‍💋‍👨",
  "👩‍❤️‍💋‍👩",
  "👨‍❤️‍💋‍👨",
  "👪",
  "👨‍👩‍👦",
  "👨‍👩‍👧",
  "👨‍👩‍👧‍👦",
  "👨‍👩‍👦‍👦",
  "👨‍👩‍👧‍👧",
  "👩‍👩‍👦",
  "👩‍👩‍👧",
  "👩‍👩‍👧‍👦",
  "👩‍👩‍👦‍👦",
  "👩‍👩‍👧‍👧",
  "👨‍👨‍👦",
  "👨‍👨‍👧",
  "👨‍👨‍👧‍👦",
  "👨‍👨‍👦‍👦",
  "👨‍👨‍👧‍👧",
  "👩‍👦",
  "👩‍👧",
  "👩‍👧‍👦",
  "👩‍👦‍👦",
  "👩‍👧‍👧",
  "👨‍👦",
  "👨‍👧",
  "👨‍👧‍👦",
  "👨‍👦‍👦",
  "👨‍👧‍👧",
  "🧶",
  "🧵",
  "🧥",
  "👚",
  "👕",
  "👖",
  "👔",
  "👗",
  "👙",
  "👘",
  "👠",
  "👡",
  "👢",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "🧦",
  "🧤",
  "🧣",
  "🎩",
  "🧢",
  "👒",
  "🎓",
  "⛑",
  "👑",
  "👝",
  "👛",
  "👜",
  "💼",
  "🎒",
  "👓",
  "🕶",
  "🥽",
  "🥼",
  "🌂",
  "🧳",
];

const animalsAndNatureEmojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐽",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🕷",
  "🕸",
  "🦂",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🐘",
  "🦛",
  "🦏",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐃",
  "🐂",
  "🐄",
  "🐎",
  "🐖",
  "🐏",
  "🐑",
  "🐐",
  "🦌",
  "🐕",
  "🐩",
  "🐈",
  "🐓",
  "🦃",
  "🕊",
  "🐇",
  "🐁",
  "🐀",
  "🐿",
  "🦔",
  "🐾",
  "🐉",
  "🐲",
  "🌵",
  "🎄",
  "🌲",
  "🌳",
  "🌴",
  "🌱",
  "🌿",
  "☘️",
  "🍀",
  "🎍",
  "🎋",
  "🍃",
  "🍂",
  "🍁",
  "🍄",
  "🌾",
  "💐",
  "🌷",
  "🌹",
  "🥀",
  "🌺",
  "🌸",
  "🌼",
  "🌻",
  "🌞",
  "🌝",
  "🌛",
  "🌜",
  "🌚",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌙",
  "🌎",
  "🌍",
  "🌏",
  "🪐",
  "💫",
  "⭐",
  "🌟",
  "✨",
  "⚡",
  "☄️",
  "💥",
  "🔥",
  "🌪",
  "🌈",
  "☀️",
  "🌤",
  "⛅",
  "🌥",
  "☁️",
  "🌦",
  "🌧",
  "⛈",
  "🌩",
  "🌨",
  "❄️",
  "☃️",
  "⛄",
  "🌬",
  "💨",
  "💧",
  "💦",
  "☔",
  "☂️",
  "🌊",
  "🌫",
];

const foodAndDrinkEmojis = [
  "🍏",
  "🍎",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🫐",
  "🍈",
  "🍒",
  "🍑",
  "🥭",
  "🍍",
  "🥥",
  "🥝",
  "🍅",
  "🍆",
  "🥑",
  "🥦",
  "🥬",
  "🥒",
  "🌶",
  "🫑",
  "🌽",
  "🥕",
  "🫒",
  "🧄",
  "🧅",
  "🥔",
  "🍠",
  "🥐",
  "🥯",
  "🍞",
  "🥖",
  "🥨",
  "🧀",
  "🥚",
  "🍳",
  "🥞",
  "🧇",
  "🥓",
  "🥩",
  "🍗",
  "🍖",
  "🦴",
  "🌭",
  "🍔",
  "🍟",
  "🍕",
  "🌮",
  "🌯",
  "🫔",
  "🥙",
  "🧆",
  "🥪",
  "🥗",
  "🍝",
  "🍜",
  "🍲",
  "🍛",
  "🍣",
  "🍱",
  "🥟",
  "🦪",
  "🍤",
  "🍙",
  "🍚",
  "🍘",
  "🍥",
  "🥠",
  "🥮",
  "🍢",
  "🍡",
  "🍧",
  "🍨",
  "🍦",
  "🥧",
  "🧁",
  "🍰",
  "🎂",
  "🍮",
  "🍭",
  "🍬",
  "🍫",
  "🍿",
  "🧋",
  "🍩",
  "🍪",
  "🌰",
  "🥜",
  "🍯",
  "🥛",
  "🍼",
  "🫖",
  "☕",
  "🍵",
  "🧃",
  "🥤",
  "🧋",
  "🍶",
  "🍺",
  "🍻",
  "🥂",
  "🍷",
  "🥃",
  "🍸",
  "🍹",
  "🧉",
  "🍾",
  "🧊",
  "🥄",
  "🍴",
  "🍽",
  "🥢",
  "🧂",
];

const travelAndPlacesEmojis = [
  "🚗",
  "🚕",
  "🚙",
  "🚌",
  "🚎",
  "🏎",
  "🚓",
  "🚑",
  "🚒",
  "🚐",
  "🚚",
  "🚛",
  "🚜",
  "🛴",
  "🚲",
  "🛵",
  "🏍",
  "🛺",
  "🚨",
  "🚔",
  "🚍",
  "🚘",
  "🚖",
  "🚡",
  "🚠",
  "🚟",
  "🚃",
  "🚋",
  "🚞",
  "🚝",
  "🚄",
  "🚅",
  "🚈",
  "🚂",
  "🚆",
  "🚇",
  "🚊",
  "🚉",
  "✈️",
  "🛫",
  "🛬",
  "🛩",
  "💺",
  "🛰",
  "🚀",
  "🛸",
  "🚁",
  "🛶",
  "⛵",
  "🚤",
  "🛥",
  "🛳",
  "⛴",
  "🚢",
  "⚓",
  "⛽",
  "🚧",
  "🚦",
  "🚥",
  "🚏",
  "🗺",
  "🗿",
  "🗽",
  "🗼",
  "🏰",
  "🏯",
  "🏟",
  "🎡",
  "🎢",
  "🎠",
  "⛲",
  "⛱",
  "🏖",
  "🏝",
  "🏜",
  "🌋",
  "⛰",
  "🏔",
  "🗻",
  "🏕",
  "⛺",
  "🏠",
  "🏡",
  "🏘",
  "🏚",
  "🏗",
  "🏭",
  "🏢",
  "🏬",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏨",
  "🏩",
  "🏪",
  "🏫",
  "🏩",
  "🏛",
  "⛪",
  "🕌",
  "🛕",
  "🕍",
  "🕋",
  "⛩",
  "🛤",
  "🛣",
  "🗾",
  "🎑",
  "🏞",
  "🌅",
  "🌄",
  "🌠",
  "🎇",
  "🎆",
  "🌇",
  "🌆",
  "🏙",
  "🌃",
  "🌌",
  "🌉",
  "🌁",
];

const activitiesEmojis = [
  "⚽",
  "🏀",
  "🏈",
  "⚾",
  "🥎",
  "🎾",
  "🏐",
  "🏉",
  "🎱",
  "🏓",
  "🏸",
  "🥅",
  "🏒",
  "🏑",
  "🏏",
  "⛳",
  "🏹",
  "🎣",
  "🤿",
  "🥊",
  "🥋",
  "🎽",
  "🛹",
  "🛷",
  "⛸",
  "🥌",
  "🎿",
  "⛷",
  "🏂",
  "🏋️‍♀️",
  "🏋️‍♂️",
  "🤼‍♀️",
  "🤼‍♂️",
  "🤸‍♀️",
  "🤸‍♂️",
  "⛹️‍♀️",
  "⛹️‍♂️",
  "🤺",
  "🤾‍♀️",
  "🤾‍♂️",
  "🏌️‍♀️",
  "🏌️‍♂️",
  "🏇",
  "🧘‍♀️",
  "🧘‍♂️",
  "🏄‍♀️",
  "🏄‍♂️",
  "🏊‍♀️",
  "🏊‍♂️",
  "🤽‍♀️",
  "🤽‍♂️",
  "🚣‍♀️",
  "🚣‍♂️",
  "🧗‍♀️",
  "🧗‍♂️",
  "🚵‍♀️",
  "🚵‍♂️",
  "🚴‍♀️",
  "🚴‍♂️",
  "🏆",
  "🥇",
  "🥈",
  "🥉",
  "🏅",
  "🎖",
  "🏵",
  "🎗",
  "🎫",
  "🎟",
  "🎪",
  "🤹‍♀️",
  "🤹‍♂️",
  "🎭",
  "🩰",
  "🎨",
  "🎬",
  "🎤",
  "🎧",
  "🎼",
  "🎹",
  "🥁",
  "🪘",
  "🎷",
  "🎺",
  "🎸",
  "🪕",
  "🎻",
  "🎲",
  "♟",
  "🎯",
  "🎳",
  "🎮",
  "🎰",
  "🧩",
  "🧸",
  "🪅",
  "🪆",
  "♠️",
  "♥️",
  "♦️",
  "♣️",
  "🃏",
  "🀄",
  "🎴",
];

const objectsEmojis = [
  "⌚",
  "📱",
  "📲",
  "💻",
  "⌨️",
  "💽",
  "💾",
  "💿",
  "📀",
  "📼",
  "📷",
  "📸",
  "📹",
  "📞",
  "☎️",
  "📟",
  "📠",
  "📺",
  "📻",
  "⏰",
  "⌛",
  "⏳",
  "📡",
  "🔋",
  "🔌",
  "💡",
  "🔦",
  "🪔",
  "🧯",
  "🛢",
  "💸",
  "💵",
  "💴",
  "💶",
  "💷",
  "💰",
  "💳",
  "🧾",
  "💎",
  "⚖️",
  "🔧",
  "🔨",
  "🔩",
  "⚙️",
  "🔗",
  "🧰",
  "🧲",
  "🪛",
  "🪚",
  "🪓",
  "🔫",
  "💣",
  "🧨",
  "🪃",
  "🔪",
  "⚔️",
  "🚪",
  "🚽",
  "🚿",
  "🛁",
  "🪠",
  "🪣",
  "🧴",
  "🧷",
  "🧹",
  "🧺",
  "🧻",
  "🪥",
  "🧼",
  "🪒",
  "🧽",
  "🧯",
  "🛒",
  "🚬",
  "⚰️",
  "🪦",
  "⚱️",
  "🗿",
  "🪧",
  "🪪",
  "🪫",
  "🪬",
  "🪭",
  "🪮",
  "🪯",
  "🪰",
  "🪱",
  "🪲",
  "🪴",
  "🪵",
  "🪶",
  "🪷",
  "🪸",
  "🪹",
  "🪺",
  "🪻",
  "🪼",
  "🪽",
  "🪿",
  "🫀",
  "🫁",
  "🫂",
  "🫃",
  "🫄",
  "🫅",
  "🫎",
  "🫏",
  "🫐",
  "🫑",
  "🫒",
  "🫓",
  "🫔",
  "🫕",
  "🫖",
  "🫗",
  "🫘",
  "🫙",
  "🫚",
  "🫛",
  "🫦",
  "🫧",
];

const symbolsEmojis = [
  "❤️",
  "💔",
  "❣️",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "☮️",
  "✝️",
  "☪️",
  "🕉",
  "☸️",
  "✡️",
  "🔯",
  "🕎",
  "☯️",
  "☦️",
  "🛐",
  "⛎",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "🆔",
  "⚛️",
  "🉑",
  "☢️",
  "☣️",
  "📴",
  "📳",
  "🈶",
  "🈚",
  "🈸",
  "🈺",
  "🈷️",
  "✴️",
  "🆚",
  "💮",
  "🉐",
  "㊙️",
  "㊗️",
  "🈴",
  "🈵",
  "🈹",
  "🈲",
  "🅰️",
  "🅱️",
  "🆎",
  "🆑",
  "🅾️",
  "🆘",
  "❌",
  "⭕",
  "🛑",
  "⛔",
  "📛",
  "🚫",
  "💯",
  "💢",
  "♨️",
  "🚷",
  "🚯",
  "🚳",
  "🚱",
  "🔞",
  "📵",
  "🚭",
  "❗",
  "❕",
  "❓",
  "❔",
  "‼️",
  "⁉️",
  "🔅",
  "🔆",
  "〽️",
  "⚠️",
  "🚸",
  "🔱",
  "⚜️",
  "🔰",
  "♻️",
  "✅",
  "🈯",
  "💹",
  "❇️",
  "✳️",
  "❎",
  "🌐",
  "💠",
  "Ⓜ️",
  "🌀",
  "💤",
  "🏧",
  "🚾",
  "♿",
  "🅿️",
  "🛗",
  "🈳",
  "🈂️",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "🚹",
  "🚺",
  "🚼",
  "⚧",
  "🚻",
  "🚮",
  "🎦",
  "📶",
  "🈁",
  "🔣",
  "ℹ️",
  "🔤",
  "🔡",
  "🔠",
  "🆖",
  "🆗",
  "🆙",
  "🆒",
  "🆕",
  "🆓",
  "0️⃣",
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
  "🔢",
  "#️⃣",
  "*️⃣",
  "⏏️",
  "▶️",
  "⏸",
  "⏯",
  "⏹",
  "⏺",
  "⏭",
  "⏮",
  "⏩",
  "⏪",
  "⏫",
  "⏬",
  "◀️",
  "🔼",
  "🔽",
  "➡️",
  "⬅️",
  "⬆️",
  "⬇️",
  "↗️",
  "↘️",
  "↙️",
  "↖️",
  "↕️",
  "↔️",
  "↪️",
  "↩️",
  "⤴️",
  "⤵️",
  "🔀",
  "🔁",
  "🔂",
  "🔄",
  "🔃",
  "🎵",
  "🎶",
  "➕",
  "➖",
  "➗",
  "✖️",
  "♾️",
  "💲",
  "💱",
  "™️",
  "©️",
  "®️",
  "〰️",
  "➰",
  "➿",
  "🔚",
  "🔙",
  "🔛",
  "🔝",
  "🔜",
  "✔️",
  "☑️",
  "🔘",
  "⚪",
  "⚫",
  "🔴",
  "🔵",
  "🔺",
  "🔻",
  "🔸",
  "🔹",
  "🔶",
  "🔷",
  "🔳",
  "🔲",
  "▪️",
  "▫️",
  "◾",
  "◽",
  "◼️",
  "◻️",
  "⬛",
  "⬜",
  "🔈",
  "🔇",
  "🔉",
  "🔊",
  "🔔",
  "🔕",
  "📣",
  "📢",
  "👁‍🗨",
  "💬",
  "💭",
  "🗯",
  "♠️",
  "♣️",
  "♥️",
  "♦️",
  "🃏",
  "🎴",
  "🀄",
  "🕐",
  "🕑",
  "🕒",
  "🕓",
  "🕔",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕛",
  "🕜",
  "🕝",
  "🕞",
  "🕟",
  "🕠",
  "🕡",
  "🕢",
  "🕣",
  "🕤",
  "🕥",
  "🕦",
  "🕧",
];

const flagsEmojis = [
  "🏳️",
  "🏴",
  "🏁",
  "🚩",
  "🏳️‍🌈",
  "🏳️‍⚧️",
  "🇦🇫",
  "🇦🇱",
  "🇩🇿",
  "🇦🇸",
  "🇦🇩",
  "🇦🇴",
  "🇦🇮",
  "🇦🇶",
  "🇦🇬",
  "🇦🇷",
  "🇦🇲",
  "🇦🇼",
  "🇦🇺",
  "🇦🇹",
  "🇦🇿",
  "🇧🇸",
  "🇧🇭",
  "🇧🇩",
  "🇧🇧",
  "🇧🇾",
  "🇧🇪",
  "🇧🇿",
  "🇧🇯",
  "🇧🇲",
  "🇧🇹",
  "🇧🇴",
  "🇧🇦",
  "🇧🇼",
  "🇧🇷",
  "🇧🇳",
  "🇧🇬",
  "🇧🇫",
  "🇧🇮",
  "🇨🇻",
  "🇰🇭",
  "🇨🇲",
  "🇨🇦",
  "🇨🇫",
  "🇹🇩",
  "🇨🇱",
  "🇨🇳",
  "🇨🇴",
  "🇰🇲",
  "🇨🇬",
  "🇨🇩",
  "🇨🇷",
  "🇨🇮",
  "🇭🇷",
  "🇨🇺",
  "🇨🇾",
  "🇨🇿",
  "🇩🇰",
  "🇩🇯",
  "🇩🇲",
  "🇩🇴",
  "🇪🇨",
  "🇪🇬",
  "🇸🇻",
  "🇬🇶",
  "🇪🇷",
  "🇪🇪",
  "🇸🇿",
  "🇪🇹",
  "🇫🇯",
  "🇫🇮",
  "🇫🇷",
  "🇬🇫",
  "🇵🇫",
  "🇬🇦",
  "🇬🇲",
  "🇬🇪",
  "🇩🇪",
  "🇬🇭",
  "🇬🇮",
  "🇬🇷",
  "🇬🇱",
  "🇬🇩",
  "🇬🇺",
  "🇬🇹",
  "🇬🇳",
  "🇬🇼",
  "🇬🇾",
  "🇭🇹",
  "🇭🇳",
  "🇭🇰",
  "🇭🇺",
  "🇮🇸",
  "🇮🇳",
  "🇮🇩",
  "🇮🇷",
  "🇮🇶",
  "🇮🇪",
  "🇮🇱",
  "🇮🇹",
  "🇯🇲",
  "🇯🇵",
  "🇯🇴",
  "🇰🇿",
  "🇰🇪",
  "🇰🇮",
  "🇰🇵",
  "🇰🇷",
  "🇰🇼",
  "🇰🇬",
  "🇱🇦",
  "🇱🇻",
  "🇱🇧",
  "🇱🇸",
  "🇱🇷",
  "🇱🇾",
  "🇱🇮",
  "🇱🇹",
  "🇱🇺",
  "🇲🇴",
  "🇲🇰",
  "🇲🇬",
  "🇲🇼",
  "🇲🇾",
  "🇲🇻",
  "🇲🇱",
  "🇲🇹",
  "🇲🇭",
  "🇲🇶",
  "🇲🇷",
  "🇲🇺",
  "🇲🇽",
  "🇫🇲",
  "🇲🇩",
  "🇲🇨",
  "🇲🇳",
  "🇲🇪",
  "🇲🇸",
  "🇲🇦",
  "🇲🇿",
  "🇲🇲",
  "🇳🇦",
  "🇳🇷",
  "🇳🇵",
  "🇳🇱",
  "🇳🇨",
  "🇳🇿",
  "🇳🇮",
  "🇳🇪",
  "🇳🇬",
  "🇳🇺",
  "🇳🇫",
  "🇲🇵",
  "🇳🇴",
  "🇴🇲",
  "🇵🇰",
  "🇵🇼",
  "🇵🇸",
  "🇵🇦",
  "🇵🇬",
  "🇵🇾",
  "🇵🇪",
  "🇵🇭",
  "🇵🇱",
  "🇵🇹",
  "🇵🇷",
  "🇶🇦",
  "🇷🇴",
  "🇷🇺",
  "🇷🇼",
  "🇼🇸",
  "🇸🇲",
  "🇸🇦",
  "🇸🇳",
  "🇷🇸",
  "🇸🇨",
  "🇸🇱",
  "🇸🇬",
  "🇸🇰",
  "🇸🇮",
  "🇸🇧",
  "🇸🇴",
  "🇿🇦",
  "🇪🇸",
  "🇱🇰",
  "🇸🇩",
  "🇸🇷",
  "🇸🇪",
  "🇨🇭",
  "🇸🇾",
  "🇹🇼",
  "🇹🇯",
  "🇹🇿",
  "🇹🇭",
  "🇹🇱",
  "🇹🇬",
  "🇹🇴",
  "🇹🇹",
  "🇹🇳",
  "🇹🇷",
  "🇹🇲",
  "🇹🇻",
  "🇺🇬",
  "🇺🇦",
  "🇦🇪",
  "🇬🇧",
  "🇺🇸",
  "🇺🇾",
  "🇺🇿",
  "🇻🇺",
  "🇻🇦",
  "🇻🇪",
  "🇻🇳",
  "🇾🇪",
  "🇿🇲",
  "🇿🇼",
];

export const allEmojis = [
  { label: "Smileys & Emotion", list: smileysAndEmotionEmojis },
  { label: "People & Body", list: peopleAndBodyEmojis },
  { label: "Animals & Nature", list: animalsAndNatureEmojis },
  { label: "Food & Drink", list: foodAndDrinkEmojis },
  { label: "Travel & Places", list: travelAndPlacesEmojis },
  { label: "Activities", list: activitiesEmojis },
  { label: "Objects", list: objectsEmojis },
  { label: "Symbols", list: symbolsEmojis },
  { label: "Flags", list: flagsEmojis },
];
