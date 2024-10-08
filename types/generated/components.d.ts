import type { Struct, Schema } from '@strapi/strapi';

export interface CoreButton extends Struct.ComponentSchema {
  collectionName: 'components_core_buttons';
  info: {
    displayName: 'Button';
    icon: 'moon';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CoreBannerContent extends Struct.ComponentSchema {
  collectionName: 'components_core_banner_contents';
  info: {
    displayName: 'Banner Content';
    icon: 'dashboard';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text & Schema.Attribute.Required;
    cta_button: Schema.Attribute.Component<'core.button', false>;
    background_image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'core.button': CoreButton;
      'core.banner-content': CoreBannerContent;
    }
  }
}
