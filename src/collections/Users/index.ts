import type { CollectionConfig } from 'payload/types'
import updateLastLogin from './hooks/updateLastLogin'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'fullName',
        defaultColumns: ['fullName', 'email'],
    },
    auth: true,
    fields: [
        // Row for first/last name fields
        {
            type: 'row',
            fields: [
                {
                    type: 'text',
                    name: 'firstName',
                },
                {
                    type: 'text',
                    name: 'lastName',
                },
            ],
        },

        // Virtual field for full name
        {
            type: 'text',
            name: 'fullName',
            label: 'Name',
            admin: {
                hidden: true,
            },
            hooks: {
                beforeChange: [
                    ({ siblingData }) => {
                        delete siblingData['fullName']
                    },
                ],
                afterRead: [
                    ({ siblingData }) => {
                        siblingData[
                            'fullName'
                        ] = `${siblingData['firstName']} ${siblingData['lastName']}`
                    },
                ],
            },
        },

        // Date of birth
        {
            type: 'date',
            name: 'dateOfBirth',
            label: 'Date of birth',
            required: true,
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'do MMMM yyyy',
                },
            },
        },

        // Newsletter subscription checkbox
        {
            type: 'checkbox',
            name: 'newsletterSubscribed',
            label: 'Subscribe to Newsletter',
            defaultValue: false,
        },

        // Last login date
        {
            name: 'lastLogin',
            label: 'Last Login',
            type: 'date',
            admin: {
                readOnly: true,
                hidden: true,
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },

        // User role
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
            required: true,
            defaultValue: 'user',
        },
    ],
    hooks: {
        afterLogin: [updateLastLogin],
    },
}
