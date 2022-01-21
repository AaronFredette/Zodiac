import { Text, Field, Item, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type TitledLinkListProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    contentLinks : Item[]
  };
};

const TitledLinkList = (props: TitledLinkListProps): JSX.Element => (
  <div>
    <Text field={props.fields.heading} tag="h3" />
    {props.fields.contentLinks &&
        props.fields.contentLinks.map((listItem, index) => (
          <div key={`sharedListItem-${index}`}>
            {/* The referenced item's fields can be rendered and edited using normal helper components: */}
            <p>
              <Text field={listItem.fields.pageTitle as Field<string>} />
            </p>
          </div>
        ))}
  </div>
);

export default withDatasourceCheck()<TitledLinkListProps>(TitledLinkList);
