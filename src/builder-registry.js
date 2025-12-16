"use client";
import { builder, Builder } from "@builder.io/react";
import { FaCode, FaMobileAlt, FaLaptop, FaTools } from 'react-icons/fa'; 
import Counter from "./components/Counter/Counter";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Loader from "./components/Loader";
import Page from "./app/[...builder]/page";
import ProductGrid from "./components/ProductGrid";

import ProductRegister from "./components/Product/ProductRegister";
import ProductSlider from "./components/Product/ProductSlider";
import StatamicProduct from "./components/StatamicProduct";
import MegaMenuList from "./components/MegaMenuList";
import BuilderSlider from './components/BuilderSlider';
import ServiceWheel from './components/ServiceWheel';
import PremiumServiceWheel from './components/PremiumServiceWheel';
import TestimonialSlider from './components/TestimonialSlider';
import PremiumTestimonialSlider from './components/PremiumTestimonialSlider';
import FAQAccordion from './components/FAQAccordion';
import HomeSlider from './components/HomeSlider';
import ServicesTab from './components/ServicesTab';
import TechnologySlider from './components/TechnologySlider';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
  inputs: [
    {
      name: "heading",
      type: "text",
      defaultValue: "All Products",
    },
  ],
});

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
});


Builder.registerComponent(Page, {
  name: "Page",
});

Builder.registerComponent(Loader, {
  name: "Loader",
});

Builder.registerComponent(Builder, {
  name: "Builder",
});


Builder.registerComponent(ProductRegister, {
  name: "ProductRegister",
});

Builder.registerComponent(StatamicProduct, {
  name: "StatamicProduct",
});

Builder.registerComponent(ProductSlider, {
  name: "ProductSlider",
  inputs: [
    { name: "thumbnail", type: "text", friendlyName: "Thumbnail URL" },
    {
      name: "images",
      type: "list",
      subFields: [{ name: "image", type: "text" }],
    },
  ],
});

Builder.registerComponent(LanguageSwitcher, {
  name: "LanguageSwitcher",
});

Builder.registerComponent(MegaMenuList, {
  name: 'MegaMenuList',
  inputs: [
    {
      name: 'itemsPerColumn',
      type: 'number',
      defaultValue: 4,
      required: true,
      helperText: 'How many items should appear in the first column?',
    },
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'label', type: 'text', required: true },
        { name: 'link', type: 'url', required: true },
        { name: 'icon', type: 'text', defaultValue: '›' },
      ],
    },
  ],
});

Builder.registerComponent(BuilderSlider, {
  name: 'Builder Slider',
  inputs: [
    {
      name: 'slides',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png', 'webp'],
        },
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'text' },
        { name: 'textColor', type: 'color' },

        //NEW FIELDS FOR OVERLAY
        {
          name: 'overlayColor',
          type: 'color',
          friendlyName: 'Overlay Color',
          defaultValue: 'rgba(0,0,0,0.5)',
        },
        {
          name: 'overlayOpacity',
          type: 'number',
          friendlyName: 'Overlay Opacity (0–1)',
          defaultValue: 0.5,
          min: 0,
          max: 1,
        },

        // Existing per-slide css
        {
          name: 'titleCss',
          type: 'longText',
        },
        {
          name: 'subtitleCss',
          type: 'longText',
        },
        {
          name: 'buttonCss',
          type: 'longText',
          friendlyName: 'Button CSS (per-slide)',
          helperText:
            'Paste CSS declarations such as font-size: 20px; padding: 14px 30px;',
          defaultValue: '',
        },

        // Button fields
        { name: 'buttonText', type: 'text' },
        { name: 'buttonLink', type: 'url' },
        { name: 'buttonBg', type: 'color' },
        { name: 'buttonColor', type: 'color' },
      ],
    },

    // Toggles
    { name: 'showArrows', type: 'boolean', defaultValue: true },
    { name: 'showDots', type: 'boolean', defaultValue: true },
    {
      name: 'autoplay',
      type: 'boolean',
      friendlyName: 'Enable Autoplay',
      defaultValue: false,
    },

    {
      name: 'autoplayDelay',
      type: 'number',
      friendlyName: 'Autoplay Delay (ms)',
      defaultValue: 3000,
      showIf: (options) => {
        return String(options.autoplay) === true;
      },
    },

    {
      name: 'transitionSpeed',
      type: 'number',
      friendlyName: 'Slide Speed (ms)',
      defaultValue: 600,
      helperText: 'Example: 600 = 0.6 seconds',
    },

    {
      name: 'dotsPosition',
      type: 'text',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
    {
      name: 'contentPosition',
      type: 'text',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
    { name: 'sliderHeight', type: 'text', defaultValue: '500px' },
    { name: 'sliderWidth', type: 'text', defaultValue: '100%' },
    {
      name: 'contentWidth',
      type: 'text',
      friendlyName: 'Content Width',
      defaultValue: '600px',
      helperText: 'Example: 500px, 60%, 40rem',
    },
  ],
});

Builder.registerComponent(ServiceWheel, {
  name: 'Service Wheel',
  inputs: [
    { name: 'size', type: 'number', defaultValue: 360 },
    { name: 'centerTitleTop', type: 'string', defaultValue: 'PREMIUM' },
    { name: 'centerTitleBottom', type: 'string', defaultValue: 'SERVICE' },
    {
      name: 'segments',
      type: 'list',
      subFields: [
        { name: 'color', type: 'color', defaultValue: '#2bb07f' },
        { name: 'icon', type: 'file', allowedFileTypes: ['svg', 'png', 'jpg'] },
        { name: 'label', type: 'text' },
        { name: 'link', type: 'url' },
      ],
      defaultValue: [],
    },
  ],
});

Builder.registerComponent(PremiumServiceWheel, {
  name: 'Premium Service Wheel',
  inputs: [
    { name: 'size', type: 'number', defaultValue: 520 },
    { name: 'centerTop', type: 'string', defaultValue: 'PREMIUM' },
    { name: 'centerBottom', type: 'string', defaultValue: 'SERVICE' },
    {
      name: 'centerTopColor',
      type: 'color',
      defaultValue: '#777',
    },
    {
      name: 'centerBottomColor',
      type: 'color',
      defaultValue: '#222',
    },
    {
      name: 'centerTopSize',
      type: 'number',
      defaultValue: 26,
    },
    {
      name: 'centerBottomSize',
      type: 'number',
      defaultValue: 46,
    },
    {
      name: 'fontFamily',
      type: 'string',
      helperText: 'Enter font family (e.g. Inter, Poppins, Roboto)'
    },

    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'number', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'desc', type: 'string', type: 'longText' },
        { name: 'color', type: 'color' },
        { name: 'icon', type: 'file', allowedFileTypes: ['svg', 'png', 'jpg'] },
      ],
    },
  ],
});

Builder.registerComponent(TestimonialSlider, {
  name: 'TestimonialSlider',
  inputs: [
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        { name: 'avatar', type: 'file' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'longText' },
        { name: 'role', type: 'text' },
        { name: 'stars', type: 'number', defaultValue: 5 },
      ],
    },
    { name: 'desktopItems', type: 'number', defaultValue: 3 },
    { name: 'tabletItems', type: 'number', defaultValue: 2 },
    { name: 'mobileItems', type: 'number', defaultValue: 1 },

    { name: 'starColor', type: 'color', defaultValue: '#f5b50a' },

    { name: 'cardShadow', type: 'boolean', defaultValue: false },
    { name: 'cardBorder', type: 'boolean', defaultValue: false },
    { name: 'cardBorderColor', type: 'color', defaultValue: '#ddd' },
    { name: 'cardBorderWidth', type: 'number', defaultValue: 1 },

    { name: 'titleColor', type: 'color', defaultValue: '#000' },
    { name: 'titleFontSize', type: 'number', defaultValue: 20 },
    { name: 'titleFontFamily', type: 'text' },

    { name: 'descriptionColor', type: 'color', defaultValue: '#444' },
    { name: 'descriptionFontSize', type: 'number', defaultValue: 16 },
    { name: 'descriptionFontFamily', type: 'text' },

    { name: 'roleColor', type: 'color', defaultValue: '#777' },
    { name: 'roleFontSize', type: 'number', defaultValue: 14 },
    { name: 'roleFontFamily', type: 'text' },

    { name: 'arrowColor', type: 'color', defaultValue: '#000' },
    { name: 'autoplay', type: 'boolean', defaultValue: false },
    { name: 'autoplayDelay', type: 'number', defaultValue: 3000 },
  ],
});

Builder.registerComponent(PremiumTestimonialSlider, {
  name: 'Premium Testimonial Slider',
  inputs: [
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
        },
        { name: 'text', type: 'text' },
        { name: 'name', type: 'text' },
        { name: 'role', type: 'text' },
        { name: 'stars', type: 'number', defaultValue: 5 },
      ],
    },

    { name: 'desktopItems', type: 'number', defaultValue: 1 },
    { name: 'tabletItems', type: 'number', defaultValue: 1 },
    { name: 'mobileItems', type: 'number', defaultValue: 1 },

    { name: 'showArrows', type: 'boolean', defaultValue: true },
    { name: 'arrowColor', type: 'color' },

    { name: 'autoplay', type: 'boolean' },
    { name: 'autoplayDelay', type: 'number' },

    { name: 'cardBackground', type: 'color' },
    { name: 'cardPadding', type: 'number' },
    { name: 'cardBorderRadius', type: 'number' },

    { name: 'cardShadow', type: 'boolean' },
    { name: 'cardBorder', type: 'boolean' },
    { name: 'cardBorderColor', type: 'color' },
    { name: 'cardBorderWidth', type: 'number' },

    { name: 'quoteColor', type: 'color' },
    { name: 'quoteFontSize', type: 'number' },

    { name: 'textColor', type: 'color' },
    { name: 'textFontSize', type: 'number' },
    { name: 'textFontFamily', type: 'text' },

    { name: 'nameColor', type: 'color' },
    { name: 'nameFontSize', type: 'number' },
    { name: 'nameFontFamily', type: 'text' },

    { name: 'roleColor', type: 'color' },
    { name: 'roleFontSize', type: 'number' },
    { name: 'roleFontFamily', type: 'text' },

    { name: 'starColor', type: 'color' },
    { name: 'starSize', type: 'number' },
  ],
});

Builder.registerComponent(FAQAccordion, {
  name: 'FAQ Accordion',
  inputs: [
    {
      name: 'items',
      type: 'list',
      required: true,
      subFields: [
        { name: 'title', type: 'text', defaultValue: 'Your FAQ Title' },

        {
          name: 'icon',
          type: 'file',
          allowedFileTypes: ['png', 'jpg', 'svg'],
        },

        {
          name: 'answer',
          type: 'richText',
          defaultValue: `<p>This is a sample answer with <strong>bold text</strong> and bullet points:</p>
<ul>
  <li>Point one</li>
  <li>Point two</li>
</ul>`,
        },
      ],
    },

    // Title styling
    { name: 'titleFontSize', type: 'number', defaultValue: 20 },
    { name: 'titleFontFamily', type: 'text', defaultValue: 'Arial' },
    { name: 'titleFontWeight', type: 'text', defaultValue: '600' },

    // Answer styling
    { name: 'answerFontSize', type: 'number', defaultValue: 16 },
    { name: 'answerFontFamily', type: 'text', defaultValue: 'Arial' },
    { name: 'answerFontWeight', type: 'text', defaultValue: '400' },

    // Arrows
    {
      name: 'arrowDownIcon',
      type: 'file',
      allowedFileTypes: ['png', 'jpg', 'svg'],
      defaultValue: '/down.svg',
    },
    {
      name: 'arrowUpIcon',
      type: 'file',
      allowedFileTypes: ['png', 'jpg', 'svg'],
      defaultValue: '/up.svg',
    },
  ],
});

Builder.registerComponent(HomeSlider, {
  name: 'Home Slider',
  inputs: [
    /* Slides Array */
    {
      name: 'slides',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string', defaultValue: 'Your Title' },
        {
          name: 'description',
          type: 'string',
          defaultValue: 'Your description here...',
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png', 'webp'],
        },
        { name: 'button1Text', type: 'string', defaultValue: 'Shop Now' },
        { name: 'button1Link', type: 'url' },
        { name: 'button2Text', type: 'string', defaultValue: 'Learn More' },
        { name: 'button2Link', type: 'url' },
      ],
    },

    /* SLIDER SETTINGS */
    { name: 'autoplay', type: 'boolean', defaultValue: true },
    { name: 'speed', type: 'number', defaultValue: 600 },
    { name: 'delay', type: 'number', defaultValue: 3000 },
    { name: 'showDots', type: 'boolean', defaultValue: true },
    { name: 'showArrows', type: 'boolean', defaultValue: true },

    /* --------------------
       DOT STYLE SETTINGS
    ---------------------*/
    {
      name: 'dotsColor',
      type: 'color',
      defaultValue: '#cccccc',
    },
    {
      name: 'dotsActiveColor',
      type: 'color',
      defaultValue: '#0E73C0',
    },
    {
      name: 'dotsSize',
      type: 'number',
      defaultValue: 10,
    },
    {
      name: 'dotsAlign',
      type: 'text',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center',
    },

    /* DESKTOP TYPOGRAPHY */
    { name: 'titleSize', type: 'string', defaultValue: '48px' },
    { name: 'titleWeight', type: 'string', defaultValue: '700' },
    { name: 'titleColor', type: 'color', defaultValue: '#000000' },
    { name: 'titleFamily', type: 'string', defaultValue: 'inherit' },

    { name: 'descriptionSize', type: 'string', defaultValue: '18px' },
    { name: 'descriptionWeight', type: 'string', defaultValue: '400' },
    { name: 'descriptionColor', type: 'color', defaultValue: '#666666' },
    { name: 'descriptionFamily', type: 'string', defaultValue: 'inherit' },

    /* Button 1 */
    { name: 'btn1TextColor', type: 'color', defaultValue: '#ffffff' },
    { name: 'btn1BgColor', type: 'color', defaultValue: '#007bff' },
    { name: 'btn1BorderColor', type: 'color', defaultValue: '#007bff' },
    { name: 'btn1FontSize', type: 'string', defaultValue: '15px' },
    { name: 'btn1FontWeight', type: 'string', defaultValue: '500' },
    { name: 'btn1Radius', type: 'string', defaultValue: '30px' },

    /* Button 2 */
    { name: 'btn2TextColor', type: 'color', defaultValue: '#007bff' },
    { name: 'btn2BgColor', type: 'color', defaultValue: 'transparent' },
    { name: 'btn2BorderColor', type: 'color', defaultValue: '#007bff' },
    { name: 'btn2FontSize', type: 'string', defaultValue: '15px' },
    { name: 'btn2FontWeight', type: 'string', defaultValue: '500' },
    { name: 'btn2Radius', type: 'string', defaultValue: '30px' },

    /* MOBILE TYPOGRAPHY */
    { name: 'titleSizeMobile', type: 'string', defaultValue: '28px' },
    { name: 'descriptionSizeMobile', type: 'string', defaultValue: '15px' },
    { name: 'btn1FontSizeMobile', type: 'string', defaultValue: '14px' },
    { name: 'btn2FontSizeMobile', type: 'string', defaultValue: '14px' },

    /* IMAGE */
    { name: 'imageWidth', type: 'string', defaultValue: '420px' },
    { name: 'imageHeight', type: 'string', defaultValue: '420px' },
  ],
});

Builder.registerComponent(ServicesTab, {
  name: 'Services Tab',
  inputs: [
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string', required: true },

        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
        },

        {
          name: 'heading',
          type: 'richText',
        },

        {
          name: 'description',
          type: 'richText',
        },

        { name: 'buttonText', type: 'string' },
      ],
    },

    //ALL TYPOGRAPHY MUST BE INSIDE "styles" OBJECT
    {
      name: 'tabTitleTypography',
      type: 'css',
    },
    {
      name: 'headingTypography',
      type: 'css',
    },
    {
      name: 'descriptionTypography',
      type: 'css',
    },
    {
      name: 'buttonTypography',
      type: 'css',
    },
  ],
});

Builder.registerComponent(TechnologySlider, {
  name: 'Technology Slider',
  inputs: [
    {
      name: 'slides',
      type: 'list',
      required: true,
      helperText:
        'Add one or more slides with icon, title, description, and link.',
      subFields: [
        {
          name: 'icon',
          type: 'file',
          helperText: 'Upload an icon image (SVG/PNG/JPG).',
        },
        {
          name: 'title',
          type: 'string',
          required: true,
          helperText: 'Enter the title text for the slide.',
        },
        {
          name: 'description',
          type: 'string',
          helperText: 'Enter a short description for the slide.',
        },
        {
          name: 'linkText',
          type: 'string',
          helperText: 'Text for the link button (optional).',
        },
        {
          name: 'linkUrl',
          type: 'string',
          helperText: 'URL for the link button (optional).',
        },
      ],
    },

    {
      name: 'cardStyle',
      type: 'object',
      helperText: 'Customize the card background, padding, and border radius.',
      subFields: [
        {
          name: 'background',
          type: 'string',
          defaultValue: '#f6fbff',
          helperText: 'Card background color.',
        },
        {
          name: 'padding',
          type: 'string',
          defaultValue: '30px 20px',
          helperText: 'Padding inside the card.',
        },
        {
          name: 'borderRadius',
          type: 'string',
          defaultValue: '12px',
          helperText: 'Rounded corners for the card.',
        },
      ],
    },

    {
      name: 'titleStyle',
      type: 'object',
      helperText: 'Customize the title font and color.',
      subFields: [
        { name: 'fontSize', type: 'string', helperText: 'Example: 20px' },
        {
          name: 'fontFamily',
          type: 'string',
          helperText: 'Example: Arial, sans-serif',
        },
        {
          name: 'fontWeight',
          type: 'string',
          helperText: 'Example: 400 (normal), 700 (bold)',
        },
        { name: 'lineHeight', type: 'string', helperText: 'Example: 1.5' },
        { name: 'color', type: 'string', helperText: 'Example: #333333' },
      ],
    },

    {
      name: 'descStyle',
      type: 'object',
      helperText: 'Customize the description text style.',
      subFields: [
        { name: 'fontSize', type: 'string', helperText: 'Example: 16px' },
        {
          name: 'fontFamily',
          type: 'string',
          helperText: 'Example: Arial, sans-serif',
        },
        { name: 'lineHeight', type: 'string', helperText: 'Example: 1.5' },
        { name: 'color', type: 'string', helperText: 'Example: #666666' },
        {
          name: 'charactor_limit',
          type: 'string',
          helperText: 'Enter a short description (max 100 characters).',
        },
      ],
    },

    {
      name: 'linkStyle',
      type: 'object',
      helperText: 'Customize the link text style.',
      subFields: [
        { name: 'fontSize', type: 'string', helperText: 'Example: 14px' },
        {
          name: 'fontFamily',
          type: 'string',
          helperText: 'Example: Arial, sans-serif',
        },
        { name: 'color', type: 'string', helperText: 'Example: #007bff' },
        {
          name: 'textDecoration',
          type: 'string',
          helperText: 'Example: underline or none',
        },
      ],
    },

    {
      name: 'imageWidth',
      type: 'string', // change from number to string
      defaultValue: '60px',
      helperText: 'Set the image width (px, %, auto, etc.)',
    },
    {
      name: 'imageHeight',
      type: 'string',
      defaultValue: 'auto',
      helperText: 'Set the image height (px, %, auto, etc.)',
    },

    {
      name: 'slidesPerView',
      type: 'number',
      defaultValue: 4,
      helperText: 'Number of slides visible per view.',
    },
    {
      name: 'spaceBetween',
      type: 'number',
      defaultValue: 24,
      helperText: 'Space (px) between slides.',
    },
    {
      name: 'arrowColor',
      type: 'string',
      defaultValue: '#000',
      helperText: 'Color of the navigation arrows.',
    },
  ],
});

