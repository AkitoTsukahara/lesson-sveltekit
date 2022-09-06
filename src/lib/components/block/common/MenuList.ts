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
    }
  ]
