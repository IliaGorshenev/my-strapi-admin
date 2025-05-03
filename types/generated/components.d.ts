import type { Schema, Struct } from '@strapi/strapi';

export interface ServicesPriceListItem extends Struct.ComponentSchema {
  collectionName: 'components_services_price_list_items';
  info: {
    displayName: 'PriceListItem';
    icon: 'doctor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    unit: Schema.Attribute.String;
  };
}

export interface ServicesProcedureDetails extends Struct.ComponentSchema {
  collectionName: 'components_services_procedure_details';
  info: {
    displayName: 'ProcedureDetails';
    icon: 'connector';
  };
  attributes: {
    anesthesia_info: Schema.Attribute.String;
    course_recommendation: Schema.Attribute.String;
    duration_summary: Schema.Attribute.String;
    effect_summary: Schema.Attribute.String;
    frequency: Schema.Attribute.String;
    preparations_used: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'services.price-list-item': ServicesPriceListItem;
      'services.procedure-details': ServicesProcedureDetails;
    }
  }
}
