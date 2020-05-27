/* eslint-disable no-unused-vars */

/**
* Wikipedia: https://wiki.rage.mp/index.php?title=Vehicle_Colors
*
* ![Vehicle_color_ids](https://wiki.rage.mp/images/thumb/9/95/Vehicle_color_ids.jpg/800px-Vehicle_color_ids.jpg)
*/

const vehicleColors = {
/** ID: 0 */
    METALLIC_BLACK: {
        ID: 0,
        HEX: '#0d1116',
        RGB: [13, 17, 22]
    },
    /** ID: 1 */
    METALLIC_GRAPHITE_BLACK: {
        ID: 1,
        HEX: '#1c1d21',
        RGB: [28, 29, 33]
    },
    /** ID: 2 */
    METALLIC_BLACK_STEAL: {
        ID: 2,
        HEX: '#32383d',
        RGB: [50, 56, 61]
    },
    /** ID: 3 */
    METALLIC_DARK_SILVER: {
        ID: 3,
        HEX: '#454b4f',
        RGB: [69, 75, 79]
    },
    /** ID: 4 */
    METALLIC_SILVER: {
        ID: 4,
        HEX: '#999da0',
        RGB: [153, 157, 160]
    },
    /** ID: 5 */
    METALLIC_BLUE_SILVER: {
        ID: 5,
        HEX: '#c2c4c6',
        RGB: [194, 196, 198]
    },
    /** ID: 6 */
    METALLIC_STEEL_GRAY: {
        ID: 6,
        HEX: '#979a97',
        RGB: [151, 154, 151]
    },
    /** ID: 7 */
    METALLIC_SHADOW_SILVER: {
        ID: 7,
        HEX: '#637380',
        RGB: [99, 115, 128]
    },
    /** ID: 8 */
    METALLIC_STONE_SILVER: {
        ID: 8,
        HEX: '#63625c',
        RGB: [99, 98, 92]
    },
    /** ID: 9 */
    METALLIC_MIDNIGHT_SILVER: {
        ID: 9,
        HEX: '#3c3f47',
        RGB: [60, 63, 71]
    },
    /** ID: 10 */
    METALLIC_GUN_METAL: {
        ID: 10,
        HEX: '#444e54',
        RGB: [68, 78, 84]
    },
    /** ID: 11 */
    METALLIC_ANTHRACITE_GREY: {
        ID: 11,
        HEX: '#1d2129',
        RGB: [29, 33, 41]
    },
    /** ID: 12 */
    MATTE_BLACK: {
        ID: 12,
        HEX: '#13181f',
        RGB: [19, 24, 31]
    },
    /** ID: 13 */
    MATTE_GRAY: {
        ID: 13,
        HEX: '#26282a',
        RGB: [38, 40, 42]
    },
    /** ID: 14 */
    MATTE_LIGHT_GREY: {
        ID: 14,
        HEX: '#515554',
        RGB: [81, 85, 84]
    },
    /** ID: 15 */
    UTIL_BLACK: {
        ID: 15,
        HEX: '#151921',
        RGB: [21, 25, 33]
    },
    /** ID: 16 */
    UTIL_BLACK_POLY: {
        ID: 16,
        HEX: '#1e2429',
        RGB: [30, 36, 41]
    },
    /** ID: 17 */
    UTIL_DARK_SILVER: {
        ID: 17,
        HEX: '#333a3c',
        RGB: [51, 58, 60]
    },
    /** ID: 18 */
    UTIL_SILVER: {
        ID: 18,
        HEX: '#8c9095',
        RGB: [140, 144, 149]
    },
    /** ID: 19 */
    UTIL_GUN_METAL: {
        ID: 19,
        HEX: '#39434d',
        RGB: [57, 67, 77]
    },
    /** ID: 20 */
    UTIL_SHADOW_SILVER: {
        ID: 20,
        HEX: '#506272',
        RGB: [80, 98, 114]
    },
    /** ID: 21 */
    WORN_BLACK: {
        ID: 21,
        HEX: '#1e232f',
        RGB: [30, 35, 47]
    },
    /** ID: 22 */
    WORN_GRAPHITE: {
        ID: 22,
        HEX: '#363a3f',
        RGB: [54, 58, 63]
    },
    /** ID: 23 */
    WORN_SILVER_GREY: {
        ID: 23,
        HEX: '#a0a199',
        RGB: [160, 161, 153]
    },
    /** ID: 24 */
    WORN_SILVER: {
        ID: 24,
        HEX: '#d3d3d3',
        RGB: [211, 211, 211]
    },
    /** ID: 25 */
    WORN_BLUE_SILVER: {
        ID: 25,
        HEX: '#b7bfca',
        RGB: [183, 191, 202]
    },
    /** ID: 26 */
    WORN_SHADOW_SILVER: {
        ID: 26,
        HEX: '#778794',
        RGB: [119, 135, 148]
    },
    /** ID: 27 */
    METALLIC_RED: {
        ID: 27,
        HEX: '#c00e1a',
        RGB: [192, 14, 26]
    },
    /** ID: 28 */
    METALLIC_TORINO_RED: {
        ID: 28,
        HEX: '#da1918',
        RGB: [218, 25, 24]
    },
    /** ID: 29 */
    METALLIC_FORMULA_RED: {
        ID: 29,
        HEX: '#b6111b',
        RGB: [182, 17, 27]
    },
    /** ID: 30 */
    METALLIC_BLAZE_RED: {
        ID: 30,
        HEX: '#a51e23',
        RGB: [165, 30, 35]
    },
    /** ID: 31 */
    METALLIC_GRACEFUL_RED: {
        ID: 31,
        HEX: '#7b1a22',
        RGB: [123, 26, 34]
    },
    /** ID: 32 */
    METALLIC_GARNET_RED: {
        ID: 32,
        HEX: '#8e1b1f',
        RGB: [142, 27, 31]
    },
    /** ID: 33 */
    METALLIC_DESERT_RED: {
        ID: 33,
        HEX: '#6f1818',
        RGB: [111, 24, 24]
    },
    /** ID: 34 */
    METALLIC_CABERNET_RED: {
        ID: 34,
        HEX: '#49111d',
        RGB: [73, 17, 29]
    },
    /** ID: 35 */
    METALLIC_CANDY_RED: {
        ID: 35,
        HEX: '#b60f25',
        RGB: [182, 15, 37]
    },
    /** ID: 36 */
    METALLIC_SUNRISE_ORANGE: {
        ID: 36,
        HEX: '#d44a17',
        RGB: [212, 74, 23]
    },
    /** ID: 37 */
    METALLIC_CLASSIC_GOLD: {
        ID: 37,
        HEX: '#c2944f',
        RGB: [194, 148, 79]
    },
    /** ID: 38 */
    METALLIC_ORANGE: {
        ID: 38,
        HEX: '#f78616',
        RGB: [247, 134, 22]
    },
    /** ID: 39 */
    MATTE_RED: {
        ID: 39,
        HEX: '#cf1f21',
        RGB: [207, 31, 33]
    },
    /** ID: 40 */
    MATTE_DARK_RED: {
        ID: 40,
        HEX: '#732021',
        RGB: [115, 32, 33]
    },
    /** ID: 41 */
    MATTE_ORANGE: {
        ID: 41,
        HEX: '#f27d20',
        RGB: [242, 125, 32]
    },
    /** ID: 42 */
    MATTE_YELLOW: {
        ID: 42,
        HEX: '#ffc91f',
        RGB: [255, 201, 31]
    },
    /** ID: 43 */
    UTIL_RED: {
        ID: 43,
        HEX: '#9c1016',
        RGB: [156, 16, 22]
    },
    /** ID: 44 */
    UTIL_BRIGHT_RED: {
        ID: 44,
        HEX: '#de0f18',
        RGB: [222, 15, 24]
    },
    /** ID: 45 */
    UTIL_GARNET_RED: {
        ID: 45,
        HEX: '#8f1e17',
        RGB: [143, 30, 23]
    },
    /** ID: 46 */
    WORN_RED: {
        ID: 46,
        HEX: '#a94744',
        RGB: [169, 71, 68]
    },
    /** ID: 47 */
    WORN_GOLDEN_RED: {
        ID: 47,
        HEX: '#b16c51',
        RGB: [177, 108, 81]
    },
    /** ID: 48 */
    WORN_DARK_RED: {
        ID: 48,
        HEX: '#371c25',
        RGB: [55, 28, 37]
    },
    /** ID: 49 */
    METALLIC_DARK_GREEN: {
        ID: 49,
        HEX: '#132428',
        RGB: [19, 36, 40]
    },
    /** ID: 50 */
    METALLIC_RACING_GREEN: {
        ID: 50,
        HEX: '#122e2b',
        RGB: [18, 46, 43]
    },
    /** ID: 51 */
    METALLIC_SEA_GREEN: {
        ID: 51,
        HEX: '#12383c',
        RGB: [18, 56, 60]
    },
    /** ID: 52 */
    METALLIC_OLIVE_GREEN: {
        ID: 52,
        HEX: '#31423f',
        RGB: [49, 66, 63]
    },
    /** ID: 53 */
    METALLIC_GREEN: {
        ID: 53,
        HEX: '#155c2d',
        RGB: [21, 92, 45]
    },
    /** ID: 54 */
    METALLIC_GASOLINE_BLUE_GREEN: {
        ID: 54,
        HEX: '#1b6770',
        RGB: [27, 103, 112]
    },
    /** ID: 55 */
    MATTE_LIME_GREEN: {
        ID: 55,
        HEX: '#66b81f',
        RGB: [102, 184, 31]
    },
    /** ID: 56 */
    UTIL_DARK_GREEN: {
        ID: 56,
        HEX: '#22383e',
        RGB: [34, 56, 62]
    },
    /** ID: 57 */
    UTIL_GREEN: {
        ID: 57,
        HEX: '#1d5a3f',
        RGB: [29, 90, 63]
    },
    /** ID: 58 */
    WORN_DARK_GREEN: {
        ID: 58,
        HEX: '#2d423f',
        RGB: [45, 66, 63]
    },
    /** ID: 59 */
    WORN_GREEN: {
        ID: 59,
        HEX: '#45594b',
        RGB: [69, 89, 75]
    },
    /** ID: 60 */
    WORN_SEA_WASH: {
        ID: 60,
        HEX: '#65867f',
        RGB: [101, 134, 127]
    },
    /** ID: 61 */
    METALLIC_MIDNIGHT_BLUE: {
        ID: 61,
        HEX: '#222e46',
        RGB: [34, 46, 70]
    },
    /** ID: 62 */
    METALLIC_DARK_BLUE: {
        ID: 62,
        HEX: '#233155',
        RGB: [35, 49, 85]
    },
    /** ID: 63 */
    METALLIC_SAXONY_BLUE: {
        ID: 63,
        HEX: '#304c7e',
        RGB: [48, 76, 126]
    },
    /** ID: 64 */
    METALLIC_BLUE: {
        ID: 64,
        HEX: '#47578f',
        RGB: [71, 87, 143]
    },
    /** ID: 65 */
    METALLIC_MARINER_BLUE: {
        ID: 65,
        HEX: '#637ba7',
        RGB: [99, 123, 167]
    },
    /** ID: 66 */
    METALLIC_HARBOR_BLUE: {
        ID: 66,
        HEX: '#394762',
        RGB: [57, 71, 98]
    },
    /** ID: 67 */
    METALLIC_DIAMOND_BLUE: {
        ID: 67,
        HEX: '#d6e7f1',
        RGB: [214, 231, 241]
    },
    /** ID: 68 */
    METALLIC_SURF_BLUE: {
        ID: 68,
        HEX: '#76afbe',
        RGB: [118, 175, 190]
    },
    /** ID: 69 */
    METALLIC_NAUTICAL_BLUE: {
        ID: 69,
        HEX: '#345e72',
        RGB: [52, 94, 114]
    },
    /** ID: 70 */
    METALLIC_BRIGHT_BLUE: {
        ID: 70,
        HEX: '#0b9cf1',
        RGB: [11, 156, 241]
    },
    /** ID: 71 */
    METALLIC_PURPLE_BLUE: {
        ID: 71,
        HEX: '#2f2d52',
        RGB: [47, 45, 82]
    },
    /** ID: 72 */
    METALLIC_SPINNAKER_BLUE: {
        ID: 72,
        HEX: '#282c4d',
        RGB: [40, 44, 77]
    },
    /** ID: 73 */
    METALLIC_ULTRA_BLUE: {
        ID: 73,
        HEX: '#2354a1',
        RGB: [35, 84, 161]
    },
    /** ID: 74 */
    METALLIC_BRIGHT_BLUE2: {
        ID: 74,
        HEX: '#6ea3c6',
        RGB: [110, 163, 198]
    },
    /** ID: 75 */
    UTIL_DARK_BLUE: {
        ID: 75,
        HEX: '#112552',
        RGB: [17, 37, 82]
    },
    /** ID: 76 */
    UTIL_MIDNIGHT_BLUE: {
        ID: 76,
        HEX: '#1b203e',
        RGB: [27, 32, 62]
    },
    /** ID: 77 */
    UTIL_BLUE: {
        ID: 77,
        HEX: '#275190',
        RGB: [39, 81, 144]
    },
    /** ID: 78 */
    UTIL_SEA_FOAM_BLUE: {
        ID: 78,
        HEX: '#608592',
        RGB: [96, 133, 146]
    },
    /** ID: 79 */
    UTIL_LIGHTNING_BLUE: {
        ID: 79,
        HEX: '#2446a8',
        RGB: [36, 70, 168]
    },
    /** ID: 80 */
    UTIL_MAUI_BLUE_POLY: {
        ID: 80,
        HEX: '#4271e1',
        RGB: [66, 113, 225]
    },
    /** ID: 81 */
    UTIL_BRIGHT_BLUE: {
        ID: 81,
        HEX: '#3b39e0',
        RGB: [59, 57, 224]
    },
    /** ID: 82 */
    MATTE_DARK_BLUE: {
        ID: 82,
        HEX: '#1f2852',
        RGB: [31, 40, 82]
    },
    /** ID: 83 */
    MATTE_BLUE: {
        ID: 83,
        HEX: '#253aa7',
        RGB: [37, 58, 167]
    },
    /** ID: 84 */
    MATTE_MIDNIGHT_BLUE: {
        ID: 84,
        HEX: '#1c3551',
        RGB: [28, 53, 81]
    },
    /** ID: 85 */
    WORN_DARK_BLUE: {
        ID: 85,
        HEX: '#4c5f81',
        RGB: [76, 95, 129]
    },
    /** ID: 86 */
    WORN_BLUE: {
        ID: 86,
        HEX: '#58688e',
        RGB: [88, 104, 142]
    },
    /** ID: 87 */
    WORN_LIGHT_BLUE: {
        ID: 87,
        HEX: '#74b5d8',
        RGB: [116, 181, 216]
    },
    /** ID: 88 */
    METALLIC_TAXI_YELLOW: {
        ID: 88,
        HEX: '#ffcf20',
        RGB: [255, 207, 32]
    },
    /** ID: 89 */
    METALLIC_RACE_YELLOW: {
        ID: 89,
        HEX: '#fbe212',
        RGB: [251, 226, 18]
    },
    /** ID: 90 */
    METALLIC_BRONZE: {
        ID: 90,
        HEX: '#916532',
        RGB: [145, 101, 50]
    },
    /** ID: 91 */
    METALLIC_YELLOW_BIRD: {
        ID: 91,
        HEX: '#e0e13d',
        RGB: [224, 225, 61]
    },
    /** ID: 92 */
    METALLIC_LIME: {
        ID: 92,
        HEX: '#98d223',
        RGB: [152, 210, 35]
    },
    /** ID: 93 */
    METALLIC_CHAMPAGNE: {
        ID: 93,
        HEX: '#9b8c78',
        RGB: [155, 140, 120]
    },
    /** ID: 94 */
    METALLIC_PUEBLO_BEIGE: {
        ID: 94,
        HEX: '#503218',
        RGB: [80, 50, 24]
    },
    /** ID: 95 */
    METALLIC_DARK_IVORY: {
        ID: 95,
        HEX: '#473f2b',
        RGB: [71, 63, 43]
    },
    /** ID: 96 */
    METALLIC_CHOCO_BROWN: {
        ID: 96,
        HEX: '#221b19',
        RGB: [34, 27, 25]
    },
    /** ID: 97 */
    METALLIC_GOLDEN_BROWN: {
        ID: 97,
        HEX: '#653f23',
        RGB: [101, 63, 35]
    },
    /** ID: 98 */
    METALLIC_LIGHT_BROWN: {
        ID: 98,
        HEX: '#775c3e',
        RGB: [119, 92, 62]
    },
    /** ID: 99 */
    METALLIC_STRAW_BEIGE: {
        ID: 99,
        HEX: '#ac9975',
        RGB: [172, 153, 117]
    },
    /** ID: 100 */
    METALLIC_MOSS_BROWN: {
        ID: 100,
        HEX: '#6c6b4b',
        RGB: [108, 107, 75]
    },
    /** ID: 101 */
    METALLIC_BISTON_BROWN: {
        ID: 101,
        HEX: '#402e2b',
        RGB: [64, 46, 43]
    },
    /** ID: 102 */
    METALLIC_BEECHWOOD: {
        ID: 102,
        HEX: '#a4965f',
        RGB: [164, 150, 95]
    },
    /** ID: 103 */
    METALLIC_DARK_BEECHWOOD: {
        ID: 103,
        HEX: '#46231a',
        RGB: [70, 35, 26]
    },
    /** ID: 104 */
    METALLIC_CHOCO_ORANGE: {
        ID: 104,
        HEX: '#752b19',
        RGB: [117, 43, 25]
    },
    /** ID: 105 */
    METALLIC_BEACH_SAND: {
        ID: 105,
        HEX: '#bfae7b',
        RGB: [191, 174, 123]
    },
    /** ID: 106 */
    METALLIC_SUN_BLEECHED_SAND: {
        ID: 106,
        HEX: '#dfd5b2',
        RGB: [223, 213, 178]
    },
    /** ID: 107 */
    METALLIC_CREAM: {
        ID: 107,
        HEX: '#f7edd5',
        RGB: [247, 237, 213]
    },
    /** ID: 108 */
    UTIL_BROWN: {
        ID: 108,
        HEX: '#3a2a1b',
        RGB: [58, 42, 27]
    },
    /** ID: 109 */
    UTIL_MEDIUM_BROWN: {
        ID: 109,
        HEX: '#785f33',
        RGB: [120, 95, 51]
    },
    /** ID: 110 */
    UTIL_LIGHT_BROWN: {
        ID: 110,
        HEX: '#b5a079',
        RGB: [181, 160, 121]
    },
    /** ID: 111 */
    METALLIC_WHITE: {
        ID: 111,
        HEX: '#fffff6',
        RGB: [255, 255, 246]
    },
    /** ID: 112 */
    METALLIC_FROST_WHITE: {
        ID: 112,
        HEX: '#eaeaea',
        RGB: [234, 234, 234]
    },
    /** ID: 113 */
    WORN_HONEY_BEIGE: {
        ID: 113,
        HEX: '#b0ab94',
        RGB: [176, 171, 148]
    },
    /** ID: 114 */
    WORN_BROWN: {
        ID: 114,
        HEX: '#453831',
        RGB: [69, 56, 49]
    },
    /** ID: 115 */
    WORN_DARK_BROWN: {
        ID: 115,
        HEX: '#2a282b',
        RGB: [42, 40, 43]
    },
    /** ID: 116 */
    WORN_STRAW_BEIGE: {
        ID: 116,
        HEX: '#726c57',
        RGB: [114, 108, 87]
    },
    /** ID: 117 */
    BRUSHED_STEEL: {
        ID: 117,
        HEX: '#6a747c',
        RGB: [106, 116, 124]
    },
    /** ID: 118 */
    BRUSHED_BLACK_STEEL: {
        ID: 118,
        HEX: '#354158',
        RGB: [53, 65, 88]
    },
    /** ID: 119 */
    BRUSHED_ALUMINIUM: {
        ID: 119,
        HEX: '#9ba0a8',
        RGB: [155, 160, 168]
    },
    /** ID: 120 */
    CHROME: {
        ID: 120,
        HEX: '#5870a1',
        RGB: [88, 112, 161]
    },
    /** ID: 121 */
    WORN_OFF_WHITE: {
        ID: 121,
        HEX: '#eae6de',
        RGB: [234, 230, 222]
    },
    /** ID: 122 */
    UTIL_OFF_WHITE: {
        ID: 122,
        HEX: '#dfddd0',
        RGB: [223, 221, 208]
    },
    /** ID: 123 */
    WORN_ORANGE: {
        ID: 123,
        HEX: '#f2ad2e',
        RGB: [242, 173, 46]
    },
    /** ID: 124 */
    WORN_LIGHT_ORANGE: {
        ID: 124,
        HEX: '#f9a458',
        RGB: [249, 164, 88]
    },
    /** ID: 125 */
    METALLIC_SECURICOR_GREEN: {
        ID: 125,
        HEX: '#83c566',
        RGB: [131, 197, 102]
    },
    /** ID: 126 */
    WORN_TAXI_YELLOW: {
        ID: 126,
        HEX: '#f1cc40',
        RGB: [241, 204, 64]
    },
    /** ID: 127 */
    POLICE_CAR_BLUE: {
        ID: 127,
        HEX: '#4cc3da',
        RGB: [76, 195, 218]
    },
    /** ID: 128 */
    MATTE_GREEN: {
        ID: 128,
        HEX: '#4e6443',
        RGB: [78, 100, 67]
    },
    /** ID: 129 */
    MATTE_BROWN: {
        ID: 129,
        HEX: '#bcac8f',
        RGB: [188, 172, 143]
    },
    /** ID: 130 */
    WORN_ORANGE2: {
        ID: 130,
        HEX: '#f8b658',
        RGB: [248, 182, 88]
    },
    /** ID: 131 */
    MATTE_WHITE: {
        ID: 131,
        HEX: '#fcf9f1',
        RGB: [252, 249, 241]
    },
    /** ID: 132 */
    WORN_WHITE: {
        ID: 132,
        HEX: '#fffffb',
        RGB: [255, 255, 251]
    },
    /** ID: 133 */
    WORN_OLIVE_ARMY_GREEN: {
        ID: 133,
        HEX: '#81844c',
        RGB: [129, 132, 76]
    },
    /** ID: 134 */
    PURE_WHITE: {
        ID: 134,
        HEX: '#ffffff',
        RGB: [255, 255, 255]
    },
    /** ID: 135 */
    HOT_PINK: {
        ID: 135,
        HEX: '#f21f99',
        RGB: [242, 31, 153]
    },
    /** ID: 136 */
    SALMON_PINK: {
        ID: 136,
        HEX: '#fdd6cd',
        RGB: [253, 214, 205]
    },
    /** ID: 137 */
    METALLIC_VERMILLION_PINK: {
        ID: 137,
        HEX: '#df5891',
        RGB: [223, 88, 145]
    },
    /** ID: 138 */
    ORANGE: {
        ID: 138,
        HEX: '#f6ae20',
        RGB: [246, 174, 32]
    },
    /** ID: 139 */
    GREEN: {
        ID: 139,
        HEX: '#b0ee6e',
        RGB: [176, 238, 110]
    },
    /** ID: 140 */
    BLUE: {
        ID: 140,
        HEX: '#08e9fa',
        RGB: [8, 233, 250]
    },
    /** ID: 141 */
    METTALIC_BLACK_BLUE: {
        ID: 141,
        HEX: '#0a0c17',
        RGB: [10, 12, 23]
    },
    /** ID: 142 */
    METALLIC_BLACK_PURPLE: {
        ID: 142,
        HEX: '#0c0d18',
        RGB: [12, 13, 24]
    },
    /** ID: 143 */
    METALLIC_BLACK_RED: {
        ID: 143,
        HEX: '#0e0d14',
        RGB: [14, 13, 20]
    },
    /** ID: 144 */
    HUNTER_GREEN: {
        ID: 144,
        HEX: '#9f9e8a',
        RGB: [159, 158, 138]
    },
    /** ID: 145 */
    METALLIC_PURPLE: {
        ID: 145,
        HEX: '#621276',
        RGB: [98, 18, 118]
    },
    /** ID: 146 */
    METAILLIC_V_DARK_BLUE: {
        ID: 146,
        HEX: '#0b1421',
        RGB: [11, 20, 33]
    },
    /** ID: 147 */
    MODSHOP_BLACK1: {
        ID: 147,
        HEX: '#11141a',
        RGB: [17, 20, 26]
    },
    /** ID: 148 */
    MATTE_PURPLE: {
        ID: 148,
        HEX: '#6b1f7b',
        RGB: [107, 31, 123]
    },
    /** ID: 149 */
    MATTE_DARK_PURPLE: {
        ID: 149,
        HEX: '#1e1d22',
        RGB: [30, 29, 34]
    },
    /** ID: 150 */
    METALLIC_LAVA_RED: {
        ID: 150,
        HEX: '#bc1917',
        RGB: [188, 25, 23]
    },
    /** ID: 151 */
    MATTE_FOREST_GREEN: {
        ID: 151,
        HEX: '#2d362a',
        RGB: [45, 54, 42]
    },
    /** ID: 152 */
    MATTE_OLIVE_DRAB: {
        ID: 152,
        HEX: '#696748',
        RGB: [105, 103, 72]
    },
    /** ID: 153 */
    MATTE_DESERT_BROWN: {
        ID: 153,
        HEX: '#7a6c55',
        RGB: [122, 108, 85]
    },
    /** ID: 154 */
    MATTE_DESERT_TAN: {
        ID: 154,
        HEX: '#c3b492',
        RGB: [195, 180, 146]
    },
    /** ID: 155 */
    MATTE_FOILAGE_GREEN: {
        ID: 155,
        HEX: '#5a6352',
        RGB: [90, 99, 82]
    },
    /** ID: 156 */
    DEFAULT_ALLOY_COLOR: {
        ID: 156,
        HEX: '#81827f',
        RGB: [129, 130, 127]
    },
    /** ID: 157 */
    EPSILON_BLUE: {
        ID: 157,
        HEX: '#afd6e4',
        RGB: [175, 214, 228]
    },
    /** ID: 158 */
    PURE_GOLD: {
        ID: 158,
        HEX: '#7a6440',
        RGB: [122, 100, 64]
    },
    /** ID: 159 */
    BRUSHED_GOLD: {
        ID: 159,
        HEX: '#7f6a48',
        RGB: [127, 106, 72]
    }
};
export default vehicleColors;
