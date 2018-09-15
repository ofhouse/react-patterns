// @flow

export type ActorState = {
  posX: number,
  posY: number,
  shots: number,
};

class Actor {
  posX: number = 0;
  posY: number = 0;
  shots: number = 0;

  getCurrentState = (): ActorState => ({
    posX: this.posX,
    posY: this.posY,
    shots: this.shots,
  });

  fire = (): ActorState => {
    this.shots += 1;
    return this.getCurrentState();
  };

  jump = (): ActorState => {
    this.posY += 1;
    return this.getCurrentState();
  };

  goLeft = (): ActorState => {
    this.posX -= 1;
    return this.getCurrentState();
  };

  goRight = (): ActorState => {
    this.posX += 1;
    return this.getCurrentState();
  };
}

export default Actor;
