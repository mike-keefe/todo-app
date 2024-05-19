import type { CollectionConfig } from 'payload/types'

export const Todos: CollectionConfig = {
    slug: 'todos',
    labels: { plural: 'To-dos', singular: 'To-do' },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Title',
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            label: 'Owner',
            required: true,
        },
        {
            name: 'completed',
            type: 'checkbox',
            label: 'Completed',
            defaultValue: false,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'archived',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
