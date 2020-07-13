import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import "regenerator-runtime/runtime"

import App from '../../resources/App'
import About from '../../resources/views/About'
import LocationFilter from '../../resources/components/LocationFilter'
import LoadAndSave from '../../resources/components/LoadAndSave'


const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(BootstrapVue)
localVue.use(Vuex)

const routes = [
  { path: '/about', name: 'about', component: About},
]

const router = new VueRouter({ routes })

describe('App.vue', () => {
  it('main App component properly renders', () => {   
    const wrapper = shallowMount(App, {localVue, router})
    expect(wrapper.exists()).toBe(true)
  })
})

describe('Vue Router', () => {
  it('when NavBar about button is clicked, page changes', async () => {
    const wrapper = shallowMount(App, { localVue, router })
    router.push("/about")
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$route.name).toBe("about")
  })
})

describe('LocationFilter.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      changeLocation: jest.fn(),
    }
    store = new Vuex.Store({
      actions
    })
  })
 
  it('LocationFilter: has checkbox called 新北市板橋區', () => {
    const wrapper = shallowMount(LocationFilter, { localVue, store })

    const checkBox = wrapper.find("[value='新北市板橋區']") 
    expect(checkBox.exists()).toBe(true)
  })

  it('LocationFilter: upon state change, executes action changeLocation', async () => {
    const wrapper = shallowMount(LocationFilter, { localVue, store })

    // setData is async, needs await to resolve promise
    await wrapper.setData({ selected: ['新北市板橋區'] })
    expect(actions.changeLocation).toHaveBeenCalled()
  })
})

describe('LoadAndSave.vue', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      fetchData: jest.fn(),
      saveData: jest.fn()
    }
    getters = {
      loading: () => false
    }
    store = new Vuex.Store({
      actions,
      getters
    })
  })
  it('LoadAndSave: contains load data button', async () => {
    const wrapper = shallowMount(LoadAndSave, { localVue, store })
    const button = wrapper.find("#loadButton")
    expect(button.exists()).toBe(true)
  })
})