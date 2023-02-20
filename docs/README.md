# Bullet Diagramation

This component allows users to render the information they require in a slider.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]

![image](https://user-images.githubusercontent.com/94373834/220118190-f36b57f9-4223-4d84-873f-43ada6f6ee00.png)

## Configuration 

1. Import the Bullet Diagramation's app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "vendor.bullets-diagramation": "0.x"
  }
 ```
 
 2. Add the list-context block to the store-theme. For example:
```json
 {
  "flex-layout.row#bullet-diagramation":{
    "children": [
      "list-context.bullet-diagramation"
    ]
  },
  "list-context.bullet-diagramation": {
    "children": ["slider-layout#bullet-diagramation"],
    "props": {
      "bullets": [
        {
          "image":"*Here is your image to render*",
          "titleBullet":"*Here goes the title*",
          "link":{
            "url": "*URL*"
          }
        }
      ]
    }
  },
  "slider-layout#bullet-diagramation": {
   ...
  }
 }
   ```
   
  
  ### Bullets Props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `img`        | `String`       | Define the image to render in the list-context       | `undefined`              |
| `titleBullet`        | `String`       | Define the title to render in the list-context       | `undefined`              |
| `Link`        | `LinkProps`       |  Define the url to render in the list-context       | `undefined`              |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on 

| CSS Handles |
| ----------- | 
| `bullet__item` | 
| `bullet__item--title` | 
| `bullet__item--image` | 
| `bullet__item--link` |


## Contributors

1. [Danilo Ibañez](https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/)


Check out some documentation models that are already live: 
- [CSS Handles](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization)
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)

