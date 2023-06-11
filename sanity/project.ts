import { defineType } from "sanity";

export default  defineType({
    name:"project",
    title: "Project",
    type:'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: '',
            type: 'string'
          },
          {
            name: 'desc',
            title: 'description',
            description: 'describe project',
            type: 'string'
          },
          {
            name: 'github',
            title: 'Github Link',
            description: 'Github link',
            type: 'string'
          },
          {
            name: 'live',
            title: 'Live link',
            description: 'Live',
            type: 'string'
          },
          {
            name: 'stacks',
            title: 'Stacks',
            type: 'array',
            options: {
              layout: 'stacks'
            },
            of: [
              {
                type: 'string'
              }
            ]
          },
          {
            name: 'imageUrl',
            title: 'Image',
            type: 'string'
          },
    ]
})