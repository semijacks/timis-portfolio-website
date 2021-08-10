// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */ {
      name: "product",
      type: "document",
      title: "Product",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
        },
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "mainImage",
          title: "Main image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "is__showcase",
          type: "boolean",
          title: "Is this a showcase project?",
        },
      ],
    },
  ]),
});
