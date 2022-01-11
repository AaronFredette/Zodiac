import { Text, RichText, Field, withDatasourceCheck, Image, ImageField, LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';


type ImageCTAProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    content : Field<string>;
    link : LinkField;
    image : ImageField;
  };
};

const ImageCTA = (props: ImageCTAProps): JSX.Element => (
  <div>
  
      <Text tag="h2" className="display-4" field={props.fields.heading} />
      <RichText  field={props.fields.content} />
      <Image media={props.fields.image} />
      <br/>
      <Link field={props.fields.link}></Link>
  </div>
);

export default withDatasourceCheck()<ImageCTAProps>(ImageCTA);
