/* eslint-disable no-unused-vars */

/**
* Wikipedia: https://wiki.rage.mp/index.php?title=Vehicle_Flags
*/
enum vehicleFlags {
    PRESSINGHORN = 1,
    SHOOTING = 2,
    SIRENACTIVE = 4,
    VEHICLEDEAD = 8,
    AIMING = 16,
    DRIVER = 32,
    HASAIMDATA = 64,
    BURNOUT = 128,
    EXITINGFVEHICLE = 256,
    PLAYERDEAD = 512
};
export default vehicleFlags;
