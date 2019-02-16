import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataAndMethod from '@/components/DataAndMethod'
import DataBindings from  '@/components/DataBindings'
import Event from  '@/components/Event'
import EventModifiers from '@/components/EventModifiers'
import KeyboardEvents from  '@/components/KeyboardEvents'
import TwoWayDataBinding from  '@/components/TwoWayDataBinding'
import Computed from  '@/components/Computed'
import  DynamicClasses from  '@/components/DynamicClasses'
import  Conditionals from  '@/components/Conditionals'
import  LoopingWithFor from  '@/components/LoopingWithFor'

import ForKey from "@/components/ForKey"
import Refs from "@/components/Refs"





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/dataAndMethod',
      name:'DataAndMethod',
      component:DataAndMethod
    },{
      path:'/DataBindings',
      name:'DataBindings',
      component:DataBindings
    },{
      path:'/Event',
      name:'Event',
      component:Event
    },{
      path:'/EventModifiers',
      name:'EventModifiers',
      component:EventModifiers
    },{
      path:'/KeyboardEvents',
      name:'KeyboardEvents',
      component:KeyboardEvents
    },{
      path:'/TwoWayDataBinding',
      name:'TwoWayDataBinding',
      component:TwoWayDataBinding
    },
    {
      path:'/Computed',
      name:'Computed',
      component:Computed
    },
    {
      path:'/DynamicClasses',
      name:'DynamicClasses',
      component:DynamicClasses
    },
    {
      path:'/Conditionals',
      name:'Conditionals',
      component:Conditionals
    },
    {
      path:'/LoopingWithFor',
      name:'LoopingWithFor',
      component:LoopingWithFor
    },
    {
      path:'/ForKey',
      name:'ForKey',
      component:ForKey
    },
    {
      path:'/Refs',
      name:'Refs',
      component:Refs
    }
  ]
})
