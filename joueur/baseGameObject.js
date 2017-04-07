/**
 * @class BaseGameObject: the base class that every game object within a game inherit from for Python manipulation that would be redundant via Creer
 */
class BaseGameObject {
  toString() {
    return `${this.gameObjectName} #${this.id}`;
  }
}

module.exports = BaseGameObject;
