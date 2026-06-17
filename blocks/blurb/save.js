import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
  const { title, text, imageUrl, imageAlt } = attributes;
  const blockProps = useBlockProps.save( {
    className: 'blurb',
  } );

  return (
    <div { ...blockProps }>
      { imageUrl ? (
        <div className="blurb__image">
          <img src={ imageUrl } alt={ imageAlt || '' } />
        </div>
      ) : null }
      <div className="blurb__content-wrap">
        <RichText.Content
          tagName="h3"
          className="blurb__heading"
          value={ title }
        />
        <RichText.Content
          tagName="p"
          className="blurb__content"
          value={ text }
        />
      </div>
    </div>
  );
}
