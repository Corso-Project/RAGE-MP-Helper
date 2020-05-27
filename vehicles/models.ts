/* eslint-disable no-unused-vars */

/**
 * Wikipedia: https://wiki.rage.mp/index.php?title=Vehicles
 */
const vehicleModels = {
    BOATS: {
        /**
         * ![Dinghy](https://wiki.rage.mp/images/thumb/3/39/Dinghy.png/164px-Dinghy.png)
         */
        DINGHY: {
            ID: 'dinghy',
            HASH: 0x3D961290
        },
        /**
         * ![Dinghy2](https://wiki.rage.mp/images/thumb/0/09/Dinghy2.png/164px-Dinghy2.png)
         */
        DINGHY2: {
            ID: 'dinghy2',
            HASH: 0x107F392C
        },
        /**
         * ![Dinghy3](https://wiki.rage.mp/images/thumb/5/56/Dinghy3.png/164px-Dinghy3.png)
         */
        DINGHY3: {
            ID: 'dinghy3',
            HASH: 0x1E5E54EA
        },
        /**
         * ![Dinghy4](https://wiki.rage.mp/images/thumb/8/86/Dinghy4.png/164px-Dinghy4.png)
         */
        DINGHY4: {
            ID: 'dinghy4',
            HASH: 0x33B47F96
        },
        /**
         * ![Jetmax](https://wiki.rage.mp/images/thumb/e/e6/Jetmax.png/164px-Jetmax.png)
         */
        JETMAX: {
            ID: 'jetmax',
            HASH: 0x33581161
        },
        /**
         * ![Marquis](https://wiki.rage.mp/images/thumb/7/70/Marquis.png/164px-Marquis.png)
         */
        MARQUIS: {
            ID: 'marquis',
            HASH: 0xC1CE1183
        },
        /**
         * ![Seashark](https://wiki.rage.mp/images/thumb/e/e7/Seashark.png/164px-Seashark.png)
         */
        SEASHARK: {
            ID: 'seashark',
            HASH: 0xC2974024
        },
        /**
         * ![Seashark2](https://wiki.rage.mp/images/thumb/7/71/Seashark2.png/164px-Seashark2.png)
         */
        SEASHARK2: {
            ID: 'seashark2',
            HASH: 0xDB4388E4
        },
        /**
         * ![Seashark3](https://wiki.rage.mp/images/thumb/f/f3/Seashark3.png/164px-Seashark3.png)
         */
        SEASHARK3: {
            ID: 'seashark3',
            HASH: 0xED762D49
        },
        /**
         * ![Speeder](https://wiki.rage.mp/images/thumb/f/f4/Speeder.png/164px-Speeder.png)
         */
        SPEEDER: {
            ID: 'speeder',
            HASH: 0xDC60D2B
        },
        /**
         * ![Speeder2](https://wiki.rage.mp/images/thumb/8/89/Speeder2.png/164px-Speeder2.png)
         */
        SPEEDER2: {
            ID: 'speeder2',
            HASH: 0x1A144F2A
        },
        /**
         * ![Speeder2](https://wiki.rage.mp/images/thumb/e/ec/Squalo.png/164px-Squalo.png)
         */
        SQUALO: {
            ID: 'squalo',
            HASH: 0x17DF5EC2
        },
        /**
         * ![Submersible](https://wiki.rage.mp/images/thumb/3/3c/Submersible.png/164px-Submersible.png)
         */
        SUBMERSIBLE: {
            ID: 'submersible',
            HASH: 0x2DFF622F
        },
        /**
         * ![Submersible2](https://wiki.rage.mp/images/thumb/6/62/Submersible2.png/164px-Submersible2.png)
         */
        SUBMERSIBLE2: {
            ID: 'submersible2',
            HASH: 0xC07107EE
        },
        /**
         * ![Suntrap](https://wiki.rage.mp/images/thumb/2/27/Suntrap.png/164px-Suntrap.png)
         */
        SUNTRAP: {
            ID: 'suntrap',
            HASH: 0xEF2295C9
        },
        /**
         * ![Toro](https://wiki.rage.mp/images/thumb/9/94/Toro.png/164px-Toro.png)
         */
        TORO: {
            ID: 'toro',
            HASH: 0x3FD5AA2F
        },
        /**
         * ![Toro2](https://wiki.rage.mp/images/thumb/d/d7/Toro2.png/164px-Toro2.png)
         */
        TORO2: {
            ID: 'toro2',
            HASH: 0x362CAC6D
        },
        /**
         * ![Tropic](https://wiki.rage.mp/images/thumb/8/86/Tropic.png/164px-Tropic.png)
         */
        TROPIC: {
            ID: 'tropic',
            HASH: 0x1149422F
        },
        /**
         * ![Tropic2](https://wiki.rage.mp/images/thumb/a/a7/Tropic2.png/164px-Tropic2.png)
         */
        TROPIC2: {
            ID: 'tropic2',
            HASH: 0x56590FE9
        },
        /**
         * ![Tug](https://wiki.rage.mp/images/thumb/a/a3/Tug.png/164px-Tug.png)
         */
        TUG: {
            ID: 'tug',
            HASH: 0x82CAC433
        }
    },
    COMMERCIALS: {
        /**
         * ![Benson](https://wiki.rage.mp/images/thumb/b/bd/Benson.png/164px-Benson.png)
         */
        BENSON: {
            ID: 'benson',
            HASH: 0x7A61B330
        },
        /**
         * ![Biff](https://wiki.rage.mp/images/thumb/6/62/Biff.png/164px-Biff.png)
         */
        BIFF: {
            ID: 'biff',
            HASH: 0x32B91AE8
        },
        /**
         * **DLC:** Arena War
         *
         * ![Cerberus](https://wiki.rage.mp/images/thumb/4/45/Cerberus.png/151px-Cerberus.png)
         */
        CERBERUS: {
            ID: 'cerberus',
            HASH: 0xD039510B
        },
        /**
         * **DLC:** Arena War
         *
         * ![Cerberus2](https://wiki.rage.mp/images/thumb/5/50/Cerberus2.png/164px-Cerberus2.png)
         */
        CERBERUS2: {
            ID: 'cerberus2',
            HASH: 0x287FA449
        },
        /**
         * **DLC:** Arena War
         *
         * ![Cerberus3](https://wiki.rage.mp/images/thumb/8/83/Cerberus3.png/164px-Cerberus3.png)
         */
        CERBERUS3: {
            ID: 'cerberus3',
            HASH: 0x71D3B6F0
        },
        /**
         * ![Hauler](https://wiki.rage.mp/images/thumb/8/83/Hauler.png/164px-Hauler.png)
         */
        HAULER: {
            ID: 'hauler',
            HASH: 0x5A82F9AE
        },
        /**
         * **DLC:** Gunrunning
         *
         * ![Hauler2](https://wiki.rage.mp/images/thumb/b/bf/Hauler2.png/164px-Hauler2.png)
         */
        HAULER2: {
            ID: 'hauler2',
            HASH: 0x171C92C4
        },
        /**
         * ![Mule](https://wiki.rage.mp/images/thumb/e/e7/Mule.png/164px-Mule.png)
         */
        MULE: {
            ID: 'mule',
            HASH: 0x35ED670B
        },
        /**
         * ![Mule2](https://wiki.rage.mp/images/thumb/8/82/Mule2.png/164px-Mule2.png)
         */
        MULE2: {
            ID: 'mule2',
            HASH: 0xC1632BEB
        },
        /**
         * ![Mule3](https://wiki.rage.mp/images/thumb/6/6a/Mule3.png/164px-Mule3.png)
         */
        MULE3: {
            ID: 'mule3',
            HASH: 0x85A5B471
        },
        /**
         * ![Mule4](https://wiki.rage.mp/images/thumb/2/2e/Mule4.png/164px-Mule4.png)
         */
        MULE4: {
            ID: 'mule4',
            HASH: 0x73F4110E
        },
        /**
         * ![Packer](https://wiki.rage.mp/images/thumb/0/03/Packer.png/164px-Packer.png)
         */
        PACKER: {
            ID: 'packer',
            HASH: 0x21EEE87D
        },
        /**
         * ![Phantom](https://wiki.rage.mp/images/thumb/e/ec/Phantom.png/164px-Phantom.png)
         */
        PHANTOM: {
            ID: 'phantom',
            HASH: 0x809AA4CB
        },
        /**
         * **DLC:** Import/Export
         *
         * ![Phantom2](https://wiki.rage.mp/images/thumb/2/2b/Phantom2.png/164px-Phantom2.png)
         */
        PHANTOM2: {
            ID: 'phantom2',
            HASH: 0x9DAE1398
        },
        /**
         * **DLC:** Gunrunning
         *
         * ![Phantom3](https://wiki.rage.mp/images/thumb/8/81/Phantom3.png/164px-Phantom3.png)
         */
        PHANTOM3: {
            ID: 'phantom3',
            HASH: 0xA90ED5C
        },
        /**
         * ![Pounder](https://wiki.rage.mp/images/thumb/a/a6/Pounder.png/156px-Pounder.png)
         */
        POUNDER: {
            ID: 'pounder',
            HASH: 0x7DE35E7D
        },
        /**
         * ![Pounder2](https://wiki.rage.mp/images/thumb/4/41/Pounder2.png/164px-Pounder2.png)
         */
        POUNDER2: {
            ID: 'pounder2',
            HASH: 0x6290F15B
        },
        /**
         * ![Stockade](https://wiki.rage.mp/images/thumb/6/6b/Stockade.png/164px-Stockade.png)
         */
        STOCKADE: {
            ID: 'stockade',
            HASH: 0x6827CF72
        },
        /**
         * ![Stockade3](https://wiki.rage.mp/images/thumb/8/8d/Stockade3.png/164px-Stockade3.png)
         */
        STOCKADE3: {
            ID: 'stockade3',
            HASH: 0xF337AB36
        },
        /**
         * **DLC:** After Hours
         *
         * ![Terbyte](https://wiki.rage.mp/images/thumb/9/97/Terbyte.png/164px-Terbyte.png)
         */
        TERBYTE: {
            ID: 'terbyte',
            HASH: 0x897AFC65
        }
    },
    COMPACTS: {
        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Asbo](https://wiki.rage.mp/images/thumb/c/cb/Asbo.png/160px-Asbo.png)
         */
        ASBO: {
            ID: 'asbo',
            HASH: 0x42ACA95F
        },
        /**
         * ![Blista](https://wiki.rage.mp/images/thumb/5/58/Blista.png/164px-Blista.png)
         */
        BLIST: {
            ID: 'blista',
            HASH: 0xEB70965F
        },
        /**
         * **DLC:** Cunning Stunts
         *
         * ![Brioso](https://wiki.rage.mp/images/thumb/6/6f/Brioso.png/164px-Brioso.png)
         */
        BRIOSO: {
            ID: 'brioso',
            HASH: 0x5C55CB39
        },
        /**
         * ![Dilettante](https://wiki.rage.mp/images/thumb/b/b9/Dilettante.png/164px-Dilettante.png)
         */
        DILETTANTE: {
            ID: 'dilettante',
            HASH: 0xBC993509
        },
        /**
         * ![Dilettante2](https://wiki.rage.mp/images/thumb/4/4e/Dilettante2.png/164px-Dilettante2.png)
         */
        DILETTANTE2: {
            ID: 'dilettante2',
            HASH: 0x64430650
        },
        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Kanjo](https://wiki.rage.mp/images/thumb/2/25/Kanjo.png/164px-Kanjo.png)
         */
        KANJO: {
            ID: 'kanjo',
            HASH: 0x18619B7E
        },
        /**
         * ![Issi2](https://wiki.rage.mp/images/thumb/0/0b/Issi2.png/164px-Issi2.png)
         */
        ISSI2: {
            ID: 'issi2',
            HASH: 0xB9CB3B69
        },
        /**
         * **DLC:** Southern San Andreas Super Sport Series
         *
         * ![Issi3](https://wiki.rage.mp/images/thumb/7/73/Issi3.png/164px-Issi3.png)
         */
        ISSI3: {
            ID: 'issi3',
            HASH: 0x378236E1
        },
        /**
         * **DLC:** Arena War
         *
         * ![Issi4](https://wiki.rage.mp/images/thumb/d/d5/Issi4.png/164px-Issi4.png)
         */
        ISSI4: {
            ID: 'issi4',
            HASH: 0x256E92BA
        },
        /**
         * **DLC:** Arena War
         *
         * ![Issi5](https://wiki.rage.mp/images/thumb/b/bb/Issi5.png/164px-Issi5.png)
         */
        ISSI5: {
            ID: 'issi5',
            HASH: 0x5BA0FF1E
        },
        /**
         * **DLC:** Arena War
         *
         * ![Issi6](https://wiki.rage.mp/images/thumb/a/a7/Issi6.png/164px-Issi6.png)
         */
        ISSI6: {
            ID: 'issi6',
            HASH: 0x49E25BA1
        },
        /**
         * ![Panto](https://wiki.rage.mp/images/thumb/e/e5/Panto.png/164px-Panto.png)
         */
        PANTO: {
            ID: 'panto',
            HASH: 0xE644E480
        },
        /**
         * ![Prairie](https://wiki.rage.mp/images/thumb/3/3d/Prairie.png/164px-Prairie.png)
         */
        PRAIRIE: {
            ID: 'prairie',
            HASH: 0xA988D3A2
        },
        /**
         * ![Rhapsody](https://wiki.rage.mp/images/thumb/e/e2/Rhapsody.png/164px-Rhapsody.png)
         */
        RHAPSODY: {
            ID: 'rhapsody',
            HASH: 0x322CF98F
        }
    },
    CYCLES: {
        /**
         * ![Bmx](https://wiki.rage.mp/images/thumb/4/40/Bmx.png/164px-Bmx.png)
         */
        BMX: {
            ID: 'bmx',
            HASH: 0x43779C54
        },

        /**
         * ![Cruiser](https://wiki.rage.mp/images/thumb/6/66/Cruiser.png/164px-Cruiser.png)
         */
        CRUISER: {
            ID: 'cruiser',
            HASH: 0x1ABA13B5
        },

        /**
         * ![Fixter](https://wiki.rage.mp/images/thumb/2/29/Fixter.png/164px-Fixter.png)
         */
        FIXTER: {
            ID: 'fixter',
            HASH: 0xCE23D3BF
        },

        /**
         * ![Scorcher](https://wiki.rage.mp/images/thumb/3/34/Scorcher.png/164px-Scorcher.png)
         */
        SCORCHER: {
            ID: 'scorcher',
            HASH: 0xF4E1AA15
        },

        /**
         * ![Tribike](https://wiki.rage.mp/images/thumb/f/fe/TriBike.png/164px-TriBike.png)
         */
        TRIBIKE: {
            ID: 'tribike',
            HASH: 0x4339CD69
        },

        /**
         * ![Tribike2](https://wiki.rage.mp/images/thumb/d/dc/TriBike2.png/164px-TriBike2.png)
         */
        TRIBIKE2: {
            ID: 'tribike2',
            HASH: 0xB67597EC
        },

        /**
         * ![Tribike3](https://wiki.rage.mp/images/thumb/5/5d/TriBike3.png/164px-TriBike3.png)
         */
        TRIBIKE3: {
            ID: 'tribike3',
            HASH: 0xE823FB48
        }
    },
    EMERGENCY: {
        /**
         * ![Ambulance](https://wiki.rage.mp/images/thumb/f/f5/Ambulance.png/164px-Ambulance.png)
         */
        AMBULANCE: {
            ID: 'ambulance',
            HASH: 0x45D56ADA
        },

        /**
         * ![Fbi](https://wiki.rage.mp/images/thumb/b/b6/FBI.png/164px-FBI.png)
         */
        FBI: {
            ID: 'fbi',
            HASH: 0x432EA949
        },

        /**
         * ![Fbi2](https://wiki.rage.mp/images/thumb/9/9b/FBI2.png/164px-FBI2.png)
         */
        FBI2: {
            ID: 'fbi2',
            HASH: 0x9DC66994
        },

        /**
         * ![Firetruk](https://wiki.rage.mp/images/thumb/5/5b/FireTruck.png/164px-FireTruck.png)
         */
        FIRETRUK: {
            ID: 'firetruk',
            HASH: 0x73920F8E
        },

        /**
         * ![Lguard](https://wiki.rage.mp/images/thumb/8/83/LGuard.png/164px-LGuard.png)
         */
        LGUARD: {
            ID: 'lguard',
            HASH: 0x1BF8D381
        },

        /**
         * ![Pbus](https://wiki.rage.mp/images/thumb/8/89/PBus.png/164px-PBus.png)
         */
        PBUS: {
            ID: 'pbus',
            HASH: 0x885F3671
        },

        /**
         * ![Police](https://wiki.rage.mp/images/thumb/b/bf/Police.png/164px-Police.png)
         */
        POLICE: {
            ID: 'police',
            HASH: 0x79FBB0C5
        },

        /**
         * ![Police2](https://wiki.rage.mp/images/thumb/c/c9/Police2.png/164px-Police2.png)
         */
        POLICE2: {
            ID: 'police2',
            HASH: 0x9F05F101
        },

        /**
         * ![Police3](https://wiki.rage.mp/images/thumb/6/6c/Police3.png/164px-Police3.png)
         */
        POLICE3: {
            ID: 'police3',
            HASH: 0x71FA16EA
        },

        /**
         * ![Police4](https://wiki.rage.mp/images/thumb/a/a3/Police4.png/164px-Police4.png)
         */
        POLICE4: {
            ID: 'police4',
            HASH: 0x8A63C7B9
        },

        /**
         * ![Policeb](https://wiki.rage.mp/images/thumb/9/94/Policeb.png/164px-Policeb.png)
         */
        POLICEB: {
            ID: 'policeb',
            HASH: 0xFDEFAEC3
        },

        /**
         * ![Polmav](https://wiki.rage.mp/images/thumb/f/fc/Polmav.png/164px-Polmav.png)
         */
        POLMAV: {
            ID: 'polmav',
            HASH: 0x1517D4D9
        },

        /**
         * ![Policeold1](https://wiki.rage.mp/images/thumb/b/b8/PoliceOld1.png/164px-PoliceOld1.png)
         */
        POLICEOLD1: {
            ID: 'policeold1',
            HASH: 0xA46462F7
        },

        /**
         * ![Policeold2](https://wiki.rage.mp/images/thumb/3/31/PoliceOld2.png/164px-PoliceOld2.png)
         */
        POLICEOLD2: {
            ID: 'policeold2',
            HASH: 0x95F4C618
        },

        /**
         * ![Policet](https://wiki.rage.mp/images/thumb/4/47/PoliceT.png/164px-PoliceT.png)
         */
        POLICET: {
            ID: 'policet',
            HASH: 0x1B38E955
        },

        /**
         * ![Pranger](https://wiki.rage.mp/images/thumb/d/dc/Pranger.png/164px-Pranger.png)
         */
        PRANGER: {
            ID: 'pranger',
            HASH: 0x2C33B46E
        },

        /**
         * ![Predator](https://wiki.rage.mp/images/thumb/e/e9/Predator.png/164px-Predator.png)
         */
        PREDATOR: {
            ID: 'predator',
            HASH: 0xE2E7D4AB
        },

        /**
         * ![Riot](https://wiki.rage.mp/images/thumb/c/c0/Riot.png/164px-Riot.png)
         */
        RIOT: {
            ID: 'riot',
            HASH: 0xB822A1AA
        },

        /**
         * ![Riot2](https://wiki.rage.mp/images/thumb/b/bd/Riot2.png/164px-Riot2.png)
         */
        RIOT2: {
            ID: 'riot2',
            HASH: 0x9B16A3B4
        },

        /**
         * ![Sheriff](https://wiki.rage.mp/images/thumb/3/3e/Sheriff.png/164px-Sheriff.png)
         */
        SHERIFF: {
            ID: 'sheriff',
            HASH: 0x9BAA707C
        },

        /**
         * ![Sheriff2](https://wiki.rage.mp/images/thumb/6/6c/Sheriff2.png/164px-Sheriff2.png)
         */
        SHERIFF2: {
            ID: 'sheriff2',
            HASH: 0x72935408
        }
    },
    HELICOPTERS: {
        /**
         * ![Akula](https://wiki.rage.mp/images/thumb/d/df/Akula.png/164px-Akula.png)
         */
        AKULA: {
            ID: 'akula',
            HASH: 0x46699F47
        },

        /**
         * ![Annihilator](https://wiki.rage.mp/images/thumb/7/7e/Annihilator.png/164px-Annihilator.png)
         */
        ANNIHILATOR: {
            ID: 'annihilator',
            HASH: 0x31F0B376
        },

        /**
         * ![Buzzard](https://wiki.rage.mp/images/thumb/f/f8/Buzzard.png/164px-Buzzard.png)
         */
        BUZZARD: {
            ID: 'buzzard',
            HASH: 0x2F03547B
        },

        /**
         * ![Buzzard2](https://wiki.rage.mp/images/thumb/6/6e/Buzzard2.png/164px-Buzzard2.png)
         */
        BUZZARD2: {
            ID: 'buzzard2',
            HASH: 0x2C75F0DD
        },

        /**
         * ![Cargobob](https://wiki.rage.mp/images/thumb/d/dc/Cargobob.png/164px-Cargobob.png)
         */
        CARGOBOB: {
            ID: 'cargobob',
            HASH: 0xFCFCB68B
        },

        /**
         * ![Cargobob2](https://wiki.rage.mp/images/thumb/a/a1/Cargobob2.png/164px-Cargobob2.png)
         */
        CARGOBOB2: {
            ID: 'cargobob2',
            HASH: 0x60A7EA10
        },

        /**
         * ![Cargobob3](https://wiki.rage.mp/images/thumb/f/fa/Cargobob3.png/164px-Cargobob3.png)
         */
        CARGOBOB3: {
            ID: 'cargobob3',
            HASH: 0x53174EEF
        },

        /**
         * ![Cargobob4](https://wiki.rage.mp/images/thumb/f/f0/Cargobob4.png/164px-Cargobob4.png)
         */
        CARGOBOB4: {
            ID: 'cargobob4',
            HASH: 0x78BC1A3C
        },

        /**
         * ![Frogger](https://wiki.rage.mp/images/thumb/2/2d/Frogger.png/164px-Frogger.png)
         */
        FROGGER: {
            ID: 'frogger',
            HASH: 0x2C634FBD
        },

        /**
         * ![Frogger2](https://wiki.rage.mp/images/thumb/b/be/Frogger2.png/164px-Frogger2.png)
         */
        FROGGER2: {
            ID: 'frogger2',
            HASH: 0x742E9AC0
        },

        /**
         * ![Havok](https://wiki.rage.mp/images/thumb/4/40/Havok.png/164px-Havok.png)
         */
        HAVOK: {
            ID: 'havok',
            HASH: 0x89BA59F5
        },

        /**
         * ![Hunter](https://wiki.rage.mp/images/thumb/e/e1/Hunt.png/164px-Hunt.png)
         */
        HUNTER: {
            ID: 'hunter',
            HASH: 0xFD707EDE
        },

        /**
         * ![Maverick](https://wiki.rage.mp/images/thumb/7/73/Maverick.png/164px-Maverick.png)
         */
        MAVERICK: {
            ID: 'maverick',
            HASH: 0x9D0450CA
        },

        /**
         * ![Savage](https://wiki.rage.mp/images/thumb/3/39/Savage.png/164px-Savage.png)
         */
        SAVAGE: {
            ID: 'savage',
            HASH: 0xFB133A17
        },

        /**
         * ![Seasparrow](https://wiki.rage.mp/images/thumb/d/d5/Seasparrow.png/164px-Seasparrow.png)
         */
        SEASPARROW: {
            ID: 'seasparrow',
            HASH: 0xD4AE63D9
        },

        /**
         * ![Skylift](https://wiki.rage.mp/images/thumb/0/02/Skylift.png/164px-Skylift.png)
         */
        SKYLIFT: {
            ID: 'skylift',
            HASH: 0x3E48BF23
        },

        /**
         * ![Supervolito](https://wiki.rage.mp/images/thumb/9/9e/Supervolito.png/164px-Supervolito.png)
         */
        SUPERVOLITO: {
            ID: 'supervolito',
            HASH: 0x2A54C47D
        },

        /**
         * ![Supervolito2](https://wiki.rage.mp/images/thumb/a/a8/Supervolito2.png/164px-Supervolito2.png)
         */
        SUPERVOLITO2: {
            ID: 'supervolito2',
            HASH: 0x9C5E5644
        },

        /**
         * ![Swift](https://wiki.rage.mp/images/thumb/0/00/Swift.png/164px-Swift.png)
         */
        SWIFT: {
            ID: 'swift',
            HASH: 0xEBC24DF2
        },

        /**
         * ![Swift2](https://wiki.rage.mp/images/thumb/5/5f/Swift2.png/164px-Swift2.png)
         */
        SWIFT2: {
            ID: 'swift2',
            HASH: 0x4019CB4C
        },

        /**
         * ![Valkyrie](https://wiki.rage.mp/images/thumb/d/d5/Valkyrie.png/164px-Valkyrie.png)
         */
        VALKYRIE: {
            ID: 'valkyrie',
            HASH: 0xA09E15FD
        },

        /**
         * ![Valkyrie2](https://wiki.rage.mp/images/thumb/2/27/Valkyrie2.png/164px-Valkyrie2.png)
         */
        VALKYRIE2: {
            ID: 'valkyrie2',
            HASH: 0x5BFA5C4B
        },

        /**
         * ![Volatus](https://wiki.rage.mp/images/thumb/6/65/Volatus.png/164px-Volatus.png)
         */
        VOLATUS: {
            ID: 'volatus',
            HASH: 0x920016F1
        }
    },
    INDUSTRIAL: {
        /**
         * ![Bulldozer](https://wiki.rage.mp/images/thumb/f/f5/Bulldozer.png/164px-Bulldozer.png)
         */
        BULLDOZER: {
            ID: 'bulldozer',
            HASH: 0x7074F39D
        },

        /**
         * ![Cutter](https://wiki.rage.mp/images/thumb/6/6d/Cutter.png/164px-Cutter.png)
         */
        CUTTER: {
            ID: 'cutter',
            HASH: 0xC3FBA120
        },

        /**
         * ![Dump](https://wiki.rage.mp/images/thumb/0/0e/Dump.png/164px-Dump.png)
         */
        DUMP: {
            ID: 'dump',
            HASH: 0x810369E2
        },

        /**
         * ![Flatbed](https://wiki.rage.mp/images/thumb/c/c2/Flatbed.png/164px-Flatbed.png)
         */
        FLATBED: {
            ID: 'flatbed',
            HASH: 0x50B0215A
        },

        /**
         * ![Guardian](https://wiki.rage.mp/images/thumb/f/fd/Guardian.png/164px-Guardian.png)
         */
        GUARDIAN: {
            ID: 'guardian',
            HASH: 0x825A9F4C
        },

        /**
         * ![Handler](https://wiki.rage.mp/images/thumb/f/fe/Handler.png/164px-Handler.png)
         */
        HANDLER: {
            ID: 'handler',
            HASH: 0x1A7FCEFA
        },

        /**
         * ![Mixer](https://wiki.rage.mp/images/thumb/4/4d/Mixer.png/164px-Mixer.png)
         */
        MIXER: {
            ID: 'mixer',
            HASH: 0xD138A6BB
        },

        /**
         * ![Mixer2](https://wiki.rage.mp/images/thumb/e/e7/Mixer2.png/164px-Mixer2.png)
         */
        MIXER2: {
            ID: 'mixer2',
            HASH: 0x1C534995
        },

        /**
         * ![Rubble](https://wiki.rage.mp/images/thumb/1/14/Rubble.png/164px-Rubble.png)
         */
        RUBBLE: {
            ID: 'rubble',
            HASH: 0x9A5B1DCC
        },

        /**
         * ![Tiptruck](https://wiki.rage.mp/images/thumb/2/2e/TipTruck.png/164px-TipTruck.png)
         */
        TIPTRUCK: {
            ID: 'tiptruck',
            HASH: 0x2E19879
        },

        /**
         * ![Tiptruck2](https://wiki.rage.mp/images/thumb/c/c9/TipTruck2.png/164px-TipTruck2.png)
         */
        TIPTRUCK2: {
            ID: 'tiptruck2',
            HASH: 0xC7824E5E
        }
    },
    MILITARY: {
        /**
         * ![Apc](https://wiki.rage.mp/images/thumb/5/52/Apc.png/164px-Apc.png)
         */
        APC: {
            ID: 'apc',
            HASH: 0x2189D250
        },

        /**
         * ![Barracks](https://wiki.rage.mp/images/thumb/d/d2/Barracks.png/164px-Barracks.png)
         */
        BARRACKS: {
            ID: 'barracks',
            HASH: 0xCEEA3F4B
        },

        /**
         * ![Barracks2](https://wiki.rage.mp/images/thumb/f/f0/Barracks2.png/164px-Barracks2.png)
         */
        BARRACKS2: {
            ID: 'barracks2',
            HASH: 0x4008EABB
        },

        /**
         * ![Barracks3](https://wiki.rage.mp/images/thumb/5/54/Barracks3.png/164px-Barracks3.png)
         */
        BARRACKS3: {
            ID: 'barracks3',
            HASH: 0x2592B5CF
        },

        /**
         * ![Barrage](https://wiki.rage.mp/images/thumb/2/2c/Barrage.png/164px-Barrage.png)
         */
        BARRAGE: {
            ID: 'barrage',
            HASH: 0xF34DFB25
        },

        /**
         * ![Chernobog](https://wiki.rage.mp/images/thumb/5/5c/Chernobog.png/164px-Chernobog.png)
         */
        CHERNOBOG: {
            ID: 'chernobog',
            HASH: 0xD6BC7523
        },

        /**
         * ![Crusader](https://wiki.rage.mp/images/thumb/e/eb/Crusader.png/164px-Crusader.png)
         */
        CRUSADER: {
            ID: 'crusader',
            HASH: 0x132D5A1A
        },

        /**
         * ![Halftrack](https://wiki.rage.mp/images/thumb/b/be/Halftrack.png/164px-Halftrack.png)
         */
        HALFTRACK: {
            ID: 'halftrack',
            HASH: 0xFE141DA6
        },

        /**
         * ![Khanjali](https://wiki.rage.mp/images/thumb/6/64/Khanjali.png/164px-Khanjali.png)
         */
        KHANJALI: {
            ID: 'khanjali',
            HASH: 0xAA6F980A
        },

        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Minitank](https://wiki.rage.mp/images/thumb/a/a6/Minitank.png/164px-Minitank.png)
         */
        MINITANK: {
            ID: 'minitank',
            HASH: 0xB53C6C52
        },

        /**
         * ![Rhino](https://wiki.rage.mp/images/thumb/c/c2/Rhino.png/164px-Rhino.png)
         */
        RHINO: {
            ID: 'rhino',
            HASH: 0x2EA68690
        },

        /**
         * **DLC:** Arena War
         *
         * ![Scarab](https://wiki.rage.mp/images/thumb/9/96/Scarab.png/164px-Scarab.png)
         */
        SCARAB: {
            ID: 'scarab',
            HASH: 0xBBA2A2F7
        },

        /**
         * **DLC:** Arena War
         *
         * ![Scarab2](https://wiki.rage.mp/images/thumb/b/b3/Scarab2.png/164px-Scarab2.png)
         */
        SCARAB2: {
            ID: 'scarab2',
            HASH: 0x5BEB3CE0
        },

        /**
         * **DLC:** Arena War
         *
         * ![Scarab3](https://wiki.rage.mp/images/thumb/3/3a/Scarab3.png/164px-Scarab3.png)
         */
        SCARAB3: {
            ID: 'scarab3',
            HASH: 0xDD71BFEB
        },

        /**
         * ![Thruster](https://wiki.rage.mp/images/thumb/6/62/Thruster.png/164px-Thruster.png)
         */
        THRUSTER: {
            ID: 'thruster',
            HASH: 0x58CDAF30
        },

        /**
         * ![Trailersmall2](https://wiki.rage.mp/images/thumb/8/86/Trailersmall2.png/164px-Trailersmall2.png)
         */
        TRAILERSMALL2: {
            ID: 'trailersmall2',
            HASH: 0x8FD54EBB
        }
    },
    MOTORCYCLES: {
        /**
         * ![Akuma](https://wiki.rage.mp/images/thumb/1/16/Akuma.png/164px-Akuma.png)
         */
        AKUMA: {
            ID: 'akuma',
            HASH: 0x63ABADE7
        },

        /**
         * ![Avarus](https://wiki.rage.mp/images/thumb/1/13/Avarus.png/164px-Avarus.png)
         */
        AVARUS: {
            ID: 'avarus',
            HASH: 0x81E38F7F
        },

        /**
         * ![Bagger](https://wiki.rage.mp/images/thumb/6/64/Bagger.png/164px-Bagger.png)
         */
        BAGGER: {
            ID: 'bagger',
            HASH: 0x806B9CC3
        },

        /**
         * ![Bati](https://wiki.rage.mp/images/thumb/c/ce/Bati.png/164px-Bati.png)
         */
        BATI: {
            ID: 'bati',
            HASH: 0xF9300CC5
        },

        /**
         * ![Bati2](https://wiki.rage.mp/images/thumb/6/60/Bati2.png/164px-Bati2.png)
         */
        BATI2: {
            ID: 'bati2',
            HASH: 0xCADD5D2D
        },

        /**
         * ![Bf400](https://wiki.rage.mp/images/thumb/3/3a/BF400.png/164px-BF400.png)
         */
        BF400: {
            ID: 'bf400',
            HASH: 0x5283265
        },

        /**
         * ![Carbonrs](https://wiki.rage.mp/images/thumb/d/d3/CarbonRS.png/164px-CarbonRS.png)
         */
        CARBONRS: {
            ID: 'carbonrs',
            HASH: 0xABB0C0
        },

        /**
         * ![Chimera](https://wiki.rage.mp/images/thumb/3/36/Chimera.png/164px-Chimera.png)
         */
        CHIMERA: {
            ID: 'chimera',
            HASH: 0x675ED7
        },

        /**
         * ![Cliffhanger](https://wiki.rage.mp/images/thumb/1/12/Cliffhanger.png/164px-Cliffhanger.png)
         */
        CLIFFHANGER: {
            ID: 'cliffhanger',
            HASH: 0x17420102
        },

        /**
         * ![Daemon](https://wiki.rage.mp/images/thumb/2/27/Daemon.png/164px-Daemon.png)
         */
        DAEMON: {
            ID: 'daemon',
            HASH: 0x77934CEE
        },

        /**
         * ![Daemon2](https://wiki.rage.mp/images/thumb/8/86/Daemon2.png/164px-Daemon2.png)
         */
        DAEMON2: {
            ID: 'daemon2',
            HASH: 0xAC4E93C9
        },

        /**
         * ![Defiler](https://wiki.rage.mp/images/thumb/4/41/Defiler.png/164px-Defiler.png)
         */
        DEFILER: {
            ID: 'defiler',
            HASH: 0x30FF0190
        },

        /**
         * **DLC:** Arena War
         *
         * ![Deathbike](https://wiki.rage.mp/images/thumb/e/eb/Deathbike.png/164px-Deathbike.png)
         */
        DEATHBIKE: {
            ID: 'deathbike',
            HASH: 0xFE5F0722
        },

        /**
         * **DLC:** Arena War
         *
         * ![Deathbike2](https://wiki.rage.mp/images/thumb/7/71/Deathbike2.png/164px-Deathbike2.png)
         */
        DEATHBIKE2: {
            ID: 'deathbike2',
            HASH: 0x93F09558
        },

        /**
         * **DLC:** Arena War
         *
         * ![Deathbike3](https://wiki.rage.mp/images/thumb/9/90/Deathbike3.png/164px-Deathbike3.png)
         */
        DEATHBIKE3: {
            ID: 'deathbike3',
            HASH: 0xAE12C99C
        },

        /**
         * ![Diablous](https://wiki.rage.mp/images/thumb/4/48/Diablous.png/164px-Diablous.png)
         */
        DIABLOUS: {
            ID: 'diablous',
            HASH: 0xF1B44F44
        },

        /**
         * ![Diablous2](https://wiki.rage.mp/images/thumb/3/3e/Diablous2.png/164px-Diablous2.png)
         */
        DIABLOUS2: {
            ID: 'diablous2',
            HASH: 0x6ABDF65E
        },

        /**
         * ![Double](https://wiki.rage.mp/images/thumb/0/01/Double.png/164px-Double.png)
         */
        DOUBLE: {
            ID: 'double',
            HASH: 0x9C669788
        },

        /**
         * ![Enduro](https://wiki.rage.mp/images/thumb/f/f3/Enduro.png/164px-Enduro.png)
         */
        ENDURO: {
            ID: 'enduro',
            HASH: 0x6882FA73
        },

        /**
         * ![Esskey](https://wiki.rage.mp/images/thumb/2/24/Esskey.png/164px-Esskey.png)
         */
        ESSKEY: {
            ID: 'esskey',
            HASH: 0x794CB30C
        },

        /**
         * ![Faggio](https://wiki.rage.mp/images/thumb/4/4d/Faggio.png/164px-Faggio.png)
         */
        FAGGIO: {
            ID: 'faggio',
            HASH: 0x9229E4EB
        },

        /**
         * ![Faggio2](https://wiki.rage.mp/images/thumb/2/25/Faggio2.png/164px-Faggio2.png)
         */
        FAGGIO2: {
            ID: 'faggio2',
            HASH: 0x350D1AB
        },

        /**
         * ![Faggio3](https://wiki.rage.mp/images/thumb/a/a6/Faggio3.png/164px-Faggio3.png)
         */
        FAGGIO3: {
            ID: 'faggio3',
            HASH: 0xB328B188
        },

        /**
         * ![Fcr](https://wiki.rage.mp/images/thumb/4/46/Fcr.png/164px-Fcr.png)
         */
        FCR: {
            ID: 'fcr',
            HASH: 0x25676EAF
        },

        /**
         * ![Fcr2](https://wiki.rage.mp/images/thumb/d/d5/Fcr2.png/164px-Fcr2.png)
         */
        FCR2: {
            ID: 'fcr2',
            HASH: 0xD2D5E00E
        },

        /**
         * ![Gargoyle](https://wiki.rage.mp/images/thumb/4/44/Gargoyle.png/164px-Gargoyle.png)
         */
        GARGOYLE: {
            ID: 'gargoyle',
            HASH: 0x2C2C2324
        },

        /**
         * ![Hakuchou](https://wiki.rage.mp/images/thumb/2/23/Hakuchou.png/164px-Hakuchou.png)
         */
        HAKUCHOU: {
            ID: 'hakuchou',
            HASH: 0x4B6C568A
        },

        /**
         * ![Hakuchou2](https://wiki.rage.mp/images/thumb/8/87/Hakuchou2.png/164px-Hakuchou2.png)
         */
        HAKUCHOU2: {
            ID: 'hakuchou2',
            HASH: 0xF0C2A91F
        },

        /**
         * ![Hexer](https://wiki.rage.mp/images/thumb/5/56/Hexer.png/164px-Hexer.png)
         */
        HEXER: {
            ID: 'hexer',
            HASH: 0x11F76C14
        },

        /**
         * ![Innovation](https://wiki.rage.mp/images/thumb/4/42/Innovation.png/164px-Innovation.png)
         */
        INNOVATION: {
            ID: 'innovation',
            HASH: 0xF683EACA
        },

        /**
         * ![Lectro](https://wiki.rage.mp/images/thumb/0/00/Lectro.png/164px-Lectro.png)
         */
        LECTRO: {
            ID: 'lectro',
            HASH: 0x26321E67
        },

        /**
         * ![Manchez](https://wiki.rage.mp/images/thumb/3/3c/Manchez.png/164px-Manchez.png)
         */
        MANCHEZ: {
            ID: 'manchez',
            HASH: 0xA5325278
        },

        /**
         * ![Nemesis](https://wiki.rage.mp/images/thumb/e/e3/Nemesis.png/164px-Nemesis.png)
         */
        NEMESIS: {
            ID: 'nemesis',
            HASH: 0xDA288376
        },

        /**
         * ![Nightblade](https://wiki.rage.mp/images/thumb/c/c1/Nightblade.png/164px-Nightblade.png)
         */
        NIGHTBLADE: {
            ID: 'nightblade',
            HASH: 0xA0438767
        },

        /**
         * ![Oppressor](https://wiki.rage.mp/images/thumb/3/32/Oppressor.png/164px-Oppressor.png)
         */
        OPPRESSOR: {
            ID: 'oppressor',
            HASH: 0x34B82784
        },

        /**
         * ![Oppressor2](https://wiki.rage.mp/images/thumb/2/2f/Oppressor2.png/164px-Oppressor2.png)
         */
        OPPRESSOR2: {
            ID: 'oppressor2',
            HASH: 0x7B54A9D3
        },

        /**
         * ![Pcj](https://wiki.rage.mp/images/thumb/9/99/Pcj.png/164px-Pcj.png)
         */
        PCJ: {
            ID: 'pcj',
            HASH: 0xC9CEAF06
        },

        /**
         * ![Ratbike](https://wiki.rage.mp/images/thumb/4/49/Ratbike.png/164px-Ratbike.png)
         */
        RATBIKE: {
            ID: 'ratbike',
            HASH: 0x6FACDF31
        },

        /**
         * ![Ruffian](https://wiki.rage.mp/images/thumb/f/f6/Ruffian.png/164px-Ruffian.png)
         */
        RUFFIAN: {
            ID: 'ruffian',
            HASH: 0xCABD11E8
        },

        /**
         * ![Rrocket](https://wiki.rage.mp/images/thumb/9/91/Rrocket.png/121px-Rrocket.png)
         */
        RROCKET: {
            ID: 'rrocket',
            HASH: 0x36A167E0
        },

        /**
         * ![Sanchez](https://wiki.rage.mp/images/thumb/5/52/Sanchez.png/148px-Sanchez.png)
         */
        SANCHEZ: {
            ID: 'sanchez',
            HASH: 0x2EF89E46
        },

        /**
         * ![Sanchez2](https://wiki.rage.mp/images/thumb/6/6d/Sanchez2.png/164px-Sanchez2.png)
         */
        SANCHEZ2: {
            ID: 'sanchez2',
            HASH: 0xA960B13E
        },

        /**
         * ![Sanctus](https://wiki.rage.mp/images/thumb/e/e2/Sanctus.png/164px-Sanctus.png)
         */
        SANCTUS: {
            ID: 'sanctus',
            HASH: 0x58E316C7
        },

        /**
         * ![Shotaro](https://wiki.rage.mp/images/thumb/e/e3/Shotaro.png/164px-Shotaro.png)
         */
        SHOTARO: {
            ID: 'shotaro',
            HASH: 0xE7D2A16E
        },

        /**
         * ![Sovereign](https://wiki.rage.mp/images/thumb/a/ae/Sovereign.png/164px-Sovereign.png)
         */
        SOVEREIGN: {
            ID: 'sovereign',
            HASH: 0x2C509634
        },

        /**
         * ![Stryder](https://wiki.rage.mp/images/thumb/c/c3/Stryder.png/164px-Stryder.png)
         */
        STRYDER: {
            ID: 'stryder',
            HASH: 0x11F58A5A
        },

        /**
         * ![Thrust](https://wiki.rage.mp/images/thumb/9/90/Thrust.png/164px-Thrust.png)
         */
        THRUST: {
            ID: 'thrust',
            HASH: 0x6D6F8F43
        },

        /**
         * ![Vader](https://wiki.rage.mp/images/thumb/d/dc/Vader.png/164px-Vader.png)
         */
        VADER: {
            ID: 'vader',
            HASH: 0xF79A00F7
        },

        /**
         * ![Vindicator](https://wiki.rage.mp/images/thumb/b/bb/Vindicator.png/164px-Vindicator.png)
         */
        VINDICATOR: {
            ID: 'vindicator',
            HASH: 0xAF599F01
        },

        /**
         * ![Vortex](https://wiki.rage.mp/images/thumb/5/52/Vortex.png/164px-Vortex.png)
         */
        VORTEX: {
            ID: 'vortex',
            HASH: 0xDBA9DBFC
        },

        /**
         * ![Wolfsbane](https://wiki.rage.mp/images/thumb/c/c6/Wolfsbane.png/164px-Wolfsbane.png)
         */
        WOLFSBANE: {
            ID: 'wolfsbane',
            HASH: 0xDB20A373
        },

        /**
         * ![Zombiea](https://wiki.rage.mp/images/thumb/7/7f/Zombiea.png/164px-Zombiea.png)
         */
        ZOMBIEA: {
            ID: 'zombiea',
            HASH: 0xC3D7C72B
        },

        /**
         * ![Zombieb](https://wiki.rage.mp/images/thumb/2/2c/Zombieb.png/164px-Zombieb.png)
         */
        ZOMBIEB: {
            ID: 'zombieb',
            HASH: 0xDE05FB87
        }
    },
    MUSCLE: {
        /**
         * ![Blade](https://wiki.rage.mp/images/thumb/a/ad/Blade.png/164px-Blade.png)
         */
        BLADE: {
            ID: 'blade',
            HASH: 0xB820ED5E
        },

        /**
         * ![Buccaneer](https://wiki.rage.mp/images/thumb/d/de/Buccaneer.png/164px-Buccaneer.png)
         */
        BUCCANEER: {
            ID: 'buccaneer',
            HASH: 0xD756460C
        },

        /**
         * ![Buccaneer2](https://wiki.rage.mp/images/thumb/1/16/Buccaneer2.png/164px-Buccaneer2.png)
         */
        BUCCANEER2: {
            ID: 'buccaneer2',
            HASH: 0xC397F748
        },

        /**
         * ![Chino](https://wiki.rage.mp/images/thumb/4/4d/Chino.png/164px-Chino.png)
         */
        CHINO: {
            ID: 'chino',
            HASH: 0x14D69010
        },

        /**
         * ![Chino2](https://wiki.rage.mp/images/thumb/6/61/Chino2.png/164px-Chino2.png)
         */
        CHINO2: {
            ID: 'chino2',
            HASH: 0xAED64A63
        },

        /**
         * **DLC:** Arena War
         *
         * ![Clique](https://wiki.rage.mp/images/thumb/3/3c/Clique.png/164px-Clique.png)
         */
        CLIQUE: {
            ID: 'clique',
            HASH: 0xA29F78B0
        },

        /**
         * ![Coquette3](https://wiki.rage.mp/images/thumb/6/67/Coquette3.png/164px-Coquette3.png)
         */
        COQUETTE3: {
            ID: 'coquette3',
            HASH: 0x2EC385FE
        },

        /**
         * **DLC:** Arena War
         *
         * ![Deviant](https://wiki.rage.mp/images/thumb/d/d5/Deviant.png/164px-Deviant.png)
         */
        DEVIANT: {
            ID: 'deviant',
            HASH: 0x4C3FFF49
        },

        /**
         * ![Dominator](https://wiki.rage.mp/images/thumb/6/6e/Dominator.png/164px-Dominator.png)
         */
        DOMINATOR: {
            ID: 'dominator',
            HASH: 0x4CE68AC
        },

        /**
         * ![Dominator2](https://wiki.rage.mp/images/thumb/5/57/Dominator2.png/164px-Dominator2.png)
         */
        DOMINATOR2: {
            ID: 'dominator2',
            HASH: 0xC96B73D9
        },

        /**
         * ![Dominator3](https://wiki.rage.mp/images/thumb/b/ba/Dominator3.png/164px-Dominator3.png)
         */
        DOMINATOR3: {
            ID: 'dominator3',
            HASH: 0xC52C6B93
        },

        /**
         * **DLC:** Arena War
         *
         * ![Dominator4](https://wiki.rage.mp/images/thumb/b/be/Dominator4.png/164px-Dominator4.png)
         */
        DOMINATOR4: {
            ID: 'dominator4',
            HASH: 0xD6FB0F30
        },

        /**
         * **DLC:** Arena War
         *
         * ![Dominator5](https://wiki.rage.mp/images/thumb/5/51/Dominator5.png/164px-Dominator5.png)
         */
        DOMINATOR5: {
            ID: 'dominator5',
            HASH: 0xAE0A3D4F
        },

        /**
         * **DLC:** Arena War
         *
         * ![Dominator6](https://wiki.rage.mp/images/thumb/8/84/Dominator6.png/164px-Dominator6.png)
         */
        DOMINATOR6: {
            ID: 'dominator6',
            HASH: 0xB2E046FB
        },

        /**
         * ![Dukes](https://wiki.rage.mp/images/thumb/6/6e/Dukes.png/164px-Dukes.png)
         */
        DUKES: {
            ID: 'dukes',
            HASH: 0x2B26F456
        },

        /**
         * ![Dukes2](https://wiki.rage.mp/images/thumb/4/45/Dukes2.png/164px-Dukes2.png)
         */
        DUKES2: {
            ID: 'dukes2',
            HASH: 0xEC8F7094
        },

        /**
         * ![Faction](https://wiki.rage.mp/images/thumb/5/55/Faction.png/164px-Faction.png)
         */
        FACTION: {
            ID: 'faction',
            HASH: 0x81A9CDDF
        },

        /**
         * ![Faction2](https://wiki.rage.mp/images/thumb/4/41/Faction2.png/164px-Faction2.png)
         */
        FACTION2: {
            ID: 'faction2',
            HASH: 0x95466BDB
        },

        /**
         * ![Faction3](https://wiki.rage.mp/images/thumb/a/a8/Faction3.png/164px-Faction3.png)
         */
        FACTION3: {
            ID: 'faction3',
            HASH: 0x866BCE26
        },

        /**
         * ![Ellie](https://wiki.rage.mp/images/thumb/e/ef/Ellie.png/164px-Ellie.png)
         */
        ELLIE: {
            ID: 'ellie',
            HASH: 0xB472D2B5
        },

        /**
         * ![Gauntlet](https://wiki.rage.mp/images/thumb/7/71/Gauntlet.png/164px-Gauntlet.png)
         */
        GAUNTLET: {
            ID: 'gauntlet',
            HASH: 0x94B395C5
        },

        /**
         * ![Gauntlet2](https://wiki.rage.mp/images/thumb/b/b0/Gauntlet2.png/164px-Gauntlet2.png)
         */
        GAUNTLET2: {
            ID: 'gauntlet2',
            HASH: 0x14D22159
        },

        /**
         * ![Gauntlet3](https://wiki.rage.mp/images/thumb/8/88/Gauntlet3.png/152px-Gauntlet3.png)
         */
        GAUNTLET3: {
            ID: 'gauntlet3',
            HASH: 0x2B0C4DCD
        },

        /**
         * ![Gauntlet4](https://wiki.rage.mp/images/thumb/e/ec/Gauntlet4.png/141px-Gauntlet4.png)
         */
        GAUNTLET4: {
            ID: 'gauntlet4',
            HASH: 0x734C5E50
        },

        /**
         * ![Hermes](https://wiki.rage.mp/images/thumb/0/0d/Hermes.png/164px-Hermes.png)
         */
        HERMES: {
            ID: 'hermes',
            HASH: 0xE83C17
        },

        /**
         * ![Hotknife](https://wiki.rage.mp/images/thumb/1/16/Hotknife.png/164px-Hotknife.png)
         */
        HOTKNIFE: {
            ID: 'hotknife',
            HASH: 0x239E390
        },

        /**
         * ![Hustler](https://wiki.rage.mp/images/thumb/3/3f/Hustler.png/141px-Hustler.png)
         */
        HUSTLER: {
            ID: 'hustler',
            HASH: 0x23CA25F2
        },

        /**
         * **DLC:** Arena War
         *
         * ![Impaler](https://wiki.rage.mp/images/thumb/3/31/Impaler.png/164px-Impaler.png)
         */
        IMPALER: {
            ID: 'impaler',
            HASH: 0xB2E046FB
        },

        /**
         * **DLC:** Arena War
         *
         * ![Impaler2](https://wiki.rage.mp/images/thumb/4/40/Impaler2.png/164px-Impaler2.png)
         */
        IMPALER2: {
            ID: 'impaler2',
            HASH: 0x3C26BD0C
        },

        /**
         * **DLC:** Arena War
         *
         * ![Impaler3](https://wiki.rage.mp/images/thumb/9/9b/Impaler3.png/164px-Impaler3.png)
         */
        IMPALER3: {
            ID: 'impaler3',
            HASH: 0x8D45DF49
        },

        /**
         * **DLC:** Arena War
         *
         * ![Impaler4](https://wiki.rage.mp/images/thumb/4/4b/Impaler4.png/164px-Impaler4.png)
         */
        IMPALER4: {
            ID: 'impaler4',
            HASH: 0x9804F4C7
        },

        /**
         * **DLC:** Arena War
         *
         * ![Imperator](https://wiki.rage.mp/images/thumb/b/be/Imperator.png/164px-Imperator.png)
         */
        IMPERATOR: {
            ID: 'imperator',
            HASH: 0x1A861243
        },

        /**
         * **DLC:** Arena War
         *
         * ![Imperator2](https://wiki.rage.mp/images/thumb/6/6b/Imperator2.png/164px-Imperator2.png)
         */
        IMPERATOR2: {
            ID: 'imperator2',
            HASH: 0x619C1B82
        },

        /**
         * **DLC:** Arena War
         *
         * ![Imperator3](https://wiki.rage.mp/images/thumb/b/b8/Imperator3.png/164px-Imperator3.png)
         */
        IMPERATOR3: {
            ID: 'imperator3',
            HASH: 0xD2F77E37
        },

        /**
         * ![Lurcher](https://wiki.rage.mp/images/thumb/0/03/Lurcher.png/164px-Lurcher.png)
         */
        LURCHER: {
            ID: 'lurcher',
            HASH: 0x7B47A6A7
        },

        /**
         * ![Moonbeam](https://wiki.rage.mp/images/thumb/5/5d/Moonbeam.png/164px-Moonbeam.png)
         */
        MOONBEAM: {
            ID: 'moonbeam',
            HASH: 0x1F52A43F
        },

        /**
         * ![Moonbeam2](https://wiki.rage.mp/images/thumb/c/c1/Moonbeam2.png/164px-Moonbeam2.png)
         */
        MOONBEAM2: {
            ID: 'moonbeam2',
            HASH: 0x710A2B9B
        },

        /**
         * ![Nightshade](https://wiki.rage.mp/images/thumb/e/ec/Nightshade.png/164px-Nightshade.png)
         */
        NIGHTSHADE: {
            ID: 'nightshade',
            HASH: 0x8C2BD0DC
        },

        /**
         * ![Peyote2](https://wiki.rage.mp/images/thumb/3/35/Peyote2.png/137px-Peyote2.png)
         */
        PEYOTE2: {
            ID: 'peyote2',
            HASH: 0x9472CD24
        },

        /**
         * ![Phoenix](https://wiki.rage.mp/images/thumb/5/53/Pheonix.png/164px-Pheonix.png)
         */
        PHOENIX: {
            ID: 'phoenix',
            HASH: 0x831A21D5
        },

        /**
         * ![Picador](https://wiki.rage.mp/images/thumb/1/15/Picador.png/164px-Picador.png)
         */
        PICADOR: {
            ID: 'picador',
            HASH: 0x59E0FBF3
        },

        /**
         * ![Ratloader](https://wiki.rage.mp/images/thumb/7/7a/Ratloader.png/164px-Ratloader.png)
         */
        RATLOADER: {
            ID: 'ratloader',
            HASH: 0xD83C13CE
        },

        /**
         * ![Ratloader2](https://wiki.rage.mp/images/thumb/b/b7/Ratloader2.png/164px-Ratloader2.png)
         */
        RATLOADER2: {
            ID: 'ratloader2',
            HASH: 0xDCE1D9F7
        },

        /**
         * ![Ruiner](https://wiki.rage.mp/images/thumb/b/b4/Ruiner.png/164px-Ruiner.png)
         */
        RUINER: {
            ID: 'ruiner',
            HASH: 0xF26CEFF9
        },

        /**
         * ![Ruiner2](https://wiki.rage.mp/images/thumb/c/c3/Ruiner2.png/164px-Ruiner2.png)
         */
        RUINER2: {
            ID: 'ruiner2',
            HASH: 0x381E10BD
        },

        /**
         * ![Ruiner3](https://wiki.rage.mp/images/thumb/b/b1/Ruiner3.png/164px-Ruiner3.png)
         */
        RUINER3: {
            ID: 'ruiner3',
            HASH: 0x2E5AFD37
        },

        /**
         * ![Sabregt](https://wiki.rage.mp/images/thumb/0/04/Sabregt.png/164px-Sabregt.png)
         */
        SABREGT: {
            ID: 'sabregt',
            HASH: 0x9B909C94
        },

        /**
         * ![Sabregt2](https://wiki.rage.mp/images/thumb/b/ba/Sabregt2.png/164px-Sabregt2.png)
         */
        SABREGT2: {
            ID: 'sabregt2',
            HASH: 0xD4EA603
        },

        /**
         * ![Slamvan](https://wiki.rage.mp/images/thumb/3/39/SlamVan.png/133px-SlamVan.png)
         */
        SLAMVAN: {
            ID: 'slamvan',
            HASH: 0x2B7F9DE3
        },

        /**
         * ![Slamvan2](https://wiki.rage.mp/images/thumb/3/3a/SlamVan2.png/133px-SlamVan2.png)
         */
        SLAMVAN2: {
            ID: 'slamvan2',
            HASH: 0x31ADBBFC
        },

        /**
         * ![Slamvan3](https://wiki.rage.mp/images/thumb/f/fe/Slamvan3.png/164px-Slamvan3.png)
         */
        SLAMVAN3: {
            ID: 'slamvan3',
            HASH: 0x42BC5E19
        },

        /**
         * **DLC:** Arena War
         *
         * ![Slamvan4](https://wiki.rage.mp/images/thumb/8/88/SlamVan4.png/164px-SlamVan4.png)
         */
        SLAMVAN4: {
            ID: 'slamvan4',
            HASH: 0x8526E2F5
        },

        /**
         * **DLC:** Arena War
         *
         * ![Slamvan5](https://wiki.rage.mp/images/thumb/8/8e/SlamVan5.png/164px-SlamVan5.png)
         */
        SLAMVAN5: {
            ID: 'slamvan5',
            HASH: 0x163F8520
        },

        /**
         * **DLC:** Arena War
         *
         * ![Slamvan6](https://wiki.rage.mp/images/thumb/f/fa/SlamVan6.png/164px-SlamVan6.png)
         */
        SLAMVAN6: {
            ID: 'slamvan6',
            HASH: 0x67D52852
        },

        /**
         * ![Stalion](https://wiki.rage.mp/images/thumb/c/ce/Stalion.png/164px-Stalion.png)
         */
        STALION: {
            ID: 'stalion',
            HASH: 0x72A4C31E
        },

        /**
         * ![Stalion2](https://wiki.rage.mp/images/thumb/4/4a/Stalion2.png/164px-Stalion2.png)
         */
        STALION2: {
            ID: 'stalion2',
            HASH: 0xE80F67EE
        },

        /**
         * ![Tampa](https://wiki.rage.mp/images/thumb/3/30/Tampa.png/164px-Tampa.png)
         */
        TAMPA: {
            ID: 'tampa',
            HASH: 0x39F9C898
        },

        /**
         * ![Tampa3](https://wiki.rage.mp/images/thumb/0/02/Tampa3.png/164px-Tampa3.png)
         */
        TAMPA3: {
            ID: 'tampa3',
            HASH: 0xB7D9F7F1
        },

        /**
         * **DLC:** Arena War
         *
         * ![Tulip](https://wiki.rage.mp/images/thumb/c/cf/Tulip.png/164px-Tulip.png)
         */
        TULIP: {
            ID: 'tulip',
            HASH: 0x56D42971
        },

        /**
         * **DLC:** Arena War
         *
         * ![Vamos](https://wiki.rage.mp/images/thumb/0/07/Vamos.png/164px-Vamos.png)
         */
        VAMOS: {
            ID: 'vamos',
            HASH: 0xFD128DFD
        },

        /**
         * ![Vigero](https://wiki.rage.mp/images/thumb/2/22/Vigero.png/164px-Vigero.png)
         */
        VIGERO: {
            ID: 'vigero',
            HASH: 0xCEC6B9B7
        },

        /**
         * ![Virgo](https://wiki.rage.mp/images/thumb/4/41/Virgo.png/164px-Virgo.png)
         */
        VIRGO: {
            ID: 'virgo',
            HASH: 0xE2504942
        },

        /**
         * ![Virgo2](https://wiki.rage.mp/images/thumb/8/81/Virgo2.png/164px-Virgo2.png)
         */
        VIRGO2: {
            ID: 'virgo2',
            HASH: 0xCA62927A
        },

        /**
         * ![Virgo3](https://wiki.rage.mp/images/thumb/4/4d/Virgo3.png/164px-Virgo3.png)
         */
        VIRGO3: {
            ID: 'virgo3',
            HASH: 0xFDFFB0
        },

        /**
         * ![Voodoo](https://wiki.rage.mp/images/thumb/1/1e/Voodoo.png/164px-Voodoo.png)
         */
        VOODOO: {
            ID: 'voodoo',
            HASH: 0x779B4F2D
        },

        /**
         * ![Voodoo2](https://wiki.rage.mp/images/thumb/5/5e/Voodoo2.png/164px-Voodoo2.png)
         */
        VOODOO2: {
            ID: 'voodoo2',
            HASH: 0x1F3766E3
        },

        /**
         * ![Yosemite](https://wiki.rage.mp/images/thumb/7/7a/Yosemite.png/164px-Yosemite.png)
         */
        YOSEMITE: {
            ID: 'yosemite',
            HASH: 0x6F946279
        },

        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Yosemite2](https://wiki.rage.mp/images/thumb/5/58/Yosemite2.png/164px-Yosemite2.png)
         */
        YOSEMITE2: {
            ID: 'yosemite2',
            HASH: 0x64F49967
        }
    },
    OFF_ROAD: {
        /**
         * ![Bfinjection](https://wiki.rage.mp/images/thumb/3/3d/Bfinject.png/164px-Bfinject.png)
         */
        BFINJECTION: {
            ID: 'bfinjection',
            HASH: 0x432AA566
        },

        /**
         * ![Bifta](https://wiki.rage.mp/images/thumb/b/b7/Bifta.png/164px-Bifta.png)
         */
        BIFTA: {
            ID: 'bifta',
            HASH: 0xEB298297
        },

        /**
         * ![Blazer](https://wiki.rage.mp/images/thumb/3/3e/Blazer.png/164px-Blazer.png)
         */
        BLAZER: {
            ID: 'blazer',
            HASH: 0x8125BCF9
        },

        /**
         * ![Blazer2](https://wiki.rage.mp/images/thumb/c/c9/Blazer2.png/164px-Blazer2.png)
         */
        BLAZER2: {
            ID: 'blazer2',
            HASH: 0xFD231729
        },

        /**
         * ![Blazer3](https://wiki.rage.mp/images/thumb/d/d5/Blazer3.png/164px-Blazer3.png)
         */
        BLAZER3: {
            ID: 'blazer3',
            HASH: 0xB44F0582
        },

        /**
         * ![Blazer4](https://wiki.rage.mp/images/thumb/5/5f/Blazer4.png/164px-Blazer4.png)
         */
        BLAZER4: {
            ID: 'blazer4',
            HASH: 0xE5BA6858
        },

        /**
         * ![Blazer5](https://wiki.rage.mp/images/thumb/d/d4/Blazer5.png/164px-Blazer5.png)
         */
        BLAZER5: {
            ID: 'blazer5',
            HASH: 0xA1355F67
        },

        /**
         * ![Bodhi2](https://wiki.rage.mp/images/thumb/c/ce/Bodhi2.png/164px-Bodhi2.png)
         */
        BODHI2: {
            ID: 'bodhi2',
            HASH: 0xAA699BB6
        },

        /**
         * ![Brawler](https://wiki.rage.mp/images/thumb/f/fa/Brawler.png/164px-Brawler.png)
         */
        BRAWLER: {
            ID: 'brawler',
            HASH: 0xA7CE1BC5
        },

        /**
         * **DLC:** Arena War
         *
         * ![Bruiser](https://wiki.rage.mp/images/thumb/e/e4/Bruiser.png/164px-Bruiser.png)
         */
        BRUISER: {
            ID: 'bruiser',
            HASH: 0x27D79225
        },

        /**
         * **DLC:** Arena War
         *
         * ![Bruiser2](https://wiki.rage.mp/images/thumb/b/ba/Bruiser2.png/164px-Bruiser2.png)
         */
        BRUISER2: {
            ID: 'bruiser2',
            HASH: 0x9B065C9E
        },

        /**
         * **DLC:** Arena War
         *
         * ![Bruiser3](https://wiki.rage.mp/images/thumb/5/5b/Bruiser3.png/164px-Bruiser3.png)
         */
        BRUISER3: {
            ID: 'bruiser3',
            HASH: 0x8644331A
        },

        /**
         * **DLC:** Arena War
         *
         * ![Brutus](https://wiki.rage.mp/images/thumb/5/5a/Brutus.png/164px-Brutus.png)
         */
        BRUTUS: {
            ID: 'brutus',
            HASH: 0x7F81A829
        },

        /**
         * **DLC:** Arena War
         *
         * ![Brutus2](https://wiki.rage.mp/images/thumb/f/fe/Brutus2.png/164px-Brutus2.png)
         */
        BRUTUS2: {
            ID: 'brutus2',
            HASH: 0x8F49AE28
        },

        /**
         * **DLC:** Arena War
         *
         * ![Brutus3](https://wiki.rage.mp/images/thumb/f/fd/Brutus3.png/164px-Brutus3.png)
         */
        BRUTUS3: {
            ID: 'brutus3',
            HASH: 0x798682A2
        },

        /**
         * ![Caracara](https://wiki.rage.mp/images/thumb/0/06/Caracara.png/157px-Caracara.png)
         */
        CARACARA: {
            ID: 'caracara',
            HASH: 0x4ABEBF23
        },

        /**
         * ![Caracara2](https://wiki.rage.mp/images/thumb/3/3b/Caracara2.png/115px-Caracara2.png)
         */
        CARACARA2: {
            ID: 'caracara2',
            HASH: 0xAF966F3C
        },

        /**
         * ![Dloader](https://wiki.rage.mp/images/thumb/1/1a/Dloader.png/164px-Dloader.png)
         */
        DLOADER: {
            ID: 'dloader',
            HASH: 0x698521E3
        },

        /**
         * ![Dubsta3](https://wiki.rage.mp/images/thumb/d/d6/Dubsta3.png/164px-Dubsta3.png)
         */
        DUBSTA3: {
            ID: 'dubsta3',
            HASH: 0xB6410173
        },

        /**
         * ![Dune](https://wiki.rage.mp/images/thumb/c/c6/Dune.png/164px-Dune.png)
         */
        DUNE: {
            ID: 'dune',
            HASH: 0x9CF21E0F
        },

        /**
         * ![Dune2](https://wiki.rage.mp/images/thumb/1/10/Dune2.png/164px-Dune2.png)
         */
        DUNE2: {
            ID: 'dune2',
            HASH: 0x1FD824AF
        },

        /**
         * ![Dune3](https://wiki.rage.mp/images/thumb/a/a6/Dune3.png/164px-Dune3.png)
         */
        DUNE3: {
            ID: 'dune3',
            HASH: 0x711D4738
        },

        /**
         * ![Dune4](https://wiki.rage.mp/images/thumb/7/7f/Dune4.png/164px-Dune4.png)
         */
        DUNE4: {
            ID: 'dune4',
            HASH: 0xCEB28249
        },

        /**
         * ![Dune5](https://wiki.rage.mp/images/thumb/b/bf/Dune5.png/164px-Dune5.png)
         */
        DUNE5: {
            ID: 'dune5',
            HASH: 0xED62BFA9
        },

        /**
         * ![Everon](https://wiki.rage.mp/images/thumb/8/83/Everon.png/163px-Everon.png)
         */
        EVERON: {
            ID: 'everon',
            HASH: 0x97553C28
        },

        /**
         * ![Freecrawler](https://wiki.rage.mp/images/thumb/5/56/Freecrawler.png/164px-Freecrawler.png)
         */
        FREECRAWLER: {
            ID: 'freecrawler',
            HASH: 0xFCC2F483
        },

        /**
         * ![Hellion](https://wiki.rage.mp/images/thumb/c/cf/Hellion.png/116px-Hellion.png)
         */
        HELLION: {
            ID: 'hellion',
            HASH: 0xEA6A047F
        },

        /**
         * ![Insurgent](https://wiki.rage.mp/images/thumb/b/bb/Insurgent.png/164px-Insurgent.png)
         */
        INSURGENT: {
            ID: 'insurgent',
            HASH: 0x9114EADA
        },

        /**
         * ![Insurgent2](https://wiki.rage.mp/images/thumb/2/2c/Insurgent2.png/164px-Insurgent2.png)
         */
        INSURGENT2: {
            ID: 'insurgent2',
            HASH: 0x7B7E56F0
        },

        /**
         * ![Insurgent3](https://wiki.rage.mp/images/thumb/a/a0/Insurgent3.png/164px-Insurgent3.png)
         */
        INSURGENT3: {
            ID: 'insurgent3',
            HASH: 0x8D4B7A8A
        },

        /**
         * ![Kalahari](https://wiki.rage.mp/images/thumb/5/55/Kalahari.png/164px-Kalahari.png)
         */
        KALAHARI: {
            ID: 'kalahari',
            HASH: 0x5852838
        },

        /**
         * ![Kamacho](https://wiki.rage.mp/images/thumb/d/d0/Kamacho.png/150px-Kamacho.png)
         */
        KAMACHO: {
            ID: 'kamacho',
            HASH: 0xF8C2E0E7
        },

        /**
         * ![Marshall](https://wiki.rage.mp/images/thumb/7/71/Marshall.png/164px-Marshall.png)
         */
        MARSHALL: {
            ID: 'marshall',
            HASH: 0x49863E9C
        },

        /**
         * ![Mesa3](https://wiki.rage.mp/images/thumb/c/c6/Mesa3.png/164px-Mesa3.png)
         */
        MESA3: {
            ID: 'mesa3',
            HASH: 0x84F42E51
        },

        /**
         * ![Monster](https://wiki.rage.mp/images/thumb/1/13/Monster.png/164px-Monster.png)
         */
        MONSTER: {
            ID: 'monster',
            HASH: 0xCD93A7DB
        },

        /**
         * **DLC:** Arena War
         *
         * ![Monster3](https://wiki.rage.mp/images/thumb/c/ce/Monster3.png/164px-Monster3.png)
         */
        MONSTER3: {
            ID: 'monster3',
            HASH: 0x669EB40A
        },

        /**
         * **DLC:** Arena War
         *
         * ![Monster4](https://wiki.rage.mp/images/thumb/3/37/Monster4.png/164px-Monster4.png)
         */
        MONSTER4: {
            ID: 'monster4',
            HASH: 0x32174AFC
        },

        /**
         * **DLC:** Arena War
         *
         * ![Monster5](https://wiki.rage.mp/images/thumb/8/82/Monster5.png/164px-Monster5.png)
         */
        MONSTER5: {
            ID: 'monster5',
            HASH: 0xD556917C
        },

        /**
         * ![Menacer](https://wiki.rage.mp/images/thumb/e/ea/Menacer.png/164px-Menacer.png)
         */
        MENACER: {
            ID: 'menacer',
            HASH: 0x79DD18AE
        },

        /**
         * ![Outlaw](https://wiki.rage.mp/images/thumb/f/f0/Outlaw.png/164px-Outlaw.png)
         */
        OUTLAW: {
            ID: 'outlaw',
            HASH: 0x185E2FF3
        },

        /**
         * **DLC:** Arena War
         *
         * ![Nightshark](https://wiki.rage.mp/images/thumb/8/85/Nightshark.png/164px-Nightshark.png)
         */
        NIGHTSHARK: {
            ID: 'nightshark',
            HASH: 0x19DD9ED1
        },

        /**
         * ![Rancherxl](https://wiki.rage.mp/images/thumb/e/ef/Rancherxl.png/164px-Rancherxl.png)
         */
        RANCHERXL: {
            ID: 'rancherxl',
            HASH: 0x6210CBB0
        },

        /**
         * ![Rancherxl2](https://wiki.rage.mp/images/thumb/6/6c/Rancherxl2.png/164px-Rancherxl2.png)
         */
        RANCHERXL2: {
            ID: 'rancherxl2',
            HASH: 0x7341576B
        },

        /**
         * ![Rebel](https://wiki.rage.mp/images/thumb/e/e3/Rebel.png/164px-Rebel.png)
         */
        REBEL: {
            ID: 'rebel',
            HASH: 0xB802DD46
        },

        /**
         * ![Rebel2](https://wiki.rage.mp/images/thumb/9/90/Rebel2.png/164px-Rebel2.png)
         */
        REBEL2: {
            ID: 'rebel2',
            HASH: 0x8612B64B
        },

        /**
         * **DLC:** Arena War
         *
         * ![Rcbandito](https://wiki.rage.mp/images/thumb/f/fc/RCBandito.png/164px-RCBandito.png)
         */
        RCBANDITO: {
            ID: 'rcbandito',
            HASH: 0xEEF345EC
        },

        /**
         * ![Riata](https://wiki.rage.mp/images/thumb/4/4d/Riata.png/164px-Riata.png)
         */
        RIATA: {
            ID: 'riata',
            HASH: 0xA4A4E453
        },

        /**
         * ![Sandking](https://wiki.rage.mp/images/thumb/6/64/Sandking.png/164px-Sandking.png)
         */
        SANDKING: {
            ID: 'sandking',
            HASH: 0xB9210FD0
        },

        /**
         * ![Sandking2](https://wiki.rage.mp/images/thumb/d/d1/Sandking2.png/164px-Sandking2.png)
         */
        SANDKING2: {
            ID: 'sandking2',
            HASH: 0x3AF8C345
        },

        /**
         * ![Technical](https://wiki.rage.mp/images/thumb/e/e8/Technical.png/164px-Technical.png)
         */
        TECHNICAL: {
            ID: 'technical',
            HASH: 0x83051506
        },

        /**
         * ![Technical2](https://wiki.rage.mp/images/thumb/7/79/Technical2.png/164px-Technical2.png)
         */
        TECHNICAL2: {
            ID: 'technical2',
            HASH: 0x4662BCBB
        },

        /**
         * ![Technical3](https://wiki.rage.mp/images/thumb/1/1d/Technical3.png/164px-Technical3.png)
         */
        TECHNICAL3: {
            ID: 'technical3',
            HASH: 0x50D4D19F
        },

        /**
         * ![Trophytruck](https://wiki.rage.mp/images/thumb/1/18/Trophytruck.png/164px-Trophytruck.png)
         */
        TROPHYTRUCK: {
            ID: 'trophytruck',
            HASH: 0x612F4B6
        },

        /**
         * ![Trophytruck2](https://wiki.rage.mp/images/thumb/8/85/Trophytruck2.png/164px-Trophytruck2.png)
         */
        TROPHYTRUCK2: {
            ID: 'trophytruck2',
            HASH: 0xD876DBE2
        },

        /**
         * ![Vagrant](https://wiki.rage.mp/images/thumb/8/87/Vagrant.png/147px-Vagrant.png)
         */
        VAGRANT: {
            ID: 'vagrant',
            HASH: 0x2C1FEA99
        },

        /**
         * ![Zhaba](https://wiki.rage.mp/images/thumb/a/a2/Zhaba.png/123px-Zhaba.png)
         */
        ZHABA: {
            ID: 'zhaba',
            HASH: 0x4C8DBA51
        }
    },
    OPEN_WHEEL: {
        /**
         * ![Formula](https://wiki.rage.mp/images/thumb/c/cf/Formula.png/142px-Formula.png)
         */
        FORMULA: {
            ID: 'formula',
            HASH: 0x1446590A
        },

        /**
         * ![Formula2](https://wiki.rage.mp/images/thumb/0/03/Formula2.png/164px-Formula2.png)
         */
        FORMULA2: {
            ID: 'formula2',
            HASH: 0x8B213907
        }
    },
    PLANES: {
        /**
         * ![Alphaz1](https://wiki.rage.mp/images/thumb/4/46/Alphaz1.png/164px-Alphaz1.png)
         */
        ALPHAZ1: {
            ID: 'alphaz1',
            HASH: 0xA52F6866
        },

        /**
         * ![Avenger](https://wiki.rage.mp/images/thumb/5/5c/Avenger.png/164px-Avenger.png)
         */
        AVENGER: {
            ID: 'avenger',
            HASH: 0x81BD2ED0
        },

        /**
         * ![Avenger2](https://wiki.rage.mp/images/thumb/4/4b/Avenger2.png/164px-Avenger2.png)
         */
        AVENGER2: {
            ID: 'avenger2',
            HASH: 0x18606535
        },

        /**
         * ![Besra](https://wiki.rage.mp/images/thumb/3/35/Besra.png/164px-Besra.png)
         */
        BESRA: {
            ID: 'besra',
            HASH: 0x6CBD1D6D
        },

        /**
         * ![Blimp](https://wiki.rage.mp/images/thumb/1/19/Blimp.png/164px-Blimp.png)
         */
        BLIMP: {
            ID: 'blimp',
            HASH: 0xF7004C86
        },

        /**
         * ![Blimp2](https://wiki.rage.mp/images/thumb/7/77/Blimp2.png/164px-Blimp2.png)
         */
        BLIMP2: {
            ID: 'blimp2',
            HASH: 0xDB6B4924
        },

        /**
         * ![Blimp3](https://wiki.rage.mp/images/thumb/4/4c/Blimp3.png/164px-Blimp3.png)
         */
        BLIMP3: {
            ID: 'blimp3',
            HASH: 0xEDA4ED97
        },

        /**
         * ![Bombushka](https://wiki.rage.mp/images/thumb/d/d0/Bombushka.png/164px-Bombushka.png)
         */
        BOMBUSHKA: {
            ID: 'bombushka',
            HASH: 0xFE0A508C
        },

        /**
         * ![Cargoplane](https://wiki.rage.mp/images/thumb/2/2a/Cargoplane.png/164px-Cargoplane.png)
         */
        CARGOPLANE: {
            ID: 'cargoplane',
            HASH: 0x15F27762
        },

        /**
         * ![Cuban800](https://wiki.rage.mp/images/thumb/6/63/Cuban800.png/164px-Cuban800.png)
         */
        CUBAN800: {
            ID: 'cuban800',
            HASH: 0xD9927FE3
        },

        /**
         * ![Dodo](https://wiki.rage.mp/images/thumb/f/fc/Dodo.png/164px-Dodo.png)
         */
        DODO: {
            ID: 'dodo',
            HASH: 0xCA495705
        },

        /**
         * ![Duster](https://wiki.rage.mp/images/thumb/a/a0/Duster.png/164px-Duster.png)
         */
        DUSTER: {
            ID: 'duster',
            HASH: 0x39D6779E
        },

        /**
         * ![Howard](https://wiki.rage.mp/images/thumb/0/09/Howard.png/164px-Howard.png)
         */
        HOWARD: {
            ID: 'howard',
            HASH: 0xC3F25753
        },

        /**
         * ![Hydra](https://wiki.rage.mp/images/thumb/9/9d/Hydra.png/164px-Hydra.png)
         */
        HYDRA: {
            ID: 'hydra',
            HASH: 0x39D6E83F
        },

        /**
         * ![Jet](https://wiki.rage.mp/images/thumb/1/1e/Jet.png/164px-Jet.png)
         */
        JET: {
            ID: 'jet',
            HASH: 0x3F119114
        },

        /**
         * ![Lazer](https://wiki.rage.mp/images/thumb/6/6c/Lazer.png/164px-Lazer.png)
         */
        LAZER: {
            ID: 'lazer',
            HASH: 0xB39B0AE6
        },

        /**
         * ![Luxor](https://wiki.rage.mp/images/thumb/f/f3/Luxor.png/133px-Luxor.png)
         */
        LUXOR: {
            ID: 'luxor',
            HASH: 0x250B0C5E
        },

        /**
         * ![Luxor2](https://wiki.rage.mp/images/thumb/a/a8/Luxor2.png/164px-Luxor2.png)
         */
        LUXOR2: {
            ID: 'luxor2',
            HASH: 0xB79F589E
        },

        /**
         * ![Mammatus](https://wiki.rage.mp/images/thumb/a/a7/Mammatus.png/164px-Mammatus.png)
         */
        MAMMATUS: {
            ID: 'mammatus',
            HASH: 0x97E55D11
        },

        /**
         * ![Microlight](https://wiki.rage.mp/images/thumb/6/62/Microlight.png/164px-Microlight.png)
         */
        MICROLIGHT: {
            ID: 'microlight',
            HASH: 0x96E24857
        },

        /**
         * ![Miljet](https://wiki.rage.mp/images/thumb/b/b8/Miljet.png/164px-Miljet.png)
         */
        MILJET: {
            ID: 'miljet',
            HASH: 0x9D80F93
        },

        /**
         * ![Mogul](https://wiki.rage.mp/images/thumb/4/47/Mogul.png/164px-Mogul.png)
         */
        MOGUL: {
            ID: 'mogul',
            HASH: 0xD35698EF
        },

        /**
         * ![Molotok](https://wiki.rage.mp/images/thumb/a/ac/Molotok.png/164px-Molotok.png)
         */
        MOLOTOK: {
            ID: 'molotok',
            HASH: 0x5D56F01B
        },

        /**
         * ![Nimbus](https://wiki.rage.mp/images/thumb/c/c8/Nimbus.png/164px-Nimbus.png)
         */
        NIMBUS: {
            ID: 'nimbus',
            HASH: 0xB2CF7250
        },

        /**
         * ![Nokota](https://wiki.rage.mp/images/thumb/d/d0/Nokota.png/164px-Nokota.png)
         */
        NOKOTA: {
            ID: 'nokota',
            HASH: 0x3DC92356
        },

        /**
         * ![Pyro](https://wiki.rage.mp/images/thumb/c/c8/Pyro.png/164px-Pyro.png)
         */
        PYRO: {
            ID: 'pyro',
            HASH: 0xAD6065C0
        },

        /**
         * ![Rogue](https://wiki.rage.mp/images/thumb/5/59/Rogue.png/164px-Rogue.png)
         */
        ROGUE: {
            ID: 'rogue',
            HASH: 0xC5DD6967
        },

        /**
         * ![Seabreeze](https://wiki.rage.mp/images/thumb/a/ae/Seabreeze.png/164px-Seabreeze.png)
         */
        SEABREEZE: {
            ID: 'seabreeze',
            HASH: 0xE8983F9F
        },

        /**
         * ![Shamal](https://wiki.rage.mp/images/thumb/b/be/Shamal.png/164px-Shamal.png)
         */
        SHAMAL: {
            ID: 'shamal',
            HASH: 0xB79C1BF5
        },

        /**
         * ![Starling](https://wiki.rage.mp/images/thumb/9/98/Starling.png/164px-Starling.png)
         */
        STARLING: {
            ID: 'starling',
            HASH: 0x9A9EB7DE
        },

        /**
         * ![Strikeforce](https://wiki.rage.mp/images/thumb/8/8f/Strikeforce.png/164px-Strikeforce.png)
         */
        STRIKEFORCE: {
            ID: 'strikeforce',
            HASH: 0x64DE07A1
        },

        /**
         * ![Stunt](https://wiki.rage.mp/images/thumb/a/aa/Stunt.png/164px-Stunt.png)
         */
        STUNT: {
            ID: 'stunt',
            HASH: 0x81794C70
        },

        /**
         * ![Titan](https://wiki.rage.mp/images/thumb/8/88/Titan.png/164px-Titan.png)
         */
        TITAN: {
            ID: 'titan',
            HASH: 0x761E2AD3
        },

        /**
         * ![Tula](https://wiki.rage.mp/images/thumb/e/e8/Tula.png/164px-Tula.png)
         */
        TULA: {
            ID: 'tula',
            HASH: 0x3E2E4F8A
        },

        /**
         * ![Velum](https://wiki.rage.mp/images/thumb/c/c3/Velum.png/133px-Velum.png)
         */
        VELUM: {
            ID: 'velum',
            HASH: 0x9C429B6A
        },

        /**
         * ![Velum2](https://wiki.rage.mp/images/thumb/e/e7/Velum2.png/164px-Velum2.png)
         */
        VELUM2: {
            ID: 'velum2',
            HASH: 0x403820E8
        },

        /**
         * ![Vestra](https://wiki.rage.mp/images/thumb/8/8f/Vestra.png/164px-Vestra.png)
         */
        VESTRA: {
            ID: 'vestra',
            HASH: 0x4FF77E37
        },

        /**
         * ![Volatol](https://wiki.rage.mp/images/thumb/c/c4/Volatol.png/164px-Volatol.png)
         */
        VOLATOL: {
            ID: 'volatol',
            HASH: 0x1AAD0DED
        }
    },
    SUVS: {
        /**
         * ![Baller](https://wiki.rage.mp/images/thumb/7/79/Baller.png/164px-Baller.png)
         */
        BALLER: {
            ID: 'baller',
            HASH: 0xCFCA3668
        },

        /**
         * ![Baller2](https://wiki.rage.mp/images/thumb/9/98/Baller2.png/164px-Baller2.png)
         */
        BALLER2: {
            ID: 'baller2',
            HASH: 0x8852855
        },

        /**
         * ![Baller3](https://wiki.rage.mp/images/thumb/9/9b/Baller3.png/164px-Baller3.png)
         */
        BALLER3: {
            ID: 'baller3',
            HASH: 0x6FF0F727
        },

        /**
         * ![Baller4](https://wiki.rage.mp/images/thumb/e/e8/Baller4.png/164px-Baller4.png)
         */
        BALLER4: {
            ID: 'baller4',
            HASH: 0x25CBE2E2
        },

        /**
         * ![Baller5](https://wiki.rage.mp/images/thumb/3/34/Baller5.png/164px-Baller5.png)
         */
        BALLER5: {
            ID: 'baller5',
            HASH: 0x1C09CF5E
        },

        /**
         * ![Baller6](https://wiki.rage.mp/images/thumb/8/81/Baller6.png/164px-Baller6.png)
         */
        BALLER6: {
            ID: 'baller6',
            HASH: 0x27B4E6B0
        },

        /**
         * ![Bjxl](https://wiki.rage.mp/images/thumb/d/da/Bjxl.png/164px-Bjxl.png)
         */
        BJXL: {
            ID: 'bjxl',
            HASH: 0x32B29A4B
        },

        /**
         * ![Cavalcade](https://wiki.rage.mp/images/thumb/9/9e/Cavalcade.png/164px-Cavalcade.png)
         */
        CAVALCADE: {
            ID: 'cavalcade',
            HASH: 0x779F23AA
        },

        /**
         * ![Cavalcade2](https://wiki.rage.mp/images/thumb/b/bc/Cavalcade2.png/164px-Cavalcade2.png)
         */
        CAVALCADE2: {
            ID: 'cavalcade2',
            HASH: 0xD0EB2BE5
        },

        /**
         * ![Contender](https://wiki.rage.mp/images/thumb/2/2e/Contender.png/164px-Contender.png)
         */
        CONTENDER: {
            ID: 'contender',
            HASH: 0x28B67ACA
        },

        /**
         * ![Dubsta](https://wiki.rage.mp/images/thumb/e/ec/Dubsta.png/164px-Dubsta.png)
         */
        DUBSTA: {
            ID: 'dubsta',
            HASH: 0x462FE277
        },

        /**
         * ![Dubsta2](https://wiki.rage.mp/images/thumb/3/36/Dubsta2.png/164px-Dubsta2.png)
         */
        DUBSTA2: {
            ID: 'dubsta2',
            HASH: 0xE882E5F6
        },

        /**
         * ![Fq2](https://wiki.rage.mp/images/thumb/a/a4/Fq2.png/164px-Fq2.png)
         */
        FQ2: {
            ID: 'fq2',
            HASH: 0xBC32A33B
        },

        /**
         * ![Granger](https://wiki.rage.mp/images/thumb/4/4d/Granger.png/164px-Granger.png)
         */
        GRANGER: {
            ID: 'granger',
            HASH: 0x9628879C
        },

        /**
         * ![Gresley](https://wiki.rage.mp/images/thumb/d/d6/Gresley.png/164px-Gresley.png)
         */
        GRESLEY: {
            ID: 'gresley',
            HASH: 0xA3FC0F4D
        },

        /**
         * ![Habanero](https://wiki.rage.mp/images/thumb/1/1e/Habanero.png/164px-Habanero.png)
         */
        HABANERO: {
            ID: 'habanero',
            HASH: 0x34B7390F
        },

        /**
         * ![Huntley](https://wiki.rage.mp/images/thumb/1/1c/Huntley.png/164px-Huntley.png)
         */
        HUNTLEY: {
            ID: 'huntley',
            HASH: 0x1D06D681
        },

        /**
         * ![Landstalker](https://wiki.rage.mp/images/thumb/7/70/Landstalker.png/164px-Landstalker.png)
         */
        LANDSTALKER: {
            ID: 'landstalker',
            HASH: 0x4BA4E8DC
        },

        /**
         * ![Mesa](https://wiki.rage.mp/images/thumb/c/cc/Mesa.png/164px-Mesa.png)
         */
        MESA: {
            ID: 'mesa',
            HASH: 0x36848602
        },

        /**
         * ![Mesa2](https://wiki.rage.mp/images/thumb/b/be/Mesa2.png/164px-Mesa2.png)
         */
        MESA2: {
            ID: 'mesa2',
            HASH: 0xD36A4B44
        },

        /**
         * ![Novak](https://wiki.rage.mp/images/thumb/7/76/Novak.png/111px-Novak.png)
         */
        NOVAK: {
            ID: 'novak',
            HASH: 0x92F5024E
        },

        /**
         * ![Patriot](https://wiki.rage.mp/images/thumb/1/12/Patriot.png/164px-Patriot.png)
         */
        PATRIOT: {
            ID: 'patriot',
            HASH: 0xCFCFEB3B
        },

        /**
         * **DLC:** After Hours
         *
         * ![Patriot2](https://wiki.rage.mp/images/thumb/8/83/Patriot2.png/164px-Patriot2.png)
         */
        PATRIOT2: {
            ID: 'patriot2',
            HASH: 0xE6E967F8
        },

        /**
         * ![Radi](https://wiki.rage.mp/images/thumb/9/9c/Radi.png/164px-Radi.png)
         */
        RADI: {
            ID: 'radi',
            HASH: 0x9D96B45B
        },

        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Rebla](https://wiki.rage.mp/images/thumb/9/94/Rebla.png/136px-Rebla.png)
         */
        REBLA: {
            ID: 'rebla',
            HASH: 0x4F48FC4
        },

        /**
         * ![Rocoto](https://wiki.rage.mp/images/thumb/2/23/Rocoto.png/164px-Rocoto.png)
         */
        ROCOTO: {
            ID: 'rocoto',
            HASH: 0x7F5C91F1
        },

        /**
         * ![Seminole](https://wiki.rage.mp/images/thumb/c/cc/Seminole.png/164px-Seminole.png)
         */
        SEMINOLE: {
            ID: 'seminole',
            HASH: 0x48CECED3
        },

        /**
         * ![Serrano](https://wiki.rage.mp/images/thumb/a/ac/Serrano.png/164px-Serrano.png)
         */
        SERRANO: {
            ID: 'serrano',
            HASH: 0x4FB1A214
        },

        /**
         * **DLC:** Arena War
         *
         * ![Toros](https://wiki.rage.mp/images/thumb/f/f1/Toros.png/164px-Toros.png)
         */
        TOROS: {
            ID: 'toros',
            HASH: 0xBA5334AC
        },

        /**
         * ![Xls](https://wiki.rage.mp/images/thumb/0/0f/Xls.png/164px-Xls.png)
         */
        XLS: {
            ID: 'xls',
            HASH: 0x47BBCF2E
        },

        /**
         * ![Xls2](https://wiki.rage.mp/images/thumb/3/35/Xls2.png/164px-Xls2.png)
         */
        XLS2: {
            ID: 'xls2',
            HASH: 0xE6401328
        }
    },
    SEDANS: {
        /**
         * ![Asea](https://wiki.rage.mp/images/thumb/c/ce/Asea.png/164px-Asea.png)
         */
        ASEA: {
            ID: 'asea',
            HASH: 0x94204D89
        },

        /**
         * ![Asea2](https://wiki.rage.mp/images/thumb/a/ae/Asea2.png/164px-Asea2.png)
         */
        ASEA2: {
            ID: 'asea2',
            HASH: 0x9441D8D5
        },

        /**
         * ![Asterope](https://wiki.rage.mp/images/thumb/0/05/Asterope.png/164px-Asterope.png)
         */
        ASTEROPE: {
            ID: 'asterope',
            HASH: 0x8E9254FB
        },

        /**
         * ![Cog55](https://wiki.rage.mp/images/thumb/d/d5/Cog55.png/164px-Cog55.png)
         */
        COG55: {
            ID: 'cog55',
            HASH: 0x360A438E
        },

        /**
         * ![Cog552](https://wiki.rage.mp/images/thumb/7/79/Cog552.png/164px-Cog552.png)
         */
        COG552: {
            ID: 'cog552',
            HASH: 0x29FCD3E4
        },

        /**
         * ![Cognoscenti](https://wiki.rage.mp/images/thumb/5/51/Cognoscenti.png/164px-Cognoscenti.png)
         */
        COGNOSCENTI: {
            ID: 'cognoscenti',
            HASH: 0x86FE0B60
        },

        /**
         * ![Cognoscenti2](https://wiki.rage.mp/images/thumb/2/2e/Cognoscenti2.png/164px-Cognoscenti2.png)
         */
        COGNOSCENTI2: {
            ID: 'cognoscenti2',
            HASH: 0xDBF2D57A
        },

        /**
         * ![Emperor](https://wiki.rage.mp/images/thumb/c/c5/Emperor.png/164px-Emperor.png)
         */
        EMPEROR: {
            ID: 'emperor',
            HASH: 0xD7278283
        },

        /**
         * ![Emperor2](https://wiki.rage.mp/images/thumb/1/16/Emperor2.png/164px-Emperor2.png)
         */
        EMPEROR2: {
            ID: 'emperor2',
            HASH: 0x8FC3AADC
        },

        /**
         * ![Emperor3](https://wiki.rage.mp/images/thumb/0/0f/Emperor3.png/164px-Emperor3.png)
         */
        EMPEROR3: {
            ID: 'emperor3',
            HASH: 0xB5FCF74E
        },

        /**
         * ![Fugitive](https://wiki.rage.mp/images/thumb/7/73/Fugitive.png/164px-Fugitive.png)
         */
        FUGITIVE: {
            ID: 'fugitive',
            HASH: 0x71CB2FFB
        },

        /**
         * ![Glendale](https://wiki.rage.mp/images/thumb/b/b2/Glendale.png/164px-Glendale.png)
         */
        GLENDALE: {
            ID: 'glendale',
            HASH: 0x47A6BC1
        },

        /**
         * ![Ingot](https://wiki.rage.mp/images/thumb/7/74/Ingot.png/164px-Ingot.png)
         */
        INGOT: {
            ID: 'ingot',
            HASH: 0xB3206692
        },

        /**
         * ![Intruder](https://wiki.rage.mp/images/thumb/9/92/Intruder.png/164px-Intruder.png)
         */
        INTRUDER: {
            ID: 'intruder',
            HASH: 0x34DD8AA1
        },

        /**
         * ![Limo2](https://wiki.rage.mp/images/thumb/d/d5/Limo2.png/164px-Limo2.png)
         */
        LIMO2: {
            ID: 'limo2',
            HASH: 0xF92AEC4D
        },

        /**
         * ![Premier](https://wiki.rage.mp/images/thumb/9/9d/Premier.png/164px-Premier.png)
         */
        PREMIER: {
            ID: 'premier',
            HASH: 0x8FB66F9B
        },

        /**
         * ![Primo](https://wiki.rage.mp/images/thumb/4/45/Primo.png/164px-Primo.png)
         */
        PRIMO: {
            ID: 'primo',
            HASH: 0xBB6B404F
        },

        /**
         * ![Primo2](https://wiki.rage.mp/images/thumb/3/30/Primo2.png/164px-Primo2.png)
         */
        PRIMO2: {
            ID: 'primo2',
            HASH: 0x86618EDA
        },

        /**
         * ![Regina](https://wiki.rage.mp/images/thumb/5/5f/Regina.png/164px-Regina.png)
         */
        REGINA: {
            ID: 'regina',
            HASH: 0xFF22D208
        },

        /**
         * ![Romero](https://wiki.rage.mp/images/thumb/7/73/Romero.png/164px-Romero.png)
         */
        ROMERO: {
            ID: 'romero',
            HASH: 0x2560B2FC
        },

        /**
         * ![Stafford](https://wiki.rage.mp/images/thumb/e/e9/Stafford.png/164px-Stafford.png)
         */
        STAFFORD: {
            ID: 'stafford',
            HASH: 0x1324E960
        },

        /**
         * ![Stanier](https://wiki.rage.mp/images/thumb/5/57/Stanier.png/164px-Stanier.png)
         */
        STANIER: {
            ID: 'stanier',
            HASH: 0xA7EDE74D
        },

        /**
         * ![Stratum](https://wiki.rage.mp/images/thumb/b/ba/Stratum.png/164px-Stratum.png)
         */
        STRATUM: {
            ID: 'stratum',
            HASH: 0x66B4FC45
        },

        /**
         * ![Stretch](https://wiki.rage.mp/images/thumb/8/8a/Stretch.png/164px-Stretch.png)
         */
        STRETCH: {
            ID: 'stretch',
            HASH: 0x8B13F083
        },

        /**
         * ![Superd](https://wiki.rage.mp/images/thumb/6/6e/Superd.png/164px-Superd.png)
         */
        SUPERD: {
            ID: 'superd',
            HASH: 0x42F2ED16
        },

        /**
         * ![Surge](https://wiki.rage.mp/images/thumb/1/1a/Surge.png/164px-Surge.png)
         */
        SURGE: {
            ID: 'surge',
            HASH: 0x8F0E3594
        },

        /**
         * ![Tailgater](https://wiki.rage.mp/images/thumb/a/af/Tailgater.png/164px-Tailgater.png)
         */
        TAILGATER: {
            ID: 'tailgater',
            HASH: 0xC3DDFDCE
        },

        /**
         * ![Warrener](https://wiki.rage.mp/images/thumb/2/22/Warrener.png/164px-Warrener.png)
         */
        WARRENER: {
            ID: 'warrener',
            HASH: 0x51D83328
        },

        /**
         * ![Washington](https://wiki.rage.mp/images/thumb/e/e2/Washington.png/164px-Washington.png)
         */
        WASHINGTON: {
            ID: 'washington',
            HASH: 0x69F06B57
        }
    },
    SERVICE: {
        /**
         * ![Airbus](https://wiki.rage.mp/images/thumb/3/32/Airbus.png/164px-Airbus.png)
         */
        AIRBUS: {
            ID: 'airbus',
            HASH: 0x4C80EB0E
        },

        /**
         * ![Brickade](https://wiki.rage.mp/images/thumb/8/83/Brickade.png/164px-Brickade.png)
         */
        BRICKADE: {
            ID: 'brickade',
            HASH: 0xEDC6F847
        },

        /**
         * ![Bus](https://wiki.rage.mp/images/thumb/4/43/Bus.png/164px-Bus.png)
         */
        BUS: {
            ID: 'bus',
            HASH: 0xD577C962
        },

        /**
         * ![Coach](https://wiki.rage.mp/images/thumb/9/9d/Coach.png/164px-Coach.png)
         */
        COACH: {
            ID: 'coach',
            HASH: 0x84718D34
        },

        /**
         * ![Pbus2](https://wiki.rage.mp/images/thumb/f/f4/Pbus2.png/164px-Pbus2.png)
         */
        PBUS2: {
            ID: 'pbus2',
            HASH: 0x149BD32A
        },

        /**
         * ![Rallytruck](https://wiki.rage.mp/images/thumb/a/a5/Rallytruck.png/164px-Rallytruck.png)
         */
        RALLYTRUCK: {
            ID: 'rallytruck',
            HASH: 0x829A3C44
        },

        /**
         * ![Rentalbus](https://wiki.rage.mp/images/thumb/4/48/Rentalbus.png/164px-Rentalbus.png)
         */
        RENTALBUS: {
            ID: 'rentalbus',
            HASH: 0xBE819C63
        },

        /**
         * ![Taxi](https://wiki.rage.mp/images/thumb/a/a6/Taxi.png/164px-Taxi.png)
         */
        TAXI: {
            ID: 'taxi',
            HASH: 0xC703DB5F
        },

        /**
         * ![Tourbus](https://wiki.rage.mp/images/thumb/a/ac/Tourbus.png/164px-Tourbus.png)
         */
        TOURBUS: {
            ID: 'tourbus',
            HASH: 0x73B1C3CB
        },

        /**
         * ![Trash](https://wiki.rage.mp/images/thumb/6/6e/Trash.png/164px-Trash.png)
         */
        TRASH: {
            ID: 'trash',
            HASH: 0x72435A19
        },

        /**
         * ![Trash2](https://wiki.rage.mp/images/thumb/8/88/Trash2.png/164px-Trash2.png)
         */
        TRASH2: {
            ID: 'trash2',
            HASH: 0xB527915C
        },

        /**
         * ![Wastelander](https://wiki.rage.mp/images/thumb/7/7c/Wastelander.png/164px-Wastelander.png)
         */
        WASTELANDER: {
            ID: 'wastelander',
            HASH: 0x8E08EC82
        }
    },
    SPORTS: {
        /**
         * ![Alpha](https://wiki.rage.mp/images/thumb/a/a8/Alpha.png/164px-Alpha.png)
         */
        ALPHA: {
            ID: 'alpha',
            HASH: 0x2DB8D1AA
        },

        /**
         * ![Banshee](https://wiki.rage.mp/images/thumb/d/d3/Banshee.png/164px-Banshee.png)
         */
        BANSHEE: {
            ID: 'banshee',
            HASH: 0xC1E908D2
        },

        /**
         * ![Bestiagts](https://wiki.rage.mp/images/thumb/5/5c/Bestiagts.png/164px-Bestiagts.png)
         */
        BESTIAGTS: {
            ID: 'bestiagts',
            HASH: 0x4BFCF28B
        },

        /**
         * ![Blista2](https://wiki.rage.mp/images/thumb/0/0c/Blista2.png/164px-Blista2.png)
         */
        BLISTA2: {
            ID: 'blista2',
            HASH: 0x3DEE5EDA
        },

        /**
         * ![Blista3](https://wiki.rage.mp/images/thumb/8/8c/Blista3.png/164px-Blista3.png)
         */
        BLISTA3: {
            ID: 'blista3',
            HASH: 0xDCBC1C3B
        },

        /**
         * ![Buffalo](https://wiki.rage.mp/images/thumb/0/0a/Buffalo.png/164px-Buffalo.png)
         */
        BUFFALO: {
            ID: 'buffalo',
            HASH: 0xEDD516C6
        },

        /**
         * ![Buffalo2](https://wiki.rage.mp/images/thumb/2/2c/Buffalo2.png/164px-Buffalo2.png)
         */
        BUFFALO2: {
            ID: 'buffalo2',
            HASH: 0x2BEC3CBE
        },

        /**
         * ![Buffalo3](https://wiki.rage.mp/images/thumb/6/68/Buffalo3.png/164px-Buffalo3.png)
         */
        BUFFALO3: {
            ID: 'buffalo3',
            HASH: 0xE2C013E
        },

        /**
         * ![Carbonizzare](https://wiki.rage.mp/images/thumb/4/43/Carbonizzare.png/164px-Carbonizzare.png)
         */
        CARBONIZZARE: {
            ID: 'carbonizzare',
            HASH: 0x7B8AB45F
        },

        /**
         * ![Comet2](https://wiki.rage.mp/images/thumb/c/cb/Comet2.png/164px-Comet2.png)
         */
        COMET2: {
            ID: 'comet2',
            HASH: 0xC1AE4D16
        },

        /**
         * ![Comet3](https://wiki.rage.mp/images/thumb/b/b6/Comet3.png/164px-Comet3.png)
         */
        COMET3: {
            ID: 'comet3',
            HASH: 0x877358AD
        },

        /**
         * ![Comet4](https://wiki.rage.mp/images/thumb/f/f1/Comet4.png/164px-Comet4.png)
         */
        COMET4: {
            ID: 'comet4',
            HASH: 0x5D1903F9
        },

        /**
         * ![Comet5](https://wiki.rage.mp/images/thumb/c/ca/Comet5.png/153px-Comet5.png)
         */
        COMET5: {
            ID: 'comet5',
            HASH: 0x276D98A3
        },

        /**
         * ![Coquette](https://wiki.rage.mp/images/thumb/d/d6/Coquette.png/164px-Coquette.png)
         */
        COQUETTE: {
            ID: 'coquette',
            HASH: 0x67BC037
        },

        /**
         * ![Drafter](https://wiki.rage.mp/images/thumb/a/aa/Drafter.png/149px-Drafter.png)
         */
        DRAFTER: {
            ID: 'drafter',
            HASH: 0x28EAB80F
        },

        /**
         * **DLC:** Arena War
         *
         * ![Deveste](https://wiki.rage.mp/images/thumb/3/3f/Deveste.png/164px-Deveste.png)
         */
        DEVESTE: {
            ID: 'deveste',
            HASH: 0x5EE005DA
        },

        /**
         * ![Elegy](https://wiki.rage.mp/images/thumb/e/ea/Elegy.png/164px-Elegy.png)
         */
        ELEGY: {
            ID: 'elegy',
            HASH: 0xBBA2261
        },

        /**
         * ![Elegy2](https://wiki.rage.mp/images/thumb/3/33/Elegy2.png/164px-Elegy2.png)
         */
        ELEGY2: {
            ID: 'elegy2',
            HASH: 0xDE3D9D22
        },

        /**
         * ![Feltzer2](https://wiki.rage.mp/images/thumb/7/7c/Feltzer2.png/164px-Feltzer2.png)
         */
        FELTZER2: {
            ID: 'feltzer2',
            HASH: 0x8911B9F5
        },

        /**
         * ![Flashgt](https://wiki.rage.mp/images/thumb/8/80/Flashgt.png/150px-Flashgt.png)
         */
        FLASHGT: {
            ID: 'flashgt',
            HASH: 0xB4F32118
        },

        /**
         * ![Furoregt](https://wiki.rage.mp/images/thumb/c/cb/Furoregt.png/164px-Furoregt.png)
         */
        FUROREGT: {
            ID: 'furoregt',
            HASH: 0xBF1691E0
        },

        /**
         * ![Fusilade](https://wiki.rage.mp/images/thumb/5/56/Fusilade.png/164px-Fusilade.png)
         */
        FUSILADE: {
            ID: 'fusilade',
            HASH: 0x1DC0BA53
        },

        /**
         * ![Futo](https://wiki.rage.mp/images/thumb/0/04/Futo.png/164px-Futo.png)
         */
        FUTO: {
            ID: 'futo',
            HASH: 0x7836CE2F
        },

        /**
         * ![Gb200](https://wiki.rage.mp/images/thumb/3/35/Gb200.png/153px-Gb200.png)
         */
        GB200: {
            ID: 'gb200',
            HASH: 0x71CBEA98
        },

        /**
         * ![Hotring](https://wiki.rage.mp/images/thumb/2/26/Hotring.png/164px-Hotring.png)
         */
        HOTRING: {
            ID: 'hotring',
            HASH: 0x42836BE5
        },

        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Komoda](https://wiki.rage.mp/images/thumb/4/47/Komoda.png/164px-Komoda.png)
         */
        KOMODA: {
            ID: 'komoda',
            HASH: 0xCE44C4B9
        },

        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Imorgon](https://wiki.rage.mp/images/thumb/1/1f/Imorgon.png/164px-Imorgon.png)
         */
        IMORGON: {
            ID: 'imorgon',
            HASH: 0xBC7C0A00
        },

        /**
         * ![Issi7](https://wiki.rage.mp/images/thumb/0/04/Issi7.png/121px-Issi7.png)
         */
        ISSI7: {
            ID: 'issi7',
            HASH: 0x6E8DA4F7
        },

        /**
         * **DLC:** Arena War
         *
         * ![Italigto](https://wiki.rage.mp/images/thumb/8/83/ItaliGTO.png/164px-ItaliGTO.png)
         */
        ITALIGTO: {
            ID: 'italigto',
            HASH: 0xEC3E3404
        },

        /**
         * ![Jugular](https://wiki.rage.mp/images/thumb/6/69/Jugular.png/146px-Jugular.png)
         */
        JUGULAR: {
            ID: 'jugular',
            HASH: 0xF38C4245
        },

        /**
         * ![Jester](https://wiki.rage.mp/images/thumb/e/e0/Jester.png/164px-Jester.png)
         */
        JESTER: {
            ID: 'jester',
            HASH: 0xB2A716A3
        },

        /**
         * ![Jester2](https://wiki.rage.mp/images/thumb/3/34/Jester2.png/164px-Jester2.png)
         */
        JESTER2: {
            ID: 'jester2',
            HASH: 0xBE0E6126
        },

        /**
         * ![Jester3](https://wiki.rage.mp/images/thumb/1/19/Jester3.png/160px-Jester3.png)
         */
        JESTER3: {
            ID: 'jester3',
            HASH: 0xF330CB6A
        },

        /**
         * ![Khamelion](https://wiki.rage.mp/images/thumb/2/2e/Khamelion.png/164px-Khamelion.png)
         */
        KHAMELION: {
            ID: 'khamelion',
            HASH: 0x206D1B68
        },

        /**
         * ![Kuruma](https://wiki.rage.mp/images/thumb/8/8f/Kuruma.png/164px-Kuruma.png)
         */
        KURUMA: {
            ID: 'kuruma',
            HASH: 0xAE2BFE94
        },

        /**
         * ![Kuruma2](https://wiki.rage.mp/images/thumb/0/09/Kuruma2.png/164px-Kuruma2.png)
         */
        KURUMA2: {
            ID: 'kuruma2',
            HASH: 0x187D938D
        },

        /**
         * ![Locust](https://wiki.rage.mp/images/thumb/1/1e/Locust.png/130px-Locust.png)
         */
        LOCUST: {
            ID: 'locust',
            HASH: 0xC7E55211
        },

        /**
         * ![Lynx](https://wiki.rage.mp/images/thumb/a/a7/Lynx2.png/164px-Lynx2.png)
         */
        LYNX: {
            ID: 'lynx',
            HASH: 0x5DCA7C9A
        },

        /**
         * ![Massacro](https://wiki.rage.mp/images/thumb/7/78/Massacro.png/164px-Massacro.png)
         */
        MASSACRO: {
            ID: 'massacro',
            HASH: 0xF77ADE32
        },

        /**
         * ![Massacro2](https://wiki.rage.mp/images/thumb/b/be/Massacro2.png/164px-Massacro2.png)
         */
        MASSACRO2: {
            ID: 'massacro2',
            HASH: 0xDA5819A3
        },

        /**
         * ![Neo](https://wiki.rage.mp/images/thumb/7/74/Neo.png/138px-Neo.png)
         */
        NEO: {
            ID: 'neo',
            HASH: 0x9F6ED5A2
        },

        /**
         * ![Neon](https://wiki.rage.mp/images/thumb/1/17/Neon.png/164px-Neon.png)
         */
        NEON: {
            ID: 'neon',
            HASH: 0x91CA96EE
        },

        /**
         * ![Ninef](https://wiki.rage.mp/images/thumb/5/59/Ninef.png/164px-Ninef.png)
         */
        NINEF: {
            ID: 'ninef',
            HASH: 0x3D8FA25C
        },

        /**
         * ![Ninef2](https://wiki.rage.mp/images/thumb/f/f6/Ninef2.png/164px-Ninef2.png)
         */
        NINEF2: {
            ID: 'ninef2',
            HASH: 0xA8E38B01
        },

        /**
         * ![Omnis](https://wiki.rage.mp/images/thumb/1/12/Omnis.png/164px-Omnis.png)
         */
        OMNIS: {
            ID: 'omnis',
            HASH: 0xD1AD4937
        },

        /**
         * ![Paragon](https://wiki.rage.mp/images/thumb/1/1e/Paragon.png/141px-Paragon.png)
         */
        PARAGON: {
            ID: 'paragon',
            HASH: 0xE550775B
        },

        /**
         * ![Paragon2](https://wiki.rage.mp/images/thumb/5/52/Paragon2.png/148px-Paragon2.png)
         */
        PARAGON2: {
            ID: 'paragon2',
            HASH: 0x546D8EEE
        },

        /**
         * ![Pariah](https://wiki.rage.mp/images/thumb/d/df/Pariah.png/164px-Pariah.png)
         */
        PARIAH: {
            ID: 'pariah',
            HASH: 0x33B98FE2
        },

        /**
         * ![Penumbra](https://wiki.rage.mp/images/thumb/9/93/Penumbra.png/164px-Penumbra.png)
         */
        PENUMBRA: {
            ID: 'penumbra',
            HASH: 0xE9805550
        },

        /**
         * ![Raiden](https://wiki.rage.mp/images/thumb/5/5f/Raiden.png/164px-Raiden.png)
         */
        RAIDEN: {
            ID: 'raiden',
            HASH: 0xA4D99B7D
        },

        /**
         * ![Rapidgt](https://wiki.rage.mp/images/thumb/e/e9/Rapidgt.png/164px-Rapidgt.png)
         */
        RAPIDGT: {
            ID: 'rapidgt',
            HASH: 0x8CB29A14
        },

        /**
         * ![Rapidgt2](https://wiki.rage.mp/images/thumb/3/3e/Rapidgt2.png/164px-Rapidgt2.png)
         */
        RAPIDGT2: {
            ID: 'rapidgt2',
            HASH: 0x679450AF
        },

        /**
         * ![Raptor](https://wiki.rage.mp/images/thumb/0/08/Raptor.png/164px-Raptor.png)
         */
        RAPTOR: {
            ID: 'raptor',
            HASH: 0xD7C56D39
        },

        /**
         * ![Revolter](https://wiki.rage.mp/images/thumb/2/24/Revolter.png/164px-Revolter.png)
         */
        REVOLTER: {
            ID: 'revolter',
            HASH: 0xE78CC3D9
        },

        /**
         * **DLC:** Cunning Stunts: Special Vehicle Circuit
         *
         * ![Ruston](https://wiki.rage.mp/images/thumb/b/ba/Ruston.png/164px-Ruston.png)
         */
        RUSTON: {
            ID: 'ruston',
            HASH: 0x2AE524A8
        },

        /**
         * ![Schafter2](https://wiki.rage.mp/images/thumb/c/cc/Schafter2.png/164px-Schafter2.png)
         */
        SCHAFTER2: {
            ID: 'schafter2',
            HASH: 0xB52B5113
        },

        /**
         * ![Schafter3](https://wiki.rage.mp/images/thumb/a/a9/Schafter3.png/164px-Schafter3.png)
         */
        SCHAFTER3: {
            ID: 'schafter3',
            HASH: 0xA774B5A6
        },

        /**
         * **DLC:** Executives and other Criminals
         *
         * ![Schafter4](https://wiki.rage.mp/images/thumb/2/29/Schafter4.png/164px-Schafter4.png)
         */
        SCHAFTER4: {
            ID: 'schafter4',
            HASH: 0x58CF185C
        },

        /**
         * **DLC:** Executives and other Criminals
         *
         * ![Schafter5](https://wiki.rage.mp/images/thumb/2/28/Schafter5.png/164px-Schafter5.png)
         */
        SCHAFTER5: {
            ID: 'schafter5',
            HASH: 0xCB0E7CD9
        },

        /**
         * **DLC:** Executives and other Criminals
         *
         * ![Schafter6](https://wiki.rage.mp/images/thumb/a/a6/Schafter6.png/164px-Schafter6.png)
         */
        SCHAFTER6: {
            ID: 'schafter6',
            HASH: 0x72934BE4
        },

        /**
         * **DLC:** Arena War
         *
         * ![Schlagen](https://wiki.rage.mp/images/thumb/9/97/Schlagen.png/164px-Schlagen.png)
         */
        SCHLAGEN: {
            ID: 'schlagen',
            HASH: 0xE1C03AB0
        },

        /**
         * ![Schwarzer](https://wiki.rage.mp/images/thumb/1/19/Schwarzer.png/164px-Schwarzer.png)
         */
        SCHWARZER: {
            ID: 'schwarzer',
            HASH: 0xD37B7976
        },

        /**
         * ![Sentinel3](https://wiki.rage.mp/images/thumb/0/0f/Sentinel3.png/164px-Sentinel3.png)
         */
        SENTINEL3: {
            ID: 'sentinel3',
            HASH: 0x41D149AA
        },

        /**
         * ![Seven70](https://wiki.rage.mp/images/thumb/6/60/Seven70.png/164px-Seven70.png)
         */
        SEVEN70: {
            ID: 'seven70',
            HASH: 0x97398A4B
        },

        /**
         * ![Specter](https://wiki.rage.mp/images/thumb/f/f1/Specter.png/164px-Specter.png)
         */
        SPECTER: {
            ID: 'specter',
            HASH: 0x706E2B40
        },

        /**
         * ![Specter2](https://wiki.rage.mp/images/thumb/9/9f/Specter2.png/164px-Specter2.png)
         */
        SPECTER2: {
            ID: 'specter2',
            HASH: 0x400F5147
        },

        /**
         * ![Streiter](https://wiki.rage.mp/images/thumb/8/81/Streiter.png/164px-Streiter.png)
         */
        STREITER: {
            ID: 'streiter',
            HASH: 0x67D2B389
        },

        /**
         * ![Sugoi](https://wiki.rage.mp/images/thumb/2/25/Sugoi.png/164px-Sugoi.png)
         */
        SUGOI: {
            ID: 'sugoi',
            HASH: 0x3ADB9758
        },

        /**
         * ![Sultan](https://wiki.rage.mp/images/thumb/f/f4/Sultan.png/164px-Sultan.png)
         */
        SULTAN: {
            ID: 'sultan',
            HASH: 0x39DA2754
        },

        /**
         * ![Sultan2](https://wiki.rage.mp/images/thumb/5/57/Sultan2.png/163px-Sultan2.png)
         */
        SULTAN2: {
            ID: 'sultan2',
            HASH: 0x3404691C
        },

        /**
         * ![Surano](https://wiki.rage.mp/images/thumb/9/96/Surano.png/164px-Surano.png)
         */
        SURANO: {
            ID: 'surano',
            HASH: 0x16E478C1
        },

        /**
         * ![Tampa2](https://wiki.rage.mp/images/thumb/a/af/Tampa2.png/164px-Tampa2.png)
         */
        TAMPA2: {
            ID: 'tampa2',
            HASH: 0xC0240885
        },

        /**
         * ![Tropos](https://wiki.rage.mp/images/thumb/7/71/Tropos.png/164px-Tropos.png)
         */
        TROPOS: {
            ID: 'tropos',
            HASH: 0x707E63A4
        },

        /**
         * ![Verlierer2](https://wiki.rage.mp/images/thumb/8/81/Verlierer2.png/164px-Verlierer2.png)
         */
        VERLIERER2: {
            ID: 'verlierer2',
            HASH: 0x41B77FA4
        },

        /**
         * **DLC:** The Diamond Casino Heist
         *
         * ![Vstr](https://wiki.rage.mp/images/thumb/4/43/Vstr.png/164px-Vstr.png)
         */
        VSTR: {
            ID: 'vstr',
            HASH: 0x56CDEE7D
        },

        /**
         * **DLC:** Arena War
         *
         * ![Zr380](https://wiki.rage.mp/images/thumb/b/ba/ZR380.png/164px-ZR380.png)
         */
        ZR380: {
            ID: 'zr380',
            HASH: 0x20314B42
        },

        /**
         * **DLC:** Arena War
         *
         * ![Zr3802](https://wiki.rage.mp/images/thumb/2/21/ZR3802.png/164px-ZR3802.png)
         */
        ZR3802: {
            ID: 'zr3802',
            HASH: 0xBE11EFC6
        },

        /**
         * **DLC:** Arena War
         *
         * ![Zr3803](https://wiki.rage.mp/images/thumb/3/35/ZR3803.png/164px-ZR3803.png)
         */
        ZR3803: {
            ID: 'zr3803',
            HASH: 0xA7DCC35C
        }
    },
    SPORTS_CLASSIC: {
        /**
         * ![Ardent](https://wiki.rage.mp/images/thumb/3/3d/Ardent.png/164px-Ardent.png)
         */
        ARDENT: {
            ID: 'ardent',
            HASH: 0x97E5533
        },

        /**
         * ![Btype](https://wiki.rage.mp/images/thumb/6/64/Btype.png/164px-Btype.png)
         */
        BTYPE: {
            ID: 'btype',
            HASH: 0x6FF6914
        },

        /**
         * ![Btype2](https://wiki.rage.mp/images/thumb/9/98/Btype2.png/164px-Btype2.png)
         */
        BTYPE2: {
            ID: 'btype2',
            HASH: 0xCE6B35A4
        },

        /**
         * ![Btype3](https://wiki.rage.mp/images/thumb/3/34/Btype3.png/164px-Btype3.png)
         */
        BTYPE3: {
            ID: 'btype3',
            HASH: 0xDC19D101
        },

        /**
         * ![Casco](https://wiki.rage.mp/images/thumb/d/d7/Casco.png/164px-Casco.png)
         */
        CASCO: {
            ID: 'casco',
            HASH: 0x3822BDFE
        },

        /**
         * ![Cheetah2](https://wiki.rage.mp/images/thumb/d/dd/Cheetah2.png/164px-Cheetah2.png)
         */
        CHEETAH2: {
            ID: 'cheetah2',
            HASH: 0xD4E5F4D
        },

        /**
         * ![Coquette2](https://wiki.rage.mp/images/thumb/8/8a/Coquette2.png/164px-Coquette2.png)
         */
        COQUETTE2: {
            ID: 'coquette2',
            HASH: 0x3C4E2113
        },

        /**
         * ![Deluxo](https://wiki.rage.mp/images/thumb/4/4e/Deluxo.png/164px-Deluxo.png)
         */
        DELUXO: {
            ID: 'deluxo',
            HASH: 0x586765FB
        },

        /**
         * ![Dynasty](https://wiki.rage.mp/images/thumb/8/88/Dynasty.png/144px-Dynasty.png)
         */
        DYNASTY: {
            ID: 'dynasty',
            HASH: 0x127E90D5
        },

        /**
         * ![Fagaloa](https://wiki.rage.mp/images/thumb/1/15/Fagaloa.png/164px-Fagaloa.png)
         */
        FAGALOA: {
            ID: 'fagaloa',
            HASH: 0x6068AD86
        },

        /**
         * ![Feltzer3](https://wiki.rage.mp/images/thumb/0/0b/Feltzer3.png/164px-Feltzer3.png)
         */
        FELTZER3: {
            ID: 'feltzer3',
            HASH: 0xA29D6D10
        },

        /**
         * ![Gt500](https://wiki.rage.mp/images/thumb/8/84/Gt500.png/164px-Gt500.png)
         */
        GT500: {
            ID: 'gt500',
            HASH: 0x8408F33A
        },

        /**
         * ![Infernus2](https://wiki.rage.mp/images/thumb/9/91/Infernus2.png/164px-Infernus2.png)
         */
        INFERNUS2: {
            ID: 'infernus2',
            HASH: 0xAC33179C
        },

        /**
         * ![Jb700](https://wiki.rage.mp/images/thumb/9/97/Jb700.png/164px-Jb700.png)
         */
        JB700: {
            ID: 'jb700',
            HASH: 0x3EAB5555
        },

        /**
         * ![Jb7002](https://wiki.rage.mp/images/thumb/b/bc/Jb7002.png/162px-Jb7002.png)
         */
        JB7002: {
            ID: 'jb7002',
            HASH: 0x177DA45C
        },

        /**
         * ![Mamba](https://wiki.rage.mp/images/thumb/c/c0/Mamba.png/164px-Mamba.png)
         */
        MAMBA: {
            ID: 'mamba',
            HASH: 0x9CFFFC56
        },

        /**
         * ![Manana](https://wiki.rage.mp/images/thumb/5/50/Manana.png/164px-Manana.png)
         */
        MANANA: {
            ID: 'manana',
            HASH: 0x81634188
        },

        /**
         * ![Michelli](https://wiki.rage.mp/images/thumb/1/15/Michelli.png/136px-Michelli.png)
         */
        MICHELLI: {
            ID: 'michelli',
            HASH: 0x3E5BD8D9
        },

        /**
         * ![Monroe](https://wiki.rage.mp/images/thumb/6/64/Monroe.png/164px-Monroe.png)
         */
        MONROE: {
            ID: 'monroe',
            HASH: 0xE62B361B
        },

        /**
         * ![Nebula](https://wiki.rage.mp/images/thumb/e/ea/Nebula.png/143px-Nebula.png)
         */
        NEBULA: {
            ID: 'nebula',
            HASH: 0xCB642637
        },

        /**
         * ![Peyote](https://wiki.rage.mp/images/thumb/2/21/Peyote.png/164px-Peyote.png)
         */
        PEYOTE: {
            ID: 'peyote',
            HASH: 0x6D19CCBC
        },

        /**
         * ![Pigalle](https://wiki.rage.mp/images/thumb/7/76/Pigalle.png/164px-Pigalle.png)
         */
        PIGALLE: {
            ID: 'pigalle',
            HASH: 0x404B6381
        },

        /**
         * ![Rapidgt3](https://wiki.rage.mp/images/thumb/0/09/Rapidgt3.png/164px-Rapidgt3.png)
         */
        RAPIDGT3: {
            ID: 'rapidgt3',
            HASH: 0x7A2EF5E4
        },

        /**
         * ![Retinue](https://wiki.rage.mp/images/thumb/5/53/Retinue.png/164px-Retinue.png)
         */
        RETINUE: {
            ID: 'retinue',
            HASH: 0x6DBD6C0A
        },

        /**
         * ![Retinue2](https://wiki.rage.mp/images/thumb/8/86/Retinue2.png/162px-Retinue2.png)
         */
        RETINUE2: {
            ID: 'retinue2',
            HASH: 0x79178F0A
        },

        /**
         * ![Savestra](https://wiki.rage.mp/images/thumb/2/26/Savestra.png/164px-Savestra.png)
         */
        SAVESTRA: {
            ID: 'savestra',
            HASH: 0x35DED0DD
        },

        /**
         * ![Stinger](https://wiki.rage.mp/images/thumb/b/b6/Stinger.png/164px-Stinger.png)
         */
        STINGER: {
            ID: 'stinger',
            HASH: 0x5C23AF9B
        },

        /**
         * ![Stingergt](https://wiki.rage.mp/images/thumb/8/8d/Stingergt.png/164px-Stingergt.png)
         */
        STINGERGT: {
            ID: 'stingergt',
            HASH: 0x82E499FA
        },

        /**
         * ![Stromberg](https://wiki.rage.mp/images/thumb/f/f1/Stromberg.png/164px-Stromberg.png)
         */
        STROMBERG: {
            ID: 'stromberg',
            HASH: 0x34DBA661
        },

        /**
         * ![Swinger](https://wiki.rage.mp/images/thumb/8/86/Swinger.png/164px-Swinger.png)
         */
        SWINGER: {
            ID: 'swinger',
            HASH: 0x1DD4C0FF
        },

        /**
         * ![Torero](https://wiki.rage.mp/images/thumb/5/5f/Torero.png/164px-Torero.png)
         */
        TORERO: {
            ID: 'torero',
            HASH: 0x59A9E570
        },

        /**
         * ![Tornado](https://wiki.rage.mp/images/thumb/4/40/Tornado.png/164px-Tornado.png)
         */
        TORNADO: {
            ID: 'tornado',
            HASH: 0x1BB290BC
        },

        /**
         * ![Tornado2](https://wiki.rage.mp/images/thumb/0/05/Tornado2.png/164px-Tornado2.png)
         */
        TORNADO2: {
            ID: 'tornado2',
            HASH: 0x5B42A5C4
        },

        /**
         * ![Tornado3](https://wiki.rage.mp/images/thumb/7/7d/Tornado3.png/164px-Tornado3.png)
         */
        TORNADO3: {
            ID: 'tornado3',
            HASH: 0x690A4153
        },

        /**
         * ![Tornado4](https://wiki.rage.mp/images/thumb/f/fa/Tornado4.png/164px-Tornado4.png)
         */
        TORNADO4: {
            ID: 'tornado4',
            HASH: 0x86CF7CDD
        },

        /**
         * ![Tornado5](https://wiki.rage.mp/images/thumb/8/83/Tornado5.png/164px-Tornado5.png)
         */
        TORNADO5: {
            ID: 'tornado5',
            HASH: 0x94DA98EF
        },

        /**
         * ![Tornado6](https://wiki.rage.mp/images/thumb/6/69/Tornado6.png/164px-Tornado6.png)
         */
        TORNADO6: {
            ID: 'tornado6',
            HASH: 0xA31CB573
        },

        /**
         * ![Turismo2](https://wiki.rage.mp/images/thumb/f/fa/Turismo2.png/164px-Turismo2.png)
         */
        TURISMO2: {
            ID: 'turismo2',
            HASH: 0xC575DF11
        },

        /**
         * ![Viseris](https://wiki.rage.mp/images/thumb/2/24/Viseris.png/164px-Viseris.png)
         */
        VISERIS: {
            ID: 'viseris',
            HASH: 0xE8A8BA94
        },

        /**
         * ![Z190](https://wiki.rage.mp/images/thumb/e/e1/Z190.png/156px-Z190.png)
         */
        Z190: {
            ID: 'z190',
            HASH: 0x3201DD49
        },

        /**
         * ![Ztype](https://wiki.rage.mp/images/thumb/5/56/Ztype.png/164px-Ztype.png)
         */
        ZTYPE: {
            ID: 'ztype',
            HASH: 0x2D3BD401
        },

        /**
         * ![Zion3](https://wiki.rage.mp/images/thumb/5/5a/Zion3.png/140px-Zion3.png)
         */
        ZION3: {
            ID: 'zion3',
            HASH: 0x6F039A67
        },

        /**
         * ![Cheburek](https://wiki.rage.mp/images/thumb/4/4f/Cheburek.png/164px-Cheburek.png)
         */
        CHEBUREK: {
            ID: 'cheburek',
            HASH: 0xC514AAE0
        }
    },
    SUPER: {
        /**
         * ![Adder](https://wiki.rage.mp/images/thumb/c/c2/Adder.png/164px-Adder.png)
         */
        ADDER: {
            ID: 'adder',
            HASH: 0xB779A091
        },

        /**
         * ![Autarch](https://wiki.rage.mp/images/thumb/3/38/Autarch.png/164px-Autarch.png)
         */
        AUTARCH: {
            ID: 'autarch',
            HASH: 0xED552C74
        },

        /**
         * ![Banshee2](https://wiki.rage.mp/images/thumb/9/9b/Banshee2.png/164px-Banshee2.png)
         */
        BANSHEE2: {
            ID: 'banshee2',
            HASH: 0x25C5AF13
        },

        /**
         * ![Bullet](https://wiki.rage.mp/images/thumb/7/7a/Bullet.png/164px-Bullet.png)
         */
        BULLET: {
            ID: 'bullet',
            HASH: 0x9AE6DDA1
        },

        /**
         * ![Cheetah](https://wiki.rage.mp/images/thumb/9/9e/Cheetah.png/164px-Cheetah.png)
         */
        CHEETAH: {
            ID: 'cheetah',
            HASH: 0xB1D95DA0
        },

        /**
         * ![Cyclone](https://wiki.rage.mp/images/thumb/7/79/Cyclone.png/164px-Cyclone.png)
         */
        CYCLONE: {
            ID: 'cyclone',
            HASH: 0x52FF9437
        },

        /**
         * ![Entity2](https://wiki.rage.mp/images/thumb/f/f3/Entity2.png/164px-Entity2.png)
         */
        ENTITY2: {
            ID: 'entity2',
            HASH: 0x8198AEDC
        },

        /**
         * ![Entityxf](https://wiki.rage.mp/images/thumb/6/61/Entityxf.png/164px-Entityxf.png)
         */
        ENTITYXF: {
            ID: 'entityxf',
            HASH: 0xB2FE5CF9
        },

        /**
         * ![Emerus](https://wiki.rage.mp/images/thumb/0/0a/Emerus.png/132px-Emerus.png)
         */
        EMERUS: {
            ID: 'emerus',
            HASH: 0x4EE74355
        },

        /**
         * ![Fmj](https://wiki.rage.mp/images/thumb/d/d2/Fmj.png/164px-Fmj.png)
         */
        FMJ: {
            ID: 'fmj',
            HASH: 0x5502626C
        },

        /**
         * ![Furia](https://wiki.rage.mp/images/thumb/0/05/Furia.png/164px-Furia.png)
         */
        FURIA: {
            ID: 'furia',
            HASH: 0x3944D5A0
        },

        /**
         * ![Gp1](https://wiki.rage.mp/images/thumb/a/a4/Gp1.png/164px-Gp1.png)
         */
        GP1: {
            ID: 'gp1',
            HASH: 0x4992196C
        },

        /**
         * ![Infernus](https://wiki.rage.mp/images/thumb/d/d2/Infernus.png/164px-Infernus.png)
         */
        INFERNUS: {
            ID: 'infernus',
            HASH: 0x18F25AC7
        },

        /**
         * ![Italigtb](https://wiki.rage.mp/images/thumb/d/dd/Italigtb.png/164px-Italigtb.png)
         */
        ITALIGTB: {
            ID: 'italigtb',
            HASH: 0x85E8E76B
        },

        /**
         * ![Italigtb2](https://wiki.rage.mp/images/thumb/5/57/Italigtb2.png/164px-Italigtb2.png)
         */
        ITALIGTB2: {
            ID: 'italigtb2',
            HASH: 0xE33A477B
        },

        /**
         * ![Krieger](https://wiki.rage.mp/images/thumb/f/fc/Krieger.png/122px-Krieger.png)
         */
        KRIEGER: {
            ID: 'krieger',
            HASH: 0xD86A0247
        },

        /**
         * ![Le7b](https://wiki.rage.mp/images/thumb/e/ee/Le7b.png/164px-Le7b.png)
         */
        LE7B: {
            ID: 'le7b',
            HASH: 0xB6846A55
        },

        /**
         * ![Nero](https://wiki.rage.mp/images/thumb/e/ed/Nero.png/164px-Nero.png)
         */
        NERO: {
            ID: 'nero',
            HASH: 0x3DA47243
        },

        /**
         * ![Nero2](https://wiki.rage.mp/images/thumb/e/ec/Nero2.png/164px-Nero2.png)
         */
        NERO2: {
            ID: 'nero2',
            HASH: 0x4131F378
        },

        /**
         * ![Osiris](https://wiki.rage.mp/images/thumb/e/e3/Osiris.png/164px-Osiris.png)
         */
        OSIRIS: {
            ID: 'osiris',
            HASH: 0x767164D6
        },

        /**
         * ![Penetrator](https://wiki.rage.mp/images/thumb/d/d9/Penetrator.png/164px-Penetrator.png)
         */
        PENETRATOR: {
            ID: 'penetrator',
            HASH: 0x9734F3EA
        },

        /**
         * ![Pfister811](https://wiki.rage.mp/images/thumb/8/8e/Pfister811.png/164px-Pfister811.png)
         */
        PFISTER811: {
            ID: 'pfister811',
            HASH: 0x92EF6E04
        },

        /**
         * ![Prototipo](https://wiki.rage.mp/images/thumb/f/fb/Prototipo.png/164px-Prototipo.png)
         */
        PROTOTIPO: {
            ID: 'prototipo',
            HASH: 0x7E8F677F
        },

        /**
         * ![Reaper](https://wiki.rage.mp/images/thumb/6/6a/Reaper.png/164px-Reaper.png)
         */
        REAPER: {
            ID: 'reaper',
            HASH: 0xDF381E5
        },

        /**
         * ![S80](https://wiki.rage.mp/images/thumb/a/a2/S80.png/126px-S80.png)
         */
        S80: {
            ID: 's80',
            HASH: 0xECA6B6A3
        },

        /**
         * ![Sc1](https://wiki.rage.mp/images/thumb/5/59/Sc1.png/164px-Sc1.png)
         */
        SC1: {
            ID: 'sc1',
            HASH: 0x5097F589
        },

        /**
         * ![Scramjet](https://wiki.rage.mp/images/thumb/8/85/Scramjet.png/164px-Scramjet.png)
         */
        SCRAMJET: {
            ID: 'scramjet',
            HASH: 0xD9F0503D
        },

        /**
         * ![Sheava](https://wiki.rage.mp/images/thumb/0/06/Sheava.png/164px-Sheava.png)
         */
        SHEAVA: {
            ID: 'sheava',
            HASH: 0x30D3F6D8
        },

        /**
         * ![Sultanrs](https://wiki.rage.mp/images/thumb/8/88/Sultanrs.png/164px-Sultanrs.png)
         */
        SULTANRS: {
            ID: 'sultanrs',
            HASH: 0xEE6024BC
        },

        /**
         * ![T20](https://wiki.rage.mp/images/thumb/7/7d/T20.png/164px-T20.png)
         */
        T20: {
            ID: 't20',
            HASH: 0x6322B39A
        },

        /**
         * ![Taipan](https://wiki.rage.mp/images/thumb/8/8a/Taipan.png/164px-Taipan.png)
         */
        TAIPAN: {
            ID: 'taipan',
            HASH: 0xBC5DC07E
        },

        /**
         * ![Tempesta](https://wiki.rage.mp/images/thumb/8/8a/Tempesta.png/164px-Tempesta.png)
         */
        TEMPESTA: {
            ID: 'tempesta',
            HASH: 0x1044926F
        },

        /**
         * ![Tezeract](https://wiki.rage.mp/images/thumb/a/ab/Tezeract.png/164px-Tezeract.png)
         */
        TEZERACT: {
            ID: 'tezeract',
            HASH: 0x3D7C6410
        },

        /**
         * ![Thrax](https://wiki.rage.mp/images/thumb/4/4f/Thrax.png/112px-Thrax.png)
         */
        THRAX: {
            ID: 'thrax',
            HASH: 0x3E3D1F59
        },

        /**
         * ![Turismor](https://wiki.rage.mp/images/thumb/7/7f/Turismor.png/164px-Turismor.png)
         */
        TURISMOR: {
            ID: 'turismor',
            HASH: 0x185484E1
        },

        /**
         * ![Tyrant](https://wiki.rage.mp/images/thumb/0/0a/Tyrant.png/164px-Tyrant.png)
         */
        TYRANT: {
            ID: 'tyrant',
            HASH: 0xE99011C2
        },

        /**
         * ![Tyrus](https://wiki.rage.mp/images/thumb/e/e4/Tyrus.png/164px-Tyrus.png)
         */
        TYRUS: {
            ID: 'tyrus',
            HASH: 0x7B406EFB
        },

        /**
         * ![Vacca](https://wiki.rage.mp/images/thumb/1/14/Vacca.png/164px-Vacca.png)
         */
        VACCA: {
            ID: 'vacca',
            HASH: 0x142E0DC3
        },

        /**
         * ![Vagner](https://wiki.rage.mp/images/thumb/9/92/Vagner.png/164px-Vagner.png)
         */
        VAGNER: {
            ID: 'vagner',
            HASH: 0x7397224C
        },

        /**
         * ![Vigilante](https://wiki.rage.mp/images/thumb/c/c7/Vigilante.png/164px-Vigilante.png)
         */
        VIGILANTE: {
            ID: 'vigilante',
            HASH: 0xB5EF4C33
        },

        /**
         * ![Visione](https://wiki.rage.mp/images/thumb/0/01/Visione.png/164px-Visione.png)
         */
        VISIONE: {
            ID: 'visione',
            HASH: 0xC4810400
        },

        /**
         * ![Voltic](https://wiki.rage.mp/images/thumb/e/ef/Voltic.png/164px-Voltic.png)
         */
        VOLTIC: {
            ID: 'voltic',
            HASH: 0x9F4B77BE
        },

        /**
         * ![Voltic2](https://wiki.rage.mp/images/thumb/4/4f/Voltic2.png/164px-Voltic2.png)
         */
        VOLTIC2: {
            ID: 'voltic2',
            HASH: 0x3AF76F4A
        },

        /**
         * ![Xa21](https://wiki.rage.mp/images/thumb/4/4d/Xa21.png/164px-Xa21.png)
         */
        XA21: {
            ID: 'xa21',
            HASH: 0x36B4A8A9
        },

        /**
         * ![Zentorno](https://wiki.rage.mp/images/thumb/2/2b/Zentorno.png/164px-Zentorno.png)
         */
        ZENTORNO: {
            ID: 'zentorno',
            HASH: 0xAC5DF515
        },

        /**
         * ![Zorrusso](https://wiki.rage.mp/images/thumb/7/79/Zorrusso.png/110px-Zorrusso.png)
         */
        ZORRUSSO: {
            ID: 'zorrusso',
            HASH: 0xD757D97D
        }
    },
    TRAILER: {
        /**
         * ![Armytanker](https://wiki.rage.mp/images/thumb/1/13/ArmyTanker.png/133px-ArmyTanker.png)
         */
        ARMYTANKER: {
            ID: 'armytanker',
            HASH: 0xB8081009
        },

        /**
         * ![Armytrailer](https://wiki.rage.mp/images/thumb/c/c0/Armytrailer.png/164px-Armytrailer.png)
         */
        ARMYTRAILER: {
            ID: 'armytrailer',
            HASH: 0xA7FF33F5
        },

        /**
         * ![Armytrailer2](https://wiki.rage.mp/images/thumb/c/c2/ArmyTrailer2.png/133px-ArmyTrailer2.png)
         */
        ARMYTRAILER2: {
            ID: 'armytrailer2',
            HASH: 0x9E6B14D6
        },

        /**
         * ![Baletrailer](https://wiki.rage.mp/images/thumb/b/bd/BaleTrailer.png/133px-BaleTrailer.png)
         */
        BALETRAILER: {
            ID: 'baletrailer',
            HASH: 0xE82AE656
        },

        /**
         * ![Boattrailer](https://wiki.rage.mp/images/thumb/c/ce/BoatTrailer.png/133px-BoatTrailer.png)
         */
        BOATTRAILER: {
            ID: 'boattrailer',
            HASH: 0x1F3D44B5
        },

        /**
         * ![Cablecar](https://wiki.rage.mp/images/thumb/0/0d/CableCar.png/133px-CableCar.png)
         */
        CABLECAR: {
            ID: 'cablecar',
            HASH: 0xC6C3242D
        },

        /**
         * ![Docktrailer](https://wiki.rage.mp/images/thumb/3/30/DockTrailer.png/133px-DockTrailer.png)
         */
        DOCKTRAILER: {
            ID: 'docktrailer',
            HASH: 0x806EFBEE
        },

        /**
         * ![Freighttrailer](https://wiki.rage.mp/images/thumb/1/1e/Freighttrailer.png/164px-Freighttrailer.png)
         */
        FREIGHTTRAILER: {
            ID: 'freighttrailer',
            HASH: 0xD1ABB666
        },

        /**
         * ![Graintrailer](https://wiki.rage.mp/images/thumb/4/40/GrainTrailer.png/133px-GrainTrailer.png)
         */
        GRAINTRAILER: {
            ID: 'graintrailer',
            HASH: 0x3CC7F596
        },

        /**
         * ![Proptrailer](https://wiki.rage.mp/images/thumb/d/da/PropTrailer.png/133px-PropTrailer.png)
         */
        PROPTRAILER: {
            ID: 'proptrailer',
            HASH: 0x153E1B0A
        },

        /**
         * ![Raketrailer](https://wiki.rage.mp/images/thumb/1/11/RakeTrailer.png/133px-RakeTrailer.png)
         */
        RAKETRAILER: {
            ID: 'raketrailer',
            HASH: 0x174CB172
        },

        /**
         * ![Tr2](https://wiki.rage.mp/images/thumb/a/a6/TR2.png/133px-TR2.png)
         */
        TR2: {
            ID: 'tr2',
            HASH: 0x7BE032C6
        },

        /**
         * ![Tr3](https://wiki.rage.mp/images/thumb/3/3c/TR3.png/133px-TR3.png)
         */
        TR3: {
            ID: 'tr3',
            HASH: 0x6A59902D
        },

        /**
         * ![Tr4](https://wiki.rage.mp/images/thumb/1/11/TR4.png/133px-TR4.png)
         */
        TR4: {
            ID: 'tr4',
            HASH: 0x7CAB34D0
        },

        /**
         * ![Trflat](https://wiki.rage.mp/images/thumb/e/e6/TRFlat.png/133px-TRFlat.png)
         */
        TRFLAT: {
            ID: 'trflat',
            HASH: 0xAF62F6B2
        },

        /**
         * ![Tvtrailer](https://wiki.rage.mp/images/thumb/5/5b/TVTrailer.png/133px-TVTrailer.png)
         */
        TVTRAILER: {
            ID: 'tvtrailer',
            HASH: 0x967620BE
        },

        /**
         * ![Tanker](https://wiki.rage.mp/images/thumb/e/e3/Tanker.png/133px-Tanker.png)
         */
        TANKER: {
            ID: 'tanker',
            HASH: 0xD46F4737
        },

        /**
         * ![Tanker2](https://wiki.rage.mp/images/thumb/2/25/Tanker2.png/133px-Tanker2.png)
         */
        TANKER2: {
            ID: 'tanker2',
            HASH: 0x74998082
        },

        /**
         * ![Trailerlarge](https://wiki.rage.mp/images/thumb/e/e8/Trailerlarge.png/164px-Trailerlarge.png)
         */
        TRAILERLARGE: {
            ID: 'trailerlarge',
            HASH: 0x5993F939
        },

        /**
         * ![Trailerlogs](https://wiki.rage.mp/images/thumb/3/3e/TrailerLogs.png/133px-TrailerLogs.png)
         */
        TRAILERLOGS: {
            ID: 'trailerlogs',
            HASH: 0x782A236D
        },

        /**
         * ![Trailersmall](https://wiki.rage.mp/images/thumb/4/46/TrailerSmall.png/133px-TrailerSmall.png)
         */
        TRAILERSMALL: {
            ID: 'trailersmall',
            HASH: 0x2A72BEAB
        },

        /**
         * ![Trailers](https://wiki.rage.mp/images/thumb/1/14/Trailers.png/133px-Trailers.png)
         */
        TRAILERS: {
            ID: 'trailers',
            HASH: 0xCBB2BE0E
        },

        /**
         * ![Trailers2](https://wiki.rage.mp/images/thumb/8/89/Trailers2.png/133px-Trailers2.png)
         */
        TRAILERS2: {
            ID: 'trailers2',
            HASH: 0xA1DA3C91
        },

        /**
         * ![Trailers3](https://wiki.rage.mp/images/thumb/c/c6/Trailers3.png/133px-Trailers3.png)
         */
        TRAILERS3: {
            ID: 'trailers3',
            HASH: 0x8548036D
        },

        /**
         * ![Trailers4](https://wiki.rage.mp/images/thumb/3/38/Trailers4.png/164px-Trailers4.png)
         */
        TRAILERS4: {
            ID: 'trailers4',
            HASH: 0xBE66F5AA
        }
    },
    TRAINS: {
        /**
         * ![Freight](https://wiki.rage.mp/images/thumb/9/9e/Freight.png/133px-Freight.png)
         */
        FREIGHT: {
            ID: 'freight',
            HASH: 0x3D6AAA9B
        },

        /**
         * ![Freightcar](https://wiki.rage.mp/images/thumb/0/07/FreightCar.png/133px-FreightCar.png)
         */
        FREIGHTCAR: {
            ID: 'freightcar',
            HASH: 0x0AFD22A6
        },

        /**
         * ![Freightcont1](https://wiki.rage.mp/images/thumb/1/1c/FreightCont1.png/133px-FreightCont1.png)
         */
        FREIGHTCONT1: {
            ID: 'freightcont1',
            HASH: 0x36DCFF98
        },

        /**
         * ![Freightcont2](https://wiki.rage.mp/images/thumb/2/2a/FreightCont2.png/133px-FreightCont2.png)
         */
        FREIGHTCONT2: {
            ID: 'freightcont2',
            HASH: 0x0E512E79
        },

        /**
         * ![Freightgrain](https://wiki.rage.mp/images/thumb/1/10/FreightGrain.png/133px-FreightGrain.png)
         */
        FREIGHTGRAIN: {
            ID: 'freightgrain',
            HASH: 0x264D9262
        },

        /**
         * ![Metrotrain](https://wiki.rage.mp/images/thumb/2/20/Metrotrain.png/142px-Metrotrain.png)
         */
        METROTRAIN: {
            ID: 'metrotrain',
            HASH: 0x33C9E158
        },

        /**
         * ![Tankercar](https://wiki.rage.mp/images/thumb/8/85/TankerCar.png/133px-TankerCar.png)
         */
        TANKERCAR: {
            ID: 'tankercar',
            HASH: 0x22EDDC30
        }
    },
    UTILITY: {
        /**
         * ![Airtug](https://wiki.rage.mp/images/thumb/1/19/Airtug.png/164px-Airtug.png)
         */
        AIRTUG: {
            ID: 'airtug',
            HASH: 0x5D0AAC8F
        },

        /**
         * ![Caddy](https://wiki.rage.mp/images/thumb/9/94/Caddy.png/164px-Caddy.png)
         */
        CADDY: {
            ID: 'caddy',
            HASH: 0x44623884
        },

        /**
         * ![Caddy2](https://wiki.rage.mp/images/thumb/2/25/Caddy2.png/164px-Caddy2.png)
         */
        CADDY2: {
            ID: 'caddy2',
            HASH: 0xDFF0594C
        },

        /**
         * ![Caddy3](https://wiki.rage.mp/images/thumb/8/8c/Caddy3.png/164px-Caddy3.png)
         */
        CADDY3: {
            ID: 'caddy3',
            HASH: 0xD227BDBB
        },

        /**
         * ![Docktug](https://wiki.rage.mp/images/thumb/7/7c/Docktug.png/164px-Docktug.png)
         */
        DOCKTUG: {
            ID: 'docktug',
            HASH: 0xCB44B1CA
        },

        /**
         * ![Forklift](https://wiki.rage.mp/images/thumb/a/ab/Forklift.png/164px-Forklift.png)
         */
        FORKLIFT: {
            ID: 'forklift',
            HASH: 0x58E49664
        },

        /**
         * ![Mower](https://wiki.rage.mp/images/thumb/a/a5/Mower.png/164px-Mower.png)
         */
        MOWER: {
            ID: 'mower',
            HASH: 0x6A4BD8F6
        },

        /**
         * ![Ripley](https://wiki.rage.mp/images/thumb/8/83/Ripley.png/164px-Ripley.png)
         */
        RIPLEY: {
            ID: 'ripley',
            HASH: 0xCD935EF9
        },

        /**
         * ![Sadler](https://wiki.rage.mp/images/thumb/3/37/Sadler.png/164px-Sadler.png)
         */
        SADLER: {
            ID: 'sadler',
            HASH: 0xDC434E51
        },

        /**
         * ![Sadler2](https://wiki.rage.mp/images/thumb/f/f7/Sadler2.png/164px-Sadler2.png)
         */
        SADLER2: {
            ID: 'sadler2',
            HASH: 0x2BC345D1
        },

        /**
         * ![Scrap](https://wiki.rage.mp/images/thumb/b/b8/Scrap.png/164px-Scrap.png)
         */
        SCRAP: {
            ID: 'scrap',
            HASH: 0x9A9FD3DF
        },

        /**
         * ![Towtruck](https://wiki.rage.mp/images/thumb/5/52/Towtruck.png/164px-Towtruck.png)
         */
        TOWTRUCK: {
            ID: 'towtruck',
            HASH: 0xB12314E0
        },

        /**
         * ![Towtruck2](https://wiki.rage.mp/images/thumb/3/34/Towtruck2.png/164px-Towtruck2.png)
         */
        TOWTRUCK2: {
            ID: 'towtruck2',
            HASH: 0xE5A2D6C6
        },

        /**
         * ![Tractor](https://wiki.rage.mp/images/thumb/7/7a/Tractor.png/164px-Tractor.png)
         */
        TRACTOR: {
            ID: 'tractor',
            HASH: 0x61D6BA8C
        },

        /**
         * ![Tractor2](https://wiki.rage.mp/images/thumb/c/c8/Tractor2.png/164px-Tractor2.png)
         */
        TRACTOR2: {
            ID: 'tractor2',
            HASH: 0x843B73DE
        },

        /**
         * ![Tractor3](https://wiki.rage.mp/images/thumb/c/cd/Tractor3.png/164px-Tractor3.png)
         */
        TRACTOR3: {
            ID: 'tractor3',
            HASH: 0x562A97BD
        },

        /**
         * ![Utillitruck](https://wiki.rage.mp/images/thumb/e/ec/Utillitruck.png/164px-Utillitruck.png)
         */
        UTILLITRUCK: {
            ID: 'utillitruck',
            HASH: 0x1ED0A534
        },

        /**
         * ![Utillitruck2](https://wiki.rage.mp/images/thumb/9/9e/Utillitruck2.png/164px-Utillitruck2.png)
         */
        UTILLITRUCK2: {
            ID: 'utillitruck2',
            HASH: 0x34E6BF6B
        },

        /**
         * ![Utillitruck3](https://wiki.rage.mp/images/thumb/a/aa/Utillitruck3.png/164px-Utillitruck3.png)
         */
        UTILLITRUCK3: {
            ID: 'utillitruck3',
            HASH: 0x7F2153DF
        }
    },
    VANS: {
        /**
         * ![Bison](https://wiki.rage.mp/images/thumb/f/f6/Bison.png/133px-Bison.png)
         */
        BISON: {
            ID: 'bison',
            HASH: 0xFEFD644F
        },

        /**
         * ![Bison2](https://wiki.rage.mp/images/thumb/4/44/Bison2.png/133px-Bison2.png)
         */
        BISON2: {
            ID: 'bison2',
            HASH: 0x7B8297C5
        },

        /**
         * ![Bison3](https://wiki.rage.mp/images/thumb/7/7f/Bison3.png/133px-Bison3.png)
         */
        BISON3: {
            ID: 'bison3',
            HASH: 0x67B3F020
        },

        /**
         * ![Bobcatxl](https://wiki.rage.mp/images/thumb/d/d8/BobcatXL.png/133px-BobcatXL.png)
         */
        BOBCATXL: {
            ID: 'bobcatxl',
            HASH: 0x3FC5D440
        },

        /**
         * ![Boxville](https://wiki.rage.mp/images/thumb/0/09/Boxville.png/133px-Boxville.png)
         */
        BOXVILLE: {
            ID: 'boxville',
            HASH: 0x898ECCEA
        },

        /**
         * ![Boxville2](https://wiki.rage.mp/images/thumb/f/fe/Boxville2.png/133px-Boxville2.png)
         */
        BOXVILLE2: {
            ID: 'boxville2',
            HASH: 0xF21B33BE
        },

        /**
         * ![Boxville3](https://wiki.rage.mp/images/thumb/5/5c/Boxville3.png/133px-Boxville3.png)
         */
        BOXVILLE3: {
            ID: 'boxville3',
            HASH: 0x07405E08
        },

        /**
         * ![Boxville4](https://wiki.rage.mp/images/thumb/2/29/Boxville4.png/133px-Boxville4.png)
         */
        BOXVILLE4: {
            ID: 'boxville4',
            HASH: 0x1A79847A
        },

        /**
         * ![Boxville5](https://wiki.rage.mp/images/thumb/2/2d/Boxville5.png/133px-Boxville5.png)
         */
        BOXVILLE5: {
            ID: 'boxville5',
            HASH: 0x28AD20E1
        },

        /**
         * ![Burrito](https://wiki.rage.mp/images/thumb/e/e0/Burrito.png/133px-Burrito.png)
         */
        BURRITO: {
            ID: 'burrito',
            HASH: 0xAFBB2CA4
        },

        /**
         * ![Burrito2](https://wiki.rage.mp/images/thumb/5/52/Burrito2.png/133px-Burrito2.png)
         */
        BURRITO2: {
            ID: 'burrito2',
            HASH: 0xC9E8FF76
        },

        /**
         * ![Burrito3](https://wiki.rage.mp/images/thumb/8/89/Burrito3.png/133px-Burrito3.png)
         */
        BURRITO3: {
            ID: 'burrito3',
            HASH: 0x98171BD3
        },

        /**
         * ![Burrito4](https://wiki.rage.mp/images/thumb/f/f6/Burrito4.png/133px-Burrito4.png)
         */
        BURRITO4: {
            ID: 'burrito4',
            HASH: 0x353B561D
        },

        /**
         * ![Burrito5](https://wiki.rage.mp/images/thumb/f/f6/Burrito5.png/133px-Burrito5.png)
         */
        BURRITO5: {
            ID: 'burrito5',
            HASH: 0x437CF2A0
        },

        /**
         * ![Camper](https://wiki.rage.mp/images/thumb/b/bd/Camper.png/133px-Camper.png)
         */
        CAMPER: {
            ID: 'camper',
            HASH: 0x6FD95F68
        },

        /**
         * ![Gburrito](https://wiki.rage.mp/images/thumb/b/b0/GBurrito.png/133px-GBurrito.png)
         */
        GBURRITO: {
            ID: 'gburrito',
            HASH: 0x97FA4F36
        },

        /**
         * ![Gburrito2](https://wiki.rage.mp/images/thumb/f/ff/GBurrito2.png/133px-GBurrito2.png)
         */
        GBURRITO2: {
            ID: 'gburrito2',
            HASH: 0x11AA0E14
        },

        /**
         * ![Journey](https://wiki.rage.mp/images/thumb/0/0c/Journey.png/133px-Journey.png)
         */
        JOURNEY: {
            ID: 'journey',
            HASH: 0xF8D48E7A
        },

        /**
         * ![Minivan](https://wiki.rage.mp/images/thumb/1/12/Minivan.png/133px-Minivan.png)
         */
        MINIVAN: {
            ID: 'minivan',
            HASH: 0xED7EADA4
        },

        /**
         * ![Minivan2](https://wiki.rage.mp/images/thumb/2/21/Minivan2.png/133px-Minivan2.png)
         */
        MINIVAN2: {
            ID: 'minivan2',
            HASH: 0xBCDE91F0
        },

        /**
         * ![Paradise](https://wiki.rage.mp/images/thumb/b/b3/Paradise.png/133px-Paradise.png)
         */
        PARADISE: {
            ID: 'paradise',
            HASH: 0x58B3979C
        },

        /**
         * ![Pony](https://wiki.rage.mp/images/thumb/b/b1/Pony.png/133px-Pony.png)
         */
        PONY: {
            ID: 'pony',
            HASH: 0xF8DE29A8
        },

        /**
         * ![Pony2](https://wiki.rage.mp/images/thumb/c/c6/Pony2.png/133px-Pony2.png)
         */
        PONY2: {
            ID: 'pony2',
            HASH: 0x38408341
        },

        /**
         * ![Rumpo](https://wiki.rage.mp/images/thumb/9/9f/Rumpo.png/133px-Rumpo.png)
         */
        RUMPO: {
            ID: 'rumpo',
            HASH: 0x4543B74D
        },

        /**
         * ![Rumpo2](https://wiki.rage.mp/images/thumb/2/20/Rumpo2.png/133px-Rumpo2.png)
         */
        RUMPO2: {
            ID: 'rumpo2',
            HASH: 0x961AFEF7
        },

        /**
         * ![Rumpo3](https://wiki.rage.mp/images/thumb/7/7a/Rumpo3.png/133px-Rumpo3.png)
         */
        RUMPO3: {
            ID: 'rumpo3',
            HASH: 0x57F682AF
        },

        /**
         * ![Speedo](https://wiki.rage.mp/images/thumb/2/2b/Speedo.png/133px-Speedo.png)
         */
        SPEEDO: {
            ID: 'speedo',
            HASH: 0xCFB3870C
        },

        /**
         * ![Speedo2](https://wiki.rage.mp/images/thumb/5/53/Speedo2.png/133px-Speedo2.png)
         */
        SPEEDO2: {
            ID: 'speedo2',
            HASH: 0x2B6DC64A
        },

        /**
         * ![Speedo4](https://wiki.rage.mp/images/thumb/b/b4/Speedo4.png/164px-Speedo4.png)
         */
        SPEEDO4: {
            ID: 'speedo4',
            HASH: 0xD17099D
        },

        /**
         * ![Surfer](https://wiki.rage.mp/images/thumb/d/d7/Surfer.png/133px-Surfer.png)
         */
        SURFER: {
            ID: 'surfer',
            HASH: 0x29B0DA97
        },

        /**
         * ![Surfer2](https://wiki.rage.mp/images/thumb/d/d5/Surfer2.png/133px-Surfer2.png)
         */
        SURFER2: {
            ID: 'surfer2',
            HASH: 0xB1D80E06
        },

        /**
         * ![Taco](https://wiki.rage.mp/images/thumb/4/4d/Taco.png/133px-Taco.png)
         */
        TACO: {
            ID: 'taco',
            HASH: 0x744CA80D
        },

        /**
         * ![Youga](https://wiki.rage.mp/images/thumb/d/d5/Youga.png/133px-Youga.png)
         */
        YOUGA: {
            ID: 'youga',
            HASH: 0x03E5F6B8
        },

        /**
         * ![Youga2](https://wiki.rage.mp/images/thumb/e/e6/Youga2.png/164px-Youga2.png)
         */
        YOUGA2: {
            ID: 'youga2',
            HASH: 0x3D29CD2B
        }
    }
};
export default vehicleModels;
