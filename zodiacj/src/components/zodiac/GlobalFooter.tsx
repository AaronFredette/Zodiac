import { Text, Field, withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type GlobalFooterProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    contactLinks: Field,
  };
};

const GlobalFooter = (props : GlobalFooterProps): JSX.Element => (
  <div>
    <p>GlobalFooter Component</p>
    <Text field={props.fields.heading} />
    <div>
      <Placeholder name="footer-col1" rendering={props.rendering}/>
    </div>
    <div>
      <Placeholder name="footer-col2" rendering={props.rendering}/>
    </div>
  </div>
);

export default withDatasourceCheck()<GlobalFooterProps>(GlobalFooter);
