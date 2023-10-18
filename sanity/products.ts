export default {
    name: 'Products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title:'Name'
        },
        {
            name: 'slug',
            type: 'string',
            title:'Slug'
        },
        {
            name: 'category',
            type: 'string',
            title:'Category'
        },
        {
            name: 'price',
            type: 'number',
            title:'Price'
        },
        {
            name: 'cloth_Type',
            type: 'string',
            title:'Cloth_Type'
        },
        {
            name: 'image',
            type: 'image',
            title:'Image'
        }
    ]
}