export default {
    "type": "object",
    "name": "hero_section",
    "title": "Hero Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "align",
            "title": "Align",
            "description": "The alignment of the text content",
            "initialValue": "left",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right",
                    "center"
                ]
            }
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_position",
            "title": "Image Position",
            "description": "The position of the image",
            "initialValue": "left",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "has_background",
            "title": "Enable section background",
            "validation": null
        },
        {
            "type": "object",
            "name": "background",
            "title": "Background Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "background_color",
                    "title": "Background Color",
                    "description": "The background color of the section",
                    "initialValue": "white",
                    "validation": null,
                    "options": {
                        "list": [
                            "white",
                            "gray",
                            "blue"
                        ]
                    }
                },
                {
                    "type": "image",
                    "name": "background_image",
                    "title": "Background Image",
                    "description": "The image displayed in the background of the section",
                    "validation": null
                },
                {
                    "type": "number",
                    "name": "background_image_opacity",
                    "title": "Background Image Opacity",
                    "description": "An integer between 0 and 100. A lower value makes the image more transparent.",
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "string",
                    "name": "background_image_size",
                    "title": "Background Image Size",
                    "description": "The size of the background image",
                    "initialValue": "cover",
                    "validation": null,
                    "options": {
                        "list": [
                            "auto",
                            "contain",
                            "cover"
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "background_image_repeat",
                    "title": "Background Image Repeat",
                    "description": "Repeat the image to cover the whole area.",
                    "initialValue": "no-repeat",
                    "validation": null,
                    "options": {
                        "list": [
                            "repeat",
                            "no-repeat"
                        ]
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "hero_section"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}