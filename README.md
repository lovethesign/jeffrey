# jeffrey 

jeffrey is a style guide and pattern library for building websites rapidly, designed for maintainability and modularity.

## Quick links

* [Demo & Documentation](https://lovethesign.github.io/jeffrey/)
* [Getting Started](#getting-started)

## Main Features

* Follows [BEM](http://getbem.com/) — Block Element Modifier methodology

* Follows [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) principles

* Built with [Sass](http://sass-lang.com/), that means:
    * Modular - import just what you need
    * Reusable - apply styles on your own components by using Sass mixins
    * Customizable - "tweak" the look and feel by overriding variables or extending existing classes

* Updated interactive demo site

## Getting Started

### Requirements

* [modernizer](https://modernizr.com/) ~2.8.2 included in the ```<head>``` of your web page.

### Installation

```
npm install jeffrey-suits --save
```

[tired of having to install NodeJS on your PC?](https://medium.com/@massimoruggirello/become-a-better-front-end-developer-with-docker-3249a7d61b74)


### Usage


Include this in your ```<head>```:

```html
<link href="node_modules/jeffrey-suits/dist/css/jeffrey.min.css" rel="stylesheet">
```


#### How to use jeffrey with Sass

If you are already using Sass in your project, you can import jeffrey directly.

```scss
@import "node_modules/jeffrey-suits/dist/sass/jeffrey";
```

## License

Copyright (c) 2018 LOVEThESIGN

jeffrey is released under the MIT license. See LICENSE for details.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
