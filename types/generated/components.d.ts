import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContactInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_info_items';
  info: {
    description: 'Individual contact information block';
    displayName: 'Contact Info Item';
  };
  attributes: {
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    primaryText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryText: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    description: 'Content block with title, description, main image, and optional additional image';
    displayName: 'Content With Image';
  };
  attributes: {
    additionalImage: Schema.Attribute.Media<'images'>;
    additionalImageAlt: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    layout: Schema.Attribute.Enumeration<['image-left', 'image-right']> &
      Schema.Attribute.DefaultTo<'image-right'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_items';
  info: {
    description: 'Individual FAQ question and answer pair';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFeatureBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_blocks';
  info: {
    description: 'Feature with title, description and image';
    displayName: 'Feature Block';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_blocks_social_links';
  info: {
    description: 'Social media link component';
    displayName: 'Social Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksValueCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_value_cards';
  info: {
    description: 'Value card with image, title and description';
    displayName: 'Value Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: 'Hero banner with image and title';
    displayName: 'Hero Section';
  };
  attributes: {
    altText: Schema.Attribute.String & Schema.Attribute.Required;
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ABOUT US'>;
  };
}

export interface SectionsPhilosophySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_philosophy_sections';
  info: {
    description: 'Philosophy section with multiple content blocks and background color';
    displayName: 'Philosophy Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#F5F5F5'>;
    contentBlocks: Schema.Attribute.Component<
      'blocks.content-with-image',
      true
    >;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'OUR PHILOSOPHY'>;
  };
}

export interface SectionsStayConnectedSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_stay_connected_sections';
  info: {
    description: 'Stay connected section with social links';
    displayName: 'Stay Connected Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    socialLinks: Schema.Attribute.Component<'blocks.social-link', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'STAY CONNECTED'>;
  };
}

export interface SectionsStorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_story_sections';
  info: {
    description: 'Company story with rich text content';
    displayName: 'Story Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#331A14'>;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SectionsValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_values_sections';
  info: {
    description: 'Company values section with background color';
    displayName: 'Values Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#F9F9F9'>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'OUR VALUES'>;
    values: Schema.Attribute.Component<'blocks.value-card', true>;
  };
}

export interface SectionsWhyChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose_sections';
  info: {
    description: 'Why choose us section with feature blocks and background color';
    displayName: 'Why Choose Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    features: Schema.Attribute.Component<'blocks.feature-block', true>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'WHY CHOOSE GRANDROSE?'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO meta tags and structured data';
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact-info-item': BlocksContactInfoItem;
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.faq-item': BlocksFaqItem;
      'blocks.feature-block': BlocksFeatureBlock;
      'blocks.social-link': BlocksSocialLink;
      'blocks.value-card': BlocksValueCard;
      'sections.hero-section': SectionsHeroSection;
      'sections.philosophy-section': SectionsPhilosophySection;
      'sections.stay-connected-section': SectionsStayConnectedSection;
      'sections.story-section': SectionsStorySection;
      'sections.values-section': SectionsValuesSection;
      'sections.why-choose-section': SectionsWhyChooseSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
