// Job: Information about a beaver's job.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Information about a beaver's job.
 * @extends GameObject
 */
class Job extends GameObject {
  /**
   * initializes a Job with basic logic as provided by the Creer code generator
   *
   * @memberof Job
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.actions = 0;
    this.carryLimit = 0;
    this.chopping = 0;
    this.cost = 0;
    this.damage = 0;
    this.distracts = 0;
    this.fishing = 0;
    this.health = 0;
    this.moves = 0;
    this.title = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The number of actions this job can make per turn.
   *
   * @type {number}
   */
  get actions() {
    return client.gameManager.getMemberValue(this, 'actions');
  }

  set actions(value) {
    client.gameManager.setMemberValue(this, 'actions', value);
  }


  /**
   * How many resources a beaver with this job can hold at once.
   *
   * @type {number}
   */
  get carryLimit() {
    return client.gameManager.getMemberValue(this, 'carryLimit');
  }

  set carryLimit(value) {
    client.gameManager.setMemberValue(this, 'carryLimit', value);
  }


  /**
   * Scalar for how many branches this job harvests at once.
   *
   * @type {number}
   */
  get chopping() {
    return client.gameManager.getMemberValue(this, 'chopping');
  }

  set chopping(value) {
    client.gameManager.setMemberValue(this, 'chopping', value);
  }


  /**
   * How many fish this Job costs to recruit.
   *
   * @type {number}
   */
  get cost() {
    return client.gameManager.getMemberValue(this, 'cost');
  }

  set cost(value) {
    client.gameManager.setMemberValue(this, 'cost', value);
  }


  /**
   * The amount of damage this job does per attack.
   *
   * @type {number}
   */
  get damage() {
    return client.gameManager.getMemberValue(this, 'damage');
  }

  set damage(value) {
    client.gameManager.setMemberValue(this, 'damage', value);
  }


  /**
   * How many turns a beaver attacked by this job is distracted by.
   *
   * @type {number}
   */
  get distracts() {
    return client.gameManager.getMemberValue(this, 'distracts');
  }

  set distracts(value) {
    client.gameManager.setMemberValue(this, 'distracts', value);
  }


  /**
   * Scalar for how many fish this job harvests at once.
   *
   * @type {number}
   */
  get fishing() {
    return client.gameManager.getMemberValue(this, 'fishing');
  }

  set fishing(value) {
    client.gameManager.setMemberValue(this, 'fishing', value);
  }


  /**
   * The amount of starting health this job has.
   *
   * @type {number}
   */
  get health() {
    return client.gameManager.getMemberValue(this, 'health');
  }

  set health(value) {
    client.gameManager.setMemberValue(this, 'health', value);
  }


  /**
   * The number of moves this job can make per turn.
   *
   * @type {number}
   */
  get moves() {
    return client.gameManager.getMemberValue(this, 'moves');
  }

  set moves(value) {
    client.gameManager.setMemberValue(this, 'moves', value);
  }


  /**
   * The job title ('builder', 'fisher', etc).
   *
   * @type {string}
   */
  get title() {
    return client.gameManager.getMemberValue(this, 'title');
  }

  set title(value) {
    client.gameManager.setMemberValue(this, 'title', value);
  }



  /**
   * Recruits a Beaver of this Job to a lodge
   *
   * @param {Tile} lodge - The Tile that is a lodge owned by you that you wish to spawn the Beaver of this Job on.
   * @returns {Beaver} - The recruited Beaver if successful, null otherwise.
   */
  recruit(lodge) {
    return client.runOnServer(this, 'recruit', {
      lodge: lodge,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Job;
