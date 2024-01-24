const _Game_BattlerBase_resetStateCounts = Game_BattlerBase.prototype.resetStateCounts;
Game_BattlerBase.prototype.resetStateCounts = function(stateId) {
   let zeroState = false;
   [11, 2, 26].forEach(zeroId => {
      if (stateId === zeroId) {
         this._stateTurns[zeroId] = 0;
         zeroState = true;
      }
   }, this);
   if (!zeroState) {
      _Game_BattlerBase_resetStateCounts.call(this, stateId);
   }
};