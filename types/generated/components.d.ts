import type { Schema, Attribute } from '@strapi/strapi';

export interface MenusMenus extends Schema.Component {
  collectionName: 'components_menus_menus';
  info: {
    displayName: 'Menus';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Path: Attribute.String & Attribute.Required;
  };
}

export interface MissionsMissions extends Schema.Component {
  collectionName: 'components_missions_missions';
  info: {
    displayName: 'missions';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Icon: Attribute.Media;
    Icon2: Attribute.Media;
  };
}

export interface OpportunitiesOpportunities extends Schema.Component {
  collectionName: 'components_opportunities_opportunities';
  info: {
    displayName: 'Opportunities';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface ReviewsReviews extends Schema.Component {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    Avatar: Attribute.Media;
    Review: Attribute.Text;
    Name: Attribute.String;
    Position: Attribute.String;
  };
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'service';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    Name: Attribute.String;
    Path: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menus.menus': MenusMenus;
      'missions.missions': MissionsMissions;
      'opportunities.opportunities': OpportunitiesOpportunities;
      'reviews.reviews': ReviewsReviews;
      'service.service': ServiceService;
      'socials.socials': SocialsSocials;
    }
  }
}
