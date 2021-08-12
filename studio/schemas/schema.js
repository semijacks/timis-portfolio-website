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
          name: "sitePreviewImage",
          title: "Site Preview Image",
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
        {
          name: "thingsIDid",
          title: "Things I did",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "collaborators",
          title: "Collaborators",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "section1HeaderText",
          type: "string",
          title: "Section1 Header Text",
        },
        {
          name: "section1BodyText",
          type: "string",
          title: "Section1 Body Text",
        },
        {
          name: "section1SnippetText",
          type: "string",
          title: "Section1 Snippet Text",
        },
        {
          name: "section1Images",
          title: "Section1 Images",
          type: "array",
          of: [{ type: "image" }],
        },
        {
          name: "section2HeaderText",
          type: "string",
          title: "Section2 Header Text",
        },
        {
          name: "section2Images",
          title: "Section2 Images",
          type: "array",
          of: [{ type: "image" }],
        },
      ],
    },
  ]),
});
