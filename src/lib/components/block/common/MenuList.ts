type menu = {
  text: string;
  link?: string;
  nest?: menu[];
};

export const menuList: menu[] =
  [
    {
      text: 'TOP',
      link: '/',
    },
    {
      text: 'Introduction',
      nest: [
        {
          text: 'Basic',
          link: '/introduction/basics'
        },
        {
          text: 'Adding Data',
          link: '/introduction/adding-data'
        },
        {
          text: 'Dynamic Attributes',
          link: '/introduction/dynamic-attributes'
        },
        {
          text: 'Styling',
          link: '/introduction/styling'
        },
        {
          text: 'Nested Components',
          link: '/introduction/nested-components'
        },
        {
          text: 'HTML tags',
          link: '/introduction/html-tags'
        },
        {
          text: 'Making an App',
          link: '/introduction/making-an-app'
        }
      ],
    },
    {
      text: 'Reactivity',
      nest: [
        {
          text: 'Assignments',
          link: '/reactive/assignments'
        },
        {
          text: 'Declarations',
          link: '/reactive/declarations'
        },
        {
          text: 'Statements',
          link: '/reactive/statements'
        },
        {
          text: 'Updating arrays and objects',
          link: '/reactive/updating-arrays-and-objects'
        },
      ]
    },
    {
      text: 'Props',
      nest: [
        {
          text: 'Declaring props',
          link: '/props/declaring-props'
        },
        {
          text: 'Default values',
          link: '/props/default-values'
        },
        {
          text: 'Spread props',
          link: '/props/spread-props'
        },
      ]
    },
    {
      text: 'Logic',
      nest: [
        {
          text: 'If blocks',
          link: '/logic/if-blocks'
        },
        {
          text: 'Else blocks',
          link: '/logic/else-blocks'
        },
        {
          text: 'Else-if blocks',
          link: '/logic/else-if-blocks'
        },
        {
          text: 'Each blocks',
          link: '/logic/each-blocks'
        },
        {
          text: 'Keyed each blocks',
          link: '/logic/keyed-each-blocks'
        },
        {
          text: 'Await blocks',
          link: '/logic/await-blocks'
        },
      ]
    },
    {
      text: 'Events',
      nest: [
        {
          text: 'DOM events',
          link: '/events/dom-events'
        },
        {
          text: 'Inline handlers',
          link: '/events/inline-handlers'
        },
        {
          text: 'Event modifiers',
          link: '/events/event-modifiers'
        },
        {
          text: 'Component events',
          link: '/events/component-events'
        },
        {
          text: 'Event forwarding',
          link: '/events/event-forwarding'
        },
        {
          text: 'DOM event forwarding',
          link: '/events/dom-event-forwarding'
        },
      ]
    },
    {
      text: 'Bindings',
      nest: [
        {
          text: 'Text inputs',
          link: '/bindings/text-inputs'
        },
        {
          text: 'Numeric inputs',
          link: '/bindings/numeric-inputs'
        },
        {
          text: 'Checkbox inputs',
          link: '/bindings/checkbox-inputs'
        },
        {
          text: 'Group inputs',
          link: '/bindings/group-inputs'
        },
        {
          text: 'Textarea inputs',
          link: '/bindings/textarea-inputs'
        },
        {
          text: 'Select bindings',
          link: '/bindings/select-bindings'
        },
        {
          text: 'Select multiple',
          link: '/bindings/multiple-select-bindings'
        },
        {
          text: 'Contenteditable bindings',
          link: '/bindings/contenteditable-bindings'
        },
        {
          text: 'Each block bindings',
          link: '/bindings/each-block-bindings'
        },
        {
          text: 'Media elements',
          link: '/bindings/media-elements'
        },
        {
          text: 'Dimensions',
          link: '/bindings/dimensions'
        },
        {
          text: 'This',
          link: '/bindings/bind-this'
        },
        {
          text: 'Component bindings',
          link: '/bindings/component-bindings'
        },
        {
          text: 'Binding to component instances',
          link: '/bindings/component-this'
        },
      ]
    },
    {
      text: 'Lifecycle',
      nest: [
        {
          text: 'onMount',
          link: '/lifecycle/onmount'
        },
        {
          text: 'onDestroy',
          link: '/lifecycle/ondestroy'
        },
        {
          text: 'beforeUpdate and afterUpdate',
          link: '/lifecycle/update'
        },
        {
          text: 'tick',
          link: '/lifecycle/tick'
        },
      ]
    },
    {
      text: 'Stores',
      nest: [
        {
          text: 'Writable stores',
          link: '/stores/writable-stores'
        },
        {
          text: 'Auto-subscriptions',
          link: '/stores/auto-subscriptions'
        },
        {
          text: 'Readable stores',
          link: '/stores/readable-stores'
        },
        {
          text: 'Derived stores',
          link: '/stores/derived-stores'
        },
        {
          text: 'Custom stores',
          link: '/stores/custom-stores'
        },
        {
          text: 'Store bindings',
          link: '/stores/store-bindings'
        },
      ]
    },
    {
      text: 'Motion',
      nest: [
        {
          text: 'Tweened',
          link: '/motion/tweened'
        },
        {
          text: 'Spring',
          link: '/motion/spring'
        },
      ]
    },
    {
      text: 'Transitions',
      nest: [
        {
          text: 'The transition directive',
          link: '/transitions/transition'
        },
        {
          text: 'Adding parameters',
          link: '/transitions/adding-parameters-to-transitions'
        },
        {
          text: 'In and out',
          link: '/transitions/in-and-out'
        },
        {
          text: 'Custom CSS transitions',
          link: '/transitions/custom-css-transitions'
        },
        {
          text: 'Custom JS transitions',
          link: '/transitions/custom-js-transitions'
        },
        {
          text: 'Transition events',
          link: '/transitions/transition-events'
        },
        {
          text: 'Local transitions',
          link: '/transitions/local-transitions'
        },
        {
          text: 'Deferred transitions',
          link: '/transitions/deferred-transitions'
        },
        {
          text: 'Key blocks',
          link: '/transitions/key-blocks'
        },
      ]
    },
    {
      text: 'Animations',
      nest: [
        {
          text: 'The animate directive',
          link: 'animations/animate'
        },
      ]
    },
    {
      text: 'Actions',
      nest: [
        {
          text: 'The use directive',
          link: '/actions/actions'
        },
        {
          text: 'Adding parameters',
          link: '/actions/adding-parameters-to-actions'
        },
      ]
    },
    {
      text: 'Advanced styling',
      nest: [
        {
          text: 'The class directive',
          link: '/styling/classes'
        },
        {
          text: 'Shorthand class directive',
          link: '/styling/class-shorthand'
        },
        {
          text: 'Inline styles',
          link: '/styling/inline-styles'
        },
        {
          text: 'The style directive',
          link: '/styling/style-directive'
        },
      ]
    },
    {
      text: 'Component composition',
      nest: [
        {
          text: 'Slots',
          link: '/compositions/slots'
        },
        {
          text: 'Slot fallbacks',
          link: '/compositions/slot-fallbacks'
        },
        {
          text: 'Named slots',
          link: '/compositions/named-slots'
        },
        {
          text: 'Checking for slot content',
          link: '/compositions/optional-slots'
        },
        {
          text: 'Slot props',
          link: '/compositions/slot-props'
        },
      ]
    },
    {
      text: 'Context API',
      nest: [
        {
          text: 'setContext and getContext',
          link: '/api/context-api'
        },
      ]
    },
    {
      text: 'Special elements',
      nest: [
        {
          text: '<svelte:self>',
          link: '/special-elements/svelte-self'
        },
        {
          text: `<svelte:component>`,
          link: '/special-elements/svelte-component'
        },
        {
          text: '<svelte:window>',
          link: '/special-elements/svelte-window'
        },
        {
          text: '<svelte:window> bindings',
          link: '/special-elements/svelte-window-bindings'
        },
        {
          text: '<svelte:body>',
          link: '/special-elements/svelte-body'
        },
        {
          text: '<svelte:head>',
          link: '/special-elements/svelte-head'
        },
        {
          text: '<svelte:options>',
          link: '/special-elements/svelte-options'
        },
        {
          text: '<svelte:fragment>',
          link: '/special-elements/svelte-fragment'
        },
      ]
    },
    {
      text: '17. Module context',
      nest: [
        {
          text: 'Sharing code',
          link: '/module-context/sharing-code'
        },
        {
          text: 'Exports',
          link: '/module-context/module-exports'
        },
      ]
    },
    {
      text: 'Debugging',
      nest: [
        {
          text: 'The @debug tag',
          link: '/debugging/debug'
        },
      ]
    },
    {
      text: 'Next steps',
      nest: [
        {
          text: 'Congratulations!',
          link: '/next-step/congratulations'
        },
      ]
    },
  ]
