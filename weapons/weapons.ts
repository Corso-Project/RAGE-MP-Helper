/**
* Wikipedia: https://wiki.rage.mp/index.php?title=Weapons
*/
const Weapons = {
    /** Melee */
    MELEE: {
        /**
         * Antique Cavalry Dagger
         *
         * ![Antique Cavalry Dagger](https://wiki.rage.mp/images/f/f5/Antique-cavalry-dagger-icon.png)
        */
        DAGGER: {
            ID: 'weapon_dagger',
            HASH: 0x92A27487
        },
        /**
         * Baseball Bat
         *
         * ![Baseball Bat](https://wiki.rage.mp/images/8/8b/Baseball-bat-icon.png)
        */
        BAT: {
            ID: 'weapon_bat',
            HASH: 0x958A4A8F
        },
        /**
         * Broken Bottle
         *
         * ![Broken Bottle](https://wiki.rage.mp/images/5/5b/Broken-bottle-icon.png)
        */
        BOTTLE: {
            ID: 'weapon_bottle',
            HASH: 0xF9E6AA4B
        },
        /**
         * Crowbar
         *
         * ![Crowbar](https://wiki.rage.mp/images/8/8a/Crowbar-icon.png)
        */
        CROWBAR: {
            ID: 'weapon_crowbar',
            HASH: 0x84BD7BFD
        },
        /**
         * Fist
         *
         * ![Fist](https://wiki.rage.mp/images/b/b7/Fist-icon.png)
        */
        UNARMED: {
            ID: 'weapon_unarmed',
            HASH: 0xA2719263
        },
        /**
         * Flashlight
         *
         * ![Flashlight](https://wiki.rage.mp/images/8/85/Flashlight-icon.png)
        */
        FLASHLIGHT: {
            ID: 'weapon_flashlight',
            HASH: 0x8BB05FD7
        },
        /**
         * Golf Club
         *
         * ![Golf Club](https://wiki.rage.mp/images/c/cb/Golf-club-icon.png)
        */
        GOLFCLUB: {
            ID: 'weapon_golfclub',
            HASH: 0x440E4788
        },
        /**
         * Hammer
         *
         * ![Hammer](https://wiki.rage.mp/images/e/ec/Hammer-icon.png)
        */
        HAMMER: {
            ID: 'weapon_hammer',
            HASH: 0x4E875F73
        },
        /**
         * Hatchet
         *
         * ![Hatchet](https://wiki.rage.mp/images/e/eb/Hatchet-icon.png)
        */
        HATCHET: {
            ID: 'weapon_hatchet',
            HASH: 0xF9DCBF2D
        },
        /**
         * Brass Knuckles
         *
         * ![Brass Knuckles](https://wiki.rage.mp/images/b/b7/Knuckles-icon.png)
        */
        KNUCKLE: {
            ID: 'weapon_knuckle',
            HASH: 0xD8DF3C3C
        },
        /**
         * Knife
         *
         * ![Knife](https://wiki.rage.mp/images/8/8c/Knife-icon.png)
        */
        KNIFE: {
            ID: 'weapon_knife',
            HASH: 0x99B507EA
        },
        /**
         * Machete
         *
         * ![weapon_machete](https://wiki.rage.mp/images/d/dc/Machete-icon.png)
        */
        MACHETE: {
            ID: 'weapon_machete',
            HASH: 0xDD5DF8D9
        },
        /**
         * Switchblade
         *
         * ![Switchblade](https://wiki.rage.mp/images/c/ce/Switch-blade-icon.png)
        */
        SWITCHBLADE: {
            ID: 'weapon_switchblade',
            HASH: 0xDFE37640
        },
        /**
         * Nightstick
         *
         * ![Nightstick](https://wiki.rage.mp/images/e/e6/Nightstick-icon.png)
        */
        NIGHTSTICK: {
            ID: 'weapon_nightstick',
            HASH: 0x678B81B1
        },
        /**
         * Pipe Wrench
         *
         * ![Pipe Wrench](https://wiki.rage.mp/images/2/22/Pipe-wrench-icon.png)
        */
        WRENCH: {
            ID: 'weapon_wrench',
            HASH: 0x19044EE0
        },
        /**
         * Battle Axe
         *
         * ![Battle Axe](https://wiki.rage.mp/images/3/3b/Battle-axe-icon.png)
        */
        BATTLEAXE: {
            ID: 'weapon_battleaxe',
            HASH: 0xCD274149
        },
        /**
         * Pool Cue
         *
         * ![Pool Cue](https://wiki.rage.mp/images/3/3a/Pool-cue-icon.png)
        */
        POOLCUE: {
            ID: 'weapon_poolcue',
            HASH: 0x94117305
        },
        /**
         * Stone Hatchet
         *
         * ![Stone Hatchet](https://wiki.rage.mp/images/2/21/Stone-hatchet-icon.png)
        */
        STONE_HATCHET: {
            ID: 'weapon_stone_hatchet',
            HASH: 0x3813FC08
        }
    },
    HANDGUNS: {
        /**
         * Pistol
         *
         * ![Pistol](https://wiki.rage.mp/images/9/95/Pistol-icon.png)
        */
        PISTOL: {
            ID: 'weapon_pistol',
            HASH: 0x1B06D571
        },
        /**
         * Pistol Mk II
         *
         * ![Pistol](https://wiki.rage.mp/images/4/43/Pistol-mk2-icon.png)
        */
        PISTOL_MK2: {
            ID: 'weapon_pistol_mk2',
            HASH: 0xBFE256D4
        },
        /**
         * Combat Pistol
         *
         * ![Combat Pistol](https://wiki.rage.mp/images/1/16/Combat-pistol-icon.png)
        */
        COMBATPISTOL: {
            ID: 'weapon_combatpistol',
            HASH: 0x5EF9FEC4
        },
        /**
         * AP Pistol
         *
         * ![AP Pistol](https://wiki.rage.mp/images/4/4d/Appistol-icon.png)
        */
        APPISTOL: {
            ID: 'weapon_appistol',
            HASH: 0x22D8FE39
        },
        /**
         * Stun Gun
         *
         * ![Stun Gun](https://wiki.rage.mp/images/3/3c/Stungun-icon.png)
        */
        STUNGUN: {
            ID: 'weapon_stungun',
            HASH: 0x3656C8C1
        },
        /**
         * Pistol .50
         *
         * ![Pistol .50](https://wiki.rage.mp/images/c/c5/Pistol.50-icon.png)
        */
        PISTOL50: {
            ID: 'weapon_pistol50',
            HASH: 0x99AEEB3B
        },
        /**
         * SNS Pistol
         *
         * ![SNS Pistol](https://wiki.rage.mp/images/9/96/Sns-pistol-icon.png)
        */
        SNSPISTOL: {
            ID: 'weapon_snspistol',
            HASH: 0xBFD21232
        },
        /**
         * SNS Pistol Mk II
         *
         * ![SNS Pistol Mk II](https://wiki.rage.mp/images/1/16/Sns-pistol-mk2-icon.png)
        */
        SNSPISTOL_MK2: {
            ID: 'weapon_snspistol_mk2',
            HASH: 0x88374054
        },
        /**
         * Heavy Pistol
         *
         * ![Heavy Pistol](https://wiki.rage.mp/images/7/78/Heavy-pistol-icon.png)
        */
        HEAVYPISTOL: {
            ID: 'weapon_heavypistol',
            HASH: 0xD205520E
        },
        /**
         * Vintage Pistol
         *
         * ![Vintage Pistol](https://wiki.rage.mp/images/9/97/Vintage-pistol-icon.png)
        */
        VINTAGEPISTOL: {
            ID: 'weapon_vintagepistol',
            HASH: 0x83839C4
        },
        /**
         * Flare Gun
         *
         * ![Flare Gun](https://wiki.rage.mp/images/0/0d/Flaregun-icon.png)
        */
        FLAREGUN: {
            ID: 'weapon_flaregun',
            HASH: 0x47757124
        },
        /**
         * Marksman Pistol
         *
         * ![Marksman Pistol](https://wiki.rage.mp/images/4/47/Marksman-pistol-icon.png)
        */
        MARKSMANPISTOL: {
            ID: 'weapon_marksmanpistol',
            HASH: 0xDC4DB296
        },
        /**
         * Heavy Revolver
         *
         * ![Heavy Revolver](https://wiki.rage.mp/images/9/93/Heavy-revolver-icon.png)
        */
        REVOLVER: {
            ID: 'weapon_revolver',
            HASH: 0xC1B3C3D1
        },
        /**
         * Heavy Revolver Mk II
         *
         * ![Heavy Revolver Mk II](https://wiki.rage.mp/images/c/c0/Heavy-revolver-mk2-icon.png)
        */
        REVOLVER_MK2: {
            ID: 'weapon_revolver_mk2',
            HASH: 0xCB96392F
        },
        /**
         * Double Action Revolver
         *
         * ![Double Action Revolver](https://wiki.rage.mp/images/4/45/Double-action-revolver-icon.png)
        */
        DOUBLEACTION: {
            ID: 'weapon_doubleaction',
            HASH: 0x97EA20B8
        },
        /**
         * Up-n-Atomizer
         *
         * ![Up-n-Atomizer](https://wiki.rage.mp/images/8/89/Up-n-atomizer-icon.png)
        */
        RAYPISTOL: {
            ID: 'weapon_raypistol',
            HASH: 0xAF3696A1
        },
        /**
         * Up-n-Atomizer
         *
         * ![Up-n-Atomizer](https://wiki.rage.mp/images/a/ad/Ceramic-pistol-icon.png)
        */
        CERAMICPISTOL: {
            ID: 'weapon_ceramicpistol',
            HASH: 0x2B5EF5EC
        },
        /**
         * Navy Revolver
         *
         * ![Navy Revolver](https://wiki.rage.mp/images/1/15/Navy-revolver-icon.png)
        */
        NAVYREVOLVER: {
            ID: 'weapon_navyrevolver',
            HASH: 0x917F6C8C
        }
    },
    SMG: {
        /**
         * Micro SMG
         *
         * ![Micro SMG](https://wiki.rage.mp/images/3/3a/Micro-smg-icon.png)
        */
        MICROSMG: {
            ID: 'weapon_microsmg',
            HASH: 0x13532244
        },
        /**
         * SMG
         *
         * ![SMG](https://wiki.rage.mp/images/3/30/Smg-icon.png)
        */
        SMG: {
            ID: 'weapon_smg',
            HASH: 0x2BE6766B
        },
        /**
         * SMG Mk II
         *
         * ![SMG Mk II](https://wiki.rage.mp/images/d/d1/Smg-mk2-icon.png)
        */
        SMG_MK2: {
            ID: 'weapon_smg_mk2',
            HASH: 0x78A97CD0
        },
        /**
         * Assault SMG
         *
         * ![Assault SMG](https://wiki.rage.mp/images/3/30/Assault-smg-icon.png)
        */
        ASSAULTSMG: {
            ID: 'weapon_assaultsmg',
            HASH: 0xEFE7E2DF
        },
        /**
         * Combat PDW
         *
         * ![Combat PDW](https://wiki.rage.mp/images/4/45/Combat-pdw-icon.png)
        */
        COMBATPDW: {
            ID: 'weapon_combatpdw',
            HASH: 0xA3D4D34
        },
        /**
         * Machine Pistol
         *
         * ![Machine Pistol](https://wiki.rage.mp/images/2/24/Machine-pistol-icon.png)
        */
        MACHINEPISTOL: {
            ID: 'weapon_machinepistol',
            HASH: 0xDB1AA450
        },
        /**
         * Mini SMG
         *
         * ![Mini SMG](https://wiki.rage.mp/images/d/d3/Mini-smg-icon.png)
        */
        MINISMG: {
            ID: 'weapon_minismg',
            HASH: 0xBD248B55
        },
        /**
         * Unholy Hellbringer
         *
         * ![Unholy Hellbringer](https://wiki.rage.mp/images/8/8f/Unholy-hellbringer-icon.png)
        */
        RAYCARBINE: {
            ID: 'weapon_raycarbine',
            HASH: 0x476BF155
        }
    },
    SHOTGUNS: {
        /**
         * Pump Shotgun
         *
         * ![Pump Shotgun](https://wiki.rage.mp/images/0/09/Pump-shotgun-icon.png)
        */
        PUMPSHOTGUN: {
            ID: 'weapon_pumpshotgun',
            HASH: 0x1D073A89
        },
        /**
         * Pump Shotgun Mk II
         *
         * ![Pump Shotgun Mk II](https://wiki.rage.mp/images/6/69/Pump-shotgun-mk2-icon.png)
        */
        PUMPSHOTGUN_MK2: {
            ID: 'weapon_pumpshotgun_mk2',
            HASH: 0x555AF99A
        },
        /**
         * Sawed-Off Shotgun
         *
         * ![Sawed-Off Shotgun](https://wiki.rage.mp/images/b/ba/Sawed-off-shotgun-icon.png)
        */
        SAWNOFFSHOTGUN: {
            ID: 'weapon_sawnoffshotgun',
            HASH: 0x7846A318
        },
        /**
         * Assault Shotgun
         *
         * ![Assault Shotgun](https://wiki.rage.mp/images/e/e3/Assault-shotgun-icon.png)
        */
        ASSAULTSHOTGUN: {
            ID: 'weapon_assaultshotgun',
            HASH: 0xE284C527
        },
        /**
         * Bullpup Shotgun
         *
         * ![Bullpup Shotgun](https://wiki.rage.mp/images/7/7f/Bullpup-shotgun-icon.png)
        */
        BULLPUPSHOTGUN: {
            ID: 'weapon_bullpupshotgun',
            HASH: 0x9D61E50F
        },
        /**
         * Musket
         *
         * ![Musket](https://wiki.rage.mp/images/8/8c/Musket-icon.png)
        */
        MUSKET: {
            ID: 'weapon_musket',
            HASH: 0xA89CB99E
        },
        /**
         * Heavy Shotgun
         *
         * ![Heavy Shotgun](https://wiki.rage.mp/images/5/5d/Heavy-shotgun-icon.png)
        */
        HEAVYSHOTGUN: {
            ID: 'weapon_heavyshotgun',
            HASH: 0x3AABBBAA
        },
        /**
         * Double Barrel Shotgun
         *
         * ![Double Barrel Shotgun](https://wiki.rage.mp/images/8/8d/Double-barrel-shotgun-icon.png)
        */
        DBSHOTGUN: {
            ID: 'weapon_dbshotgun',
            HASH: 0xEF951FBB
        },
        /**
         * Sweeper Shotgun
         *
         * ![Sweeper Shotgun](https://wiki.rage.mp/images/a/a8/Sweeper-shotgun-icon.png)
        */
        AUTOSHOTGUN: {
            ID: 'weapon_autoshotgun',
            HASH: 0x12E82D3D
        }
    },
    ASSAULT_RIFLES: {
        /**
         * Assault Rifle
         *
         * ![Assault Rifle](https://wiki.rage.mp/images/6/61/Assault-rifle-icon.png)
        */
        ASSAULTRIFLE: {
            ID: 'weapon_assaultrifle',
            HASH: 0xBFEFFF6D
        },
        /**
         * Assault Rifle Mk II
         *
         * ![Assault Rifle Mk II](https://wiki.rage.mp/images/6/63/Assault-rifle-mk2-icon.png)
        */
        ASSAULTRIFLE_MK2: {
            ID: 'weapon_assaultrifle_mk2',
            HASH: 0x394F415C
        },
        /**
         * Carbine Rifle
         *
         * ![Carbine Rifle](https://wiki.rage.mp/images/7/73/Carbine-rifle-icon.png)
        */
        CARBINERIFLE: {
            ID: 'weapon_carbinerifle',
            HASH: 0x83BF0278
        },
        /**
         * Carbine Rifle Mk II
         *
         * ![Carbine Rifle Mk II](https://wiki.rage.mp/images/3/3f/Carbine-rifle-mk2-icon.png)
        */
        CARBINERIFLE_MK2: {
            ID: 'weapon_carbinerifle_mk2',
            HASH: 0xFAD1F1C9
        },
        /**
         * Advanced Rifle
         *
         * ![Advanced Rifle](https://wiki.rage.mp/images/a/ae/Advanced-rifle-icon.png)
        */
        ADVANCEDRIFLE: {
            ID: 'weapon_advancedrifle',
            HASH: 0xAF113F99
        },
        /**
         * Special Carbine
         *
         * ![Special Carbine](https://wiki.rage.mp/images/b/b7/Special-carbine-icon.png)
        */
        SPECIALCARBINE: {
            ID: 'weapon_specialcarbine',
            HASH: 0xC0A3098D
        },
        /**
         * Special Carbine Mk II
         *
         * ![Special Carbine](https://wiki.rage.mp/images/3/34/Special-carbine-mk2-icon.png)
        */
        SPECIALCARBINE_MK2: {
            ID: 'weapon_specialcarbine_mk2',
            HASH: 0x969C3D67
        },
        /**
         * Bullpup Rifle
         *
         * ![Bullpup Rifle](https://wiki.rage.mp/images/0/09/Bullpup-rifle-icon.png)
        */
        BULLPUPRIFLE: {
            ID: 'weapon_bullpuprifle',
            HASH: 0x7F229F94
        },
        /**
         * Bullpup Rifle  Mk II
         *
         * ![Bullpup Rifle  Mk II](https://wiki.rage.mp/images/e/e1/Bullpup-rifle-mk2-icon.png)
        */
        BULLPUPRIFLE_MK2: {
            ID: 'weapon_bullpuprifle_mk2',
            HASH: 0x84D6FAFD
        },
        /**
         * Compact Rifle
         *
         * ![Compact Rifle](https://wiki.rage.mp/images/c/c9/Compact-rifle-icon.png)
        */
        COMPACTRIFLE: {
            ID: 'weapon_compactrifle',
            HASH: 0x624FE830
        }
    },
    MACHINE_GUNS: {
        /**
         * MG
         *
         * ![MG](https://wiki.rage.mp/images/9/98/Mg-icon.png)
        */
        MG: {
            ID: 'weapon_mg',
            HASH: 0x9D07F764
        },
        /**
         * Combat MG
         *
         * ![Combat MG](https://wiki.rage.mp/images/9/94/Combat-mg-icon.png)
        */
        COMBATMG: {
            ID: 'weapon_combatmg',
            HASH: 0x7FD62962
        },
        /**
         * Combat MG Mk II
         *
         * ![Combat MG Mk II](https://wiki.rage.mp/images/3/31/Combat-mg-mk2-icon.png)
        */
        COMBATMG_MK2: {
            ID: 'weapon_combatmg_mk2',
            HASH: 0xDBBD7280
        },
        /**
         * Gusenberg Sweeper
         *
         * ![Gusenberg Sweeper](https://wiki.rage.mp/images/8/8f/Gusenberg-sweeper-icon.png)
        */
        GUSENBERG: {
            ID: 'weapon_gusenberg',
            HASH: 0x61012683
        }
    },
    SNIPER_RIFLES: {
        /**
         * Sniper Rifle
         *
         * ![Sniper Rifle](https://wiki.rage.mp/images/e/ec/Sniper-rifle-icon.png)
        */
        SNIPERRIFLE: {
            ID: 'weapon_sniperrifle',
            HASH: 0x5FC3C11
        },
        /**
         * Heavy Sniper
         *
         * ![Heavy Sniper](https://wiki.rage.mp/images/5/54/Heavy-sniper-icon.png)
        */
        HEAVYSNIPER: {
            ID: 'weapon_heavysniper',
            HASH: 0xC472FE2
        },
        /**
         * Heavy Sniper Mk II
         *
         * ![Heavy Sniper Mk II](https://wiki.rage.mp/images/c/cf/Heavy-sniper-mk2-icon.png)
        */
        HEAVYSNIPER_MK2: {
            ID: 'weapon_heavysniper_mk2',
            HASH: 0xA914799
        },
        /**
         * Marksman Rifle
         *
         * ![Marksman Rifle](https://wiki.rage.mp/images/2/22/Marksman-rifle-icon.png)
        */
        MARKSMANRIFLE: {
            ID: 'weapon_marksmanrifle',
            HASH: 0xC734385A
        },
        /**
         * Marksman Rifle
         *
         * ![Marksman Rifle](https://wiki.rage.mp/images/1/17/Marksman-rifle-mk2-icon.png)
        */
        MARKSMANRIFLE_MK2: {
            ID: 'weapon_marksmanrifle_mk2',
            HASH: 0x6A6C02E0
        }
    },
    HEAVY_WEAPONS: {
        /**
         * RPG
         *
         * ![RPG](https://wiki.rage.mp/images/7/7d/Rocket-launcher-icon.png)
        */
        RPG: {
            ID: 'weapon_rpg',
            HASH: 0xB1CA77B1
        },
        /**
         * Grenade Launcher
         *
         * ![Grenade Launcher](https://wiki.rage.mp/images/a/ae/Grenade-launcher-icon.png)
        */
        GRENADELAUNCHER: {
            ID: 'weapon_grenadelauncher',
            HASH: 0xA284510B
        },
        /**
         * Grenade Launcher Smoke
         *
         * ![Grenade Launcher Smoke](https://wiki.rage.mp/images/a/ae/Grenade-launcher-icon.png)
        */
        GRENADELAUNCHER_SMOKE: {
            ID: 'weapon_grenadelauncher_smoke',
            HASH: 0x4DD2DC56
        },
        /**
         * Minigun
         *
         * ![Minigun](https://wiki.rage.mp/images/8/8b/Minigun-icon.png)
        */
        MINIGUN: {
            ID: 'weapon_minigun',
            HASH: 0x42BF8A85
        },
        /**
         * Firework Launcher
         *
         * ![Firework Launcher](https://wiki.rage.mp/images/5/54/Firework-launcher-icon.png)
        */
        FIREWORK: {
            ID: 'weapon_firework',
            HASH: 0x7F7497E5
        },
        /**
         * Railgun
         *
         * ![Railgun](https://wiki.rage.mp/images/a/ad/Railgun-icon.png)
        */
        RAILGUN: {
            ID: 'weapon_railgun',
            HASH: 0x6D544C99
        },
        /**
         * Homing Launcher
         *
         * ![Homing Launcher](https://wiki.rage.mp/images/1/14/Homing-launcher-icon.png)
        */
        HOMINGLAUNCHER: {
            ID: 'weapon_hominglauncher',
            HASH: 0x63AB0442
        },
        /**
         * Compact Grenade Launcher
         *
         * ![Compact Grenade Launcher](https://wiki.rage.mp/images/0/0d/Grenade-compact-launcher-icon.png)
        */
        COMPACTLAUNCHER: {
            ID: 'weapon_compactlauncher',
            HASH: 0x781FE4A
        },
        /**
         * Widowmaker
         *
         * ![Widowmaker](https://wiki.rage.mp/images/e/ec/Widowmaker-icon.png)
        */
        RAYMINIGUN: {
            ID: 'weapon_rayminigun',
            HASH: 0xB62D1F67
        }
    },
    THROWABLES: {
        /**
         * Grenade
         *
         * ![Grenade](https://wiki.rage.mp/images/5/54/Grenade-icon.png)
        */
        GRENADE: {
            ID: 'weapon_grenade',
            HASH: 0x93E220BD
        },
        /**
         * BZ Gas
         *
         * ![BZ Gas](https://wiki.rage.mp/images/d/d3/Bz-gas-icon.png)
        */
        BZGAS: {
            ID: 'weapon_bzgas',
            HASH: 0xA0973D5E
        },
        /**
         * Tear Gas
         *
         * ![Tear Gas](https://wiki.rage.mp/images/8/8a/Tear-gas-icon.png)
        */
        SMOKEGRENADE: {
            ID: 'weapon_smokegrenade',
            HASH: 0xFDBC8A50
        },
        /**
         * Flare
         *
         * ![Flare](https://wiki.rage.mp/images/0/09/Flare-icon.png)
        */
        FLARE: {
            ID: 'weapon_flare',
            HASH: 0x497FACC3
        },
        /**
         * Molotov Cocktail
         *
         * ![Molotov Cocktail](https://wiki.rage.mp/images/4/46/Molotov-icon.png)
        */
        MOLOTOV: {
            ID: 'weapon_molotov',
            HASH: 0x24B17070
        },
        /**
         * Sticky Bomb
         *
         * ![Sticky Bomb](https://wiki.rage.mp/images/3/3a/Sticky-bomb-icon.png)
        */
        STICKYBOMB: {
            ID: 'weapon_stickybomb',
            HASH: 0x2C3731D9
        },
        /**
         * Proximity Mines
         *
         * ![Proximity Mines](https://wiki.rage.mp/images/a/a8/Proximity-mines-icon.png)
        */
        PROXMINE: {
            ID: 'weapon_proxmine',
            HASH: 0xAB564B93
        },
        /**
         * Snowballs
         *
         * ![Snowballs](https://wiki.rage.mp/images/0/04/Snowball-icon.png)
        */
        SNOWBALL: {
            ID: 'weapon_snowball',
            HASH: 0x787F0BB
        },
        /**
         * Pipe Bombs
         *
         * ![Pipe Bombs](https://wiki.rage.mp/images/d/dc/Pipe-bomb-icon.png)
        */
        PIPEBOMB: {
            ID: 'weapon_pipebomb',
            HASH: 0xBA45E8B8
        },
        /**
         * Baseball
         *
         * ![Baseball](https://wiki.rage.mp/images/4/4b/Ball-icon.png)
        */
        BALL: {
            ID: 'weapon_ball',
            HASH: 0x23C9F95C
        }
    },
    MISC: {
        /**
         * Jerry Can
         *
         * ![Jerry Can](https://wiki.rage.mp/images/2/2b/Petrolcan-icon.png)
        */
        PETROLCAN: {
            ID: 'weapon_petrolcan',
            HASH: 0x34A67B97
        },
        /**
         * Fire Extinguisher
         *
         * ![Fire Extinguisher](https://wiki.rage.mp/images/thumb/1/13/Fire2.png/255px-Fire2.png)
        */
        FIREEXTINGUISHER: {
            ID: 'weapon_fireextinguisher',
            HASH: 0x60EC506
        },
        /**
         * Parachute
         *
         * ![Parachute](https://wiki.rage.mp/images/2/24/Parachute-icon.png)
        */
        PARACHUTE: {
            ID: 'gadget_parachute',
            HASH: 0xFBAB5776
        },
        /**
         * Hazardous Jerry Can
         *
         * ![Hazardous Jerry Can](https://wiki.rage.mp/images/2/2b/Petrolcan-icon.png)
        */
        HAZARDCAN: {
            ID: 'weapon_hazardcan',
            HASH: 0xBA536372
        }
    }
};
export default Weapons;
