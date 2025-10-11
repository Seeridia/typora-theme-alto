![Typora-Theme-Alto](./imgs/Logo.png)

> [!NOTE]
> Please do not download the project directly! Please read the [Installation](#installation) and [Configuration](#configuration) sections below!

## Introduction

Alto is designed for a more elegant Typora interface. It doesn't alter the basic style of the original theme but redesigns the Typora interface to make it more concise, beautiful, and dynamic.

Alto is a `css` file that references other theme files to provide better Typora interface support.

It is recommended to use the Alto theme in the **Unibody** window style.

## Preview

> The following preview showcases the Alto interface based on the [Lapis](https://github.com/YiNNx/typora-theme-lapis) and [Spring](https://github.com/SprInec/typora-spring-theme) themes.

![Alto on Spring theme](./imgs/Preview1.png)

![Alto on Lapis theme](./imgs/Preview2.png)

![](./imgs/Preview3.png)

![](./imgs/Preview4.png)

![Alto dark mode](./imgs/Preview5.png)

## Installation

1. Recommended: Download a release

   Download the theme ZIP from this project's Releases page and extract it into Typora's theme folder. The release packages typically include the bundled themes and can be used directly.

2. Clone the repository (when you prefer to use submodules)

   This project includes two template themes — [Lapis](https://github.com/YiNNx/typora-theme-lapis) (by YiNNx) and [Spring](https://github.com/SprInec/typora-spring-theme) (by SprInec) — as submodules under the `alto` directory. If you clone or download the repository without initializing submodules, those themes will not be included. Use the following Git command to clone with submodules:

   ```bash
   git clone --recurse-submodules https://github.com/Seeridia/typora-theme-alto.git
   ```

   Alternatively, if you prefer the manual copy approach used in some scripts, you can clone to a temporary folder and move files into the Typora theme folder.

## Configuration

> Optional operation, defaulting to the Lapis theme and blue color scheme (Light mode)

1. In `Preferences > Appearance > Window Style`, set to "Unibody" mode and close Typora.

2. Open the `alto.css` file.

3. Configure Alto:

   1. `@import "alto/lapis/lapis.css";`  Configure the theme

      - For Lapis and Spring, the default location is `alto/xxx/xxx.css`.
      - For Typora themes or other downloaded themes, the location is `xxx.css`.

   2. `:root` Configure colors

      - There are currently several recommended color schemes in the comments of `alto.css`. You can choose according to your preference or add more colors. Contributions to the color scheme are welcome!
      
      - For [Lapis](https://github.com/YiNNx/typora-theme-lapis) and [Spring](https://github.com/SprInec/typora-spring-theme), the following color recommendations are provided:

        ```css
        /* Blue: Lapis */
        --alto-accent-color: #487dac;
        --alto-main-color: #e8f4ff;
        
        /* Green: Spring */
        --alto-accent-color: #077123;
        --alto-main-color: #f2fff6;
        ```

4. Enjoy Alto!

## Notes

- Give me a star 🌟!
- If you like the original themes, please also give them a star 🌟.
- The default configuration is for the Lapis theme with a blue color scheme. You can customize it according to your preference. (Again, directly downloading the project's zip file does not automatically download the Lapis and Spring themes; you need to download them separately.)
- For other third-party themes, please download and replace the code yourself. It may not fully support all themes, but most should work. Please test it yourself. You can also submit an [issue](https://github.com/Seeridia/typora-theme-alto/issues) to request support or initiate a [PR](https://github.com/Seeridia/typora-theme-alto/pulls) to contribute code.
- Thanks to [YiNNx](https://github.com/YiNNx) and [SprInec](https://github.com/SprInec) for their themes, their aesthetics inspired Alto.


![](./imgs/Header.png)