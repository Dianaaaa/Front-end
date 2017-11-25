import Vue from 'vue';
import navbar from '../../../src/navbar';
import bonus from '../../../src/bonus';
import carousel from '../../../src/carousel';
import Dfooter from '../../../src/Dfooter';
import featurettes from '../../../src/featurettes';
import gamep from '../../../src/gamep';

describe('test navbar.vue', () => {

  it('组件加载后，', () => {
    const Constructor = Vue.extend(navbar);
　　const navComponent = new Constructor().$mount();
      expect(navComponent.$el.textContent).to.contain('欧洲名画拼图')；
  });
   })；
describe('test bonus.vue', () => {
  it('组件加载后，',() => {
    const Constructor = Vue.extend(bonus);
    const bonusComponent = new Constructor().$mount();
      expect(bonusComponent.$el.texContent).to.contain('拼图游戏')；
  })；
})；
describe('test Dfooter.vue', () => {
  it('组件加载后',() => {
    const Constructor = Vue.extend(Dfooter);
    const DComponent = new Constructor().$mount();
      expect(DComponent.$el.textContent).to.contain('Back to top');
  });
});
