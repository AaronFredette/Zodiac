import { Text, Field, withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type GlobalFooterProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const GlobalFooter = (props : GlobalFooterProps): JSX.Element => (
  <div className="container">
    <div className="row">
      <Text field={props.fields.heading} />
      <div className="col-md">
        <Placeholder name="footer-col1" rendering={props.rendering}/>
      </div>
      <div className="col-md">
        <Placeholder name="footer-col2" rendering={props.rendering}/>
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<GlobalFooterProps>(GlobalFooter);
