/* eslint-disable no-unused-vars */

/**
* Wikipedia: https://wiki.rage.mp/index.php?title=Server-side_events
*/
export enum Events {
    // Checkpoint
    PLAYER_ENTER_CHECKPOINT = 'playerEnterCheckpoint',
    PLAYER_EXIT_CHECKPOINT = 'playerExitCheckpoint',
    // Colshape
    PLAYER_ENTER_COLSHAPE = 'playerEnterColshape',
    PLAYER_EXIT_COLSHAPE = 'playerExitColshape',
    // Entity
    ENTITY_CREATED = 'entityCreated',
    ENTITY_DESTROYED = 'entityDestroyed',
    ENTITY_MODEL_CHANGE = 'entityModelChange',
    // Player
    PLAYER_CHAT = 'playerChat',
    PLAYER_COMMAND = 'playerCommand',
    PLAYER_DAMAGE = 'playerDamage',
    PLAYER_DEATH = 'playerDeath',
    PLAYER_JOIN = 'playerJoin',
    PLAYER_QUIT = 'playerQuit',
    PLAYER_READY = 'playerReady',
    PLAYER_SPAWN = 'playerSpawn',
    PLAYER_WEAPON_CHANGE = 'playerWeaponChange',
    // Server
    SERVER_SHUTDOWN = 'serverShutdown',
    INCOMING_CONNECTION = 'incomingConnection',
    PACKAGES_LOADED = 'packagesLoaded',
    // Streaming
    PLAYER_STREAM_IN = 'playerStreamIn',
    PLAYER_STREAM_OUT = 'playerStreamOut',
    // Vehicle
    PLAYER_START_ENTER_VEHICLE = 'playerStartEnterVehicle',
    PLAYER_ENTER_VEHICLE = 'playerEnterVehicle',
    PLAYER_START_EXIT_VEHICLE = 'playerStartExitVehicle',
    PLAYER_EXIT_VEHICLE = 'playerExitVehicle',
    TRAILER_ATTACHED = 'trailerAttached',
    VEHICLE_DAMAGE = 'vehicleDamage',
    VEHICLE_DEATH = 'vehicleDeath',
    VEHICLE_HORN_TOGGLE = 'vehicleHornToggle',
    VEHICLE_SIREN_TOGGLE = 'vehicleSirenToggle',
    // Waypoint
    PLAYER_CREATE_WAYPOINT = 'playerCreateWaypoint',
    PLAYER_REACH_WAYPOINT = 'playerReachWaypoint',
};
export default Events;
