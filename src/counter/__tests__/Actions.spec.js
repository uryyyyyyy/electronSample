import assert from 'assert';
import deepEqual from 'deep-equal';
import {ActionTypes} from "../Entities";
import {ActionDispatcher, INCREMENT} from "../Actions";
import {spy} from "sinon";

describe('ActionDispatcher', () => {

  it('increment',  () => {
    const spyCB = spy();
    const actions = new ActionDispatcher(spyCB);
    actions.increment(100);
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(deepEqual(calls[0].args, [{ type: INCREMENT, amount: 100 }]));
  });
});