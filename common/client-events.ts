/* eslint-disable no-unused-vars */

/**
* Wikipedia: https://wiki.rage.mp/index.php?title=Client-side_events
*/
export enum Events {
    // Other
    ENTITY_CONTROLLER_CHANGE = 'entityControllerChange',
    ENTITY_CREATED = 'entityCreated',
    GUI_READY = 'guiReady',
    // Browser
    BROWSER_CREATED = 'browserCreated',
    BROWSER_DOM_READY = 'browserDomReady',
    BROWSER_LOADING_FAILED = 'browserLoadingFailed',
    // Checkpoints
    PLAYER_ENTER_COLSHAPE = 'playerEnterColshape',
    PLAYER_EXIT_CHECKPOINT = 'playerExitCheckpoint',
    // Colshapes
    PLAYER_ENTER_CHECKPOINT = 'playerEnterCheckpoint',
    PLAYER_EXIT_COLSHAPE = 'playerExitColshape',
    // Console
    CONSOLE_COMMAND = 'consoleCommand',
    // Common
    CLICK = 'click',
    PLAYER_CHAT = 'playerChat',
    PLAYER_DEATH = 'playerDeath',
    PLAYER_JOIN = 'playerJoin',
    PLAYER_QUIT = 'playerQuit',
    PLAYER_RESURRECT = 'playerResurrect',
    PLAYER_RULE_TRIGGERED = 'playerRuleTriggered',
    PLAYER_SPAWN = 'playerSpawn',
    PLAYER_WEAPON_SHOT = 'playerWeaponShot',
    DUMMY_ENTITY_DESTROYED = 'dummyEntityDestroyed',
    // Damage
    INCOMING_DAMAGE = 'incomingDamage',
    OUTGOING_DAMAGE = 'outgoingDamage',
    // Vehicles
    PLAYER_START_ENTER_VEHICLE = 'playerStartEnterVehicle',
    PLAYER_ENTER_VEHICLE = 'playerEnterVehicle',
    PLAYER_LEAVE_VEHICLE = 'playerLeaveVehicle',
    // Voice chat
    PLAYER_START_TALKING = 'playerStartTalking',
    PLAYER_STOP_TALKING = 'playerStopTalking',
    // Streaming
    ENTITY_STREAM_IN = 'entityStreamIn',
    ENTITY_STREAM_OUT = 'entityStreamOut',
    // Graphics
    RENDER = 'render',
    // Waypoint
    PLAYER_CREATE_WAYPOINT = 'playerCreateWaypoint',
    PLAYER_REACH_WAYPOINT = 'playerReachWaypoint'
};
export default Events;
